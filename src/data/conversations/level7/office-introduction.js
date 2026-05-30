import { lesson, turn, alts } from '../helpers.js';

const TOPIC = 'office-introduction';
const TITLE = 'Office Introduction';

export const officeIntroductionLessons = Object.fromEntries([
  lesson(TOPIC, TITLE, 'meeting-the-team', 'Meeting the Team', [
    turn('Person', 'Everyone, this is Rohan, our new backend engineer.', 'सब, यह रोहन, नया बैकएंड इंजीनियर।', alts(
      ['Team, please welcome Priya from design.', 'टीम, डिज़ाइन से प्रिया स्वागत।'],
      ['Quick intro round for Amit joining today.', 'आज अमित जॉइन, परिचय।'],
      ['Say hi to Karan, product analyst.', 'कारण से मिलो, प्रोडक्ट एनालिस्ट।']
    )),
    turn('You', 'Hi everyone, glad to join the platform team.', 'नमस्ते सब, प्लेटफॉर्म टीम जॉइन खुशी।', alts(
      ['Hello team, excited to work with you.', 'हैलो टीम, साथ काम उत्साह।'],
      ['Thanks for the welcome. I am Rohan.', 'स्वागत शुक्रिया। मैं रोहन।'],
      ['Nice to meet you all virtually and in person.', 'वर्चुअल और सामने मिलकर अच्छा।']
    )),
    turn('Person', 'We build payments and onboarding flows.', 'पेमेंट और ऑनबोर्डिंग बनाते।', alts(
      ['Standup at ten thirty daily.', 'रोज साढ़े दस स्टैंडअप।'],
      ['Slack channel is platform squad.', 'स्लैक चैनल प्लेटफॉर्म स्क्वाड।']
    )),
    turn('You', 'Sounds interesting. I worked on payments at my last company.', 'दिलचस्प। पिछली कंपनी में पेमेंट।', alts(
      ['Good fit then. I will read the wiki today.', 'फिट। आज विकी पढ़ूँगा।'],
      ['Any doc I should start with?', 'कौन सा डॉक पहले?'],
      ['Happy to pair this week.', 'इस हफ्ते पेयर खुशी।']
    )),
    turn('Person', 'Start with onboarding RFC on Confluence.', 'ऑनबोर्डिंग RFC कॉन्फ्लुएंस।', alts(
      ['Neha will buddy you.', 'नेहा बडी।'],
      ['Questions anytime.', 'कभी पूछो।']
    )),
    turn('You', 'Thanks. I will ping Neha after standup.', 'शुक्रिया। स्टैंडअप बाद नेहा को पिंग।', alts(
      ['Team intro makes day one easier.', 'टीम परिचय पहला दिन आसान।'],
      ['Looking forward to contributing.', 'योगदान का इंतज़ार।'],
      ['Nice to meet each of you.', 'आपसे मिलकर अच्छा।']
    )),
    turn('Person', 'Lunch together at one if you are free.', 'एक बजे लंच साथ अगर फ्री।', alts(
      ['Welcome again.', 'फिर स्वागत।'],
      ['Grab desk four twelve.', 'डेस्क चार बारह लें।']
    )),
    turn('You', 'I am in for lunch. See you at one.', 'लंच में। एक बजे मिलते।', alts(
      ['Desk noted, thanks.', 'डेस्क नोट।'],
      ['Great first hour.', 'पहला घंटा शानदार।'],
      ['Talk soon.', 'जल्द बात।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'introducing-yourself', 'Introducing Yourself', [
    turn('Person', 'We have not met. Which team are you on?', 'नहीं मिले। कौन सी टीम?', alts(
      ['You are new here?', 'नए हो?'],
      ['I am from marketing.', 'मार्केटिंग से।']
    )),
    turn('You', 'I am Rohan from engineering, joined this Monday.', 'मैं रोहन, इंजीनियरिंग, सोमवार जॉइन।', alts(
      ['Priya, design, second week here.', 'प्रिया, डिज़ाइन, दूसरा हफ्ता।'],
      ['Amit, data team, started today.', 'अमित, डेटा, आज शुरू।'],
      ['I handle backend APIs.', 'बैकएंड API संभालता।']
    )),
    turn('Person', 'I am Meera from QA. Welcome.', 'मैं मीरा QA से। स्वागत।', alts(
      ['We test the same app.', 'वही ऐप टेस्ट।'],
      ['Good time to join, release next month.', 'अच्छा समय, अगले महीने रिलीज़।']
    )),
    turn('You', 'Nice to meet you Meera. I come from a fintech startup.', 'मिलकर अच्छा मीरा। फिनटेक स्टार्टअप से।', alts(
      ['Previously in e commerce.', 'पहले ई कॉमर्स।'],
      ['Based in Bangalore, live near Whitefield.', 'बैंगलोर, व्हाइटफील्ड पास।'],
      ['I enjoy clean APIs and good tests.', 'साफ API और अच्छे टेस्ट पसंद।']
    )),
    turn('Person', 'We need more API tests, honestly.', 'सच कहूँ, और API टेस्ट चाहिए।', alts(
      ['Maybe you can help.', 'शायद मदद।'],
      ['Lunch sometime?', 'कभी लंच?']
    )),
    turn('You', 'Happy to collaborate on test coverage.', 'टेस्ट कवरेज साथ खुशी।', alts(
      ['Let us sync after sprint planning.', 'स्प्रिंट प्लानिंग बाद सिंक।'],
      ['I share docs on our channel.', 'चैनल डॉक शेयर।'],
      ['Ping me anytime.', 'कभी पिंग।']
    )),
    turn('Person', 'Will do. Good intro.', 'करूँगी। अच्छा परिचय।', alts(
      ['Short and clear.', 'छोटा साफ।'],
      ['See you in standup.', 'स्टैंडअप में।']
    )),
    turn('You', 'See you in standup. Nice meeting you.', 'स्टैंडअप में। मिलकर अच्छा।', alts(
      ['Self intro practice helps confidence.', 'परिचय अभ्यास आत्मविश्वास।'],
      ['Back to setup now.', 'अब सेटअप।'],
      ['Have a good day.', 'अच्छा दिन।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'first-day-hr', 'First Day with HR', [
    turn('Person', 'Welcome. I am Anjali from HR. ID and offer letter please.', 'स्वागत। HR अंजली। आईडी ऑफर लेटर।', alts(
      ['First day paperwork.', 'पहले दिन कागज़।'],
      ['Sit, we will finish in twenty minutes.', 'बैठिए, बीस मिनट।']
    )),
    turn('You', 'Here are my documents. Excited to start.', 'दस्तावेज़। शुरू कर उत्साह।', alts(
      ['All copies attached as per email.', 'ईमेल जैसी कॉपी।'],
      ['Any form still pending on my side?', 'मेरी तरफ कोई फॉर्म?'],
      ['I read the handbook last night.', 'कल रात हैंडबुक पढ़ी।']
    )),
    turn('Person', 'Policy sign here. Laptop pickup at IT desk.', 'नीति यहाँ साइन। लैपटॉप IT।', alts(
      ['Probation six months.', 'प्रोबेशन छह महीने।'],
      ['Leave portal activates tomorrow.', 'छुट्टी पोर्टल कल।']
    )),
    turn('You', 'What time is IT open till?', 'IT कब तक खुला?', alts(
      ['Parking pass process?', 'पार्किंग पास?'],
      ['Payroll date each month?', 'पगार तारीख?'],
      ['Flexible hours policy?', 'लचीले घंटे नीति?']
    )),
    turn('Person', 'IT till six. Flex hours with manager approval.', 'IT छह तक। मैनेजर से फ्लेक्स।', alts(
      ['Payroll last working day.', 'पगार अंतिम कार्य दिवस।'],
      ['Badge photo now or later?', 'बैज फोटो अभी या बाद?']
    )),
    turn('You', 'Photo now is fine. I will head to IT after this.', 'अभी फोटो ठीक। बाद IT।', alts(
      ['Thanks for clear onboarding.', 'साफ ऑनबोर्डिंग शुक्रिया।'],
      ['Any buddy assigned?', 'बडी मिली?'],
      ['Emergency contact form done.', 'आपात संपर्क फॉर्म हो गया।']
    )),
    turn('Person', 'Buddy Neha from engineering. Her desk four twelve.', 'बडी नेहा इंजीनियरिंग। डेस्क चार बारह।', alts(
      ['Welcome kit in tote bag.', 'वेलकम किट टोट में।'],
      ['Ask HR anything this week.', 'इस हफ्ते HR कुछ भी।']
    )),
    turn('You', 'Perfect. Thank you Anjali.', 'बढ़िया। धन्यवाद अंजली।', alts(
      ['HR intro sets the tone.', 'HR परिचय टोन।'],
      ['Heading to IT now.', 'अब IT।'],
      ['Good day.', 'अच्छा दिन।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'quick-desk-intro', 'Quick Desk Intro', [
    turn('Person', 'Hey, I sit next to you. I am Vikram, frontend.', 'अरे, बगल में। विक्रम, फ्रंटएंड।', alts(
      ['New face, welcome.', 'नया चेहरा, स्वागत।'],
      ['Need help finding anything?', 'कुछ ढूँढना?']
    )),
    turn('You', 'Hi Vikram, I am Rohan, backend, started today.', 'नमस्ते विक्रम, रोहन बैकएंड, आज शुरू।', alts(
      ['Thanks, still setting monitors.', 'शुक्रिया, मॉनिटर सेट।'],
      ['Which floor is cafeteria?', 'कैफेटेरिया कौन सा फ्लोर?'],
      ['Good to have a neighbor.', 'पड़ोसी अच्छा।']
    )),
    turn('Person', 'Cafeteria third floor. WiFi password on sticker.', 'कैफेटेरिया तीसरा। WiFi स्टिकर।', alts(
      ['Slack me for lunch groups.', 'लंच ग्रुप स्लैक।'],
      ['Printer behind us jams sometimes.', 'पीछे प्रिंटर कभी अटकता।']
    )),
    turn('You', 'Useful tips, thanks. I will save your contact.', 'काम के टिप्स। संपर्क सेव।', alts(
      ['Any unwritten team rules?', 'अनलिखित नियम?'],
      ['Standup room or online?', 'स्टैंडअप कमरा या ऑनलाइन?'],
      ['Coffee machine decent here?', 'कॉफी मशीन ठीक?']
    )),
    turn('Person', 'Hybrid standup, room B two. Coffee is okay.', 'हाइब्रिड, कमरा B दो। कॉफी ठीक।', alts(
      ['Mute on calls please.', 'कॉल म्यूट।'],
      ['Friday demos optional fun.', 'शुक्रवार डेमो मज़ा।']
    )),
    turn('You', 'Got it. I will not be the loud mic guy.', 'समझा। शोर माइक नहीं बनूँगा।', alts(
      ['Desk intro beats formal email.', 'डेस्क परिचय ईमेल से बेहतर।'],
      ['Ping you for lunch tomorrow?', 'कल लंच पिंग?'],
      ['Still unpacking.', 'अभी अनपैक।']
    )),
    turn('Person', 'Tomorrow works. Welcome again.', 'कल ठीक। फिर स्वागत।', alts(
      ['Headphones help focus.', 'हेडफोन फोकस।'],
      ['See you at ten thirty.', 'साढ़े दस मिलते।']
    )),
    turn('You', 'See you at standup. Thanks Vikram.', 'स्टैंडअप में। शुक्रिया विक्रम।', alts(
      ['Quick intros build rapport.', 'छोटा परिचय रिश्ता।'],
      ['Settling in fast.', 'जल्दी बस रहा।'],
      ['Back to laptop setup.', 'लैपटॉप सेटअप।']
    )),
  ]),
]);
