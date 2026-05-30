import { officeIntroductionLessons } from './office-introduction.js';
import { officeSmallTalkLessons } from './office-small-talk.js';
import { meetingsLessons } from './meetings.js';
import { givingUpdatesLessons } from './giving-updates.js';
import { explainingProblemsLessons } from './explaining-problems.js';
import { clientCommunicationLessons } from './client-communication.js';
import { presentationsLessons } from './presentations.js';

export const level7Conversations = {
  ...officeIntroductionLessons,
  ...officeSmallTalkLessons,
  ...meetingsLessons,
  ...givingUpdatesLessons,
  ...explainingProblemsLessons,
  ...clientCommunicationLessons,
  ...presentationsLessons,
};
