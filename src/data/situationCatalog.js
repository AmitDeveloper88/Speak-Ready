/** @typedef {{ id: string, number: number, title: string }} SituationItem */
/** @typedef {{ id: string, number: number, title: string, tagline?: string, situations: SituationItem[] }} CatalogTopic */
/** @typedef {{ id: string, title: string, topics: CatalogTopic[] }} CatalogSection */

const MEETING_FIRST_TIME_SITUATIONS = [
  { id: 'saying-hello', number: 1, title: 'Saying Hello' },
  { id: 'asking-name', number: 2, title: 'Asking Name' },
  { id: 'introducing-yourself', number: 3, title: 'Introducing Yourself' },
  {
    id: 'where-are-you-from',
    number: 4,
    title: 'Asking “Where are you from?”',
  },
  { id: 'asking-about-work', number: 5, title: 'Asking About Work' },
  { id: 'asking-about-studies', number: 6, title: 'Asking About Studies' },
  { id: 'talking-about-hobbies', number: 7, title: 'Talking About Hobbies' },
  { id: 'meeting-at-office', number: 8, title: 'Meeting at Office' },
  { id: 'meeting-at-college', number: 9, title: 'Meeting at College' },
  { id: 'meeting-at-party', number: 10, title: 'Meeting at Party' },
  {
    id: 'meeting-friends-friend',
    number: 11,
    title: 'Meeting Friend’s Friend',
  },
  { id: 'talking-to-neighbor', number: 12, title: 'Talking to Neighbor' },
  {
    id: 'first-time-phone-call',
    number: 13,
    title: 'First Time Phone Call',
  },
  { id: 'first-video-call', number: 14, title: 'First Video Call' },
  {
    id: 'talking-to-new-roommate',
    number: 15,
    title: 'Talking to New Roommate',
  },
  {
    id: 'meeting-during-travel',
    number: 16,
    title: 'Meeting During Travel',
  },
  { id: 'starting-small-talk', number: 17, title: 'Starting Small Talk' },
  {
    id: 'asking-basic-questions',
    number: 18,
    title: 'Asking Basic Questions',
  },
  {
    id: 'ending-conversation',
    number: 19,
    title: 'Ending the Conversation',
  },
  {
    id: 'saying-goodbye-politely',
    number: 20,
    title: 'Saying Goodbye Politely',
  },
];

/** @param {number} n @param {string} title @param {string} id @param {SituationItem[] | null} [situations] */
function topic(n, title, id, situations = null) {
  return {
    number: n,
    title,
    id,
    tagline:
      id === 'meeting-first-time'
        ? 'Real first-time meeting situations'
        : undefined,
    situations: situations ?? [],
  };
}

