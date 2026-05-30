import { lesson, turn, alts } from '../helpers.js';

const TOPIC = 'follow-up-questions';
const TITLE = 'Follow-up Questions';

export const followUpQuestionsLessons = Object.fromEntries([
  lesson(TOPIC, TITLE, 'asking-more-details', 'Asking More Details', [
    turn('Person', 'I started a small bakery last month.', 'पिछले महीने छोटी बेकरी शुरू की।', alts(
      ['We launched a new app.', 'नया ऐप लॉन्च किया।'],
      ['I moved to a new city.', 'नए शहर गए।'],
      ['I joined a design course.', 'डिज़ाइन कोर्स जॉइन।']
    )),
    turn('You', 'That is exciting. What made you choose baking?', 'रोमांचक। बेकिंग क्यों चुनी?', alts(
      ['Nice. Why baking specifically?', 'अच्छा। खासकर बेकिंग क्यों?'],
      ['Wow. What pushed you to start?', 'वाह। शुरू क्या धकेल गया?'],
      ['Cool. How did you pick that field?', 'कूल। वह क्षेत्र कैसे चुना?']
    )),
    turn('Person', 'Family recipes and weekend markets.', 'परिवार रेसिपी और वीकेंड बाज़ार।', alts(
      ['Mom taught me early.', 'माँ ने जल्दी सिखाया।'],
      ['I loved markets as a kid.', 'बचपन से बाज़ार पसंद।'],
      ['Friends pushed me to sell.', 'दोस्तों ने बेचने को कहा।']
    )),
    turn('You', 'Which product sells best so far?', 'अब तक कौन सा प्रोडक्ट बेस्ट?', alts(
      ['What flies off the shelf?', 'क्या जल्दी बिकता?'],
      ['Top seller right now?', 'अभी टॉप सेलर?'],
      ['Any surprise hit?', 'कोई सरप्राइज़ हिट?']
    )),
    turn('Person', 'Banana bread, oddly.', 'केला ब्रेड, अजीब तरह।', alts(
      ['Cookies actually.', 'सच में कुकीज़।'],
      ['Sourdough on weekends.', 'वीकेंड सॉरडो।']
    )),
    turn('You', 'Interesting. Do you bake on site or home kitchen?', 'दिलचस्प। जगह पर या घर?', alts(
      ['On site or home based?', 'साइट या घर?'],
      ['Commercial kitchen yet?', 'कमर्शियल किचन?'],
      ['Where do you produce daily?', 'रोज कहाँ बनाते?']
    )),
    turn('Person', 'Home kitchen for now, permits pending.', 'अभी घर, परमिट पेंडिंग।', alts(
      ['Shared kitchen next month.', 'अगले महीने शेयर।'],
      ['Early mornings only.', 'सिर्फ सुबह।']
    )),
    turn('You', 'Rooting for you. Can I visit tasting day?', 'साथ हूँ। टेस्टिंग दिन आ सकूँ?', alts(
      ['Happy to support. Samples soon?', 'सपोर्ट। जल्दी सैंपल?'],
      ['Details made it real. Thanks for sharing.', 'डिटेल ने असली बनाया। शेयर शुक्रिया।'],
      ['Love follow up chats like this.', 'ऐसी बात पसंद।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'showing-interest', 'Showing Interest', [
    turn('Person', 'I ran a half marathon yesterday.', 'कल हाफ मैराथन दौड़ा।', alts(
      ['My team won the hackathon.', 'टीम हैकाथॉन जीती।'],
      ['I painted my first mural.', 'पहला म्यूरल बनाया।'],
      ['I taught my first class.', 'पहली क्लास पढ़ाई।']
    )),
    turn('You', 'No way. How did you feel at the finish?', 'सच में? फिनिश पर कैसा लगा?', alts(
      ['Seriously? Tell me the finish moment.', 'गंभीरता से? अंत का पल।'],
      ['That is huge. How was the last kilometer?', 'बड़ी बात। आखिरी किलोमीटर?'],
      ['I am impressed. Emotions at the end?', 'प्रभावित। अंत में भाव?']
    )),
    turn('Person', 'Tired but proud, almost cried.', 'थका पर गर्व, रोना आया।', alts(
      ['Legs shook, heart full.', 'पैर काँपे, दिल भरा।'],
      ['Pain and joy mixed.', 'दर्द और खुशी मिक्स।']
    )),
    turn('You', 'How long did you train for this?', 'कितने समय ट्रेन?', alts(
      ['Months of prep?', 'महीनों तैयारी?'],
      ['Training plan?', 'ट्रेनिंग प्लान?'],
      ['First race or not?', 'पहली दौड़?']
    )),
    turn('Person', 'Four months, three runs a week.', 'चार महीने, हफ्ते तीन दौड़।', alts(
      ['Started from zero.', 'शून्य से।'],
      ['Coach helped last two months.', 'कोच आखिरी दो महीने।']
    )),
    turn('You', 'What kept you going on hard days?', 'कठिन दिनों क्या आगे रखा?', alts(
      ['Motivation on low days?', 'कम दिन प्रेरणा?'],
      ['Any mantra?', 'कोई मंत्र?'],
      ['Playlist help?', 'प्लेलिस्ट?']
    )),
    turn('Person', 'A podcast and a running buddy.', 'पॉडकास्ट और दौड़ साथी।', alts(
      ['Friend met every Sunday.', 'हर रविवार दोस्त।'],
      ['Goal photo on my wall.', 'दीवार पर लक्ष्य फोटो।']
    )),
    turn('You', 'You inspire me. Maybe I will try a 5K.', 'प्रेरणा दी। शायद 5K ट्राय।', alts(
      ['Respect. Small race next?', 'सम्मान। छोटी दौड़?'],
      ['Thanks for sharing openly.', 'खुलकर शेयर शुक्रिया।'],
      ['Great story. Coffee to celebrate?', 'कहानी बढ़िया। कॉफी सेलिब्रेट?']
    )),
  ]),

  lesson(TOPIC, TITLE, 'exploring-experiences', 'Exploring Experiences', [
    turn('Person', 'I worked abroad for two years.', 'दो साल विदेश काम।', alts(
      ['I lived in three cities.', 'तीन शहरों में रहे।'],
      ['I switched careers once.', 'एक बार करियर बदला।'],
      ['I built a startup that failed.', 'स्टार्टअप बना, फेल।']
    )),
    turn('You', 'That must have changed you. What surprised you most?', 'बदला होगा। सबसे क्या हैरानी?', alts(
      ['Big shift. Biggest surprise?', 'बड़ा बदलाव। सबसे बड़ा सरप्राइज़?'],
      ['How was culture shock?', 'कल्चर शॉक कैसा?'],
      ['What lesson stayed?', 'कौन सी सीख रही?']
    )),
    turn('Person', 'People eat dinner late there.', 'वहाँ लोग देर से खाना।', alts(
      ['Work life balance stricter.', 'वर्क लाइफ बैलेंस सख्त।'],
      ['Language mistakes daily.', 'रोज भाषा गलती।']
    )),
    turn('You', 'How did you handle the language gap?', 'भाषा अंतर कैसे संभाला?', alts(
      ['Learn local phrases?', 'स्थानीय वाक्य सीखे?'],
      ['English enough?', 'अंग्रेज़ी काफी?'],
      ['Apps or classes?', 'ऐप या क्लास?']
    )),
    turn('Person', 'Evening classes plus daily practice.', 'शाम क्लास और रोज अभ्यास।', alts(
      ['Language buddy at work.', 'काम पर भाषा बडी।'],
      ['Mistakes welcomed kindly.', 'गलती दयालु स्वीकार।']
    )),
    turn('You', 'Would you go back if offered?', 'ऑफर हो तो वापस जाएँगे?', alts(
      ['Miss anything there?', 'क्या याद?'],
      ['Best memory?', 'सबसे अच्छी याद?']
    )),
    turn('Person', 'Maybe short project, not full move.', 'शायद छोटा प्रोजेक्ट, पूरा नहीं।', alts(
      ['Friends there still.', 'दोस्त अभी वहाँ।'],
      ['Food I miss.', 'खाना याद।']
    )),
    turn('You', 'Sounds rich. Tell me more over lunch.', 'समृद्ध लगता। लंच पर और।', alts(
      ['Love digging into stories.', 'कहानियाँ खोदना पसंद।'],
      ['Experiences teach us.', 'अनुभव सिखाते।'],
      ['Thanks for opening up.', 'खुलने शुक्रिया।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'continuing-topics', 'Continuing Topics', [
    turn('Person', 'Traffic was terrible today.', 'आज ट्रैफिक भयानक।', alts(
      ['Weather is so hot.', 'मौसम बहुत गर्म।'],
      ['My phone battery died.', 'फोन बैटरी खत्म।'],
      ['Office coffee is weak.', 'ऑफिस कॉफी कमज़ोर।']
    )),
    turn('You', 'Ugh, same. Did you take the metro or drive?', 'हाँ वही। मेट्रो या गाड़ी?', alts(
      ['Tell me more, metro or road?', 'और बताओ, मेट्रो या सड़क?'],
      ['How long were you stuck?', 'कितनी देर अटके?'],
      ['Which route failed?', 'कौन सा रास्ता फेल?']
    )),
    turn('Person', 'Drove, bad call. Forty extra minutes.', 'गाड़ी, गलती। अतिरिक्त चालीस मिनट।', alts(
      ['Metro was packed too.', 'मेट्रो भी भरी।'],
      ['Accident on the bridge.', 'पुल पर हादसा।']
    )),
    turn('You', 'Forty minutes hurts. Any podcast to survive?', 'चालीस मिनट दुखता। बचने पॉडकास्ट?', alts(
      ['What did you listen to?', 'क्या सुना?'],
      ['Music or silence?', 'संगीत या चुप्पी?'],
      ['Call anyone?', 'किसी को कॉल?']
    )),
    turn('Person', 'News podcast, then switched to music.', 'न्यूज़ पॉडकास्ट, फिर संगीत।', alts(
      ['Called mom actually.', 'माँ को कॉल।'],
      ['Audiobook chapter one.', 'ऑडियोबुक अध्याय एक।']
    )),
    turn('You', 'Speaking of audio, tried that new cafe playlist?', 'ऑडियो की बात, नई कैफे प्लेलिस्ट?', alts(
      ['Heard the cafe has jazz.', 'कैफे जैज़ सुना।'],
      ['Still planning weekend?', 'वीकेंड प्लान?'],
      ['By the way, lunch crowd okay?', 'वैसे, लंच भीड़?']
    )),
    turn('Person', 'Yes, cafe was quiet at noon.', 'हाँ, दोपहर शांत।', alts(
      ['Weekend hike on.', 'वीकेंड हाइक ऑन।'],
      ['Playlist was chill.', 'प्लेलिस्ट शांत।']
    )),
    turn('You', 'Nice thread from traffic to weekend plans.', 'ट्रैफिक से वीकेंड तक अच्छी धारा।', alts(
      ['Conversations flow like that.', 'बातचीत ऐसे बहे।'],
      ['See you on the hike maybe.', 'शायद हाइक मिलें।'],
      ['Good chat, feel better?', 'अच्छी बात, बेहतर?']
    )),
  ]),
]);
