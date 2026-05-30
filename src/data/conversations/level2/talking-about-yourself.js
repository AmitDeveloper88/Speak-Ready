import { lesson, turn, alts } from '../helpers.js';

const TOPIC = 'talking-about-yourself';
const TITLE = 'Talking About Yourself';

export const talkingAboutYourselfLessons = Object.fromEntries([
  lesson(TOPIC, TITLE, 'personal-life', 'Personal Life', [
    turn('Person', 'You seem calm. How is life outside work?', 'शांत लगते हो। काम के बाहर ज़िंदगी कैसी?', alts(
      ['How do you unwind after office?', 'ऑफिस के बाद आराम कैसे?'],
      ['What does a normal evening look like?', 'आम शाम कैसी दिखती?'],
      ['Do you live alone or with family?', 'अकेले या परिवार संग?']
    )),
    turn('You', 'Pretty balanced. I cook, read, and sleep early.', 'काफी संतुलित। खाना बनाता, पढ़ता, जल्दी सोता।', alts(
      ['Simple life. Cook, walk, early bed.', 'सादी ज़िंदगी। खाना, सैर, जल्दी सोना।'],
      ['Evenings are quiet. Books and chai.', 'शाम शांत। किताब और चाय।'],
      ['I keep it low key after work.', 'काम के बाद लो की रहता।']
    )),
    turn('Person', 'Nice. Any pets or plants?', 'अच्छा। पालतू या पौधे?', alts(
      ['Roommate or solo?', 'रूममेट या अकेले?'],
      ['Morning person?', 'सुबह वाले?'],
      ['Social on weekends?', 'वीकेंड सोशल?']
    )),
    turn('You', 'One cat, Mango. Keeps me company.', 'एक बिल्ली, मैंगो। साथ रहती।', alts(
      ['A cat named Mango.', 'मैंगो नाम की बिल्ली।'],
      ['No pets, but balcony plants.', 'पालतू नहीं, बालकनी पौधे।'],
      ['Cat plus a small herb garden.', 'बिल्ली और छोटा हर्ब गार्डन।']
    )),
    turn('Person', 'Cats are great stress busters.', 'बिल्ली तनाव कम करती।', alts(
      ['I have a dog actually.', 'मेरे पास कुत्ता।'],
      ['Plants need patience too.', 'पौधों में भी धैर्य।'],
      ['I want a pet someday.', 'कभी पालतू चाहिए।']
    )),
    turn('You', 'True. Mango waits when I get home.', 'सही। घर आऊँ तो मैंगो इंतजार।', alts(
      ['She meows if I am late.', 'लेट हूँ तो म्याऊँ।'],
      ['Walks to the door daily.', 'रोज दरवाजे तक आती।'],
      ['Best part of my evening.', 'शाम का सबसे अच्छा हिस्सा।']
    )),
    turn('Person', 'Send a photo sometime.', 'कभी फोटो भेजना।', alts(
      ['We should do a pet meetup.', 'पालतू मिलन करें।'],
      ['I follow cat pages online.', 'ऑनलाइन बिल्ली पेज देखता।']
    )),
    turn('You', 'Sure, I will share on the group chat.', 'ठीक, ग्रुप चैट पर भेजूँगा।', alts(
      ['Will post this weekend.', 'वीकेंड पोस्ट करूँगा।'],
      ['Happy to. She is photogenic.', 'खुशी से। फोटो में अच्छी।'],
      ['Deal. You share your dog too.', 'ठीक। तुम भी कुत्ता दिखाना।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'family', 'Family', [
    turn('Person', 'Tell me about your family back home.', 'घर पर परिवार बताओ।', alts(
      ['Who lives with your parents?', 'माता-पिता के साथ कौन?'],
      ['Big family?', 'बड़ा परिवार?'],
      ['Where are they based?', 'कहाँ रहते?']
    )),
    turn('You', 'Parents in Nagpur, elder brother in Canada.', 'माता-पिता नागपुर, बड़ा भाई कनाडा।', alts(
      ['Mom dad Nagpur, brother abroad.', 'माँ-बाप नागपुर, भाई विदेश।'],
      ['Small family, parents and one brother.', 'छोटा परिवार, माता-पिता एक भाई।'],
      ['Nagpur home, brother settled overseas.', 'नागपुर घर, भाई बाहर बसा।']
    )),
    turn('Person', 'How often do you talk to them?', 'कितनी बार बात?', alts(
      ['Miss family food?', 'घर का खाना याद?'],
      ['Visit during holidays?', 'छुट्टी में मुलाकात?'],
      ['Group chat active?', 'ग्रुप चैट एक्टिव?']
    )),
    turn('You', 'Video call every Sunday, quick chats daily.', 'हर रविवार वीडियो, रोज छोटी बात।', alts(
      ['Sundays long call, weekdays short.', 'रविवार लंबी, वीकडे छोटी।'],
      ['Daily voice notes with mom.', 'माँ को रोज वॉइस नोट।'],
      ['Sunday family call is fixed.', 'रविवार फैमिली कॉल फिक्स।']
    )),
    turn('Person', 'What does your mom cook best?', 'माँ क्या सबसे अच्छा बनाती?', alts(
      ['Favorite festival at home?', 'घर का पसंदीदा त्योहार?'],
      ['Brother visit soon?', 'भाई जल्दी आएगा?'],
      ['Parents proud of your job?', 'माता-पिता को जॉब पर गर्व?']
    )),
    turn('You', 'Her dal tadka is unbeatable.', 'उनकी दाल तड़का बेस्ट।', alts(
      ['Dal tadka and puri on Sundays.', 'रविवार दाल तड़का पूड़ी।'],
      ['She sends pickle jars monthly.', 'हर महीने अचार भेजती।'],
      ['Home food beats restaurants.', 'घर का खाना रेस्टो से बेहतर।']
    )),
    turn('Person', 'I miss my mom’s roti too.', 'मुझे भी माँ की रोटी याद।', alts(
      ['Food connects us all.', 'खाना सब जोड़ता।'],
      ['Should plan a home trip.', 'घर यात्रा प्लान करें।']
    )),
    turn('You', 'Let us both call home tonight.', 'आज रात दोनों घर फोन करें।', alts(
      ['Good idea. I will too.', 'अच्छा आइडिया। मैं भी।'],
      ['Family first, always.', 'परिवार पहले।'],
      ['Thanks for the reminder.', 'याद दिलाने के लिए शुक्रिया।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'hobbies', 'Hobbies', [
    turn('Person', 'What do you do for fun?', 'मज़े के लिए क्या करते?', alts(
      ['Any weekend hobbies?', 'वीकेंड शौक?'],
      ['Creative or sports side?', 'क्रिएटिव या खेल?'],
      ['Started anything new lately?', 'हाल में कुछ नया?']
    )),
    turn('You', 'I sketch city streets and play guitar.', 'शहर की सड़कें स्केच, गिटार बजाता।', alts(
      ['Urban sketching plus guitar.', 'अर्बन स्केचिंग और गिटार।'],
      ['Draw cafes, strum old Bollywood.', 'कैफे बनाता, पुराना बॉलीवुड बजाता।'],
      ['Art book and guitar evenings.', 'आर्ट बुक और शाम गिटार।']
    )),
    turn('Person', 'Guitar is cool. Self taught?', 'गिटार कूल। खुद सीखा?', alts(
      ['Post sketches online?', 'स्केच ऑनलाइन?'],
      ['How long sketching?', 'स्केचिंग कब से?'],
      ['Favorite song to play?', 'कौन सा गाना?']
    )),
    turn('You', 'YouTube lessons, still learning chords.', 'यूट्यूब से, अभी भी कॉर्ड सीख रहा।', alts(
      ['Self taught, slow but fun.', 'खुद, धीमा पर मज़ा।'],
      ['Friend taught basics, rest online.', 'दोस्त ने बेसिक, बाकी ऑनलाइन।'],
      ['Three months in, fingers hurt.', 'तीन महीने, उंगलियाँ दुखती।']
    )),
    turn('Person', 'I paint sometimes. Maybe we jam.', 'कभी पेंट। शायद जाम करें।', alts(
      ['There is an open mic nearby.', 'पास ओपन माइक।'],
      ['Sketch walk this Saturday?', 'शनिवार स्केच वॉक?'],
      ['Share your Insta?', 'इंस्टा?']
    )),
    turn('You', 'Open mic sounds scary but fun.', 'ओपन माइक डरावना पर मज़ेदार।', alts(
      ['Saturday sketch walk works.', 'शनिवार स्केच वॉक ठीक।'],
      ['Handle is RahulSketches.', 'हैंडल RahulSketches।'],
      ['Let us try one song together.', 'एक गाना साथ ट्राय।']
    )),
    turn('Person', 'Bring your sketch pad too.', 'स्केच पैड भी लाना।', alts(
      ['I know a quiet park.', 'शांत पार्क पता।'],
      ['Coffee after?', 'बाद कॉफी?']
    )),
    turn('You', 'Deal. Saturday four PM.', 'ठीक। शनिवार चार बजे।', alts(
      ['Locked. See you then.', 'पक्का। तब मिलते।'],
      ['Excited. Will practice chords.', 'उत्सुक। कॉर्ड प्रैक्टिस।'],
      ['Perfect plan. Thanks.', 'बढ़िया प्लान। शुक्रिया।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'goals', 'Goals', [
    turn('Person', 'What are you working toward this year?', 'इस साल किस तरफ काम?', alts(
      ['Any big goals?', 'बड़े लक्ष्य?'],
      ['Career or personal focus?', 'करियर या निजी?'],
      ['Five year dream?', 'पाँच साल का सपना?']
    )),
    turn('You', 'I want fluent English for client calls.', 'क्लाइंट कॉल के लिए धाराप्रवाह अंग्रेज़ी।', alts(
      ['Fluent English is my top goal.', 'धाराप्रवाह अंग्रेज़ी टॉप गोल।'],
      ['Better English, then a team lead role.', 'पहले अंग्रेज़ी, फिर टीम लीड।'],
      ['Speak confidently with global clients.', 'ग्लोबल क्लाइंट से आत्मविश्वास से।']
    )),
    turn('Person', 'Smart. How are you practicing?', 'समझदारी। प्रैक्टिस कैसे?', alts(
      ['Classes or self study?', 'क्लास या खुद?'],
      ['Deadline for yourself?', 'खुद डेडलाइन?'],
      ['Accountability partner?', 'जवाबदेही पार्टनर?']
    )),
    turn('You', 'Daily app practice plus real conversations.', 'रोज ऐप और असली बातचीत।', alts(
      ['Apps, podcasts, and speaking clubs.', 'ऐप, पॉडकास्ट, स्पीकिंग क्लब।'],
      ['Fifteen minutes daily, no skip.', 'रोज पंद्रह मिनट, स्किप नहीं।'],
      ['This app and office small talk.', 'यह ऐप और ऑफिस छोटी बात।']
    )),
    turn('Person', 'I should join you. My goal is fitness.', 'मुझे भी जुड़ना चाहिए। मेरा फिटनेस।', alts(
      ['Want to run a half marathon.', 'हाफ मैराथन।'],
      ['Need better sleep routine.', 'नींद रूटीन।'],
      ['Saving for a Europe trip.', 'यूरोप ट्रिप बचत।']
    )),
    turn('You', 'We can check in every Friday.', 'हर शुक्रवार चेक-इन करें।', alts(
      ['Friday goals chat works.', 'शुक्रवार गोल बात ठीक।'],
      ['Share wins on WhatsApp.', 'व्हाट्सऐप पर जीत शेयर।'],
      ['Accountability helps both.', 'जवाबदेही दोनों को।']
    )),
    turn('Person', 'Done. No excuses then.', 'ठीक। बहाने नहीं।', alts(
      ['Let us track streaks.', 'स्ट्रीक ट्रैक करें।'],
      ['Small steps count.', 'छोटे कदम गिनती।']
    )),
    turn('You', 'Small steps daily beat big bursts.', 'रोज छोटे कदम बड़े धमाके से बेहतर।', alts(
      ['Agreed. See you Friday.', 'सहमत। शुक्रवार।'],
      ['Motivated now. Thanks.', 'अब प्रेरणा। शुक्रिया।'],
      ['Let us keep each other honest.', 'एक दूसरे को ईमानदार रखें।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'personality', 'Personality', [
    turn('Person', 'How would your friends describe you?', 'दोस्त तुम्हें कैसे बताएँगे?', alts(
      ['Introvert or extrovert?', 'अंतर्मुखी या बहिर्मुखी?'],
      ['Patient or impatient?', 'धैर्यवान या बेचैन?'],
      ['More serious or playful?', 'गंभीर या शरारती?']
    )),
    turn('You', 'They say I am calm and a good listener.', 'कहते हैं शांत और अच्छा सुनने वाला।', alts(
      ['Calm listener, slow to anger.', 'शांत, गुस्सा देर से।'],
      ['Friendly but need alone time.', 'दोस्ताना पर अकेले समय चाहिए।'],
      ['Quiet until I know people well.', 'जान-पहचान तक शांत।']
    )),
    turn('Person', 'I get that. I talk a lot when nervous.', 'समझता। घबराहट में ज़्यादा बोलता।', alts(
      ['I am the opposite, I go silent.', 'उलटा, चुप हो जाती।'],
      ['Listening is a skill.', 'सुनना कौशल।'],
      ['Teams need both types.', 'टीम को दोनों चाहिए।']
    )),
    turn('You', 'Both styles work. I open up slowly.', 'दोनों स्टाइल चलती। मैं धीरे खुलता।', alts(
      ['Takes time, then I joke a lot.', 'समय लगता, फिर मज़ाक।'],
      ['Warm once comfortable.', 'आराम से गर्म।'],
      ['I am loyal more than loud.', 'शोर से ज़्यादा वफादार।']
    )),
    turn('Person', 'What stresses you most?', 'सबसे तनाव क्या?', alts(
      ['What makes you happy fast?', 'जल्दी खुशी कैसे?'],
      ['Handle criticism how?', 'आलोचना कैसे?'],
      ['Biggest strength?', 'सबसे बड़ी ताकत?']
    )),
    turn('You', 'Last minute changes stress me.', 'आखिरी मिनट बदलाव तनाव देते।', alts(
      ['Sudden plan changes.', 'अचानक प्लान बदलाव।'],
      ['Unclear instructions annoy me.', 'अस्पष्ट निर्देश परेशान।'],
      ['Traffic plus late meetings.', 'ट्रैफिक और लेट मीटिंग।']
    )),
    turn('Person', 'Fair. I hate unclear emails.', 'सही। अस्पष्ट ईमेल नफरत।', alts(
      ['We are similar there.', 'वहाँ समान।'],
      ['Planning helps both.', 'प्लानिंग दोनों को।']
    )),
    turn('You', 'Yes, a clear plan keeps me relaxed.', 'हाँ, साफ प्लान शांत रखता।', alts(
      ['Shared calendar saves us.', 'शेयर कैलेंडर बचाता।'],
      ['Good talk. I know myself better.', 'अच्छी बात। खुद समझा।'],
      ['Thanks for asking.', 'पूछने के लिए शुक्रिया।']
    )),
  ]),
]);
