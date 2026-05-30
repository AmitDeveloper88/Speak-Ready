import { lesson, turn, alts } from '../helpers.js';

const TOPIC = 'disagreeing';
const TITLE = 'Disagreeing';

export const disagreeingLessons = Object.fromEntries([
  lesson(TOPIC, TITLE, 'soft-disagreement', 'Soft Disagreement', [
    turn('Person', 'Let us launch the feature tomorrow.', 'कल फीचर लॉन्च करें।', alts(
      ['Skip testing, we are late.', 'टेस्ट छोड़ो, लेट।'],
      ['Cut the break room budget.', 'ब्रेक रूम बजट काटो।'],
      ['Email blast all users tonight.', 'आज रात सबको ईमेल।']
    )),
    turn('You', 'I see your urgency, but I disagree on timing.', 'आपकी जल्दी समझता, पर समय से असहमत।', alts(
      ['Respectfully, tomorrow feels risky.', 'सादर, कल जोखिम।'],
      ['I am not sure tomorrow is safe.', 'कल सुरक्षित नहीं लगता।'],
      ['Hear you, yet I would wait two days.', 'सुना, फिर भी दो दिन रुकूँगा।']
    )),
    turn('Person', 'Delay hurts marketing.', 'देरी मार्केटिंग को चोट।', alts(
      ['Boss wants speed.', 'बॉस गति चाहता।'],
      ['Bugs are minor.', 'बग छोटे।']
    )),
    turn('You', 'Minor bugs become major at scale.', 'छोटे बग स्केल पर बड़े।', alts(
      ['One crash hurts trust.', 'एक क्रैश भरोसा तोड़े।'],
      ['Two days buys confidence.', 'दो दिन विश्वास।'],
      ['Soft launch to ten percent first.', 'पहले दस प्रतिशत सॉफ्ट।']
    )),
    turn('Person', 'Soft launch is a middle path.', 'सॉफ्ट बीच का रास्ता।', alts(
      ['I can accept that.', 'मंज़ूर।'],
      ['Marketing needs a date.', 'मार्केटिंग तारीख।']
    )),
    turn('You', 'Friday soft launch, full Monday if clean.', 'शुक्रवार सॉफ्ट, साफ हो तो सोमवार पूर्ण।', alts(
      ['Compromise I support.', 'समझौता समर्थन।'],
      ['Data will guide Monday.', 'डेटा सोमवार निर्देश।'],
      ['Polite no saved us.', 'विनम्र ना ने बचाया।']
    )),
    turn('Person', 'Fair compromise. Update the deck.', 'उचित। डेक अपडेट।', alts(
      ['Thanks for pushing back gently.', 'धीरे टोकने शुक्रिया।'],
      ['Team needs dissent.', 'टीम को असहमति चाहिए।']
    )),
    turn('You', 'Will update slides tonight.', 'आज रात स्लाइड।', alts(
      ['Glad we aligned civilly.', 'शांति से मेल खुशी।'],
      ['Disagree without heat.', 'गर्मी बिना असहमति।'],
      ['Talk in standup.', 'स्टैंडअप में।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'strong-disagreement', 'Strong Disagreement', [
    turn('Person', 'We should copy the competitor feature exactly.', 'प्रतिस्पर्धी फीचर ठीक कॉपी।', alts(
      ['Drop quality checks to ship.', 'क्वालिटी छोड़ शिप।'],
      ['Fire the slow vendor now.', 'धीमे वेंडर अभी हटाओ।'],
      ['Ignore user research.', 'यूज़र रिसर्च नज़रअंदाज़।']
    )),
    turn('You', 'I strongly disagree. That hurts our brand.', 'मैं कड़ी असहमति। ब्रांड को नुकसान।', alts(
      ['No, that is the wrong move.', 'नहीं, गलत कदम।'],
      ['I cannot support copying blindly.', 'अंधा कॉपी समर्थन नहीं।'],
      ['Hard no from me on this.', 'मेरे तरफ से कड़ा ना।']
    )),
    turn('Person', 'They are winning users.', 'वे यूज़र जीत रहे।', alts(
      ['Speed matters.', 'गति मायने।'],
      ['We look outdated.', 'पुराने लगते।']
    )),
    turn('You', 'Users stay for our ethics and UX.', 'यूज़र नैतिकता और UX से रुकते।', alts(
      ['Copying makes us followers.', 'कॉपी से अनुयायी।'],
      ['Innovate with research data.', 'रिसर्च से नवाचार।'],
      ['Short gain, long pain.', 'छोटा फायदा, लंबा दर्द।']
    )),
    turn('Person', 'Strong words.', 'कड़े शब्द।', alts(
      ['Maybe you are right.', 'शायद सही।'],
      ['Still pressure from top.', 'ऊपर दबाव।']
    )),
    turn('You', 'Bring data to the leadership call.', 'लीडरशिप कॉल डेटा लाओ।', alts(
      ['I will present churn risks.', 'चर्न जोखिम पेश।'],
      ['Fight with facts, not fear.', 'डर नहीं, तथ्य।'],
      ['Stand firm on values.', 'मूल्य पर अड़े।']
    )),
    turn('Person', 'Let us co-present alternatives.', 'विकल्प साथ पेश।', alts(
      ['Better than fighting alone.', 'अकेले लड़ाई से बेहतर।'],
      ['Respect your conviction.', 'विश्वास सम्मान।']
    )),
    turn('You', 'Good. Strong disagreement can be productive.', 'अच्छा। कड़ी असहमति उत्पादक।', alts(
      ['United front tomorrow.', 'कल एकजुट।'],
      ['Thanks for listening.', 'सुनने शुक्रिया।'],
      ['Better plan ahead.', 'आगे बेहतर योजना।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'professional-disagreement', 'Professional Disagreement', [
    turn('Person', 'I recommend vendor A for lowest price.', 'सबसे कम कीमत वेंडर A।', alts(
      ['Cut QA headcount.', 'QA कर्मी कम।'],
      ['Approve budget without review.', 'बिना रिव्यू बजट।'],
      ['Skip legal on this contract.', 'इस अनुबंध लीगल छोड़ो।']
    )),
    turn('You', 'I respectfully disagree. Support quality matters more.', 'सादर असहमति। सपोर्ट गुणवत्ता ज़्यादा।', alts(
      ['With due respect, I differ.', 'सम्मान सहित भिन्न।'],
      ['Price is not the only factor.', 'कीमत एकमात्र नहीं।'],
      ['My analysis favors vendor B.', 'विश्लेषण B पक्ष।']
    )),
    turn('Person', 'B costs twenty percent more.', 'B बीस प्रतिशत महँगा।', alts(
      ['CFO wants savings.', 'CFO बचत।'],
      ['Show ROI.', 'ROI दिखाओ।']
    )),
    turn('You', 'B reduces downtime, saving ops hours.', 'B डाउनटाइम कम, ऑप्स घंटे बचे।', alts(
      ['Ticket closure faster on B.', 'B पर टिकट तेज़।'],
      ['SLA penalties lower.', 'SLA जुर्माना कम।'],
      ['Total cost of ownership wins.', 'कुल स्वामित्व लागत।']
    )),
    turn('Person', 'Send the TCO sheet.', 'TCO शीट भेजो।', alts(
      ['Need numbers before decision.', 'नंबर चाहिए।'],
      ['Professional debate helps.', 'पेशेवर बहस मदद।']
    )),
    turn('You', 'Emailing spreadsheet in ten minutes.', 'दस मिनट ईमेल।', alts(
      ['Happy to walk through live.', 'लाइव समझाऊँगा।'],
      ['Disagreement based on data.', 'डेटा पर असहमति।'],
      ['Open to questions.', 'सवाल खुले।']
    )),
    turn('Person', 'Review at three PM.', 'दोपहर तीन रिव्यू।', alts(
      ['Include finance.', 'फाइनेंस जोड़ो।'],
      ['Thanks for rigor.', 'कड़ाई शुक्रिया।']
    )),
    turn('You', 'Three PM works. Civil disagreement noted.', 'तीन ठीक। शिष्ट असहमति दर्ज।', alts(
      ['Facts will decide.', 'तथ्य तय करेंगे।'],
      ['Professional tone kept.', 'पेशेवर टोन।'],
      ['See you then.', 'तब मिलते।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'debate-situations', 'Debate Situations', [
    turn('Person', 'Remote work kills culture.', 'रिमोट कल्चर मारता।', alts(
      ['AI will replace developers soon.', 'AI जल्दी डेवलपर बदलेगा।'],
      ['Degrees are useless now.', 'डिग्री अब बेकार।'],
      ['Open offices boost teamwork always.', 'ओपन ऑफिस हमेशा टीमवर्क।']
    )),
    turn('You', 'I disagree. Culture is built with intent, not walls.', 'असहमत। कल्चर इरादे से, दीवार से नहीं।', alts(
      ['Opposite view here.', 'उलटा विचार।'],
      ['Remote can strengthen trust if managed.', 'रिमोट भरोसा मज़बूत कर सकता।'],
      ['Debate welcome, data matters.', 'बहस स्वागत, डेटा।']
    )),
    turn('Person', 'People feel lonely at home.', 'घर अकेलापन।', alts(
      ['Mentorship suffers.', 'मेंटरशिप घटी।'],
      ['Zoom fatigue real.', 'ज़ूम थकान सच।']
    )),
    turn('You', 'Hybrid fixes loneliness for many.', 'हाइब्रिड अकेलापन ठीक करता।', alts(
      ['Optional office days help.', 'ऑफिस दिन वैकल्पिक।'],
      ['Buddy programs online work.', 'ऑनलाइन बडी प्रोग्राम।'],
      ['Survey our team before policy.', 'नीति से पहले सर्वे।']
    )),
    turn('Person', 'Survey is fair.', 'सर्वे उचित।', alts(
      ['Maybe hybrid is middle.', 'शायद हाइब्रिड बीच।'],
      ['Debate not fight.', 'बहस लड़ाई नहीं।']
    )),
    turn('You', 'Let us run a poll and share results.', 'पोल कर परिणाम शेयर।', alts(
      ['Facts beat opinions.', 'तथ्य राय से ऊपर।'],
      ['I will facilitate neutrally.', 'तटस्थ संचालन।'],
      ['Open to being wrong.', 'गलत होने को खुला।']
    )),
    turn('Person', 'Neutral facilitator helps.', 'तटस्थ मदद।', alts(
      ['Respectful debate done.', 'सम्मानजनक बहस।'],
      ['Coffee after?', 'बाद कॉफी?']
    )),
    turn('You', 'Coffee yes. Debates sharpen thinking.', 'कॉफी हाँ। बहस सोच तेज़।', alts(
      ['Agree to disagree till data.', 'डेटा तक असहमति मानो।'],
      ['Healthy exchange.', 'स्वस्थ आदानप्रदान।'],
      ['Good talk.', 'अच्छी बात।']
    )),
  ]),
]);
