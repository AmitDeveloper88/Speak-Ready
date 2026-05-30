import { lesson, turn, alts } from '../helpers.js';

const TOPIC = 'continuing-conversations';
const TITLE = 'Continuing Conversations';

export const continuingConversationsLessons = Object.fromEntries([
  lesson(TOPIC, TITLE, 'sharing-experiences', 'Sharing Experiences', [
    turn('Person', 'Have you ever presented to a big crowd?', 'कभी बड़ी भीड़ को प्रेज़ेंट?', alts(
      ['Ever lived alone?', 'कभी अकेले रहे?'],
      ['Traveled solo?', 'अकेले यात्रा?'],
      ['Led a tough project?', 'कठिन प्रोजेक्ट लीड?']
    )),
    turn('You', 'Yes, once at a company town hall, two hundred people.', 'हाँ, टाउन हॉल, दो सौ लोग।', alts(
      ['Yeah, college fest stage.', 'हाँ, कॉलेज फेस्ट स्टेज।'],
      ['Yes, client demo last year.', 'हाँ, पिछले साल क्लाइंट डेमो।'],
      ['Once, hands shook badly.', 'एक बार, हाथ काँपे।']
    )),
    turn('Person', 'How did you prepare?', 'कैसे तैयारी?', alts(
      ['Nervous?', 'घबराहट?'],
      ['Script or free?', 'स्क्रिप्ट या फ्री?']
    )),
    turn('You', 'I rehearsed aloud and recorded myself.', 'ज़ोर से रिहर्सल, खुद रिकॉर्ड।', alts(
      ['Practiced with a friend.', 'दोस्त संग अभ्यास।'],
      ['Short bullets, not full script.', 'छोटे बुलेट, पूरी स्क्रिप्ट नहीं।'],
      ['Walked the stage empty day before.', 'एक दिन पहले खाली स्टेज।']
    )),
    turn('Person', 'Smart. What went wrong if anything?', 'स्मार्ट। कुछ गलत?', alts(
      ['Best moment?', 'सबसे अच्छा पल?'],
      ['Audience reaction?', 'ऑडियंस?']
    )),
    turn('You', 'Mic feedback once, I paused and joked lightly.', 'माइक फीडबैक, रुका, हल्का मज़ाक।', alts(
      ['Forgot one stat, recovered.', 'एक आँकड़ा भूला, संभाला।'],
      ['Ran long, skipped Q and A.', 'लंबा, Q&A छोड़ा।'],
      ['Nothing major, relief after.', 'बड़ा कुछ नहीं, राहत।']
    )),
    turn('Person', 'Humor saves stages.', 'हास्य बचाता।', alts(
      ['I should try recording.', 'रिकॉर्ड ट्राय।'],
      ['Share your checklist?', 'चेकलिस्ट?']
    )),
    turn('You', 'I will send my prep list.', 'प्रेप लिस्ट भेजूँगा।', alts(
      ['Experiences connect us.', 'अनुभव जोड़ते।'],
      ['Your turn next story.', 'अब तुम्हारी कहानी।'],
      ['Good swap today.', 'आज अच्छा आदानप्रदान।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'giving-examples', 'Giving Examples', [
    turn('Person', 'How do you stay focused at work?', 'काम पर फोकस कैसे?', alts(
      ['How do you save money?', 'पैसा कैसे बचाते?'],
      ['How do you learn fast?', 'तेज़ कैसे सीखते?'],
      ['How do you network?', 'नेटवर्क कैसे?']
    )),
    turn('You', 'For example, I block mornings for deep work.', 'उदाहरण, सुबह गहरे काम के लिए ब्लॉक।', alts(
      ['Like today, no meetings before ten.', 'जैसे आज, दस से पहले मीटिंग नहीं।'],
      ['Take Slack, I mute it till lunch.', 'स्लैक दोपहर तक म्यूट।'],
      ['Say coding tasks, I do them first.', 'कोडिंग पहले।']
    )),
    turn('Person', 'Meetings ruin that for me.', 'मीटिंग बिगाड़ती।', alts(
      ['Phone distracts.', 'फोन विचलित।'],
      ['Home is noisy.', 'घर शोर।']
    )),
    turn('You', 'Another example, I take calls after two PM.', 'और उदाहरण, दोपहर दो के बाद कॉल।', alts(
      ['Client calls only afternoons.', 'क्लाइंट कॉल दोपहर।'],
      ['Standups are short by design.', 'स्टैंडअप जानबूझकर छोटे।'],
      ['I batch email twice daily.', 'ईमेल दिन में दो बार।']
    )),
    turn('Person', 'Batching email helps me too.', 'ईमेल बैच मदद।', alts(
      ['Need discipline.', 'अनुशासन चाहिए।'],
      ['Manager may resist.', 'मैनेजर विरोध।']
    )),
    turn('You', 'For instance, show a week pilot with metrics.', 'उदाहरण, एक हफ्ते पायलट मेट्रिक्स।', alts(
      ['Share output charts.', 'आउटपुट चार्ट।'],
      ['Compare before after.', 'पहले बाद तुलना।'],
      ['Concrete examples convince bosses.', 'ठोस उदाहरण बॉस।']
    )),
    turn('Person', 'I will try a pilot.', 'पायलट ट्राय।', alts(
      ['Examples make it clear.', 'उदाहरण साफ।'],
      ['Thanks for tips.', 'टिप शुक्रिया।']
    )),
    turn('You', 'Happy to review your results.', 'परिणाम रिव्यू खुशी।', alts(
      ['Examples beat theory.', 'उदाहरण सिद्धांत से।'],
      ['Ping me Friday.', 'शुक्रवार पिंग।'],
      ['Keep experimenting.', 'प्रयोग जारी।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'expanding-answers', 'Expanding Answers', [
    turn('Person', 'Do you like your current job?', 'मौजूदा जॉब पसंद?', alts(
      ['Enjoy this city?', 'शहर पसंद?'],
      ['Happy with your flat?', 'फ्लैट खुश?'],
      ['Like morning workouts?', 'सुबह वर्कआउट?']
    )),
    turn('You', 'Mostly yes, because the team trusts me and I learn daily.', 'ज़्यादातर हाँ, टीम भरोसा और रोज सीख।', alts(
      ['Yes, growth is fast and mentors are kind.', 'हाँ, तेज़ विकास, दयालु मेंटर।'],
      ['I like it, though deadlines stress me sometimes.', 'पसंद, कभी डेडलाइन तनाव।'],
      ['Overall yes, work is meaningful, pay is fair.', 'कुल हाँ, काम अर्थपूर्ण, पगार उचित।']
    )),
    turn('Person', 'Short answers hide detail.', 'छोटे जवाब विवरण छुपाते।', alts(
      ['Expand more.', 'और बढ़ाओ।'],
      ['Any downside?', 'नुकसान?']
    )),
    turn('You', 'Downside is on-call nights, but rotation is shared.', 'नुकसान ऑन-कॉल रात, पर बारी साझा।', alts(
      ['Late pages happen monthly.', 'महीने में लेट पेज।'],
      ['I trade off with teammates.', 'टीममेट संग बदल।'],
      ['Still worth it for learning.', 'सीख के लिए लायक।']
    )),
    turn('Person', 'Fair trade.', 'उचित सौदा।', alts(
      ['I give one word answers.', 'एक शब्द जवाब।'],
      ['Need to expand too.', 'मुझे भी बढ़ाना।']
    )),
    turn('You', 'Try adding because or for example.', 'क्योंकि या उदाहरण जोड़ो।', alts(
      ['One extra clause helps.', 'एक खंड मदद।'],
      ['Fluency is length with purpose.', 'धाराप्रवाह उद्देश्य के साथ लंबाई।'],
      ['Practice in low stakes chats.', 'कम दबाव बात।']
    )),
    turn('Person', 'Will practice with you.', 'तुम्हारे संग अभ्यास।', alts(
      ['Good tip.', 'अच्छी टिप।'],
      ['Lunch practice?', 'लंच अभ्यास?']
    )),
    turn('You', 'Lunch practice sounds fun.', 'लंच अभ्यास मज़ेदार।', alts(
      ['Expand answers together.', 'साथ जवाब बढ़ाएँ।'],
      ['No more yes or no only.', 'सिर्फ हाँ ना नहीं।'],
      ['See you noon.', 'दोपहर मिलते।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'keeping-topic-alive', 'Keeping Topic Alive', [
    turn('Person', 'I have been learning guitar.', 'गिटार सीख रहा।', alts(
      ['I started gardening.', 'बागवानी शुरू।'],
      ['I cook more now.', 'अब ज़्यादा खाना बनाता।'],
      ['I write a blog.', 'ब्लॉग लिखता।']
    )),
    turn('You', 'Nice. Acoustic or electric?', 'अच्छा। ध्वनिक या इलेक्ट्रिक?', alts(
      ['Which style?', 'कौन सी शैली?'],
      ['Favorite song to play?', 'पसंदीदा गाना?'],
      ['How often practice?', 'कितनी बार अभ्यास?']
    )),
    turn('Person', 'Acoustic, twenty minutes daily.', 'ध्वनिक, रोज बीस मिनट।', alts(
      ['Bollywood ballads.', 'बॉलीवुड बैलड।'],
      ['Fingers still hurt.', 'उंगलियाँ दुखती।']
    )),
    turn('You', 'Finger pain fades. Any teacher or YouTube?', 'दर्द घटता। शिक्षक या यूट्यूब?', alts(
      ['Online course?', 'ऑनलाइन?'],
      ['Friend teaching?', 'दोस्त?'],
      ['Goals for six months?', 'छह महीने लक्ष्य?']
    )),
    turn('Person', 'YouTube for now, maybe classes later.', 'अभी यूट्यूब, बाद क्लास।', alts(
      ['Want to play at open mic.', 'ओपन माइक।'],
      ['Record covers someday.', 'कवर रिकॉर्ड।']
    )),
    turn('You', 'Open mic is brave. Local cafe hosts them?', 'ओपन माइक बहादुर। कैफे करता?', alts(
      ['Thursday nights maybe?', 'गुरुवार रात?'],
      ['We could go listen.', 'सुनने जाएँ।'],
      ['Topic alive, tell me favorite chord.', 'पसंदीदा कॉर्ड?']
    )),
    turn('Person', 'G chord feels victorious.', 'G कॉर्ड जीत जैसा।', alts(
      ['Cafe is near Indiranagar.', 'कैफे इंदिरानगर।'],
      ['Join me Thursday?', 'गुरुवार साथ?']
    )),
    turn('You', 'Thursday listen night, count me in.', 'गुरुवार सुनना, मैं भी।', alts(
      ['Keeping chat going is fun.', 'बात चलाना मज़ा।'],
      ['Music thread continues.', 'संगीत धारा जारी।'],
      ['See you then.', 'तब मिलते।']
    )),
  ]),
]);
