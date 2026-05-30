import { lesson, turn, alts } from '../helpers.js';

const TOPIC = 'salary-discussion';
const TITLE = 'Salary Discussion';

export const salaryDiscussionLessons = Object.fromEntries([
  lesson(TOPIC, TITLE, 'expected-ctc', 'Expected CTC', [
    turn('Person', 'What is your expected CTC?', 'अपेक्षित CTC?', alts(
      ['Salary expectations?', 'वेतन अपेक्षा?'],
      ['Range please.', 'रेंज।']
    )),
    turn('You', 'Based on role and market, I expect twenty four to twenty six LPA.', 'भूमिका बाज़ार, चौबीस से छब्बीस LPA।', alts(
      ['I am looking at eighteen to twenty for this band.', 'इस बैंड अठारह से बीस।'],
      ['Thirty LPA if level is senior as discussed.', 'तीस LPA यदि सीनियर जैसा चर्चा।'],
      ['Research shows similar roles at twenty five.', 'समान भूमिका पच्चीस।']
    )),
    turn('Person', 'That is above our band.', 'हमारे बैंड से ऊपर।', alts(
      ['Current pay?', 'वर्तमान?'],
      ['Flexible?', 'लचीला?']
    )),
    turn('You', 'I am open if equity and learning budget are strong.', 'इक्विटी सीख बजट मज़बूत तो खुला।', alts(
      ['Could meet at twenty three with signing bonus.', 'तेईस साइनिंग बोनस संग।'],
      ['I value growth over last lakh.', 'विकास अंतिम लाख से ऊपर।'],
      ['Expected CTC should be a range not one number.', 'रेंज एक संख्या नहीं।']
    )),
    turn('Person', 'Band tops at twenty two base.', 'बेस बाईस टॉप।', alts(
      ['Variable ten percent.', 'परिवर्तन दस प्रतिशत।'],
      ['ESOP possible.', 'ESOP संभव।']
    )),
    turn('You', 'Twenty two base plus ESOP could work pending details.', 'बेस बाईस ESOP विवरण पेंडिंग।', alts(
      ['Please share ESOP vesting cliff.', 'ESOP वेस्टिंग क्लिफ।'],
      ['I need twenty four all in to accept likely.', 'स्वीकार संभव चौबीस ऑल इन।'],
      ['Negotiation is normal, stay polite.', 'वार्ता सामान्य, विनम्र।']
    )),
    turn('Person', 'HR will send breakdown.', 'HR विवरण।', alts(
      ['Do not decide today.', 'आज फैसला नहीं।'],
      ['Other offers?', 'और ऑफर?']
    )),
    turn('You', 'I will review breakdown calmly.', 'शांति से विवरण देखूँगा।', alts(
      ['Expected CTC talk done professionally.', 'CTC पेशेवर।'],
      ['Thank you.', 'धन्यवाद।'],
      ['Await email.', 'ईमेल इंतजार।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'current-salary', 'Current Salary', [
    turn('Person', 'What is your current CTC?', 'वर्तमान CTC?', alts(
      ['Take home?', 'हाथ में?'],
      ['Last increment?', 'अंतिम वृद्धि?']
    )),
    turn('You', 'Current CTC is twenty LPA with ten percent variable.', 'वर्तमान बीस LPA दस प्रतिशत परिवर्तन।', alts(
      ['Eighteen LPA fixed, no ESOP.', 'अठारह फिक्स, ESOP नहीं।'],
      ['Twenty two including bonus average.', 'बाईस बोनस औसत सहित।'],
      ['Comfortable sharing payslip if offer stage.', 'ऑफर चरण पेस्लिप।']
    )),
    turn('Person', 'When was last hike?', 'अंतिम वृद्धि कब?', alts(
      ['Why below market?', 'बाज़ार से नीचे क्यों?'],
      ['Joining CTC?', 'जॉइनिंग?']
    )),
    turn('You', 'Last hike eight percent in April.', 'अप्रैल आठ प्रतिशत।', alts(
      ['Startup equity not liquid, cash lower.', 'स्टार्टअप इक्विटी तरल नहीं, नकद कम।'],
      ['Joined at twelve, grew to twenty.', 'बारह से बीस।'],
      ['Current salary honest, no inflation.', 'ईमानदार, बढ़ाना नहीं।']
    )),
    turn('Person', 'We need proof at offer.', 'ऑफर पर प्रमाण।', alts(
      ['Expect thirty percent jump?', 'तीस प्रतिशत छलांग?'],
      ['Retention risk?', 'रोक जोखिम?']
    )),
    turn('You', 'Reasonable jump if role fits, not only percent.', 'उचित छलांग यदि भूमिका फिट, सिर्फ प्रतिशत नहीं।', alts(
      ['I will share payslip when mutual interest clear.', 'रुचि साफ पेस्लिप।'],
      ['Counter offer possible but not chasing.', 'काउंटर संभव, पीछा नहीं।'],
      ['Current salary answers stay factual.', 'तथ्य।']
    )),
    turn('Person', 'Fair.', 'उचित।', alts(
      ['Moving to expectations.', 'अपेक्षा।'],
      ['Almost there.', 'लगभग।']
    )),
    turn('You', 'Happy to align on total comp holistically.', 'कुल मुआवज़ा समग्र मिलान।', alts(
      ['Current pay is baseline not anchor forever.', 'आधार हमेशा लंगर नहीं।'],
      ['Thanks.', 'शुक्रिया।'],
      ['Continue.', 'जारी।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'negotiating-offer', 'Negotiating Offer', [
    turn('Person', 'Here is offer at twenty one LPA. Thoughts?', 'ऑफर इक्कीस LPA। विचार?', alts(
      ['Take it or leave?', 'लो या छोड़?'],
      ['Deadline Friday.', 'शुक्रवार डेडलाइन।']
    )),
    turn('You', 'Thank you. I am keen, but hoped for twenty four given scope.', 'धन्यवाद। उत्सुक, स्कोप देख चौबीस आशा।', alts(
      ['Offer is close, can we bridge two lakhs?', 'पास, दो लाख पुल?'],
      ['Role is senior, market data shows gap.', 'सीनियर, बाज़ार अंतर।'],
      ['I need time to review full breakdown.', 'पूरा विवरण समय।']
    )),
    turn('Person', 'Best we can do is twenty two plus joining bonus.', 'सबसे अच्छा बाईस जॉइनिंग बोनस।', alts(
      ['No more base.', 'बेस और नहीं।'],
      ['Competing offer?', 'प्रतिस्पर्धी?']
    )),
    turn('You', 'Twenty two plus one lakh joining works if ESOP included.', 'बाईस एक लाख जॉइनिंग ESOP संग ठीक।', alts(
      ['I have verbal twenty four elsewhere, prefer you.', 'मौखिक चौबीस कहीं, आप पसंद।'],
      ['Can we add learning five K annual?', 'सीख सालाना पाँच K?'],
      ['Negotiate respectfully, willing to walk if far.', 'सम्मान, दूर हो तो चलना।']
    )),
    turn('Person', 'ESOP standard package attached.', 'ESOP मानक संलग्न।', alts(
      ['Final best offer.', 'अंतिम।'],
      ['Need answer by Friday.', 'शुक्रवार जवाब।']
    )),
    turn('You', 'I will sign by Friday if vesting cliff is one year not two.', 'वेस्टिंग क्लिफ एक साल हो तो शुक्रवार साइन।', alts(
      ['Request written offer letter tonight.', 'आज रात लेटर।'],
      ['Negotiation nearly done.', 'वार्ता लगभग।'],
      ['Grateful for flexibility.', 'लचीलापन आभारी।']
    )),
    turn('Person', 'We can do one year cliff.', 'एक साल क्लिफ।', alts(
      ['Welcome aboard soon.', 'जल्द स्वागत।'],
      ['HR sends letter.', 'HR लेटर।']
    )),
    turn('You', 'Thank you. Excited to accept after letter review.', 'धन्यवाद। लेटर बाद स्वीकार उत्साह।', alts(
      ['Negotiation closed win win.', 'वार्ता जीत जीत।'],
      ['Professional tone throughout.', 'पेशेवर स्वर।'],
      ['Talk soon.', 'जल्द बात।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'benefits-bonus', 'Benefits and Bonus', [
    turn('Person', 'Any questions on benefits?', 'लाभ सवाल?', alts(
      ['Health insurance?', 'स्वास्थ्य बीमा?'],
      ['Remote policy?', 'रिमोट नीति?']
    )),
    turn('You', 'Please explain health cover for dependents.', 'आश्रित स्वास्थ्य कवर।', alts(
      ['Bonus payout timing?', 'बोनस समय?'],
      ['Relocation support?', 'स्थानांतरण सहायता?'],
      ['Learning budget amount?', 'सीख बजट राशि?']
    )),
    turn('Person', 'Spouse and kids covered, five lakh learning per year.', 'पत्नी बच्चे, सीख सालाना पाँच लाख।', alts(
      ['Bonus annual March.', 'बोनस मार्च।'],
      ['Hybrid three two.', 'हाइब्रिड तीन दो।']
    )),
    turn('You', 'Is learning budget use it or lose it?', 'सीख बजट उपयोग या खो?', alts(
      ['Relocation lump sum?', 'स्थानांतरण एकमुश्त?'],
      ['Gratuity standard?', 'ग्रेच्युटी मानक?'],
      ['Benefits matter in total comp talk.', 'कुल मुआवज़ा में लाभ।']
    )),
    turn('Person', 'Learning rolls one year, relocation up to fifty K.', 'सीख एक साल रोल, स्थानांतरण पचास K तक।', alts(
      ['Gratuity as per law.', 'कानून ग्रेच्युटी।'],
      ['PF matched.', 'PF मेल।']
    )),
    turn('You', 'That package makes the offer attractive.', 'पैकेज ऑफर आकर्षक।', alts(
      ['Please include in written offer.', 'लिखित ऑफर शामिल।'],
      ['Benefits questions show seriousness.', 'गंभीरता।'],
      ['Thank you for details.', 'विवरण शुक्रिया।']
    )),
    turn('Person', 'Will be in letter.', 'लेटर में।', alts(
      ['Other companies ask same.', 'और कंपनी समान।'],
      ['Clear?', 'साफ?']
    )),
    turn('You', 'Clear. No more salary questions.', 'साफ। और वेतन सवाल नहीं।', alts(
      ['Benefits round complete.', 'लाभ पूर्ण।'],
      ['Ready to join after letter.', 'लेटर बाद जॉइन।'],
      ['Appreciate transparency.', 'पारदर्शिता कद्र।']
    )),
  ]),
]);
