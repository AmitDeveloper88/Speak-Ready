import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useSpeech } from '../../hooks/useSpeech';
import { useSpeechRecognition } from '../../hooks/useSpeechRecognition';
import {
  getLessonConversation,
  isUserSpeaker,
} from '../../utils/lessonContent';
import { stopAllSpeech } from '../../utils/stopAllSpeech';
import ChatTurnBubble from './ChatTurnBubble';
import Icon from '../ui/Icon';

const PLAYBACK_SPEEDS = [0.75, 1, 1.25];
const SPEED_STORAGE_KEY = 'speakready-playback-rate';

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

function firstUserTurnIndex(turns) {
  const idx = turns.findIndex((t) => isUserSpeaker(t.speaker));
  return idx >= 0 ? idx : 0;
}

function nextUserTurnIndex(turns, fromIndex) {
  for (let i = fromIndex + 1; i < turns.length; i++) {
    if (isUserSpeaker(turns[i].speaker)) return i;
  }
  return -1;
}

export default function ConversationPractice({
  lesson,
  conversation: conversationProp,
  variant = 'shadow',
  showAlternatives = false,
  autoAdvanceOnSuccess = false,
}) {
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

  const turns = useMemo(() => {
    if (conversationProp?.length) {
      return conversationProp.map((turn) =>
        typeof turn === 'string'
          ? { speaker: 'Speaker', text: turn, hi: '', alternatives: [] }
          : {
              speaker: turn.speaker || 'Speaker',
              text: turn.text,
              hi: turn.hi || '',
              alternatives: turn.alternatives || [],
            }
      );
    }
    return lesson ? getLessonConversation(lesson) : [];
  }, [conversationProp, lesson]);

  const [activeIndex, setActiveIndex] = useState(null);
  const [playback, setPlayback] = useState('idle');
  const [playbackRate, setPlaybackRate] = useState(readStoredSpeed);
  const [speakTargetIndex, setSpeakTargetIndex] = useState(() =>
    firstUserTurnIndex(turns)
  );
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
    setSpeakTargetIndex(firstUserTurnIndex(turns));
    setLineFeedback(null);
  }, [turns]);

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

  const handlePlayText = (text, idx = null) => {
    stop();
    setPlayback('idle');
    if (idx != null) setActiveIndex(idx);
    speak(text, {
      ...speechOpts,
      onEnd: () => setActiveIndex(null),
    });
  };

  const handlePlayLine = (idx) => {
    setSpeakTargetIndex(idx);
    handlePlayText(turns[idx].text, idx);
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
      if (autoAdvanceOnSuccess && result.ok) {
        const next = nextUserTurnIndex(turns, speakTargetIndex);
        if (next >= 0) {
          setSpeakTargetIndex(next);
          setLineFeedback(null);
          return;
        }
      }
      setLineFeedback({
        idx: speakTargetIndex,
        expected,
        ...result,
      });
    },
    [autoAdvanceOnSuccess, speakTargetIndex, turns]
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
    <div className="flex min-h-0 flex-1 flex-col gap-3 overflow-hidden">
      <div
        className={`grid shrink-0 items-stretch gap-2 ${
          playback === 'paused'
            ? 'grid-cols-[minmax(0,1fr)_auto_auto]'
            : 'grid-cols-[minmax(0,1fr)_auto]'
        }`}
      >
        <button
          type="button"
          onClick={handleMainControl}
          className={`${theme.playBtn} !w-auto min-w-0`}
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
          className="flex w-[8.75rem] shrink-0 items-stretch gap-0.5 rounded-xl bg-white/[0.06] p-0.5"
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
                className={`speed-pill ${active ? 'speed-pill-active' : ''}`}
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
            className={`${theme.secondaryBtn} !w-auto shrink-0 px-3`}
            aria-label="Restart from beginning"
            title="Start over"
          >
            <Icon name="repeat" className="h-4 w-4" />
          </button>
        )}
      </div>

      <div className="chat-scroll min-h-0 flex-1 overflow-x-hidden overflow-y-auto rounded-2xl bg-[var(--chat-panel)]/40 px-2 py-3">
        <div className="flex flex-col gap-4 pb-2">
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
                <div className={isUser ? 'flex flex-col items-end' : ''}>
                  <ChatTurnBubble
                    turn={turn}
                    isUser={isUser}
                    partnerLabel="Person"
                    userLabel="You"
                    isActive={isActive}
                    isSelected={isSpeakTarget}
                    showAlternatives={showAlternatives}
                    onSelectPractice={() => handleSelectPracticeLine(idx)}
                    onPlayLine={() => handlePlayLine(idx)}
                    onPlayPhrase={(phrase) => handlePlayText(phrase, idx)}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="shrink-0 border-t border-white/8 pt-3">
        {micSupported ? (
          <>
            <div className="mb-3 min-h-[2.75rem] rounded-2xl bg-white/[0.05] px-3 py-2.5">
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
                    {!autoAdvanceOnSuccess &&
                      lineFeedback.ok &&
                      speakTargetIndex < turns.length - 1 && (
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
                    <p className="text-center text-[14px] font-medium leading-snug text-white/85">
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
                className={`mic-btn flex h-[4.25rem] w-[4.25rem] items-center justify-center rounded-full text-[#042a24] shadow-lg transition disabled:opacity-40 ${
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
