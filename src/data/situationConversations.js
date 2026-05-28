/** @typedef {{ text: string, hi?: string }} AltPhrase */
/** @typedef {{ speaker: string, text: string, hi: string, alternatives?: AltPhrase[] }} ConversationTurn */
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
        text: 'Hey! How are you?',
        hi: 'हे! आप कैसे हैं?',
        alternatives: [
          { text: 'Hi! How’s it going?', hi: 'हाय! सब कैसा चल रहा है?' },
          { text: 'Hey! What’s up?', hi: 'हे! क्या चल रहा है?' },
          { text: 'Hello!', hi: 'हेलो!' },
        ],
      },
      {
        speaker: 'You',
        text: 'I’m good, thanks. How about you?',
        hi: 'मैं अच्छा हूँ, धन्यवाद। आप बताइए?',
        alternatives: [
          { text: 'I’m doing well.', hi: 'मैं ठीक हूँ।' },
          { text: 'Pretty good.', hi: 'काफी अच्छा हूँ।' },
          { text: 'I’m fine, thanks.', hi: 'मैं ठीक हूँ, धन्यवाद।' },
        ],
      },
      {
        speaker: 'Person',
        text: 'Nice to meet you.',
        hi: 'आपसे मिलकर अच्छा लगा।',
        alternatives: [
          { text: 'Glad to meet you.', hi: 'आपसे मिलकर खुशी हुई।' },
          { text: 'Good to meet you.', hi: 'आपसे मिलकर अच्छा लगा।' },
          { text: 'Happy to meet you.', hi: 'आपसे मिलकर खुशी हुई।' },
        ],
      },
      {
        speaker: 'You',
        text: 'Nice to meet you too.',
        hi: 'मुझे भी आपसे मिलकर खुशी हुई।',
        alternatives: [
          { text: 'Same here.', hi: 'मुझे भी।' },
          { text: 'Likewise.', hi: 'मुझे भी ऐसा ही लगा।' },
          {
            text: 'Good to meet you too.',
            hi: 'आपसे मिलकर मुझे भी अच्छा लगा।',
          },
        ],
      },
      {
        speaker: 'Person',
        text: 'So, how’s your day going?',
        hi: 'तो, आपका दिन कैसा जा रहा है?',
        alternatives: [
          { text: 'How’s everything going?', hi: 'सब कैसा चल रहा है?' },
          { text: 'Busy day?', hi: 'दिन व्यस्त रहा?' },
          { text: 'Everything good?', hi: 'सब बढ़िया?' },
        ],
      },
      {
        speaker: 'You',
        text: 'It’s going well so far.',
        hi: 'अभी तक सब अच्छा चल रहा है।',
        alternatives: [
          { text: 'Pretty good actually.', hi: 'सच में काफी अच्छा।' },
          { text: 'Not bad.', hi: 'बुरा नहीं है।' },
          { text: 'Everything’s fine.', hi: 'सब ठीक है।' },
        ],
      },
      {
        speaker: 'Person',
        text: 'You seem really friendly.',
        hi: 'आप काफी दोस्ताना लगते हैं।',
        alternatives: [
          { text: 'You’re easy to talk to.', hi: 'आपसे बात करना आसान है।' },
          { text: 'You seem nice.', hi: 'आप अच्छे लगते हैं।' },
          { text: 'You have a positive vibe.', hi: 'आपकी अच्छी ऊर्जा लगती है।' },
        ],
      },
      {
        speaker: 'You',
        text: 'Thank you! That’s nice of you to say.',
        hi: 'धन्यवाद! आपने अच्छा कहा।',
        alternatives: [
          { text: 'Thanks! I appreciate that.', hi: 'धन्यवाद! मैं इसकी कद्र करता हूँ।' },
          { text: 'That’s really kind of you.', hi: 'यह आपकी बहुत अच्छी बात है।' },
          { text: 'Thank you so much.', hi: 'आपका बहुत धन्यवाद।' },
        ],
      },
      {
        speaker: 'Person',
        text: 'It was really nice talking to you.',
        hi: 'आपसे बात करके सच में अच्छा लगा।',
        alternatives: [
          { text: 'Good talking to you.', hi: 'आपसे बात करके अच्छा लगा।' },
          {
            text: 'I enjoyed our conversation.',
            hi: 'मुझे हमारी बातचीत अच्छी लगी।',
          },
          { text: 'Hope we meet again.', hi: 'उम्मीद है फिर मुलाकात होगी।' },
        ],
      },
      {
        speaker: 'You',
        text: 'Same here. See you around!',
        hi: 'मुझे भी। फिर मिलते हैं!',
        alternatives: [
          { text: 'Take care!', hi: 'अपना ध्यान रखिए!' },
          { text: 'See you again soon.', hi: 'फिर जल्दी मिलते हैं।' },
          { text: 'Have a great day!', hi: 'आपका दिन अच्छा रहे!' },
        ],
      },
    ],
  },
};

/** @param {string} topicId @param {string} situationId */
export function getSituationConversation(topicId, situationId) {
  return situationConversations[`${topicId}/${situationId}`] ?? null;
}
