import { lesson, turn, alts } from '../helpers.js';

const TOPIC = 'storytelling';
const TITLE = 'Storytelling';

export const storytellingLessons = Object.fromEntries([
  lesson(TOPIC, TITLE, 'childhood-memories', 'Childhood Memories', [
    turn('Person', 'Any childhood memory that still makes you smile?', 'बचपन की याद जो अभी मुस्कुराती?', alts(
      ['Where did you grow up?', 'कहाँ बड़े हुए?'],
      ['School days fun?', 'स्कूल मज़ा?'],
      ['Favorite festival as a kid?', 'बचपन का त्योहार?']
    )),
    turn('You', 'Summer breaks at my grandma’s village, mango trees.', 'दादी के गाँव की गर्मी की छुट्टी, आम।', alts(
      ['Grandma’s village every summer.', 'हर गर्मी दादी गाँव।'],
      ['Climbing mango trees with cousins.', 'मामू के बच्चों संग आम पर चढ़ना।'],
      ['Village pond and fireflies at night.', 'गाँव तालाब, रात जुगनू।']
    )),
    turn('Person', 'Sounds magical. What did you do there?', 'जादुई। वहाँ क्या करते?', alts(
      ['Any trouble you caused?', 'कोई शरारत?'],
      ['Favorite food there?', 'पसंदीदा खाना?'],
      ['Still visit?', 'अभी जाते?']
    )),
    turn('You', 'We stole mangoes, then grandma made aamras.', 'आम चुराते, फिर दादी आमरस बनातीं।', alts(
      ['Pick mangoes, swim, sleep on charpai.', 'आम तोड़ो, तैरो, खाट पर सो।'],
      ['Cycled to the small market.', 'छोटे बाज़ार साइकिल।'],
      ['Stories after dinner on the terrace.', 'खाने के बाद छत पर कहानियाँ।']
    )),
    turn('Person', 'Grandmas are the best chefs.', 'दादी सबसे अच्छी रसोइया।', alts(
      ['I miss my nani’s paratha.', 'नानी की पराठा याद।'],
      ['Village air hits different.', 'गाँव की हवा अलग।']
    )),
    turn('You', 'Her aamras beats any restaurant.', 'उनका आमरस किसी रेस्टो से बेहतर।', alts(
      ['Secret cardamom touch.', 'इलायची का राज़।'],
      ['She still sends pickles yearly.', 'हर साल अचार भेजती।'],
      ['Memory keeps me grounded.', 'याद ज़मीन पर रखती।']
    )),
    turn('Person', 'Visit her this Diwali?', 'इस दीवाली मिलने?', alts(
      ['Take photos for us.', 'फोटो लाना।'],
      ['Road or train?', 'सड़क या ट्रेन?']
    )),
    turn('You', 'Yes, three days in the village planned.', 'हाँ, गाँव तीन दिन प्लान।', alts(
      ['Tickets booked already.', 'टिकट बुक।'],
      ['Will record her recipes.', 'रेसिपी रिकॉर्ड।'],
      ['Childhood places still calm me.', 'बचपन की जगहें शांत करती।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'travel-stories', 'Travel Stories', [
    turn('Person', 'Best trip story you have?', 'सबसे अच्छी यात्रा कहानी?', alts(
      ['Funny travel moment?', 'मज़ेदार पल?'],
      ['Solo travel ever?', 'अकेले यात्रा?'],
      ['Lost anywhere?', 'कहीं खोए?']
    )),
    turn('You', 'Missed a train in Jaipur, found a hidden cafe.', 'जयपुर में ट्रेन छूटी, छिपी कैफे मिली।', alts(
      ['Train missed, stumbled on gem cafe.', 'ट्रेन छूटी, कैफे खजाना।'],
      ['Delay led to street food tour.', 'देरी से स्ट्रीट फूड टूर।'],
      ['Wrong turn, best sunset view.', 'गलत मोड़, बेस्ट सूर्यास्त।']
    )),
    turn('Person', 'What was special about the cafe?', 'कैफे में क्या खास?', alts(
      ['Did you make friends?', 'दोस्त बने?'],
      ['Food or view?', 'खाना या नज़ारा?'],
      ['Would you go back?', 'वापस जाओगे?']
    )),
    turn('You', 'Rooftop view of the fort, quiet jazz.', 'किले का छत व्यू, शांत जैज़।', alts(
      ['Fort view, cold coffee, jazz.', 'किला व्यू, ठंडी कॉफी, जैज़।'],
      ['Owner shared local history.', 'मालिक ने इतिहास बताया।'],
      ['No crowd, perfect notebook time.', 'भीड़ नहीं, नोटबुक टाइम।']
    )),
    turn('Person', 'Sometimes delays gift us stories.', 'देरी कभी कहानी देती।', alts(
      ['I panic on delays.', 'देरी पर घबराहट।'],
      ['Need that mindset.', 'वह सोच चाहिए।']
    )),
    turn('You', 'Now I pack a book for buffer time.', 'अब बफर टाइम के लिए किताब।', alts(
      ['Book plus snacks in backpack.', 'बैग में किताब स्नैक्स।'],
      ['Explore near station if late.', 'लेट हो तो स्टेशन आसपास।'],
      ['Travel mistakes teach patience.', 'गलती धैर्य सिखाती।']
    )),
    turn('Person', 'Send cafe name?', 'कैफे नाम भेजो।', alts(
      ['Going Jaipur next month.', 'अगले महीने जयपुर।'],
      ['Travel list growing.', 'यात्रा लिस्ट बढ़ी।']
    )),
    turn('You', 'Pinned location on WhatsApp.', 'व्हाट्सऐप पर लोकेशन पिन।', alts(
      ['Go before sunset hour.', 'सूर्यास्त से पहले।'],
      ['Pair with dal baati nearby.', 'पास दाल बाटी।'],
      ['Happy travels to you.', 'शुभ यात्रा।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'funny-incidents', 'Funny Incidents', [
    turn('Person', 'Funniest thing that happened at work?', 'ऑफिस की सबसे मज़ेदार बात?', alts(
      ['Embarrassing moment?', 'शर्मिंदगी?'],
      ['Laugh till you cried?', 'हँसते हँसते रोना?'],
      ['Recent blooper?', 'हाल की गलती?']
    )),
    turn('You', 'I joined a call on mute, then argued aloud alone.', 'म्यूट पर कॉल, अकेले ज़ोर से बहस।', alts(
      ['Forgot unmute, ranted two minutes.', 'अनम्यूट भूला, दो मिनट बकवास।'],
      ['Talked to screen, team was silent.', 'स्क्रीन से बात, टीम चुप।'],
      ['Mute button betrayed me.', 'म्यूट ने धोखा दिया।']
    )),
    turn('Person', 'Oh no. Did anyone say something?', 'अरे। किसी ने कुछ कहा?', alts(
      ['Chat must have exploded.', 'चैट धमाका?'],
      ['Manager saw?', 'मैनेजर देखा?'],
      ['Still cringe?', 'अभी शर्म?']
    )),
    turn('You', 'Someone typed please unmute in caps.', 'किसी ने कैप्स में अनम्यूट लिखा।', alts(
      ['Caps lock unmute please.', 'अनम्यूट प्लीज कैप्स।'],
      ['Emoji storm in chat.', 'चैट इमोजी तूफान।'],
      ['I turned red, laughed after.', 'लाल, बाद हँसा।']
    )),
    turn('Person', 'Happens to everyone.', 'सबके साथ होता।', alts(
      ['I sent reply all by mistake.', 'गलती से रिप्लाई ऑल।'],
      ['We are human.', 'इंसान हैं।']
    )),
    turn('You', 'Now I check mute twice before ranting.', 'अब बकवास से पहले म्यूट दो बार।', alts(
      ['Sticky note on monitor.', 'मॉनिटर पर नोट।'],
      ['Laugh helps team bond.', 'हँसी टीम जोड़ती।'],
      ['Story worth sharing.', 'शेयर लायक कहानी।']
    )),
    turn('Person', 'Share in standup for fun.', 'स्टैंडअप में मज़ाक।', alts(
      ['Light moments help.', 'हल्के पल मदद।'],
      ['I have one too someday.', 'मेरी भी कभी।']
    )),
    turn('You', 'Maybe Friday fun slot.', 'शायद शुक्रवार फन स्लॉट।', alts(
      ['Two minute story time.', 'दो मिनट कहानी।'],
      ['Laughter beats stress.', 'हँसी तनाव कम।'],
      ['Thanks for listening.', 'सुनने के लिए शुक्रिया।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'learning-experiences', 'Learning Experiences', [
    turn('Person', 'Hardest skill you learned recently?', 'हाल की सबसे कठिन सीख?', alts(
      ['Failure that taught you?', 'सिखाने वाली असफलता?'],
      ['Course worth it?', 'कोर्स लायक?'],
      ['Mentor helped?', 'मेंटर मदद?']
    )),
    turn('You', 'Public speaking was scary, now manageable.', 'पब्लिक स्पीकिंग डरावनी थी, अब ठीक।', alts(
      ['Speaking clubs changed me.', 'स्पीकिंग क्लब ने बदला।'],
      ['First talk hands shook.', 'पहली बात हाथ काँपे।'],
      ['Practice beats talent here.', 'यहाँ प्रैक्टिस प्रतिभा से ऊपर।']
    )),
    turn('Person', 'How did you practice?', 'प्रैक्टिस कैसे?', alts(
      ['Record yourself?', 'खुद रिकॉर्ड?'],
      ['How many talks?', 'कितनी बार बोले?'],
      ['Still nervous?', 'अभी घबराहट?']
    )),
    turn('You', 'Weekly club, two minute speeches, feedback.', 'हफ्ते क्लब, दो मिनट भाषण, फीडबैक।', alts(
      ['Toastmasters style club.', 'टोस्टमास्टर स्टाइल।'],
      ['Video review at night.', 'रात वीडियो रिव्यू।'],
      ['Ten talks in three months.', 'तीन महीने दस बार।']
    )),
    turn('Person', 'I should join that club.', 'मुझे भी जुड़ना चाहिए।', alts(
      ['Fear of judgement?', 'आलोचना का डर?'],
      ['English or Hindi there?', 'अंग्रेज़ी या हिंदी?']
    )),
    turn('You', 'English friendly, supportive crowd.', 'अंग्रेज़ी, सपोर्टिव लोग।', alts(
      ['Mixed levels welcome.', 'मिश्र स्तर वेलकम।'],
      ['Guest pass free once.', 'एक बार फ्री गेस्ट।'],
      ['I will take you Thursday.', 'गुरुवार ले चलूँगा।']
    )),
    turn('Person', 'Thursday works. Nervous but ready.', 'गुरुवार ठीक। घबराहट पर तैयार।', alts(
      ['Thanks for the push.', 'धक्के के लिए शुक्रिया।'],
      ['Learning together helps.', 'साथ सीखना मदद।']
    )),
    turn('You', 'Nerves never vanish, we just ride them.', 'घबराहट जाती नहीं, सवारी करते।', alts(
      ['Show up anyway.', 'फिर भी आओ।'],
      ['Growth feels awkward.', 'विकास अजीब लगता।'],
      ['See you at club.', 'क्लब में मिलते।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'work-experiences', 'Work Experiences', [
    turn('Person', 'Toughest project you handled?', 'सबसे कठिन प्रोजेक्ट?', alts(
      ['Proudest work win?', 'सबसे गर्व की जीत?'],
      ['Client story?', 'क्लाइंट कहानी?'],
      ['Deadline crunch?', 'डेडलाइन दबाव?']
    )),
    turn('You', 'We rebuilt checkout in six weeks, zero downtime.', 'छह हफ्ते में चेकआउट, ज़ीरो डाउनटाइम।', alts(
      ['Checkout rewrite, tight deadline.', 'चेकआउट रीराइट, कड़ी डेडलाइन।'],
      ['Six week sprint, nightly tests.', 'छह सप्ताह, रात टेस्ट।'],
      ['Payments migration without outage.', 'पेमेंट माइग्रेशन बिना रुकावट।']
    )),
    turn('Person', 'How did the team cope?', 'टीम ने कैसे संभाला?', alts(
      ['Conflicts?', 'झगड़े?'],
      ['What was your role?', 'तुम्हारी भूमिका?'],
      ['Celebrate after?', 'बाद सेलिब्रेट?']
    )),
    turn('You', 'Clear tasks, daily standups, no blame culture.', 'साफ काम, रोज स्टैंडअप, दोष संस्कृति नहीं।', alts(
      ['I owned testing and docs.', 'टेस्टिंग डॉक्स मेरी।'],
      ['Pairing on hard bugs.', 'कठिन बग पर पेयर।'],
      ['Manager shielded us from noise.', 'मैनेजर ने शोर से बचाया।']
    )),
    turn('Person', 'No blame is rare. Lucky team.', 'दोष नहीं, दुर्लभ।', alts(
      ['My team blames fast.', 'मेरी टीम जल्दी दोष।'],
      ['Culture matters.', 'संस्कृति मायने।']
    )),
    turn('You', 'Trust made speed possible.', 'भरोसे से गति मिली।', alts(
      ['People stayed late willingly.', 'लोग खुशी से देर।'],
      ['Postmortem without shouting.', 'चिल्लाए बिना पोस्टमॉर्टम।'],
      ['Lesson: align early.', 'सीख: जल्दी एलाइन।']
    )),
    turn('Person', 'Would you do it again?', 'फिर करोगे?', alts(
      ['Burnout after?', 'बाद बर्नआउट?'],
      ['Promotion came?', 'प्रमोशन?']
    )),
    turn('You', 'Yes, but with one more tester next time.', 'हाँ, अगली बार एक टेस्टर और।', alts(
      ['Learned my limits.', 'सीमा समझी।'],
      ['Proud of the team.', 'टीम पर गर्व।'],
      ['Hard projects grow careers.', 'कठिन प्रोजेक्ट करियर बढ़ाते।']
    )),
  ]),
]);
