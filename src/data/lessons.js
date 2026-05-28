export const lessons = [
  // ── Shadow Practice ──
  {
    id: 'shadow-basic-1',
    mode: 'shadow',
    level: 'basic',
    category: 'Daily Talk',
    title: 'Greetings',
    description: 'Warm hellos and small talk',
    conversation: [
      {
        speaker: 'Friend',
        text: 'Hello! How are you today?',
        hi: 'नमस्ते! आज आप कैसे हैं?',
      },
      {
        speaker: 'You',
        text: 'I am fine, thank you. How about you?',
        hi: 'मैं ठीक हूँ, धन्यवाद। आप बताइए?',
      },
      {
        speaker: 'Friend',
        text: 'I am doing well. Nice to meet you!',
        hi: 'मैं अच्छा हूँ। आपसे मिलकर खुशी हुई!',
      },
      {
        speaker: 'You',
        text: 'Nice to meet you too. I have heard a lot about you.',
        hi: 'मुझे भी खुशी हुई। मैंने आपके बारे में बहुत सुना है।',
      },
      {
        speaker: 'Friend',
        text: 'Good morning! I hope you have a great day.',
        hi: 'शुभ प्रभात! आपका दिन अच्छा हो।',
      },
      {
        speaker: 'You',
        text: 'Thank you! How was your day? Mine was quite busy.',
        hi: 'धन्यवाद! आपका दिन कैसा रहा? मेरा काफी व्यस्त था।',
      },
    ],
  },
  {
    id: 'shadow-basic-2',
    mode: 'shadow',
    level: 'basic',
    category: 'Daily Talk',
    title: 'Introduce Yourself',
    description: 'Name, work, and hobbies',
    conversation: [
      {
        speaker: 'Colleague',
        text: 'Hi! I do not think we have met. Tell me about yourself.',
        hi: 'नमस्ते! लगता है हम पहले नहीं मिले। अपने बारे में बताइए।',
      },
      {
        speaker: 'You',
        text: 'My name is Rahul, and I am from Pune.',
        hi: 'मेरा नाम राहुल है, और मैं पुणे से हूँ।',
      },
      {
        speaker: 'Colleague',
        text: 'Nice! What do you do for work?',
        hi: 'अच्छा! आप क्या काम करते हैं?',
      },
      {
        speaker: 'You',
        text: 'I work as a software developer at a tech company.',
        hi: 'मैं एक टेक कंपनी में सॉफ्टवेयर डेवलपर हूँ।',
      },
      {
        speaker: 'Colleague',
        text: 'What do you like to do in your free time?',
        hi: 'खाली समय में आप क्या करना पसंद करते हैं?',
      },
      {
        speaker: 'You',
        text: 'I like to play cricket and read books. I have been learning English for six months.',
        hi: 'मुझे क्रिकेट खेलना और किताबें पढ़ना पसंद है। मैं छह महीने से अंग्रेजी सीख रहा हूँ।',
      },
    ],
  },
  {
    id: 'shadow-basic-3',
    mode: 'shadow',
    level: 'basic',
    category: 'Office',
    title: 'At Work',
    description: 'Daily routine and updates',
    conversation: [
      {
        speaker: 'Manager',
        text: 'Good morning! How is everything going today?',
        hi: 'शुभ प्रभात! आज सब कुछ कैसा चल रहा है?',
      },
      {
        speaker: 'You',
        text: 'Good morning. I usually start at nine, and today we have a meeting at eleven.',
        hi: 'शुभ प्रभात। मैं आमतौर पर नौ बजे शुरू करता हूँ, और आज ग्यारह बजे मीटिंग है।',
      },
      {
        speaker: 'Manager',
        text: 'How is the project looking?',
        hi: 'प्रोजेक्ट कैसा चल रहा है?',
      },
      {
        speaker: 'You',
        text: 'It is going well, and we are on schedule.',
        hi: 'अच्छा चल रहा है, और हम समय पर हैं।',
      },
      {
        speaker: 'Manager',
        text: 'Can you send me the report today?',
        hi: 'क्या आप आज मुझे रिपोर्ट भेज सकते हैं?',
      },
      {
        speaker: 'You',
        text: 'Sure, I will send it by end of day. Let me know if you need anything else.',
        hi: 'ज़रूर, मैं दिन खत्म होने तक भेज दूँगा। और कुछ चाहिए तो बताइए।',
      },
    ],
  },
  {
    id: 'shadow-adv-1',
    mode: 'shadow',
    level: 'advanced',
    category: 'Interview',
    title: 'Job Interview',
    description: 'Experience and strengths',
    conversation: [
      {
        speaker: 'Interviewer',
        text: 'Tell me about your professional background.',
        hi: 'अपने पेशेवर अनुभव के बारे में बताइए।',
      },
      {
        speaker: 'You',
        text: 'I have over five years of experience in software development.',
        hi: 'मेरे पास सॉफ्टवेयर डेवलपमेंट में पाँच से ज़्यादा साल का अनुभव है।',
      },
      {
        speaker: 'Interviewer',
        text: 'What would you say are your greatest strengths?',
        hi: 'आपकी सबसे बड़ी ताकत क्या है?',
      },
      {
        speaker: 'You',
        text: 'Problem-solving and working well in a team. In my last role, I led a feature that increased engagement by twenty percent.',
        hi: 'समस्या सुलझाना और टीम में अच्छा काम करना। पिछली नौकरी में मैंने एक फीचर चलाया जिससे जुड़ाव बीस प्रतिशत बढ़ा।',
      },
      {
        speaker: 'Interviewer',
        text: 'Why are you interested in this position?',
        hi: 'आप इस पद में क्यों रुचि रखते हैं?',
      },
      {
        speaker: 'You',
        text: 'I want to grow and take on more responsibility. I believe I would be a strong fit for your team and culture.',
        hi: 'मैं आगे बढ़ना और ज़्यादा जिम्मेदारी लेना चाहता हूँ। मुझे लगता है मैं आपकी टीम और संस्कृति के लिए उपयुक्त हूँ।',
      },
    ],
  },
  {
    id: 'shadow-adv-2',
    mode: 'shadow',
    level: 'advanced',
    category: 'Travel',
    title: 'Travel Plans',
    description: 'Planning a trip with friends',
    conversation: [
      {
        speaker: 'Friend',
        text: 'Any travel plans coming up?',
        hi: 'कोई यात्रा की योजना है?',
      },
      {
        speaker: 'You',
        text: 'Yes! I am planning a trip to Goa with friends next month. We already booked train tickets and a hotel.',
        hi: 'हाँ! अगले महीने दोस्तों के साथ गोआ की यात्रा की योजना है। ट्रेन टिकट और होटल बुक हो चुके हैं।',
      },
      {
        speaker: 'Friend',
        text: 'Nice! Do you prefer flying or trains?',
        hi: 'बढ़िया! आपको हवाई जहाज पसंद है या ट्रेन?',
      },
      {
        speaker: 'You',
        text: 'I prefer trains — they are comfortable and scenic.',
        hi: 'मुझे ट्रेन पसंद है — आरामदायक और सुंदर रास्ता होता है।',
      },
      {
        speaker: 'Friend',
        text: 'Where did you go last year?',
        hi: 'पिछले साल कहाँ गए थे?',
      },
      {
        speaker: 'You',
        text: 'I visited Kerala and loved the food and beaches. Traveling always helps me relax and see things differently.',
        hi: 'मैं केरल गया था, खाना और समुद्र तट बहुत पसंद आए। यात्रा से मन को आराम मिलता है और नज़रिया बदलता है।',
      },
    ],
  },

  // ── Former "Listen" Practice (merged into Shadow) ──
  {
    id: 'listen-basic-1',
    mode: 'shadow',
    level: 'basic',
    category: 'Daily Talk',
    title: 'Meeting a Friend',
    description: 'Catch up after a long time',
    conversation: [
      {
        speaker: 'Friend',
        text: 'Hi Rahul! Long time no see. How have you been?',
        hi: 'हाय राहुल! बहुत दिनों बाद मिले। कैसे हो?',
      },
      {
        speaker: 'You',
        text: 'I have been good, thanks. Work kept me pretty busy lately.',
        hi: 'मैं ठीक हूँ, शुक्रिया। हाल में काम में काफी व्यस्त रहा।',
      },
      {
        speaker: 'Friend',
        text: 'I understand. So how is your new job going?',
        hi: 'समझ गया। तो नई नौकरी कैसी चल रही है?',
      },
      {
        speaker: 'You',
        text: 'It is going well. I like my team, and I am learning a lot.',
        hi: 'अच्छी चल रही है। टीम पसंद है, और बहुत कुछ सीख रहा हूँ।',
      },
      {
        speaker: 'Friend',
        text: 'That is great to hear. We should meet for coffee soon.',
        hi: 'सुनकर अच्छा लगा। जल्दी कॉफी पर मिलते हैं।',
      },
      {
        speaker: 'You',
        text: 'Yes, definitely! Let us plan something this weekend.',
        hi: 'हाँ, ज़रूर! इस वीकेंड कुछ प्लान करते हैं।',
      },
    ],
  },
  {
    id: 'listen-basic-2',
    mode: 'shadow',
    level: 'basic',
    category: 'Daily Talk',
    title: 'At the Store',
    description: 'Buying vegetables at the market',
    conversation: [
      {
        speaker: 'Shopkeeper',
        text: 'Good evening! What would you like to buy today?',
        hi: 'शुभ संध्या! आज क्या खरीदना चाहेंगे?',
      },
      {
        speaker: 'You',
        text: 'I need some tomatoes, onions, and potatoes, please.',
        hi: 'मुझे थोड़े टमाटर, प्याज और आलू चाहिए, कृपया।',
      },
      {
        speaker: 'Shopkeeper',
        text: 'The tomatoes are very fresh today. They just came in this morning.',
        hi: 'आज टमाटर बहुत ताज़े हैं। सुबह ही आए हैं।',
      },
      {
        speaker: 'You',
        text: 'They look good. I will take two kilos of tomatoes.',
        hi: 'अच्छे लग रहे हैं। मुझे दो किलो टमाटर दीजिए।',
      },
      {
        speaker: 'Shopkeeper',
        text: 'Sure. Anything else for you?',
        hi: 'ज़रूर। और कुछ चाहिए?',
      },
      {
        speaker: 'You',
        text: 'Yes, one kilo of onions as well. How much is the total?',
        hi: 'हाँ, एक किलो प्याज भी। कुल कितना हुआ?',
      },
    ],
  },
  {
    id: 'listen-adv-1',
    mode: 'shadow',
    level: 'advanced',
    category: 'Interview',
    title: 'Interview Questions',
    description: 'Intro and motivation in an interview',
    conversation: [
      {
        speaker: 'Interviewer',
        text: 'Good morning. Please tell me a little about yourself.',
        hi: 'शुभ प्रभात। अपने बारे में थोड़ा बताइए।',
      },
      {
        speaker: 'You',
        text: 'Good morning. I am a software engineer with three years of experience in web development.',
        hi: 'शुभ प्रभात। मैं वेब डेवलपमेंट में तीन साल के अनुभव वाला सॉफ्टवेयर इंजीनियर हूँ।',
      },
      {
        speaker: 'Interviewer',
        text: 'Interesting. Why do you want to join our company?',
        hi: 'दिलचस्प। आप हमारी कंपनी में क्यों आना चाहते हैं?',
      },
      {
        speaker: 'You',
        text: 'I admire your products, and I am passionate about building tools that help people every day.',
        hi: 'मुझे आपके प्रोडक्ट पसंद हैं, और रोज़ लोगों की मदद करने वाले टूल बनाने का शौक है।',
      },
      {
        speaker: 'Interviewer',
        text: 'What would you say is your greatest strength?',
        hi: 'आपकी सबसे बड़ी ताकत क्या है?',
      },
      {
        speaker: 'You',
        text: 'I stay calm under pressure and I enjoy breaking complex problems into smaller steps.',
        hi: 'दबाव में शांत रहता हूँ और मुश्किल समस्याओं को छोटे हिस्सों में तोड़ना पसंद है।',
      },
    ],
  },
  {
    id: 'listen-adv-2',
    mode: 'shadow',
    level: 'advanced',
    category: 'Office',
    title: 'Team Meeting',
    description: 'Deadlines and offering help',
    conversation: [
      {
        speaker: 'Manager',
        text: 'Thanks everyone for joining. The client deadline is next Friday.',
        hi: 'सबका धन्यवाद। क्लाइंट की डेडलाइन अगले शुक्रवार है।',
      },
      {
        speaker: 'You',
        text: 'Understood. I will finish my module by Wednesday so we have time to test.',
        hi: 'समझ गया। बुधवार तक अपना मॉड्यूल पूरा कर दूँगा ताकि टेस्ट का समय मिले।',
      },
      {
        speaker: 'Manager',
        text: 'Perfect. Does anyone need extra support on their tasks?',
        hi: 'बढ़िया। किसी को अपने काम में और मदद चाहिए?',
      },
      {
        speaker: 'You',
        text: 'I am on track for now, but I will reach out if anything blocks me.',
        hi: 'अभी सब ठीक है, लेकिन कोई रुकावट होगी तो बता दूँगा।',
      },
      {
        speaker: 'Manager',
        text: 'Great. Let us sync again on Thursday morning.',
        hi: 'अच्छा। गुरुवार सुबह फिर मिलते हैं।',
      },
      {
        speaker: 'You',
        text: 'Sounds good. I will prepare a short status update before that meeting.',
        hi: 'ठीक है। उस मीटिंग से पहले छोटा स्टेटस अपडेट तैयार कर लूँगा।',
      },
    ],
  },
];

export function getLessonById(id) {
  return lessons.find((l) => l.id === id);
}
