import { lesson, turn, alts } from '../helpers.js';

const TOPIC = 'giving-opinions';
const TITLE = 'Giving Opinions';

export const givingOpinionsLessons = Object.fromEntries([
  lesson(TOPIC, TITLE, 'movies', 'Movies', [
    turn('Person', 'Did you see the new thriller?', 'नई थ्रिलर देखी?', alts(
      ['Any movie worth watching?', 'देखने लायक फिल्म?'],
      ['What are you watching these days?', 'हाल में क्या देख रहे?'],
      ['Theatre or Netflix tonight?', 'आज थिएटर या नेटफ्लिक्स?']
    )),
    turn('You', 'I think the story was strong but too long.', 'मुझे लगता कहानी मज़बूत पर बहुत लंबी।', alts(
      ['Good plot, pacing felt slow.', 'प्लॉट अच्छा, गति धीमी।'],
      ['In my view, acting saved it.', 'मेरे हिसाब से अभिनय ने बचाया।'],
      ['Honestly, ending disappointed me.', 'सच कहूँ, अंत निराश।']
    )),
    turn('Person', 'Really? I loved the length.', 'सच? मुझे लंबाई पसंद।', alts(
      ['Which part bored you?', 'कौन सा हिस्सा उबाऊ?'],
      ['Too much action?', 'ज़्यादा एक्शन?'],
      ['Prefer short films?', 'छोटी फिल्म पसंद?']
    )),
    turn('You', 'The middle hour felt repetitive to me.', 'मुझे बीच का एक घंटा दोहराव लगा।', alts(
      ['Same chase twice.', 'एक ही पीछा दो बार।'],
      ['Could cut twenty minutes.', 'बीस मिनट काट सकते।'],
      ['Still worth one watch.', 'फिर भी एक बार देखने लायक।']
    )),
    turn('Person', 'Fair point. Any scene you liked?', 'सही। कोई पसंदीदा सीन?', alts(
      ['Actor performance?', 'अभिनय?'],
      ['Music?', 'संगीत?']
    )),
    turn('You', 'The opening train scene was brilliant.', 'शुरुआती ट्रेन सीन कमाल।', alts(
      ['First ten minutes hooked me.', 'पहले दस मिनट खींचे।'],
      ['Cinematography there was top.', 'वहाँ सिनेमैटोग्राफी टॉप।'],
      ['Best part, rest okay.', 'सबसे अच्छा हिस्सा, बाकी ठीक।']
    )),
    turn('Person', 'We agree on that scene.', 'उस सीन पर सहमत।', alts(
      ['Let us swap more picks.', 'और सुझाव बदलें।'],
      ['Try the director’s older film.', 'पुरानी फिल्म ट्राय।']
    )),
    turn('You', 'Sure, send your list tonight.', 'ठीक, आज रात लिस्ट भेजना।', alts(
      ['Movie chat is fun.', 'फिल्म बात मज़ेदार।'],
      ['Open to your recommendation.', 'तुम्हारी सिफारिश खुली।'],
      ['Thanks for the debate.', 'बहस शुक्रिया।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'sports', 'Sports', [
    turn('Person', 'Who will win the match tonight?', 'आज रात कौन जीतेगा?', alts(
      ['Following the series?', 'सीरीज़ देख रहे?'],
      ['Cricket or football fan?', 'क्रिकेट या फुटबॉल?'],
      ['Play or only watch?', 'खेलते या सिर्फ देखते?']
    )),
    turn('You', 'I feel the underdog has better form.', 'मुझे लगता अंडरडॉग फॉर्म में बेहतर।', alts(
      ['My take: away team wins.', 'मेरा कहना: बाहर की टीम।'],
      ['Bowling attack looks sharper.', 'बॉलिंग तेज़ लगती।'],
      ['Home crowd helps, but skills matter more.', 'भीड़ मदद, पर कौशल ज़्यादा।']
    )),
    turn('Person', 'Bold pick. Star player is injured.', 'बोल्ड। स्टार घायल।', alts(
      ['Weather may help swing.', 'मौसम स्विंग।'],
      ['Toss will decide.', 'टॉस तय करेगा।']
    )),
    turn('You', 'That is why I back the bench players.', 'इसलिए बेंच खिलाड़ियों पर।', alts(
      ['Depth squad shows now.', 'गहराई अब दिखेगी।'],
      ['Injury opens chance for others.', 'चोट से मौका।'],
      ['Team balance beats one star.', 'संतुलन एक स्टार से ऊपर।']
    )),
    turn('Person', 'Interesting angle.', 'दिलचस्प नज़रिया।', alts(
      ['Small bet?', 'छोटा दाँव?'],
      ['Watch together?', 'साथ देखें?']
    )),
    turn('You', 'Watch together, no bets please.', 'साथ देखें, दाँव नहीं।', alts(
      ['Friendly watch party.', 'दोस्ताना देखना।'],
      ['Snacks at my place.', 'मेरे घर स्नैक्स।'],
      ['Losers buy chai.', 'हारने वाले चाय।']
    )),
    turn('Person', 'Deal. Chai on me if wrong.', 'ठीक। गलत हुआ तो चाय मेरी।', alts(
      ['Excited for the match.', 'मैच उत्सुक।'],
      ['Kickoff at seven.', 'सात बजे शुरू।']
    )),
    turn('You', 'Seven works. May the better team win.', 'सात ठीक। बेहतर टीम जीते।', alts(
      ['Fun either way.', 'कैसे भी मज़ा।'],
      ['Sports talk is lively.', 'खेल बात जीवंत।'],
      ['See you tonight.', 'आज रात।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'technology', 'Technology', [
    turn('Person', 'Should we move to the new CRM?', 'नए CRM पर जाएँ?', alts(
      ['AI tools worth the cost?', 'AI टूल कीमत लायक?'],
      ['Cloud or on premise?', 'क्लाउड या ऑन प्रिमाइस?'],
      ['Upgrade phones this year?', 'इस साल फोन अपग्रेड?']
    )),
    turn('You', 'I believe cloud CRM fits our size.', 'मेरा मानना क्लाउड CRM हमारे साइज़ के लिए।', alts(
      ['Cloud is flexible for us.', 'क्लाउड लचीला।'],
      ['On premise feels heavy.', 'ऑन प्रिमाइस भारी।'],
      ['Pilot for three months first.', 'पहले तीन महीने पायलट।']
    )),
    turn('Person', 'Security worries me though.', 'सुरक्षा चिंता।', alts(
      ['Migration pain?', 'माइग्रेशन दर्द?'],
      ['Training time?', 'ट्रेनिंग समय?']
    )),
    turn('You', 'Valid concern. Pick vendors with ISO certs.', 'सही चिंता। ISO सर्ट वाले वेंडर।', alts(
      ['Security audit before sign.', 'साइन से पहले ऑडिट।'],
      ['Data stays in India region.', 'डेटा भारत रीजन।'],
      ['Encryption is non negotiable.', 'एन्क्रिप्शन ज़रूरी।']
    )),
    turn('Person', 'If audit passes, I am in.', 'ऑडिट पास तो मैं भी।', alts(
      ['Budget cap?', 'बजट सीमा?'],
      ['Timeline?', 'समयरेखा?']
    )),
    turn('You', 'Timeline six weeks with training week four.', 'छह हफ्ते, चौथे हफ्ते ट्रेनिंग।', alts(
      ['Phased rollout reduces risk.', 'चरणबद्ध जोखिम कम।'],
      ['Budget within last quote.', 'पिछले कोट के अंदर।'],
      ['Happy to share vendor shortlist.', 'वेंडर शॉर्टलिस्ट शेयर।']
    )),
    turn('Person', 'Send shortlist today.', 'आज शॉर्टलिस्ट।', alts(
      ['Tech choices need data.', 'टेक चुनाव डेटा चाहिए।'],
      ['Good discussion.', 'अच्छी चर्चा।']
    )),
    turn('You', 'Sending after lunch with pros and cons.', 'लंच के बाद फायदे नुकसान संग।', alts(
      ['Open to your feedback.', 'फीडबैक खुला।'],
      ['Let us decide Friday.', 'शुक्रवार तय।'],
      ['Thanks for hearing my view.', 'राय सुनने शुक्रिया।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'education', 'Education', [
    turn('Person', 'Are online degrees respected now?', 'ऑनलाइन डिग्री अब सम्मानित?', alts(
      ['MBA worth it mid career?', 'मिड करियर MBA?'],
      ['Bootcamp or college?', 'बूटकैंप या कॉलेज?'],
      ['Kids should code early?', 'बच्चे जल्दी कोड?']
    )),
    turn('You', 'I think hybrid programs are the sweet spot.', 'मुझे लगता हाइब्रिड बेस्ट।', alts(
      ['Online plus campus visits work.', 'ऑनलाइन और कैंपस विज़िट।'],
      ['Respect grows if accreditation is solid.', 'मान्यता मज़बूत हो तो सम्मान।'],
      ['Skills matter more than label.', 'लेबल से कौशल ज़्यादा।']
    )),
    turn('Person', 'Some employers still doubt online.', 'कुछ नियोक्ता संदेह।', alts(
      ['Networking loss?', 'नेटवर्किंग घाटा?'],
      ['Cheaper though.', 'सस्ता though।']
    )),
    turn('You', 'True, so choose schools with placement support.', 'सही, प्लेसमेंट सपोर्ट वाले चुनो।', alts(
      ['Portfolio beats degree alone.', 'पोर्टफोलियो अकेले डिग्री से।'],
      ['Alumni network still key.', 'पूर्व छात्र नेटवर्क ज़रूरी।'],
      ['Research placement stats.', 'प्लेसमेंट आँकड़े देखो।']
    )),
    turn('Person', 'Makes sense for my cousin.', 'चचेरे के लिए समझ।', alts(
      ['He wants data science.', 'डेटा साइंस चाहता।'],
      ['Budget is tight.', 'बजट टाइट।']
    )),
    turn('You', 'Suggest a certified online plus internship.', 'सर्टिफाइड ऑनलाइन और इंटर्नशिप सुझाओ।', alts(
      ['Internship proves skills.', 'इंटर्नशिप कौशल साबित।'],
      ['Start with free MOOCs.', 'मुफ्त MOOC से शुरू।'],
      ['Government schemes help fees.', 'सरकारी योजना फीस।']
    )),
    turn('Person', 'Thanks, practical advice.', 'शुक्रिया, व्यावहारिक।', alts(
      ['Education paths changed.', 'शिक्षा रास्ते बदले।'],
      ['Share links?', 'लिंक?']
    )),
    turn('You', 'Links coming on email.', 'ईमेल पर लिंक।', alts(
      ['Happy to guide him.', 'मार्गदर्शन खुशी।'],
      ['Opinions should help action.', 'राय कार्रवाई मदद।'],
      ['Talk soon.', 'जल्द बात।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'social-media', 'Social Media', [
    turn('Person', 'Should our brand post daily?', 'ब्रांड रोज पोस्ट?', alts(
      ['TikTok for B2B?', 'B2B टिकटॉक?'],
      ['Influencers worth it?', 'इन्फ्लुएंसर लायक?'],
      ['Cut social time personally?', 'निजी सोशल समय कम?']
    )),
    turn('You', 'I feel quality three times a week beats daily spam.', 'मुझे लगता हफ्ते तीन गुणवत्ता रोज स्पैम से बेहतर।', alts(
      ['Three strong posts weekly.', 'हफ्ते तीन मज़बूत पोस्ट।'],
      ['Daily stories, fewer feed posts.', 'रोज स्टोरी, कम फीड।'],
      ['Engagement over volume.', 'मात्रा से जुड़ाव।']
    )),
    turn('Person', 'Algorithm loves daily though.', 'एल्गो रोज पसंद।', alts(
      ['Competitors post daily.', 'प्रतिस्पर्धी रोज।'],
      ['Team bandwidth low.', 'टीम समय कम।']
    )),
    turn('You', 'Then repurpose one core post across channels.', 'एक मुख्य पोस्ट चैनलों पर दोबारा।', alts(
      ['Blog to carousel to reel.', 'ब्लॉग से रील।'],
      ['Batch content on Mondays.', 'सोमवार बैच।'],
      ['User content fills gaps.', 'यूज़र कंटेंट भरे।']
    )),
    turn('Person', 'Smart. Less burnout.', 'स्मार्ट। कम थकान।', alts(
      ['Need a content calendar.', 'कंटेंट कैलेंडर।'],
      ['Who approves posts?', 'कौन अप्रूव?']
    )),
    turn('You', 'Calendar plus one approver keeps us safe.', 'कैलेंडर और एक अप्रूवर सुरक्षा।', alts(
      ['Drafts due Thursday.', 'गुरुवार ड्राफ्ट।'],
      ['Metrics review monthly.', 'महीने मेट्रिक्स।'],
      ['Honest content builds trust.', 'ईमानदार कंटेंट भरोसा।']
    )),
    turn('Person', 'Let us pilot for a month.', 'एक महीने पायलट।', alts(
      ['Track leads not likes.', 'लाइक नहीं लीड।'],
      ['Good strategy talk.', 'अच्छी रणनीति बात।']
    )),
    turn('You', 'Agreed. Data will guide next step.', 'सहमत। डेटा अगला कदम।', alts(
      ['Opinions plus metrics win.', 'राय और मेट्रिक्स।'],
      ['Thanks for open debate.', 'खुली बहस शुक्रिया।'],
      ['Update in two weeks.', 'दो हफ्ते अपडेट।']
    )),
  ]),
]);
