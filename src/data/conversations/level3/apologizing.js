import { lesson, turn, alts } from '../helpers.js';

const TOPIC = 'apologizing';
const TITLE = 'Apologizing';

export const apologizingLessons = Object.fromEntries([
  lesson(TOPIC, TITLE, 'small-mistakes', 'Small Mistakes', [
    turn('Person', 'You bumped my coffee, look.', 'तुमने कॉफी टकरी, देखो।', alts(
      ['That was my foot you stepped on.', 'मेरा पैर रौंदा।'],
      ['You cut in line.', 'लाइन काटी।'],
      ['Wrong button on the lift.', 'लिफ्ट गलत बटन।']
    )),
    turn('You', 'Sorry, my fault. Totally careless.', 'माफ़, मेरी गलती। पूरी लापरवाही।', alts(
      ['Oops, sorry about that.', 'अरे, माफ़।'],
      ['My bad, did not see you.', 'मेरी गलती, देखा नहीं।'],
      ['Apologies, that was clumsy.', 'माफ़, भद्दा हुआ।']
    )),
    turn('Person', 'Shirt is stained though.', 'शर्ट दाग लगी।', alts(
      ['Happens, just be careful.', 'होता, सावधान।'],
      ['Annoying start to the day.', 'दिन की खराब शुरुआत।'],
      ['At least it is not hot.', 'गर्म नहीं सो बचा।']
    )),
    turn('You', 'Let me get napkins and water.', 'मैं नैपकिन और पानी लाता।', alts(
      ['I will fetch tissues now.', 'टिशू लाता।'],
      ['Can I buy you a fresh coffee?', 'नई कॉफी खरीदूँ?'],
      ['Hope it washes out.', 'उम्मीद धुल जाए।']
    )),
    turn('Person', 'Fresh coffee would be fair.', 'नई कॉफी उचित।', alts(
      ['Napkins first please.', 'पहले नैपकिन।'],
      ['Do not worry too much.', 'ज़्यादा मत घबराओ।']
    )),
    turn('You', 'On it. Sorry again.', 'कर रहा। फिर माफ़।', alts(
      ['Coffee order coming.', 'कॉफी ऑर्डर।'],
      ['Won’t rush in queues again.', 'फिर लाइन में नहीं दौड़ूँगा।'],
      ['Thanks for being cool.', 'ठंडा रहने के लिए शुक्रिया।']
    )),
    turn('Person', 'All good now.', 'अब ठीक।', alts(
      ['Accidents happen.', 'हादसे होते।'],
      ['See you around.', 'फिर मिलेंगे।']
    )),
    turn('You', 'Appreciate it. Have a good day.', 'कद्र है। अच्छा दिन।', alts(
      ['Thanks for understanding.', 'समझ के लिए शुक्रिया।'],
      ['Take care.', 'संभाल कर।'],
      ['I will be more careful.', 'और सावधान रहूँगा।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'serious-mistakes', 'Serious Mistakes', [
    turn('Person', 'You shared the wrong file with the client.', 'क्लाइंट को गलत फाइल भेजी।', alts(
      ['That email went to everyone.', 'ईमेल सबको चला गया।'],
      ['You missed the deadline.', 'डेडलाइन छूटी।'],
      ['Numbers in the sheet are wrong.', 'शीट में गलत आँकड़े।']
    )),
    turn('You', 'I am truly sorry. I take full responsibility.', 'सच में माफ़। पूरी जिम्मेदारी मेरी।', alts(
      ['I apologize. This is on me.', 'माफ़ी। यह मेरी।'],
      ['Sorry, no excuses.', 'माफ़, बहाना नहीं।'],
      ['I own this mistake completely.', 'गलती पूरी मेरी।']
    )),
    turn('Person', 'Client is upset. What now?', 'क्लाइंट नाराज़। अब?', alts(
      ['Manager wants answers.', 'मैनेजर जवाब चाहता।'],
      ['How did this happen?', 'कैसे हुआ?'],
      ['This affects trust.', 'भरोसे पर असर।']
    )),
    turn('You', 'I will call the client and send the correct file.', 'क्लाइंट को कॉल, सही फाइल भेजूँगा।', alts(
      ['Fixing it in the next hour.', 'अगले घंटे ठीक।'],
      ['Action plan ready in ten minutes.', 'दस मिनट में प्लान।'],
      ['Personal apology call from me.', 'मेरी तरफ से माफ़ी कॉल।']
    )),
    turn('Person', 'Include me on the call.', 'कॉल में मुझे जोड़ो।', alts(
      ['Document root cause.', 'जड़ कारण लिखो।'],
      ['No repeat please.', 'दोहराना मत।']
    )),
    turn('You', 'Will do. I will also add checks before send.', 'करूँगा। भेजने से पहले चेक जोड़ूँगा।', alts(
      ['Double review process tonight.', 'आज डबल रिव्यू।'],
      ['Learned a hard lesson.', 'कड़ी सीख।'],
      ['Thanks for giving me a chance to fix.', 'ठीक करने का मौका शुक्रिया।']
    )),
    turn('Person', 'Fix it first, talk later.', 'पहले ठीक, बात बाद।', alts(
      ['I trust you can repair this.', 'भरोसा कर सकता हूँ।'],
      ['Stay calm.', 'शांत रहो।']
    )),
    turn('You', 'Understood. Sorry again for the stress.', 'समझा। तनाव के लिए फिर माफ़।', alts(
      ['On it now.', 'अभी कर रहा।'],
      ['Will update in thirty minutes.', 'तीस मिनट में अपडेट।'],
      ['I will make this right.', 'सही करूँगा।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'workplace-apologies', 'Workplace Apologies', [
    turn('Person', 'You interrupted me in the client call.', 'क्लाइंट कॉल में बीच में बोले।', alts(
      ['Late to standup again.', 'फिर स्टैंडअप लेट।'],
      ['Tone was sharp in chat.', 'चैट में तीखा टोन।'],
      ['Forgot to CC me on email.', 'ईमेल पर CC भूले।']
    )),
    turn('You', 'Sorry, that was unprofessional of me.', 'माफ़, यह अपेशेवर था।', alts(
      ['Apologies, I should have waited.', 'माफ़, इंतजार करना चाहिए था।'],
      ['My mistake in the call.', 'कॉल में मेरी गलती।'],
      ['Sorry for the tone.', 'टोन के लिए माफ़।']
    )),
    turn('Person', 'Clients notice these things.', 'क्लाइंट देखते।', alts(
      ['Please respect speaking turns.', 'बोलने की बारी का सम्मान।'],
      ['We prepare together.', 'साथ तैयारी।'],
      ['Next time ping me first.', 'अगली बार पहले पिंग।']
    )),
    turn('You', 'You are right. I will follow the agenda.', 'सही। एजेंडा फॉलो करूँगा।', alts(
      ['Will mute until my turn.', 'अपनी बारी तक म्यूट।'],
      ['Added reminder on calendar.', 'कैलेंडर रिमाइंडर।'],
      ['Sorry for undermining the flow.', 'फ्लो बिगाड़ने पर माफ़।']
    )),
    turn('Person', 'Let us rehearse before the next call.', 'अगली कॉल से पहले रिहर्सल।', alts(
      ['Water under the bridge if fixed.', 'ठीक किया तो भूल।'],
      ['Team image matters.', 'टीम छवि मायने।']
    )),
    turn('You', 'Happy to rehearse today evening.', 'आज शाम रिहर्सल खुशी से।', alts(
      ['Send me your talking points.', 'बात के पॉइंट भेजो।'],
      ['I value your experience.', 'अनुभव की कद्र।'],
      ['Thanks for direct feedback.', 'सीधे फीडबैक शुक्रिया।']
    )),
    turn('Person', 'Good. Moving on.', 'ठीक। आगे बढ़ते।', alts(
      ['See you at four.', 'चार बजे।'],
      ['No hard feelings.', 'बुरा मानना नहीं।']
    )),
    turn('You', 'Thanks. It will not happen again.', 'शुक्रिया। दोबारा नहीं होगा।', alts(
      ['Appreciate your patience.', 'धैर्य की कद्र।'],
      ['Committed to improve.', 'सुधार के लिए प्रतिबद्ध।'],
      ['Let us nail the next call.', 'अगली कॉल बढ़िया करें।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'personal-apologies', 'Personal Apologies', [
    turn('Person', 'You forgot my birthday yesterday.', 'कल मेरा जन्मदिन भूल गए।', alts(
      ['You cancelled on me last minute.', 'आखिरी मिनट कैंसल।'],
      ['You shared my secret.', 'मेरा राज़ बता दिया।'],
      ['You did not show up.', 'आए नहीं।']
    )),
    turn('You', 'I am sorry. I hurt you and I feel bad.', 'माफ़। तुम्हें चोट पहुँची, मुझे बुरा लगा।', alts(
      ['I apologize from the heart.', 'दिल से माफ़ी।'],
      ['Sorry, no excuse is enough.', 'माफ़, बहाना कम।'],
      ['I let you down. Truly sorry.', 'तुम्हें निराश किया। सच में माफ़।']
    )),
    turn('Person', 'It felt like I do not matter.', 'लगा मैं मायने नहीं रखता।', alts(
      ['I was waiting all day.', 'पूरा दिन इंतजार।'],
      ['Friends should remember.', 'दोस्त याद रखें।'],
      ['Trust feels shaken.', 'भरोसा हिला।']
    )),
    turn('You', 'You matter a lot. I messed up my calendar.', 'तुम बहुत मायने। कैलेंडर गड़बड़।', alts(
      ['You are important to me.', 'तुम मेरे लिए ज़रूरी।'],
      ['I was overwhelmed, not careless about you.', 'भारी था, तुम्हारी उपेक्षा नहीं।'],
      ['I want to make it up to you.', 'भरपाई करना चाहता।']
    )),
    turn('Person', 'How will you make it up?', 'कैसे भरपाई?', alts(
      ['Words are easy.', 'शब्द आसान।'],
      ['I need to see effort.', 'प्रयास देखना चाहिए।']
    )),
    turn('You', 'Dinner this Friday, your favorite place.', 'इस शुक्रवार डिनर, पसंदीदा जगह।', alts(
      ['Friday dinner on me, anywhere.', 'शुक्रवार डिनर मेरा, कहीं भी।'],
      ['Gift plus quality time.', 'तोहफा और समय।'],
      ['Plan the evening, I will follow.', 'शाम प्लान करो, मैं मानूँगा।']
    )),
    turn('Person', 'Friday works. Do not forget again.', 'शुक्रवार ठीक। फिर मत भूलना।', alts(
      ['Set a reminder.', 'रिमाइंडर लगाओ।'],
      ['I forgive, slowly.', 'धीरे माफ़।']
    )),
    turn('You', 'Reminder set. Thank you for forgiving me.', 'रिमाइंडर लगा। माफ़ करने का शुक्रिया।', alts(
      ['I will show up early Friday.', 'शुक्रवार जल्दी आऊँगा।'],
      ['Your friendship means everything.', 'दोस्ती सब कुछ।'],
      ['Sorry again, truly.', 'फिर सच्ची माफ़।']
    )),
  ]),
]);
