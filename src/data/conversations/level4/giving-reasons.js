import { lesson, turn, alts } from '../helpers.js';

const TOPIC = 'giving-reasons';
const TITLE = 'Giving Reasons';

export const givingReasonsLessons = Object.fromEntries([
  lesson(TOPIC, TITLE, 'supporting-opinions', 'Supporting Opinions', [
    turn('Person', 'Why do you prefer hybrid work?', 'हाइब्रिड काम क्यों पसंद?', alts(
      ['Why that vendor?', 'वह वेंडर क्यों?'],
      ['Why skip the party?', 'पार्टी क्यों छोड़ी?'],
      ['Why learn English now?', 'अभी अंग्रेज़ी क्यों?']
    )),
    turn('You', 'Because focus days at home save commute time.', 'क्योंकि घर फोकस दिन कम्यूट बचाते।', alts(
      ['Home days mean two extra hours.', 'घर दो घंटे extra।'],
      ['Less traffic stress is the reason.', 'कम ट्रैफिक तनाव कारण।'],
      ['Since I code, quiet home helps.', 'कोडिंग हो तो शांत घर मदद।']
    )),
    turn('Person', 'Office days have value too.', 'ऑफिस दिन भी मूल्य।', alts(
      ['Team bonding?', 'टीम बॉन्डिंग?'],
      ['Any downside home?', 'घर नुकसान?']
    )),
    turn('You', 'True, so I come twice a week for sync.', 'सही, इसलिए हफ्ते दो बार सिंक।', alts(
      ['Twice weekly for meetings.', 'हफ्ते दो बार मीटिंग।'],
      ['Office for brainstorm only.', 'ऑफिस सिर्फ ब्रेनस्टॉर्म।'],
      ['Balance is the main reason.', 'संतुलन मुख्य कारण।']
    )),
    turn('Person', 'Makes sense for your role.', 'तुम्हारी भूमिका के लिए समझ।', alts(
      ['Could work for me.', 'मेरे लिए भी।'],
      ['Need manager approval.', 'मैनेजर अप्रूवल।']
    )),
    turn('You', 'Show commute savings data to manager.', 'मैनेजर को कम्यूट बचत डेटा।', alts(
      ['Hours saved chart helps.', 'घंटे बचत चार्ट।'],
      ['Pilot month proves it.', 'एक महीना पायलट।'],
      ['Reason plus data wins.', 'कारण और डेटा जीतते।']
    )),
    turn('Person', 'I will try that argument.', 'वह तर्क ट्राय।', alts(
      ['Solid reasons.', 'ठोस कारण।'],
      ['Thanks for logic.', 'तर्क शुक्रिया।']
    )),
    turn('You', 'Happy to help craft the note.', 'नोट बनाने मदद।', alts(
      ['Opinions need reasons.', 'राय को कारण चाहिए।'],
      ['Talk after you send.', 'भेजने के बाद।'],
      ['Good luck.', 'शुभकामनाएँ।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'explaining-choices', 'Explaining Choices', [
    turn('Person', 'Why did you pick the blue design?', 'नीला डिज़ाइन क्यों?', alts(
      ['Why leave early today?', 'आज जल्दी क्यों?'],
      ['Why that college?', 'वह कॉलेज क्यों?'],
      ['Why this route on the map?', 'नक्शे पर यह रास्ता क्यों?']
    )),
    turn('You', 'Blue tested better with users in heat maps.', 'नीला हीट मैप में बेहतर।', alts(
      ['Users clicked blue more.', 'यूज़र नीले पर ज़्यादा क्लिक।'],
      ['Brand guide favors blue.', 'ब्रांड गाइड नीला।'],
      ['Contrast on mobile was clearer.', 'मोबाइल पर कंट्रास्ट साफ।']
    )),
    turn('Person', 'Green was my favorite.', 'हरा मेरा पसंदीदा।', alts(
      ['Any other reason?', 'और कारण?'],
      ['Accessibility?', 'एक्सेसिबिलिटी?']
    )),
    turn('You', 'Accessibility also pushed blue over green.', 'एक्सेसिबिलिटी ने नीला हरा से आगे।', alts(
      ['Green failed contrast test.', 'हरा कंट्रास्ट फेल।'],
      ['Color blind users saw blue clearer.', 'कलर ब्लाइंड नीला साफ।'],
      ['Two reasons: clicks and access.', 'दो कारण: क्लिक और एक्सेस।']
    )),
    turn('Person', 'Data beats taste. Fair.', 'डेटा स्वाद से ऊपर। उचित।', alts(
      ['Document reasons?', 'कारण दस्तावेज़?'],
      ['Stakeholders will ask.', 'हितधारक पूछेंगे।']
    )),
    turn('You', 'I logged both reasons in the ticket.', 'टिकट में दोनों कारण।', alts(
      ['Ticket link in Slack.', 'स्लैक लिंक।'],
      ['Transparent choice history.', 'पारदर्शी इतिहास।'],
      ['Happy to defend in review.', 'रिव्यू में बचाव खुशी।']
    )),
    turn('Person', 'Review is tomorrow.', 'रिव्यू कल।', alts(
      ['You are prepared.', 'तैयार।'],
      ['Clear explanation helps.', 'साफ व्याख्या।']
    )),
    turn('You', 'Will present charts briefly.', 'चार्ट संक्षेप पेश।', alts(
      ['Choices need why.', 'चुनाव को क्यों।'],
      ['See you in review.', 'रिव्यू में।'],
      ['Thanks for asking.', 'पूछने शुक्रिया।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'justifying-decisions', 'Justifying Decisions', [
    turn('Person', 'Why delay the product launch?', 'लॉन्च देरी क्यों?', alts(
      ['Why hire externally?', 'बाहर से भर्ती क्यों?'],
      ['Why cut the bonus?', 'बोनस काट क्यों?'],
      ['Why change vendors?', 'वेंडर बदलाव क्यों?']
    )),
    turn('You', 'We found a security flaw Friday night.', 'शुक्रवार रात सुरक्षा खामी मिली।', alts(
      ['Critical bug needs fix first.', 'गंभीर बग पहले।'],
      ['Launching now risks data leak.', 'अभी लॉन्च लीक जोखिम।'],
      ['Because user trust comes first.', 'क्योंकि यूज़र भरोसा पहले।']
    )),
    turn('Person', 'How long to fix?', 'ठीक कितना समय?', alts(
      ['Marketing is upset.', 'मार्केटिंग नाराज़।'],
      ['Competitor ships Monday.', 'प्रतिस्पर्धी सोमवार।']
    )),
    turn('You', 'Patch ETA is three days with testing.', 'पैच अनुमान तीन दिन टेस्ट सहित।', alts(
      ['72 hours with QA sign off.', '72 घंटे QA साइन।'],
      ['Better delay than breach headline.', 'सुर्खी से बेहतर देरी।'],
      ['Reason is risk reduction.', 'कारण जोखिम कम।']
    )),
    turn('Person', 'Board wants a written rationale.', 'बोर्ड लिखित औचित्य।', alts(
      ['Keep it short.', 'छोटा रखो।'],
      ['Include timeline.', 'समयरेखा।']
    )),
    turn('You', 'I will send a one page memo tonight.', 'आज रात एक पेज मेमो।', alts(
      ['Memo covers flaw, fix, new date.', 'मेमो खामी, फिक्स, नई तारीख।'],
      ['Justify with facts not fear.', 'डर नहीं तथ्य।'],
      ['CC you on send.', 'भेजते समय कॉपी।']
    )),
    turn('Person', 'Please do. Transparency builds trust.', 'कृपया। पारदर्शिता भरोसा।', alts(
      ['Hard call but right.', 'कठिन पर सही।'],
      ['Team will understand.', 'टीम समझेगी।']
    )),
    turn('You', 'Thanks. Justifying tough calls matters.', 'शुक्रिया। कठिन निर्णय औचित्य मायने।', alts(
      ['Update at standup.', 'स्टैंडअप अपडेट।'],
      ['Clear reasons calm teams.', 'साफ कारण शांत।'],
      ['Talk tomorrow morning.', 'कल सुबह बात।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'cause-and-effect', 'Cause & Effect', [
    turn('Person', 'Why did sales drop last month?', 'पिछले महीने बिक्री क्यों गिरी?', alts(
      ['Site was slow?', 'साइट धीमी?'],
      ['Ads stopped?', 'ऐड बंद?'],
      ['Seasonal?', 'मौसमी?']
    )),
    turn('You', 'Checkout failed on older phones, so carts abandoned.', 'पुराने फोन चेकआउट फेल, कार्ट छोड़े।', alts(
      ['Bug caused abandon rate spike.', 'बग ने छोड़ने बढ़ाए।'],
      ['Slow page led to drop.', 'धीमा पेज गिरावट।'],
      ['Cause was mobile crash, effect was churn.', 'कारण मोबाइल क्रैश, प्रभाव छोड़ना।']
    )),
    turn('Person', 'Fix shipped yet?', 'फिक्स आया?', alts(
      ['How big was impact?', 'प्रभाव कितना?'],
      ['Other causes?', 'और कारण?']
    )),
    turn('You', 'Fix went live Tuesday, sales recovering now.', 'फिक्स मंगलवार, बिक्री सुधर रही।', alts(
      ['Recovery started within 48 hours.', '48 घंटे में सुधार।'],
      ['Ads also resumed, helping lift.', 'ऐड भी, उठाव।'],
      ['Clear cause and clear effect.', 'साफ कारण और साफ प्रभाव।']
    )),
    turn('Person', 'Postmortem needed.', 'पोस्टमॉर्टम चाहिए।', alts(
      ['Prevent repeat.', 'दोहराव रोक।'],
      ['Share learnings.', 'सीख शेयर।']
    )),
    turn('You', 'Postmortem Friday with action items.', 'शुक्रवार पोस्टमॉर्टम कार्य सूची।', alts(
      ['Add mobile tests to CI.', 'CI मोबाइल टेस्ट।'],
      ['Monitor abandon metric daily.', 'रोज छोड़ने मेट्रिक।'],
      ['Cause effect story documented.', 'कारण प्रभाव कहानी दर्ज।']
    )),
    turn('Person', 'Good plan.', 'अच्छी योजना।', alts(
      ['Data tells stories.', 'डेटा कहानी।'],
      ['Thanks for analysis.', 'विश्लेषण शुक्रिया।']
    )),
    turn('You', 'Cause effect thinking avoids blame.', 'कारण प्रभाव सोच दोष से बचाती।', alts(
      ['Team learns systems.', 'टीम सिस्टम सीखे।'],
      ['Report draft tonight.', 'रिपोर्ट आज।'],
      ['Align in postmortem.', 'पोस्टमॉर्टम में मेल।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'persuading-others', 'Persuading Others', [
    turn('Person', 'I am not sure about the gym plan.', 'जिम प्लान पर unsure।', alts(
      ['Do not want the training budget.', 'ट्रेनिंग बजट नहीं।'],
      ['Skip the team outing?', 'टीम आउटिंग छोड़ें?'],
      ['Resist early meetings?', 'जल्दी मीटिंग नहीं?']
    )),
    turn('You', 'Gym membership cuts sick days, so we save leave.', 'जिम सदस्यता बीमार दिन कम, छुट्टी बचे।', alts(
      ['Health spend lowers medical claims.', 'स्वास्थ्य खर्च दावा कम।'],
      ['Fit teams focus better afternoons.', 'फिट टीम दोपहर फोकस।'],
      ['Reason: productivity plus wellness.', 'कारण: उत्पादकता और स्वास्थ्य।']
    )),
    turn('Person', 'Cost is still high.', 'लागत अभी ऊँची।', alts(
      ['People may not use it.', 'लोग उपयोग न करें।'],
      ['Proof?', 'सबूत?']
    )),
    turn('You', 'Pilot with twenty volunteers shows eighty percent usage.', 'बीस स्वयंसेवक पायलट, अस्सी प्रतिशत उपयोग।', alts(
      ['Pilot data attached.', 'पायलट डेटा संलग्न।'],
      ['Company pays half, morale rises.', 'कंपनी आधा, मनोबल।'],
      ['Because results beat assumptions.', 'क्योंकि परिणाम अनुमान से ऊपर।']
    )),
    turn('Person', 'Eighty percent is strong.', 'अस्सी प्रतिशत मज़बूत।', alts(
      ['Maybe approve pilot.', 'शायद पायलट।'],
      ['CFO needs this.', 'CFO को चाहिए।']
    )),
    turn('You', 'Let us present pilot results Friday.', 'शुक्रवार पायलट परिणाम पेश।', alts(
      ['I will co-present with HR.', 'HR संग।'],
      ['Persuade with numbers kindly.', 'नंबर से विनम्र समझाओ।'],
      ['Offer opt out option.', 'ऑप्ट आउट विकल्प दो।']
    )),
    turn('Person', 'Opt out makes it fair.', 'ऑप्ट आउट उचित।', alts(
      ['You convinced me.', 'समझा दिया।'],
      ['Good persuasion.', 'अच्छा समझाना।']
    )),
    turn('You', 'Thanks. Reasons plus respect work.', 'शुक्रिया। कारण और सम्मान।', alts(
      ['Friday deck ready.', 'शुक्रवार डेक।'],
      ['Persuasion is not pressure.', 'दबाव नहीं समझाना।'],
      ['Talk prep tonight.', 'आज रात तैयारी।']
    )),
  ]),
]);
