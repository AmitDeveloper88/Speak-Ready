import { lesson, turn, alts } from '../helpers.js';

const TOPIC = 'client-communication';
const TITLE = 'Client Communication';

export const clientCommunicationLessons = Object.fromEntries([
  lesson(TOPIC, TITLE, 'kickoff-call', 'Kickoff Call', [
    turn('Person', 'Thanks for joining. We are excited to partner.', 'जॉइन शुक्रिया। साझेदारी उत्साह।', alts(
      ['Welcome to the kickoff.', 'किकऑफ़ स्वागत।'],
      ['Can everyone hear us?', 'सब सुन रहे?']
    )),
    turn('You', 'Thank you. We are ready to align on goals and timeline.', 'धन्यवाद। लक्ष्य टाइमलाइन मिलाने तैयार।', alts(
      ['Glad to be here from the delivery team.', 'डिलीवरी टीम से खुशी।'],
      ['We reviewed your brief last night.', 'कल रात ब्रीफ देखा।'],
      ['Looking forward to a smooth launch.', 'सुचारु लॉन्च इंतज़ार।']
    )),
    turn('Person', 'Our priority is go live by March tenth.', 'प्राथमिकता दस मार्च गो लाइव।', alts(
      ['Weekly demos every Friday.', 'हर शुक्रवार डेमो।'],
      ['Single point of contact is Maya.', 'संपर्क माया।']
    )),
    turn('You', 'March tenth is noted. We will share a draft plan tomorrow.', 'दस मार्च नोट। कल ड्राफ्ट प्लान।', alts(
      ['We may need design assets by next Monday.', 'अगले सोमवार डिज़ाइन एसेट।'],
      ['Slack channel for daily questions works.', 'रोज सवाल स्लैक ठीक।'],
      ['Any compliance docs we should read?', 'कोई अनुपालन डॉक?']
    )),
    turn('Person', 'Compliance pack in email. Friday demos at four PM IST.', 'अनुपालन ईमेल। शुक्रवार चार बजे IST।', alts(
      ['Please include QA in demos.', 'डेमो में QA।'],
      ['Transparency is key.', 'पारदर्शिता ज़रूरी।']
    )),
    turn('You', 'We will be transparent on risks early.', 'जोखिम जल्दी पारदर्शी।', alts(
      ['Kickoff sets trust.', 'किकऑफ़ भरोसा।'],
      ['Maya is our main liaison too.', 'माया हमारी लिंक भी।'],
      ['Thank you for clear expectations.', 'साफ अपेक्षा शुक्रिया।']
    )),
    turn('Person', 'Likewise. Talk next week.', 'वही। अगले हफ्ते।', alts(
      ['Recording shared.', 'रिकॉर्डिंग शेयर।'],
      ['Great start.', 'अच्छी शुरुआत।']
    )),
    turn('You', 'Recording helps. We will follow up tomorrow.', 'रिकॉर्डिंग मदद। कल फॉलो अप।', alts(
      ['Client tone polite and firm.', 'क्लाइंट विनम्र दृढ़।'],
      ['Excited to deliver.', 'डिलीवर उत्साह।'],
      ['Goodbye for now.', 'अभी अलविदा।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'handling-complaint', 'Handling a Complaint', [
    turn('Person', 'The dashboard has been slow all week.', 'पूरे हफ्ते डैशबोर्ड धीमा।', alts(
      ['We expected faster fixes.', 'तेज़ फिक्स अपेक्षा।'],
      ['Support tickets are piling up.', 'सपोर्ट टिकट ढेर।']
    )),
    turn('You', 'I hear you. Slow dashboards hurt your team. I am sorry.', 'सुन रहा। धीमा डैशबोर्ड दुखी। माफ़।', alts(
      ['Thank you for flagging again.', 'फिर बताने शुक्रिया।'],
      ['You are right to expect better.', 'बेहतर अपेक्षा सही।'],
      ['We take this seriously.', 'गंभीरता से।']
    )),
    turn('Person', 'What are you doing today?', 'आज क्या कर रहे?', alts(
      ['We pay for premium support.', 'प्रीमियम सपोर्ट पे।'],
      ['Escalate if needed.', 'ज़रूरत एस्केलेट।']
    )),
    turn('You', 'We deployed a cache fix at noon and monitor latency hourly.', 'दोपहर कैश फिक्स, हर घंटे लेटेंसी।', alts(
      ['Root cause was heavy query, now indexed.', 'जड़ भारी क्वेरी, अब इंडेक्स।'],
      ['You will see report by six PM.', 'छह बजे रिपोर्ट।'],
      ['Temporary workaround link in chat.', 'अस्थायी वर्कअराउंड लिंक।']
    )),
    turn('Person', 'Send the report to my inbox.', 'रिपोर्ट इनबॉक्स।', alts(
      ['Call me if it spikes again.', 'फिर बढ़े कॉल।'],
      ['I appreciate the apology.', 'माफ़ी कद्र।']
    )),
    turn('You', 'Report will include before and after graphs.', 'रिपोर्ट पहले बाद ग्राफ।', alts(
      ['Complaint handling needs empathy first.', 'शिकायत पहले सहानुभूति।'],
      ['I will stay on this until stable.', 'स्थिर तक संभालूँगा।'],
      ['Thank you for patience.', 'धैर्य शुक्रिया।']
    )),
    turn('Person', 'Okay. Let us check tomorrow.', 'ठीक। कल चेक।', alts(
      ['Do not disappear.', 'गायब मत होना।'],
      ['Trust is thin.', 'भरोसा पतला।']
    )),
    turn('You', 'Daily update until you are satisfied.', 'संतुष्ट तक रोज अपडेट।', alts(
      ['Client complaints teach urgency.', 'शिकायत तात्कालिकता।'],
      ['Committed.', 'प्रतिबद्ध।'],
      ['Talk tomorrow.', 'कल बात।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'product-demo', 'Product Demo', [
    turn('Person', 'Show us the new reporting module.', 'नया रिपोर्टिंग मॉड्यूल दिखाओ।', alts(
      ['We have twenty minutes.', 'बीस मिनट।'],
      ['Focus on export feature.', 'निर्यात फीचर फोकस।']
    )),
    turn('You', 'Sharing screen. Here is the main dashboard.', 'स्क्रीन शेयर। मुख्य डैशबोर्ड।', alts(
      ['Can everyone see the browser tab?', 'ब्राउज़र टैब दिख रहा?'],
      ['I will walk through export step by step.', 'निर्यात कदम कदम।'],
      ['Sample data is anonymized.', 'नमूना डेटा गुमनाम।']
    )),
    turn('Person', 'Can we filter by region?', 'क्षेत्र फ़िल्टर?', alts(
      ['Export to Excel?', 'Excel निर्यात?'],
      ['Looks clean.', 'साफ लगता।']
    )),
    turn('You', 'Yes, region filter here. Export to Excel in two clicks.', 'हाँ, क्षेत्र फ़िल्टर। Excel दो क्लिक।', alts(
      ['CSV also available.', 'CSV भी।'],
      ['Large exports run in background.', 'बड़ा निर्यात पृष्ठभूमि।'],
      ['Email when export completes.', 'पूरा हो ईमेल।']
    )),
    turn('Person', 'How long for million rows?', 'दस लाख पंक्तियाँ कितनी देर?', alts(
      ['Security on files?', 'फाइल सिक्योरिटी?'],
      ['Nice demo.', 'अच्छा डेमो।']
    )),
    turn('You', 'About eight minutes with email link, encrypted at rest.', 'लगभग आठ मिनट, ईमेल लिंक, एन्क्रिप्टेड।', alts(
      ['Demo answers should be honest.', 'डेमो ईमानदार जवाब।'],
      ['We can load test your volume.', 'आपके वॉल्यूम लोड टेस्ट।'],
      ['Questions welcome.', 'सवाल स्वागत।']
    )),
    turn('Person', 'Send trial access to our analysts.', 'विश्लेषकों ट्रायल एक्सेस।', alts(
      ['Friday pilot okay.', 'शुक्रवार पायलट ठीक।'],
      ['Good job.', 'अच्छा काम।']
    )),
    turn('You', 'Trial links today EOD. Thanks for your time.', 'आज खत्म ट्रायल लिंक। समय शुक्रिया।', alts(
      ['Client demos need pace and pauses.', 'क्लाइंट डेमो गति विराम।'],
      ['Stopping share.', 'शेयर बंद।'],
      ['Follow up email coming.', 'फॉलो अप ईमेल।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'follow-up-check-in', 'Follow-up Check-in', [
    turn('Person', 'Quick check in after last week launch.', 'पिछले हफ्ते लॉन्च बाद चेक इन।', alts(
      ['How is adoption?', 'अपनाया कैसा?'],
      ['Any fires?', 'कोई आग?']
    )),
    turn('You', 'Adoption is at sixty percent of invited users.', 'आमंत्रित का साठ प्रतिशत।', alts(
      ['No fires, two minor bugs fixed.', 'आग नहीं, दो छोटे बग ठीक।'],
      ['Support tickets down thirty percent.', 'सपोर्ट टिकट तीस प्रतिशत कम।'],
      ['Training video helped onboarding.', 'ट्रेनिंग वीडियो ऑनबोर्डिंग।']
    )),
    turn('Person', 'What do you need from us?', 'हमसे क्या चाहिए?', alts(
      ['Leadership wants a quote.', 'लीडरशिप उद्धरण।'],
      ['Expansion possible.', 'विस्तार संभव।']
    )),
    turn('You', 'We need a champion on your side for the remaining forty percent.', 'बाकी चालीस प्रतिशत के लिए चैंपियन।', alts(
      ['Short webinar next Tuesday?', 'अगले मंगल वेबिनार?'],
      ['Case study quote would help marketing.', 'केस स्टडी उद्धरण मार्केटिंग।'],
      ['Nothing blocking technically.', 'तकनीकी रोक नहीं।']
    )),
    turn('Person', 'I can host the webinar. Send draft quote.', 'वेबिनार मैं। उद्धरण ड्राफ्ट।', alts(
      ['Happy with progress.', 'प्रगति खुशी।'],
      ['CC my boss.', 'बॉस CC।']
    )),
    turn('You', 'Draft quote by tomorrow. Calendar invite for webinar.', 'कल उद्धरण ड्राफ्ट। वेबिनार कैलेंडर।', alts(
      ['Follow ups build relationships.', 'फॉलो अप रिश्ता।'],
      ['Thanks for partnership tone.', 'साझेदारी स्वर शुक्रिया।'],
      ['Open to feedback anytime.', 'फीडबैक कभी।']
    )),
    turn('Person', 'Same here. Talk soon.', 'वही। जल्द बात।', alts(
      ['Send slides.', 'स्लाइड भेजो।'],
      ['Great check in.', 'अच्छा चेक इन।']
    )),
    turn('You', 'Slides in ten minutes. Have a good week.', 'दस मिनट स्लाइड। अच्छा हफ्ता।', alts(
      ['Client rhythm maintained.', 'क्लाइंट लय बनी।'],
      ['Closing call politely.', 'विनम्र समापन।'],
      ['Bye.', 'अलविदा।']
    )),
  ]),
]);
