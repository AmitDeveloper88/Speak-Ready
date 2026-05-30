import { lesson, turn, alts } from '../helpers.js';

const TOPIC = 'expressing-feelings';
const TITLE = 'Expressing Feelings';

export const expressingFeelingsLessons = Object.fromEntries([
  lesson(TOPIC, TITLE, 'happiness', 'Happiness', [
    turn('Person', 'You look cheerful today.', 'आज खुश लग रहे।', alts(
      ['Good news?', 'अच्छी खबर?'],
      ['Something nice happen?', 'कुछ अच्छा?'],
      ['Friday mood?', 'शुक्रवार मूड?']
    )),
    turn('You', 'I feel really happy because my project shipped.', 'बहुत खुश क्योंकि प्रोजेक्ट शिप हुआ।', alts(
      ['I am thrilled, launch went smooth.', 'रोमांचित, लॉन्च सुचारु।'],
      ['Honestly joyful today, team nailed it.', 'सच में आनंद, टीम कमाल।'],
      ['Light and happy, hard work paid off.', 'हल्का खुश, मेहनत रंग लाई।']
    )),
    turn('Person', 'That is worth celebrating.', 'सेलिब्रेट लायक।', alts(
      ['Tell me more.', 'और बताओ।'],
      ['How long did it take?', 'कितना समय?']
    )),
    turn('You', 'Six months of effort, so relief mixes in.', 'छह महीने प्रयास, राहत मिली।', alts(
      ['Happy plus tired, good tired.', 'खुश और थका, अच्छा थकान।'],
      ['Joy with gratitude for the team.', 'खुशी कृतज्ञता टीम।'],
      ['Smiling all day, rare feeling.', 'दिन भर मुस्कान, दुर्लभ।']
    )),
    turn('Person', 'Enjoy the high.', 'उचाई एंजॉय।', alts(
      ['Treat yourself.', 'खुद ट्रीट।'],
      ['Share with family?', 'परिवार शेयर?']
    )),
    turn('You', 'I called my parents already, they were proud.', 'माता-पिता कॉल, गर्व।', alts(
      ['Dinner out tonight.', 'आज रात बाहर खाना।'],
      ['Happy dance in kitchen.', 'रसोई में नाच।'],
      ['Letting joy sink in.', 'खुशी अंदर उतार।']
    )),
    turn('Person', 'Love that energy.', 'ऊर्जा पसंद।', alts(
      ['Inspire the team.', 'टीम प्रेरित।'],
      ['Ride the wave.', 'लहर सवार।']
    )),
    turn('You', 'I will share credit in standup tomorrow.', 'कल स्टैंडअप श्रेय शेयर।', alts(
      ['Happiness shared grows.', 'बाँटी खुशी बढ़े।'],
      ['Today feels golden.', 'आज सुनहरा।'],
      ['Thanks for noticing.', 'ध्यान शुक्रिया।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'excitement', 'Excitement', [
    turn('Person', 'Big trip next week?', 'अगले हफ्ते बड़ी यात्रा?', alts(
      ['Interview soon?', 'जल्दी इंटरव्यू?'],
      ['Concert tickets?', 'कॉन्सर्ट टिकट?'],
      ['Moving house?', 'घर शिफ्ट?']
    )),
    turn('You', 'I am so excited, I can barely sleep.', 'बहुत उत्सुक, नींद कम।', alts(
      ['Buzzing with excitement for Japan.', 'जापान उत्साह।'],
      ['Honestly pumped, first time abroad.', 'पहली विदेश यात्रा उत्साह।'],
      ['Excited and nervous, good mix.', 'उत्सुक घबराहट, अच्छा मिक्स।']
    )),
    turn('Person', 'Japan will be amazing.', 'जापान कमाल।', alts(
      ['What is first on list?', 'पहली सूची?'],
      ['Who travels with you?', 'कौन साथ?']
    )),
    turn('You', 'Cherry blossoms and street food, I cannot wait.', 'चेरी ब्लॉसम स्ट्रीट फूड, इंतजार नहीं।', alts(
      ['Temples day one.', 'दिन एक मंदिर।'],
      ['Rail pass ready.', 'रेल पास तैयार।'],
      ['Counting days like a kid.', 'बच्चे जैसे दिन गिन।']
    )),
    turn('Person', 'Send photos daily.', 'रोज फोटो।', alts(
      ['Live stories okay.', 'लाइव स्टोरी ठीक।'],
      ['I am jealous happy.', 'ईर्ष्या वाली खुशी।']
    )),
    turn('You', 'Daily updates promised.', 'रोज अपडेट वादा।', alts(
      ['Excitement fuels packing.', 'उत्साह पैकिंग।'],
      ['List making is fun.', 'सूची मज़ा।'],
      ['Thanks for hyping me.', 'उत्साह बढ़ाने शुक्रिया।']
    )),
    turn('Person', 'You deserve the hype.', 'हाइप हकदार।', alts(
      ['Safe flight.', 'सुरक्षित उड़ान।'],
      ['Enjoy every bite.', 'हर बाइट एंजॉय।']
    )),
    turn('You', 'I will soak it all in.', 'सब भिगोऊँगा।', alts(
      ['Excitement shared doubles joy.', 'बाँटा उत्साह दोगुना।'],
      ['Talk before I fly.', 'उड़ान से पहले बात।'],
      ['Counting hours now.', 'घंटे गिन रहा।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'nervousness', 'Nervousness', [
    turn('Person', 'Interview at three PM?', 'दोपहर तीन इंटरव्यू?', alts(
      ['Presentation today?', 'आज प्रेज़ेंटेशन?'],
      ['Driving test?', 'ड्राइविंग टेस्ट?'],
      ['Meeting the client?', 'क्लाइंट मीटिंग?']
    )),
    turn('You', 'I feel quite nervous, stomach is tight.', 'काफी घबराहट, पेट तना।', alts(
      ['Honestly anxious, hands are cold.', 'चिंतित, हाथ ठंडे।'],
      ['A bit nervous but prepared.', 'थोड़ी घबराहट पर तैयार।'],
      ['Butterflies, normal before big moments.', 'तितलियाँ, बड़े पल से पहले सामान्य।']
    )),
    turn('Person', 'Breathing helps.', 'साँस मदद।', alts(
      ['You know your stuff.', 'तुम जानते।'],
      ['Want a pep talk?', 'हौसला बात?']
    )),
    turn('You', 'I will breathe slow and review notes once.', 'धीरी साँस, नोट एक बार।', alts(
      ['Water sip, power pose.', 'पानी, पावर पोज़।'],
      ['Nervous energy can sharpen focus.', 'घबराहट ऊर्जा फोकस।'],
      ['Talking helps calm me.', 'बात शांत करती।']
    )),
    turn('Person', 'You will do fine.', 'ठीक करोगे।', alts(
      ['They already liked your CV.', 'CV पसंद।'],
      ['Smile at start.', 'शुरू मुस्कान।']
    )),
    turn('You', 'Thanks. I feel a little lighter now.', 'शुक्रिया। थोड़ा हल्का।', alts(
      ['Nerves still there but manageable.', 'घबराहट पर संभाल।'],
      ['Grateful for your calm voice.', 'शांत आवाज़ आभारी।'],
      ['Heading in soon.', 'जल्द जा रहा।']
    )),
    turn('Person', 'Text me after.', 'बाद मैसेज।', alts(
      ['Rooting for you.', 'साथ हूँ।'],
      ['You got this.', 'तुम करोगे।']
    )),
    turn('You', 'Will text right after. Thanks again.', 'तुरंत मैसेज। फिर शुक्रिया।', alts(
      ['Naming nerves reduces power.', 'घबराहट नाम कमज़ोर।'],
      ['Honest feelings help.', 'ईमानदार भाव मदद।'],
      ['Wish me luck.', 'शुभकामनाएँ।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'disappointment', 'Disappointment', [
    turn('Person', 'Heard the trip got cancelled.', 'सुना यात्रा रद्द।', alts(
      ['Promotion delayed?', 'प्रमोशन देर?'],
      ['Event sold out?', 'इवेंट भरा?'],
      ['Rain ruined plans?', 'बारिश प्लान बिगाड़ी?']
    )),
    turn('You', 'I feel disappointed, I was looking forward to it.', 'निराश, बहुत इंतज़ार था।', alts(
      ['Honestly let down, plans were set.', 'निराश, प्लान तय।'],
      ['Sad and disappointed, tickets wasted.', 'उदास निराश, टिकट बेकार।'],
      ['Gutted a bit, needed that break.', 'थोड़ा दुखी, ब्रेक चाहिए था।']
    )),
    turn('Person', 'That is rough.', 'कठिन।', alts(
      ['Refund okay?', 'रिफंड?'],
      ['Reschedule possible?', 'फिर शेड्यूल?']
    )),
    turn('You', 'Refund is processing, still stings.', 'रिफंड प्रोसेस, फिर भी चुभता।', alts(
      ['Money back but mood low.', 'पैसा वापस मूड नीचे।'],
      ['Maybe plan a local getaway.', 'स्थानीय छुट्टी प्लान।'],
      ['Disappointment fades slowly.', 'निराशा धीरे घटे।']
    )),
    turn('Person', 'Local trip could help.', 'स्थानीय यात्रा मदद।', alts(
      ['Want company?', 'साथ चाहिए?'],
      ['Weekend re-plan?', 'वीकेंड फिर प्लान?']
    )),
    turn('You', 'A short hill drive might lift me.', 'छोटी पहाड़ी ड्राइव उठा सकती।', alts(
      ['Nature fixes mood partly.', 'प्रकृति मूड ठीक।'],
      ['Talking now already helps.', 'अभी बात मदद।'],
      ['I will allow myself to feel low today.', 'आज नीचा महसूस करने दूँगा।']
    )),
    turn('Person', 'Feel it, then move.', 'महसूस, फिर आगे।', alts(
      ['Here if you need.', 'ज़रूरत हो तो यहाँ।'],
      ['Better days ahead.', 'आगे बेहतर दिन।']
    )),
    turn('You', 'Thanks for sitting with my disappointment.', 'निराशा संग बैठने शुक्रिया।', alts(
      ['Honest talk heals.', 'ईमानदार बात सुधार।'],
      ['Plan B tomorrow.', 'कल प्लान B।'],
      ['Appreciate you.', 'कद्र।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'frustration', 'Frustration', [
    turn('Person', 'Third time the build failed?', 'तीसरी बार बिल्ड फेल?', alts(
      ['Client changed scope again?', 'क्लाइंट फिर स्कोप?'],
      ['Internet down all day?', 'दिन भर नेट बंद?'],
      ['Vendor late again?', 'वेंडर फिर लेट?']
    )),
    turn('You', 'I feel frustrated, this loop wastes our sprint.', 'निराशा जैसी, यह लूप स्प्रिंट बर्बाद।', alts(
      ['Honestly annoyed, same bug returns.', 'खीझ, वही बग।'],
      ['Fed up but staying polite.', 'ऊब पर विनम्र।'],
      ['Frustrated because we lack test coverage.', 'निराशा, टेस्ट कवर कम।']
    )),
    turn('Person', 'Valid anger.', 'वैध गुस्सा।', alts(
      ['Want help debugging?', 'डिबग मदद?'],
      ['Escalate?', 'एस्केलेट?']
    )),
    turn('You', 'Help yes. I need fresh eyes on the logs.', 'मदद हाँ। लॉग पर नई आँख।', alts(
      ['Pair for thirty minutes.', 'तीस मिनट पेयर।'],
      ['Frustration pushes me to fix root cause.', 'निराशा जड़ ठीक।'],
      ['Venting helps, thanks.', 'निकालना मदद।']
    )),
    turn('Person', 'Share screen now.', 'अभी स्क्रीन शेयर।', alts(
      ['We will crack it.', 'तोड़ेंगे।'],
      ['Coffee after?', 'बाद कॉफी?']
    )),
    turn('You', 'Screen shared. Feeling heard already.', 'स्क्रीन शेयर। सुने महसूस।', alts(
      ['Frustration dropping a bit.', 'निराशा थोड़ी घटी।'],
      ['Action calms emotion.', 'कार्रवाई भाव शांत।'],
      ['Grateful for backup.', 'बैकअप आभारी।']
    )),
    turn('Person', 'Team beats bugs together.', 'टीम साथ बग हराती।', alts(
      ['Found the typo.', 'टाइपो मिला।'],
      ['Classic.', 'क्लासिक।']
    )),
    turn('You', 'Typo fixes it. Frustration to relief.', 'टाइपो ठीक। निराशा से राहत।', alts(
      ['Laughing now.', 'अब हँसी।'],
      ['Naming frustration helped.', 'निराशा नाम मदद।'],
      ['Thanks partner.', 'साथी शुक्रिया।']
    )),
  ]),
]);
