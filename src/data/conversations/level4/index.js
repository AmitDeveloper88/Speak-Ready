import { givingOpinionsLessons } from './giving-opinions.js';
import { agreeingLessons } from './agreeing.js';
import { disagreeingLessons } from './disagreeing.js';
import { comparingLessons } from './comparing.js';
import { givingReasonsLessons } from './giving-reasons.js';

export const level4Conversations = {
  ...givingOpinionsLessons,
  ...agreeingLessons,
  ...disagreeingLessons,
  ...comparingLessons,
  ...givingReasonsLessons,
};
