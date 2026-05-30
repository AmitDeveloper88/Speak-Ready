import { lesson, turn, alts } from '../helpers.js';

const TOPIC = 'comparing';
const TITLE = 'Comparing';

export const comparingLessons = Object.fromEntries([
  lesson(TOPIC, TITLE, 'products', 'Products', [
    turn('Person', 'Which phone should I buy under thirty thousand?', 'तीस हज़ार के अंदर कौन सा फोन?', alts(
      ['Laptop A or B?', 'लैपटॉप A या B?'],
      ['Noise cancelling buds?', 'नोइज़ कैंसल बड्स?'],
      ['Tablet for reading?', 'पढ़ने टैबलेट?']
    )),
    turn('You', 'Model X has better battery, Y has sharper camera.', 'मॉडल X बैटरी बेहतर, Y कैमरा तेज़।', alts(
      ['X lasts two days, Y one day.', 'X दो दिन, Y एक।'],
      ['Camera Y wins, battery X wins.', 'कैमरा Y, बैटरी X।'],
      ['Compare on your priority.', 'प्राथमिकता पर तुलना।']
    )),
    turn('Person', 'I care about battery more.', 'बैटरी ज़्यादा।', alts(
      ['Gaming no.', 'गेमिंग नहीं।'],
      ['Photos sometimes.', 'कभी फोटो।']
    )),
    turn('You', 'Then X beats Y for you clearly.', 'तो X साफ आपके लिए बेहतर।', alts(
      ['Pick X, skip Y.', 'X लो, Y छोड़ो।'],
      ['Y is overkill on camera.', 'Y कैमरा ज़्यादा।'],
      ['Battery life daily win.', 'रोज बैटरी जीत।']
    )),
    turn('Person', 'What about after sales service?', 'बिक्री के बाद सेवा?', alts(
      ['Warranty length?', 'वारंटी?'],
      ['Case availability?', 'कवर?']
    )),
    turn('You', 'X brand has more service centers here.', 'X ब्रांड यहाँ ज़्यादा सेंटर।', alts(
      ['Local service tips scale to X.', 'स्थानीय सेवा X को।'],
      ['Y service only in big cities.', 'Y सेवा बड़े शहर।'],
      ['Compare map on their site.', 'साइट मैप देखो।']
    )),
    turn('Person', 'That settles it. X it is.', 'तय। X।', alts(
      ['Thanks for comparing.', 'तुलना शुक्रिया।'],
      ['Saved me research time.', 'रिसर्च समय बचा।']
    )),
    turn('You', 'Happy to help. Check festival sales too.', 'मदद खुशी। त्योहार सेल भी।', alts(
      ['Compare prices online.', 'ऑनलाइन कीमत।'],
      ['Good purchase ahead.', 'अच्छी खरीद।'],
      ['Tell me how it runs.', 'चलाकर बताना।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'cities', 'Cities', [
    turn('Person', 'Pune or Hyderabad for IT jobs?', 'IT जॉब पुणे या हैदराबाद?', alts(
      ['Mumbai vs Bangalore rent?', 'किराया मुंबई बनाम बैंगलोर?'],
      ['Delhi or Chennai for food?', 'खाना दिल्ली या चेन्नई?'],
      ['Moving for college?', 'कॉलेज के लिए?']
    )),
    turn('You', 'Hyderabad rent is lower, Pune weather is nicer.', 'हैदराबाद किराया कम, पुणे मौसम अच्छा।', alts(
      ['Hyderabad cheaper, Pune greener.', 'हैदराबाद सस्ता, पुणे हरा।'],
      ['Traffic similar, culture differs.', 'ट्रैफिक समान, संस्कृति अलग।'],
      ['Compare salary offers too.', 'सैलरी ऑफर भी।']
    )),
    turn('Person', 'I have offers in both.', 'दोनों ऑफर।', alts(
      ['Family in Pune.', 'पुणे परिवार।'],
      ['Friends in Hyderabad.', 'हैदराबाद दोस्त।']
    )),
    turn('You', 'Then Pune wins on family support.', 'तो पुणे परिवार सपोर्ट से।', alts(
      ['Family tip scale to Pune.', 'परिवार पुणे को।'],
      ['Hyderabad wins if friends are close.', 'दोस्त करीब हों तो हैदराबाद।'],
      ['Visit both weekends before move.', 'शिफ्ट से पहले दोनों देखो।']
    )),
    turn('Person', 'Weekend trips planned.', 'वीकेंड यात्रा प्लान।', alts(
      ['Food scene matters.', 'खाना मायने।'],
      ['Commute length?', 'कम्यूट?']
    )),
    turn('You', 'Hyderabad commutes shorter in many zones.', 'कई ज़ोन में हैदराबाद कम्यूट छोटा।', alts(
      ['Pune traffic growing though.', 'पुणे ट्रैफिक बढ़ रहा।'],
      ['Metro helps Hyderabad.', 'मेट्रो हैदराबाद मदद।'],
      ['List your top five needs.', 'पाँच ज़रूरत लिखो।']
    )),
    turn('Person', 'List ready. Compare score tonight.', 'लिस्ट तैयार। आज रात स्कोर।', alts(
      ['Spreadsheet helps.', 'शीट मदद।'],
      ['Big life choice.', 'बड़ा जीवन चुनाव।']
    )),
    turn('You', 'Send sheet, I will add notes.', 'शीट भेजो, नोट जोड़ूँगा।', alts(
      ['City compare needs personal weights.', 'व्यक्तिगत वज़न चाहिए।'],
      ['Happy to advise.', 'सलाह खुशी।'],
      ['Talk tomorrow.', 'कल बात।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'jobs', 'Jobs', [
    turn('Person', 'Startup offer versus stable MNC.', 'स्टार्टअप ऑफर बनाम MNC।', alts(
      ['Contract role or full time?', 'कॉन्ट्रैक्ट या फुल टाइम?'],
      ['Remote job or office?', 'रिमोट या ऑफिस?'],
      ['Higher pay or learning?', 'ज़्यादा पगार या सीख?']
    )),
    turn('You', 'Startup learns faster, MNC pays steadier.', 'स्टार्टअप तेज़ सीख, MNC स्थिर पगार।', alts(
      ['Risk high startup, calm MNC.', 'जोखिम स्टार्टअप, शांति MNC।'],
      ['Equity startup, benefits MNC.', 'इक्विटी स्टार्टअप, लाभ MNC।'],
      ['Compare growth curves.', 'वृद्धि तुलना।']
    )),
    turn('Person', 'I have loans to pay.', 'कर्ज़ चुकाना।', alts(
      ['Two years experience.', 'दो साल अनुभव।'],
      ['Want leadership soon.', 'जल्दी लीडरशिप।']
    )),
    turn('You', 'Then MNC base helps loans, startup later.', 'तो MNC कर्ज़, स्टार्टअप बाद।', alts(
      ['Stable cash flow first.', 'पहले स्थिर नकदी।'],
      ['Startup after emergency fund.', 'आपात फंड के बाद स्टार्टअप।'],
      ['Hybrid join scale-up.', 'स्केल-अप मिश्र।']
    )),
    turn('Person', 'Scale-up middle ground interesting.', 'स्केल-अप बीच दिलचस्प।', alts(
      ['Less risk than seed startup.', 'सीड से कम जोखिम।'],
      ['Still fast learning.', 'फिर भी तेज़ सीख।']
    )),
    turn('You', 'Compare offer letters on total package.', 'कुल पैकेज पर ऑफर तुलना।', alts(
      ['Include bonus and insurance.', 'बोनस बीमा शामिल।'],
      ['Title growth path matters.', 'टाइटल विकास रास्ता।'],
      ['Negotiate both if possible.', 'संभव हो तो दोनों बात।']
    )),
    turn('Person', 'Will negotiate tomorrow.', 'कल बातचीत।', alts(
      ['Thanks for framing.', 'ढांचा शुक्रिया।'],
      ['Job compare is stressful.', 'तुलना तनाव।']
    )),
    turn('You', 'You will pick well with numbers clear.', 'नंबर साफ तो अच्छा चुनोगे।', alts(
      ['Rooting for you.', 'साथ हूँ।'],
      ['Compare then decide.', 'तुलना फिर निर्णय।'],
      ['Update me.', 'अपडेट देना।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'education-options', 'Education Options', [
    turn('Person', 'MBA abroad or online Indian MBA?', 'विदेश MBA या भारत ऑनलाइन?', alts(
      ['Bootcamp versus masters?', 'बूटकैंप बनाम मास्टर्स?'],
      ['Part time degree?', 'पार्ट टाइम डिग्री?'],
      ['Certification only?', 'सिर्फ सर्टिफिकेशन?']
    )),
    turn('You', 'Abroad costs more, network global. Online saves cash.', 'विदेश महँगा, ग्लोबल नेटवर्क। ऑनलाइन बचत।', alts(
      ['Foreign MBA pricey, strong alumni.', 'विदेश MBA कीमती, एलुमनाई।'],
      ['Online flexible, local network.', 'ऑनलाइन लचीला, स्थानीय नेटवर्क।'],
      ['Compare ROI over five years.', 'पाँच साल ROI।']
    )),
    turn('Person', 'Budget is twelve lakhs max.', 'बजट अधिकतम बारह लाख।', alts(
      ['Family abroad?', 'परिवार विदेश?'],
      ['Career break okay?', 'करियर ब्रेक?']
    )),
    turn('You', 'That budget fits top online, not full abroad.', 'वह बजट टॉप ऑनलाइन, पूरा विदेश नहीं।', alts(
      ['Consider one semester abroad later.', 'बाद एक सेमेस्टर विदेश।'],
      ['Scholarship hunt if abroad dream.', 'विदेश सपना तो छात्रवृत्ति।'],
      ['Indian MBA plus work safer.', 'भारत MBA और काम सुरक्षित।']
    )),
    turn('Person', 'Safer path sounds wise.', 'सुरक्षित रास्ता समझदारी।', alts(
      ['Still want global exposure.', 'ग्लोबल एक्सपोज़र चाहिए।'],
      ['Online plus exchange?', 'ऑनलाइन और एक्सचेंज?']
    )),
    turn('You', 'Yes, programs with two week campus abroad.', 'हाँ, दो हफ्ते विदेश कैंपस वाले।', alts(
      ['Short immersion trips.', 'छोटी डुबकी यात्रा।'],
      ['Compare accredited hybrids.', 'मान्यता हाइब्रिड तुलना।'],
      ['Speak to alumni both tracks.', 'दोनों ट्रैक एलुमनाई से बात।']
    )),
    turn('Person', 'Will call alumni this week.', 'इस हफ्ते एलुमनाई कॉल।', alts(
      ['Compare list growing.', 'तुलना लिस्ट।'],
      ['Thanks for clarity.', 'स्पष्टता शुक्रिया।']
    )),
    turn('You', 'Happy to review your spreadsheet.', 'शीट रिव्यू खुशी।', alts(
      ['Education compare needs patience.', 'तुलना धैर्य।'],
      ['Smart questions asked.', 'स्मार्ट सवाल।'],
      ['Ping me anytime.', 'कभी पिंग।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'travel-destinations', 'Travel Destinations', [
    turn('Person', 'Goa or Kerala for December trip?', 'दिसंबर यात्रा गोवा या केरल?', alts(
      ['Mountains or beach?', 'पहाड़ या समुद्र?'],
      ['International versus local?', 'विदेश या स्थानीय?'],
      ['Budget trip ideas?', 'बजट आइडिया?']
    )),
    turn('You', 'Goa is lively, Kerala is calmer and greener.', 'गोवा जीवंत, केरल शांत हरा।', alts(
      ['Goa parties, Kerala backwaters.', 'गोवा पार्टी, केरल बैकवाटर।'],
      ['Goa crowds, Kerala nature.', 'गोवा भीड़, केरल प्रकृति।'],
      ['Match trip to your mood.', 'मूड से मिलाओ।']
    )),
    turn('Person', 'We want relax, not party.', 'आराम चाहिए, पार्टी नहीं।', alts(
      ['Two friends only.', 'दो दोस्त।'],
      ['Five days max.', 'अधिकतम पाँच दिन।']
    )),
    turn('You', 'Then Kerala wins over Goa for you.', 'तो केरल गोवा से बेहतर।', alts(
      ['Try Varkala or Munnar.', 'वर्कला या मुन्नार।'],
      ['Houseboat one night.', 'एक रात हाउसबोट।'],
      ['Goa will feel noisy.', 'गोवा शोरगुल।']
    )),
    turn('Person', 'Houseboat sounds unique.', 'हाउसबोट अनोखा।', alts(
      ['Monsoon risk in Dec?', 'दिसंबर मानसून?'],
      ['Book early?', 'जल्दी बुक?']
    )),
    turn('You', 'December is dry, book houseboat early.', 'दिसंबर सूखा, हाउसबोट जल्दी बुक।', alts(
      ['Compare packages online.', 'ऑनलाइन पैकेज।'],
      ['Train cheaper than flight.', 'ट्रेन सस्ती।'],
      ['Add two days for Ayurveda spa.', 'आयुर्वेद स्पा दो दिन।']
    )),
    turn('Person', 'Spa plus backwaters perfect.', 'स्पा और बैकवाटर परफेक्ट।', alts(
      ['Itinerary tomorrow.', 'कल इटिनरेरी।'],
      ['Thanks for comparing.', 'तुलना शुक्रिया।']
    )),
    turn('You', 'Send draft, I will tweak.', 'ड्राफ्ट भेजो, ठीक करूँगा।', alts(
      ['Compare costs before pay.', 'भुगतान पहले लागत।'],
      ['Kerala fits relax goal.', 'केरल आराम लक्ष्य।'],
      ['Safe travels ahead.', 'शुभ यात्रा।']
    )),
  ]),
]);
