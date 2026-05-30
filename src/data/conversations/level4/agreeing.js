import { lesson, turn, alts } from '../helpers.js';

const TOPIC = 'agreeing';
const TITLE = 'Agreeing';

export const agreeingLessons = Object.fromEntries([
  lesson(TOPIC, TITLE, 'strong-agreement', 'Strong Agreement', [
    turn('Person', 'We need a break before burnout hits.', 'बर्नआउट से पहले ब्रेक चाहिए।', alts(
      ['This policy protects users.', 'यह नीति यूज़र बचाती।'],
      ['Remote Fridays boost focus.', 'रिमोट शुक्रवार फोकस।'],
      ['Safety training is mandatory.', 'सेफ्टी ट्रेनिंग ज़रूरी।']
    )),
    turn('You', 'Absolutely. I could not agree more.', 'बिल्कुल। पूरी सहमति।', alts(
      ['One hundred percent agree.', 'सौ प्रतिशत सहमत।'],
      ['Exactly my thought.', 'बिल्कुल मेरा विचार।'],
      ['Strongly agree, no doubt.', 'पक्की सहमति।']
    )),
    turn('Person', 'Glad we align.', 'खुशी हम मेल खाते।', alts(
      ['Team needs this push.', 'टीम को धक्का चाहिए।'],
      ['Leadership will listen.', 'लीडरशिप सुनेगी।']
    )),
    turn('You', 'Let us propose it in tomorrow’s meeting.', 'कल मीटिंग में प्रस्ताव।', alts(
      ['I will back you fully.', 'पूरा समर्थन।'],
      ['We should present data.', 'डेटा पेश करें।'],
      ['Unified message helps.', 'एक संदेश मदद।']
    )),
    turn('Person', 'I will draft the slide.', 'स्लाइड ड्राफ्ट करूँगा।', alts(
      ['Add burnout survey stats.', 'सर्वे आँकड़े।'],
      ['Keep tone calm.', 'टोन शांत।']
    )),
    turn('You', 'Perfect. I agree with every point you raised.', 'परफेक्ट। हर बिंदु सहमत।', alts(
      ['Fully on board.', 'पूरी तरह साथ।'],
      ['No edits needed.', 'संपादन नहीं।'],
      ['This will help morale.', 'मनोबल मदद।']
    )),
    turn('Person', 'Thanks for the strong support.', 'मज़बूत सपोर्ट शुक्रिया।', alts(
      ['Together we sound credible.', 'साथ विश्वसनीय।'],
      ['See you in prep.', 'तैयारी में।']
    )),
    turn('You', 'See you. Fully aligned.', 'मिलते। पूर्ण मेल।', alts(
      ['Let us win this.', 'जीतें।'],
      ['Agreement feels good.', 'सहमति अच्छी।'],
      ['Talk tonight.', 'आज रात बात।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'partial-agreement', 'Partial Agreement', [
    turn('Person', 'We should ban phones in meetings.', 'मीटिंग में फोन बैन।', alts(
      ['Salary hike for all ten percent.', 'सबको दस प्रतिशत वेतन।'],
      ['Move office to the suburbs.', 'ऑफिस उपनगर।'],
      ['No work on weekends ever.', 'कभी वीकेंड काम नहीं।']
    )),
    turn('You', 'I agree in principle, but exceptions help emergencies.', 'सिद्धांत में सहमत, पर आपात में अपवाद।', alts(
      ['Mostly agree, not absolute ban.', 'ज़्यादातर सहमत, पूर्ण बैन नहीं।'],
      ['Yes for focus, except on-call roles.', 'फोकस हाँ, ऑन-कॉल छोड़कर।'],
      ['Partly agree, needs clear rules.', 'आंशिक सहमति, साफ नियम।']
    )),
    turn('Person', 'Which exceptions?', 'कौन से अपवाद?', alts(
      ['People will cheat.', 'लोग धोखा।'],
      ['Hard to police.', 'नियंत्रण मुश्किल।']
    )),
    turn('You', 'On-call engineers and client escalations.', 'ऑन-कॉल इंजीनियर और क्लाइंट एस्केलेशन।', alts(
      ['Emergency bridge lines only.', 'सिर्फ आपात ब्रिज।'],
      ['Silent mode otherwise.', 'बाकी साइलेंट।'],
      ['Basket at door for others.', 'बाकी के लिए टोकरी।']
    )),
    turn('Person', 'That sounds reasonable.', 'उचित लगता।', alts(
      ['Hybrid rule works.', 'मिश्र नियम।'],
      ['I can accept that.', 'मंज़ूर।']
    )),
    turn('You', 'Glad we found middle ground.', 'बीच का रास्ता खुशी।', alts(
      ['Partial agreement is still progress.', 'आंशिक सहमति प्रगति।'],
      ['Pilot for one month?', 'एक महीना पायलट?'],
      ['Feedback after trial.', 'ट्राय के बाद फीडबैक।']
    )),
    turn('Person', 'Pilot works for me.', 'पायलट ठीक।', alts(
      ['Review in four weeks.', 'चार हफ्ते रिव्यू।'],
      ['Document the rule.', 'नियम लिखो।']
    )),
    turn('You', 'I will draft the guideline tonight.', 'आज रात गाइडलाइन।', alts(
      ['Balanced rules win.', 'संतुलित नियम जीतें।'],
      ['Thanks for flexibility.', 'लचीलेपन शुक्रिया।'],
      ['Talk tomorrow.', 'कल बात।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'friendly-agreement', 'Friendly Agreement', [
    turn('Person', 'This cafe has the best cold coffee.', 'इस कैफे की कोल्ड कॉफी बेस्ट।', alts(
      ['Bangalore traffic is crazy.', 'बैंगलोर ट्रैफिक पागल।'],
      ['Weekends should be longer.', 'वीकेंड लंबे होने चाहिए।'],
      ['That series ending was sad.', 'सीरीज़ अंत उदास।']
    )),
    turn('You', 'Totally. I am with you on that.', 'बिल्कुल। मैं भी यहीं।', alts(
      ['Same here, big yes.', 'मैं भी, हाँ।'],
      ['Could not agree more, friend.', 'पूरी सहमति यार।'],
      ['You took the words from my mouth.', 'मेरे मन की बात।']
    )),
    turn('Person', 'Want to split a large one?', 'लार्ज बाँटें?', alts(
      ['Try their wrap too?', 'रैप भी?'],
      ['Sit outside?', 'बाहर बैठें?']
    )),
    turn('You', 'Yes, large cold coffee and a wrap.', 'हाँ, लार्ज कोल्ड कॉफी और रैप।', alts(
      ['Large coffee sounds perfect.', 'लार्ज परफेक्ट।'],
      ['Outside if shade free.', 'छाया हो तो बाहर।'],
      ['My treat this time.', 'इस बार मेरा।']
    )),
    turn('Person', 'You paid last time though.', 'पिछली बार तुमने दिया।', alts(
      ['Split is fair.', 'बाँट उचित।'],
      ['Next time mine.', 'अगली बार मेरी।']
    )),
    turn('You', 'Split then. Still agree on the coffee.', 'बाँट लें। कॉफी पर अभी भी सहमत।', alts(
      ['Fair split.', 'उचित बाँट।'],
      ['Best cafe on this street.', 'गली की बेस्ट।'],
      ['Friendly agree and chill.', 'दोस्ताना सहमति।']
    )),
    turn('Person', 'Chill afternoon needed.', 'शांत दोपहर चाहिए।', alts(
      ['Back to work after.', 'बाद काम।'],
      ['Traffic can wait.', 'ट्रैफिक इंतजार।']
    )),
    turn('You', 'Agreed. Let us enjoy twenty minutes.', 'सहमत। बीस मिनट एंजॉय।', alts(
      ['Coffee bond.', 'कॉफी बंधन।'],
      ['Same taste buds.', 'एक जैसा स्वाद।'],
      ['Thanks for the break.', 'ब्रेक शुक्रिया।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'professional-agreement', 'Professional Agreement', [
    turn('Person', 'The proposal timeline looks realistic.', 'प्रस्ताव समयरेखा यथार्थवादी।', alts(
      ['Vendor B has better support.', 'वेंडर B सपोर्ट बेहतर।'],
      ['We should delay launch one week.', 'लॉन्च एक हफ्ता देर।'],
      ['Legal review is enough.', 'लीगल रिव्यू काफी।']
    )),
    turn('You', 'I concur with your assessment.', 'मैं आपके मूल्यांकन से सहमत।', alts(
      ['I agree with your summary.', 'सारांश सहमत।'],
      ['Aligned with your view.', 'आपके विचार से मेल।'],
      ['That matches my analysis too.', 'मेरे विश्लेषण से मेल।']
    )),
    turn('Person', 'Any risks we missed?', 'कोई जोखिम छूटा?', alts(
      ['Budget buffer?', 'बजट बफर?'],
      ['Stakeholder sign off?', 'हितधारक हस्ताक्षर?']
    )),
    turn('You', 'Only dependency on the API team.', 'सिर्फ API टीम निर्भरता।', alts(
      ['API delivery is the gating item.', 'API डिलीवरी गेट।'],
      ['We should confirm their sprint.', 'उनका स्प्रिंट कन्फर्म।'],
      ['Otherwise plan is sound.', 'बाकी योजना ठोस।']
    )),
    turn('Person', 'I will email API lead today.', 'आज API लीड ईमेल।', alts(
      ['Good catch.', 'अच्छी पकड़।'],
      ['Document in the RAID log.', 'RAID लॉग।']
    )),
    turn('You', 'Excellent. I support that action.', 'उत्कृष्ट। उस कार्रवाई का समर्थन।', alts(
      ['Please copy me.', 'मुझे कॉपी।'],
      ['Professional alignment helps delivery.', 'पेशेवर मेल डिलीवरी।'],
      ['Ready to sign minutes.', 'मिनट्स साइन तैयार।']
    )),
    turn('Person', 'Minutes will go out tonight.', 'मिनट्स आज रात।', alts(
      ['Thanks for constructive tone.', 'रचनात्मक टोन शुक्रिया।'],
      ['Next review Monday.', 'अगला सोमवार।']
    )),
    turn('You', 'Monday works. Agreed on all items.', 'सोमवार ठीक। सभी बिंदु सहमत।', alts(
      ['Clear path forward.', 'साफ रास्ता।'],
      ['Productive meeting.', 'उत्पादक मीटिंग।'],
      ['Speak then.', 'तब बात।']
    )),
  ]),
]);
