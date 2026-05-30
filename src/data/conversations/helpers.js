/** @typedef {{ text: string, hi?: string }} AltPhrase */
/** @typedef {{ speaker: string, text: string, hi: string, alternatives?: AltPhrase[] }} ConversationTurn */

/** @param {string} topicId @param {string} topicTitle @param {string} id @param {string} title @param {ConversationTurn[]} turns */
export function lesson(topicId, topicTitle, id, title, turns) {
  const key = `${topicId}/${id}`;
  return [
    key,
    { id, title, topicId, topicTitle, turns },
  ];
}

/** @param {'Person' | 'You'} speaker @param {string} text @param {string} hi @param {AltPhrase[]} alternatives */
export function turn(speaker, text, hi, alternatives) {
  return { speaker, text, hi, alternatives };
}

/** @param {Array<[string, string]>} pairs */
export function alts(...pairs) {
  return pairs.map(([text, hi]) => ({ text, hi }));
}
