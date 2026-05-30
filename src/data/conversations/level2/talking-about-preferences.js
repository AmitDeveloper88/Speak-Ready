import { lesson, turn, alts } from '../helpers.js';

const TOPIC = 'talking-about-preferences';
const TITLE = 'Talking About Preferences';

export const talkingAboutPreferencesLessons = Object.fromEntries([
  lesson(TOPIC, TITLE, 'favorite-food', 'Favorite Food', [
    turn('Person', 'What food do you never get tired of?', 'कौन सा खाना कभी नहीं ऊबता?', alts(
      ['Comfort food?', 'आराम वाला खाना?'],
      ['Spicy or mild?', 'तीखा या हल्का?'],
      ['Street food fan?', 'स्ट्रीट फूड?']
    )),
    turn('You', 'South Indian dosa with coconut chutney.', 'साउथ इंडियन डोसा नारियल चटनी।', alts(
      ['Crispy dosa, extra chutney.', 'कुरकुरा डोसा, ज़्यादा चटनी।'],
      ['Masala dosa on Sunday mornings.', 'रविवार मसाला डोसा।'],
      ['Dosa beats pizza for me.', 'मुझे डोसा पिज़्ज़ा से बेहतर।']
    )),
    turn('Person', 'Nice. Home made or restaurant?', 'अच्छा। घर या रेस्टो?', alts(
      ['Cook yourself?', 'खुद बनाते?'],
      ['Any dish you dislike?', 'नापसंद?'],
      ['Sweet tooth?', 'मीठा?']
    )),
    turn('You', 'Restaurant for crisp, mom makes soft dosas.', 'कुरकुरे रेस्टो, माँ नरम बनाती।', alts(
      ['Eat out for crunch.', 'क्रंच बाहर।'],
      ['Mom’s version is comfort.', 'माँ वाला आराम।'],
      ['Both have charm.', 'दोनों अपनी जगह।']
    )),
    turn('Person', 'There is a dosa place nearby.', 'पास डोसा जगह।', alts(
      ['Let us go Friday.', 'शुक्रवार चलें।'],
      ['Filter coffee too.', 'फिल्टर कॉफी भी।']
    )),
    turn('You', 'Friday breakfast sounds perfect.', 'शुक्रवार नाश्ता परफेक्ट।', alts(
      ['Count me in.', 'मैं भी।'],
      ['Eight AM before work?', 'काम से पहले आठ?'],
      ['I will order extra chutney.', 'ज़्यादा चटनी ऑर्डर।']
    )),
    turn('Person', 'Deal. No meetings before ten.', 'ठीक। दस से पहले मीटिंग नहीं।', alts(
      ['My treat.', 'मेरा ट्रीट।'],
      ['Bring your appetite.', 'भूख लाना।']
    )),
    turn('You', 'I will be hungry for sure.', 'भूख तो होगी।', alts(
      ['Cannot wait.', 'इंतज़ार नहीं।'],
      ['Thanks for the plan.', 'प्लान शुक्रिया।'],
      ['Food dates are the best.', 'खाने की मुलाकात बेस्ट।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'favorite-movies', 'Favorite Movies', [
    turn('Person', 'Seen anything good lately?', 'हाल में कुछ अच्छा देखा?', alts(
      ['Favorite movie genre?', 'पसंदीदा शैली?'],
      ['Theatre or OTT?', 'थिएटर या OTT?'],
      ['Bollywood or Hollywood?', 'बॉलीवुड या हॉलीवुड?']
    )),
    turn('You', 'I love grounded dramas, not loud action.', 'सादी ड्रामा पसंद, शोर एक्शन नहीं।', alts(
      ['Character stories over explosions.', 'पात्र कहानी, धमाके नहीं।'],
      ['Drama and light comedy mix.', 'ड्रामा हल्की कॉमेडी।'],
      ['Slow films with real dialogue.', 'धीमी फिल्म, असली संवाद।']
    )),
    turn('Person', 'Last film you watched?', 'आखिरी फिल्म?', alts(
      ['Recommend one?', 'एक सुझाओ?'],
      ['Subtitles okay?', 'सबटाइटल ठीक?'],
      ['Watch weekends only?', 'सिर्फ वीकेंड?']
    )),
    turn('You', 'A small town sports drama on Netflix.', 'नेटफ्लिक्स पर छोटे शहर की स्पोर्ट्स ड्रामा।', alts(
      ['Netflix sports drama, Hindi subtitles.', 'नेटफ्लिक्स, हिंदी सबटाइटल।'],
      ['Documentary on runners, very moving.', 'दौड़ पर डॉक्यू, भावुक।'],
      ['Old classic rewatch, Guide.', 'पुरानी Guide फिर।']
    )),
    turn('Person', 'I prefer comedies to cry.', 'रोने से कॉमेडी पसंद।', alts(
      ['Horror scares me.', 'हॉरर डराता।'],
      ['We should movie night.', 'मूवी नाइट।']
    )),
    turn('You', 'Comedy night works, pick something short.', 'कॉमेडी नाइट, छोटी फिल्म।', alts(
      ['Ninety minutes max.', 'अधिकतम नब्बे मिनट।'],
      ['Snacks on me.', 'स्नैक्स मेरे।'],
      ['Saturday at my place?', 'शनिवार मेरे घर?']
    )),
    turn('Person', 'Saturday seven PM then.', 'शनिवार सात बजे।', alts(
      ['Bring popcorn.', 'पॉपकॉर्न लाना।'],
      ['Invite one more friend?', 'एक दोस्त और?']
    )),
    turn('You', 'Sure, small group is fun.', 'ठीक, छोटा ग्रुप मज़ा।', alts(
      ['I will send OTT link.', 'OTT लिंक भेजूँगा।'],
      ['Movie night locked.', 'मूवी नाइट पक्का।'],
      ['Looking forward.', 'इंतज़ार।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'favorite-sports', 'Favorite Sports', [
    turn('Person', 'Do you follow any sport closely?', 'कोई खेल गहराई से?', alts(
      ['Play or only watch?', 'खेलते या सिर्फ देखते?'],
      ['Cricket fan?', 'क्रिकेट फैन?'],
      ['Morning sport?', 'सुबह का खेल?']
    )),
    turn('You', 'Cricket to watch, badminton to play.', 'देखने क्रिकेट, खेलने बैडमिंटन।', alts(
      ['Watch cricket, play badminton weekly.', 'क्रिकेट देख, हफ्ते बैडमिंटन।'],
      ['IPL season is my TV time.', 'IPL मेरा TV समय।'],
      ['Badminton keeps me fit.', 'बैडमिंटन फिट रखता।']
    )),
    turn('Person', 'Badminton court near office?', 'ऑफिस पास कोर्ट?', alts(
      ['Favorite player?', 'पसंदीदा खिलाड़ी?'],
      ['Last match you played?', 'आखिरी मैच?']
    )),
    turn('You', 'Yes, we book court Thursday nights.', 'हाँ, गुरुवार रात कोर्ट बुक।', alts(
      ['Thursday eight PM slot.', 'गुरुवार आठ बजे।'],
      ['Office group plays doubles.', 'ऑफिस डबल्स।'],
      ['Court is ten minutes walk.', 'कोर्ट दस मिनट पैदल।']
    )),
    turn('Person', 'Add me next week?', 'अगले हफ्ते जोड़ो?', alts(
      ['I am rusty.', 'जंग लगा।'],
      ['Need exercise.', 'व्यायाम चाहिए।']
    )),
    turn('You', 'Sure, beginners welcome.', 'ठीक, शुरुआती वेलकम।', alts(
      ['We play friendly, not pro.', 'दोस्ताना, प्रो नहीं।'],
      ['Rackets spare in locker.', 'लॉकर में रैकेट।'],
      ['Thursday invite coming.', 'गुरुवार इनवाइट।']
    )),
    turn('Person', 'Thanks. Excited to move.', 'शुक्रिया। हिलने को उत्सुक।', alts(
      ['Better than gym for me.', 'जिम से बेहतर।'],
      ['See you court side.', 'कोर्ट पर।']
    )),
    turn('You', 'Wear comfy shoes. See you Thursday.', 'आरामदायक जूते। गुरुवार मिलते।', alts(
      ['Hydrate well.', 'पानी पीना।'],
      ['Fun plus fitness.', 'मज़ा और फिटनेस।'],
      ['Sport beats scrolling.', 'खेल स्क्रॉल से बेहतर।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'favorite-places', 'Favorite Places', [
    turn('Person', 'Favorite place to recharge?', 'रिचार्ज की पसंदीदा जगह?', alts(
      ['Beach or mountains?', 'समुद्र या पहाड़?'],
      ['City spot you love?', 'शहर की पसंद?'],
      ['Travel dream place?', 'सपनों की जगह?']
    )),
    turn('You', 'Hill stations with pine trees and fog.', 'देवदार और कोहरे वाली पहाड़ी।', alts(
      ['Misty hills calm me.', 'धुंध भरी पहाड़ी शांत।'],
      ['Coorg and Manali top my list.', 'कूर्ग मनाली टॉप।'],
      ['Cool air, chai, long walks.', 'ठंडी हवा, चाय, लंबी सैर।']
    )),
    turn('Person', 'Last trip where?', 'आखिरी ट्रिप कहाँ?', alts(
      ['Solo or friends?', 'अकेले या दोस्त?'],
      ['Budget stay?', 'बजट स्टे?'],
      ['How many days?', 'कितने दिन?']
    )),
    turn('You', 'Manali, four days, stayed in a homestay.', 'मनाली, चार दिन, होमस्टे।', alts(
      ['Manali homestay, no luxury hotel.', 'मनाली होमस्टे, लक्ज़री नहीं।'],
      ['Friends road trip, simple lodge.', 'दोस्त रोड ट्रिप, साधा लॉज।'],
      ['Four days, phones mostly off.', 'चार दिन, फोन बंद ज़्यादातर।']
    )),
    turn('Person', 'I need that disconnect.', 'मुझे भी डिजिटल ब्रेक चाहिए।', alts(
      ['Manali in which month?', 'किस महीने?'],
      ['Share itinerary?', 'इटिनरेरी?']
    )),
    turn('You', 'March was perfect, not too cold.', 'मार्च परफेक्ट, ज़्यादा ठंड नहीं।', alts(
      ['Itinerary on Google doc.', 'इटिनरेरी Google doc।'],
      ['Avoid peak holiday crowd.', 'भीड़ वाली छुट्टी टालो।'],
      ['Book homestay early.', 'होमस्टे जल्दी बुक।']
    )),
    turn('Person', 'Send the doc please.', 'डॉक भेजो।', alts(
      ['Maybe October trip.', 'शायद अक्टूबर।'],
      ['Travel buddy?', 'ट्रैवल बडी?']
    )),
    turn('You', 'Shared. Let us plan October.', 'शेयर किया। अक्टूबर प्लान करें।', alts(
      ['October long weekend fits.', 'अक्टूबर लंबा वीकेंड।'],
      ['Mountains beat beaches for me.', 'मुझे पहाड़ समुद्र से।'],
      ['Travel resets my mind.', 'यात्रा दिमाग रीसेट।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'favorite-activities', 'Favorite Activities', [
    turn('Person', 'What activity makes you lose track of time?', 'कौन सी चीज़ में समय भूलते?', alts(
      ['Indoor or outdoor?', 'अंदर या बाहर?'],
      ['Solo fun or group?', 'अकेले या ग्रुप?'],
      ['Creative hobby?', 'रचनात्मक?']
    )),
    turn('You', 'Cooking new recipes while music plays.', 'संगीत सुनते नई रेसिपी बनाना।', alts(
      ['Kitchen experiments with playlists.', 'प्लेलिस्ट के साथ किचन।'],
      ['Cooking relaxes me after work.', 'काम के बाद खाना बनाना आराम।'],
      ['Try one new dish weekly.', 'हफ्ते में एक नई डिश।']
    )),
    turn('Person', 'Best dish you made recently?', 'हाल की बेस्ट डिश?', alts(
      ['Fail story?', 'फेल कहानी?'],
      ['Vegetarian only?', 'सिर्फ वेज?'],
      ['Teach me easy one?', 'आसान सिखाओ?']
    )),
    turn('You', 'Paneer butter masala, friends finished the pot.', 'पनीर बटर मसाला, दोस्तों ने बर्तन खाली।', alts(
      ['Paneer butter masala hit.', 'पनीर बटर मसाला हिट।'],
      ['Thai curry attempt, too spicy.', 'थाई करी, बहुत तीखी।'],
      ['Perfect dal tadka finally.', 'आखिरकार परफेक्ट दाल तड़का।']
    )),
    turn('Person', 'Host a dinner at your place?', 'तुम्हारे घर डिनर?', alts(
      ['I will bring dessert.', 'मिठाई मैं।'],
      ['Potluck idea?', 'पॉटलक?']
    )),
    turn('You', 'Potluck Saturday, I cook main.', 'शनिवार पॉटलक, मैं मेन।', alts(
      ['Saturday seven, casual dress.', 'शनिवार सात, कैज़ुअल।'],
      ['Small group of six max.', 'अधिकतम छह।'],
      ['Music and board games after.', 'बाद संगीत बोर्ड गेम।']
    )),
    turn('Person', 'I am in. No fancy dress.', 'मैं भी। फैंसी ड्रेस नहीं।', alts(
      ['What should I bring?', 'क्या लाऊँ?'],
      ['Allergic to peanuts.', 'मूंगफली एलर्जी।']
    )),
    turn('You', 'Bring salad or dessert, noted on peanuts.', 'सलाद या मिठाई, मूंगफली नोट।', alts(
      ['Label dishes please.', 'डिश लेबल करना।'],
      ['Will be a fun night.', 'मज़ेदार रात।'],
      ['Activities like this beat bars.', 'ऐसी मुलाकात बार से बेहतर।']
    )),
  ]),
]);
