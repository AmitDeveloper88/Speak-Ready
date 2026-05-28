import { useCallback, useRef, useState } from 'react';
import { scoreSpeechMatch } from '../utils/matchSpeech';

/** Chrome needs ~300ms between stop() and the next start() or it throws network / no-speech. */
const MIN_RESTART_MS = 320;
const START_RETRY_MS = 550;
const NETWORK_BACKOFF_MS = [700, 1400];

function getRecognitionCtor() {
  if (typeof window === 'undefined') return null;
  return window.SpeechRecognition || window.webkitSpeechRecognition || null;
}

let micReadyPromise = null;
let sharedRecognition = null;
/** Serializes stop → cool-down → start (free Chrome STT is single-flight). */
let engineChain = Promise.resolve();
let engineCoolingUntil = 0;
let engineListening = false;

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function getSharedRecognition() {
  const Ctor = getRecognitionCtor();
  if (!Ctor) return null;
  if (!sharedRecognition) {
    sharedRecognition = new Ctor();
    sharedRecognition.lang = 'en-US';
    sharedRecognition.interimResults = true;
    sharedRecognition.continuous = false;
    sharedRecognition.maxAlternatives = 1;
  }
  return sharedRecognition;
}

export function warmupSpeechRecognition() {
  if (!getRecognitionCtor()) return Promise.resolve(false);
  return ensureMicReady();
}

function ensureMicReady() {
  if (!navigator.mediaDevices?.getUserMedia) return Promise.resolve(true);
  if (!micReadyPromise) {
    micReadyPromise = navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        stream.getTracks().forEach((t) => t.stop());
        return true;
      })
      .catch(() => false);
  }
  return micReadyPromise;
}

function waitEngineGap() {
  const gap = Math.max(0, engineCoolingUntil - Date.now());
  return gap ? sleep(gap) : Promise.resolve();
}

function stopSharedEngine() {
  const recognition = getSharedRecognition();
  if (!recognition || !engineListening) {
    return waitEngineGap();
  }

  return new Promise((resolve) => {
    let settled = false;
    const done = () => {
      if (settled) return;
      settled = true;
      engineListening = false;
      engineCoolingUntil = Date.now() + MIN_RESTART_MS;
      setTimeout(resolve, MIN_RESTART_MS);
    };

    recognition.onend = done;
    recognition.onerror = (event) => {
      if (event.error === 'aborted') done();
    };

    try {
      recognition.stop();
    } catch {
      done();
    }

    window.setTimeout(done, 1200);
  });
}

function enqueueEngine(task) {
  const run = engineChain.then(task);
  engineChain = run.catch(() => {});
  return run;
}

