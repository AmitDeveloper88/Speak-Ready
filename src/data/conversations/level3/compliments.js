import { lesson, turn, alts } from '../helpers.js';

const TOPIC = 'compliments';
const TITLE = 'Compliments';

export const complimentsLessons = Object.fromEntries([
  lesson(TOPIC, TITLE, 'appearance', 'Appearance', [
    turn('Person', 'That jacket looks great on you.', 'जैकेट तुम पर बढ़िया लग रही।', alts(
      ['Nice haircut.', 'अच्छा हेयरकट।'],
      ['Color suits you.', 'रंग सूट करता।'],
      ['You look fresh today.', 'आज ताज़ा लग रहे।']
    )),
    turn('You', 'Thank you. I just got it last week.', 'शुक्रिया। पिछले हफ्ते ली।', alts(
      ['Thanks, new purchase.', 'शुक्रिया, नई।'],
      ['Glad you like it.', 'पसंद आया खुशी।'],
      ['Thanks, feeling confident.', 'शुक्रिया, आत्मविश्वास।']
    )),
    turn('Person', 'Where did you buy it?', 'कहाँ खरीदी?', alts(
      ['Matches your shoes.', 'जूतों से मैच।'],
      ['Very tasteful.', 'बहुत स्टाइलिश।'],
      ['Festive vibe.', 'त्योहारी लुक।']
    )),
    turn('You', 'Small shop near Forum mall.', 'फोरम मॉल पास छोटी दुकान।', alts(
      ['Local brand at Forum.', 'फोरम लोकल ब्रांड।'],
      ['Online, but tried in store first.', 'ऑनलाइन, पहले स्टोर।'],
      ['Gift from my sister actually.', 'सच में बहन का तोहफा।']
    )),
    turn('Person', 'I should check that shop.', 'वह दुकान देखूँ।', alts(
      ['Need a winter layer too.', 'सर्दी की लेयर चाहिए।'],
      ['You have good style sense.', 'स्टाइल सेंस अच्छा।']
    )),
    turn('You', 'Thanks. Happy to share the name.', 'शुक्रिया। नाम भेज दूँगा।', alts(
      ['I will ping you the link.', 'लिंक पिंग।'],
      ['Compliment made my day.', 'तारीफ ने दिन बना दिया।'],
      ['You always dress sharp too.', 'तुम भी शार्प ड्रेस।']
    )),
    turn('Person', 'We should shop together.', 'साथ शॉपिंग करें।', alts(
      ['Saturday?', 'शनिवार?'],
      ['I need honest feedback.', 'ईमानदार फीडबैक चाहिए।']
    )),
    turn('You', 'Saturday works. Thanks again.', 'शनिवार ठीक। फिर शुक्रिया।', alts(
      ['Fun plan.', 'मज़ेदार प्लान।'],
      ['See you then.', 'तब मिलते।'],
      ['Kind words matter.', 'अच्छे शब्द मायने।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'skills', 'Skills', [
    turn('Person', 'Your presentation was crystal clear.', 'प्रेज़ेंटेशन बिल्कुल साफ।', alts(
      ['You draw so well.', 'बहुत अच्छा बनाते।'],
      ['Great guitar playing.', 'गिटार बढ़िया।'],
      ['Excel tricks are impressive.', 'एक्सेल ट्रिक कमाल।']
    )),
    turn('You', 'Thank you. I practiced the flow a lot.', 'धन्यवाद। फ्लो खूब अभ्यास।', alts(
      ['Thanks, means a lot.', 'शुक्रिया, बहुत मायने।'],
      ['Still learning, but grateful.', 'अभी सीख, पर आभारी।'],
      ['Your praise motivates me.', 'तारीफ प्रेरणा देती।']
    )),
    turn('Person', 'How did you learn that?', 'कैसे सीखा?', alts(
      ['Teach the team?', 'टीम सिखाओगे?'],
      ['Natural talent?', 'जन्मजात?'],
      ['Any course?', 'कोर्स?']
    )),
    turn('You', 'Online course plus weekly practice club.', 'ऑनलाइन कोर्स और हफ्ते क्लब।', alts(
      ['YouTube and peer feedback.', 'यूट्यूब और साथी फीडबैक।'],
      ['Mentor plus daily reps.', 'मेंटर और रोज अभ्यास।'],
      ['Trial and error mostly.', 'ज़्यादातर ट्राय।']
    )),
    turn('Person', 'Share resources?', 'रिसोर्स शेयर?', alts(
      ['Team needs this skill.', 'टीम को चाहिए।'],
      ['You could lead a session.', 'सेशन लीड करो।']
    )),
    turn('You', 'I will send links after lunch.', 'लंच के बाद लिंक।', alts(
      ['Happy to do a lunch learn.', 'लंच लर्न करूँगा।'],
      ['Let us uplift everyone.', 'सबको ऊपर ले चलें।'],
      ['Thanks for believing in me.', 'भरोसे के लिए शुक्रिया।']
    )),
    turn('Person', 'Lunch learn sounds perfect.', 'लंच लर्न परफेक्ट।', alts(
      ['I will book a room.', 'रूम बुक।'],
      ['Thirty minutes enough.', 'तीस मिनट काफी।']
    )),
    turn('You', 'Deal. Thanks for the opportunity.', 'ठीक। मौके के लिए शुक्रिया।', alts(
      ['Excited to share.', 'शेयर करने को उत्सुक।'],
      ['Compliment plus chance, wow.', 'तारीफ और मौका।'],
      ['See you at lunch learn.', 'लंच लर्न में।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'work', 'Work', [
    turn('Person', 'Your report saved us hours.', 'रिपोर्ट ने घंटे बचाए।', alts(
      ['Client praised your patience.', 'क्लाइंट ने धैर्य की तारीफ।'],
      ['Clean code, nice job.', 'साफ कोड, अच्छा।'],
      ['You handled pressure well.', 'दबाव संभाला।']
    )),
    turn('You', 'Thank you. Team support made it possible.', 'धन्यवाद। टीम सपोर्ट से हुआ।', alts(
      ['Thanks, group effort.', 'शुक्रिया, सामूहिक।'],
      ['Glad it helped.', 'मदद हुई खुशी।'],
      ['Appreciate the recognition.', 'मान्यता की कद्र।']
    )),
    turn('Person', 'You deserve credit on the slide.', 'स्लाइड पर क्रेडिट बनता।', alts(
      ['Manager should know.', 'मैनेजर जाने।'],
      ['Keep this standard.', 'यही स्तर रखो।'],
      ['Promotion track maybe.', 'प्रमोशन ट्रैक?']
    )),
    turn('You', 'Thanks. I will mention the team too.', 'शुक्रिया। टीम का ज़िक्र भी।', alts(
      ['Shared win feels better.', 'साझा जीत अच्छी।'],
      ['Credit to reviewers as well.', 'रिव्यूअर को भी।'],
      ['Humble thanks.', 'विनम्र धन्यवाद।']
    )),
    turn('Person', 'Humility plus skill, rare mix.', 'विनम्रता और कौशल, दुर्लभ।', alts(
      ['Proud to work with you.', 'साथ काम पर गर्व।'],
      ['Raise incoming hopefully.', 'हो सके तो वेतन बढ़ोतरी।']
    )),
    turn('You', 'That means a lot coming from you.', 'आपसे सुनकर बहुत मायने।', alts(
      ['Motivated for next sprint.', 'अगले स्प्रिंट प्रेरित।'],
      ['Thanks for mentoring quietly.', 'चुपचाप मेंटरिंग शुक्रिया।'],
      ['I will pay it forward.', 'आगे बढ़ाऊँगा।']
    )),
    turn('Person', 'Keep going. Sky is open.', 'चलते रहो। आसमान खुला।', alts(
      ['Celebrate Friday.', 'शुक्रवार सेलिब्रेट।'],
      ['Coffee on me.', 'कॉफी मेरी।']
    )),
    turn('You', 'Friday coffee sounds great. Thank you.', 'शुक्रवार कॉफी बढ़िया। धन्यवाद।', alts(
      ['Grateful today.', 'आज आभारी।'],
      ['Compliments fuel work.', 'तारीफ ईंधन।'],
      ['See you Friday.', 'शुक्रवार मिलते।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'personality', 'Personality', [
    turn('Person', 'You stay calm when others panic.', 'दूसरे घबराए तो तुम शांत।', alts(
      ['You are very thoughtful.', 'बहुत विचारशील।'],
      ['Great sense of humor.', 'हास्य बढ़िया।'],
      ['People trust you easily.', 'लोग जल्दी भरोसा।']
    )),
    turn('You', 'Thank you. I try to listen first.', 'शुक्रिया। पहले सुनने की कोशिश।', alts(
      ['Thanks, calm is practice.', 'शुक्रिया, शांति अभ्यास।'],
      ['Kind of you to say.', 'कहना दयालु।'],
      ['I appreciate that.', 'कद्र है।']
    )),
    turn('Person', 'Teams need people like you.', 'टीम को तुम जैसे चाहिए।', alts(
      ['You lighten tense rooms.', 'तनाव हल्का करते।'],
      ['Empathy is your strength.', 'सहानुभूति ताकत।'],
      ['Reliable friend too.', 'भरोसेमंद दोस्त।']
    )),
    turn('You', 'That compliment warms me. Thanks.', 'तारीफ दिल गरम करती। शुक्रिया।', alts(
      ['I value kindness back.', 'दया वापसी पसंद।'],
      ['Trying to grow, not just calm.', 'सिर्फ शांत नहीं, बढ़ना।'],
      ['Your words encourage me.', 'शब्द हौसला देते।']
    )),
    turn('Person', 'Give yourself credit too.', 'खुद को भी श्रेय दो।', alts(
      ['Do not downplay it.', 'कम मत करो।'],
      ['Own your strengths.', 'ताकत मानो।']
    )),
    turn('You', 'Working on that. Thanks for the mirror.', 'उस पर काम। आईना के लिए शुक्रिया।', alts(
      ['I will accept praise better.', 'तारीफ बेहतर स्वीकारूँगा।'],
      ['Positive feedback helps.', 'सकारात्मक फीडबैक मदद।'],
      ['You model it well too.', 'तुम भी अच्छा मॉडल।']
    )),
    turn('Person', 'Friends tell friends the truth.', 'दोस्त सच कहते।', alts(
      ['Grab lunch soon?', 'जल्दी लंच?'],
      ['Respect.', 'सम्मान।']
    )),
    turn('You', 'Lunch soon. Thanks for seeing the good.', 'जल्दी लंच। अच्छाई देखने शुक्रिया।', alts(
      ['Means a lot.', 'बहुत मायने।'],
      ['Mutual respect.', 'पारस्परिक सम्मान।'],
      ['Have a great day.', 'अच्छा दिन।']
    )),
  ]),
]);
