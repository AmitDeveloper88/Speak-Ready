/** @param {string} speaker */
export function isUserSpeaker(speaker) {
  return /^you$/i.test((speaker || '').trim());
}

/** All lessons use a single conversation thread (chat UI). */
export function getLessonConversation(lesson) {
  const raw =
    lesson.conversation ||
    lesson.dialog ||
    legacyLinesAsConversation(lesson);

  if (!raw?.length) return [];

  return raw.map((turn) =>
    typeof turn === 'string'
      ? { speaker: 'Speaker', text: turn, hi: '' }
      : {
          speaker: turn.speaker || 'Speaker',
          text: turn.text,
          hi: turn.hi || turn.meaning || '',
          alternatives: turn.alternatives || [],
        }
  );
}

function legacyLinesAsConversation(lesson) {
  const lines = lesson.lines || lesson.sentences;
  if (!lines?.length) return [];
  return lines.map((text, i) => ({
    speaker: i % 2 === 0 ? 'Partner' : 'You',
    text,
  }));
}

export function getLessonItemCount(lesson) {
  return getLessonConversation(lesson).length;
}

export function getLessonItemLabel(lesson) {
  const n = getLessonItemCount(lesson);
  return `${n} message${n === 1 ? '' : 's'}`;
}
