import { greetingsLessons } from './greetings.js';
import { introductionsLessons } from './introductions.js';
import { startingConversationsLessons } from './starting-conversations.js';
import { basicQuestionsLessons } from './basic-questions.js';
import { givingAnswersLessons } from './giving-answers.js';

export const level1Conversations = {
  ...greetingsLessons,
  ...introductionsLessons,
  ...startingConversationsLessons,
  ...basicQuestionsLessons,
  ...givingAnswersLessons,
};
