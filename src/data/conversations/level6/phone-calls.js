import { lesson, turn, alts } from '../helpers.js';

const TOPIC = 'phone-calls';
const TITLE = 'Phone Calls';

export const phoneCallsLessons = Object.fromEntries([
  lesson(TOPIC, TITLE, 'booking-appointment', 'Booking an Appointment', [
    turn('Person', 'Good afternoon, City Dental Clinic.', 'नमस्कार, सिटी डेंटल क्लिनिक।', alts(
      ['Dr. Mehta office, how may I help?', 'डॉ. मेहता कार्यालय।'],
      ['Salon Glow speaking.', 'सैलून ग्लो बोल रहे।']
    )),
    turn('You', 'Hi, I want to book a dental checkup this week.', 'नमस्ते, इस हफ्ते डेंटल चेकअप बुक।', alts(
      ['I need a haircut appointment.', 'हेयरकट अपॉइंटमेंट।'],
      ['Can I schedule a visa medical?', 'वीज़ा मेडिकल शेड्यूल?'],
      ['Looking for evening slot if possible.', 'शाम का स्लॉट हो तो।']
    )),
    turn('Person', 'Thursday four PM or Friday eleven AM?', 'गुरुवार चार या शुक्रवार ग्यारह?', alts(
      ['Morning slots open Tuesday.', 'मंगल सुबह खुला।'],
      ['Doctor available Wednesday only.', 'बुध केवल डॉक्टर।']
    )),
    turn('You', 'Thursday four PM works for me.', 'गुरुवार चार ठीक।', alts(
      ['Friday eleven please.', 'शुक्रवार ग्यारह।'],
      ['Any later than four on Thursday?', 'गुरुवार चार के बाद?'],
      ['First available is fine.', 'पहला खुला ठीक।']
    )),
    turn('Person', 'Name and mobile number please.', 'नाम मोबाइल।', alts(
      ['New patient or follow up?', 'नया या फॉलो अप?'],
      ['Carry old reports.', 'पुरानी रिपोर्ट लाएँ।']
    )),
    turn('You', 'Amit Verma, nine eight seven six five four three two one zero.', 'अमित वर्मा, नंबर।', alts(
      ['Same number on WhatsApp.', 'व्हाट्सऐप यही।'],
      ['Please SMS confirmation.', 'SMS कन्फर्म।'],
      ['I will reach ten minutes early.', 'दस मिनट पहले पहुँचूँगा।']
    )),
    turn('Person', 'Booked. SMS sent. Please arrive ten minutes early.', 'बुक। SMS। दस मिनट पहले।', alts(
      ['Cancel four hours before.', 'चार घंटे पहले रद्द।'],
      ['Consultation fee five hundred.', 'फीस पाँच सौ।']
    )),
    turn('You', 'Thank you. See you Thursday.', 'धन्यवाद। गुरुवार मिलते।', alts(
      ['Phone booking is handy.', 'फोन बुकिंग सुविधा।'],
      ['Clear slots help planning.', 'साफ स्लॉट योजना।'],
      ['Goodbye.', 'अलविदा।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'wrong-number', 'Wrong Number', [
    turn('Person', 'Hello?', 'हैलो?', alts(
      ['Yes, speaking.', 'जी, बोलिए।'],
      ['Who is this?', 'कौन?']
    )),
    turn('You', 'Sorry, is this Rahul from the flat society?', 'माफ़, यह सोसाइटी वाले राहुल?', alts(
      ['I was trying to reach pizza delivery.', 'पिज़्ज़ा डिलीवरी बुलाना था।'],
      ['Looking for HR at TechNova.', 'TechNova HR।'],
      ['Wrong number maybe, sorry.', 'गलत नंबर शायद।']
    )),
    turn('Person', 'No, this is Kavita. Wrong number.', 'नहीं, कविता। गलत नंबर।', alts(
      ['You have the wrong person.', 'गलत व्यक्ति।'],
      ['No Rahul here.', 'राहुल यहाँ नहीं।']
    )),
    turn('You', 'Oh sorry to disturb you. Have a good day.', 'अरे माफ़ परेशानी। अच्छा दिन।', alts(
      ['My mistake, wrong digits.', 'मेरी गलती, अंक।'],
      ['Sorry again, bye.', 'फिर माफ़, अलविदा।'],
      ['I will check the number.', 'नंबर जाँचूँगा।']
    )),
    turn('Person', 'No problem. Happens all the time.', 'कोई बात नहीं। होता रहता।', alts(
      ['Double check next time.', 'अगली बार दोबारा देखें।'],
      ['Take care.', 'संभाल।']
    )),
    turn('You', 'Thanks for being polite.', 'विनम्रता शुक्रिया।', alts(
      ['I hate wrong calls too.', 'मुझे भी गलत कॉल पसंद नहीं।'],
      ['Will dial again carefully.', 'सावधानी से फिर डायल।'],
      ['Bye.', 'अलविदा।']
    )),
    turn('Person', 'Bye.', 'अलविदा।', alts(
      ['All good.', 'सब ठीक।'],
      ['Hang up now.', 'रख लीजिए।']
    )),
    turn('You', 'Ending call now. Sorry once more.', 'कॉल काट रहा। फिर माफ़।', alts(
      ['Wrong number needs quick sorry.', 'गलत नंबर जल्दी माफ़।'],
      ['Short call best.', 'छोटी कॉल बेहतर।'],
      ['Done.', 'हो गया।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'leaving-message', 'Leaving a Message', [
    turn('Person', 'He is in a meeting. Can I take a message?', 'मीटिंग में। संदेश लूँ?', alts(
      ['Not available. Message?', 'उपलब्ध नहीं। संदेश?'],
      ['Voicemail after the beep.', 'बीप के बाद वॉइसमेल।']
    )),
    turn('You', 'Please tell him Amit called about the invoice.', 'अमित ने इनवॉइस पर कॉल कहना।', alts(
      ['Say Priya needs sign off by five.', 'प्रिया को पाँच बजे तक साइन चाहिए।'],
      ['Courier waiting downstairs.', 'कूरियर नीचे।'],
      ['Meeting reschedule to Monday.', 'मीटिंग सोमवार।']
    )),
    turn('Person', 'Invoice from which client?', 'किस क्लाइंट इनवॉइस?', alts(
      ['Your full name again?', 'पूरा नाम?'],
      ['Callback number?', 'वापस कॉल नंबर?']
    )),
    turn('You', 'BluePeak invoice, March. He has my number.', 'ब्लूपीक मार्च। मेरा नंबर उसके पास।', alts(
      ['He can call me before six.', 'छह से पहले कॉल करे।'],
      ['Urgent but not emergency.', 'ज़रूरी, आपात नहीं।'],
      ['Email also sent.', 'ईमेल भी भेजा।']
    )),
    turn('Person', 'I will pass the message immediately.', 'तुरंत संदेश दूँगा।', alts(
      ['He checks notes after meetings.', 'मीटिंग बाद नोट।'],
      ['Anything else?', 'और कुछ?']
    )),
    turn('You', 'Just ask him to reply today if possible.', 'आज जवाब हो तो कहना।', alts(
      ['No rush after six.', 'छह के बाद जल्दी नहीं।'],
      ['Thanks for writing it down.', 'लिखने शुक्रिया।'],
      ['Appreciate your help.', 'मदद कद्र।']
    )),
    turn('Person', 'Noted. I will remind him.', 'नोट। याद दिलाऊँगा।', alts(
      ['Have a good afternoon.', 'शुभ दोपहर।'],
      ['Call main line anytime.', 'मुख्य लाइन कभी।']
    )),
    turn('You', 'Thank you. Good afternoon.', 'धन्यवाद। शुभ दोपहर।', alts(
      ['Clear messages save callbacks.', 'साफ संदेश कॉल बचाता।'],
      ['Phone manners matter.', 'फोन शिष्टाचार मायने।'],
      ['Bye.', 'अलविदा।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'calling-customer-care', 'Calling Customer Care', [
    turn('Person', 'Thank you for calling FiberNet. How can I help?', 'फाइबरनेट कॉल। क्या मदद?', alts(
      ['ISP support line.', 'ISP सपोर्ट।'],
      ['Your call may be recorded.', 'कॉल रिकॉर्ड हो सकती।']
    )),
    turn('You', 'My internet has been down since morning.', 'सुबह से इंटरनेट बंद।', alts(
      ['Bill charged twice this month.', 'इस महीने दो बार बिल।'],
      ['SIM not receiving OTP.', 'SIM OTP नहीं।'],
      ['Router red light blinking.', 'राउटर लाल लाइट।']
    )),
    turn('Person', 'May I have your registered mobile number?', 'रजिस्टर मोबाइल?', alts(
      ['Account ID on bill?', 'बिल पर अकाउंट?'],
      ['When did it stop?', 'कब बंद?']
    )),
    turn('You', 'Nine eight, seven six, five four, three two, one zero.', 'नंबर बता दिया।', alts(
      ['Account ends in four five six.', 'अकाउंट अंत चार पाँच छह।'],
      ['Stopped around nine AM.', 'सुबह नौ के आसपास।'],
      ['I already restarted router twice.', 'राउटर दो बार रीस्टार्ट।']
    )),
    turn('Person', 'There is an outage in your area till two PM.', 'आपके इलाके में दोपहर दो तक आउटेज।', alts(
      ['Ticket raised, engineer tomorrow.', 'टिकट, कल इंजीनियर।'],
      ['Refund credit will apply.', 'रिफंड क्रेडिट।']
    )),
    turn('You', 'Please send SMS when it is back.', 'वापस आए तो SMS।', alts(
      ['Can I get one day bill credit?', 'एक दिन बिल क्रेडिट?'],
      ['Work from home, this is urgent.', 'घर से काम, ज़रूरी।'],
      ['Ticket number for follow up?', 'फॉलो अप टिकट नंबर?']
    )),
    turn('Person', 'Ticket four five eight nine. SMS alerts enabled.', 'टिकट चार पाँच आठ नौ। SMS चालू।', alts(
      ['Sorry for inconvenience.', 'असुविधा माफ़।'],
      ['Anything else today?', 'और आज?']
    )),
    turn('You', 'That is all. Thanks for explaining.', 'बस। समझाने शुक्रिया।', alts(
      ['Customer care needs calm tone.', 'सपोर्ट शांत स्वर।'],
      ['I will wait till two.', 'दो तक इंतजार।'],
      ['Goodbye.', 'अलविदा।']
    )),
  ]),
]);
