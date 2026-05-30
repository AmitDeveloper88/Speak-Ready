import { lesson, turn, alts } from '../helpers.js';

const TOPIC = 'ordering-food';
const TITLE = 'Ordering Food';

export const orderingFoodLessons = Object.fromEntries([
  lesson(TOPIC, TITLE, 'at-restaurant', 'At a Restaurant', [
    turn('Person', 'Welcome. Table for two?', 'स्वागत। दो लोगों की टेबल?', alts(
      ['Good evening. How many?', 'शुभ संध्या। कितने?'],
      ['Hi, dine in or takeaway?', 'अंदर या पार्सल?'],
      ['Please follow me.', 'मेरे पीछे आइए।']
    )),
    turn('You', 'Yes, table for two please. Non smoking area.', 'हाँ, दो लोग, धूम्रपान मुक्त जगह।', alts(
      ['Two people, inside please.', 'दो, अंदर।'],
      ['Dine in for two, window if possible.', 'दो, खिड़की हो तो।'],
      ['Table for two, we have a reservation under Ravi.', 'दो, रवि नाम रिज़र्व।']
    )),
    turn('Person', 'Here is the menu. Water?', 'मेन्यू। पानी?', alts(
      ['This way please.', 'इधर।'],
      ['Today special is thali.', 'आज थाली स्पेशल।']
    )),
    turn('You', 'Water please. We will need five minutes to decide.', 'पानी। पाँच मिनट चुनने दीजिए।', alts(
      ['Just water first, thanks.', 'पहले पानी।'],
      ['Can we get two menus?', 'दो मेन्यू?'],
      ['We are ready to order soon.', 'जल्द ऑर्डर।']
    )),
    turn('Person', 'Take your time. I will be back.', 'आराम से। वापस आऊँगा।', alts(
      ['Call me when ready.', 'तैयार हो तो बुलाइए।'],
      ['Soup of the day is tomato.', 'आज टमाटर सूप।']
    )),
    turn('You', 'We would like one paneer butter masala and two butter naan.', 'एक पनीर बटर मसाला, दो बटर नान।', alts(
      ['Two dal tadka and four roti please.', 'दो दाल तड़का, चार रोटी।'],
      ['One veg biryani, less spicy.', 'एक वेज बिरयानी, कम मसाला।'],
      ['Same thali for both, please.', 'दोनों को थाली।']
    )),
    turn('Person', 'Anything to drink?', 'पीने में?', alts(
      ['Less oil okay?', 'कम तेल?'],
      ['Twenty minutes for food.', 'खाना बीस मिनट।']
    )),
    turn('You', 'Two sweet lassi please. That is all for now.', 'दो मीठी लस्सी। अभी बस।', alts(
      ['No drinks, thanks.', 'पीना नहीं।'],
      ['Pack leftover if any.', 'बचे तो पैक।'],
      ['Looking forward to it.', 'इंतज़ार।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'food-delivery', 'Food Delivery', [
    turn('Person', 'Hello, your Swiggy order is outside.', 'नमस्ते, स्विगी ऑर्डर बाहर।', alts(
      ['Zomato delivery here.', 'ज़ोमैटो डिलीवरी।'],
      ['Food arrived, sir.', 'खाना पहुँचा।']
    )),
    turn('You', 'Thanks. Which flat is it for, B twelve?', 'शुक्रिया। कौन सा फ्लैट, B बारह?', alts(
      ['Hi, is this order for Sharma?', 'शर्मा का ऑर्डर?'],
      ['Please leave it at the gate.', 'गेट पर रख दीजिए।'],
      ['I am coming down now.', 'अभी नीचे आ रहा।']
    )),
    turn('Person', 'Yes, B twelve. OTP is four seven two one.', 'हाँ B बारह। OTP चार सात दो एक।', alts(
      ['Sharma flat, correct.', 'शर्मा फ्लैट।'],
      ['Share OTP please.', 'OTP बताइए।']
    )),
    turn('You', 'OTP is four seven two one. Please keep the bag upright.', 'OTP चार सात दो एक। बैग सीधा।', alts(
      ['Here is OTP. Handle soup carefully.', 'OTP। सूप सावधान।'],
      ['Verified. Thank you.', 'वेरीफाई। धन्यवाद।']
    )),
    turn('Person', 'Paid online already. Enjoy.', 'ऑनलाइन पे हो चुका।', alts(
      ['No cash needed.', 'कैश नहीं।'],
      ['Rating helps us.', 'रेटिंग मदद।']
    )),
    turn('You', 'Items look fine. I will rate five stars.', 'सब ठीक। पाँच स्टार दूँगा।', alts(
      ['One box feels light, but okay.', 'एक हल्का, पर ठीक।'],
      ['Thanks for quick delivery.', 'जल्दी डिलीवरी शुक्रिया।'],
      ['Have a safe ride.', 'सुरक्षित राइड।']
    )),
    turn('Person', 'Thank you. Good night.', 'धन्यवाद। शुभ रात्रि।', alts(
      ['Call support if issue.', 'समस्या हो तो सपोर्ट।'],
      ['Next order ten percent off.', 'अगला दस प्रतिशत।']
    )),
    turn('You', 'Good night. See you next order.', 'शुभ रात्रि। अगले ऑर्डर।', alts(
      ['App delivery is convenient.', 'ऐप सुविधा।'],
      ['Dinner saved tonight.', 'आज रात बची।'],
      ['Bye.', 'अलविदा।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'customizing-order', 'Customizing Your Order', [
    turn('Person', 'What would you like in your sandwich?', 'सैंडविच में क्या?', alts(
      ['Customize your bowl?', 'बाउल कस्टम?'],
      ['Spice level?', 'मसाला स्तर?']
    )),
    turn('You', 'No onion please, and extra green chutney on the side.', 'प्याज़ नहीं, हरी चटनी अलग।', alts(
      ['Less oil, no cheese.', 'कम तेल, चीज़ नहीं।'],
      ['Medium spicy, add extra veggies.', 'मीडियम मसाला, ज़्यादा सब्ज़ी।'],
      ['Jain style, no root vegetables.', 'जैन, कंद मूल नहीं।']
    )),
    turn('Person', 'Sure. Anything else to remove?', 'ठीक। और हटाएँ?', alts(
      ['Garlic okay?', 'लहसुन ठीक?'],
      ['We can do mild.', 'हल्का कर सकते।']
    )),
    turn('You', 'Please make it less salty if possible.', 'हो सके तो कम नमक।', alts(
      ['Pack chutney separately.', 'चटनी अलग पैक।'],
      ['Warm the bread lightly.', 'रोटी हल्की गर्म।'],
      ['No mayo, thanks.', 'मेयो नहीं।']
    )),
    turn('Person', 'Noted on the ticket.', 'टिकट पर नोट।', alts(
      ['Chef will see it.', 'शेफ देखेगा।'],
      ['Five extra minutes.', 'पाँच मिनट और।']
    )),
    turn('You', 'Perfect. How long for takeaway?', 'बढ़िया। पार्सल कितनी देर?', alts(
      ['Dine in still okay?', 'अंदर भी ठीक?'],
      ['Bill estimate?', 'अनुमानित बिल?']
    )),
    turn('Person', 'Ten minutes at the counter.', 'काउंटर पर दस मिनट।', alts(
      ['We will call your name.', 'नाम बुलाएँगे।'],
      ['Pay at pickup.', 'लेते समय पे।']
    )),
    turn('You', 'Great. I will wait near the counter.', 'ठीक। काउंटर पास इंतज़ार।', alts(
      ['Custom orders help a lot.', 'कस्टम मदद।'],
      ['Thanks for accommodating.', 'समायोजन शुक्रिया।'],
      ['See you at pickup.', 'पिकअप पर।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'paying-bill', 'Paying the Bill', [
    turn('Person', 'Here is your bill, sir.', 'आपका बिल।', alts(
      ['Shall I bring the bill?', 'बिल लाऊँ?'],
      ['Cash or card?', 'कैश या कार्ड?']
    )),
    turn('You', 'Thank you. Can we split the bill two ways?', 'धन्यवाद। बिल दो हिस्से?', alts(
      ['Bill please. We pay together.', 'बिल, साथ पे।'],
      ['Is service charge included?', 'सर्विस चार्ज शामिल?'],
      ['Any card offer today?', 'आज कार्ड ऑफर?']
    )),
    turn('Person', 'Yes, split is fine. UPI also works.', 'हाँ, विभाजन ठीक। UPI भी।', alts(
      ['Service ten percent included.', 'सर्विस दस प्रतिशत।'],
      ['Pay at the desk.', 'डेस्क पर।']
    )),
    turn('You', 'I will pay my half by UPI. What is the merchant name?', 'आधा UPI। मर्चेंट नाम?', alts(
      ['Card for full amount.', 'पूरा कार्ड।'],
      ['Cash only for me.', 'सिर्फ कैश।'],
      ['Send QR on table stand.', 'टेबल QR।']
    )),
    turn('Person', 'Scan Cafe Spice Delhi. Total twelve forty.', 'कैफे स्पाइस स्कैन। कुल बारह सौ चालीस।', alts(
      ['Twelve forty each if split.', 'विभाजन पर अलग।'],
      ['Receipt after payment.', 'पे के बाद रसीद।']
    )),
    turn('You', 'Paid. Please share the tax invoice.', 'पे हो गया। टैक्स इनवॉइस।', alts(
      ['Payment done, check your app.', 'ऐप चेक।'],
      ['Need GST number on bill.', 'GST नंबर चाहिए।'],
      ['Keep the change as tip.', 'बाकी टिप।']
    )),
    turn('Person', 'Invoice printed. Thank you for visiting.', 'इनवॉइस। आने का धन्यवाद।', alts(
      ['Tip appreciated.', 'टिप कद्र।'],
      ['Come again.', 'फिर आइए।']
    )),
    turn('You', 'Food was great. Good night.', 'खाना शानदार। शुभ रात्रि।', alts(
      ['Smooth payment, thanks.', 'आसान पे, शुक्रिया।'],
      ['Split bill saved hassle.', 'विभाजन आसान।'],
      ['See you soon.', 'जल्द फिर।']
    )),
  ]),
]);
