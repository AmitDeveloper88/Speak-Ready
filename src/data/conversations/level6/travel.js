import { lesson, turn, alts } from '../helpers.js';

const TOPIC = 'travel';
const TITLE = 'Travel';

export const travelLessons = Object.fromEntries([
  lesson(TOPIC, TITLE, 'airport-check-in', 'Airport Check-in', [
    turn('Person', 'Good morning. Passport and ticket please.', 'सुप्रभात। पासपोर्ट टिकट।', alts(
      ['Checking in for Delhi?', 'दिल्ली चेक-इन?'],
      ['Self bag drop or counter?', 'सेल्फ बैग या काउंटर?']
    )),
    turn('You', 'Here you go. One cabin bag only.', 'लीजिए। सिर्फ केबिन बैग।', alts(
      ['Passport and booking on phone.', 'पासपोर्ट, बुकिंग फोन पर।'],
      ['Window seat if available.', 'खिड़की सीट हो तो।'],
      ['I already checked in online.', 'ऑनलाइन चेक-इन हो चुका।']
    )),
    turn('Person', 'Any checked luggage?', 'चेक्ड सामान?', alts(
      ['Traveling alone?', 'अकेले?'],
      ['Visa for UK?', 'UK वीज़ा?']
    )),
    turn('You', 'One suitcase, twenty three kilos.', 'एक सूटकेस, तेईस किलो।', alts(
      ['No checked bag today.', 'आज चेक्ड नहीं।'],
      ['Extra bag for sports gear.', 'खेल सामान अतिरिक्त।'],
      ['Is weight within limit?', 'वज़न सीमा में?']
    )),
    turn('Person', 'Weight is fine. Tag on suitcase.', 'वज़न ठीक। टैग।', alts(
      ['Gate B seven, boarding ten forty.', 'गेट B सात, बोर्डिंग दस चालीस।'],
      ['Security opens in twenty minutes.', 'सिक्योरिटी बीस मिनट।']
    )),
    turn('You', 'Thank you. Where is security for domestic?', 'धन्यवाद। घरेलू सिक्योरिटी कहाँ?', alts(
      ['Boarding pass printed?', 'बोर्डिंग प्रिंट?'],
      ['Lounge access with this card?', 'लाउंज इस कार्ड से?'],
      ['Any delay on this flight?', 'इस फ्लाइट देरी?']
    )),
    turn('Person', 'Domestic security straight ahead, left lane.', 'घरेलू सीधे, बाएँ लेन।', alts(
      ['On time so far.', 'अभी समय पर।'],
      ['Have a pleasant flight.', 'शुभ उड़ान।']
    )),
    turn('You', 'Thanks. Airport talk makes travel easier.', 'शुक्रिया। हवाई अड्डे की बात यात्रा आसान।', alts(
      ['Heading to gate now.', 'गेट जा रहा।'],
      ['First time flying alone, nervous but fine.', 'पहली बार अकेले, घबराहट पर ठीक।'],
      ['See you on return.', 'वापसी पर।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'hotel-check-in', 'Hotel Check-in', [
    turn('Person', 'Welcome to Grand Stay. Booking name?', 'ग्रैंड स्टे में स्वागत। बुकिंग नाम?', alts(
      ['Good evening.', 'शुभ संध्या।'],
      ['Checking in?', 'चेक-इन?']
    )),
    turn('You', 'Booking under Priya Sharma, two nights.', 'प्रिया शर्मा, दो रात।', alts(
      ['I have a confirmation email.', 'कन्फर्म ईमेल है।'],
      ['MakeMyTrip booking, paid online.', 'MakeMyTrip, ऑनलाइन पे।'],
      ['Late check in, hope room held.', 'लेट चेक-इन, कमरा रखा?']
    )),
    turn('Person', 'Found it. ID please.', 'मिली। आईडी।', alts(
      ['Breakfast from seven.', 'नाश्ता सात से।'],
      ['Non smoking room requested.', 'धूम्रपान मुक्त माँगा।']
    )),
    turn('You', 'Here is Aadhaar and driving licence.', 'आधार और ड्राइविंग लाइसेंस।', alts(
      ['Passport if needed.', 'चाहिए तो पासपोर्ट।'],
      ['Same address as on booking.', 'बुकिंग जैसा पता।'],
      ['Need early breakfast tomorrow?', 'कल जल्दी नाश्ता?']
    )),
    turn('Person', 'Room four oh two, key card ready.', 'कमरा चार सौ दो, की कार्ड।', alts(
      ['WiFi password on card sleeve.', 'WiFi पासवर्ड स्लीव पर।'],
      ['Lift on the right.', 'लिफ्ट दाएँ।']
    )),
    turn('You', 'Is checkout at eleven?', 'चेकआउट ग्यारह?', alts(
      ['Can I get late checkout?', 'लेट चेकआउट?'],
      ['Where is parking validated?', 'पार्किंग वैलिडेशन?'],
      ['Extra towel please.', 'अतिरिक्त तौलिया।']
    )),
    turn('Person', 'Checkout eleven, late till one on request.', 'ग्यारह, अनुरोध पर एक तक।', alts(
      ['Housekeeping call nine.', 'हाउसकीपिंग नौ पर कॉल।'],
      ['Enjoy your stay.', 'ठहराव अच्छा।']
    )),
    turn('You', 'Thank you. Smooth check in.', 'धन्यवाद। सुचारु चेक-इन।', alts(
      ['Hotel English is useful abroad too.', 'होटल अंग्रेज़ी विदेश में भी।'],
      ['Heading to room now.', 'कमरे जा रहा।'],
      ['Good night.', 'शुभ रात्रि।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'asking-directions', 'Asking Directions', [
    turn('Person', 'Hello, need help?', 'मदद चाहिए?', alts(
      ['You look lost.', 'खोए लग रहे।'],
      ['First time in the area?', 'पहली बार इलाके में?']
    )),
    turn('You', 'Excuse me, how do I reach City Mall from here?', 'माफ़ कीजिए, यहाँ से सिटी मॉल?', alts(
      ['Where is the nearest metro station?', 'नज़दीकी मेट्रो?'],
      ['Is the museum walking distance?', 'संग्रहालय पैदल दूरी?'],
      ['Which platform for Jaipur train?', 'जयपुर ट्रेन कौन सा प्लेटफॉर्म?']
    )),
    turn('Person', 'Take auto to metro, pink line two stops.', 'मेट्रो तक ऑटो, पिंक लाइन दो स्टॉप।', alts(
      ['Walk straight, third left.', 'सीधे, तीसरा बाएँ।'],
      ['Bus forty two, ten minutes.', 'बस बयालीस, दस मिनट।']
    )),
    turn('You', 'About how long by auto in traffic?', 'ट्रैफिक में ऑटो कितनी देर?', alts(
      ['Rough fare?', 'अनुमानित किराया?'],
      ['Safer at night this route?', 'रात यह रास्ता सुरक्षित?'],
      ['Any landmark near mall?', 'मॉल पास कोई निशान?']
    )),
    turn('Person', 'Twenty minutes, eighty rupees roughly.', 'बीस मिनट, लगभग अस्सी।', alts(
      ['Big red building opposite mall.', 'मॉल सामने लाल इमारत।'],
      ['Use maps if unsure.', 'अनिश्चित हो तो मैप।']
    )),
    turn('You', 'Perfect. So auto then pink line, got it.', 'बढ़िया। ऑटो फिर पिंक लाइन।', alts(
      ['Can you repeat the stop name?', 'स्टॉप नाम दोहराएँ?'],
      ['I will note it on phone.', 'फोन नोट।'],
      ['Thank you for clear directions.', 'साफ दिशा शुक्रिया।']
    )),
    turn('Person', 'Stop is Rajiv Chowk. You will be fine.', 'स्टॉप राजीव चौक। ठीक रहेंगे।', alts(
      ['Ask shopkeepers if stuck.', 'अटकें तो दुकानदार।'],
      ['Have a good day.', 'अच्छा दिन।']
    )),
    turn('You', 'Thanks again. Asking locals saves time.', 'फिर शुक्रिया। स्थानीय से पूछ समय बचाता।', alts(
      ['Polite excuse me works.', 'विनम्र माफ़ काम करता।'],
      ['Off to the mall now.', 'अब मॉल।'],
      ['Bye.', 'अलविदा।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'train-bus-ticket', 'Train or Bus Ticket', [
    turn('Person', 'Next counter please. Destination?', 'अगला काउंटर। मंज़िल?', alts(
      ['IRCTC ticket or counter?', 'IRCTC या काउंटर?'],
      ['Sleeper or AC?', 'स्लीपर या AC?']
    )),
    turn('You', 'Two tickets to Pune for tomorrow morning.', 'कल सुबह पुणे दो टिकट।', alts(
      ['One AC chair car to Agra.', 'आगरा एक AC चेयर।'],
      ['Bus to Goa tonight, two seats.', 'आज रात गोवा बस दो सीट।'],
      ['Is Tatkal open for this train?', 'इस ट्रेन तत्काल खुला?']
    )),
    turn('Person', 'Shatabdi six fifteen has two seats left.', 'शताब्दी छह पंद्रह, दो सीट।', alts(
      ['Only side upper available.', 'सिर्फ साइड अपर।'],
      ['Bus eleven PM, semi sleeper.', 'बस रात ग्यारह, सेमी स्लीपर।']
    )),
    turn('You', 'Book those two Shatabdi seats please.', 'वे दो शताब्दी सीट बुक।', alts(
      ['Side upper is fine for me.', 'साइड अपर ठीक।'],
      ['Any lower berth instead?', 'निचली शय्या?'],
      ['Include travel insurance?', 'ट्रैवल बीमा शामिल?']
    )),
    turn('Person', 'Total one eight forty. Cash or UPI?', 'कुल एक हज़ार आठ सौ चालीस।', alts(
      ['ID proof for both.', 'दोनों आईडी।'],
      ['SMS ticket to this number.', 'इस नंबर SMS।']
    )),
    turn('You', 'UPI please. Here is Aadhaar copy.', 'UPI। आधार कॉपी।', alts(
      ['Cash, need printed ticket.', 'कैश, प्रिंट टिकट।'],
      ['Send tickets to email too.', 'ईमेल भी।'],
      ['Which platform for train?', 'ट्रेन कौन सा प्लेटफॉर्म?']
    )),
    turn('Person', 'Platform three, arrive thirty minutes early.', 'प्लेटफॉर्म तीन, तीस मिनट पहले।', alts(
      ['Tickets on your phone now.', 'टिकट फोन पर।'],
      ['Meals optional on train.', 'ट्रेन पर भोजन वैकल्पिक।']
    )),
    turn('You', 'Got it. Thanks for quick booking.', 'समझा। जल्दी बुकिंग शुक्रिया।', alts(
      ['Ticket counters need clear English.', 'काउंटर साफ अंग्रेज़ी।'],
      ['See you on platform.', 'प्लेटफॉर्म पर।'],
      ['Have a safe trip to myself.', 'सुरक्षित यात्रा।']
    )),
  ]),
]);
