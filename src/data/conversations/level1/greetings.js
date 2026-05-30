import { lesson, turn, alts } from '../helpers.js';

const TOPIC = 'greetings';
const TITLE = 'Greetings';

export const greetingsLessons = Object.fromEntries([
  lesson(TOPIC, TITLE, 'formal-greetings', 'Formal Greetings', [
    turn('Person', 'Good morning. Are you Mr. Verma?', 'सुप्रभात। क्या आप श्री वर्मा हैं?', alts(
      ['Good morning. Am I speaking with Mr. Verma?', 'सुप्रभात। क्या मैं श्री वर्मा से बात कर रहा हूँ?'],
      ['Good morning, sir.', 'सुप्रभात, सर।'],
      ['Hello. Mr. Verma?', 'नमस्ते। श्री वर्मा?']
    )),
    turn('You', 'Yes, good morning. That is me.', 'जी, सुप्रभात। मैं ही वर्मा हूँ।', alts(
      ['Yes, good morning. Speaking.', 'जी, सुप्रभात। बोलिए।'],
      ['Good morning. Yes, I am Mr. Verma.', 'सुप्रभात। जी, मैं वर्मा हूँ।'],
      ['Yes, that is correct.', 'जी, बिल्कुल सही।']
    )),
    turn('Person', 'I am Neha from accounts. Welcome.', 'मैं अकाउंट्स से नेहा हूँ। स्वागत है।', alts(
      ['I am Neha. Nice to have you here.', 'मैं नेहा हूँ। आपका यहाँ होना अच्छा लगा।'],
      ['Welcome to the team.', 'टीम में आपका स्वागत है।'],
      ['I work in accounts. Pleased to meet you.', 'मैं अकाउंट्स में काम करती हूँ। मिलकर खुशी हुई।']
    )),
    turn('You', 'Thank you. Pleased to meet you too.', 'धन्यवाद। मुझे भी मिलकर अच्छा लगा।', alts(
      ['Thank you. Same here.', 'धन्यवाद। मुझे भी।'],
      ['Thanks. Good to meet you.', 'शुक्रिया। मिलकर अच्छा लगा।'],
      ['Thank you for welcoming me.', 'स्वागत के लिए धन्यवाद।']
    )),
    turn('Person', 'Is this your first day here?', 'क्या आज आपका पहला दिन है?', alts(
      ['Are you new to the office?', 'क्या आप ऑफिस में नए हैं?'],
      ['Did you join today?', 'क्या आपने आज जॉइन किया?'],
      ['How is your first morning going?', 'पहली सुबह कैसी जा रही है?']
    )),
    turn('You', 'Yes, just started today. So far so good.', 'जी, आज ही शुरू किया। अभी तक सब ठीक है।', alts(
      ['Yes, first day. It feels fine.', 'जी, पहला दिन। ठीक लग रहा है।'],
      ['Yes, today is day one. Going well.', 'जी, आज पहला दिन है। अच्छा चल रहा है।'],
      ['Just joined. Everything seems organised.', 'अभी जॉइन किया। सब व्यवस्थित लग रहा है।']
    )),
    turn('Person', 'Please ask if you need any help.', 'ज़रूरत हो तो पूछिएगा।', alts(
      ['Let me know if you need anything.', 'कुछ चाहिए हो तो बताइएगा।'],
      ['I am here if you have questions.', 'सवाल हों तो मैं यहीं हूँ।'],
      ['Feel free to reach out anytime.', 'कभी भी संपर्क कर सकते हैं।']
    )),
    turn('You', 'I will. Thank you. Have a good day.', 'ज़रूर। धन्यवाद। आपका दिन अच्छा रहे।', alts(
      ['Sure. Thanks. You too.', 'ठीक है। शुक्रिया। आपका भी।'],
      ['I appreciate that. Have a nice day.', 'इसकी कद्र है। अच्छा दिन हो।'],
      ['Thank you. See you around.', 'धन्यवाद। फिर मिलते हैं।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'casual-greetings', 'Casual Greetings', [
    turn('Person', 'Hey! How are you?', 'हे! आप कैसे हैं?', alts(
      ['Hi! How is it going?', 'हाय! सब कैसा चल रहा है?'],
      ['Hey there! What is up?', 'हे! क्या चल रहा है?'],
      ['Hello!', 'हेलो!']
    )),
    turn('You', 'I am good, thanks. How about you?', 'मैं ठीक हूँ, शुक्रिया। आप बताइए?', alts(
      ['Doing well, thanks.', 'ठीक हूँ, शुक्रिया।'],
      ['Pretty good.', 'काफी बढ़िया।'],
      ['All good here.', 'यहाँ सब ठीक।']
    )),
    turn('Person', 'Not bad. New face here?', 'ठीक ठाक। नया चेहरा?', alts(
      ['I am fine. First time here?', 'मैं ठीक। पहली बार यहाँ?'],
      ['Good. Do you come here often?', 'अच्छा। अक्सर आते हो?'],
      ['Busy day? You look new.', 'व्यस्त दिन? नए लगते हो।']
    )),
    turn('You', 'Yes, first time. My friend invited me.', 'हाँ, पहली बार। दोस्त ने बुलाया।', alts(
      ['Yeah, first visit.', 'हाँ, पहली बार।'],
      ['Yes, my buddy brought me along.', 'हाँ, दोस्त लेकर आया।'],
      ['First time, actually.', 'सच में पहली बार।']
    )),
    turn('Person', 'Cool. I am Arjun, by the way.', 'ठीक है। वैसे मैं अर्जुन।', alts(
      ['Nice. I am Arjun.', 'बढ़िया। मैं अर्जुन।'],
      ['Got it. Name is Arjun.', 'समझ गया। नाम अर्जुन।'],
      ['I am Arjun. And you?', 'मैं अर्जुन। आप?']
    )),
    turn('You', 'I am Rohan. Nice to meet you.', 'मैं रोहन। मिलकर अच्छा लगा।', alts(
      ['Rohan here. Good to meet you.', 'रोहन। मिलकर खुशी हुई।'],
      ['I am Rohan.', 'मैं रोहन।'],
      ['Call me Rohan. Pleased to meet you.', 'मुझे रोहन बुलाइए। मिलकर अच्छा लगा।']
    )),
    turn('Person', 'Want to grab chai later?', 'बाद में चाय पीने चलोगे?', alts(
      ['Chai after this?', 'इसके बाद चाय?'],
      ['Should we talk more over tea?', 'चाय पर और बात करें?'],
      ['Let us chat more in a bit.', 'थोड़ी देर में और बात करें?']
    )),
    turn('You', 'Sure, sounds good. See you then.', 'हाँ, ठीक है। तब मिलते हैं।', alts(
      ['Yes, let us do that.', 'हाँ, करते हैं।'],
      ['Sounds fun. See you.', 'मज़ेदार लगा। मिलते हैं।'],
      ['Definitely. Catch you later.', 'ज़रूर। बाद में।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'greeting-on-phone', 'Greeting on Phone', [
    turn('Person', 'Hello, is this Amit?', 'हेलो, क्या अमित से बात हो रही है?', alts(
      ['Hi, am I speaking to Amit?', 'हाय, क्या अमित हैं?'],
      ['Hello, Amit?', 'हेलो, अमित?'],
      ['Good evening. Is this Amit Sharma?', 'शुभ संध्या। क्या अमित शर्मा हैं?']
    )),
    turn('You', 'Yes, speaking. Who is calling?', 'जी, बोलिए। कौन बोल रहा है?', alts(
      ['Yes, this is Amit.', 'जी, अमित बोल रहा हूँ।'],
      ['Speaking. May I know who is this?', 'बोलिए। कौन हैं?'],
      ['Yes, Amit here.', 'जी, अमित।']
    )),
    turn('Person', 'Hi Amit, I am Kavita from delivery support.', 'हाय अमित, मैं डिलीवरी सपोर्ट से कविता।', alts(
      ['This is Kavita from the courier team.', 'कूरियर टीम से कविता।'],
      ['I am Kavita. Calling about your parcel.', 'मैं कविता। पार्सल के लिए फोन।'],
      ['Kavita here, regarding your order.', 'कविता, आपके ऑर्डर के बारे में।']
    )),
    turn('You', 'Hi Kavita. Thanks for calling.', 'हाय कविता। कॉल के लिए शुक्रिया।', alts(
      ['Hello Kavita. Go ahead.', 'हेलो कविता। बताइए।'],
      ['Hi. Yes, tell me please.', 'हाय। जी, बताइए।'],
      ['Thanks for reaching out.', 'संपर्क के लिए धन्यवाद।']
    )),
    turn('Person', 'Is now a good time to talk?', 'क्या अभी बात करने का समय है?', alts(
      ['Can you talk for a minute?', 'एक मिनट बात हो सकती है?'],
      ['Are you free right now?', 'अभी फ्री हैं?'],
      ['Should I call back later?', 'बाद में कॉल करूँ?']
    )),
    turn('You', 'Yes, I have a minute. Please continue.', 'जी, एक मिनट है। बताइए।', alts(
      ['Sure, go ahead.', 'हाँ, बोलिए।'],
      ['Yes, now is fine.', 'जी, अभी ठीक है।'],
      ['I am free. What is the update?', 'फ्री हूँ। क्या अपडेट है?']
    )),
    turn('Person', 'Your package arrives tomorrow by evening.', 'आपका पैकेज कल शाम तक आएगा।', alts(
      ['Delivery is scheduled for tomorrow evening.', 'डिलीवरी कल शाम है।'],
      ['It should reach you tomorrow.', 'कल पहुँच जाना चाहिए।'],
      ['We will deliver tomorrow, no extra charge.', 'कल डिलीवर करेंगे, कोई extra charge नहीं।']
    )),
    turn('You', 'Perfect. Thanks for letting me know.', 'बढ़िया। बताने के लिए शुक्रिया।', alts(
      ['Great. Thank you.', 'अच्छा। धन्यवाद।'],
      ['Got it. Thanks, Kavita.', 'समझ गया। शुक्रिया कविता।'],
      ['That helps. Have a good day.', 'काम आया। अच्छा दिन हो।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'greeting-new-people', 'Greeting New People', [
    turn('Person', 'Hi, I do not think we have met.', 'हाय, लगता है हम मिले नहीं हैं।', alts(
      ['Hello. Are you new here?', 'हेलो। नए हो?'],
      ['Hey, I am Meera. And you?', 'हे, मैं मीरा। आप?'],
      ['Hi there. Friend of the host?', 'हाय। होस्ट के दोस्त?']
    )),
    turn('You', 'Hi. I am Vikram. A friend of Rahul.', 'हाय। मैं विक्रम। राहुल का दोस्त।', alts(
      ['Hello. Vikram here, Rahul invited me.', 'हेलो। विक्रम, राहुल ने बुलाया।'],
      ['Hi Meera. I am Vikram.', 'हाय मीरा। मैं विक्रम।'],
      ['Hey. Name is Vikram. Know Rahul?', 'हे। नाम विक्रम। राहुल को जानती हो?']
    )),
    turn('Person', 'Oh nice. Rahul talks about you.', 'अच्छा। राहुल तुम्हारी बात करता है।', alts(
      ['Ah, so you are Vikram. Heard a lot.', 'अरे, तो तुम विक्रम। बहुत सुना।'],
      ['Cool. He said you might come.', 'ठीक। कह रहा था आओगे।'],
      ['Rahul mentioned a Vikram. That is you?', 'राहुल ने विक्रम का ज़िक्र किया। तुम?']
    )),
    turn('You', 'Ha ha, hope he said good things.', 'हा हा, अच्छी बातें की होंगी।', alts(
      ['Hope all good stories.', 'अच्छी कहानियाँ ही होंगी।'],
      ['Let us hope so.', 'उम्मीद है ऐसा ही हो।'],
      ['He better have.', 'उसे ऐसा ही करना चाहिए था।']
    )),
    turn('Person', 'Where are you from, Vikram?', 'विक्रम, कहाँ से हो?', alts(
      ['Which city are you based in?', 'किस शहर में रहते हो?'],
      ['Are you local or visiting?', 'लोकल हो या आए हो?'],
      ['Do you live nearby?', 'पास में रहते हो?']
    )),
    turn('You', 'I am from Pune, here for the weekend.', 'पुणे से हूँ, वीकेंड के लिए आया हूँ।', alts(
      ['Pune. Just visiting this weekend.', 'पुणे। सिर्फ इस वीकेंड।'],
      ['From Pune originally.', 'मूल रूप से पुणे।'],
      ['Pune, but work in Mumbai now.', 'पुणे, पर अब मुंबई में काम।']
    )),
    turn('Person', 'I love Pune. Quiet and clean.', 'मुझे पुणे पसंद है। शांत और साफ।', alts(
      ['Pune is lovely.', 'पुणे प्यारा है।'],
      ['I visited once. Nice city.', 'एक बार गई। अच्छा शहर।'],
      ['Friends there say it is peaceful.', 'वहाँ के दोस्त कहते हैं शांत है।']
    )),
    turn('You', 'True. You should visit again sometime.', 'सही। कभी फिर आना चाहिए।', alts(
      ['Yes, you would enjoy it.', 'हाँ, मज़ा आएगा।'],
      ['I can share spots if you go.', 'जाओ तो जगहें बता दूँगा।'],
      ['Let us swap city tips later.', 'बाद में शहर के टिप्स बदलते हैं।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'greeting-groups', 'Greeting Groups', [
    turn('Person', 'Morning everyone. New member today.', 'सुप्रभात सबको। आज नया मेंबर।', alts(
      ['Hi team. Someone new joined us.', 'हाय टीम। कोई नया जुड़ा।'],
      ['Good morning. Let us welcome our guest.', 'सुप्रभात। मेहमान का स्वागत करें।'],
      ['Hello all. Quick intro for our friend here.', 'हेलो सब। यहाँ दोस्त का छोटा परिचय।']
    )),
    turn('You', 'Hi everyone. I am Sanjay.', 'हाय सब। मैं संजय।', alts(
      ['Hello team. Sanjay here.', 'हेलो टीम। संजय।'],
      ['Good morning. I am Sanjay, joining design.', 'सुप्रभात। संजय, डिज़ाइन में जॉइन।'],
      ['Hi all. Glad to be here.', 'हाय सब। यहाँ होकर खुशी।']
    )),
    turn('Person', 'Welcome Sanjay. I am the lead, Pooja.', 'स्वागत संजय। मैं लीड पूजा।', alts(
      ['Welcome. Pooja here, I lead the team.', 'स्वागत। पूजा, टीम लीड।'],
      ['Hi Sanjay, Pooja. Any questions, ask me.', 'हाय संजय, पूजा। सवाल हो तो पूछना।'],
      ['Glad you are here. I am Pooja.', 'खुशी कि आए। मैं पूजा।']
    )),
    turn('You', 'Thanks Pooja. Happy to join the team.', 'शुक्रिया पूजा। टीम में आकर खुशी।', alts(
      ['Thank you. Looking forward to working together.', 'धन्यवाद। साथ काम का इंतज़ार।'],
      ['Thanks everyone.', 'सबका शुक्रिया।'],
      ['Pleased to be on board.', 'जुड़कर अच्छा लगा।']
    )),
    turn('Person', 'We meet every Monday at ten.', 'हम हर सोमवार दस बजे मिलते हैं।', alts(
      ['Stand-up is Mondays, ten AM.', 'स्टैंड-अप सोमवार, दस बजे।'],
      ['Weekly sync is Monday morning.', 'वीकली सिंक सोमवार सुबह।'],
      ['Calendar invite will come today.', 'कैलेंडर इनवाइट आज मिलेगा।']
    )),
    turn('You', 'Noted. I will be ready.', 'नोट किया। तैयार रहूँगा।', alts(
      ['Got it. I will join on time.', 'समझ गया। समय पर आऊँगा।'],
      ['Sure. Please add me to the invite.', 'ठीक। इनवाइट में जोड़ दीजिए।'],
      ['Understood. Thanks for telling me.', 'समझ गया। बताने के लिए शुक्रिया।']
    )),
    turn('Person', 'Feel free to ping anyone on Slack.', 'स्लैक पर किसी को भी मैसेज कर सकते हो।', alts(
      ['Slack is best for quick doubts.', 'झटपट सवालों के लिए स्लैक बेस्ट।'],
      ['Channel links are in your email.', 'चैनल लिंक ईमेल में हैं।'],
      ['Ask the team anytime.', 'टीम से कभी भी पूछो।']
    )),
    turn('You', 'Will do. Thanks again, everyone.', 'ज़रूर। फिर शुक्रिया सबको।', alts(
      ['Sure. See you all Monday.', 'ठीक। सोमवार मिलते हैं।'],
      ['Thanks. Nice meeting you all.', 'शुक्रिया। सबसे मिलकर अच्छा लगा।'],
      ['Great. Have a good day, team.', 'बढ़िया। अच्छा दिन हो, टीम।']
    )),
  ]),
]);
