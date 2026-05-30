import { orderingFoodLessons } from './ordering-food.js';
import { shoppingLessons } from './shopping.js';
import { travelLessons } from './travel.js';
import { phoneCallsLessons } from './phone-calls.js';
import { doctorVisitsLessons } from './doctor-visits.js';
import { bankingLessons } from './banking.js';
import { customerSupportLessons } from './customer-support.js';
import { emergenciesLessons } from './emergencies.js';

export const level6Conversations = {
  ...orderingFoodLessons,
  ...shoppingLessons,
  ...travelLessons,
  ...phoneCallsLessons,
  ...doctorVisitsLessons,
  ...bankingLessons,
  ...customerSupportLessons,
  ...emergenciesLessons,
};
