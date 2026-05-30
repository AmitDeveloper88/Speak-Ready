import { tellMeAboutYourselfLessons } from './tell-me-about-yourself.js';
import { educationalBackgroundLessons } from './educational-background.js';
import { workExperienceLessons } from './work-experience.js';
import { projectDiscussionLessons } from './project-discussion.js';
import { strengthsWeaknessesLessons } from './strengths-weaknesses.js';
import { behavioralQuestionsLessons } from './behavioral-questions.js';
import { salaryDiscussionLessons } from './salary-discussion.js';

export const level8Conversations = {
  ...tellMeAboutYourselfLessons,
  ...educationalBackgroundLessons,
  ...workExperienceLessons,
  ...projectDiscussionLessons,
  ...strengthsWeaknessesLessons,
  ...behavioralQuestionsLessons,
  ...salaryDiscussionLessons,
};
