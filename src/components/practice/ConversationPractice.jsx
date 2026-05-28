import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useSpeech } from '../../hooks/useSpeech';
import { useSpeechRecognition } from '../../hooks/useSpeechRecognition';
import {
  getLessonConversation,
  isUserSpeaker,
} from '../../utils/lessonContent';
import { stopAllSpeech } from '../../utils/stopAllSpeech';
import Icon from '../ui/Icon';

const PLAYBACK_SPEEDS = [0.75, 1, 1.25];
const SPEED_STORAGE_KEY = 'speakready-playback-rate';

function speakerInitial(speaker) {
  return (speaker || '?').charAt(0).toUpperCase();
}

function readStoredSpeed() {
  const raw = localStorage.getItem(SPEED_STORAGE_KEY);
  const n = raw ? parseFloat(raw) : 1;
  return PLAYBACK_SPEEDS.includes(n) ? n : 1;
}

function LinePracticeFeedback({ feedback, className = '' }) {
  if (!feedback) return null;
  const pct = Math.round((feedback.score ?? 0) * 100);

  return (
    <div className={`text-xs ${className}`}>
      <p className={`font-semibold ${feedback.ok ? 'text-brand' : 'text-amber-300'}`}>
        {feedback.ok ? 'Close enough!' : 'Try again'}
        <span className="font-normal text-white/50"> · {pct}% match</span>
      </p>
      {feedback.expected && (
        <p className="mt-1 text-white/55">
          Target: “{feedback.expected}”
        </p>
      )}
      {feedback.transcript ? (
        <p className="mt-0.5 text-white/80">
          You said: “{feedback.transcript}”
        </p>
      ) : (
        <p className="mt-0.5 text-white/50">Kuch sunai nahi diya.</p>
      )}
    </div>
  );
}

function recognitionErrorMessage(code) {
  switch (code) {
    case 'not-allowed':
      return 'Mic permission chahiye — browser settings se allow karo.';
    case 'no-speech':
      return 'Sunai nahi diya — tap karo, poora sentence bolo, phir dubara tap karke band karo.';
    case 'network':
      return 'Speech service busy — 2 second ruko, phir dubara tap karo (Chrome use karo).';
    case 'audio-capture':
      return 'Mic nahi mila — koi aur app mic use to nahi kar rahi?';
    case 'service-not-allowed':
      return 'Is browser me speech check allowed nahi — Chrome ya Safari try karo.';
    case 'failed-to-start':
      return 'Mic start nahi ho paya — 1 second ruko, phir dubara tap karo.';
    default:
      return 'Phir se try karo — clear aur paas se bolo.';
  }
}

const themes = {
  shadow: {
    playBtn: 'btn-primary shrink-0',
    secondaryBtn: 'btn-secondary shrink-0 w-auto px-3',
    userBubble: 'rounded-2xl bg-brand-soft-2 text-white',
    userAvatar: 'bg-brand-soft text-brand',
    userLabel: 'text-brand',
    userHiBorder: 'border-white/12',
    userHiText: 'text-white',
    playAllLabel: 'Play conversation',
    pauseLabel: 'Pause',
    resumeLabel: 'Resume',
  },
};

/** @typedef {'idle' | 'playing' | 'paused'} PlaybackState */

