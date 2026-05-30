import { lesson, turn, alts } from '../helpers.js';

const TOPIC = 'tell-me-about-yourself';
const TITLE = 'Tell Me About Yourself';

export const tellMeAboutYourselfLessons = Object.fromEntries([
  lesson(TOPIC, TITLE, 'opening-intro', 'Opening Introduction', [
    turn('Person', 'Tell me about yourself.', 'अपने बारे में बताइए।', alts(
      ['Walk me through your background.', 'पृष्ठभूमि बताइए।'],
      ['Start wherever you like.', 'जहाँ चाहें शुरू।'],
      ['We have ten minutes.', 'दस मिनट हैं।']
    )),
    turn('You', 'I am Rohan, a backend engineer with four years in fintech.', 'मैं रोहन, चार साल फिनटेक बैकएंड।', alts(
      ['I am Priya, a data analyst from Pune, three years experience.', 'प्रिया, पुणे डेटा एनालिस्ट, तीन साल।'],
      ['I am Amit, software developer focused on payments and APIs.', 'अमित, पेमेंट API डेवलपर।'],
      ['I build reliable systems and enjoy clear teamwork.', 'विश्वसनीय सिस्टम, साफ टीमवर्क पसंद।']
    )),
    turn('Person', 'Why this role interests you?', 'यह भूमिका क्यों?', alts(
      ['Recent project you are proud of?', 'हाल का गर्व प्रोजेक्ट?'],
      ['What are you looking for next?', 'आगे क्या ढूँढ रहे?']
    )),
    turn('You', 'Your scale and product impact match what I want next.', 'आपका स्केल प्रभाव मेरा अगला लक्ष्य।', alts(
      ['I want stronger platform problems.', 'मज़बूत प्लेटफॉर्म समस्याएँ।'],
      ['Culture of ownership appeals to me.', 'स्वामित्व संस्कृति आकर्षक।'],
      ['I read about your payments stack and related.', 'पेमेंट स्टैक से जुड़ा।']
    )),
    turn('Person', 'Good. Keep going.', 'अच्छा। जारी।', alts(
      ['Education briefly?', 'शिक्षा संक्षेप?'],
      ['Any gap to explain?', 'अंतराल?']
    )),
    turn('You', 'B Tech from NIT, then two startups, now ready for larger scale.', 'NIT B Tech, दो स्टार्टअप, अब बड़े स्केल।', alts(
      ['MCA plus two years product company.', 'MCA और दो साल प्रोडक्ट।'],
      ['Self taught web, then formal CS degree.', 'स्वयं वेब, फिर CS डिग्री।'],
      ['Intro should stay under two minutes.', 'परिचय दो मिनट से कम।']
    )),
    turn('Person', 'Clear structure. Next section technical.', 'साफ संरचना। अगला तकनीकी।', alts(
      ['Any questions for us?', 'हमसे सवाल?'],
      ['Comfortable so far?', 'अब तक आराम?']
    )),
    turn('You', 'Yes. May I ask about the team structure?', 'हाँ। टीम संरचना पूछ सकूँ?', alts(
      ['Opening intro sets interview tone.', 'शुरुआती परिचय टोन।'],
      ['Thank you for listening.', 'सुनने धन्यवाद।'],
      ['Ready for technical.', 'तकनीकी तैयार।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'career-switch-story', 'Career Switch Story', [
    turn('Person', 'You moved from teaching to tech. Why?', 'शिक्षण से टेक क्यों?', alts(
      ['Non CS to developer, explain.', 'नॉन CS से डेवलपर।'],
      ['Big career change on resume.', 'रिज़्यूमे बड़ा बदलाव।']
    )),
    turn('You', 'I loved explaining concepts, but I wanted to build products myself.', 'समझाना पसंद, खुद प्रोडक्ट बनाना चाहा।', alts(
      ['Teaching trained my communication, coding gave craft.', 'शिक्षण संचार, कोडिंग कौशल।'],
      ['I did a bootcamp while working evenings.', 'शाम बूटकैंप काम संग।'],
      ['Students asked for tools, I learned to code to help.', 'छात्र टूल माँगे, कोड सीखा।']
    )),
    turn('Person', 'How serious is this switch?', 'बदलाव कितना गंभीर?', alts(
      ['Will you go back?', 'वापस जाएँगे?'],
      ['Proof of commitment?', 'प्रतिबद्धता प्रमाण?']
    )),
    turn('You', 'I have shipped two apps and interned six months full time.', 'दो ऐप शिप, छह महीने फुल टाइम इंटर्न।', alts(
      ['Open source commits for a year.', 'एक साल ओपन सोर्स।'],
      ['Left stable job only after offer in hand.', 'ऑफर मिलने बाद स्थिर नौकरी छोड़ी।'],
      ['Switch is deliberate, not a trial.', 'बदलाव सोचा, ट्रायल नहीं।']
    )),
    turn('Person', 'Biggest challenge in the switch?', 'बदलाव की सबसे बड़ी चुनौती?', alts(
      ['Imposter feelings?', 'अपराधी जैसा?'],
      ['Age or gap concern?', 'उम्र अंतराल?']
    )),
    turn('You', 'Imposter syndrome early, solved by consistent projects and mentors.', 'शुरू अपराधी जैसा, प्रोजेक्ट मेंटर से ठीक।', alts(
      ['Learning pace was steep first six months.', 'पहले छह महीने तीव्र।'],
      ['I still learn daily, that is the point.', 'रोज सीखता, यही बात।'],
      ['Honest story beats perfect path.', 'ईमानदार कहानी परफेक्ट से बेहतर।']
    )),
    turn('Person', 'Respect the effort.', 'प्रयास सम्मान।', alts(
      ['Team needs communicators.', 'टीम संवाद चाहिए।'],
      ['Let us continue.', 'आगे।']
    )),
    turn('You', 'Thank you. I bring patience and fresh energy.', 'धन्यवाद। धैर्य नई ऊर्जा लाता।', alts(
      ['Career switch answers need confidence.', 'बदलाव जवाब आत्मविश्वास।'],
      ['Happy to elaborate any year.', 'किसी वर्ष विस्तार।'],
      ['Ready for next question.', 'अगला सवाल तैयार।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'fresher-intro', 'Fresher Introduction', [
    turn('Person', 'You are a fresher. Why should we hire you?', 'फ्रेशर। क्यों भर्ती?', alts(
      ['No full time job yet.', 'अभी फुल टाइम नहीं।'],
      ['Campus hire round.', 'कैंपस भर्ती।']
    )),
    turn('You', 'I have strong fundamentals and two internship projects in production.', 'मज़बूत बुनियाद, दो इंटर्नशिप प्रोडक्शन।', alts(
      ['I learn fast and accept feedback.', 'तेज़ सीख, फीडबैक स्वीकार।'],
      ['College team lead for coding club.', 'कोडिंग क्लब टीम लीड।'],
      ['I prepared specifically for this stack.', 'इस स्टैक के लिए तैयारी।']
    )),
    turn('Person', 'Favorite subject and why?', 'पसंदीदा विषय क्यों?', alts(
      ['Low CGPA concern?', 'कम CGPA?'],
      ['Projects list?', 'प्रोजेक्ट सूची?']
    )),
    turn('You', 'Data structures and systems design interest me most.', 'डेटा स्ट्रक्चर सिस्टम डिज़ाइन सबसे।', alts(
      ['Algorithms for problem solving habit.', 'एल्गोरिदम समस्या आदत।'],
      ['DBMS because I built a hostel app.', 'DBMS क्योंकि हॉस्टल ऐप।'],
      ['CGPA seven point two, projects show skill better.', 'CGPA सात दो, प्रोजेक्ट कौशल दिखाते।']
    )),
    turn('Person', 'Where do you see yourself in three years?', 'तीन साल बाद?', alts(
      ['Relocation okay?', 'स्थानांतरण?'],
      ['Bond acceptable?', 'बॉन्ड?']
    )),
    turn('You', 'Solid engineer owning features end to end.', 'मज़बूत इंजीनियर एंड टू एंड फीचर।', alts(
      ['Open to Bangalore or Hyderabad.', 'बैंगलोर हैदराबाद खुला।'],
      ['I read bond terms, acceptable.', 'बॉन्ड पढ़ा, स्वीकार।'],
      ['Fresher intro shows hunger not arrogance.', 'फ्रेशर भूख अहंकार नहीं।']
    )),
    turn('Person', 'Hunger is good.', 'भूख अच्छी।', alts(
      ['Training period six months.', 'प्रशिक्षण छह महीने।'],
      ['Next interviewer waiting.', 'अगला इंतजार।']
    )),
    turn('You', 'I am ready to learn from seniors.', 'सीनियर से सीख तैयार।', alts(
      ['Thank you for the chance.', 'मौका धन्यवाद।'],
      ['Excited about graduate program.', 'ग्रेजुएट प्रोग्राम उत्साह।'],
      ['See you in next round.', 'अगले राउंड।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'thirty-second-pitch', 'Thirty Second Pitch', [
    turn('Person', 'You have thirty seconds. Go.', 'तीस सेकंड। शुरू।', alts(
      ['Elevator pitch please.', 'एलिवेटर पिच।'],
      ['Quick intro only.', 'जल्दी परिचय।']
    )),
    turn('You', 'Backend engineer, four years, payments and scale, seeking impact here.', 'बैकएंड चार साल, पेमेंट स्केल, यहाँ प्रभाव।', alts(
      ['Product designer, user research plus UI systems.', 'प्रोडक्ट डिज़ाइनर, यूज़र रिसर्च UI।'],
      ['QA lead, automation and release quality.', 'QA लीड, ऑटोमेशन रिलीज़ गुणवत्ता।'],
      ['Short: build, ship, learn, repeat.', 'छोटा: बनाओ, शिप, सीखो, दोहराओ।']
    )),
    turn('Person', 'Time. One line on strength.', 'समय। एक लाइन ताकत।', alts(
      ['Impressive brevity.', 'संक्षेप प्रभाव।'],
      ['Too fast, slower.', 'तेज़, धीरे।']
    )),
    turn('You', 'Strength is calm debugging under production pressure.', 'ताकत प्रोडक्शन दबाव शांत डिबग।', alts(
      ['Strength is translating business to tech plans.', 'ताकत व्यवसाय से टेक योजना।'],
      ['Strength is mentoring juniors clearly.', 'ताकत जूनियर साफ मेंटर।'],
      ['Thirty seconds forces clarity.', 'तीस सेकंड स्पष्टता।']
    )),
    turn('Person', 'Good discipline. Full interview next.', 'अनुशासन अच्छा। पूरा इंटरव्यू।', alts(
      ['Practice shows.', 'अभ्यास दिखता।'],
      ['Relax now.', 'आराम।']
    )),
    turn('You', 'Thank you. I rehearsed but kept it natural.', 'धन्यवाद। रिहर्सल पर स्वाभाविक।', alts(
      ['Pitch works in networking too.', 'पिच नेटवर्किंग में।'],
      ['Ready to expand if you want.', 'विस्तार चाहें तो तैयार।'],
      ['Appreciate the exercise.', 'अभ्यास कद्र।']
    )),
    turn('Person', 'We will expand. Water?', 'विस्तार करेंगे। पानी?', alts(
      ['Take a breath.', 'साँस लो।'],
      ['Panel of three today.', 'आज तीन पैनल।']
    )),
    turn('You', 'Water please. Ready for depth.', 'पानी। गहराई तैयार।', alts(
      ['Short pitch opens doors.', 'छोटी पिच दरवाज़ा।'],
      ['Thank you.', 'धन्यवाद।'],
      ['Let us continue.', 'जारी करें।']
    )),
  ]),
]);
