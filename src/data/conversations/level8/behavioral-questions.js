import { lesson, turn, alts } from '../helpers.js';

const TOPIC = 'behavioral-questions';
const TITLE = 'Behavioral Questions';

export const behavioralQuestionsLessons = Object.fromEntries([
  lesson(TOPIC, TITLE, 'conflict-at-work', 'Conflict at Work', [
    turn('Person', 'Tell me about a conflict with a coworker.', 'सहकर्मी टकराव।', alts(
      ['Disagreement with manager?', 'मैनेजर असहमति?'],
      ['Use STAR please.', 'STAR।']
    )),
    turn('You', 'Situation: scope fight with frontend lead before release.', 'स्थिति: रिलीज़ पहले फ्रंटएंड लीड स्कोप झगड़ा।', alts(
      ['Situation: QA and I disagreed on test priority.', 'स्थिति: QA टेस्ट प्राथमिकता।'],
      ['Situation: product wanted date I saw as risky.', 'स्थिति: प्रोडक्ट तारीख जोखिम।'],
      ['STAR: situation, task, action, result.', 'STAR संरचना।']
    )),
    turn('Person', 'What was your action?', 'कार्रवाई?', alts(
      ['Emotions high?', 'भावना ऊँची?'],
      ['Who won?', 'कौन जीता?']
    )),
    turn('You', 'I scheduled thirty minutes, listed trade offs on a doc, no Slack fight.', 'तीस मिनट, डॉक व्यापार बलिदान, स्लैक झगड़ा नहीं।', alts(
      ['Action: brought data on bug count.', 'कार्रवाई: बग गिनती डेटा।'],
      ['Action: proposed canary with shared owner.', 'कार्रवाई: कैनरी साझा मालिक।'],
      ['Stay professional, no personal attacks.', 'पेशेवर, व्यक्तिगत हमला नहीं।']
    )),
    turn('Person', 'Result?', 'परिणाम?', alts(
      ['Relationship after?', 'बाद रिश्ता?'],
      ['What would you change?', 'क्या बदलते?']
    )),
    turn('You', 'We shipped on time with smaller scope and stayed friendly.', 'समय पर छोटा स्कोप शिप, दोस्ताना रहे।', alts(
      ['Result: date moved one week, fewer bugs.', 'परिणाम: एक हफ्ता खिसका, कम बग।'],
      ['Result: joint retro improved process.', 'परिणाम: संयुक्त रेट्रो प्रक्रिया।'],
      ['Conflict story needs mature ending.', 'परिपक्व अंत।']
    )),
    turn('Person', 'Mature handling.', 'परिपक्व।', alts(
      ['Another example?', 'और उदाहरण?'],
      ['Enough.', 'बस।']
    )),
    turn('You', 'One example is enough unless you want more.', 'एक पर्याप्त जब तक और न माँगें।', alts(
      ['Behavioral answers under two minutes.', 'दो मिनट से कम।'],
      ['Thanks.', 'शुक्रिया।'],
      ['Ready next.', 'अगला तैयार।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'failure-story', 'Failure Story', [
    turn('Person', 'Tell me about a time you failed.', 'विफलता समय।', alts(
      ['Biggest mistake?', 'सबसे बड़ी गलती?'],
      ['What did you learn?', 'क्या सीखा?']
    )),
    turn('You', 'I pushed a config change that caused login errors for ten minutes.', 'कॉन्फिग बदलाव दस मिनट लॉगिन एरर।', alts(
      ['I missed a deadline and client escalated.', 'डेडलाइन छूट क्लाइंट एस्केलेट।'],
      ['My design was rejected after two weeks build.', 'डिज़ाइन खारिज दो हफ्ता बिल्ड बाद।'],
      ['Own failure without blaming others.', 'दोष दूसरों नहीं।']
    )),
    turn('Person', 'Immediate response?', 'तत्काल प्रतिक्रिया?', alts(
      ['Hide or own?', 'छुपाओ या स्वीकार?'],
      ['Manager reaction?', 'मैनेजर?']
    )),
    turn('You', 'I owned it in the war room, rolled back in four minutes.', 'वॉर रूम स्वीकार, चार मिनट रोलबैक।', alts(
      ['I told client before they discovered.', 'खोज से पहले क्लाइंट।'],
      ['I apologized to team and wrote postmortem.', 'टीम माफ़ पोस्टमॉर्टम।'],
      ['Speed and honesty reduce damage.', 'गति ईमानदारी क्षति कम।']
    )),
    turn('Person', 'Prevention after?', 'बाद रोक?', alts(
      ['Fired or retained?', 'निकाला या रखा?'],
      ['Repeat risk?', 'दोहराव?']
    )),
    turn('You', 'Added config review checklist and staging gate.', 'कॉन्फिग रिव्यू चेकलिस्ट स्टेजिंग गेट।', alts(
      ['Retained, trust rebuilt over months.', 'रखा, महीनों भरोसा।'],
      ['Low repeat, I am careful now.', 'कम दोहराव, सावधान।'],
      ['Failure story shows growth.', 'विकास दिखाए।']
    )),
    turn('Person', 'Everyone fails. Recovery matters.', 'सब विफल। उबार मायने।', alts(
      ['Honest story.', 'ईमानदार।'],
      ['Continue.', 'जारी।']
    )),
    turn('You', 'Recovery focus is fair.', 'उबार फोकस उचित।', alts(
      ['Failure answer done.', 'विफलता पूर्ण।'],
      ['Grateful for question.', 'सवाल आभारी।'],
      ['Next.', 'अगला।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'leadership-example', 'Leadership Example', [
    turn('Person', 'Give a leadership example without a manager title.', 'बिना मैनेजर शीर्षक नेतृत्व।', alts(
      ['Led a project?', 'प्रोजेक्ट लीड?'],
      ['Mentored someone?', 'मेंटर?']
    )),
    turn('You', 'I led incident response when lead was on leave.', 'लीड छुट्टी पर इंसिडेंट प्रतिक्रिया लीड।', alts(
      ['I organized hackathon for twenty interns.', 'बीस इंटर्न हैकाथॉन।'],
      ['I drove migration task force across three teams.', 'तीन टीम माइग्रेशन बल।'],
      ['Leadership is influence not title.', 'प्रभाव शीर्षक नहीं।']
    )),
    turn('Person', 'What did you do specifically?', 'खास क्या किया?', alts(
      ['Resistance?', 'विरोध?'],
      ['Outcome?', 'परिणाम?']
    )),
    turn('You', 'I assigned roles, kept exec updates every thirty minutes, calm tone.', 'भूमिका, तीस मिनट अधिकारी अपडेट, शांत स्वर।', alts(
      ['Action: paired seniors with juniors.', 'कार्रवाई: सीनियर जूनियर पेयर।'],
      ['Action: cut scope to secure data first.', 'कार्रवाई: डेटा पहले स्कोप काट।'],
      ['Delegated clearly.', 'साफ सौंपा।']
    )),
    turn('Person', 'Measurable outcome?', 'मापने योग्य?', alts(
      ['Feedback from team?', 'टीम फीडबैक?'],
      ['Would they follow you again?', 'फिर पीछा?']
    )),
    turn('You', 'Resolved in ninety minutes, postmortem praised coordination.', 'नब्बे मिनट, पोस्टमॉर्टम समन्वय प्रशंसा।', alts(
      ['Team said they felt informed.', 'टीम सूचित महसूस।'],
      ['Yes, they asked me lead next drill.', 'अगला ड्रिल लीड माँगा।'],
      ['Leadership STAR like conflict.', 'STAR जैसे।']
    )),
    turn('Person', 'Strong informal lead.', 'मज़बूत अनौपचारिक।', alts(
      ['Manager track interest?', 'मैनेजर ट्रैक?'],
      ['Good.', 'अच्छा।']
    )),
    turn('You', 'Open to IC or lead later based on impact.', 'प्रभाव पर IC या लीड।', alts(
      ['Leadership example complete.', 'नेतृत्व पूर्ण।'],
      ['Thank you.', 'धन्यवाद।'],
      ['Salary round next maybe.', 'शायद वेतन।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'handled-pressure', 'Handled Pressure', [
    turn('Person', 'Describe a high pressure situation.', 'उच्च दबाव स्थिति।', alts(
      ['Multiple deadlines?', 'कई डेडलाइन?'],
      ['On call disaster?', 'ऑन कॉल आपदा?']
    )),
    turn('You', 'Black Friday sale, traffic triple, alerts firing.', 'ब्लैक फ्राइडे, ट्रैफिक तिगुना, अलर्ट।', alts(
      ['CEO demo next morning, bug at midnight.', 'CEO डेमो आधी रात बग।'],
      ['Audit in two days, logs incomplete.', 'दो दिन ऑडिट, लॉग अधूरे।'],
      ['Pressure story needs concrete stakes.', 'ठोस दांव।']
    )),
    turn('Person', 'How did you prioritize?', 'प्राथमिकता कैसे?', alts(
      ['Panic?', 'घबराहट?'],
      ['Team role?', 'टीम भूमिका?']
    )),
    turn('You', 'Stop bleeding first, scale pods, defer non critical fixes.', 'पहले रोक, पॉड स्केल, गैर ज़रूरी बाद।', alts(
      ['List on whiteboard, one owner per item.', 'व्हाइटबोर्ड एक मालिक प्रति।'],
      ['I stayed calm, took short breaks for water.', 'शांत, पानी विराम।'],
      ['Communicated every fifteen minutes to leads.', 'पंद्रह मिनट लीड अपडेट।']
    )),
    turn('Person', 'Outcome?', 'परिणाम?', alts(
      ['Burnout after?', 'बर्नआउट बाद?'],
      ['Proud moment?', 'गर्व?']
    )),
    turn('You', 'Sale succeeded, no data loss, slept next day.', 'सेल सफल, डेटा हानि नहीं, अगले दिन सोया।', alts(
      ['Minor burnout, took day off after.', 'थोड़ा बर्नआउट, दिन छुट्टी।'],
      ['Proud of team, not solo hero.', 'टीम गर्व, अकेला नायक नहीं।'],
      ['Pressure answer shows process.', 'प्रक्रिया दिखाए।']
    )),
    turn('Person', 'Composed under fire.', 'आग में शांत।', alts(
      ['We need that.', 'चाहिए।'],
      ['HR round after.', 'HR बाद।']
    )),
    turn('You', 'Happy to bring same composure here.', 'यहाँ भी शांति लाऊँगा।', alts(
      ['Behavioral section strong finish.', 'व्यवहार मज़बूत समापन।'],
      ['Thanks panel.', 'पैनल शुक्रिया।'],
      ['Ready for HR.', 'HR तैयार।']
    )),
  ]),
]);
