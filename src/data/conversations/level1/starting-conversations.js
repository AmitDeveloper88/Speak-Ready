import { lesson, turn, alts } from '../helpers.js';

const TOPIC = 'starting-conversations';
const TITLE = 'Starting Conversations';

export const startingConversationsLessons = Object.fromEntries([
  lesson(TOPIC, TITLE, 'breaking-the-ice', 'Breaking the Ice', [
    turn('Person', 'Quite a rainy day, huh?', 'काफी बारिश वाला दिन, है ना?', alts(
      ['Weather is crazy today.', 'आज मौसम पागल है।'],
      ['Did you get soaked coming here?', 'आते वक्त भीग गए?'],
      ['At least it is cooler today.', 'कम से कम आज ठंडक है।']
    )),
    turn('You', 'Yeah, my umbrella flipped twice.', 'हाँ, छाता दो बार उलट गया।', alts(
      ['Tell me about it. Traffic was slow too.', 'बिल्कुल। ट्रैफिक भी धीमा।'],
      ['I forgot mine. Bad idea.', 'छाता भूल गया। गलती।'],
      ['Rain is fine if chai is hot.', 'चाय गरम हो तो बारिश ठीक।']
    )),
    turn('Person', 'I am waiting for a friend. You?', 'दोस्त का इंतजार। आप?', alts(
      ['Are you waiting long?', 'लंबे से इंतजार?'],
      ['First time at this cafe?', 'इस कैफे में पहली बार?'],
      ['Grabbed the last window seat.', 'आखिरी विंडो सीट मिली।']
    )),
    turn('You', 'Meeting a client in ten minutes.', 'दस मिनट में क्लाइंट से मिलना।', alts(
      ['Client call soon.', 'जल्दी क्लाइंट कॉल।'],
      ['Just early. Habit.', 'बस जल्दी। आदत।'],
      ['Waiting for my teammate.', 'टीममेट का इंतजार।']
    )),
    turn('Person', 'Which line of work?', 'किस लाइन में?', alts(
      ['Freelance or office job?', 'फ्रीलांस या ऑफिस?'],
      ['Local or traveling in?', 'लोकल या बाहर से?'],
      ['Busy schedule today?', 'आज व्यस्त शेड्यूल?']
    )),
    turn('You', 'Graphic design, mostly posters and ads.', 'ग्राफिक डिज़ाइन, पोस्टर और ऐड।', alts(
      ['Design work for small brands.', 'छोटे ब्रांड्स के लिए डिज़ाइन।'],
      ['Freelance designer.', 'फ्रीलांस डिज़ाइनर।'],
      ['Visual design for events.', 'इवेंट के लिए विज़ुअल डिज़ाइन।']
    )),
    turn('Person', 'I run a bakery nearby. Need menus sometimes.', 'पास बेकरी। कभी मेनू चाहिए।', alts(
      ['Small shop on MG road.', 'MG रोड पर छोटी दुकान।'],
      ['Maybe we could trade services.', 'शायद सेवाएँ बदल लें।'],
      ['Your card handy?', 'कार्ड है?']
    )),
    turn('You', 'Here is my number. Text me samples.', 'नंबर लो। सैंपल मैसेज करना।', alts(
      ['Sure. I will share rates tonight.', 'ठीक। आज रात रेट भेजूँगा।'],
      ['Happy to help. Let us connect.', 'मदद खुशी से। जुड़ते हैं।'],
      ['Take my card. WhatsApp works best.', 'कार्ड लो। व्हाट्सऐप बेस्ट।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'asking-first-question', 'Asking First Question', [
    turn('Person', 'This line is moving slowly.', 'लाइन धीरे चल रही।', alts(
      ['Long queue today.', 'आज लंबी कतार।'],
      ['Hope the machine works.', 'मशीन चले उम्मीद।'],
      ['Are you ordering food too?', 'आप भी खाना ऑर्डर?']
    )),
    turn('You', 'Have you tried their paneer roll here?', 'यहाँ पनीर रोल ट्राई किया?', alts(
      ['Is the coffee good at this stall?', 'इस स्टॉल की कॉफी अच्छी?'],
      ['Do you come here often?', 'अक्सर आते हो?'],
      ['What is worth ordering?', 'क्या ऑर्डर करें अच्छा?']
    )),
    turn('Person', 'Yes, the roll is spicy but good.', 'हाँ, रोल मसालेदार पर अच्छा।', alts(
      ['Paneer roll is my usual.', 'पनीर रोल मेरा रेगुलर।'],
      ['Try it with green chutney.', 'हरी चटनी के साथ लो।'],
      ['Coffee is just okay.', 'कॉफी ठीक ठाक।']
    )),
    turn('You', 'Great, I will get one then.', 'बढ़िया, मैं भी लूँगा।', alts(
      ['Sold. One roll for me.', 'ठीक। एक रोल।'],
      ['Thanks for the tip.', 'टिप के लिए शुक्रिया।'],
      ['Sounds perfect for lunch.', 'लंच के लिए परफेक्ट।']
    )),
    turn('Person', 'Eating here or takeaway?', 'यहीं या पैक?', alts(
      ['Want to share a table?', 'टेबल शेयर?'],
      ['Cash or UPI at counter?', 'काउंटर पर कैश या UPI?'],
      ['First time or regular?', 'पहली बार या रेगुलर?']
    )),
    turn('You', 'Takeaway. I am late for work.', 'पैक। ऑफिस के लिए लेट।', alts(
      ['Packing it. Short break.', 'पैक। छोटा ब्रेक।'],
      ['Here quick, then run.', 'जल्दी यहाँ, फिर दौड़।'],
      ['Takeaway please.', 'पैक कराइए।']
    )),
    turn('Person', 'Counter two is faster today.', 'आज काउंटर दो तेज़।', alts(
      ['Try UPI, line is shorter.', 'UPI लो, लाइन छोटी।'],
      ['Order number shows on screen.', 'नंबर स्क्रीन पर।'],
      ['They added a new sauce tray.', 'नई सॉस ट्रे आई।']
    )),
    turn('You', 'Thanks. Enjoy your meal.', 'शुक्रिया। भोजन एंजॉय।', alts(
      ['Helpful. See you.', 'काम आया। मिलते हैं।'],
      ['Appreciate it. Bye.', 'शुक्रिया। बाय।'],
      ['Got it. Have a good lunch.', 'समझ गया। अच्छा लंच।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'finding-common-topics', 'Finding Common Topics', [
    turn('Person', 'That match last night was wild.', 'कल रात का मैच कमाल था।', alts(
      ['Did you watch the game?', 'मैच देखा?'],
      ['Cricket season is back.', 'क्रिकेट सीज़न वापस।'],
      ['Sports cafe vibe today.', 'आज स्पोर्ट्स कैफे माहौल।']
    )),
    turn('You', 'I caught the last over only. Still thrilling.', 'सिर्फ आखिरी ओवर देखा। फिर भी रोमांचक।', alts(
      ['Yes, last over was insane.', 'हाँ, आखिरी ओवर पागल।'],
      ['Missed start but saw the win.', 'शुरुआत छूटी, जीत देखी।'],
      ['Highlights were enough drama.', 'हाइलाइट्स में ही ड्रामा।']
    )),
    turn('Person', 'Which team do you support?', 'किस टीम के साथ?', alts(
      ['IPL or international?', 'IPL या इंटरनेशनल?'],
      ['Play cricket yourself?', 'खुद खेलते हो?'],
      ['Favorite player?', 'पसंदीदा खिलाड़ी?']
    )),
    turn('You', 'Mostly Mumbai, but I enjoy good bowling anywhere.', 'ज़्यादातर मुंबई, पर अच्छी बॉलिंग कहीं भी।', alts(
      ['Mumbai fan, no fight please.', 'मुंबई फैन, लड़ाई नहीं।'],
      ['I follow form, not only one team.', 'फॉर्म देखता हूँ, सिर्फ एक टीम नहीं।'],
      ['CSK when Dhoni plays.', 'धोनी खेले तो CSK।']
    )),
    turn('Person', 'Same. I play weekend tennis actually.', 'वही। मैं वीकेंड टेनिस खेलता हूँ।', alts(
      ['I bowl in a local league.', 'लोकल लीग में बॉलिंग।'],
      ['Gym and match highlights for me.', 'जिम और मैच हाइलाइट्स।'],
      ['Used to play school cricket.', 'स्कूल में क्रिकेट खेला।']
    )),
    turn('You', 'Tennis is tough. How long have you played?', 'टेनिस मुश्किल। कब से खेलते?', alts(
      ['Local league sounds fun.', 'लोकल लीग मज़ेदार।'],
      ['I stick to jogging, honest.', 'सच कहूँ तो जॉगिंग।'],
      ['We should swap fitness tips.', 'फिटनेस टिप्स बदलें।']
    )),
    turn('Person', 'Three years. Maybe we play sometime.', 'तीन साल। कभी खेल लें।', alts(
      ['There is a court near Indiranagar.', 'इंदिरानगर पास कोर्ट।'],
      ['I can share the booking link.', 'बुकिंग लिंक भेज सकता हूँ।'],
      ['Or just watch the next match together.', 'या अगला मैच साथ देखें।']
    )),
    turn('You', 'Let us plan. I will bring snacks.', 'प्लान करें। स्नैक्स मैं लाऊँगा।', alts(
      ['Deal. Text me details.', 'ठीक। डिटेल मैसेज करना।'],
      ['Match viewing is easier this week.', 'इस हफ्ते मैच देखना आसान।'],
      ['Sounds fun. Count me in.', 'मज़ेदार। मैं भी।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'starting-with-compliments', 'Starting with Compliments', [
    turn('Person', 'I like your presentation flow.', 'आपका प्रेज़ेंटेशन फ्लो पसंद आया।', alts(
      ['Your slides looked clean.', 'स्लाइड्स साफ लगीं।'],
      ['You spoke clearly on stage.', 'स्टेज पर साफ बोले।'],
      ['Confident delivery today.', 'आज कॉन्फिडेंट डिलीवरी।']
    )),
    turn('You', 'Thank you. I practiced a lot for it.', 'धन्यवाद। इसके लिए खूब प्रैक्टिस की।', alts(
      ['Thanks. That means a lot.', 'शुक्रिया। बहुत मायने रखता है।'],
      ['Appreciate it. First time presenting.', 'शुक्रिया। पहली बार प्रेज़ेंट।'],
      ['Thank you. Nerves still there though.', 'धन्यवाद। घबराहट अभी भी।']
    )),
    turn('Person', 'Which tool did you use for charts?', 'चार्ट के लिए कौन सा टूल?', alts(
      ['How long did prep take?', 'तैयारी में कितना समय?'],
      ['Team effort or solo?', 'टीम या अकेले?'],
      ['Got tips for beginners?', 'बिगिनर्स के लिए टिप?']
    )),
    turn('You', 'Figma for layout, data from Sheets.', 'लेआउट Figma, डेटा Sheets से।', alts(
      ['Canva plus Google Sheets.', 'Canva और Google Sheets।'],
      ['Simple slides, heavy rehearsal.', 'सादी स्लाइड, ज़्यादा रिहर्सल।'],
      ['Figma mostly. Happy to share file.', 'ज़्यादातर Figma। फाइल शेयर करूँगा।']
    )),
    turn('Person', 'Could you glance at mine later?', 'बाद में मेरा एक नज़र?', alts(
      ['I struggle with pacing.', 'पेसिंग में दिक्कत।'],
      ['Mine feels too text heavy.', 'मेरा बहुत टेक्स्टी।'],
      ['Five minute feedback?', 'पाँच मिनट फीडबैक?']
    )),
    turn('You', 'Sure, send it after lunch.', 'ठीक, लंच के बाद भेजना।', alts(
      ['Happy to help this evening.', 'शाम को मदद खुशी से।'],
      ['Yes, quick review is fine.', 'हाँ, जल्दी रिव्यू ठीक।'],
      ['Share link on Slack.', 'स्लैक पर लिंक भेजो।']
    )),
    turn('Person', 'You are kind. I owe you chai.', 'दयालु हो। चाय का एहसान।', alts(
      ['I will buy chai.', 'चाय मैं लूँगा।'],
      ['Thanks in advance.', 'पहले से शुक्रिया।'],
      ['Lunch is on me then.', 'फिर लंच मेरा।']
    )),
    turn('You', 'Chai sounds perfect. Let us do it.', 'चाय परफेक्ट। करते हैं।', alts(
      ['Deal. Pantry at four?', 'ठीक। चार बजे पैंट्री?'],
      ['Anytime. Happy to help.', 'कभी भी। मदद अच्छी।'],
      ['Looking forward to it.', 'इंतज़ार रहेगा।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'joining-a-conversation', 'Joining a Conversation', [
    turn('Person', 'So the trek is set for Saturday.', 'तो ट्रेक शनिवार तय।', alts(
      ['We were talking about the hike.', 'हाइक की बात हो रही थी।'],
      ['Route is decided already.', 'रूट तय हो गया।'],
      ['Who is bringing the tent?', 'टेंट कौन लाएगा?']
    )),
    turn('You', 'Mind if I join? I heard trekking.', 'क्या मैं जुड़ूँ? ट्रेकिंग सुनी।', alts(
      ['Hi, can I add my name too?', 'हाय, मेरा नाम भी?'],
      ['Sorry to interrupt. Trek sounds fun.', 'बीच में, माफ। ट्रेक मज़ेदार।'],
      ['Is this the trekking group?', 'क्या यही ट्रेकिंग ग्रुप?']
    )),
    turn('Person', 'Sure, more people is fine.', 'ठीक, और लोग चलेंगे।', alts(
      ['Jump in. We need one more.', 'आ जाओ। एक और चाहिए।'],
      ['Welcome. Do you hike often?', 'स्वागत। अक्सर हाइक?'],
      ['Yes, if you can carry snacks.', 'हाँ, स्नैक्स ला सको तो।']
    )),
    turn('You', 'I hike monthly. I can bring energy bars.', 'महीने में एक बार। एनर्जी बार लाऊँगा।', alts(
      ['Regular hiker here.', 'रेगुलर हाइकर।'],
      ['Snacks and first aid kit from me.', 'स्नैक्स और फर्स्ट ऐड मेरे से।'],
      ['I have spare gloves too.', 'ग्लव्स भी spare हैं।']
    )),
    turn('Person', 'Meet at six AM, metro station.', 'सुबह छह, मेट्रो स्टेशन।', alts(
      ['Bus leaves at six thirty.', 'बस साढ़े छह।'],
      ['Share location pin tonight.', 'रात लोकेशन पिन।'],
      ['Bring water, two litres.', 'पानी, दो लीटर।']
    )),
    turn('You', 'Got it. I will confirm tonight.', 'समझ गया। रात कन्फर्म करूँगा।', alts(
      ['Noted. See you Saturday.', 'नोट। शनिवार मिलते हैं।'],
      ['Will share my number on the group.', 'ग्रुप पर नंबर डालूँगा।'],
      ['On time. No snooze.', 'समय पर। स्नूज़ नहीं।']
    )),
    turn('Person', 'Great. Adding you to the chat.', 'बढ़िया। चैट में जोड़ रहे।', alts(
      ['Link sent on WhatsApp.', 'व्हाट्सऐप लिंक भेजा।'],
      ['Checklist is pinned there.', 'चेकलिस्ट पिन है।'],
      ['Weather looks clear so far.', 'अभी मौसम साफ लगता।']
    )),
    turn('You', 'Thanks. Excited for the trek.', 'शुक्रिया। ट्रेक का इंतज़ार।', alts(
      ['Added. See you all Saturday.', 'जुड़ गया। शनिवार।'],
      ['Appreciate it. Good chat.', 'शुक्रिया। अच्छी बात।'],
      ['Looking forward. Good day.', 'इंतज़ार। अच्छा दिन।']
    )),
  ]),
]);