export function useSpeechRecognition() {
  const expectedRef = useRef('');
  const onResultRef = useRef(null);
  const accumulatedRef = useRef('');
  const sessionIdRef = useRef(0);
  const deliveredRef = useRef(false);
  const retryCountRef = useRef(0);
  const safetyTimerRef = useRef(null);
  const finishWatchdogRef = useRef(null);
  const interimRafRef = useRef(null);
  const skipNextEndRef = useRef(false);
  const settleCallbacksRef = useRef(new Map());
  const activeSessionRef = useRef(0);
  const runSessionRef = useRef(null);
  /** Hold-to-speak: result only after user releases (finish), not on silence auto-stop. */
  const holdActiveRef = useRef(false);
  const releaseRequestedRef = useRef(false);

  const [isListening, setIsListening] = useState(false);
  const [isPreparing, setIsPreparing] = useState(false);
  const [interimTranscript, setInterimTranscript] = useState('');
  const [error, setError] = useState(null);
  const [lastResult, setLastResult] = useState(null);

  const isSupported = !!getRecognitionCtor();

  const clearTimers = useCallback(() => {
    if (safetyTimerRef.current) {
      clearTimeout(safetyTimerRef.current);
      safetyTimerRef.current = null;
    }
    if (finishWatchdogRef.current) {
      clearTimeout(finishWatchdogRef.current);
      finishWatchdogRef.current = null;
    }
    if (interimRafRef.current) {
      cancelAnimationFrame(interimRafRef.current);
      interimRafRef.current = null;
    }
  }, []);

  const notifySettled = useCallback((sessionId) => {
    const settle = settleCallbacksRef.current.get(sessionId);
    if (settle) {
      settleCallbacksRef.current.delete(sessionId);
      settle();
    }
  }, []);

  const pushInterim = useCallback((text) => {
    accumulatedRef.current = text;
    if (interimRafRef.current) return;
    interimRafRef.current = requestAnimationFrame(() => {
      interimRafRef.current = null;
      setInterimTranscript(text);
    });
  }, []);

  const failSession = useCallback(
    (sessionId, code) => {
      if (sessionId !== sessionIdRef.current) {
        notifySettled(sessionId);
        return;
      }
      deliveredRef.current = true;
      holdActiveRef.current = false;
      releaseRequestedRef.current = false;
      clearTimers();
      setIsListening(false);
      setIsPreparing(false);
      setError(code);
      enqueueEngine(() => stopSharedEngine()).finally(() =>
        notifySettled(sessionId)
      );
    },
    [clearTimers, notifySettled]
  );

  const deliverResult = useCallback(
    (transcript, sessionId) => {
      if (deliveredRef.current) {
        notifySettled(sessionId);
        return;
      }
      if (sessionId !== sessionIdRef.current) {
        notifySettled(sessionId);
        return;
      }

      deliveredRef.current = true;
      holdActiveRef.current = false;
      releaseRequestedRef.current = false;
      clearTimers();
      setIsListening(false);
      setIsPreparing(false);
      setError(null);

      const expected = expectedRef.current;
      const text = transcript.trim();

      enqueueEngine(() => stopSharedEngine()).then(() => {
        if (sessionId !== sessionIdRef.current) {
          notifySettled(sessionId);
          return;
        }

        if (!text) {
          setError('no-speech');
          notifySettled(sessionId);
          return;
        }

        const { score, ok } = scoreSpeechMatch(expected, text);
        const result = { transcript: text, score, ok, expected };
        setLastResult(result);
        setInterimTranscript(text);
        onResultRef.current?.(result);
        notifySettled(sessionId);
      });
    },
    [clearTimers, notifySettled]
  );

  const bindHandlers = useCallback(
    (recognition, sessionId, expectedText) => {
      recognition.onstart = () => {
        if (sessionId !== activeSessionRef.current) return;
        engineListening = true;
        setIsPreparing(false);
        setIsListening(true);
        setError(null);
      };

      recognition.onresult = (event) => {
        if (sessionId !== activeSessionRef.current) return;

        let full = '';
        for (let i = 0; i < event.results.length; i++) {
          full += event.results[i][0]?.transcript || '';
        }

        const text = full.trim();
        if (text) pushInterim(text);
      };

      recognition.onerror = (event) => {
        if (sessionId !== activeSessionRef.current) return;

        const code = event.error || 'recognition-failed';
        if (code === 'aborted') return;

        const heard = accumulatedRef.current.trim();
        if (heard && releaseRequestedRef.current) {
          deliverResult(heard, sessionId);
          return;
        }
        if (heard && holdActiveRef.current) return;

        const canRetry =
          (code === 'network' || code === 'no-speech' || code === 'failed-to-start') &&
          retryCountRef.current < 2;

        if (canRetry) {
          retryCountRef.current += 1;
          skipNextEndRef.current = true;
          const backoff =
            code === 'network'
              ? NETWORK_BACKOFF_MS[retryCountRef.current - 1] ?? 1400
              : START_RETRY_MS;

          enqueueEngine(async () => {
            await stopSharedEngine();
            if (sessionId !== sessionIdRef.current) return;
            await sleep(backoff);
            if (sessionId === sessionIdRef.current) {
              runSessionRef.current?.(expectedText, sessionId);
            }
          });
          return;
        }

        failSession(sessionId, code);
      };

      recognition.onend = () => {
        if (sessionId !== activeSessionRef.current) return;

        engineListening = false;
        clearTimers();

        if (skipNextEndRef.current) {
          skipNextEndRef.current = false;
          return;
        }

        // Browser auto-stops on pause (continuous:false) — keep mic open while finger held.
        if (holdActiveRef.current && !releaseRequestedRef.current) {
          window.setTimeout(() => {
            if (
              releaseRequestedRef.current ||
              sessionId !== activeSessionRef.current ||
              deliveredRef.current
            ) {
              return;
            }
            try {
              recognition.start();
              engineListening = true;
            } catch {
              /* start() may throw if too soon — one retry */
              window.setTimeout(() => {
                if (
                  releaseRequestedRef.current ||
                  sessionId !== activeSessionRef.current
                ) {
                  return;
                }
                try {
                  recognition.start();
                  engineListening = true;
                } catch {
                  /* ignore */
                }
              }, START_RETRY_MS);
            }
          }, MIN_RESTART_MS);
          return;
        }

        engineCoolingUntil = Date.now() + MIN_RESTART_MS;

        if (!deliveredRef.current) {
          const heard = accumulatedRef.current.trim();
          if (heard) {
            deliverResult(heard, sessionId);
          } else {
            failSession(sessionId, 'no-speech');
          }
        }
      };
    },
    [clearTimers, deliverResult, failSession, pushInterim]
  );

  const runSession = useCallback(
    async (expectedText, sessionId) => {
      if (sessionId !== sessionIdRef.current) {
        notifySettled(sessionId);
        return;
      }

      const recognition = getSharedRecognition();
      if (!recognition || !expectedText?.trim()) {
        failSession(sessionId, 'failed-to-start');
        return;
      }

      await stopSharedEngine();

      if (sessionId !== sessionIdRef.current) {
        notifySettled(sessionId);
        return;
      }

      deliveredRef.current = false;
      accumulatedRef.current = '';
      setInterimTranscript('');

      const micOk = await ensureMicReady();
      if (sessionId !== sessionIdRef.current) {
        notifySettled(sessionId);
        return;
      }

      if (!micOk) {
        failSession(sessionId, 'not-allowed');
        return;
      }

      activeSessionRef.current = sessionId;
      recognition.continuous = holdActiveRef.current;
      bindHandlers(recognition, sessionId, expectedText);

      const tryStart = () => {
        try {
          recognition.start();
          engineListening = true;
          safetyTimerRef.current = setTimeout(() => {
            safetyTimerRef.current = null;
            if (deliveredRef.current || sessionId !== sessionIdRef.current) return;
            try {
              recognition.stop();
            } catch {
              /* ignore */
            }
          }, 45000);
          return true;
        } catch {
          return false;
        }
      };

      if (!tryStart()) {
        await sleep(START_RETRY_MS);
        if (sessionId !== sessionIdRef.current) {
          notifySettled(sessionId);
          return;
        }
        if (!tryStart()) {
          if (retryCountRef.current < 2) {
            retryCountRef.current += 1;
            await sleep(START_RETRY_MS);
            if (sessionId === sessionIdRef.current) {
              runSessionRef.current?.(expectedText, sessionId);
            }
            return;
          }
          failSession(sessionId, 'failed-to-start');
        }
      }
    },
    [bindHandlers, failSession, notifySettled]
  );

  runSessionRef.current = runSession;

  const stop = useCallback(() => {
    const endingId = sessionIdRef.current;
    sessionIdRef.current += 1;
    activeSessionRef.current = 0;
    holdActiveRef.current = false;
    releaseRequestedRef.current = false;
    retryCountRef.current = 0;
    clearTimers();
    setInterimTranscript('');
    setError(null);
    setIsListening(false);
    setIsPreparing(false);
    enqueueEngine(() => stopSharedEngine()).finally(() => notifySettled(endingId));
  }, [clearTimers, notifySettled]);

  const scheduleFinishWatchdog = useCallback(
    (sessionId) => {
      if (finishWatchdogRef.current) {
        clearTimeout(finishWatchdogRef.current);
      }
      finishWatchdogRef.current = setTimeout(() => {
        finishWatchdogRef.current = null;
        if (deliveredRef.current || sessionId !== sessionIdRef.current) return;
        const heard = accumulatedRef.current.trim();
        if (heard) {
          deliverResult(heard, sessionId);
        } else {
          failSession(sessionId, 'no-speech');
        }
      }, 6000);
    },
    [deliverResult, failSession]
  );

  const finish = useCallback(() => {
    setIsListening(false);
    releaseRequestedRef.current = true;

    const sessionId = sessionIdRef.current;
    scheduleFinishWatchdog(sessionId);

    const recognition = getSharedRecognition();
    if (!recognition) {
      return;
    }

    if (!engineListening) {
      const heard = accumulatedRef.current.trim();
      if (heard) {
        deliverResult(heard, sessionId);
      } else {
        failSession(sessionId, 'no-speech');
      }
      return;
    }

    try {
      recognition.stop();
    } catch {
      failSession(sessionId, 'no-speech');
    }
  }, [deliverResult, failSession, scheduleFinishWatchdog]);

  const start = useCallback(
    (expectedText, onResult, options = {}) => {
      if (!expectedText?.trim() || !isSupported) return false;

      const sessionId = ++sessionIdRef.current;
      retryCountRef.current = 0;
      deliveredRef.current = false;
      holdActiveRef.current = !!options.hold;
      releaseRequestedRef.current = false;

      expectedRef.current = expectedText.trim();
      onResultRef.current = onResult || null;

      if (options.onSettled) {
        settleCallbacksRef.current.set(sessionId, options.onSettled);
      }

      setLastResult(null);
      setInterimTranscript('');
      setError(null);
      setIsPreparing(true);

      enqueueEngine(async () => {
        if (sessionId !== sessionIdRef.current) {
          setIsPreparing(false);
          notifySettled(sessionId);
          return;
        }
        await runSession(expectedText, sessionId);
      });

      return true;
    },
    [isSupported, notifySettled, runSession]
  );

  return {
    isSupported,
    isListening,
    isPreparing,
    interimTranscript,
    error,
    lastResult,
    start,
    finish,
    stop,
    warmup: warmupSpeechRecognition,
  };
}
