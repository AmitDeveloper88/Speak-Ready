import { lesson, turn, alts } from '../helpers.js';

const TOPIC = 'meetings';
const TITLE = 'Meetings';

export const meetingsLessons = Object.fromEntries([
  lesson(TOPIC, TITLE, 'joining-meeting', 'Joining a Meeting', [
    turn('Person', 'We can hear you now. Welcome.', 'आवाज़ आ रही। स्वागत।', alts(
      ['You are on mute.', 'म्यूट पर हो।'],
      ['Waiting on two more.', 'दो और इंतजार।']
    )),
    turn('You', 'Sorry, I was finding the unmute button.', 'माफ़, अनम्यूट ढूँढ रहा।', alts(
      ['Hi everyone, Rohan here.', 'नमस्ते सब, रोहन।'],
      ['Can you see my screen?', 'स्क्रीन दिख रही?'],
      ['Joined from phone, laptop updating.', 'फोन से, लैपटॉप अपडेट।']
    )),
    turn('Person', 'No worries. Agenda is sprint review.', 'चिंता नहीं। एजेंडा स्प्रिंट रिव्यू।', alts(
      ['Recording started.', 'रिकॉर्डिंग शुरू।'],
      ['Thirty minutes max.', 'अधिकतम तीस मिनट।']
    )),
    turn('You', 'Got it. I will keep updates short.', 'समझा। अपडेट छोटे।', alts(
      ['I may drop at the half hour.', 'आधे घंटे बाद निकल सकता।'],
      ['Ready when you are.', 'तैयार जब आप।'],
      ['Thanks for adding me.', 'जोड़ने शुक्रिया।']
    )),
    turn('Person', 'Start with blockers anyone?', 'कोई ब्लॉकर शुरू?', alts(
      ['Camera optional today.', 'आज कैमरा वैकल्पिक।'],
      ['Chat for questions.', 'सवाल चैट में।']
    )),
    turn('You', 'No blockers from me yet.', 'अभी मेरे ब्लॉकर नहीं।', alts(
      ['One dependency on API team.', 'API टीम पर निर्भरता।'],
      ['Will share demo at end.', 'अंत डेमो।'],
      ['Meeting join practice helps.', 'मीटिंग जॉइन अभ्यास।']
    )),
    turn('Person', 'Great. Moving to metrics.', 'ठीक। मेट्रिक्स।', alts(
      ['Ping me if audio drops.', 'ऑडियो कटे पिंग।'],
      ['Notes in shared doc.', 'शेयर डॉक नोट।']
    )),
    turn('You', 'Following in the doc. Thanks.', 'डॉक फॉलो। शुक्रिया।', alts(
      ['Smooth join this time.', 'इस बार सुचारु।'],
      ['Focused for review.', 'रिव्यू फोकस।'],
      ['Let us begin.', 'शुरू करें।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'sharing-your-view', 'Sharing Your View', [
    turn('Person', 'Thoughts on the new timeline?', 'नई टाइमलाइन पर विचार?', alts(
      ['Anyone disagree?', 'कोई असहमत?'],
      ['Open floor.', 'खुली चर्चा।']
    )),
    turn('You', 'I think we should ship MVP first, polish later.', 'मुझे लगता पहले MVP, पॉलिश बाद।', alts(
      ['In my view, two weeks is tight.', 'मेरे हिसाब से दो हफ्ते तंग।'],
      ['Honestly, scope feels too wide.', 'सच में स्कोप चौड़ा।'],
      ['I support the date if we cut two features.', 'दो फीचर काटें तो तारीख समर्थन।']
    )),
    turn('Person', 'Which two features would you cut?', 'कौन से दो काटोगे?', alts(
      ['Sales wants all three.', 'सेल्स तीनों चाहता।'],
      ['Risky either way.', 'दोनों तरफ जोखिम।']
    )),
    turn('You', 'I would defer analytics dashboard and dark mode.', 'एनालिटिक्स डैशबोर्ड और डार्क मोड टालूँ।', alts(
      ['Push export PDF to phase two.', 'PDF निर्यात चरण दो।'],
      ['Keep login fix, non negotiable.', 'लॉगिन ठीक, गैर वार्ता।'],
      ['Data shows users want speed.', 'डेटा गति चाहते।']
    )),
    turn('Person', 'Reasonable. Others?', 'उचित। और?', alts(
      ['Vote in chat.', 'चैट वोट।'],
      ['Manager wants decision today.', 'आज फैसला।']
    )),
    turn('You', 'Happy to own the trimmed scope doc.', 'छोटा स्कोप डॉक संभालूँगा।', alts(
      ['Sharing view clearly matters.', 'साफ विचार मायने।'],
      ['Respect sales input still.', 'सेल्स इनपुट सम्मान।'],
      ['Let us align before standup ends.', 'स्टैंडअप खत्म पहले मिलान।']
    )),
    turn('Person', 'Please draft by EOD.', 'आज दिन खत्म ड्राफ्ट।', alts(
      ['Good push.', 'अच्छा धक्का।'],
      ['Meeting needs voices.', 'मीटिंग आवाज़ चाहिए।']
    )),
    turn('You', 'Draft by six PM. Thanks.', 'छह बजे ड्राफ्ट। शुक्रिया।', alts(
      ['Speaking up felt useful.', 'बोलना उपयोगी।'],
      ['Back to listening mode.', 'सुनने मोड।'],
      ['Noted.', 'नोट।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'asking-clarification', 'Asking for Clarification', [
    turn('Person', 'We will parallelize QA and dev sign off.', 'QA और डेव साइन ऑफ समानांतर।', alts(
      ['Rollout is canary then full.', 'कैनरी फिर पूरा।'],
      ['Budget approved yesterday.', 'कल बजट मंज़ूर।']
    )),
    turn('You', 'Sorry, can you clarify what sign off means here?', 'माफ़, यहाँ साइन ऑफ मतलब?', alts(
      ['I did not follow the canary step.', 'कैनरी स्टेप नहीं समझा।'],
      ['Which team owns rollback?', 'रोलबैक किस टीम?'],
      ['Could you repeat the timeline part?', 'टाइमलाइन हिस्सा दोहराएँ?']
    )),
    turn('Person', 'Sign off means QA lead approves in Jira.', 'साइन ऑफ मतलब QA लीड Jira मंज़ूरी।', alts(
      ['Canary is five percent users first.', 'कैनरी पाँच प्रतिशत पहले।'],
      ['Rollback is on call engineer.', 'रोलबैक ऑन कॉल इंजीनियर।']
    )),
    turn('You', 'Clear now. Who triggers full rollout?', 'अब साफ। पूरा रोलआउट कौन?', alts(
      ['Is five percent one hour?', 'पाँच प्रतिशत एक घंटा?'],
      ['Do we need client email?', 'क्लाइंट ईमेल?'],
      ['Thanks for patience.', 'धैर्य शुक्रिया।']
    )),
    turn('Person', 'Product ops triggers after metrics green.', 'मेट्रिक हरा हो तो प्रोडक्ट ऑप्स।', alts(
      ['Client email optional.', 'क्लाइन्ट ईमेल वैकल्पिक।'],
      ['Good questions.', 'अच्छे सवाल।']
    )),
    turn('You', 'I will note this in the runbook.', 'रनबुक नोट करूँगा।', alts(
      ['Clarify in meetings saves bugs.', 'मीटिंग स्पष्ट बग बचाती।'],
      ['No dumb questions rule.', 'मूर्ख सवाल नहीं।'],
      ['Ready to proceed.', 'आगे तैयार।']
    )),
    turn('Person', 'Exactly. Anything else unclear?', 'बिल्कुल। और अस्पष्ट?', alts(
      ['Moving on.', 'आगे।'],
      ['Doc link in chat.', 'चैट डॉक लिंक।']
    )),
    turn('You', 'All clear. Thanks everyone.', 'सब साफ। सब शुक्रिया।', alts(
      ['Asking early beats guessing.', 'जल्दी पूछ अनुमान से बेहतर।'],
      ['Back to agenda.', 'एजेंडा पर।'],
      ['Got it.', 'समझा।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'wrapping-up', 'Wrapping Up', [
    turn('Person', 'We are at time. Quick recap?', 'समय। जल्दी रिकैप?', alts(
      ['Five minutes left.', 'पाँच मिनट।'],
      ['Who takes notes?', 'नोट कौन?']
    )),
    turn('You', 'I can recap. MVP scope doc due six PM.', 'मैं रिकैप। MVP डॉक छह बजे।', alts(
      ['Main decision was cut two features.', 'फैसला दो फीचर काट।'],
      ['QA sign off stays in Jira.', 'QA साइन Jira में।'],
      ['Next sync Thursday.', 'अगला गुरुवार।']
    )),
    turn('Person', 'Add action for client email draft.', 'क्लाइंट ईमेल ड्राफ्ट एक्शन।', alts(
      ['Assign owners please.', 'मालिक तय।'],
      ['Recording stops now.', 'रिकॉर्डिंग बंद।']
    )),
    turn('You', 'I will own client email with product.', 'क्लाइंट ईमेल प्रोडक्ट संग संभालूँगा।', alts(
      ['Neha owns QA checklist.', 'नेहा QA चेकलिस्ट।'],
      ['All actions in the doc.', 'सब एक्शन डॉक में।'],
      ['Wrapping clearly avoids confusion.', 'साफ समापन उलझन कम।']
    )),
    turn('Person', 'Perfect. Thanks all.', 'बढ़िया। सब शुक्रिया।', alts(
      ['Drop if you need to.', 'ज़रूरत हो निकलें।'],
      ['Slack thread for leftovers.', 'बाकी स्लैक थ्रेड।']
    )),
    turn('You', 'Thanks. Good meeting. Logging off.', 'शुक्रिया। अच्छी मीटिंग। लॉग ऑफ।', alts(
      ['Will post notes in ten minutes.', 'दस मिनट नोट।'],
      ['Nice alignment today.', 'आज अच्छा मिलान।'],
      ['See you Thursday.', 'गुरुवार मिलते।']
    )),
    turn('Person', 'Thursday ten AM.', 'गुरुवार दस बजे।', alts(
      ['Enjoy lunch.', 'लंच एंजॉय।'],
      ['Bye.', 'अलविदा।']
    )),
    turn('You', 'Bye everyone.', 'सबको अलविदा।', alts(
      ['Wrap up skills matter.', 'समापन कौशल।'],
      ['Calendar updated.', 'कैलेंडर अपडेट।'],
      ['Done.', 'हो गया।']
    )),
  ]),
]);
