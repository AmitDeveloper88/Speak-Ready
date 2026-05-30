import { lesson, turn, alts } from '../helpers.js';

const TOPIC = 'handling-difficult-moments';
const TITLE = 'Handling Difficult Moments';

export const handlingDifficultMomentsLessons = Object.fromEntries([
  lesson(TOPIC, TITLE, 'asking-to-repeat', 'Asking to Repeat', [
    turn('Person', 'We will sync the ledger after the audit window.', 'ऑडिट विंडो के बाद लेजर सिंक।', alts(
      ['Please cascade the updates downstream.', 'अपडेट नीचे कैस्केड।'],
      ['The SLA breach triggers a penalty clause.', 'SLA उल्लंघन जुर्माना।'],
      ['Roll back the deployment by six PM.', 'शाम छह तक डिप्लॉय रोलबैक।']
    )),
    turn('You', 'Sorry, could you repeat that last part?', 'माफ़, आखिरी हिस्सा दोहराएँ?', alts(
      ['I missed that. Once more please?', 'छूट गया। एक बार फिर?'],
      ['Can you say the last line again?', 'आखिरी लाइन फिर?'],
      ['Pardon, repeat the deadline part?', 'क्षमा, डेडलाइन हिस्सा फिर?']
    )),
    turn('Person', 'Sure. Roll back by six PM today.', 'ठीक। आज शाम छह तक रोलबैक।', alts(
      ['Six PM rollback, clear?', 'छह बजे रोलबैक, साफ?'],
      ['Today evening six, rollback.', 'आज शाम छह।']
    )),
    turn('You', 'Got it now. Six PM rollback. Thanks.', 'अब समझा। छह बजे रोलबैक। शुक्रिया।', alts(
      ['Clear now, appreciate it.', 'अब साफ, कद्र।'],
      ['Noted six PM. Thank you.', 'छह नोट। धन्यवाद।'],
      ['Understood, sorry for interrupting.', 'समझा, बीच में माफ़।']
    )),
    turn('Person', 'No problem. Audio was choppy.', 'कोई बात नहीं। ऑडियो कट रहा।', alts(
      ['Happens on calls.', 'कॉल पर होता।'],
      ['Ask anytime.', 'कभी पूछो।']
    )),
    turn('You', 'I will confirm in the team chat too.', 'टीम चैट में भी कन्फर्म।', alts(
      ['Typing it now.', 'अभी टाइप।'],
      ['Better twice than wrong.', 'गलत से दो बार बेहतर।'],
      ['Repeat requests are normal.', 'दोहराना सामान्य।']
    )),
    turn('Person', 'Good habit.', 'अच्छी आदत।', alts(
      ['See you at six.', 'छह बजे।'],
      ['Thanks for listening.', 'सुनने शुक्रिया।']
    )),
    turn('You', 'See you. Glad I asked.', 'मिलते। पूछकर खुशी।', alts(
      ['Asking repeat saves mistakes.', 'दोहराना गलती बचाता।'],
      ['No shame in clarify.', 'स्पष्ट पूछना शर्म नहीं।'],
      ['Talk soon.', 'जल्द बात।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'asking-to-explain', 'Asking to Explain', [
    turn('Person', 'We need to reconcile the accruals before close.', 'बंद से पहले अक्रुअल मिलान।', alts(
      ['The funnel metrics need normalization.', 'फनल मेट्रिक सामान्यीकरण।'],
      ['Use the staged rollout pattern.', 'स्टेज्ड रोलआउट पैटर्न।'],
      ['Apply the hybrid tax treatment.', 'हाइब्रिड टैक्स ट्रीटमेंट।']
    )),
    turn('You', 'Could you explain that in simpler terms?', 'सरल शब्दों में समझाएँ?', alts(
      ['What does that mean practically?', 'व्यावहारिक मतलब?'],
      ['I am lost. Plain English please.', 'खो गया। सादी अंग्रेज़ी।'],
      ['Can you break it down?', 'टुकड़ों में?']
    )),
    turn('Person', 'Sure. Match expected costs before we close books.', 'ठीक। किताब बंद से पहले अपेक्षित लागत मिलाओ।', alts(
      ['Think expected bills versus actual.', 'अपेक्षित बनाम वास्तविक।'],
      ['Like checking pending invoices.', 'लंबित इनवॉइस जाँच।'],
      ['Simple: pending costs list first.', 'सादा: पहले लंबित लागत।']
    )),
    turn('You', 'That helps. What is the first step for me?', 'मदद। मेरा पहला कदम?', alts(
      ['Where do I start?', 'कहाँ शुरू?'],
      ['Which sheet?', 'कौन सी शीट?'],
      ['Deadline?', 'डेडलाइन?']
    )),
    turn('Person', 'Open the accrual tab and flag gaps.', 'अक्रुअल टैब खोल, अंतर फ्लैग।', alts(
      ['Finance sheet row twelve.', 'फाइनेंस शीट पंक्ति बारह।'],
      ['Send gaps by four PM.', 'चार बजे तक अंतर।']
    )),
    turn('You', 'Clear now. Thanks for simplifying.', 'अब साफ। सरल करने शुक्रिया।', alts(
      ['I will flag and email.', 'फ्लैग ईमेल।'],
      ['Explain requests are welcome.', 'समझाना स्वागत।'],
      ['No dumb questions rule.', 'मूर्ख सवाल नहीं।']
    )),
    turn('Person', 'Exactly. Ask anytime.', 'बिल्कुल। कभी पूछो।', alts(
      ['We learn together.', 'साथ सीखें।'],
      ['Four PM reminder set.', 'चार बजे रिमाइंडर।']
    )),
    turn('You', 'Reminder set on my side too.', 'मेरी तरफ भी रिमाइंडर।', alts(
      ['Grateful for patience.', 'धैर्य आभारी।'],
      ['Explain skill is kindness.', 'समझाना दया।'],
      ['Back to work.', 'काम पर।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'saying-i-dont-understand', 'Saying "I Don\'t Understand"', [
    turn('Person', 'The API throttles concurrent sockets per tenant.', 'API प्रति टेनेंट सॉकेट थ्रॉटल।', alts(
      ['We shard writes across partitions.', 'लिखाई विभाजन।'],
      ['Latency spikes under burst load.', 'बर्स्ट लोड लेटेंसी।'],
      ['Cache invalidation is eventual.', 'कैश अंततः अमान्य।']
    )),
    turn('You', 'I am sorry, I do not understand yet.', 'माफ़, अभी समझ नहीं आया।', alts(
      ['Sorry, that went over my head.', 'माफ़, सिर के ऊपर।'],
      ['I am not following. Help me.', 'पीछे नहीं। मदद।'],
      ['Honestly, I am lost here.', 'सच कहूँ, खो गया।']
    )),
    turn('Person', 'No shame. It limits parallel connections per client.', 'शर्म नहीं। प्रति क्लाइंट समानांतर सीमा।', alts(
      ['Like a queue at the gate.', 'गेट पर कतार।'],
      ['Too many tabs slow down.', 'ज़्यादा टैब धीमे।'],
      ['One client cannot open infinite sockets.', 'अनंत सॉकेट नहीं।']
    )),
    turn('You', 'Ah, so too many tabs slow the app.', 'अरे, ज़्यादा टैब ऐप धीमा।', alts(
      ['Like browser limits.', 'ब्राउज़र सीमा जैसे।'],
      ['So we batch requests.', 'तो बैच अनुरोध।'],
      ['Now the picture is clearer.', 'अब तस्वीर साफ।']
    )),
    turn('Person', 'Exactly. Saying unclear is fine.', 'बिल्कुल। अस्पष्ट कहना ठीक।', alts(
      ['We clarify together.', 'साथ स्पष्ट।'],
      ['Questions help the team.', 'सवाल टीम मदद।']
    )),
    turn('You', 'Thanks for not judging.', 'नहीं आंके शुक्रिया।', alts(
      ['I will speak up sooner next time.', 'अगली बार जल्दी बोलूँगा।'],
      ['Honesty beats fake nods.', 'ईमानदारी नकली सिर हिलाने से बेहतर।'],
      ['Ready to take notes.', 'नोट लेने तैयार।']
    )),
    turn('Person', 'Fake nods waste time.', 'नकली सिर समय बर्बाद।', alts(
      ['Draw a diagram?', 'आरेख?'],
      ['Whiteboard two minutes.', 'व्हाइटबोर्ड दो मिनट।']
    )),
    turn('You', 'Diagram would help a lot.', 'आरेख बहुत मदद।', alts(
      ['I understand the core now.', 'मूल अब समझ।'],
      ['Glad I admitted confusion.', 'उलझन स्वीकार खुशी।'],
      ['Let us sketch it.', 'स्केच करें।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'correcting-yourself', 'Correcting Yourself', [
    turn('Person', 'So you joined in twenty twenty, right?', 'तो दो हज़ार बीस में जॉइन, है ना?', alts(
      ['You said Monday deadline?', 'सोमवार डेडलाइन?'],
      ['Your team has five people?', 'टीम पाँच लोग?'],
      ['You live in Pune?', 'पुणे रहते?']
    )),
    turn('You', 'Actually, sorry, I meant twenty twenty one.', 'सच में, माफ़, मेरा मतलब इक्कीस।', alts(
      ['Wait, correction, twenty twenty one.', 'रुको, सुधार, इक्कीस।'],
      ['I misspoke. It was twenty twenty one.', 'गलत बोला। इक्कीस था।'],
      ['Let me correct that, twenty twenty one.', 'सुधार, इक्कीस।']
    )),
    turn('Person', 'Thanks for fixing it.', 'ठीक करने शुक्रिया।', alts(
      ['Easy mistake.', 'आसान गलती।'],
      ['Details matter.', 'विवरण मायने।']
    )),
    turn('You', 'And the team is six, not five.', 'और टीम छह, पाँच नहीं।', alts(
      ['Second fix, six members.', 'दूसरा सुधार, छह।'],
      ['Sorry again, count is six.', 'फिर माफ़, गिनती छह।'],
      ['Correction number two, six people.', 'दूसरा सुधार, छह लोग।']
    )),
    turn('Person', 'Good catch on both.', 'दोनों पर अच्छी पकड़।', alts(
      ['Accuracy helps.', 'सटीकता मदद।'],
      ['No worries.', 'चिंता नहीं।']
    )),
    turn('You', 'I prefer to correct fast than stay wrong.', 'गलत रहने से जल्दी सुधार पसंद।', alts(
      ['Self correction is normal.', 'खुद सुधार सामान्य।'],
      ['Thanks for patience.', 'धैर्य शुक्रिया।'],
      ['Brain glitch happens.', 'दिमाग ग्लिच।']
    )),
    turn('Person', 'Happens to all of us.', 'सबको होता।', alts(
      ['Honesty appreciated.', 'ईमानदारी कद्र।'],
      ['Moving on.', 'आगे।']
    )),
    turn('You', 'Alright, twenty twenty one, team of six.', 'ठीक, इक्कीस, छह की टीम।', alts(
      ['Corrected version locked.', 'सुधार संस्करण लॉक।'],
      ['Glad we clarified.', 'स्पष्ट खुशी।'],
      ['Back on track.', 'फिर पटरी।']
    )),
  ]),
]);
