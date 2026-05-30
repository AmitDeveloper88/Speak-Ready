import { lesson, turn, alts } from '../helpers.js';

const TOPIC = 'congratulations';
const TITLE = 'Congratulations';

export const congratulationsLessons = Object.fromEntries([
  lesson(TOPIC, TITLE, 'birthday', 'Birthday', [
    turn('Person', 'Hey, I heard today is your birthday.', 'सुनो, आज तुम्हारा जन्मदिन?', alts(
      ['Happy birthday by the way.', 'वैसे हैपी बर्थडे।'],
      ['Is it your birthday today?', 'आज जन्मदिन?'],
      ['Cake at office for you?', 'ऑफिस में केक?']
    )),
    turn('You', 'Yes, thank you for remembering.', 'हाँ, याद रखने शुक्रिया।', alts(
      ['Thanks, you remembered.', 'शुक्रिया, याद।'],
      ['Yes, sweet of you.', 'हाँ, प्यारी बात।'],
      ['Thank you, means a lot.', 'धन्यवाद, मायने।']
    )),
    turn('Person', 'Any celebration tonight?', 'आज रात सेलिब्रेशन?', alts(
      ['How old if I may ask?', 'उम्र पूछूँ?'],
      ['Family or friends?', 'परिवार या दोस्त?'],
      ['Wish list?', 'विश लिस्ट?']
    )),
    turn('You', 'Small dinner with close friends only.', 'करीबी दोस्तों संग छोटा डिनर।', alts(
      ['Quiet dinner, no big party.', 'शांत डिनर, बड़ी पार्टी नहीं।'],
      ['Friends at my favorite cafe.', 'पसंदीदा कैफे दोस्त।'],
      ['Family call plus friend dinner.', 'परिवार कॉल और दोस्त डिनर।']
    )),
    turn('Person', 'Sounds perfect. Happy birthday again.', 'परफेक्ट। फिर हैपी बर्थडे।', alts(
      ['Enjoy your day.', 'दिन एंजॉय।'],
      ['Treat yourself.', 'खुद को ट्रीट।']
    )),
    turn('You', 'Thanks. Your message made me smile.', 'शुक्रिया। मैसेज से मुस्कान।', alts(
      ['Smiling because of you.', 'तुम्हारे कारण।'],
      ['Grateful for kind words.', 'अच्छे शब्द आभारी।'],
      ['Birthday feels warmer now.', 'जन्मदिन गर्म लगा।']
    )),
    turn('Person', 'Cupcake tomorrow at desk.', 'कल डेस्क कपकेक।', alts(
      ['Team will sing lightly.', 'टीम हल्का गाएगी।'],
      ['No embarrassing song.', 'शर्मिंदा गाना नहीं।']
    )),
    turn('You', 'That is sweet. Thank you, friend.', 'प्यारा। शुक्रिया, दोस्त।', alts(
      ['Cupcake welcome.', 'कपकेक वेलकम।'],
      ['See you tomorrow.', 'कल मिलते।'],
      ['Best birthday wish today.', 'आज की बेस्ट विश।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'achievement', 'Achievement', [
    turn('Person', 'You passed the certification exam!', 'सर्टिफिकेशन पास!', alts(
      ['Saw your award post.', 'अवार्ड पोस्ट देखी।'],
      ['Top score in the batch?', 'बैच में टॉप?'],
      ['Finished the marathon?', 'मैराथन पूरी?']
    )),
    turn('You', 'Thank you. Still feels unreal.', 'धन्यवाद। अविश्वसनीय लगता।', alts(
      ['Thanks, hard work paid off.', 'शुक्रिया, मेहनत रंग लाई।'],
      ['Grateful for the support.', 'सहयोग आभारी।'],
      ['Yes, I passed on first try.', 'हाँ, पहली कोशिश।']
    )),
    turn('Person', 'You earned it. Proud of you.', 'तुमने कमाया। गर्व।', alts(
      ['Celebrate how?', 'कैसे सेलिब्रेट?'],
      ['What was toughest?', 'सबसे कठिन?'],
      ['Next goal?', 'अगला लक्ष्य?']
    )),
    turn('You', 'Months of early mornings. Worth it now.', 'महीनों सुबह जल्दी। अब लायक।', alts(
      ['Daily study hour before work.', 'काम से पहले एक घंटा।'],
      ['Mock tests every Sunday.', 'रविवार मॉक।'],
      ['Sacrificed Netflix honestly.', 'नेटफ्लिक्स त्याग।']
    )),
    turn('Person', 'Inspires me to start mine.', 'मुझे शुरू करने प्रेरित।', alts(
      ['Share study tips?', 'टिप?'],
      ['Party this weekend?', 'वीकेंड पार्टी?']
    )),
    turn('You', 'Happy to share my notes. No big party though.', 'नोट्स शेयर। बड़ी पार्टी नहीं।', alts(
      ['Tips over chai anytime.', 'चाय पर टिप।'],
      ['Quiet celebration only.', 'शांत सेलिब्रेशन।'],
      ['Your cheer is enough.', 'तुम्हारा उत्साह काफी।']
    )),
    turn('Person', 'Chai tips session then.', 'चाय टिप सेशन।', alts(
      ['You motivate the team.', 'टीम प्रेरित।'],
      ['Congratulations again.', 'फिर बधाई।']
    )),
    turn('You', 'Thanks. Let us chase goals together.', 'शुक्रिया। साथ लक्ष्य पकड़ें।', alts(
      ['Onward to next exam.', 'अगले एग्ज़ाम।'],
      ['Grateful today.', 'आज आभारी।'],
      ['Your words fuel me.', 'शब्द ईंधन।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'promotion', 'Promotion', [
    turn('Person', 'Heard you got promoted. Congrats.', 'सुना प्रमोशन। बधाई।', alts(
      ['New title on email.', 'ईमेल नया टाइटल।'],
      ['Team lead now?', 'टीम लीड?'],
      ['Well deserved news.', 'योग्य खबर।']
    )),
    turn('You', 'Thank you. Excited and a bit nervous.', 'धन्यवाद। उत्सुक, थोड़ा घबराहट।', alts(
      ['Thanks, mixed feelings.', 'शुक्रिया, मिश्रित।'],
      ['Grateful to the team.', 'टीम आभारी।'],
      ['Yes, promotion to senior role.', 'हाँ, सीनियर रोल।']
    )),
    turn('Person', 'Nerves are normal. You will lead well.', 'घबराहट सामान्य। अच्छा लीड।', alts(
      ['When do you start?', 'कब शुरू?'],
      ['Party?', 'पार्टी?'],
      ['More responsibility though.', 'ज़्यादा जिम्मेदारी।']
    )),
    turn('You', 'Next month. Learning from my old manager.', 'अगले महीने। पुराने मैनेजर से सीख।', alts(
      ['Start April first.', 'एक अप्रैल।'],
      ['Shadowing two weeks.', 'दो हफ्ते शैडो।'],
      ['Big shoes to fill.', 'बड़ी जूते भरनी।']
    )),
    turn('Person', 'Team trusts you already.', 'टीम पहले से भरोसा।', alts(
      ['Ask for mentorship.', 'मेंटरशिप माँगो।'],
      ['We will support.', 'सपोर्ट करेंगे।']
    )),
    turn('You', 'Thanks. Your support means a lot.', 'शुक्रिया। सपोर्ट मायने।', alts(
      ['Glad you are on my team.', 'टीम में हो खुशी।'],
      ['Let us grab lunch to celebrate.', 'सेलिब्रेट लंच।'],
      ['Humbled by the role.', 'भूमिका विनम्र।']
    )),
    turn('Person', 'Lunch Friday on me.', 'शुक्रवार लंच मेरा।', alts(
      ['Congrats again.', 'फिर बधाई।'],
      ['Proud colleague here.', 'गर्व सहकर्मी।']
    )),
    turn('You', 'Friday works. Thank you for celebrating me.', 'शुक्रवार ठीक। सेलिब्रेट करने शुक्रिया।', alts(
      ['See you Friday.', 'शुक्रवार।'],
      ['Motivated to deliver.', 'देने प्रेरित।'],
      ['Your kindness noted.', 'दया नोट।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'festivals', 'Festivals', [
    turn('Person', 'Happy Diwali in advance.', 'अग्रिम दीवाली मुबारक।', alts(
      ['Merry Christmas.', 'मेरी क्रिसमस।'],
      ['Eid Mubarak.', 'ईद मुबारक।'],
      ['Happy Holi.', 'हैपी होली।']
    )),
    turn('You', 'Thank you. Same to you and your family.', 'धन्यवाद। आपको और परिवार को भी।', alts(
      ['Wishing you joy too.', 'आपको भी खुशी।'],
      ['Thanks, warm wishes back.', 'शुक्रिया, शुभकामनाएँ वापस।'],
      ['Happy festival to you too.', 'आपको भी त्योहार मुबारक।']
    )),
    turn('Person', 'Going home for the festival?', 'त्योहार घर?', alts(
      ['Lights up at your place?', 'घर लाइट?'],
      ['Sweets ready?', 'मिठाई?'],
      ['Any leave planned?', 'छुट्टी?']
    )),
    turn('You', 'Yes, three days with parents and cousins.', 'हाँ, तीन दिन माता-पिता चचेरे संग।', alts(
      ['Home trip booked.', 'घर यात्रा बुक।'],
      ['Family time, no laptop.', 'परिवार, लैपटॉप नहीं।'],
      ['Village lights and firecrackers.', 'गाँव रोशनी पटाखे।']
    )),
    turn('Person', 'Sounds lovely. Safe travels.', 'प्यारा। सुरक्षित यात्रा।', alts(
      ['Send festival photos.', 'फोटो भेजना।'],
      ['We have office sweets tomorrow.', 'कल ऑफिस मिठाई।']
    )),
    turn('You', 'Will share photos. Enjoy office sweets.', 'फोटो शेयर। ऑफिस मिठाई एंजॉय।', alts(
      ['Photos on the group.', 'ग्रुप फोटो।'],
      ['Save me a laddoo.', 'एक लड्डू बचाना।'],
      ['Festivals feel grounding.', 'त्योहार जड़ जोड़ते।']
    )),
    turn('Person', 'Laddoo saved for you.', 'लड्डू बचाया।', alts(
      ['Festival hugs when back.', 'वापसी गले मिलना।'],
      ['Bright year ahead.', 'उज्ज्वल साल।']
    )),
    turn('You', 'Thank you. Wishing you light and peace.', 'धन्यवाद। रोशनी और शांति की कामना।', alts(
      ['Grateful for your wishes.', 'शुभकामनाएँ आभारी।'],
      ['See you after break.', 'छुट्टी के बाद।'],
      ['Happy festival again.', 'फिर त्योहार मुबारक।']
    )),
  ]),
]);
