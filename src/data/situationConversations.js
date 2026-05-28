/** @typedef {{ speaker: string, text: string, hi: string, alternatives?: string[] }} ConversationTurn */
/** @typedef {{ id: string, title: string, topicId: string, topicTitle: string, turns: ConversationTurn[] }} SituationConversation */

/** @type {Record<string, SituationConversation>} */
export const situationConversations = {
  'meeting-first-time/saying-hello': {
    id: 'saying-hello',
    title: 'Saying Hello',
    topicId: 'meeting-first-time',
    topicTitle: 'Meeting Someone First Time',
    turns: [
      {
        speaker: 'Person',
        text: 'Hello! How are you?',
        hi: 'नमस्ते! आप कैसे हैं?',
        alternatives: [
          'Hi! How’s it going?',
          'Hey! Nice to meet you.',
          'Hello there!',
          'Hey! What’s up?',
        ],
      },
      {
        speaker: 'You',
        text: 'I’m good, thank you. How about you?',
        hi: 'मैं अच्छा हूँ, धन्यवाद। आप बताइए?',
        alternatives: [
          'I’m doing well.',
          'Pretty good.',
          'I’m fine, thanks.',
          'Doing great.',
        ],
      },
      {
        speaker: 'Person',
        text: 'Nice to meet you.',
        hi: 'आपसे मिलकर अच्छा लगा।',
        alternatives: [
          'Glad to meet you.',
          'Good to finally meet you.',
          'Happy to meet you.',
        ],
      },
      {
        speaker: 'You',
        text: 'Nice to meet you too.',
        hi: 'मुझे भी आपसे मिलकर खुशी हुई।',
        alternatives: ['Same here.', 'Likewise.', 'Good meeting you too.'],
      },
      {
        speaker: 'Person',
        text: 'What do you do?',
        hi: 'आप क्या करते हैं?',
        alternatives: [
          'What’s your profession?',
          'Where do you work?',
          'What kind of work do you do?',
        ],
      },
      {
        speaker: 'You',
        text: 'I work as a software developer.',
        hi: 'मैं सॉफ्टवेयर डेवलपर हूँ।',
        alternatives: [
          'I’m a developer.',
          'I work in IT.',
          'I’m into software development.',
        ],
      },
      {
        speaker: 'Person',
        text: 'That sounds interesting!',
        hi: 'यह सुनने में अच्छा लगा!',
        alternatives: ['That’s cool.', 'Sounds great.', 'Nice!'],
      },
    ],
  },
};

/** @param {string} topicId @param {string} situationId */
export function getSituationConversation(topicId, situationId) {
  return situationConversations[`${topicId}/${situationId}`] ?? null;
}
