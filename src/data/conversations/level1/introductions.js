import { lesson, turn, alts } from '../helpers.js';

const TOPIC = 'introductions';
const TITLE = 'Introductions';

export const introductionsLessons = Object.fromEntries([
  lesson(TOPIC, TITLE, 'self-introduction', 'Self Introduction', [
    turn('Person', 'So, tell me a bit about yourself.', 'तो, अपने बारे में थोड़ा बताओ।', alts(
      ['How would you describe yourself?', 'खुद को कैसे बताओगे?'],
      ['I would love to know more about you.', 'तुम्हारे बारे में और जानना चाहूँगा।'],
      ['What do you do?', 'क्या करते हो?']
    )),
    turn('You', 'I am Aditya. I work in marketing in Bangalore.', 'मैं आदित्य। बैंगलोर में मार्केटिंग करता हूँ।', alts(
      ['Aditya here. Marketing job in Bangalore.', 'आदित्य। बैंगलोर में मार्केटिंग।'],
      ['My name is Aditya. I handle brand campaigns.', 'नाम आदित्य। ब्रांड कैंपेन संभालता हूँ।'],
      ['I am Aditya, from Bangalore, in marketing.', 'आदित्य, बैंगलोर, मार्केटिंग।']
    )),
    turn('Person', 'How long have you been in marketing?', 'मार्केटिंग में कब से हो?', alts(
      ['Is marketing your first field?', 'मार्केटिंग पहला फील्ड है?'],
      ['Do you enjoy the work?', 'काम में मज़ा आता है?'],
      ['What kind of brands do you handle?', 'किस तरह के ब्रांड?']
    )),
    turn('You', 'About four years now. Mostly tech startups.', 'लगभग चार साल। ज़्यादातर टेक स्टार्टअप।', alts(
      ['Four years. Startups mostly.', 'चार साल। ज़्यादातर स्टार्टअप।'],
      ['Since 2021. I like fast-paced teams.', '2021 से। फास्ट टीम पसंद है।'],
      ['Roughly four years in digital marketing.', 'लगभग चार साल डिजिटल मार्केटिंग।']
    )),
    turn('Person', 'Nice. Any hobbies outside work?', 'बढ़िया। काम के बाहर शौक?', alts(
      ['What do you do for fun?', 'मज़े के लिए क्या?'],
      ['Weekends look like what?', 'वीकेंड कैसे?'],
      ['Do you play sports?', 'खेलते हो?']
    )),
    turn('You', 'I play badminton and binge good series.', 'बैडमिंटन और अच्छी सीरीज़ देखता हूँ।', alts(
      ['Badminton twice a week, plus Netflix.', 'हफ्ते में दो बार बैडमिंटन, नेटफ्लिक्स।'],
      ['Sports and cooking experiments.', 'खेल और कुकिंग एक्सपेरिमेंट।'],
      ['Mostly badminton with friends.', 'ज़्यादातर दोस्तों के साथ बैडमिंटन।']
    )),
    turn('Person', 'We should play sometime.', 'कभी खेल लेते हैं।', alts(
      ['I play too. Let us plan.', 'मैं भी खेलती हूँ। प्लान करें।'],
      ['There is a court near my place.', 'पास कोर्ट है।'],
      ['Badminton buddies are always welcome.', 'बैडमिंटन पार्टनर वेलकम।']
    )),
    turn('You', 'Sure, let us fix a weekend.', 'ठीक, वीकेंड फिक्स करते हैं।', alts(
      ['Sounds fun. Text me.', 'मज़ेदार। मैसेज करना।'],
      ['Yes, I am in.', 'हाँ, मैं तैयार।'],
      ['Deal. I will bring the shuttle.', 'ठीक। मैं शटल लाऊँगा।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'professional-introduction', 'Professional Introduction', [
    turn('Person', 'Please introduce yourself briefly.', 'कृपया संक्षेप में परिचय दीजिए।', alts(
      ['Walk us through your background.', 'अपना बैकग्राउंड बताइए।'],
      ['Tell us about your experience.', 'अपना अनुभव बताइए।'],
      ['Start with a short intro.', 'छोटा परिचय से शुरू करें।']
    )),
    turn('You', 'I am Priya Singh, a frontend developer with five years experience.', 'मैं प्रिया सिंह, पाँच साल का फ्रंटएंड डेवलपर।', alts(
      ['Priya Singh here. Five years in frontend.', 'प्रिया सिंह। पाँच साल फ्रंटएंड।'],
      ['My name is Priya. I build web apps for fintech.', 'नाम प्रिया। फिनटेक में वेब ऐप बनाती हूँ।'],
      ['I am Priya, focused on React and performance.', 'प्रिया, React और परफॉर्मेंस।']
    )),
    turn('Person', 'What was your last role?', 'पिछली भूमिका क्या थी?', alts(
      ['Where did you work before?', 'पहले कहाँ काम?'],
      ['Recent project you are proud of?', 'हाल का प्रोजेक्ट जिस पर गर्व?'],
      ['Biggest strength at work?', 'काम पर सबसे बड़ी ताकत?']
    )),
    turn('You', 'Senior UI engineer at PayGrid for two years.', 'दो साल PayGrid में सीनियर UI इंजीनियर।', alts(
      ['PayGrid, senior UI, two years.', 'PayGrid, सीनियर UI, दो साल।'],
      ['Last job was PayGrid, payments dashboard.', 'आखिरी जॉब PayGrid, पेमेंट डैशबोर्ड।'],
      ['I led the checkout redesign there.', 'वहाँ चेकआउट रीडिज़ाइन लीड किया।']
    )),
    turn('Person', 'Why are you interested in this role?', 'इस रोल में रुचि क्यों?', alts(
      ['What draws you to our company?', 'हमारी कंपनी क्यों?'],
      ['What are you looking for next?', 'आगे क्या ढूँढ रही हैं?'],
      ['Why leave your last job?', 'पिछली जॉब क्यों छोड़ी?']
    )),
    turn('You', 'Your product scale matches the problems I like solving.', 'आपके प्रोडक्ट का स्केल वही समस्याएँ जो मुझे पसंद।', alts(
      ['I want bigger user impact.', 'बड़ा यूज़र इम्पैक्ट चाहिए।'],
      ['Your design culture is what I read about.', 'आपकी डिज़ाइन कल्चर पढ़ी थी।'],
      ['This team ships fast. That excites me.', 'टीम फास्ट शिप करती। यही पसंद।']
    )),
    turn('Person', 'Any questions for us?', 'हमारे लिए कोई सवाल?', alts(
      ['What would you like to know?', 'क्या जानना चाहेंगी?'],
      ['Ask us anything.', 'कुछ भी पूछिए।'],
      ['Curious about the team?', 'टीम के बारे में जिज्ञासा?']
    )),
    turn('You', 'How does the team handle code reviews?', 'कोड रिव्यू टीम कैसे करती है?', alts(
      ['What does onboarding look like?', 'ऑनबोर्डिंग कैसी?'],
      ['How do you measure success in this role?', 'इस रोल में सफलता कैसे मापते?'],
      ['What is the biggest challenge right now?', 'अभी सबसे बड़ी चुनौती?']
    )),
  ]),

  lesson(TOPIC, TITLE, 'student-introduction', 'Student Introduction', [
    turn('Person', 'Alright class, quick round of intros.', 'ठीक क्लास, जल्दी परिचय।', alts(
      ['Let us hear from new students.', 'नए स्टूडेंट्स से सुनते हैं।'],
      ['Who wants to go first?', 'कौन पहले?'],
      ['Share your name and major.', 'नाम और मेजर बताओ।']
    )),
    turn('You', 'I am Isha, first year, computer science.', 'मैं ईशा, फर्स्ट ईयर, कंप्यूटर साइंस।', alts(
      ['Isha here. CS first year.', 'ईशा। CS फर्स्ट ईयर।'],
      ['My name is Isha. I chose computer science.', 'नाम ईशा। कंप्यूटर साइंस ली।'],
      ['I am Isha from Jaipur, studying CS.', 'ईशा, जयपुर से, CS पढ़ती हूँ।']
    )),
    turn('Person', 'What made you pick CS?', 'CS क्यों चुनी?', alts(
      ['Any coding background?', 'कोडिंग बैकग्राउंड?'],
      ['Nervous or excited?', 'घबराहट या एक्साइटमेंट?'],
      ['Dream job someday?', 'सपनों की जॉब?']
    )),
    turn('You', 'I like problem solving. Built small apps in school.', 'प्रॉब्लम सॉल्विंग पसंद। स्कूल में छोटे ऐप बनाए।', alts(
      ['Love logic puzzles and apps.', 'लॉजिक और ऐप पसंद।'],
      ['School projects got me hooked.', 'स्कूल प्रोजेक्ट ने खींचा।'],
      ['Want to build useful software.', 'काम का सॉफ्टवेयर बनाना है।']
    )),
    turn('Person', 'Which club are you joining?', 'किस क्लब में जा रही हो?', alts(
      ['Any hobbies on campus?', 'कैंपस पर शौक?'],
      ['Do you live in hostel?', 'हॉस्टल में?'],
      ['Favorite subject so far?', 'अभी तक पसंदीदा विषय?']
    )),
    turn('You', 'Probably the coding club and maybe dance.', 'शायद कोडिंग क्लब और शायद डांस।', alts(
      ['Coding club for sure.', 'कोडिंग क्लब ज़रूर।'],
      ['Tech club plus weekend football.', 'टेक क्लब और वीकेंड फुटबॉल।'],
      ['Still exploring, but coding first.', 'अभी देख रही हूँ, पहले कोडिंग।']
    )),
    turn('Person', 'Great. Pair up for the first assignment.', 'बढ़िया। पहले असाइनमेंट के लिए पेयर बनाओ।', alts(
      ['Find a partner after class.', 'क्लास के बाद पार्टनर ढूँढो।'],
      ['Library orientation is Friday.', 'लाइब्रेरी ओरिएंटेशन शुक्रवार।'],
      ['Slides are on the portal.', 'स्लाइड पोर्टल पर हैं।']
    )),
    turn('You', 'Thanks. Looking forward to the semester.', 'शुक्रिया। सेमेस्टर का इंतज़ार।', alts(
      ['Thank you, professor.', 'धन्यवाद, प्रोफेसर।'],
      ['Excited to learn here.', 'यहाँ सीखने को उत्सुक।'],
      ['Got it. See you next class.', 'समझ गई। अगली क्लास में।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'short-introduction', 'Short Introduction', [
    turn('Person', 'Hi, you are in the queue for the desk?', 'हाय, डेस्क की कतार में हो?', alts(
      ['Are you waiting for counter two?', 'काउंटर दो का इंतज़ार?'],
      ['First time at this bank branch?', 'इस ब्रांच में पहली बार?'],
      ['Hello. Need help finding a form?', 'हेलो। फॉर्म ढूँढने में मदद?']
    )),
    turn('You', 'Yes. I am Dev. Need a signature update.', 'हाँ। देव। सिग्नेचर अपडेट चाहिए।', alts(
      ['Dev here. Signature change.', 'देव। सिग्नेचर बदलाव।'],
      ['Yes, Dev. Quick form work.', 'हाँ, देव। जल्दी फॉर्म।'],
      ['Waiting. I am Dev.', 'इंतजार। देव।']
    )),
    turn('Person', 'Same here. I am Naina.', 'मुझे भी। मैं नैना।', alts(
      ['I am Naina, address change.', 'नैना, पता बदलाव।'],
      ['Naina. Passport KYC.', 'नैना। पासपोर्ट KYC।'],
      ['Call me Naina.', 'नैना बुलाओ।']
    )),
    turn('You', 'Nice to meet you, Naina.', 'मिलकर अच्छा लगा, नैना।', alts(
      ['Hi Naina.', 'हाय नैना।'],
      ['Pleased to meet you.', 'मिलकर खुशी।'],
      ['Hey Naina.', 'हे नैना।']
    )),
    turn('Person', 'Hope the line moves fast.', 'उम्मीद है लाइन जल्दी चले।', alts(
      ['This wait is long.', 'इंतजार लंबा।'],
      ['Been here twenty minutes.', 'बीस मिनट से यहाँ।'],
      ['They only have one counter open.', 'सिर्फ एक काउंटर खुला।']
    )),
    turn('You', 'Yeah. I have a meeting after this.', 'हाँ। इसके बाद मीटिंग।', alts(
      ['Same. Lunch break almost over.', 'वही। लंच ब्रेक खत्म।'],
      ['Fingers crossed.', 'देखते हैं।'],
      ['Hope so too.', 'मुझे भी उम्मीद।']
    )),
    turn('Person', 'Counter is open. After you.', 'काउंटर खुला। पहले आप।', alts(
      ['Go ahead, I am behind you.', 'आगे बढ़ो, मैं पीछे।'],
      ['Your turn looks next.', 'तुम्हारी बारी लगती अगली।'],
      ['Let us both finish quick.', 'दोनों जल्दी निपटाएँ।']
    )),
    turn('You', 'Thanks. Good luck, Naina.', 'शुक्रिया। शुभकामनाएँ, नैना।', alts(
      ['Thank you. See you.', 'धन्यवाद। मिलते हैं।'],
      ['Appreciate it. Take care.', 'शुक्रिया। संभाल कर।'],
      ['Thanks. Hope your form goes smooth.', 'शुक्रिया। फॉर्म सही से हो।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'public-introduction', 'Public Introduction', [
    turn('Person', 'You are up next. Ready?', 'अगली बारी तुम्हारी। तैयार?', alts(
      ['Thirty seconds, introduce yourself.', 'तीस सेकंड, परिचय।'],
      ['Audience is friendly. Go ahead.', 'ऑडियंस दोस्ताना। शुरू करो।'],
      ['Mic is on. Start when you like.', 'माइक ऑन। जब चाहो शुरू।']
    )),
    turn('You', 'Hello everyone. I am Karan, a freelance photographer.', 'सबको नमस्ते। मैं करण, फ्रीलांस फोटोग्राफर।', alts(
      ['Hi all. Karan here, I shoot events.', 'हाय सब। करण, इवेंट शूट करता हूँ।'],
      ['Good evening. Name is Karan, visual storyteller.', 'शुभ संध्या। करण, विज़ुअल स्टोरीटेलर।'],
      ['Hello. Karan, weddings and portraits.', 'हेलो। करण, शादी और पोर्ट्रेट।']
    )),
    turn('Person', 'What brings you to this meetup?', 'इस मीटअप पर क्यों आए?', alts(
      ['Share one fun fact.', 'एक मज़ेदार बात।'],
      ['What should we remember about you?', 'हमें क्या याद रखना चाहिए?'],
      ['Keep going, you are doing fine.', 'चलते रहो, अच्छा चल रहा।']
    )),
    turn('You', 'I want to collaborate with local brands.', 'लोकल ब्रांड्स के साथ कोलैब चाहता हूँ।', alts(
      ['Looking for creative partners.', 'क्रिएटिव पार्टनर ढूँढ रहा।'],
      ['Here to network and learn.', 'नेटवर्क और सीखने आया।'],
      ['I share travel photo stories online.', 'ट्रैवल फोटो स्टोरी ऑनलाइन शेयर करता हूँ।']
    )),
    turn('Person', 'Where can people find your work?', 'लोग काम कहाँ देखें?', alts(
      ['Instagram handle?', 'इंस्टाग्राम?'],
      ['Portfolio link?', 'पोर्टफोलियो लिंक?'],
      ['Any city you focus on?', 'किस शहर पर फोकस?']
    )),
    turn('You', 'Instagram at KaranFrames, same on the web.', 'इंस्टाग्राम KaranFrames, वेब पर भी।', alts(
      ['Search KaranFrames on socials.', 'सोशल पर KaranFrames खोजो।'],
      ['Website is karanframes dot com.', 'वेब karanframes.com।'],
      ['QR on my card if anyone wants.', 'कार्ड पर QR है।']
    )),
    turn('Person', 'Thank you, Karan. Solid intro.', 'शुक्रिया करण। अच्छा परिचय।', alts(
      ['Well done. Next person please.', 'बढ़िया। अगला।'],
      ['Quick applause for Karan.', 'करण के लिए तालियाँ।'],
      ['Clear and short. Nice.', 'साफ और छोटा। अच्छा।']
    )),
    turn('You', 'Thanks everyone. Happy to connect later.', 'शुक्रिया सबको। बाद में जुड़ेंगे।', alts(
      ['Thank you. Find me near the snacks.', 'धन्यवाद। स्नैक्स के पास मिलना।'],
      ['Appreciate it. Let us chat after.', 'शुक्रिया। बाद में बात।'],
      ['Thanks. Enjoy the rest of the event.', 'शुक्रिया। बाकी इवेंट एंजॉय करो।']
    )),
  ]),
]);
