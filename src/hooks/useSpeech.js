import { useCallback, useEffect, useRef } from 'react';
import {
  clearSpeechTimer,
  getPlayback,
  stopAllSpeech,
} from '../utils/stopAllSpeech';

const FEMALE_HINTS = [
  'samantha',
  'karen',
  'moira',
  'tessa',
  'fiona',
  'victoria',
  'kate',
  'serena',
  'allison',
  'ava',
  'susan',
  'zira',
  'jenny',
  'aria',
  'hazel',
  'sonia',
  'emily',
  'linda',
  'heather',
  'michelle',
  'female',
  'woman',
  'girl',
  'neural',
  'premium',
  'enhanced',
  'natural',
  'google us english',
  'google uk english',
];

const MALE_HINTS = [
  'david',
  'mark',
  'james',
  'daniel',
  'fred',
  'alex',
  'thomas',
  'richard',
  'george',
  'male',
  'man',
  'boy',
];

function scoreVoice(voice) {
  const lang = (voice.lang || '').toLowerCase();
  if (!lang.startsWith('en')) return -1000;

  const name = (voice.name || '').toLowerCase();
  let score = 0;

  if (lang === 'en-us') score += 40;
  else if (lang.startsWith('en')) score += 25;

  for (const hint of FEMALE_HINTS) {
    if (name.includes(hint)) score += 22;
  }

  for (const hint of MALE_HINTS) {
    if (name.includes(hint)) score -= 50;
  }

  if (name.includes('google')) score += 18;
  if (name.includes('apple') || name.includes('siri')) score += 12;
  if (voice.localService) score += 8;

  if (voice.default && score < 30) score -= 6;

  return score;
}

