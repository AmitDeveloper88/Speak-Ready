import { lesson, turn, alts } from '../helpers.js';

const TOPIC = 'presentations';
const TITLE = 'Presentations';

export const presentationsLessons = Object.fromEntries([
  lesson(TOPIC, TITLE, 'opening-talk', 'Opening Your Talk', [
    turn('Person', 'You are up. Floor is yours.', 'आपकी बारी।', alts(
      ['Mic is on.', 'माइक चालू।'],
      ['We have fifteen minutes.', 'पंद्रह मिनट।']
    )),
    turn('You', 'Good morning everyone. I am Rohan from platform engineering.', 'सुप्रभात सब। प्लेटफॉर्म इंजीनियरिंग रोहन।', alts(
      ['Thanks for having me today.', 'आज बुलाने शुक्रिया।'],
      ['I will keep this short and practical.', 'छोटा व्यावहारिक रखूँगा।'],
      ['Today we cover payment reliability.', 'आज पेमेंट विश्वसनीयता।']
    )),
    turn('Person', 'Audience is mixed, avoid jargon.', 'मिश्र दर्शक, जार्गन कम।', alts(
      ['Slides ready?', 'स्लाइड तैयार?'],
      ['Timer visible?', 'टाइमर दिख रहा?']
    )),
    turn('You', 'I will explain terms as we go.', 'शब्द चलते समझाऊँगा।', alts(
      ['Goal is one clear takeaway.', 'एक साफ सबक।'],
      ['Questions at the end.', 'अंत सवाल।'],
      ['Opening sets the tone.', 'शुरुआत टोन।']
    )),
    turn('Person', 'Go ahead.', 'आगे बढ़ो।', alts(
      ['We are listening.', 'सुन रहे।'],
      ['Start with the problem.', 'समस्या से शुरू।']
    )),
    turn('You', 'Last quarter, failed payments cost us trust and revenue.', 'पिछली तिमाही, फेल पेमेंट भरोसा राजस्व खर्च।', alts(
      ['Customers retried three times on average.', 'ग्राहक औसत तीन बार दोहराए।'],
      ['We heard it in support calls.', 'सपोर्ट कॉल में सुना।'],
      ['That is why we rebuilt retry logic.', 'इसलिए रिट्राई लॉजिक नया।']
    )),
    turn('Person', 'Strong hook.', 'मज़बूत शुरुआत।', alts(
      ['Continue.', 'जारी।'],
      ['Speak slower.', 'धीरे बोलो।']
    )),
    turn('You', 'Moving to slide two, our approach.', 'स्लाइड दो, हमारा तरीका।', alts(
      ['Openings need calm pace.', 'शुरुआत शांत गति।'],
      ['Thanks for attention.', 'ध्यान शुक्रिया।'],
      ['Here we go.', 'चलिए।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'explaining-slide', 'Explaining a Slide', [
    turn('Person', 'This chart is busy. Simplify?', 'चार्ट व्यस्त। सरल?', alts(
      ['What is the green line?', 'हरी लाइन क्या?'],
      ['Axis hard to read.', 'अक्ष पढ़ना कठिन।']
    )),
    turn('You', 'Green line is success rate after the fix.', 'हरी लाइन फिक्स बाद सफलता दर।', alts(
      ['Red was before, near eighty percent.', 'लाल पहले, अस्सी प्रतिशत पास।'],
      ['Now we sit above ninety eight.', 'अब अट्ठानवे से ऊपर।'],
      ['The gap is our main win.', 'अंतर मुख्य जीत।']
    )),
    turn('Person', 'Why the dip in week three?', 'तीसरे हफ्ते गिरावट क्यों?', alts(
      ['Holiday traffic?', 'छुट्टी ट्रैफिक?'],
      ['Good question.', 'अच्छा सवाल।']
    )),
    turn('You', 'Week three was a vendor outage, unrelated to our code.', 'तीसरा हफ्ता वेंडर आउटेज, कोड से अलग।', alts(
      ['We added failover after that.', 'बाद फेलओवर।'],
      ['Slide notes have incident link.', 'स्लाइड नोट इंसिडेंट लिंक।'],
      ['Explaining charts needs plain words.', 'चार्ट सादे शब्द।']
    )),
    turn('Person', 'Clearer now.', 'अब साफ।', alts(
      ['Next slide.', 'अगली स्लाइड।'],
      ['Time check five minutes left.', 'पाँच मिनट बाकी।']
    )),
    turn('You', 'Next is rollout plan in three phases.', 'अगली तीन चरण रोलआउट।', alts(
      ['I will not read bullets verbatim.', 'बुलेट साझा नहीं पढ़ूँगा।'],
      ['Each phase has owner names.', 'हर चरण मालिक नाम।'],
      ['Pause for questions after.', 'बाद विराम सवाल।']
    )),
    turn('Person', 'Good pace.', 'अच्छी गति।', alts(
      ['Louder please.', 'ज़ोर से।'],
      ['Clicker died, use keyboard.', 'क्लिकर मरा, कीबोर्ड।']
    )),
    turn('You', 'Louder now. Keyboard arrow for slides.', 'अब ज़ोर। कीबोर्ड तीर स्लाइड।', alts(
      ['Slide explain practice pays off.', 'स्लाइड अभ्यास फायदा।'],
      ['Continuing.', 'जारी।'],
      ['Thanks.', 'शुक्रिया।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'handling-qa', 'Q and A', [
    turn('Person', 'Any questions from the room?', 'कमरे से सवाल?', alts(
      ['Chat has one.', 'चैट में एक।'],
      ['We have two minutes.', 'दो मिनट।']
    )),
    turn('You', 'Yes, happy to take questions.', 'हाँ, सवाल स्वीकार।', alts(
      ['Please unmute or type in chat.', 'अनम्यूट या चैट।'],
      ['I may note unknowns for follow up.', 'अज्ञात फॉलो अप नोट।'],
      ['Who would like to start?', 'कौन शुरू?']
    )),
    turn('Person', 'Does this work for international cards?', 'अंतर्राष्ट्रीय कार्ड काम?', alts(
      ['What about PCI?', 'PCI?'],
      ['Cost of the project?', 'प्रोजेक्ट लागत?']
    )),
    turn('You', 'International cards yes, added in phase two last month.', 'अंतर्राष्ट्रीय कार्ड हाँ, पिछले महीने चरण दो।', alts(
      ['PCI scope unchanged, audit passed.', 'PCI स्कोप नहीं बदला, ऑडिट पास।'],
      ['Cost slide ten has ballpark figures.', 'लागत स्लाइड दस अनुमान।'],
      ['If unsure I will email exact numbers.', 'अनिश्चित ईमेल सटीक।']
    )),
    turn('Person', 'Security team asks about key rotation.', 'सिक्योरिटी कुंजी रोटेशन?', alts(
      ['Tough crowd.', 'कठिन दर्शक।'],
      ['Stay honest.', 'ईमानदार रहो।']
    )),
    turn('You', 'Keys rotate every ninety days automatically.', 'कुंजी हर नब्बे दिन स्वचालित।', alts(
      ['Runbook link in appendix.', 'रनबुक परिशिष्ट लिंक।'],
      ['Q and A needs short direct answers.', 'प्रश्नोत्तर छोटे सीधे।'],
      ['Happy to deep dive offline.', 'ऑफलाइन गहराई खुशी।']
    )),
    turn('Person', 'No more questions.', 'और सवाल नहीं।', alts(
      ['Wrap up.', 'समापन।'],
      ['Good answers.', 'अच्छे जवाब।']
    )),
    turn('You', 'Thanks for sharp questions.', 'तीखे सवाल शुक्रिया।', alts(
      ['QA shows engagement.', 'प्रश्नोत्तर जुड़ाव।'],
      ['Sending appendix link.', 'परिशिष्ट लिंक भेज।'],
      ['Closing shortly.', 'जल्द समापन।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'closing-thanks', 'Closing Thanks', [
    turn('Person', 'One minute to close.', 'समापन एक मिनट।', alts(
      ['Land the plane.', 'उतारो।'],
      ['Time is up.', 'समय खत्म।']
    )),
    turn('You', 'To recap, we cut payment failures and ship in three phases.', 'रिकैप, पेमेंट फेल कम, तीन चरण शिप।', alts(
      ['Main ask is approve phase one budget.', 'मुख्य अनुरोध चरण एक बजट।'],
      ['Docs and Slack channel in follow up email.', 'फॉलो अप ईमेल डॉक स्लैक।'],
      ['Thank you for your time and questions.', 'समय सवाल धन्यवाद।']
    )),
    turn('Person', 'Applause. Good presentation.', 'ताली। अच्छी प्रेज़ेंटेशन।', alts(
      ['Feedback form later.', 'बाद फीडबैक फॉर्म।'],
      ['Stay for coffee.', 'कॉफी रुको।']
    )),
    turn('You', 'I will share slides on the wiki today.', 'आज विकी स्लाइड।', alts(
      ['Reach me on Slack for details.', 'विवरण स्लैक।'],
      ['Closing thanks matter.', 'समापन धन्यवाद मायने।'],
      ['Enjoy the rest of all hands.', 'बाकी ऑल हैंड्स एंजॉय।']
    )),
    turn('Person', 'Well done Rohan.', 'शाबाश रोहन।', alts(
      ['Manager proud.', 'मैनेजर गर्व।'],
      ['Next speaker up.', 'अगला वक्ता।']
    )),
    turn('You', 'Thanks team. Relieved it went well.', 'टीम शुक्रिया। अच्छा गया राहत।', alts(
      ['Practice made it smoother.', 'अभ्यास सुचारु।'],
      ['Open to feedback.', 'फीडबैक खुला।'],
      ['Stepping down.', 'नीचे उतर।']
    )),
    turn('Person', 'Feedback in survey.', 'सर्वे फीडबैक।', alts(
      ['Celebrate later.', 'बाद जश्न।'],
      ['Meeting ends.', 'मीटिंग समाप्त।']
    )),
    turn('You', 'Will fill survey. Thanks again everyone.', 'सर्वे भरूँगा। फिर सब शुक्रिया।', alts(
      ['Strong close builds memory.', 'मज़बूत समापन याद।'],
      ['Done speaking.', 'बोलना खत्म।'],
      ['Good day.', 'अच्छा दिन।']
    )),
  ]),
]);