/** @type {CatalogSection[]} */
export const situationCatalog = [
  {
    id: 'people',
    title: 'People & Relationships',
    topics: [
      topic(1, 'Meeting Someone First Time', 'meeting-first-time', MEETING_FIRST_TIME_SITUATIONS),
      topic(2, 'Talking to Friends', 'talking-friends'),
      topic(3, 'Talking to Family', 'talking-family'),
      topic(4, 'Meeting After Long Time', 'meeting-after-long-time'),
      topic(5, 'Talking to Stranger', 'talking-stranger'),
      topic(6, 'Phone Call Conversation', 'phone-call'),
      topic(7, 'Video Call Conversation', 'video-call'),
      topic(8, 'Asking for Help', 'asking-help'),
      topic(9, 'Giving Help', 'giving-help'),
      topic(10, 'Asking Questions', 'asking-questions'),
      topic(11, 'Saying Sorry', 'saying-sorry'),
      topic(12, 'Thanking Someone', 'thanking-someone'),
      topic(13, 'Giving Opinion', 'giving-opinion'),
      topic(14, 'Agreeing & Disagreeing', 'agreeing-disagreeing'),
      topic(15, 'Making Plans', 'making-plans'),
      topic(16, 'Cancelling Plans', 'cancelling-plans'),
      topic(17, 'Inviting Someone', 'inviting-someone'),
      topic(18, 'Talking About Yourself', 'talking-about-yourself'),
      topic(19, 'Talking About Your Work', 'talking-about-work'),
      topic(20, 'Talking About Your Day', 'talking-about-day'),
    ],
  },
  {
    id: 'outside',
    title: 'Outside / Daily Life',
    topics: [
      topic(21, 'Ordering Food', 'ordering-food'),
      topic(22, 'Tea Stall Conversation', 'tea-stall'),
      topic(23, 'Coffee Shop Conversation', 'coffee-shop'),
      topic(24, 'Shopping Conversation', 'shopping'),
      topic(25, 'Asking Price', 'asking-price'),
      topic(26, 'Bargaining', 'bargaining'),
      topic(27, 'Grocery Store Conversation', 'grocery-store'),
      topic(28, 'Ordering Online', 'ordering-online'),
      topic(29, 'Returning a Product', 'returning-product'),
      topic(30, 'Talking to Delivery Boy', 'delivery-boy'),
      topic(31, 'Cab / Auto Conversation', 'cab-auto'),
      topic(32, 'Bus & Metro Conversation', 'bus-metro'),
      topic(33, 'Asking Directions', 'asking-directions'),
      topic(34, 'Hotel Conversation', 'hotel'),
      topic(35, 'Airport Conversation', 'airport'),
      topic(36, 'Train Journey Conversation', 'train-journey'),
    ],
  },
  {
    id: 'work',
    title: 'Work / Office',
    topics: [
      topic(37, 'First Day at Office', 'first-day-office'),
      topic(38, 'Office Small Talk', 'office-small-talk'),
      topic(39, 'Talking to Manager', 'talking-manager'),
      topic(40, 'Talking to Colleague', 'talking-colleague'),
      topic(41, 'Standup Meeting', 'standup-meeting'),
      topic(42, 'Client Call', 'client-call'),
      topic(43, 'Asking for Leave', 'asking-leave'),
      topic(44, 'Deadline Discussion', 'deadline-discussion'),
      topic(45, 'Explaining a Problem', 'explaining-problem'),
      topic(46, 'Giving Updates', 'giving-updates'),
      topic(47, 'Asking Doubts', 'asking-doubts'),
      topic(48, 'Presentation Conversation', 'presentation'),
      topic(49, 'Interview Introduction', 'interview-intro'),
      topic(50, 'HR Interview', 'hr-interview'),
      topic(51, 'Technical Interview', 'technical-interview'),
      topic(52, 'Salary Discussion', 'salary-discussion'),
    ],
  },
  {
    id: 'college',
    title: 'College / Student Life',
    topics: [
      topic(53, 'College Conversation', 'college-conversation'),
      topic(54, 'Talking in Class', 'talking-in-class'),
      topic(55, 'Group Discussion', 'group-discussion'),
      topic(56, 'Asking Teacher', 'asking-teacher'),
      topic(57, 'Talking to Classmates', 'talking-classmates'),
      topic(58, 'Hostel / PG Conversation', 'hostel-pg'),
      topic(59, 'Roommate Conversation', 'roommate'),
    ],
  },
  {
    id: 'emergency',
    title: 'Emergency / Important Moments',
    topics: [
      topic(60, 'Doctor Conversation', 'doctor'),
      topic(61, 'Pharmacy Conversation', 'pharmacy'),
      topic(62, 'Emergency Situation', 'emergency'),
      topic(63, 'Talking to Police', 'police'),
      topic(64, 'Banking Conversation', 'banking'),
      topic(65, 'UPI & Payment Issues', 'upi-payment'),
      topic(66, 'Customer Support Call', 'customer-support'),
      topic(67, 'Internet / Mobile Problem', 'internet-mobile'),
    ],
  },
  {
    id: 'social',
    title: 'Social / Confidence',
    topics: [
      topic(68, 'Party Conversation', 'party'),
      topic(69, 'Wedding / Family Function', 'wedding-function'),
      topic(70, 'Talking in Public', 'talking-public'),
      topic(71, 'Introducing Friends', 'introducing-friends'),
      topic(72, 'Talking About Hobbies', 'hobbies'),
      topic(73, 'Cricket & Sports Talk', 'cricket-sports'),
      topic(74, 'Movies & Music Conversation', 'movies-music'),
      topic(75, 'Social Media Conversation', 'social-media'),
      topic(76, 'Talking Under Pressure', 'under-pressure'),
      topic(77, 'Angry Conversation', 'angry-conversation'),
      topic(78, 'Handling Awkward Silence', 'awkward-silence'),
    ],
  },
  {
    id: 'indian-daily',
    title: 'Indian Daily Life',
    topics: [
      topic(79, 'Asking for Recharge', 'recharge'),
      topic(80, 'Talking About Traffic', 'traffic'),
      topic(81, 'Talking About Weather', 'weather'),
      topic(82, 'Talking About Money', 'money'),
      topic(83, 'Talking About Salary', 'salary-daily'),
      topic(84, 'Asking for Notes', 'asking-notes'),
      topic(85, 'Asking for WiFi Password', 'wifi-password'),
      topic(86, 'Asking Someone to Repeat', 'ask-repeat'),
      topic(87, 'Talking to Neighbors', 'neighbors'),
      topic(88, 'Talking to Maid / Worker', 'maid-worker'),
      topic(89, 'Food Delivery Call', 'food-delivery-call'),
      topic(90, 'Talking During Festival', 'festival'),
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
