import { lesson, turn, alts } from '../helpers.js';

const TOPIC = 'speaking-naturally';
const TITLE = 'Speaking Naturally';

export const speakingNaturallyLessons = Object.fromEntries([
  lesson(TOPIC, TITLE, 'avoiding-one-word-answers', 'Avoiding One-word Answers', [
    turn('Person', 'Did you finish the report?', 'रिपोर्ट खत्म?', alts(
      ['Was the meeting good?', 'मीटिंग अच्छी?'],
      ['Do you like the plan?', 'प्लान पसंद?'],
      ['Ready for the trip?', 'यात्रा तैयार?']
    )),
    turn('You', 'Yes, I finished it this morning and sent it.', 'हाँ, आज सुबह खत्म कर भेजा।', alts(
      ['Yep, done and emailed before lunch.', 'हाँ, लंच से पहले ईमेल।'],
      ['Yes, wrapped it up and shared the link.', 'हाँ, लपेटा लिंक शेयर।'],
      ['All done, sitting with coffee now.', 'सब हो गया, अब कॉफी।']
    )),
    turn('Person', 'Any issues left?', 'कोई मुद्दा बाकी?', alts(
      ['Charts clear?', 'चार्ट साफ?'],
      ['Manager happy?', 'मैनेजर खुश?']
    )),
    turn('You', 'Just one chart needs a label fix, quick job.', 'एक चार्ट लेबल ठीक, जल्दी।', alts(
      ['Minor label tweak left.', 'छोटा लेबल बाकी।'],
      ['Tiny fix, ten minutes.', 'छोटी ठीक, दस मिनट।'],
      ['Almost perfect, one edit.', 'लगभग परफेक्ट, एक एडिट।']
    )),
    turn('Person', 'You answer better than fine.', 'ठीक से बेहतर जवाब।', alts(
      ['I say only yes.', 'मैं सिर्फ हाँ।'],
      ['Teaching me.', 'सिखा रहे।']
    )),
    turn('You', 'Adding a bit more feels natural now.', 'थोड़ा और जोड़ना अब स्वाभाविक।', alts(
      ['Practice helps fluency.', 'अभ्यास धाराप्रवाह।'],
      ['One word sounds cold.', 'एक शब्द ठंडा।'],
      ['Sentences show care.', 'वाक्य देखभाल दिखाते।']
    )),
    turn('Person', 'Keep that habit.', 'आदत रखो।', alts(
      ['Clients notice.', 'क्लाइंट नोटिस।'],
      ['Good job today.', 'आज अच्छा काम।']
    )),
    turn('You', 'Thanks. I will polish the chart now.', 'शुक्रिया। अब चार्ट पॉलिश।', alts(
      ['Natural speech goal.', 'स्वाभाविक बोल लक्ष्य।'],
      ['No more bare yes.', 'नंगा हाँ नहीं।'],
      ['Ping you when sent.', 'भेजूँ तो पिंग।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'using-connectors', 'Using Connectors', [
    turn('Person', 'How was your weekend?', 'वीकेंड कैसा?', alts(
      ['Tell me about the trip.', 'यात्रा बताओ।'],
      ['How did the move go?', 'शिफ्ट कैसी?'],
      ['Project week okay?', 'प्रोजेक्ट हफ्ता?']
    )),
    turn('You', 'It was good. However, rain cut our hike short.', 'अच्छा था। हालाँकि, बारिश ने हाइक छोटी की।', alts(
      ['Fun overall, but traffic annoyed us.', 'मज़ा, पर ट्रैफिक खीझा।'],
      ['Relaxing, and also we met old friends.', 'आराम, और पुराने दोस्त मिले।'],
      ['Great start, then later we just rested.', 'शानदार शुरू, बाद आराम।']
    )),
    turn('Person', 'Rain is unlucky.', 'बारिश बदकिस्मत।', alts(
      ['Friends make up for it?', 'दोस्त भरपाई?'],
      ['What else happened?', 'और क्या?']
    )),
    turn('You', 'Yes, so we cooked indoors instead.', 'हाँ, इसलिए अंदर खाना बनाया।', alts(
      ['Therefore board games and chai.', 'इसलिए बोर्ड गेम चाय।'],
      ['Because of rain, indoor plan.', 'बारिश से, अंदर प्लान।'],
      ['So the evening still felt cozy.', 'तो शाम फिर भी आरामदायक।']
    )),
    turn('Person', 'Connectors make stories flow.', 'कनेक्टर कहानी बहाते।', alts(
      ['I forget them.', 'भूल जाता।'],
      ['Give more examples?', 'और उदाहरण?']
    )),
    turn('You', 'Try however, therefore, and because in one story.', 'हालाँकि, इसलिए, क्योंकि एक कहानी में।', alts(
      ['Link ideas, not lists.', 'विचार जोड़ो, सूची नहीं।'],
      ['Practice in voice notes.', 'वॉइस नोट अभ्यास।'],
      ['Natural links sound fluent.', 'स्वाभाविक जोड़ धाराप्रवाह।']
    )),
    turn('Person', 'Voice note challenge accepted.', 'वॉइस नोट चुनौती स्वीकार।', alts(
      ['Fun homework.', 'मज़ेदार होमवर्क।'],
      ['Send mine tonight.', 'आज रात भेजूँगा।']
    )),
    turn('You', 'Looking forward to hearing it.', 'सुनने का इंतज़ार।', alts(
      ['Connectors upgrade speech.', 'कनेक्टर भाषण अपग्रेड।'],
      ['Weekend story well told.', 'वीकेंड कहानी अच्छी।'],
      ['Talk tomorrow.', 'कल बात।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'speaking-longer-sentences', 'Speaking Longer Sentences', [
    turn('Person', 'Why choose this apartment?', 'यह फ्लैट क्यों?', alts(
      ['Why that course?', 'वह कोर्स क्यों?'],
      ['Why join this team?', 'यह टीम क्यों?'],
      ['Why buy an EV?', 'EV क्यों?']
    )),
    turn('You', 'I picked it because it is near metro, quiet, and within budget.', 'चुना क्योंकि मेट्रो पास, शांत, बजट में।', alts(
      ['The flat is close to work, safe street, and has sunlight.', 'काम पास, सुरक्षित गली, धूप।'],
      ['I wanted a short commute, green park nearby, and a spare room.', 'छोटा कम्यूट, पार्क, खाली कमरा।'],
      ['It fits my salary, has elevator, and landlords seem kind.', 'पगार फिट, लिफ्ट, मकान मालिक दयालु।']
    )),
    turn('Person', 'Long answer sounds confident.', 'लंबा जवाब आत्मविश्वास।', alts(
      ['I would say near metro only.', 'मैं सिर्फ मेट्रो।'],
      ['Practice helps.', 'अभ्यास।']
    )),
    turn('You', 'I practice linking three reasons smoothly.', 'तीन कारण सुचारू जोड़ने अभ्यास।', alts(
      ['Comma and because train me.', 'कॉमा क्योंकी ट्रेन।'],
      ['One breath, three points.', 'एक साँस, तीन बिंदु।'],
      ['Long sentences need planning.', 'लंबे वाक्य योजना।']
    )),
    turn('Person', 'Teach me that trick.', 'वह तरकीब सिखाओ।', alts(
      ['Three reasons rule.', 'तीन कारण नियम।'],
      ['Lunch lesson?', 'लंच सबक?']
    )),
    turn('You', 'Pick any choice and list three whys.', 'कोई चुनाव और तीन क्यों।', alts(
      ['Because, and, also works.', 'क्योंकि, और, भी।'],
      ['Record thirty seconds daily.', 'रोज तीस सेकंड रिकॉर्ड।'],
      ['Fluency grows with length.', 'लंबाई से धाराप्रवाह।']
    )),
    turn('Person', 'I will try on my flat hunt.', 'फ्लैट खोज पर ट्राय।', alts(
      ['Thanks coach.', 'कोच शुक्रिया।'],
      ['Sounds useful.', 'काम का।']
    )),
    turn('You', 'Share your three reasons later.', 'बाद में तीन कारण शेयर।', alts(
      ['Long sentences feel pro.', 'लंबे वाक्य प्रो।'],
      ['Happy to listen.', 'सुनने खुशी।'],
      ['Good chat.', 'अच्छी बात।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'giving-examples-natural', 'Giving Examples', [
    turn('Person', 'How do you handle stress?', 'तनाव कैसे संभालते?', alts(
      ['Stay motivated how?', 'प्रेरित कैसे?'],
      ['Wake up early how?', 'जल्दी उठते कैसे?'],
      ['Save time how?', 'समय बचाते कैसे?']
    )),
    turn('You', 'For example, I walk ten minutes before big calls.', 'उदाहरण, बड़ी कॉल से पहले दस मिनट चलना।', alts(
      ['Like yesterday, I breathed slow before pitch.', 'कल, पिच से पहले धीरी साँस।'],
      ['Say tough emails, I draft then wait.', 'कठिन ईमेल, ड्राफ्ट फिर इंतजार।'],
      ['Take deadlines, I break tasks small.', 'डेडलाइन, छोटे काम।']
    )),
    turn('Person', 'Walking helps me too.', 'चलना मुझे भी।', alts(
      ['I scroll instead.', 'स्क्रॉल करता।'],
      ['Need more tricks.', 'और तरकीब।']
    )),
    turn('You', 'Another example is journaling three lines at night.', 'और उदाहरण, रात तीन लाइन जर्नल।', alts(
      ['I write wins and worries briefly.', 'जीत चिंता संक्षेप।'],
      ['Gratitude list works.', 'कृतज्ञता सूची।'],
      ['Phone notes, not long essays.', 'फोन नोट, लंबा निबंध नहीं।']
    )),
    turn('Person', 'Short journal sounds doable.', 'छोटा जर्नल हो सकता।', alts(
      ['Examples make habits real.', 'उदाहरण आदत असली।'],
      ['I will start tonight.', 'आज रात शुरू।']
    )),
    turn('You', 'Start tiny, one example habit at a time.', 'छोटा शुरू, एक आदत।', alts(
      ['Examples in speech feel natural.', 'बोल में उदाहरण स्वाभाविक।'],
      ['Check in next week.', 'अगले हफ्ते चेक।'],
      ['Proud of you trying.', 'कोशिश पर गर्व।']
    )),
    turn('Person', 'Check in accepted.', 'चेक इन स्वीकार।', alts(
      ['Thanks mentor.', 'मेंटर शुक्रिया।'],
      ['Natural talk growing.', 'स्वाभाविक बात बढ़ी।']
    )),
    turn('You', 'Growing every week matters most.', 'हर हफ्ते बढ़ना सबसे।', alts(
      ['Examples anchor memory.', 'उदाहरण याद।'],
      ['See you soon.', 'जल्द मिलते।'],
      ['Keep talking like this.', 'ऐसे बोलते रहो।']
    )),
  ]),
]);
