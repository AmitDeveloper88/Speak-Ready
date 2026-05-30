import { lesson, turn, alts } from '../helpers.js';

const TOPIC = 'project-discussion';
const TITLE = 'Project Discussion';

export const projectDiscussionLessons = Object.fromEntries([
  lesson(TOPIC, TITLE, 'explaining-project', 'Explaining a Project', [
    turn('Person', 'Pick one project and explain end to end.', 'एक प्रोजेक्ट शुरू से अंत।', alts(
      ['Most relevant project?', 'सबसे प्रासंगिक?'],
      ['Five minute overview.', 'पाँच मिनट अवलोकन।']
    )),
    turn('You', 'I will explain our payment retry system redesign.', 'पेमेंट रिट्राई सिस्टम पुनर्डिज़ाइन।', alts(
      ['Mobile onboarding revamp last year.', 'पिछले साल मोबाइल ऑनबोर्डिंग।'],
      ['Inventory sync for retail client.', 'रिटेल क्लाइंट इन्वेंटरी सिंक।'],
      ['Structure: problem, approach, result.', 'संरचना: समस्या, तरीका, परिणाम।']
    )),
    turn('Person', 'What was the business problem?', 'व्यवसाय समस्या?', alts(
      ['Users affected?', 'यूज़र प्रभाव?'],
      ['Timeline?', 'समयरेखा?']
    )),
    turn('You', 'Failed payments caused cart drop and support load.', 'फेल पेमेंट कार्ट छोड़ सपोर्ट भार।', alts(
      ['Onboarding drop at KYC step.', 'KYC कदम छोड़।'],
      ['Stock mismatch caused refunds.', 'स्टॉक बेमेल रिफंड।'],
      ['Three month project, two engineers plus me lead.', 'तीन महीने, दो इंजीनियर मैं लीड।']
    )),
    turn('Person', 'Architecture in simple words?', 'सरल शब्द वास्तु?', alts(
      ['Third party tools?', 'तीसरा पक्ष टूल?'],
      ['Your role again?', 'आपकी भूमिका?']
    )),
    turn('You', 'Queue based retries with idempotent API and dashboard.', 'कतार रिट्राई, इडेम्पोटेंट API, डैशबोर्ड।', alts(
      ['Kafka and Postgres, Grafana metrics.', 'Kafka Postgres Grafana।'],
      ['I designed API contract and rollout plan.', 'API अनुबंध रोलआउट योजना।'],
      ['Explain project without jargon overload.', 'जार्गन अधिक नहीं।']
    )),
    turn('Person', 'Good clarity.', 'साफी अच्छी।', alts(
      ['Metrics?', 'मेट्रिक?'],
      ['Go deeper technical next.', 'तकनीकी गहरा।']
    )),
    turn('You', 'Failure rate down forty percent, that is the headline.', 'फेल दर चालीस प्रतिशत कम, शीर्षक।', alts(
      ['Happy to draw diagram on whiteboard.', 'व्हाइटबोर्ड आरेख।'],
      ['Project story practice helps interviews.', 'अभ्यास मदद।'],
      ['Questions welcome.', 'सवाल स्वागत।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'technical-challenges', 'Technical Challenges', [
    turn('Person', 'Hardest technical challenge in that project?', 'सबसे कठिन तकनीकी चुनौती?', alts(
      ['Production incident?', 'प्रोडक्शन इंसिडेंट?'],
      ['Trade offs?', 'व्यापार बलिदान?']
    )),
    turn('You', 'Duplicate charges during network timeouts needed idempotency keys.', 'नेटवर्क टाइमआउट दोहरी चार्ज, इडेम्पोटेंसी कुंजी।', alts(
      ['Scale test failed at ten K RPS.', 'दस K RPS टेस्ट फेल।'],
      ['Legacy schema migration without downtime.', 'डाउनटाइम बिना माइग्रेशन।'],
      ['Challenge answer shows thinking not heroics.', 'सोच नायक नहीं।']
    )),
    turn('Person', 'How did you solve it?', 'कैसे हल?', alts(
      ['Alternatives rejected?', 'खारिज विकल्प?'],
      ['Who helped?', 'किसने मदद?']
    )),
    turn('You', 'We added client keys and server side dedup table with TTL.', 'क्लाइंट कुंजी, सर्वर डुप टेबल TTL।', alts(
      ['Rejected double write to old DB.', 'पुराना DB दोहरी लिखाई नहीं।'],
      ['Staff engineer reviewed design.', 'स्टाफ इंजीनियर रिव्यू।'],
      ['Load test proved fix before full rollout.', 'पूरा रोलआउट पहले लोड टेस्ट।']
    )),
    turn('Person', 'What if you had more time?', 'और समय होता?', alts(
      ['Lessons learned?', 'सबक?'],
      ['Mistakes?', 'गलती?']
    )),
    turn('You', 'I would add chaos tests earlier.', 'पहले chaos टेस्ट।', alts(
      ['Lesson: design for failure first.', 'सबक: पहले विफलता डिज़ाइन।'],
      ['Mistake was optimistic deadline.', 'गलती आशावादी डेडलाइन।'],
      ['Honest about mistakes.', 'गलती ईमानदारी।']
    )),
    turn('Person', 'Strong engineering mindset.', 'मज़बूत मानसिकता।', alts(
      ['Whiteboard time.', 'व्हाइटबोर्ड।'],
      ['Good depth.', 'अच्छी गहराई।']
    )),
    turn('You', 'Ready for whiteboard.', 'व्हाइटबोर्ड तैयार।', alts(
      ['Technical challenges sell credibility.', 'चुनौती विश्वसनीयता।'],
      ['Thanks.', 'शुक्रिया।'],
      ['Continue.', 'जारी।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'your-contribution', 'Your Contribution', [
    turn('Person', 'Team of five did this. What was yours alone?', 'टीम पाँच। अकेला आपका?', alts(
      ['Credit sharing?', 'श्रेय बँटवारा?'],
      ['Lead or member?', 'लीड सदस्य?']
    )),
    turn('You', 'I wrote the design doc and led API changes, others owned UI and QA automation.', 'डिज़ाइन डॉक, API लीड, UI QA दूसरे।', alts(
      ['I built monitoring, teammate built retry worker.', 'मॉनिटरिंग मैं, रिट्राई साथी।'],
      ['Member not formal lead but drove technical decisions.', 'औपचारिक लीड नहीं, तकनीकी फैसले।'],
      ['Clear I vs we prevents interview fluff.', 'मैं बनाम हम भ्रांति नहीं।']
    )),
    turn('Person', 'Prove ownership example.', 'स्वामित्व उदाहरण।', alts(
      ['Conflict in team?', 'टीम टकराव?'],
      ['Code review role?', 'कोड रिव्यू?']
    )),
    turn('You', 'I stayed weekend once to fix rollout, no blame emails.', 'रोलआउट ठीक एक वीकेंड, दोष ईमेल नहीं।', alts(
      ['Mediated API debate between two seniors.', 'दो सीनियर API बहस मध्यस्थ।'],
      ['Reviewed every PR in payments folder.', 'पेमेंट फोल्डर हर PR।'],
      ['Ownership means outcome not title.', 'परिणाम शीर्षक नहीं।']
    )),
    turn('Person', 'Fair.', 'उचित।', alts(
      ['Would hire as lead?', 'लीड भर्ती?'],
      ['Individual contributor okay?', 'IC ठीक?']
    )),
    turn('You', 'I am open to IC or tech lead path based on team need.', 'IC या टेक लीड टीम ज़रूरत।', alts(
      ['Contribution story backed by manager review.', 'मैनेजर रिव्यू समर्थन।'],
      ['Not stealing team credit.', 'टीम श्रेय नहीं छीनता।'],
      ['Proud of shared win.', 'साझा जीत गर्व।']
    )),
    turn('Person', 'Integrity noted.', 'ईमानदारी नोट।', alts(
      ['Results slide?', 'परिणाम स्लाइड?'],
      ['Next behavioral.', 'अगला व्यवहार।']
    )),
    turn('You', 'Results on slide three if you opened deck.', 'डेक खोला तो स्लाइड तीन।', alts(
      ['Contribution clarity done.', 'योगदान स्पष्टता पूर्ण।'],
      ['Thank you.', 'धन्यवाद।'],
      ['Ready.', 'तैयार।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'project-results', 'Project Results', [
    turn('Person', 'Quantify impact for me.', 'प्रभाव मापें।', alts(
      ['ROI?', 'ROI?'],
      ['Customer feedback?', 'ग्राहक फीडबैक?']
    )),
    turn('You', 'Failure rate from two point one to one point two percent.', 'फेल दर दो दशमलव एक से एक दशमलव दो।', alts(
      ['Support tickets down thirty five percent.', 'सपोर्ट टिकट पैंतीस प्रतिशत कम।'],
      ['Revenue recovered estimate two crore annually.', 'राजस्व अनुमान सालाना दो करोड़।'],
      ['Numbers must be defensible.', 'संख्या बचाव योग्य।']
    )),
    turn('Person', 'How measured?', 'कैसे मापा?', alts(
      ['A B test?', 'A B टेस्ट?'],
      ['External validation?', 'बाहरी पुष्टि?']
    )),
    turn('You', 'Thirty day before after with same traffic cohort.', 'तीस दिन पहले बाद समान ट्रैफिक समूह।', alts(
      ['A B on ten percent traffic first.', 'पहले दस प्रतिशत A B।'],
      ['Finance team validated revenue model.', 'वित्त मॉडल पुष्टि।'],
      ['Dashboard links in appendix.', 'परिशिष्ट डैशबोर्ड।']
    )),
    turn('Person', 'Credible.', 'विश्वसनीय।', alts(
      ['What failed to improve?', 'क्या नहीं सुधरा?'],
      ['Next iteration?', 'अगला पुनरावृत्ति?']
    )),
    turn('You', 'International cards still lag, phase two scope.', 'अंतर्राष्ट्रीय कार्ड पीछे, चरण दो।', alts(
      ['Honest partial win builds trust.', 'आंशिक जीत ईमानदारी भरोसा।'],
      ['Next is fraud rules integration.', 'अगला धोखाधड़ी नियम।'],
      ['Results without spin.', 'बिना स्पिन परिणाम।']
    )),
    turn('Person', 'Honesty appreciated.', 'ईमानदारी कद्र।', alts(
      ['Strong project close.', 'मज़बूत समापन।'],
      ['Behavioral next.', 'व्यवहार अगला।']
    )),
    turn('You', 'Thank you. Metrics are team effort.', 'धन्यवाद। मेट्रिक टीम प्रयास।', alts(
      ['Project results answer wins interviews.', 'परिणाम इंटरव्यू जीताते।'],
      ['Deck shared.', 'डेक शेयर।'],
      ['Ready for behavioral.', 'व्यवहार तैयार।']
    )),
  ]),
]);
