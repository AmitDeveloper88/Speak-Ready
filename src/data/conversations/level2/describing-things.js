import { lesson, turn, alts } from '../helpers.js';

const TOPIC = 'describing-things';
const TITLE = 'Describing Things';

export const describingThingsLessons = Object.fromEntries([
  lesson(TOPIC, TITLE, 'people', 'People', [
    turn('Person', 'Who is that person at the reception?', 'रिसेप्शन पर वो कौन?', alts(
      ['Describe the woman in blue.', 'नीले कपड़े वाली महिला बताओ।'],
      ['New security guard?', 'नया गार्ड?'],
      ['Someone from HR?', 'HR से?']
    )),
    turn('You', 'Tall guy, glasses, friendly smile, speaks softly.', 'लंबा, चश्मा, मुस्कान, धीरे बोलता।', alts(
      ['Tall, glasses, calm voice.', 'लंबा, चश्मा, शांत आवाज़।'],
      ['He looks helpful, navy blazer.', 'मददगार लगता, नेवी ब्लेज़र।'],
      ['Medium height, beard, always nods hello.', 'मीडियम, दाढ़ी, हमेशा सिर हिलाता।']
    )),
    turn('Person', 'Maybe the new facilities manager.', 'शायद नया फैसिलिटी मैनेजर।', alts(
      ['Looks familiar.', 'पहचान जैसा।'],
      ['Should we ask him?', 'पूछें?']
    )),
    turn('You', 'Yes, he helped me find the printer.', 'हाँ, प्रिंटर ढूँढने में मदद की।', alts(
      ['He guided me yesterday.', 'कल रास्ता बताया।'],
      ['Very polite, knows the floor well.', 'बहुत विनम्र, फ्लोर जानता।'],
      ['He gave me the WiFi slip.', 'वाईफाई स्लिप दी।']
    )),
    turn('Person', 'Good to have helpful people around.', 'मददगार लोग अच्छे।', alts(
      ['First week needs that.', 'पहला हफ्ता चाहिए।'],
      ['I will introduce myself.', 'परिचय करूँगा।']
    )),
    turn('You', 'I will thank him again later.', 'बाद फिर शुक्रिया कहूँगा।', alts(
      ['Should bring him chai.', 'चाय लाऊँ?'],
      ['Small kindness matters.', 'छोटी दया मायने।'],
      ['Note his name badge next time.', 'अगली बार बैज देखूँगा।']
    )),
    turn('Person', 'His badge said Rakesh.', 'बैज पर राकेश।', alts(
      ['Rakesh from facilities.', 'फैसिलिटी से राकेश।'],
      ['Add him on internal chat.', 'इंटरनल चैट जोड़ो।']
    )),
    turn('You', 'Perfect. I will message Rakesh if stuck.', 'बढ़िया। अटकूँ तो राकेश को मैसेज।', alts(
      ['Good to know his name.', 'नाम जानना अच्छा।'],
      ['Helpful people make offices better.', 'मददगार ऑफिस बेहतर।'],
      ['Thanks for pointing him out.', 'दिखाने के लिए शुक्रिया।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'places', 'Places', [
    turn('Person', 'How is the new coworking space?', 'नया कोवर्किंग कैसा?', alts(
      ['Describe the cafe you found.', 'मिली कैफे बताओ।'],
      ['Worth the rent?', 'किराया लायक?'],
      ['Near metro?', 'मेट्रो पास?']
    )),
    turn('You', 'Bright, quiet corners, strong coffee smell.', 'रोशन, शांत कोने, कॉफी की खुशबू।', alts(
      ['Sunny windows, fast WiFi, plants everywhere.', 'धूप, तेज़ वाईफाई, पौधे।'],
      ['Clean, minimal, five minutes from metro.', 'साफ, मिनिमल, मेट्रो पाँच मिनट।'],
      ['Open loft, soft music, comfy chairs.', 'खुला लॉफ्ट, हल्का संगीत, आरामदायक कुर्सियाँ।']
    )),
    turn('Person', 'Noise level?', 'शोर स्तर?', alts(
      ['Meeting rooms?', 'मीटिंग रूम?'],
      ['Food nearby?', 'पास खाना?'],
      ['Price?', 'कीमत?']
    )),
    turn('You', 'Low buzz, phone booths for calls.', 'हल्का शोर, कॉल बूथ।', alts(
      ['Mostly keyboard sounds.', 'ज़्यादातर कीबोर्ड।'],
      ['Quiet after three PM.', 'तीन बजे के बाद शांत।'],
      ['Booths block outside noise.', 'बूथ बाहर का शोर रोकते।']
    )),
    turn('Person', 'Better than our old office?', 'पुराने ऑफिस से बेहतर?', alts(
      ['I need silence for coding.', 'कोडिंग को शांति।'],
      ['Plants help mood.', 'पौधे मूड।']
    )),
    turn('You', 'Yes, less chaos, more focus.', 'हाँ, कम अव्यवस्था, ज़्यादा फोकस।', alts(
      ['Old office was loud.', 'पुराना शोरगुल।'],
      ['Here I finish tasks faster.', 'यहाँ जल्दी काम खत्म।'],
      ['Worth the extra ten minutes commute.', 'दस मिनट extra कम्यूट लायक।']
    )),
    turn('Person', 'Share the address?', 'पता शेयर?', alts(
      ['Trial day pass?', 'ट्राय पास?'],
      ['Visit together?', 'साथ जाएँ?']
    )),
    turn('You', 'Pinned on WhatsApp. First day free.', 'व्हाट्सऐप पिन। पहला दिन फ्री।', alts(
      ['Try Thursday morning.', 'गुरुवार सुबह आओ।'],
      ['Bring laptop and headphones.', 'लैपटॉप हेडफोन लाना।'],
      ['You will like the balcony.', 'बालकनी पसंद आएगी।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'objects', 'Objects', [
    turn('Person', 'What is that gadget on your desk?', 'डेस्क पर वो गैजेट क्या?', alts(
      ['New keyboard?', 'नया कीबोर्ड?'],
      ['Describe your work setup.', 'वर्क सेटअप बताओ।'],
      ['Looks expensive.', 'महँगा लगता।']
    )),
    turn('You', 'A compact standing desk riser, matte black.', 'कॉम्पैक्ट स्टैंडिंग राइज़र, मैट ब्लैक।', alts(
      ['Desk riser, lifts the laptop.', 'राइज़र, लैपटॉप उठाता।'],
      ['Black metal stand, very steady.', 'काला मेटल स्टैंड, मज़बूत।'],
      ['Sit stand converter, simple knob.', 'सिट-स्टैंड कन्वर्टर, साधा नॉब।']
    )),
    turn('Person', 'Does it help your back?', 'पीठ मदद?', alts(
      ['Easy to adjust?', 'एडजस्ट आसान?'],
      ['Where did you buy?', 'कहाँ खरीदा?'],
      ['Worth it?', 'लायक?']
    )),
    turn('You', 'Yes, less neck pain after long calls.', 'हाँ, लंबी कॉल के बाद गर्दन कम दुखती।', alts(
      ['Back feels better standing.', 'खड़े पीठ बेहतर।'],
      ['Adjusts in seconds.', 'सेकंड में एडजस्ट।'],
      ['Best purchase this year.', 'इस साल की बेस्ट खरीद।']
    )),
    turn('Person', 'Link please, my chair is bad.', 'लिंक दो, कुर्सी खराब।', alts(
      ['Maybe ergonomic mouse too.', 'एर्गो माउस भी?'],
      ['Office should pay.', 'ऑफिस दे।']
    )),
    turn('You', 'I will send Amazon link and a cheaper option.', 'अमेज़न लिंक और सस्ता विकल्प भेजूँगा।', alts(
      ['Link plus setup tips.', 'लिंक और सेटअप टिप।'],
      ['Ask HR for budget maybe.', 'HR से बजट पूछो।'],
      ['Try mine before buying.', 'खरीद से पहले मेरा ट्राय।']
    )),
    turn('Person', 'Thanks, health matters.', 'शुक्रिया, सेहत मायने।', alts(
      ['My wrist hurts too.', 'कलाई भी दुखती।'],
      ['Good reminder.', 'अच्छी याद।']
    )),
    turn('You', 'Small gear changes help a lot.', 'छोटे बदलाव बड़ी मदद।', alts(
      ['Stretch every hour too.', 'हर घंटे स्ट्रेच।'],
      ['Let us fix our desks.', 'डेस्क ठीक करें।'],
      ['Share more tips later.', 'बाद और टिप।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'events', 'Events', [
    turn('Person', 'How was the company town hall?', 'कंपनी टाउन हॉल कैसा?', alts(
      ['Describe yesterday’s meetup.', 'कल की मीटअप बताओ।'],
      ['Wedding you attended?', 'शादी जहाँ गए?'],
      ['Any highlights?', 'खास बात?']
    )),
    turn('You', 'Packed hall, CEO shared goals, lively Q and A.', 'भरा हॉल, CEO ने लक्ष्य, जीवंत सवाल जवाब।', alts(
      ['Crowded, slides on growth, many questions.', 'भीड़, ग्रोथ स्लाइड, बहुत सवाल।'],
      ['One hour, free snacks, honest talk.', 'एक घंटा, स्नैक्स, ईमानदार बात।'],
      ['Energy was high, music at the end.', 'ऊर्जा ऊँची, अंत में संगीत।']
    )),
    turn('Person', 'Any surprises?', 'कोई सरप्राइज?', alts(
      ['Boring or useful?', 'उबाऊ या उपयोगी?'],
      ['Met new people?', 'नए लोग?'],
      ['After party?', 'आफ्टर पार्टी?']
    )),
    turn('You', 'They announced a learning budget for all.', 'सबके लिए लर्निंग बजट घोषणा।', alts(
      ['Learning stipend surprised everyone.', 'लर्निंग भत्ता सबको हैरान।'],
      ['Bonus rumor was false though.', 'बोनस अफवाह गलत।'],
      ['New mentor program starts Monday.', 'सोमवार मेंटर प्रोग्राम।']
    )),
    turn('Person', 'That is great for courses.', 'कोर्स के लिए बढ़िया।', alts(
      ['I will apply for English class.', 'अंग्रेज़ी क्लास अप्लाई।'],
      ['Finally some support.', 'आखिर सपोर्ट।']
    )),
    turn('You', 'I will use it for public speaking.', 'पब्लिक स्पीकिंग के लिए लूँगा।', alts(
      ['Speaking club fees covered maybe.', 'स्पीकिंग क्लब फीस।'],
      ['Form opens next week.', 'फॉर्म अगले हफ्ते।'],
      ['Let us both apply.', 'दोनों अप्लाई।']
    )),
    turn('Person', 'Reminder me when forms open.', 'फॉर्म खुले तो याद दिलाना।', alts(
      ['Team lunch after was fun.', 'बाद टीम लंच मज़ा।'],
      ['Good event overall.', 'कुल अच्छा इवेंट।']
    )),
    turn('You', 'Will ping you on Slack.', 'स्लैक पर पिंग करूँगा।', alts(
      ['Calendar reminder set.', 'कैलेंडर रिमाइंडर।'],
      ['Worth attending next time too.', 'अगली बार भी जाना लायक।'],
      ['Events like this build trust.', 'ऐसे इवेंट भरोसा बनाते।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'experiences', 'Experiences', [
    turn('Person', 'Tell me about your first job experience.', 'पहली जॉब का अनुभव?', alts(
      ['Scariest work moment?', 'सबसे डरावना पल?'],
      ['Best lesson so far?', 'अब तक सबसे अच्छी सीख?'],
      ['Internship memory?', 'इंटर्नशिप याद?']
    )),
    turn('You', 'Internship at a startup, fast learning, long hours.', 'स्टार्टअप इंटर्नशिप, तेज़ सीख, लंबे घंटे।', alts(
      ['Small startup, wore many hats.', 'छोटा स्टार्टअप, कई काम।'],
      ['First job taught me ownership.', 'पहली जॉब ने जिम्मेदारी सिखाई।'],
      ['Six month internship, shipped two features.', 'छह महीने, दो फीचर शिप।']
    )),
    turn('Person', 'Mentor there?', 'वहाँ मेंटर?', alts(
      ['Pay was low?', 'पगार कम?'],
      ['Would you join again?', 'फिर जुड़ोगे?'],
      ['Stress level?', 'तनाव?']
    )),
    turn('You', 'Yes, my lead taught me to ask why twice.', 'हाँ, लीड ने दो बार क्यों पूछना सिखाया।', alts(
      ['Lead Priya pushed clear writing.', 'प्रिया ने साफ लिखना।'],
      ['Mentor gave honest feedback daily.', 'रोज ईमानदार फीडबैक।'],
      ['No mentor, learned by doing.', 'मेंटर नहीं, करके सीखा।']
    )),
    turn('Person', 'Asking why twice is powerful.', 'दो बार क्यों ताकतवर।', alts(
      ['I still rush solutions.', 'अभी भी जल्दी समाधान।'],
      ['Good habit to keep.', 'रखने लायक आदत।']
    )),
    turn('You', 'It saved me from shipping a bug once.', 'एक बार बग शिप होने से बचाया।', alts(
      ['Slowed me down, but worth it.', 'धीमा किया, लायक।'],
      ['Now I write assumptions first.', 'अब पहले अनुमान लिखता।'],
      ['Experience beats theory.', 'अनुभव सिद्धांत से ऊपर।']
    )),
    turn('Person', 'Thanks for sharing. Inspiring.', 'शेयर के लिए शुक्रिया। प्रेरणा।', alts(
      ['Helps juniors.', 'जूनियर को मदद।'],
      ['We should mentor interns.', 'इंटर्न मेंटर करें।']
    )),
    turn('You', 'Happy to mentor if our team gets interns.', 'टीम में इंटर्न आए तो मेंटर खुशी से।', alts(
      ['Passing lessons forward.', 'सीख आगे।'],
      ['First jobs shape us.', 'पहली जॉब बनाती।'],
      ['Glad we talked.', 'बात करके अच्छा।']
    )),
  ]),
]);
