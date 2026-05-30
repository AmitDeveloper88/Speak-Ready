import { lesson, turn, alts } from '../helpers.js';

const TOPIC = 'emergencies';
const TITLE = 'Emergencies';

export const emergenciesLessons = Object.fromEntries([
  lesson(TOPIC, TITLE, 'calling-ambulance', 'Calling an Ambulance', [
    turn('Person', 'Emergency one zero eight, what is your emergency?', 'आपात एक शून्य आठ, क्या आपात?', alts(
      ['Ambulance dispatch.', 'एम्बुलेंस डिस्पैच।'],
      ['Medical emergency line.', 'मेडिकल आपात लाइन।']
    )),
    turn('You', 'My father collapsed at home. He is not responding well.', 'पिता घर गिरे। ठीक जवाब नहीं।', alts(
      ['Road accident, person bleeding.', 'सड़क दुर्घटना, खून।'],
      ['Chest pain, sweating, need ambulance.', 'छाती दर्द पसीना, एम्बुलेंस।'],
      ['Child fell from stairs, head injury.', 'बच्चा सीढ़ी से, सिर चोट।']
    )),
    turn('Person', 'Address please, nearest landmark.', 'पता, नज़दीकी निशान।', alts(
      ['Stay on line.', 'लाइन पर रहें।'],
      ['Is he breathing?', 'साँस ले रहे?']
    )),
    turn('You', 'Flat B twelve, Green View Society, Sector twenty two, Noida.', 'फ्लैट B बारह, ग्रीन व्यू, सेक्टर बाईस नोएडा।', alts(
      ['Near City Hospital gate.', 'सिटी हॉस्पिटल गेट पास।'],
      ['Landmark is blue water tank.', 'नीला पानी टैंक।'],
      ['Gate security will guide ambulance.', 'गेट सिक्योरिटी मार्गदर्शन।']
    )),
    turn('Person', 'Ambulance dispatched, eight minutes. Start CPR if trained.', 'एम्बुलेंस आठ मिनट। CPR यदि जानते।', alts(
      ['Keep phone free.', 'फोन खाली।'],
      ['Do not move if neck injury.', 'गर्दन चोट हो तो न हिलाएँ।']
    )),
    turn('You', 'He is breathing shallow. I will wait downstairs.', 'उथली साँस। नीचे इंतजार।', alts(
      ['Neighbor doctor coming.', 'पड़ोसी डॉक्टर आ रहे।'],
      ['Lift to basement for stretcher.', 'स्ट्रेचर बेसमेंट लिफ्ट।'],
      ['Thank you, please hurry.', 'जल्दी शुक्रिया।']
    )),
    turn('Person', 'Team is two minutes away. Help is coming.', 'टीम दो मिनट। मदद आ रही।', alts(
      ['Police notified if needed.', 'ज़रूरत पुलिस।'],
      ['Stay calm.', 'शांत रहें।']
    )),
    turn('You', 'I hear sirens. Thank you.', 'सायरन सुनाई। धन्यवाद।', alts(
      ['Emergency English must be short and clear.', 'आपात अंग्रेज़ी छोटी साफ।'],
      ['Address saved on fridge now.', 'पता फ्रिज पर सेव।'],
      ['Ending call to receive them.', 'कॉल काट मिलने।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'reporting-police', 'Reporting to Police', [
    turn('Person', 'Police helpline, state your location.', 'पुलिस हेल्पलाइन, स्थान।', alts(
      ['Control room.', 'कंट्रोल रूम।'],
      ['Cyber crime desk.', 'साइबर अपराध।']
    )),
    turn('You', 'Someone snatched my phone near the metro exit.', 'मेट्रो निकास पर फोन छीना।', alts(
      ['Burglary at my flat this afternoon.', 'दोपहर फ्लैट चोरी।'],
      ['Harassment on bus, need to report.', 'बस पर उत्पीड़न, रिपोर्ट।'],
      ['Lost laptop at cafe, possible theft.', 'कैफे लैपटॉप खोया, चोरी संभव।']
    )),
    turn('Person', 'Time and description of person?', 'समय व्यक्ति विवरण?', alts(
      ['Are you safe now?', 'अब सुरक्षित?'],
      ['Any witness?', 'गवाह?']
    )),
    turn('You', 'Ten minutes ago, tall man, black helmet, red jacket.', 'दस मिनट पहले, लंबा, काला हेलमेट, लाल जैकेट।', alts(
      ['Ran toward auto stand.', 'ऑटो स्टैंड की ओर।'],
      ['I am safe at shop with staff.', 'दुकान स्टाफ संग सुरक्षित।'],
      ['CCTV might be on the pole.', 'खंभे CCTV।']
    )),
    turn('Person', 'Patrol sent. Come to sector fourteen post for statement.', 'पेट्रोल। सेक्टर चौदह थाने बयान।', alts(
      ['Block SIM and UPI now.', 'SIM UPI ब्लॉक।'],
      ['FIR can be filed online too.', 'FIR ऑनलाइन भी।']
    )),
    turn('You', 'I will block SIM now. I can come in thirty minutes.', 'अभी SIM ब्लॉक। तीस मिनट में आऊँगा।', alts(
      ['Need copy of FIR for insurance.', 'बीमा FIR कॉपी।'],
      ['Phone IMEI noted.', 'IMEI नोट।'],
      ['Thank you for quick response.', 'जल्दी जवाब शुक्रिया।']
    )),
    turn('Person', 'Officer will meet you at post. Bring ID.', 'अधिकारी थाने। आईडी लाएँ।', alts(
      ['Do not chase suspect.', 'संदिग्ध न पीछा।'],
      ['Stay reachable.', 'संपर्क में।']
    )),
    turn('You', 'Understood. Heading to station with friend.', 'समझा। दोस्त संग थाना।', alts(
      ['Police report needs facts not panic.', 'रिपोर्ट तथ्य न घबराहट।'],
      ['Glad I called immediately.', 'तुरंत कॉल अच्छा।'],
      ['Goodbye.', 'अलविदा।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'lost-wallet-phone', 'Lost Wallet or Phone', [
    turn('Person', 'Mall help desk, how can we assist?', 'मॉल हेल्प डेस्क।', alts(
      ['Metro lost and found.', 'मेट्रो लॉस्ट फाउंड।'],
      ['Airport information.', 'एयरपोर्ट सूचना।']
    )),
    turn('You', 'I think I lost my wallet in the food court ten minutes ago.', 'खाना कोर्ट में दस मिनट पहले बटुआ खोया।', alts(
      ['Phone left in auto, need help calling.', 'ऑटो में फोन, कॉल मदद।'],
      ['Passport missing after security check.', 'सिक्योरिटी बाद पासपोर्ट गायब।'],
      ['Bag at restaurant, came back empty.', 'रेस्टोरेंट बैग, खाली।']
    )),
    turn('Person', 'Describe wallet color and cards inside.', 'बटुआ रंग कार्ड।', alts(
      ['Check pockets again?', 'जेब फिर?'],
      ['Any name on ID?', 'आईडी नाम?']
    )),
    turn('You', 'Brown leather, HDFC debit, Aadhaar, small photo.', 'भूरा चमड़ा, HDFC, आधार, फोटो।', alts(
      ['Reward if returned.', 'लौटाने इनाम।'],
      ['Need to block cards urgently.', 'कार्ड जल्दी ब्लॉक।'],
      ['Last used card at juice shop.', 'जूस दुकान अंतिम कार्ड।']
    )),
    turn('Person', 'No wallet yet, we will call if found.', 'अभी नहीं, मिले तो कॉल।', alts(
      ['CCTV checking food court.', 'CCTV खाना कोर्ट।'],
      ['File note with your number.', 'नंबर नोट।']
    )),
    turn('You', 'Please note nine eight seven six five four three two one zero.', 'नंबर नोट करें।', alts(
      ['I will block cards from bank app.', 'ऐप से कार्ड ब्लॉक।'],
      ['Can you announce on PA?', 'PA घोषणा?'],
      ['Thank you for checking CCTV.', 'CCTV शुक्रिया।']
    )),
    turn('Person', 'Announcement done. Stay reachable.', 'घोषणा। संपर्क में।', alts(
      ['Lost found log updated.', 'लॉग अपडेट।'],
      ['Hope you recover it.', 'वापसी आशा।']
    )),
    turn('You', 'I will wait near the desk twenty minutes.', 'डेस्क पास बीस मिनट।', alts(
      ['Lost item talk should be specific.', 'खोया बात विशिष्ट।'],
      ['Lesson learned to carry less cash.', 'कम नकद सबक।'],
      ['Thanks again.', 'फिर शुक्रिया।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'road-accident-help', 'Road Accident Help', [
    turn('Person', 'Hello, are you okay?', 'ठीक हैं?', alts(
      ['I saw the crash.', 'टक्कर देखी।'],
      ['Ambulance called?', 'एम्बुलेंस बुलाई?']
    )),
    turn('You', 'Please call ambulance. Rider is hurt but awake.', 'एम्बुलेंस बुलाइए। राइडर घायल पर जागा।', alts(
      ['Two cars hit, smoke from one.', 'दो कार, एक से धुआँ।'],
      ['Pedestrian down near crossing.', 'क्रॉसिंग पैदल गिरा।'],
      ['Need police too, argument starting.', 'पुलिस भी, बहस।']
    )),
    turn('Person', 'I am dialing one zero eight now.', 'अभी एक शून्य आठ डायल।', alts(
      ['Keep traffic away.', 'ट्रैफिक दूर।'],
      ['Do not remove helmet.', 'हेलमेट न उतारें।']
    )),
    turn('You', 'I will direct cars to slow down.', 'गाड़ियाँ धीमी कराऊँगा।', alts(
      ['His leg looks twisted.', 'पैर मुड़ा।'],
      ['Speaking his name keeps him calm.', 'नाम बोलना शांत।'],
      ['Any first aid kit here?', 'फर्स्ट ऐड?']
    )),
    turn('Person', 'Ambulance three minutes. Police on way.', 'एम्बुलेंस तीन मिनट। पुलिस रास्ते।', alts(
      ['You did the right thing.', 'सही किया।'],
      ['Share witness number later.', 'बाद गवाह नंबर।']
    )),
    turn('You', 'Here is my number for statement.', 'बयान के लिए मेरा नंबर।', alts(
      ['I can wait till police arrive.', 'पुलिस तक रुकूँगा।'],
      ['Family of rider notified.', 'परिवार सूचित।'],
      ['Glad you stopped to help.', 'रुककर मदद अच्छी।']
    )),
    turn('Person', 'Sirens close. Step back for space.', 'सायरन पास। पीछे हटें।', alts(
      ['Medics will take over.', 'मेडिकल संभालेंगे।'],
      ['Thank you for helping.', 'मदद शुक्रिया।']
    )),
    turn('You', 'Stepping back now. Hope he recovers.', 'पीछे हट रहा। स्वस्थ हो।', alts(
      ['Road help needs calm commands.', 'सड़क मदद शांत आदेश।'],
      ['Will give statement to police.', 'पुलिस बयान दूँगा।'],
      ['Take care everyone.', 'सब संभाल।']
    )),
  ]),
]);