export default function ConversationPractice({ lesson, variant = 'shadow' }) {
  const theme = themes[variant] || themes.shadow;
  const { speak, speakSequence, pause, resume, stop } = useSpeech();
  const {
    isSupported: micSupported,
    isListening,
    isPreparing,
    interimTranscript,
    error: micError,
    start: startListening,
    finish: finishListening,
    stop: stopListening,
    warmup: warmupMic,
  } = useSpeechRecognition();

  const turns = getLessonConversation(lesson);

  const [activeIndex, setActiveIndex] = useState(null);
  const [playback, setPlayback] = useState('idle');
  const [playbackRate, setPlaybackRate] = useState(readStoredSpeed);
  const [speakTargetIndex, setSpeakTargetIndex] = useState(0);
  const [lineFeedback, setLineFeedback] = useState(null);
  const feedbackLineRef = useRef(null);
  const [isCheckingMic, setIsCheckingMic] = useState(false);

  useEffect(() => {
    localStorage.setItem(SPEED_STORAGE_KEY, String(playbackRate));
  }, [playbackRate]);

  useEffect(() => {
    if (!lineFeedback) return;
    feedbackLineRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, [lineFeedback]);

  useEffect(() => {
    warmupMic();
    return () => stopListening();
  }, [stopListening, warmupMic]);

  const speechOpts = useMemo(
    () => ({ rate: playbackRate }),
    [playbackRate]
  );

  const startConversation = useCallback(() => {
    setPlayback('playing');
    speakSequence(
      turns.map((t) => t.text),
      {
        ...speechOpts,
        gapMs: variant === 'shadow' ? 700 : 550,
        onLine: (idx) => setActiveIndex(idx >= 0 ? idx : null),
        onEnd: () => {
          setPlayback('idle');
          setActiveIndex(null);
        },
      }
    );
  }, [speakSequence, speechOpts, turns, variant]);

  const handleMainControl = () => {
    if (playback === 'playing') {
      pause();
      setPlayback('paused');
      return;
    }

    if (playback === 'paused') {
      resume();
      setPlayback('playing');
      return;
    }

    startConversation();
  };

  const handleRestart = () => {
    stop();
    setActiveIndex(null);
    startConversation();
  };

  const handlePlayLine = (idx) => {
    stop();
    setPlayback('idle');
    setActiveIndex(idx);
    setSpeakTargetIndex(idx);
    speak(turns[idx].text, {
      ...speechOpts,
      onEnd: () => setActiveIndex(null),
    });
  };

  const handleSelectPracticeLine = (idx) => {
    setIsCheckingMic(false);
    stopListening();
    setSpeakTargetIndex(idx);
    setLineFeedback(null);
  };

  const handleTryAgain = () => {
    setIsCheckingMic(false);
    stopListening();
    setLineFeedback(null);
  };

  const handleNextLine = () => {
    if (speakTargetIndex < turns.length - 1) {
      setIsCheckingMic(false);
      stopListening();
      setSpeakTargetIndex(speakTargetIndex + 1);
      setLineFeedback(null);
    }
  };

  useEffect(() => {
    if (micError) setIsCheckingMic(false);
  }, [micError]);

  useEffect(() => {
    if (!isCheckingMic) return undefined;
    const t = window.setTimeout(() => setIsCheckingMic(false), 10000);
    return () => window.clearTimeout(t);
  }, [isCheckingMic]);

  const settleMicSession = useCallback(() => {
    setIsCheckingMic(false);
  }, []);

  const onListenResult = useCallback(
    (result) => {
      const expected = turns[speakTargetIndex]?.text;
      setLineFeedback({
        idx: speakTargetIndex,
        expected,
        ...result,
      });
    },
    [speakTargetIndex, turns]
  );

  const handleMicTap = () => {
    if (speakTargetIndex == null || !micSupported || isCheckingMic) return;

    if (isListening || isPreparing) {
      setIsCheckingMic(true);
      finishListening();
      return;
    }

    const expected = turns[speakTargetIndex]?.text;
    if (!expected) return;

    stopAllSpeech();
    setPlayback('idle');
    setLineFeedback(null);
    setIsCheckingMic(false);

    startListening(expected, onListenResult, {
      hold: true,
      onSettled: settleMicSession,
    });
  };

  const targetTurn =
    speakTargetIndex != null ? turns[speakTargetIndex] : null;
  return (
    <div className="flex min-h-0 flex-1 flex-col gap-2 overflow-hidden">
      <div className="flex shrink-0 items-stretch gap-1.5">
        <button
          type="button"
          onClick={handleMainControl}
          className={`${theme.playBtn} min-w-0 flex-1`}
        >
          {playback === 'playing' ? (
            <>
              <Icon name="pause" className="h-4 w-4" />
              {theme.pauseLabel}
            </>
          ) : playback === 'paused' ? (
            <>
              <Icon name="play" className="h-4 w-4" />
              {theme.resumeLabel}
            </>
          ) : (
            <>
              <Icon name="play" className="h-4 w-4" />
              {theme.playAllLabel}
            </>
          )}
        </button>

        <div
          className="flex shrink-0 items-center rounded-xl bg-white/6 p-0.5"
          role="group"
          aria-label="Playback speed"
        >
          {PLAYBACK_SPEEDS.map((speed) => {
            const active = playbackRate === speed;
            return (
              <button
                key={speed}
                type="button"
                onClick={() => setPlaybackRate(speed)}
                className={`rounded-lg px-2.5 py-2 text-xs font-semibold transition ${
                  active
                    ? 'bg-brand-soft-2 text-white'
                    : 'text-white/55 hover:text-white/80'
                }`}
              >
                {speed}x
              </button>
            );
          })}
        </div>

        {playback === 'paused' && (
          <button
            type="button"
            onClick={handleRestart}
            className={theme.secondaryBtn}
            aria-label="Restart from beginning"
            title="Start over"
          >
            <Icon name="repeat" className="h-4 w-4" />
          </button>
        )}
      </div>

      <div className="chat-scroll card min-h-0 flex-1 overflow-x-hidden overflow-y-auto p-2.5 sm:p-3">
        <div className="space-y-2">
          {turns.map((turn, idx) => {
            const isUser = isUserSpeaker(turn.speaker);
            const isActive = activeIndex === idx;
            const isSpeakTarget = speakTargetIndex === idx;

            return (
              <div
                key={idx}
                ref={isSpeakTarget ? feedbackLineRef : null}
                className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`w-full max-w-[94%] sm:max-w-[90%] ${
                    isUser ? 'flex flex-col items-end' : ''
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => handlePlayLine(idx)}
                    className={`w-full rounded-xl px-3 py-2 text-left transition ${
                      isUser
                        ? theme.userBubble
                        : 'rounded-2xl bg-white/6 text-white/90'
                    } ${
                      isActive || isSpeakTarget
                        ? 'brightness-[1.04]'
                        : 'active:scale-[0.99] hover:brightness-[1.02]'
                    }`}
                  >
                    <div
                      className={`mb-1 flex items-center gap-1.5 ${
                        isUser ? 'justify-end' : 'justify-start'
                      }`}
                    >
                      <span
                        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[9px] font-bold sm:h-6 sm:w-6 sm:text-[10px] ${
                          isUser
                            ? theme.userAvatar
                            : 'bg-white/10 text-white/70'
                        }`}
                      >
                        {speakerInitial(turn.speaker)}
                      </span>
                      <span
                        className={`text-[10px] font-semibold uppercase tracking-wide sm:text-[11px] ${
                          isUser ? theme.userLabel : 'text-white/55'
                        }`}
                      >
                        {turn.speaker}
                      </span>
                    </div>
                    <p
                      className={`text-[13px] leading-snug sm:text-sm ${
                        isUser ? 'text-white' : 'text-white/90'
                      }`}
                    >
                      {turn.text}
                    </p>
                    {turn.hi && (
                      <p
                        className={`hi-text mt-1.5 border-t pt-1.5 text-[13px] leading-snug sm:text-sm ${
                          isUser
                            ? `${theme.userHiBorder} ${theme.userHiText}`
                            : 'border-white/12 text-white/90'
                        }`}
                      >
                        {turn.hi}
                      </p>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={() => handleSelectPracticeLine(idx)}
                    className={`mt-1 text-[10px] font-medium transition ${
                      isUser ? '' : 'block'
                    } ${
                      isSpeakTarget
                        ? 'text-brand'
                        : 'text-white/45 hover:text-white/70'
                    } ${isUser ? 'text-right' : 'text-left'}`}
                  >
                    {isSpeakTarget ? '● Practice this line' : 'Practice this line'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="shrink-0 pt-1">
        {micSupported ? (
          <>
            <div className="mb-2 min-h-[3.5rem] rounded-xl bg-white/6 px-3 py-2">
              {lineFeedback && !isListening && !isCheckingMic ? (
                <>
                  <LinePracticeFeedback
                    feedback={lineFeedback}
                    className="text-center"
                  />
                  <div className="mt-2 flex gap-2">
                    <button
                      type="button"
                      onClick={handleTryAgain}
                      className="btn-secondary min-w-0 flex-1 py-2 text-xs"
                    >
                      Try again
                    </button>
                    {lineFeedback.ok && speakTargetIndex < turns.length - 1 && (
                      <button
                        type="button"
                        onClick={handleNextLine}
                        className="btn-primary min-w-0 flex-1 py-2 text-xs"
                      >
                        Next line →
                      </button>
                    )}
                  </div>
                </>
              ) : (
                <>
                  {targetTurn && (
                    <p className="text-center text-xs text-white/55">
                      <span className="text-white/40">Target: </span>
                      “{targetTurn.text}”
                    </p>
                  )}
                  {isListening && interimTranscript && (
                    <p className="mt-1 text-center text-sm text-white/85">
                      <span className="text-brand">Hearing: </span>
                      “{interimTranscript}”
                    </p>
                  )}
                  {micError && !isListening && (
                    <p className="mt-1 text-center text-xs text-amber-300">
                      {recognitionErrorMessage(micError)}
                    </p>
                  )}
                </>
              )}
            </div>

            <div className="flex flex-col items-center gap-2">
              <button
                type="button"
                disabled={speakTargetIndex == null || isCheckingMic}
                onClick={handleMicTap}
                className={`mic-btn flex h-14 w-14 items-center justify-center rounded-full text-[#06221d] shadow-lg transition disabled:opacity-40 ${
                  isListening || isPreparing
                    ? 'mic-btn-active scale-105'
                    : isCheckingMic
                      ? 'opacity-80'
                      : 'active:scale-95'
                }`}
                aria-label="Tap to speak"
              >
                <Icon name="mic" className="h-6 w-6" />
              </button>
              <p className="text-xs font-medium text-white/70">
                {isPreparing
                  ? 'Mic on ho raha hai…'
                  : isListening
                    ? 'Bolo… ho gaya to dubara tap karo'
                    : isCheckingMic
                      ? 'Checking…'
                      : 'Tap to speak'}
              </p>
            </div>
          </>
        ) : (
          <p className="py-2 text-center text-xs text-white/50">
            Speech check is not supported in this browser. Use Chrome on Android
            or Safari on iPhone.
          </p>
        )}
      </div>
    </div>
  );
}
