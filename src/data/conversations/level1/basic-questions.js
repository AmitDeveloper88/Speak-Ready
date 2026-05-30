import { lesson, turn, alts } from '../helpers.js';

const TOPIC = 'basic-questions';
const TITLE = 'Basic Questions';

export const basicQuestionsLessons = Object.fromEntries([
  lesson(TOPIC, TITLE, 'yes-no-questions', 'Yes/No Questions', [
    turn('Person', 'Are you free for lunch today?', 'क्या आज लंच के लिए फ्री हो?', alts(
      ['Do you have time at one PM?', 'दोपहर एक बजे समय है?'],
      ['Can you join us for lunch?', 'लंच में आ सकते हो?'],
      ['Want to eat together today?', 'आज साथ खाना?']
    )),
    turn('You', 'Yes, I am free after twelve thirty.', 'हाँ, साढ़े बारह के बाद फ्री।', alts(
      ['Sure, lunch works.', 'हाँ, लंच ठीक।'],
      ['Yes, count me in.', 'हाँ, मैं भी।'],
      ['I can make time, yes.', 'समय निकाल लूँगा, हाँ।']
    )),
    turn('Person', 'Is the new cafe okay for you?', 'नया कैफे ठीक है?', alts(
      ['Prefer canteen instead?', 'कैंटीन पसंद?'],
      ['Any food allergies?', 'खाने से एलर्जी?'],
      ['Veg or non veg?', 'वेज या नॉन वेज?']
    )),
    turn('You', 'No, the cafe is fine. I am vegetarian.', 'नहीं, कैफे ठीक। मैं शाकाहारी।', alts(
      ['Cafe is good.', 'कैफे अच्छा।'],
      ['No issue. Veg only for me.', 'कोई दिक्कत नहीं। सिर्फ वेज।'],
      ['Yes cafe, and veg menu please.', 'हाँ कैफे, वेज मेनू।']
    )),
    turn('Person', 'Should we invite Ravi too?', 'रवि को भी बुलाएँ?', alts(
      ['Is Ravi in office today?', 'रवि आज ऑफिस में?'],
      ['Anyone else coming?', 'और कोई?'],
      ['Group of four okay?', 'चार लोग ठीक?']
    )),
    turn('You', 'Yes, Ravi would enjoy it.', 'हाँ, रवि को मज़ा आएगा।', alts(
      ['Sure, ping him.', 'ठीक, उसे बुलाओ।'],
      ['Yes please invite him.', 'हाँ बुलाओ।'],
      ['Good idea. He is at his desk.', 'अच्छा आइडिया। डेस्क पर है।']
    )),
    turn('Person', 'Great. See you at one then?', 'बढ़िया। एक बजे?', alts(
      ['Lobby at one?', 'एक बजे लॉबी?'],
      ['I will book a table.', 'टेबल बुक करूँगा।'],
      ['Text you the address.', 'पता मैसेज करूँगा।']
    )),
    turn('You', 'Yes, see you at one. Thanks.', 'हाँ, एक बजे। शुक्रिया।', alts(
      ['Perfect. See you.', 'परफेक्ट। मिलते हैं।'],
      ['One PM lobby. Got it.', 'दोपहर एक लॉबी। ठीक।'],
      ['Looking forward. Bye.', 'इंतज़ार। बाय।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'wh-questions', 'WH Questions', [
    turn('Person', 'You look lost. What are you finding?', 'खोए लग रहे। क्या ढूँढ रहे?', alts(
      ['Can I help? Which floor?', 'मदद? कौन सा फ्लोर?'],
      ['What desk number?', 'डेस्क नंबर क्या?'],
      ['Who are you meeting?', 'किससे मिलना?']
    )),
    turn('You', 'Where is conference room B?', 'कॉन्फ्रेंस रूम B कहाँ?', alts(
      ['Which way to room B?', 'रूम B किस तरफ?'],
      ['I need room B. Any clue?', 'रूम B चाहिए। कोई इशारा?'],
      ['Where do meetings happen here?', 'यहाँ मीटिंग कहाँ?']
    )),
    turn('Person', 'Why B? Interview or review?', 'B क्यों? इंटरव्यू या रिव्यू?', alts(
      ['What time is your slot?', 'स्लॉट किस समय?'],
      ['Who sent you here?', 'किसने भेजा?'],
      ['When did you arrive?', 'कब पहुँचे?']
    )),
    turn('You', 'I have a client demo at three.', 'तीन बजे क्लाइंट डेमो।', alts(
      ['Client meeting, three PM.', 'क्लाइंट मीटिंग, तीन।'],
      ['Demo for a banking app.', 'बैंकिंग ऐप डेमो।'],
      ['Review with the product team.', 'प्रोडक्ट टीम रिव्यू।']
    )),
    turn('Person', 'Take the lift to floor four, turn left.', 'लिफ्ट से चौथी, बाएँ।', alts(
      ['Follow signs to north wing.', 'नॉर्थ विंग साइन फॉलो।'],
      ['Ask reception if stuck.', 'अटको तो रिसेप्शन।'],
      ['Room B is near the pantry.', 'रूम B पैंट्री के पास।']
    )),
    turn('You', 'How long does the walk take?', 'चलने में कितना समय?', alts(
      ['Is it far from here?', 'यहाँ से दूर?'],
      ['Which lift is faster?', 'कौन सी लिफ्ट तेज़?'],
      ['Any shortcut?', 'कोई शॉर्टकट?']
    )),
    turn('Person', 'Two minutes if lift is quick.', 'लिफ्ट जल्दी हो तो दो मिनट।', alts(
      ['Roughly three minutes.', 'लगभग तीन मिनट।'],
      ['Stairs are faster sometimes.', 'कभी सीढ़ियाँ तेज़।'],
      ['You will see a blue door.', 'नीली दरवाज़ा दिखेगा।']
    )),
    turn('You', 'Perfect. Thanks for guiding me.', 'बढ़िया। रास्ता बताने के लिए शुक्रिया।', alts(
      ['Got it. Thank you.', 'समझ गया। धन्यवाद।'],
      ['Helpful. See you around.', 'काम आया। फिर मिलेंगे।'],
      ['I will find it now. Bye.', 'अब मिल जाएगा। बाय।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'personal-questions', 'Personal Questions', [
    turn('Person', 'Where did you grow up?', 'कहाँ बड़े हुए?', alts(
      ['Are you from this city?', 'इस शहर से?'],
      ['Hometown sounds interesting.', 'गृहनगर दिलचस्प लगता।'],
      ['Do you live alone here?', 'यहाँ अकेले?']
    )),
    turn('You', 'I grew up in Lucknow, moved here for work.', 'लखनऊ में बड़ा, काम से यहाँ।', alts(
      ['Lucknow born, Hyderabad now.', 'लखनऊ, अब हैदराबाद।'],
      ['Small town in UP, big city now.', 'UP छोटा शहर, अब बड़ा।'],
      ['Lucknow till college, then job shift.', 'कॉलेज तक लखनऊ, फिर जॉब।']
    )),
    turn('Person', 'Do you live with family or roommates?', 'परिवार या रूममेट?', alts(
      ['How long in this city?', 'इस शहर में कब से?'],
      ['Miss home food?', 'घर का खाना याद?'],
      ['Weekends at home or here?', 'वीकेंड घर या यहाँ?']
    )),
    turn('You', 'I share a flat with two college friends.', 'दो कॉलेज दोस्तों के साथ फ्लैट।', alts(
      ['Flatmates, same company batch.', 'फ्लैटमेट, एक ही बैच।'],
      ['Roommates near Hitech City.', 'हाइटेक सिटी पास रूममेट।'],
      ['Live with friends, saves commute.', 'दोस्तों संग, कम्यूट बचता।']
    )),
    turn('Person', 'What do you usually do on Sundays?', 'रविवार आमतौर पर क्या?', alts(
      ['Any hobbies lately?', 'हाल के शौक?'],
      ['Cook at home or eat out?', 'घर खाना या बाहर?'],
      ['Family calls on weekends?', 'वीकेंड परिवार कॉल?']
    )),
    turn('You', 'Morning run, then video call with parents.', 'सुबह दौड़, फिर माता-पिता वीडियो कॉल।', alts(
      ['Run and cook brunch.', 'दौड़ और ब्रंच बनाना।'],
      ['Lazy Sunday plus family call.', 'आराम और फैमिली कॉल।'],
      ['Explore cafes sometimes.', 'कभी कैफे घूमना।']
    )),
    turn('Person', 'Sounds balanced. I should call mine too.', 'संतुलित लगता। मुझे भी कॉल करनी चाहिए।', alts(
      ['Healthy routine.', 'स्वस्थ रूटीन।'],
      ['Family time matters.', 'परिवार समय मायने।'],
      ['Parents love Sunday calls.', 'माता-पिता को रविवार कॉल पसंद।']
    )),
    turn('You', 'They appreciate even ten minutes.', 'दस मिनट भी कद्र करते हैं।', alts(
      ['Short calls still count.', 'छोटी कॉल भी गिनती।'],
      ['True. Worth the habit.', 'सही। आदत लायक।'],
      ['Try before dinner, works for me.', 'डिनर से पहले, मुझे सूट।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'information-questions', 'Information Questions', [
    turn('Person', 'Need help with the timetable?', 'टाइमटेबल में मदद?', alts(
      ['Looking for platform info?', 'प्लेटफॉर्म जानकारी?'],
      ['Train or bus?', 'ट्रेन या बस?'],
      ['First time at this station?', 'इस स्टेशन पर पहली बार?']
    )),
    turn('You', 'What time does the express train leave?', 'एक्सप्रेस ट्रेन कितने बजे?', alts(
      ['When is the next train to Pune?', 'पुणे की अगली ट्रेन कब?'],
      ['Which platform for Pune express?', 'पुणे एक्सप्रेस कौन सा प्लेटफॉर्म?'],
      ['Is the train on time today?', 'आज ट्रेन समय पर?']
    )),
    turn('Person', 'Platform three, departs at five twenty.', 'प्लेटफॉर्म तीन, पाँच बीस।', alts(
      ['Check the red LED board.', 'लाल LED बोर्ड देखो।'],
      ['Five twenty, slight delay possible.', 'पाँच बीस, थोड़ी देरी हो सकती।'],
      ['Gate opens fifteen minutes before.', 'पंद्रह मिनट पहले गेट।']
    )),
    turn('You', 'How much is a sleeper ticket?', 'स्लीपर टिकट कितना?', alts(
      ['Where can I buy ticket quickly?', 'टिकट जल्दी कहाँ?'],
      ['Is online ticket enough?', 'ऑनलाइन टिकट काफी?'],
      ['Any ATM nearby?', 'पास ATM?']
    )),
    turn('Person', 'Around eight hundred, book on the app.', 'लगभग आठ सौ, ऐप पर बुक।', alts(
      ['App is faster than counter.', 'ऐप काउंटर से तेज़।'],
      ['Counter closes in ten minutes.', 'काउंटर दस मिनट में बंद।'],
      ['Sleeper is usually available.', 'स्लीपर आमतौर मिलता।']
    )),
    turn('You', 'Which app do locals use?', 'लोकल कौन सा ऐप?', alts(
      ['Any WiFi here?', 'यहाँ वाईफाई?'],
      ['Is ID proof needed?', 'आईडी चाहिए?'],
      ['Can I pay by UPI?', 'UPI से?']
    )),
    turn('Person', 'IRCTC or Paytm, both work.', 'IRCTC या Paytm, दोनों।', alts(
      ['Free WiFi near the help desk.', 'हेल्प डेस्क पास वाईफाई।'],
      ['Keep Aadhaar handy.', 'आधार साथ रखो।'],
      ['UPI accepted at the counter too.', 'काउंटर UPI भी।']
    )),
    turn('You', 'Great. Thanks for the details.', 'बढ़िया। डिटेल के लिए शुक्रिया।', alts(
      ['Very helpful. Thank you.', 'बहुत काम आया। धन्यवाद।'],
      ['Got it. Off to platform three.', 'समझ गया। प्लेटफॉर्म तीन।'],
      ['You saved me time. Bye.', 'समय बचाया। बाय।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'choice-questions', 'Choice Questions', [
    turn('Person', 'Tea or coffee this break?', 'ब्रेक में चाय या कॉफी?', alts(
      ['Chai or filter coffee?', 'चाय या फिल्टर?'],
      ['Hot drink? Pick one.', 'गर्म पेय? एक चुनो।'],
      ['What are you having?', 'क्या लोगे?']
    )),
    turn('You', 'Tea for me, less strong please.', 'मुझे चाय, हल्की।', alts(
      ['Chai please, medium sugar.', 'चाय, मीडियम शक्कर।'],
      ['Tea with ginger if possible.', 'अदरक वाली चाय।'],
      ['I will go with masala chai.', 'मसाला चाय।']
    )),
    turn('Person', 'Snacks? Samosa or sandwich?', 'स्नैक? समोसा या सैंडविच?', alts(
      ['Veg puff or biscuit?', 'वेज पफ या बिस्कुट?'],
      ['Eat here or desk?', 'यहीं या डेस्क?'],
      ['Split something?', 'कुछ बाँटें?']
    )),
    turn('You', 'Samosa sounds better, thanks.', 'समोसा बेहतर, शुक्रिया।', alts(
      ['One samosa is enough.', 'एक समोसा काफी।'],
      ['Samosa, not too oily.', 'समोसा, ज़्यादा तेल नहीं।'],
      ['Let us share a samosa plate.', 'समोसा प्लेट शेयर।']
    )),
    turn('Person', 'Pay together or separate?', 'साथ पे या अलग?', alts(
      ['Cash or UPI?', 'कैश या UPI?'],
      ['Your treat or mine?', 'तुम्हारा या मेरा?'],
      ['Bill is small anyway.', 'बिल छोटा ही।']
    )),
    turn('You', 'Separate is fine, I will scan.', 'अलग ठीक, मैं स्कैन करूँगा।', alts(
      ['Split evenly works.', 'बराबर बाँट लें।'],
      ['I will pay mine by UPI.', 'अपना UPI से।'],
      ['You pay, I will send back.', 'तुम दो, मैं भेज दूँगा।']
    )),
    turn('Person', 'Cool. Window seat or aisle?', 'ठीक। खिड़की या गलियारा?', alts(
      ['Back to desk or short walk?', 'डेस्क या छोटी सैर?'],
      ['Five minute break enough?', 'पाँच मिनट काफी?'],
      ['Join the team call after?', 'बाद टीम कॉल?']
    )),
    turn('You', 'Window seat, I like the view.', 'खिड़की, नज़ारा पसंद।', alts(
      ['Window please.', 'खिड़की चाहिए।'],
      ['Aisle if window taken.', 'खिड़की नहीं तो गलियारा।'],
      ['Either is fine, window first.', 'कोई भी, पहले खिड़की।']
    )),
  ]),
]);
