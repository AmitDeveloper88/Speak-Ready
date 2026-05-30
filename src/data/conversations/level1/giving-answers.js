import { lesson, turn, alts } from '../helpers.js';

const TOPIC = 'giving-answers';
const TITLE = 'Giving Answers';

export const givingAnswersLessons = Object.fromEntries([
  lesson(TOPIC, TITLE, 'short-answers', 'Short Answers', [
    turn('Person', 'Did you finish the report?', 'रिपोर्ट खत्म की?', alts(
      ['Is the report done?', 'रिपोर्ट हो गई?'],
      ['Ready to send the file?', 'फाइल भेजने को तैयार?'],
      ['Can I share it with the team?', 'टीम को शेयर करूँ?']
    )),
    turn('You', 'Yes, just now.', 'हाँ, अभी।', alts(
      ['Yes, done.', 'हाँ, हो गया।'],
      ['Yep, all set.', 'हाँ, तैयार।'],
      ['Yes, uploaded already.', 'हाँ, अपलोड हो गया।']
    )),
    turn('Person', 'Any blockers?', 'कोई रुकावट?', alts(
      ['Need help?', 'मदद?'],
      ['Charts missing?', 'चार्ट गायब?'],
      ['Send before standup?', 'स्टैंडअप से पहले?']
    )),
    turn('You', 'No, all clear.', 'नहीं, सब साफ।', alts(
      ['None.', 'कोई नहीं।'],
      ['No blockers.', 'कोई ब्लॉकर नहीं।'],
      ['All good.', 'सब ठीक।']
    )),
    turn('Person', 'Share on email?', 'ईमेल पर शेयर?', alts(
      ['Slack okay too?', 'स्लैक ठीक?'],
      ['Need a summary line?', 'एक लाइन सारांश?'],
      ['CC the manager?', 'मैनेजर CC?']
    )),
    turn('You', 'Sure, sending in five.', 'ठीक, पाँच मिनट में।', alts(
      ['Yes, email now.', 'हाँ, अभी ईमेल।'],
      ['Will do.', 'करता हूँ।'],
      ['On it.', 'कर रहा हूँ।']
    )),
    turn('Person', 'Thanks. Join the call?', 'शुक्रिया। कॉल में?', alts(
      ['Three PM sharp.', 'तीन बजे ठीक।'],
      ['Bring the metrics slide.', 'मेट्रिक स्लाइड लाना।'],
      ['Five minutes only.', 'सिर्फ पाँच मिनट।']
    )),
    turn('You', 'Yes, I will be there.', 'हाँ, आऊँगा।', alts(
      ['Count me in.', 'मैं भी।'],
      ['See you at three.', 'तीन बजे मिलते हैं।'],
      ['Definitely.', 'ज़रूर।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'detailed-answers', 'Detailed Answers', [
    turn('Person', 'Why was the launch delayed?', 'लॉन्च देरी क्यों?', alts(
      ['What happened yesterday?', 'कल क्या हुआ?'],
      ['Give me the full picture.', 'पूरी तस्वीर दो।'],
      ['Any issue we should know?', 'कोई मुद्दा जानना चाहिए?']
    )),
    turn('You', 'We found a payment bug on older phones.', 'पुराने फोन पर पेमेंट बग मिला।', alts(
      ['A bug blocked checkout on Android nine.', 'Android 9 पर चेकआउट बग।'],
      ['QA caught a crash at the last step.', 'आखिरी स्टेप पर क्रैश।'],
      ['Server load test failed at peak.', 'पीक पर सर्वर टेस्ट फेल।']
    )),
    turn('Person', 'How did the team respond?', 'टीम ने कैसे जवाब दिया?', alts(
      ['Who fixed it?', 'किसने ठीक किया?'],
      ['Was it serious?', 'गंभीर था?'],
      ['Customers affected?', 'ग्राहक प्रभावित?']
    )),
    turn('You', 'Backend patched it overnight and we retested.', 'बैकएंड ने रात में पैच, फिर रीटेस्ट।', alts(
      ['Two engineers stayed late and shipped a fix.', 'दो इंजीनियर देर तक, फिक्स शिप।'],
      ['We rolled back, then hotfixed.', 'रोलबैक, फिर हॉटफिक्स।'],
      ['Support sent FAQs while we fixed.', 'फिक्स के दौरान सपोर्ट FAQ भेजा।']
    )),
    turn('Person', 'When can we relaunch?', 'रीलॉन्च कब?', alts(
      ['Safe date?', 'सुरक्षित तारीख?'],
      ['Need approval?', 'अप्रूवल?'],
      ['Marketing ready?', 'मार्केटिंग तैयार?']
    )),
    turn('You', 'Friday morning if tonight’s tests pass.', 'अगर आज रात टेस्ट पास तो शुक्रवार सुबह।', alts(
      ['Targeting Friday ten AM.', 'शुक्रवार दस बजे टारगेट।'],
      ['Maybe Thursday evening, not sure yet.', 'शायद गुरुवार शाम, पक्का नहीं।'],
      ['Monday worst case.', 'सोमवार वर्स्ट केस।']
    )),
    turn('Person', 'Please email the timeline.', 'टाइमलाइन ईमेल करो।', alts(
      ['Share in the group chat.', 'ग्रुप चैट में।'],
      ['Include test results.', 'टेस्ट रिज़ल्ट शामिल।'],
      ['Loop in marketing.', 'मार्केटिंग को जोड़ो।']
    )),
    turn('You', 'I will send a summary within an hour.', 'एक घंटे में सारांश भेजूँगा।', alts(
      ['Drafting it now.', 'अभी लिख रहा हूँ।'],
      ['You will have it before lunch.', 'लंच से पहले मिलेगा।'],
      ['Detailed note coming soon.', 'विस्तृत नोट जल्द।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'personal-answers', 'Personal Answers', [
    turn('Person', 'Tell me about your family.', 'परिवार के बारे में बताओ।', alts(
      ['Do you have siblings?', 'भाई-बहन?'],
      ['Parents live with you?', 'माता-पिता साथ?'],
      ['Big family or small?', 'बड़ा परिवार या छोटा?']
    )),
    turn('You', 'Parents in Indore, I have one younger sister in college.', 'माता-पिता इंदौर, छोटी बहन कॉलेज में।', alts(
      ['Mom dad in Indore, sister studies design.', 'माँ-बाप इंदौर, बहन डिज़ाइन।'],
      ['Small family, sister is in Pune now.', 'छोटा परिवार, बहन अब पुणे।'],
      ['Two of us kids, parents retired.', 'दो बच्चे, माता-पिता रिटायर।']
    )),
    turn('Person', 'How often do you visit them?', 'कितनी बार मिलने?', alts(
      ['Festivals together?', 'त्योहार साथ?'],
      ['Miss them?', 'याद आते?'],
      ['Call daily?', 'रोज कॉल?']
    )),
    turn('You', 'Every two months, and on Diwali for sure.', 'हर दो महीने, दीवाली ज़रूर।', alts(
      ['Try quarterly trips.', 'हर तिमाही कोशिश।'],
      ['Video calls weekly, visit monthly if possible.', 'हफ्ते वीडियो, महीने मुलाकात।'],
      ['Diwali and summer breaks mainly.', 'दीवाली और गर्मी की छुट्टी।']
    )),
    turn('Person', 'What do they think of your job?', 'आपकी जॉब के बारे में क्या सोचते?', alts(
      ['Proud or worried?', 'गर्व या चिंता?'],
      ['Want you closer?', 'पास चाहते?'],
      ['Understand tech work?', 'टेक काम समझते?']
    )),
    turn('You', 'They are proud but want me to eat on time.', 'गर्व है पर समय से खाने को कहते।', alts(
      ['Proud, classic mom worry about food.', 'गर्व, माँ की खाने की चिंता।'],
      ['Happy I am independent, miss me though.', 'खुश कि स्वतंत्र, याद भी।'],
      ['Dad brags to neighbors, mom sends pickles.', 'पापा पड़ोसियों को बताते, माँ अचार।']
    )),
    turn('Person', 'That is sweet. Family keeps us grounded.', 'प्यारी बात। परिवार ज़मीन पर रखता।', alts(
      ['Home food is the best part.', 'घर का खाना सबसे अच्छा।'],
      ['I feel the same.', 'मुझे भी ऐसा।'],
      ['Calls home recharge me.', 'घर की कॉल रिचार्ज।']
    )),
    turn('You', 'True. I should call them tonight.', 'सही। आज रात कॉल करूँगा।', alts(
      ['Will video call after work.', 'काम के बाद वीडियो।'],
      ['Thanks for reminding me.', 'याद दिलाने के लिए शुक्रिया।'],
      ['Family first, always.', 'परिवार पहले, हमेशा।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'professional-answers', 'Professional Answers', [
    turn('Person', 'Describe your current role.', 'अपनी भूमिका बताइए।', alts(
      ['What do you handle day to day?', 'रोज़ क्या संभालते?'],
      ['Main responsibilities?', 'मुख्य जिम्मेदारियाँ?'],
      ['Team size you work with?', 'टीम साइज?']
    )),
    turn('You', 'I manage vendor onboarding for our logistics platform.', 'लॉजिस्टिक्स प्लेटफॉर्म पर वेंडर ऑनबोर्डिंग संभालता हूँ।', alts(
      ['I run vendor onboarding and SLA tracking.', 'वेंडर ऑनबोर्डिंग और SLA ट्रैक।'],
      ['Operations lead for partner stores.', 'पार्टनर स्टोर ऑपरेशन लीड।'],
      ['I coordinate suppliers and delivery hubs.', 'सप्लायर और डिलीवरी हब कोऑर्डिनेट।']
    )),
    turn('Person', 'Biggest win last quarter?', 'पिछली तिमाही की बड़ी जीत?', alts(
      ['Metric you improved?', 'कौन सा मेट्रिक?'],
      ['Challenge you solved?', 'कौन सी समस्या सुलझाई?'],
      ['Project you led?', 'कौन सा प्रोजेक्ट लीड?']
    )),
    turn('You', 'Cut onboarding time from ten days to four.', 'ऑनबोर्डिंग दस से चार दिन।', alts(
      ['Automated forms, saved six days average.', 'फॉर्म ऑटो, औसत छह दिन बचे।'],
      ['Reduced errors by thirty percent.', 'गलतियाँ तीस प्रतिशत कम।'],
      ['Launched a self serve portal for vendors.', 'वेंडर सेल्फ सर्व पोर्टल लॉन्च।']
    )),
    turn('Person', 'Tools you rely on?', 'कौन से टूल?', alts(
      ['How do you track issues?', 'इशू कैसे ट्रैक?'],
      ['Cross team work style?', 'क्रॉस टीम स्टाइल?'],
      ['KPIs on your dashboard?', 'डैशबोर्ड KPI?']
    )),
    turn('You', 'Notion for docs, Jira for tickets, Sheets for metrics.', 'डॉक Notion, टिकट Jira, मेट्रिक Sheets।', alts(
      ['Asana plus Looker dashboards.', 'Asana और Looker।'],
      ['Slack, Jira, and a custom CRM.', 'स्लैक, Jira, कस्टम CRM।'],
      ['Mostly Google Workspace and SQL reports.', 'ज़्यादातर Google Workspace और SQL।']
    )),
    turn('Person', 'Sounds solid. Open to mentoring interns?', 'मज़बूत। इंटर्न मेंटर?', alts(
      ['Training juniors?', 'जूनियर ट्रेन?'],
      ['Friday knowledge shares?', 'शुक्रवार नॉलेज शेयर?'],
      ['Next quarter goals?', 'अगली तिमाही लक्ष्य?']
    )),
    turn('You', 'Yes, I already host monthly office hours.', 'हाँ, महीने में ऑफिस आवर्स।', alts(
      ['Happy to mentor one intern.', 'एक इंटर्न मेंटर खुशी से।'],
      ['Can run a lunch and learn.', 'लंच एंड लर्न कर सकता।'],
      ['Let us plan it next sprint.', 'अगले स्प्रिंट प्लान करें।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'opinion-answers', 'Opinion Answers', [
    turn('Person', 'What do you think of remote work?', 'रिमोट वर्क के बारे में क्या सोचते?', alts(
      ['Hybrid or office daily?', 'हाइब्रिड या रोज ऑफिस?'],
      ['Does WFH help focus?', 'घर से काम फोकस में मदद?'],
      ['Future of offices?', 'ऑफिस का भविष्य?']
    )),
    turn('You', 'Hybrid works best, two days office for bonding.', 'हाइब्रिड बेस्ट, बॉन्डिंग के लिए दो दिन ऑफिस।', alts(
      ['Remote for deep work, office for meetings.', 'गहरा काम घर, मीटिंग ऑफिस।'],
      ['Full remote burns me out socially.', 'पूरा रिमोट सोशली थकाता।'],
      ['Office three days keeps rhythm for me.', 'तीन दिन ऑफिस रिदम रखता।']
    )),
    turn('Person', 'Any downside you see?', 'कोई नुकसान?', alts(
      ['Commute worth it?', 'कम्यूट लायक?'],
      ['Young hires learning?', 'नए लोग सीख पा रहे?'],
      ['Managers trusting teams?', 'मैनेजर भरोसा?']
    )),
    turn('You', 'New hires need in person mentors at first.', 'नए लोगों को शुरू में सामने मेंटर चाहिए।', alts(
      ['Onboarding suffers if fully remote.', 'पूरा रिमोट ऑनबोर्डिंग कमज़ोर।'],
      ['Commute cost is real though.', 'कम्यूट खर्च सच है।'],
      ['Trust needs clear goals, not face time only.', 'भरोसे के लिए साफ लक्ष्य, सिर्फ चेहरा नहीं।']
    )),
    turn('Person', 'Fair point. Would you switch companies for full remote?', 'सही। पूरा रिमोट के लिए कंपनी बदलोगे?', alts(
      ['What perks matter most?', 'कौन से पर्क मायने?'],
      ['Salary vs flexibility?', 'सैलरी या लचीलापन?'],
      ['Your non negotiables?', 'जो मानकों पर समझौता नहीं?']
    )),
    turn('You', 'Only if the role is strong; flexibility alone is not enough.', 'सिर्फ लचीलापन काफी नहीं, रोल मज़बूत हो।', alts(
      ['Maybe for six months trial, not forever.', 'शायद छह महीने ट्रायल, हमेशा नहीं।'],
      ['I would need growth and good team culture.', 'ग्रोथ और अच्छी टीम कल्चर चाहिए।'],
      ['Not immediately, I like my team here.', 'अभी नहीं, यहाँ टीम पसंद।']
    )),
    turn('Person', 'Balanced view. Thanks for sharing.', 'संतुलित। शेयर के लिए शुक्रिया।', alts(
      ['Good discussion.', 'अच्छी चर्चा।'],
      ['Makes sense to me.', 'मुझे समझ आया।'],
      ['Let us revisit after the policy update.', 'पॉलिसी अपडेट के बाद फिर।']
    )),
    turn('You', 'Happy to chat more anytime.', 'कभी और बात खुशी से।', alts(
      ['Anytime. Open to ideas.', 'कभी भी। आइडिया खुले।'],
      ['Thanks for asking my view.', 'राय पूछने के लिए शुक्रिया।'],
      ['Let us see what leadership decides.', 'देखते हैं लीडरशिप क्या तय करे।']
    )),
  ]),
]);
