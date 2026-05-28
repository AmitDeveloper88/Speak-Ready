const playback = {
  generation: 0,
  mode: null,
  paused: false,
  lines: [],
  index: 0,
  gapMs: 500,
  seqOptions: null,
  timerId: null,
  singleText: null,
  singleOptions: null,
  rate: 0.92,
  pitch: 1.02,
};

export function getPlayback() {
  return playback;
}

export function clearSpeechTimer() {
  if (playback.timerId) {
    clearTimeout(playback.timerId);
    playback.timerId = null;
  }
}

/** Stops audio immediately — safe to call from back button or unmount. */
export function stopAllSpeech() {
  playback.generation += 1;
  playback.mode = null;
  playback.paused = false;
  playback.seqOptions = null;
  playback.singleText = null;
  playback.singleOptions = null;
  clearSpeechTimer();

  if (typeof window !== 'undefined' && window.speechSynthesis) {
    window.speechSynthesis.cancel();
  }
}
