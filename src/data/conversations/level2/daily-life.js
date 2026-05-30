import { lesson, turn, alts } from '../helpers.js';

const TOPIC = 'daily-life';
const TITLE = 'Daily Life';

export const dailyLifeLessons = Object.fromEntries([
  lesson(TOPIC, TITLE, 'daily-routine', 'Daily Routine', [
    turn('Person', 'Walk me through your typical weekday.', 'आम वीकडे बताओ।', alts(
      ['What time do you wake up?', 'कितने बजे उठते?'],
      ['Morning routine?', 'सुबह की रूटीन?'],
      ['Work from home or office?', 'घर या ऑफिस?']
    )),
    turn('You', 'I wake at six thirty, gym, then office by nine.', 'साढ़े छह उठता, जिम, नौ बजे ऑफिस।', alts(
      ['Six thirty alarm, gym, nine office.', 'अलार्म साढ़े छह, जिम, नौ ऑफिस।'],
      ['Early start, workout, commute by metro.', 'जल्दी, वर्कआउट, मेट्रो।'],
      ['Gym mornings keep my day stable.', 'सुबह जिम दिन स्थिर।']
    )),
    turn('Person', 'Evening schedule?', 'शाम का शेड्यूल?', alts(
      ['Lunch habits?', 'लंच आदत?'],
      ['Screen time at night?', 'रात स्क्रीन?'],
      ['Meal prep or order?', 'खाना बनाते या ऑर्डर?']
    )),
    turn('You', 'Home by seven, cook light dinner, read.', 'सात बजे घर, हल्का खाना, पढ़ना।', alts(
      ['Seven home, dal rice, book.', 'सात घर, दाल चावल, किताब।'],
      ['Evening walk, then dinner.', 'शाम सैर, फिर खाना।'],
      ['Cook simple, sleep by eleven.', 'सादा खाना, ग्यारह सोना।']
    )),
    turn('Person', 'That sounds healthy.', 'स्वस्थ लगता।', alts(
      ['I eat late, bad habit.', 'देर खाता, बुरी आदत।'],
      ['Need your discipline.', 'तुम्हारा अनुशासन चाहिए।']
    )),
    turn('You', 'Took months to stick. Start small.', 'महीनों लगे। छोटे से शुरू।', alts(
      ['One habit at a time.', 'एक आदत एक समय।'],
      ['Skip gym if sick, not lazy.', 'बीमार हों तो स्किप, आलसी नहीं।'],
      ['Routine beats motivation.', 'रूटीन प्रेरणा से ऊपर।']
    )),
    turn('Person', 'Maybe I will try six thirty too.', 'शायद साढ़े छह भी ट्राय।', alts(
      ['Alarm scares me though.', 'अलार्म डराता।'],
      ['Even seven is hard.', 'सात भी मुश्किल।']
    )),
    turn('You', 'Try seven first, then shift earlier.', 'पहले सात, फिर और जल्दी।', alts(
      ['Gradual works better.', 'धीरे बेहतर।'],
      ['Text me when you wake.', 'उठो तो मैसेज।'],
      ['We can morning walk together.', 'सुबह सैर साथ।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'weekend-activities', 'Weekend Activities', [
    turn('Person', 'Any plans this weekend?', 'इस वीकेंड प्लान?', alts(
      ['How do you usually spend Saturday?', 'शनिवार कैसे?'],
      ['Relax or stay busy?', 'आराम या व्यस्त?'],
      ['Going out of town?', 'शहर बाहर?']
    )),
    turn('You', 'Saturday market, Sunday family video call.', 'शनिवार बाज़ार, रविवार फैमिली कॉल।', alts(
      ['Local market and laundry Saturday.', 'शनिवार बाज़ार कपड़े।'],
      ['Hike Saturday if weather is clear.', 'मौसम साफ तो शनिवार हाइक।'],
      ['Slow Saturday, Sunday calls home.', 'धीमा शनिवार, रविवार घर।']
    )),
    turn('Person', 'Which market do you like?', 'कौन सा बाज़ार?', alts(
      ['Cook on weekends?', 'वीकेंड खाना बनाते?'],
      ['Friends meetup?', 'दोस्त मिलन?'],
      ['Movies?', 'फिल्म?']
    )),
    turn('You', 'The Sunday farmer market near the park.', 'पार्क पास रविवार किसान बाज़ार।', alts(
      ['Farmer market for fresh veggies.', 'ताज़ी सब्जी किसान बाज़ार।'],
      ['Old city bazaar sometimes.', 'कभी पुराना बाज़ार।'],
      ['Street market for fruits.', 'फल स्ट्रीट मार्केट।']
    )),
    turn('Person', 'I should check it out.', 'देखना चाहिए।', alts(
      ['Need fresh tomatoes.', 'टमाटर चाहिए।'],
      ['Markets are lively.', 'बाज़ार जीवंत।']
    )),
    turn('You', 'Come at nine, less crowd then.', 'नौ बजे आओ, भीड़ कम।', alts(
      ['Early is best for deals.', 'जल्दी सौदा बेस्ट।'],
      ['I will share the pin.', 'पिन भेजूँगा।'],
      ['We can grab breakfast after.', 'बाद नाश्ता।']
    )),
    turn('Person', 'Sounds like a plan.', 'प्लान अच्छा।', alts(
      ['What time Sunday call?', 'रविवार कॉल कब?'],
      ['Enjoy your weekend.', 'वीकेंड एंजॉय।']
    )),
    turn('You', 'You too. See you Saturday nine.', 'तुम भी। शनिवार नौ बजे।', alts(
      ['Saturday market then.', 'शनिवार बाज़ार।'],
      ['Looking forward.', 'इंतज़ार।'],
      ['Have a restful Sunday.', 'आरामदायक रविवार।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'studies', 'Studies', [
    turn('Person', 'Still studying or working full time?', 'अभी पढ़ाई या फुल टाइम काम?', alts(
      ['Which course?', 'कौन सा कोर्स?'],
      ['College or online degree?', 'कॉलेज या ऑनलाइन?'],
      ['Exams coming?', 'एग्ज़ाम आ रहे?']
    )),
    turn('You', 'Evening MBA while I work days.', 'दिन काम, शाम MBA।', alts(
      ['Working plus part time MBA.', 'काम और पार्ट टाइम MBA।'],
      ['MBA classes after office.', 'ऑफिस के बाद MBA क्लास।'],
      ['Two year weekend program.', 'दो साल वीकेंड प्रोग्राम।']
    )),
    turn('Person', 'That is tough. How many subjects now?', 'मुश्किल। अभी कितने विषय?', alts(
      ['Group projects?', 'ग्रुप प्रोजेक्ट?'],
      ['Sleep enough?', 'नींद पूरी?'],
      ['Why MBA?', 'MBA क्यों?']
    )),
    turn('You', 'Three subjects this term, finance is hardest.', 'इस टर्म तीन, फाइनेंस सबसे कठिन।', alts(
      ['Finance, marketing, ops.', 'फाइनेंस, मार्केटिंग, ऑप्स।'],
      ['Finance needs extra reading.', 'फाइनेंस में ज़्यादा पढ़ाई।'],
      ['Case studies every week.', 'हर हफ्ते केस स्टडी।']
    )),
    turn('Person', 'I did MBA too. Want my notes?', 'मैंने भी MBA। नोट्स?', alts(
      ['Study group on campus?', 'कैंपस स्टडी ग्रुप?'],
      ['Online lectures heavy?', 'ऑनलाइन लेक्चर भारी?']
    )),
    turn('You', 'Yes please, finance summaries would help.', 'हाँ, फाइनेंस सारांश मदद करेंगे।', alts(
      ['Notes would save time.', 'नोट्स समय बचाएँगे।'],
      ['Happy to swap marketing notes.', 'मार्केटिंग नोट्स बदलें।'],
      ['Study group sounds good.', 'स्टडी ग्रुप अच्छा।']
    )),
    turn('Person', 'I will send a Drive link tonight.', 'आज रात ड्राइव लिंक।', alts(
      ['Meet at library Saturday?', 'शनिवार लाइब्रेरी?'],
      ['Do not burn out.', 'बर्न आउट मत।']
    )),
    turn('You', 'Thanks. Coffee on me Saturday.', 'शुक्रिया। शनिवार कॉफी मेरी।', alts(
      ['Grateful for the help.', 'मदद के लिए आभारी।'],
      ['Library four PM works.', 'लाइब्रेरी चार बजे।'],
      ['Let us grind together.', 'साथ पढ़ें।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'work-life', 'Work Life', [
    turn('Person', 'How is work treating you lately?', 'हाल में काम कैसा?', alts(
      ['Busy season?', 'व्यस्त सीज़न?'],
      ['New project?', 'नया प्रोजेक्ट?'],
      ['Team size?', 'टीम साइज?']
    )),
    turn('You', 'Busy but good. We launched a payments feature.', 'व्यस्त पर अच्छा। पेमेंट फीचर लॉन्च।', alts(
      ['Launched UPI flow last week.', 'पिछले हफ्ते UPI फ्लो।'],
      ['Shipping fast, some late nights.', 'तेज़ शिप, कुछ लेट नाइट।'],
      ['Product sprint ends Friday.', 'प्रोडक्ट स्प्रिंट शुक्रवार।']
    )),
    turn('Person', 'Congrats. More meetings now?', 'बधाई। ज़्यादा मीटिंग?', alts(
      ['Work life balance okay?', 'बैलेंस ठीक?'],
      ['Manager supportive?', 'मैनेजर सपोर्ट?'],
      ['Learning a lot?', 'बहुत सीख?']
    )),
    turn('You', 'Meetings doubled, so I block focus time.', 'मीटिंग दोगुनी, फोकस टाइम ब्लॉक।', alts(
      ['Calendar blocks save me.', 'कैलेंडर ब्लॉक बचाता।'],
      ['No meetings before ten AM.', 'दस से पहले मीटिंग नहीं।'],
      ['Slack off after seven PM.', 'सात के बाद स्लैक बंद।']
    )),
    turn('Person', 'Smart boundary.', 'स्मार्ट सीमा।', alts(
      ['I should try that.', 'मुझे भी ट्राय।'],
      ['Burnout is real.', 'बर्नआउट सच।']
    )),
    turn('You', 'Small rules keep me sane.', 'छोटे नियम संभालते।', alts(
      ['Boundaries help quality.', 'सीमाएँ क्वालिटी।'],
      ['Team respects it now.', 'टीम अब मानती।'],
      ['Still learning daily.', 'रोज सीख।']
    )),
    turn('Person', 'Celebrate the launch Friday?', 'शुक्रवार लॉन्च सेलिब्रेट?', alts(
      ['Team lunch?', 'टीम लंच?'],
      ['You earned it.', 'तुमने कमाया।']
    )),
    turn('You', 'Yes, team lunch is planned.', 'हाँ, टीम लंच प्लान।', alts(
      ['Friday canteen party.', 'शुक्रवार कैंटीन।'],
      ['Short toast, then back to work.', 'छोटा टोस्ट, फिर काम।'],
      ['Join us if you are free.', 'फ्री हो तो आना।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'free-time', 'Free Time', [
    turn('Person', 'What do you do with free pockets of time?', 'खाली समय में क्या?', alts(
      ['Commute activities?', 'कम्यूट में?'],
      ['Scrolling or something else?', 'स्क्रॉल या कुछ और?'],
      ['Short breaks at desk?', 'डेस्क पर छोटा ब्रेक?']
    )),
    turn('You', 'Podcasts on metro, vocab cards at lunch.', 'मेट्रो पर पॉडकास्ट, लंच पर शब्द कार्ड।', alts(
      ['English podcasts plus flashcards.', 'अंग्रेज़ी पॉडकास्ट, फ्लैशकार्ड।'],
      ['Audiobooks while cooking.', 'खाना बनाते ऑडियोबुक।'],
      ['Ten minute walks, no phone.', 'दस मिनट सैर, फोन नहीं।']
    )),
    turn('Person', 'Which podcast do you like?', 'कौन सा पॉडकास्ट?', alts(
      ['Games on phone?', 'फोन गेम?'],
      ['Mindless reels?', 'रील्स?'],
      ['Creative hobby?', 'रचनात्मक शौक?']
    )),
    turn('You', 'A short business storytelling show.', 'छोटा बिज़नेस स्टोरी शो।', alts(
      ['The Indicator from NPR.', 'NPR का Indicator।'],
      ['Indian founders podcast.', 'इंडियन फाउंडर पॉडकास्ट।'],
      ['Ten minute English news recap.', 'दस मिनट अंग्रेज़ी समाचार।']
    )),
    turn('Person', 'I waste time on reels honestly.', 'सच कहूँ तो रील्स बर्बाद।', alts(
      ['Need better habits.', 'बेहतर आदत चाहिए।'],
      ['Podcasts sound useful.', 'पॉडकास्ट काम के।']
    )),
    turn('You', 'Set a twenty minute reel limit.', 'बीस मिनट रील लिमिट।', alts(
      ['Timer helps me too.', 'टाइमर मुझे भी।'],
      ['Replace one reel slot with podcast.', 'एक रील की जगह पॉडकास्ट।'],
      ['Small swaps add up.', 'छोटे बदलाव जुड़ते।']
    )),
    turn('Person', 'I will try that tonight.', 'आज रात ट्राय।', alts(
      ['Share the podcast link?', 'पॉडकास्ट लिंक?'],
      ['Accountability again.', 'फिर जवाबदेही।']
    )),
    turn('You', 'Link sent. Tell me how it goes.', 'लिंक भेजा। बताना कैसा रहा।', alts(
      ['Check in tomorrow.', 'कल पूछूँगा।'],
      ['Hope you like episode one.', 'एपिसोड एक पसंद आए।'],
      ['Free time well spent matters.', 'खाली समय सही खर्च मायने।']
    )),
  ]),
]);
