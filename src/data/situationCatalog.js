/** @typedef {{ id: string, number: number, title: string }} SituationItem */
/** @typedef {{ id: string, number: number, title: string, tagline?: string, situations: SituationItem[] }} CatalogTopic */
/** @typedef {{ id: string, title: string, topics: CatalogTopic[] }} CatalogSection */

/** @param {{ title: string, id?: string }[]} items */
function situationsFrom(items) {
  return items.map((item, index) => ({
    id:
      item.id ??
      item.title
        .toLowerCase()
        .replace(/['"]/g, '')
        .replace(/[^a-z0-9]+/gi, '-')
        .replace(/^-|-$/g, ''),
    number: index + 1,
    title: item.title,
  }));
}

let topicNumber = 0;

/** @param {string} title @param {string} id @param {SituationItem[] | null} [situations] */
function topic(title, id, situations = null) {
  topicNumber += 1;
  return {
    number: topicNumber,
    title,
    id,
    situations: situations ?? [],
  };
}

/** @type {CatalogSection[]} */
export const situationCatalog = [
  {
    id: 'level-1',
    title: 'Level 1: Starting Conversations',
    topics: [
      topic(
        'Greetings',
        'greetings',
        situationsFrom([
          { title: 'Formal Greetings', id: 'formal-greetings' },
          { title: 'Casual Greetings', id: 'casual-greetings' },
          { title: 'Greeting on Phone', id: 'greeting-on-phone' },
          { title: 'Greeting New People', id: 'greeting-new-people' },
          { title: 'Greeting Groups', id: 'greeting-groups' },
        ])
      ),
      topic(
        'Introductions',
        'introductions',
        situationsFrom([
          { title: 'Self Introduction', id: 'self-introduction' },
          { title: 'Professional Introduction', id: 'professional-introduction' },
          { title: 'Student Introduction', id: 'student-introduction' },
          { title: 'Short Introduction', id: 'short-introduction' },
          { title: 'Public Introduction', id: 'public-introduction' },
        ])
      ),
      topic(
        'Starting Conversations',
        'starting-conversations',
        situationsFrom([
          { title: 'Breaking the Ice', id: 'breaking-the-ice' },
          { title: 'Asking First Question', id: 'asking-first-question' },
          { title: 'Finding Common Topics', id: 'finding-common-topics' },
          { title: 'Starting with Compliments', id: 'starting-with-compliments' },
          { title: 'Joining a Conversation', id: 'joining-a-conversation' },
        ])
      ),
      topic(
        'Basic Questions',
        'basic-questions',
        situationsFrom([
          { title: 'Yes/No Questions', id: 'yes-no-questions' },
          { title: 'WH Questions', id: 'wh-questions' },
          { title: 'Personal Questions', id: 'personal-questions' },
          { title: 'Information Questions', id: 'information-questions' },
          { title: 'Choice Questions', id: 'choice-questions' },
        ])
      ),
      topic(
        'Giving Answers',
        'giving-answers',
        situationsFrom([
          { title: 'Short Answers', id: 'short-answers' },
          { title: 'Detailed Answers', id: 'detailed-answers' },
          { title: 'Personal Answers', id: 'personal-answers' },
          { title: 'Professional Answers', id: 'professional-answers' },
          { title: 'Opinion Answers', id: 'opinion-answers' },
        ])
      ),
    ],
  },
  {
    id: 'level-2',
    title: 'Level 2: Talking About Yourself',
    topics: [
      topic(
        'Talking About Yourself',
        'talking-about-yourself',
        situationsFrom([
          { title: 'Personal Life', id: 'personal-life' },
          { title: 'Family', id: 'family' },
          { title: 'Hobbies', id: 'hobbies' },
          { title: 'Goals', id: 'goals' },
          { title: 'Personality', id: 'personality' },
        ])
      ),
      topic(
        'Daily Life',
        'daily-life',
        situationsFrom([
          { title: 'Daily Routine', id: 'daily-routine' },
          { title: 'Weekend Activities', id: 'weekend-activities' },
          { title: 'Studies', id: 'studies' },
          { title: 'Work Life', id: 'work-life' },
          { title: 'Free Time', id: 'free-time' },
        ])
      ),
      topic(
        'Describing Things',
        'describing-things',
        situationsFrom([
          { title: 'People', id: 'people' },
          { title: 'Places', id: 'places' },
          { title: 'Objects', id: 'objects' },
          { title: 'Events', id: 'events' },
          { title: 'Experiences', id: 'experiences' },
        ])
      ),
      topic(
        'Talking About Preferences',
        'talking-about-preferences',
        situationsFrom([
          { title: 'Favorite Food', id: 'favorite-food' },
          { title: 'Favorite Movies', id: 'favorite-movies' },
          { title: 'Favorite Sports', id: 'favorite-sports' },
          { title: 'Favorite Places', id: 'favorite-places' },
          { title: 'Favorite Activities', id: 'favorite-activities' },
        ])
      ),
      topic(
        'Storytelling',
        'storytelling',
        situationsFrom([
          { title: 'Childhood Memories', id: 'childhood-memories' },
          { title: 'Travel Stories', id: 'travel-stories' },
          { title: 'Funny Incidents', id: 'funny-incidents' },
          { title: 'Learning Experiences', id: 'learning-experiences' },
          { title: 'Work Experiences', id: 'work-experiences' },
        ])
      ),
    ],
  },
  {
    id: 'level-3',
    title: 'Level 3: Social Conversations',
    topics: [
      topic(
        'Thanking',
        'thanking',
        situationsFrom([
          { title: 'Casual Thanks', id: 'casual-thanks' },
          { title: 'Formal Thanks', id: 'formal-thanks' },
          { title: 'Professional Thanks', id: 'professional-thanks' },
          { title: 'Appreciating Help', id: 'appreciating-help' },
        ])
      ),
      topic(
        'Apologizing',
        'apologizing',
        situationsFrom([
          { title: 'Small Mistakes', id: 'small-mistakes' },
          { title: 'Serious Mistakes', id: 'serious-mistakes' },
          { title: 'Workplace Apologies', id: 'workplace-apologies' },
          { title: 'Personal Apologies', id: 'personal-apologies' },
        ])
      ),
      topic(
        'Compliments',
        'compliments',
        situationsFrom([
          { title: 'Appearance', id: 'appearance' },
          { title: 'Skills', id: 'skills' },
          { title: 'Work', id: 'work' },
          { title: 'Personality', id: 'personality' },
        ])
      ),
      topic(
        'Invitations',
        'invitations',
        situationsFrom([
          { title: 'Inviting Someone', id: 'inviting-someone' },
          { title: 'Accepting Invitations', id: 'accepting-invitations' },
          { title: 'Declining Invitations', id: 'declining-invitations' },
          { title: 'Rescheduling Plans', id: 'rescheduling-plans' },
        ])
      ),
      topic(
        'Congratulations',
        'congratulations',
        situationsFrom([
          { title: 'Birthday', id: 'birthday' },
          { title: 'Achievement', id: 'achievement' },
          { title: 'Promotion', id: 'promotion' },
          { title: 'Festivals', id: 'festivals' },
        ])
      ),
    ],
  },
  {
    id: 'level-4',
    title: 'Level 4: Discussions',
    topics: [
      topic(
        'Giving Opinions',
        'giving-opinions',
        situationsFrom([
          { title: 'Movies', id: 'movies' },
          { title: 'Sports', id: 'sports' },
          { title: 'Technology', id: 'technology' },
          { title: 'Education', id: 'education' },
          { title: 'Social Media', id: 'social-media' },
        ])
      ),
      topic(
        'Agreeing',
        'agreeing',
        situationsFrom([
          { title: 'Strong Agreement', id: 'strong-agreement' },
          { title: 'Partial Agreement', id: 'partial-agreement' },
          { title: 'Friendly Agreement', id: 'friendly-agreement' },
          { title: 'Professional Agreement', id: 'professional-agreement' },
        ])
      ),
      topic(
        'Disagreeing',
        'disagreeing',
        situationsFrom([
          { title: 'Soft Disagreement', id: 'soft-disagreement' },
          { title: 'Strong Disagreement', id: 'strong-disagreement' },
          { title: 'Professional Disagreement', id: 'professional-disagreement' },
          { title: 'Debate Situations', id: 'debate-situations' },
        ])
      ),
      topic(
        'Comparing',
        'comparing',
        situationsFrom([
          { title: 'Products', id: 'products' },
          { title: 'Cities', id: 'cities' },
          { title: 'Jobs', id: 'jobs' },
          { title: 'Education Options', id: 'education-options' },
          { title: 'Travel Destinations', id: 'travel-destinations' },
        ])
      ),
      topic(
        'Giving Reasons',
        'giving-reasons',
        situationsFrom([
          { title: 'Supporting Opinions', id: 'supporting-opinions' },
          { title: 'Explaining Choices', id: 'explaining-choices' },
          { title: 'Justifying Decisions', id: 'justifying-decisions' },
          { title: 'Cause & Effect', id: 'cause-and-effect' },
          { title: 'Persuading Others', id: 'persuading-others' },
        ])
      ),
    ],
  },
  {
    id: 'level-5',
    title: 'Level 5: Fluent Conversations',
    topics: [
      topic(
        'Follow-up Questions',
        'follow-up-questions',
        situationsFrom([
          { title: 'Asking More Details', id: 'asking-more-details' },
          { title: 'Showing Interest', id: 'showing-interest' },
          { title: 'Exploring Experiences', id: 'exploring-experiences' },
          { title: 'Continuing Topics', id: 'continuing-topics' },
        ])
      ),
      topic(
        'Continuing Conversations',
        'continuing-conversations',
        situationsFrom([
          { title: 'Sharing Experiences', id: 'sharing-experiences' },
          { title: 'Giving Examples', id: 'giving-examples' },
          { title: 'Expanding Answers', id: 'expanding-answers' },
          { title: 'Keeping Topic Alive', id: 'keeping-topic-alive' },
        ])
      ),
      topic(
        'Handling Difficult Moments',
        'handling-difficult-moments',
        situationsFrom([
          { title: 'Asking to Repeat', id: 'asking-to-repeat' },
          { title: 'Asking to Explain', id: 'asking-to-explain' },
          {
            title: 'Saying "I Don\'t Understand"',
            id: 'saying-i-dont-understand',
          },
          { title: 'Correcting Yourself', id: 'correcting-yourself' },
        ])
      ),
      topic(
        'Speaking Naturally',
        'speaking-naturally',
        situationsFrom([
          { title: 'Avoiding One-word Answers', id: 'avoiding-one-word-answers' },
          { title: 'Using Connectors', id: 'using-connectors' },
          { title: 'Speaking Longer Sentences', id: 'speaking-longer-sentences' },
          { title: 'Giving Examples', id: 'giving-examples-natural' },
        ])
      ),
      topic(
        'Expressing Feelings',
        'expressing-feelings',
        situationsFrom([
          { title: 'Happiness', id: 'happiness' },
          { title: 'Excitement', id: 'excitement' },
          { title: 'Nervousness', id: 'nervousness' },
          { title: 'Disappointment', id: 'disappointment' },
          { title: 'Frustration', id: 'frustration' },
        ])
      ),
    ],
  },
  {
    id: 'level-6',
    title: 'Level 6: Real-Life English',
    topics: [
      topic(
        'Ordering Food',
        'ordering-food',
        situationsFrom([
          { title: 'At a Restaurant', id: 'at-restaurant' },
          { title: 'Food Delivery', id: 'food-delivery' },
          { title: 'Customizing Your Order', id: 'customizing-order' },
          { title: 'Paying the Bill', id: 'paying-bill' },
        ])
      ),
      topic(
        'Shopping',
        'shopping',
        situationsFrom([
          { title: 'Asking the Price', id: 'asking-price' },
          { title: 'Trying Clothes', id: 'trying-clothes' },
          { title: 'Return or Exchange', id: 'return-exchange' },
          { title: 'Asking for a Discount', id: 'asking-discount' },
        ])
      ),
      topic(
        'Travel',
        'travel',
        situationsFrom([
          { title: 'Airport Check-in', id: 'airport-check-in' },
          { title: 'Hotel Check-in', id: 'hotel-check-in' },
          { title: 'Asking Directions', id: 'asking-directions' },
          { title: 'Train or Bus Ticket', id: 'train-bus-ticket' },
        ])
      ),
      topic(
        'Phone Calls',
        'phone-calls',
        situationsFrom([
          { title: 'Booking an Appointment', id: 'booking-appointment' },
          { title: 'Wrong Number', id: 'wrong-number' },
          { title: 'Leaving a Message', id: 'leaving-message' },
          { title: 'Calling Customer Care', id: 'calling-customer-care' },
        ])
      ),
      topic(
        'Doctor Visits',
        'doctor-visits',
        situationsFrom([
          { title: 'Describing Symptoms', id: 'describing-symptoms' },
          { title: 'At the Pharmacy', id: 'at-pharmacy' },
          { title: 'Follow-up Questions', id: 'follow-up-questions' },
          { title: 'Medical Reports', id: 'medical-reports' },
        ])
      ),
      topic(
        'Banking',
        'banking',
        situationsFrom([
          { title: 'Opening an Account', id: 'opening-account' },
          { title: 'ATM Problem', id: 'atm-problem' },
          { title: 'Money Transfer', id: 'money-transfer' },
          { title: 'Loan Inquiry', id: 'loan-inquiry' },
        ])
      ),
      topic(
        'Customer Support',
        'customer-support',
        situationsFrom([
          { title: 'Product Not Working', id: 'product-not-working' },
          { title: 'Refund Request', id: 'refund-request' },
          { title: 'Late Delivery', id: 'late-delivery' },
          { title: 'Wrong Bill Charge', id: 'wrong-bill-charge' },
        ])
      ),
      topic(
        'Emergencies',
        'emergencies',
        situationsFrom([
          { title: 'Calling an Ambulance', id: 'calling-ambulance' },
          { title: 'Reporting to Police', id: 'reporting-police' },
          { title: 'Lost Wallet or Phone', id: 'lost-wallet-phone' },
          { title: 'Road Accident Help', id: 'road-accident-help' },
        ])
      ),
    ],
  },
  {
    id: 'level-7',
    title: 'Level 7: Workplace English',
    topics: [
      topic(
        'Office Introduction',
        'office-introduction',
        situationsFrom([
          { title: 'Meeting the Team', id: 'meeting-the-team' },
          { title: 'Introducing Yourself', id: 'introducing-yourself' },
          { title: 'First Day with HR', id: 'first-day-hr' },
          { title: 'Quick Desk Intro', id: 'quick-desk-intro' },
        ])
      ),
      topic(
        'Office Small Talk',
        'office-small-talk',
        situationsFrom([
          { title: 'Monday Morning', id: 'monday-morning' },
          { title: 'Coffee Break', id: 'coffee-break' },
          { title: 'Weekend Plans', id: 'weekend-plans' },
          { title: 'Lunch Conversation', id: 'lunch-conversation' },
        ])
      ),
      topic(
        'Meetings',
        'meetings',
        situationsFrom([
          { title: 'Joining a Meeting', id: 'joining-meeting' },
          { title: 'Sharing Your View', id: 'sharing-your-view' },
          { title: 'Asking for Clarification', id: 'asking-clarification' },
          { title: 'Wrapping Up', id: 'wrapping-up' },
        ])
      ),
      topic(
        'Giving Updates',
        'giving-updates',
        situationsFrom([
          { title: 'Daily Standup', id: 'daily-standup' },
          { title: 'Weekly Status', id: 'weekly-status' },
          { title: 'Delay Update', id: 'delay-update' },
          { title: 'Sharing Good News', id: 'sharing-good-news' },
        ])
      ),
      topic(
        'Explaining Problems',
        'explaining-problems',
        situationsFrom([
          { title: 'Reporting a Bug', id: 'reporting-bug' },
          { title: 'Missed Deadline', id: 'missed-deadline' },
          { title: 'Blocked by Dependency', id: 'blocked-dependency' },
          { title: 'Escalating an Issue', id: 'escalating-issue' },
        ])
      ),
      topic(
        'Client Communication',
        'client-communication',
        situationsFrom([
          { title: 'Kickoff Call', id: 'kickoff-call' },
          { title: 'Handling a Complaint', id: 'handling-complaint' },
          { title: 'Product Demo', id: 'product-demo' },
          { title: 'Follow-up Check-in', id: 'follow-up-check-in' },
        ])
      ),
      topic(
        'Presentations',
        'presentations',
        situationsFrom([
          { title: 'Opening Your Talk', id: 'opening-talk' },
          { title: 'Explaining a Slide', id: 'explaining-slide' },
          { title: 'Q and A', id: 'handling-qa' },
          { title: 'Closing Thanks', id: 'closing-thanks' },
        ])
      ),
    ],
  },
  {
    id: 'level-8',
    title: 'Level 8: Interview English',
    topics: [
      topic(
        'Tell Me About Yourself',
        'tell-me-about-yourself',
        situationsFrom([
          { title: 'Opening Introduction', id: 'opening-intro' },
          { title: 'Career Switch Story', id: 'career-switch-story' },
          { title: 'Fresher Introduction', id: 'fresher-intro' },
          { title: 'Thirty Second Pitch', id: 'thirty-second-pitch' },
        ])
      ),
      topic(
        'Educational Background',
        'educational-background',
        situationsFrom([
          { title: 'College and Degree', id: 'college-degree' },
          { title: 'Grades and Subjects', id: 'grades-subjects' },
          { title: 'Gap Year Explanation', id: 'gap-year' },
          { title: 'Certifications', id: 'certifications' },
        ])
      ),
      topic(
        'Work Experience',
        'work-experience',
        situationsFrom([
          { title: 'Current Role', id: 'current-role' },
          { title: 'Previous Company', id: 'previous-company' },
          { title: 'Internship Experience', id: 'internship-experience' },
          { title: 'Why Leaving Job', id: 'why-leaving-job' },
        ])
      ),
      topic(
        'Project Discussion',
        'project-discussion',
        situationsFrom([
          { title: 'Explaining a Project', id: 'explaining-project' },
          { title: 'Technical Challenges', id: 'technical-challenges' },
          { title: 'Your Contribution', id: 'your-contribution' },
          { title: 'Project Results', id: 'project-results' },
        ])
      ),
      topic(
        'Strengths & Weaknesses',
        'strengths-weaknesses',
        situationsFrom([
          { title: 'Key Strengths', id: 'key-strengths' },
          { title: 'Weakness with Improvement', id: 'weakness-improvement' },
          { title: 'Team Fit', id: 'team-fit' },
          { title: 'Learning Ability', id: 'learning-ability' },
        ])
      ),
      topic(
        'Behavioral Questions',
        'behavioral-questions',
        situationsFrom([
          { title: 'Conflict at Work', id: 'conflict-at-work' },
          { title: 'Failure Story', id: 'failure-story' },
          { title: 'Leadership Example', id: 'leadership-example' },
          { title: 'Handled Pressure', id: 'handled-pressure' },
        ])
      ),
      topic(
        'Salary Discussion',
        'salary-discussion',
        situationsFrom([
          { title: 'Expected CTC', id: 'expected-ctc' },
          { title: 'Current Salary', id: 'current-salary' },
          { title: 'Negotiating Offer', id: 'negotiating-offer' },
          { title: 'Benefits and Bonus', id: 'benefits-bonus' },
        ])
      ),
    ],
  },
];

export function getCatalogTopicCount() {
  return situationCatalog.reduce((n, s) => n + s.topics.length, 0);
}

/** @param {string} topicId */
export function getTopicById(topicId) {
  for (const section of situationCatalog) {
    const found = section.topics.find((t) => t.id === topicId);
    if (found) return { section, topic: found };
  }
  return null;
}
