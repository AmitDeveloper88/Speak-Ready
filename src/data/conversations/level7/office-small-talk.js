import { lesson, turn, alts } from '../helpers.js';

const TOPIC = 'office-small-talk';
const TITLE = 'Office Small Talk';

export const officeSmallTalkLessons = Object.fromEntries([
  lesson(TOPIC, TITLE, 'monday-morning', 'Monday Morning', [
    turn('Person', 'Morning. How was your weekend?', 'सुप्रभात। वीकेंड कैसा?', alts(
      ['Monday again, huh?', 'फिर सोमवार?'],
      ['Coffee run?', 'कॉफी रन?']
    )),
    turn('You', 'Pretty good. I caught up on sleep.', 'अच्छा। नींद पूरी।', alts(
      ['Short but relaxing, family dinner.', 'छोटा पर आरामदायक, परिवार डिनर।'],
      ['Busy, wedding in the family.', 'व्यस्त, शादी।'],
      ['Quiet, just books and walks.', 'शांत, किताब सैर।']
    )),
    turn('Person', 'Lucky. I was on call Saturday night.', 'भाग्यशाली। शनिवार रात ऑन कॉल।', alts(
      ['This week looks heavy.', 'हफ्ता भारी।'],
      ['Traffic was bad today.', 'आज ट्रैफिक खराब।']
    )),
    turn('You', 'Rough. Hope tonight stays calm for you.', 'कठिन। आज रात शांत रहे।', alts(
      ['We can swap if alert fires.', 'अलर्ट लगे तो बदल सकते।'],
      ['Any big release this week?', 'इस हफ्ते बड़ी रिलीज़?'],
      ['I owe you a coffee.', 'एक कॉफी देता।']
    )),
    turn('Person', 'Release Wednesday, fingers crossed.', 'बुध रिलीज़, दुआ।', alts(
      ['Standup might run long.', 'स्टैंडअप लंबा।'],
      ['Docs due today.', 'आज डॉक ड्यू।']
    )),
    turn('You', 'I will finish my review before lunch.', 'लंच से पहले रिव्यू खत्म।', alts(
      ['Monday small talk helps mood.', 'सोमवार हल्की बात मूड।'],
      ['Let us grab chai later.', 'बाद चाय।'],
      ['Ready for the sprint.', 'स्प्रिंट तैयार।']
    )),
    turn('Person', 'Chai at four sounds good.', 'चार बजे चाय ठीक।', alts(
      ['See you in standup.', 'स्टैंडअप में।'],
      ['Good luck this week.', 'इस हफ्ते शुभकामनाएँ।']
    )),
    turn('You', 'See you. Have a smooth Monday.', 'मिलते। सुचारु सोमवार।', alts(
      ['Week started friendly.', 'हफ्ता दोस्ताना शुरू।'],
      ['Back to desk.', 'डेस्क पर।'],
      ['Thanks.', 'शुक्रिया।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'coffee-break', 'Coffee Break', [
    turn('Person', 'Long queue at the machine again.', 'मशीन पर फिर लंबी कतार।', alts(
      ['This cappuccino is weak.', 'कैपुचिनो कमज़ोर।'],
      ['Break room crowded?', 'ब्रेक रूम भीड़?']
    )),
    turn('You', 'Yeah. I switched to tea today.', 'हाँ। आज चाय।', alts(
      ['I brought flask from home.', 'घर से फ्लास्क।'],
      ['Machine fixed yet?', 'मशीन ठीक?'],
      ['Five minute break needed.', 'पाँच मिनट ब्रेक चाहिए।']
    )),
    turn('Person', 'Tea is smarter. Less crash later.', 'चाय समझदारी। बाद क्रैश कम।', alts(
      ['Facilities ticket raised.', 'फैसिलिटी टिकट।'],
      ['Did you see the email storm?', 'ईमेल तूफान देखा?']
    )),
    turn('You', 'I skimmed it. Too many replies.', 'झाँका। ज़्यादा जवाब।', alts(
      ['Muting thread now.', 'थ्रेड म्यूट।'],
      ['Anything important I missed?', 'कुछ ज़रूरी छूटा?'],
      ['Coffee break escape helps.', 'कॉफी ब्रेक बचाव।']
    )),
    turn('Person', 'Only calendar change for review.', 'सिर्फ रिव्यू कैलेंडर बदल।', alts(
      ['Back in ten?', 'दस मिनट बाद?'],
      ['Nice weather outside.', 'बाहर मौसम अच्छा।']
    )),
    turn('You', 'Ten is fine. Quick walk maybe.', 'दस ठीक। छोटी सैर शायद।', alts(
      ['Small talk resets focus.', 'हल्की बात फोकस।'],
      ['Thanks for the tea tip.', 'चाय टिप शुक्रिया।'],
      ['See you upstairs.', 'ऊपर मिलते।']
    )),
    turn('Person', 'See you. Do not miss standup.', 'मिलते। स्टैंडअप मत छूटना।', alts(
      ['HR cookies in kitchen.', 'रसोई HR कुकीज़।'],
      ['Grab one.', 'एक लो।']
    )),
    turn('You', 'One cookie then work. Thanks.', 'एक कुकी फिर काम। शुक्रिया।', alts(
      ['Break chats are underrated.', 'ब्रेक बात कम आंकी।'],
      ['Refreshed now.', 'तरोताज़ा।'],
      ['Heading back.', 'वापस जा रहा।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'weekend-plans', 'Weekend Plans', [
    turn('Person', 'Any plans for the long weekend?', 'लंबे वीकेंड प्लान?', alts(
      ['Going out of town?', 'शहर बाहर?'],
      ['Staying in Bangalore?', 'बैंगलोर में?']
    )),
    turn('You', 'Thinking of a short trip to Coorg with friends.', 'कोर्ग छोटी यात्रा दोस्तों संग।', alts(
      ['Family visit in Pune.', 'पुणे परिवार।'],
      ['Mostly rest, maybe a movie.', 'आराम, शायद फिल्म।'],
      ['Hiking if weather stays clear.', 'मौसम साफ रहे तो हाइक।']
    )),
    turn('Person', 'Coorg sounds nice. I am staying local.', 'कोर्ग अच्छा। मैं स्थानीय।', alts(
      ['Kids have exams.', 'बच्चों परीक्षा।'],
      ['Painting my flat balcony.', 'बालकनी पेंट।']
    )),
    turn('You', 'Local projects count as rest too.', 'स्थानीय प्रोजेक्ट भी आराम।', alts(
      ['Send Coorg cafe tips if you know.', 'कोर्ग कैफे टिप।'],
      ['Back Tuesday ready for sprint.', 'मंगल स्प्रिंट तैयार।'],
      ['Hope exams go well for them.', 'परीक्षा अच्छी हो।']
    )),
    turn('Person', 'Try the coffee estate tour. Thanks.', 'कॉफी एस्टेट टूर ट्राय। शुक्रिया।', alts(
      ['Share photos.', 'फोटो शेयर।'],
      ['No work chat on holiday please.', 'छुट्टी काम बात नहीं।']
    )),
    turn('You', 'Deal, no Slack on Saturday.', 'ठीक, शनिवार स्लैक नहीं।', alts(
      ['Weekend talk is light and fun.', 'वीकेंड बात हल्की।'],
      ['Enjoy painting.', 'पेंटिंग एंजॉय।'],
      ['Safe travels to me.', 'मेरी यात्रा सुरक्षित।']
    )),
    turn('Person', 'You too. Disconnect fully.', 'तुम भी। पूरा डिस्कनेक्ट।', alts(
      ['Monday standup as usual.', 'सोमवार स्टैंडअप।'],
      ['Have fun.', 'मज़ा करो।']
    )),
    turn('You', 'Will try. Thanks. See you Tuesday.', 'कोशिश। शुक्रिया। मंगल मिलते।', alts(
      ['Office small talk stays human.', 'ऑफिस बात इंसानी।'],
      ['Excited for Coorg.', 'कोर्ग उत्साह।'],
      ['Bye.', 'अलविदा।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'lunch-conversation', 'Lunch Conversation', [
    turn('Person', 'Mind if I join your table?', 'टेबल जॉइन करूँ?', alts(
      ['This sambar is spicy today.', 'आज सांभर तीखा।'],
      ['Cafeteria or outside?', 'कैफेटेरिया या बाहर?']
    )),
    turn('You', 'Please sit. I ordered the thali.', 'बैठिए। मैंने थाली।', alts(
      ['Sure, room for one more.', 'ठीक, एक और जगह।'],
      ['Outside next time, less crowd.', 'अगली बार बाहर, कम भीड़।'],
      ['Trying the new salad bar.', 'नई सैलड बार।']
    )),
    turn('Person', 'Thali is best value here.', 'थाली यहाँ सबसे वैल्यू।', alts(
      ['Do you cook at home?', 'घर खाना बनाते?'],
      ['Any food allergies?', 'खाना एलर्जी?']
    )),
    turn('You', 'I cook simple dal rice on weekends.', 'वीकेंड सादी दाल चावल।', alts(
      ['No allergies, just less fried.', 'एलर्जी नहीं, कम तला।'],
      ['Roommate orders Swiggy mostly.', 'रूममेट ज़्यादातर स्विगी।'],
      ['Lunch break is sacred.', 'लंच ब्रेक पवित्र।']
    )),
    turn('Person', 'Same. I avoid lunch meetings.', 'वही। लंच मीटिंग नहीं।', alts(
      ['Team used to eat together Fridays.', 'शुक्रवार साथ खाते।'],
      ['New cafe opened downstairs.', 'नीचे नया कैफे।']
    )),
    turn('You', 'Friday team lunch sounds nice to revive.', 'शुक्रवार टीम लंच फिर अच्छा।', alts(
      ['I will suggest in channel.', 'चैनल सुझाव।'],
      ['Lunch chat is better than email.', 'लंच बात ईमेल से बेहतर।'],
      ['Thanks for company today.', 'आज साथ शुक्रिया।']
    )),
    turn('Person', 'Thanks. Back before two PM.', 'शुक्रिया। दो से पहले।', alts(
      ['Meeting at two fifteen.', 'दो पंद्रह मीटिंग।'],
      ['Save me a seat Friday.', 'शुक्रवार सीट बचाना।']
    )),
    turn('You', 'Will do. See you at desk.', 'ठीक। डेस्क पर।', alts(
      ['Relaxed lunch done.', 'आरामदायक लंच।'],
      ['Good food good mood.', 'अच्छा खाना मूड।'],
      ['Afternoon grind starts.', 'दोपहर काम।']
    )),
  ]),
]);