function pickVoice(all) {
  if (!all?.length) return null;

  const ranked = all
    .map((v) => ({ v, score: scoreVoice(v) }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score);

  if (ranked.length > 0) return ranked[0].v;

  const anyEn = all.find((v) => (v.lang || '').toLowerCase().startsWith('en'));
  return anyEn || all[0] || null;
}

function getVoices() {
  if (typeof window === 'undefined' || !window.speechSynthesis) return [];
  return window.speechSynthesis.getVoices();
}

export function useSpeech() {
  const voiceRef = useRef(null);
  const pb = getPlayback();

  const refreshVoice = useCallback(() => {
    const all = getVoices();
    if (all.length > 0) voiceRef.current = pickVoice(all);
    return all.length > 0;
  }, []);

  useEffect(() => {
    if (!window.speechSynthesis) return;

    refreshVoice();
    const onVoicesChanged = () => refreshVoice();
    window.speechSynthesis.addEventListener('voiceschanged', onVoicesChanged);

    const delays = [200, 600, 1200, 2500];
    const timers = delays.map((ms) => setTimeout(refreshVoice, ms));

    return () => {
      window.speechSynthesis.removeEventListener('voiceschanged', onVoicesChanged);
      timers.forEach(clearTimeout);
      stopAllSpeech();
    };
  }, [refreshVoice]);

  const speakUtterance = useCallback(
    (text, { rate, pitch, onEnd } = {}) => {
      if (!window.speechSynthesis || !text?.trim()) return;

      refreshVoice();

      const u = new SpeechSynthesisUtterance(text.trim());
      u.lang = voiceRef.current?.lang || 'en-US';
      u.rate = rate ?? pb.rate;
      u.pitch = pitch ?? pb.pitch;
      u.volume = 1;

      const voice = voiceRef.current || pickVoice(getVoices());
      if (voice) {
        u.voice = voice;
        u.lang = voice.lang || 'en-US';
      }

      const done = () => onEnd?.();
      u.onend = done;
      u.onerror = done;

      window.speechSynthesis.speak(u);
    },
    [pb, refreshVoice]
  );

  const finishSequence = useCallback(() => {
    const opts = pb.seqOptions;
    pb.mode = null;
    pb.paused = false;
    pb.seqOptions = null;
    clearSpeechTimer();
    opts?.onLine?.(-1);
    opts?.onEnd?.();
  }, [pb]);

  const runSequenceStep = useCallback(() => {
    if (pb.mode !== 'sequence' || pb.paused) return;

    const gen = pb.generation;

    if (pb.index >= pb.lines.length) {
      finishSequence();
      return;
    }

    pb.seqOptions?.onLine?.(pb.index);

    speakUtterance(pb.lines[pb.index], {
      rate: pb.seqOptions?.rate,
      pitch: pb.seqOptions?.pitch,
      onEnd: () => {
        if (pb.generation !== gen || pb.mode !== 'sequence' || pb.paused) return;

        pb.index += 1;

        if (pb.index >= pb.lines.length) {
          finishSequence();
          return;
        }

        clearSpeechTimer();
        pb.timerId = setTimeout(() => {
          pb.timerId = null;
          runSequenceStep();
        }, pb.gapMs);
      },
    });
  }, [finishSequence, pb, speakUtterance]);

  const speak = useCallback(
    (text, options = {}) => {
      if (!text?.trim()) return;

      stopAllSpeech();

      pb.mode = 'single';
      pb.paused = false;
      pb.singleText = text;
      pb.singleOptions = options;
      if (options.rate != null) pb.rate = options.rate;
      if (options.pitch != null) pb.pitch = options.pitch;

      speakUtterance(text, {
        rate: options.rate,
        pitch: options.pitch,
        onEnd: () => {
          if (pb.mode !== 'single') return;
          pb.mode = null;
          pb.singleText = null;
          options.onEnd?.();
        },
      });
    },
    [pb, speakUtterance]
  );

  const speakSequence = useCallback(
    (texts, options = {}) => {
      const lines = (texts || []).map((t) => t?.trim()).filter(Boolean);
      if (!lines.length || !window.speechSynthesis) return;

      stopAllSpeech();

      pb.mode = 'sequence';
      pb.paused = false;
      pb.lines = lines;
      pb.index = 0;
      pb.gapMs = options.gapMs ?? 500;
      pb.seqOptions = options;
      if (options.rate != null) pb.rate = options.rate;
      if (options.pitch != null) pb.pitch = options.pitch;

      runSequenceStep();
    },
    [pb, runSequenceStep]
  );

  const pause = useCallback(() => {
    if (!pb.mode || pb.paused) return false;

    pb.paused = true;
    clearSpeechTimer();

    const synth = window.speechSynthesis;
    if (synth?.speaking && !synth.paused) {
      try {
        synth.pause();
      } catch {
        /* unsupported */
      }
    }

    if (pb.mode === 'sequence' && synth && !synth.paused) {
      synth.cancel();
    }

    if (pb.mode === 'single' && synth && !synth.paused) {
      synth.cancel();
    }

    return true;
  }, [pb]);

  const resume = useCallback(() => {
    if (!pb.mode || !pb.paused) return false;

    pb.paused = false;
    const synth = window.speechSynthesis;

    if (synth?.paused) {
      try {
        synth.resume();
        return true;
      } catch {
        /* fall through */
      }
    }

    if (pb.mode === 'sequence') {
      runSequenceStep();
      return true;
    }

    if (pb.mode === 'single' && pb.singleText) {
      const opts = pb.singleOptions || {};
      speakUtterance(pb.singleText, {
        rate: opts.rate,
        pitch: opts.pitch,
        onEnd: () => {
          if (pb.mode !== 'single') return;
          pb.mode = null;
          pb.singleText = null;
          opts.onEnd?.();
        },
      });
      return true;
    }

    return false;
  }, [pb, runSequenceStep, speakUtterance]);

  const stop = useCallback(() => {
    stopAllSpeech();
  }, []);

  const isSupported =
    typeof window !== 'undefined' && !!window.speechSynthesis;

  return {
    speak,
    speakSequence,
    pause,
    resume,
    stop,
    isSupported,
  };
}
