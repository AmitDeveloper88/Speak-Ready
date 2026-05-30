/** @typedef {{ text: string, hi?: string }} AltPhrase */
/** @typedef {{ speaker: string, text: string, hi: string, alternatives?: AltPhrase[] }} ConversationTurn */
/** @typedef {{ id: string, title: string, topicId: string, topicTitle: string, turns: ConversationTurn[] }} SituationConversation */

import { level1Conversations } from './conversations/level1/index.js';
import { level2Conversations } from './conversations/level2/index.js';
import { level3Conversations } from './conversations/level3/index.js';
import { level4Conversations } from './conversations/level4/index.js';
import { level5Conversations } from './conversations/level5/index.js';
import { level6Conversations } from './conversations/level6/index.js';
import { level7Conversations } from './conversations/level7/index.js';
import { level8Conversations } from './conversations/level8/index.js';

/** @type {Record<string, SituationConversation>} */
export const situationConversations = {
  ...level1Conversations,
  ...level2Conversations,
  ...level3Conversations,
  ...level4Conversations,
  ...level5Conversations,
  ...level6Conversations,
  ...level7Conversations,
  ...level8Conversations,
};

/** @param {string} topicId @param {string} situationId */
export function getSituationConversation(topicId, situationId) {
  return situationConversations[`${topicId}/${situationId}`] ?? null;
}
