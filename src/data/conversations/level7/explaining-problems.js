import { lesson, turn, alts } from '../helpers.js';

const TOPIC = 'explaining-problems';
const TITLE = 'Explaining Problems';

export const explainingProblemsLessons = Object.fromEntries([
  lesson(TOPIC, TITLE, 'reporting-bug', 'Reporting a Bug', [
    turn('Person', 'What is breaking in production?', 'प्रोडक्शन में क्या टूटा?', alts(
      ['On call pinged you.', 'ऑन कॉल ने पिंग।'],
      ['Ticket says checkout fail.', 'टिकट चेकआउट फेल।']
    )),
    turn('You', 'Users cannot complete UPI payment on Android twelve.', 'Android बारह पर UPI पेमेंट पूरा नहीं।', alts(
      ['Login loop on Safari.', 'Safari लॉगिन लूप।'],
      ['Reports export times out.', 'रिपोर्ट निर्यात टाइमआउट।'],
      ['Notifications delayed two hours.', 'नोटिफिकेशन दो घंटे देर।']
    )),
    turn('Person', 'When did it start?', 'कब शुरू?', alts(
      ['How many users?', 'कितने यूज़र?'],
      ['Any error code?', 'एरर कोड?']
    )),
    turn('You', 'Started around nine AM after the morning deploy.', 'सुबह नौ बजे सुबह डिप्लॉय बाद।', alts(
      ['Roughly five percent of Android users.', 'लगभग पाँच प्रतिशत Android।'],
      ['Logs show timeout on payment gateway.', 'लॉग गेटवे टाइमआउट।'],
      ['I reproduced on staging.', 'स्टेजिंग पर दोहराया।']
    )),
    turn('Person', 'Rollback or hotfix?', 'रोलबैक या हॉटफिक्स?', alts(
      ['Page the gateway team.', 'गेटवे टीम पेज।'],
      ['Customer comms needed.', 'ग्राहक संचार।']
    )),
    turn('You', 'Suggest hotfix for config flag, rollback if fails.', 'कॉन्फिग फ्लैग हॉटफिक्स, फेल हो तो रोलबैक।', alts(
      ['I am preparing patch now.', 'अभी पैच तैयार।'],
      ['Clear bug reports speed fixes.', 'साफ बग रिपोर्ट तेज़ ठीक।'],
      ['ETA forty minutes.', 'अड़तालीस मिनट अनुमान।']
    )),
    turn('Person', 'Go ahead. Keep channel updated.', 'आगे। चैनल अपडेट।', alts(
      ['I will notify support.', 'सपोर्ट सूचित।'],
      ['Good catch.', 'अच्छी पकड़।']
    )),
    turn('You', 'Will post every fifteen minutes.', 'हर पंद्रह मिनट पोस्ट।', alts(
      ['Owning the bug calmly.', 'शांति से बग स्वीकार।'],
      ['Thanks for trust.', 'भरोसा शुक्रिया।'],
      ['Back to logs.', 'लॉग पर।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'missed-deadline', 'Missed Deadline', [
    turn('Person', 'The design handoff was due yesterday.', 'डिज़ाइन हैंडऑफ कल ड्यू था।', alts(
      ['Why is QA still waiting?', 'QA क्यों इंतजार?'],
      ['Client deck missing.', 'क्लाइंट डेक गायब।']
    )),
    turn('You', 'I missed the deadline. I underestimated review time.', 'डेडलाइन छूटी। रिव्यू समय कम आँका।', alts(
      ['Honestly, I was pulled into incidents.', 'सच में इंसिडेंट में खींचा।'],
      ['I should have asked for help Tuesday.', 'मंगल मदद माँगनी चाहिए थी।'],
      ['The scope grew without flagging.', 'स्कोप बढ़ा बिना फ्लैग।']
    )),
    turn('Person', 'What is the new realistic date?', 'नई असली तारीख?', alts(
      ['This affects the sprint.', 'स्प्रिंट प्रभाव।'],
      ['How do we prevent repeat?', 'दोहराव कैसे रोके?']
    )),
    turn('You', 'I can deliver by tomorrow noon with trimmed animations.', 'कल दोपहर तक, एनिमेशन काटकर।', alts(
      ['Full version by Friday.', 'पूरा संस्करण शुक्रवार।'],
      ['I will share work in progress tonight.', 'आज रात प्रगति शेयर।'],
      ['Daily check in until done.', 'खत्म तक रोज चेक इन।']
    )),
    turn('Person', 'Tomorrow noon works. Flag earlier next time.', 'कल दोपहर ठीक। अगली बार जल्दी।', alts(
      ['No punishment, just clarity.', 'सज़ा नहीं, स्पष्टता।'],
      ['Thanks for owning it.', 'स्वीकार शुक्रिया।']
    )),
    turn('You', 'I will set midpoint check on big tasks.', 'बड़े काम मध्य जाँच।', alts(
      ['Missed deadline talk is uncomfortable but needed.', 'छूटी डेडलाइन बात ज़रूरी।'],
      ['Appreciate direct feedback.', 'सीधा फीडबैक कद्र।'],
      ['Committed to noon.', 'दोपहर प्रतिबद्ध।']
    )),
    turn('Person', 'Good plan. Update Jira.', 'अच्छी योजना। Jira अपडेट।', alts(
      ['Team relies on you.', 'टीम भरोसा।'],
      ['Let us move on.', 'आगे।']
    )),
    turn('You', 'Jira updated. Thanks for patience.', 'Jira अपडेट। धैर्य शुक्रिया।', alts(
      ['Back to delivery.', 'डिलीवरी पर।'],
      ['Lesson logged.', 'सबक दर्ज।'],
      ['Will not repeat.', 'दोहराऊँगा नहीं।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'blocked-dependency', 'Blocked by Dependency', [
    turn('Person', 'Why is your task stuck in progress?', 'टास्क इन प्रोग्रेस क्यों अटका?', alts(
      ['Sprint board red item.', 'बोर्ड लाल आइटम।'],
      ['Standup blocker again?', 'स्टैंडअप ब्लॉकर फिर?']
    )),
    turn('You', 'I am blocked on the legal review for the new terms screen.', 'नई शर्तें स्क्रीन कानूनी रिव्यू ब्लॉक।', alts(
      ['Waiting for API keys from partner.', 'पार्टनर API कुंजी।'],
      ['Design assets not in Figma yet.', 'Figma एसेट नहीं।'],
      ['Database migration window not approved.', 'DB माइग्रेशन विंडो नहीं।']
    )),
    turn('Person', 'Who owns legal?', 'कानूनी किसके पास?', alts(
      ['Did you open a ticket?', 'टिकट खोला?'],
      ['Workaround possible?', 'विकल्प?']
    )),
    turn('You', 'Legal is Rina. Ticket LEG four two opened Monday.', 'कानूनी रीना। टिकट सोमवार।', alts(
      ['No workaround without approved text.', 'मंज़ूर टेक्स्ट बिना विकल्प नहीं।'],
      ['I can mock with placeholder meanwhile.', 'इतने में प्लेसहोल्डर।'],
      ['Escalated in email yesterday.', 'कल ईमेल एस्केलेट।']
    )),
    turn('Person', 'I will ping Rina after this call.', 'कॉल बाद रीना पिंग।', alts(
      ['Switch to task B today.', 'आज टास्क B।'],
      ['Dependency map helps.', 'निर्भरता मानचित्र।']
    )),
    turn('You', 'I will pick task B until unblocked.', 'अनब्लॉक तक B।', alts(
      ['Explaining blocks saves blame.', 'ब्लॉक समझ दोष बचाता।'],
      ['Thanks for escalation.', 'एस्केलेशन शुक्रिया।'],
      ['Visible blocker label set.', 'ब्लॉकर लेबल सेट।']
    )),
    turn('Person', 'Rina replied, review by EOD.', 'रीना जवाब, आज खत्म।', alts(
      ['Good news.', 'अच्छी खबर।'],
      ['Update board.', 'बोर्ड अपडेट।']
    )),
    turn('You', 'Updated. Should move tomorrow.', 'अपडेट। कल चलेगा।', alts(
      ['Dependency talk is normal.', 'निर्भरता बात सामान्य।'],
      ['Relief.', 'राहत।'],
      ['Thanks.', 'शुक्रिया।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'escalating-issue', 'Escalating an Issue', [
    turn('Person', 'This has been open five days. Why escalate now?', 'पाँच दिन खुला। अब एस्केलेट क्यों?', alts(
      ['Try one more fix.', 'एक और फिक्स?'],
      ['Client is angry.', 'क्लाइंट गुस्सा।']
    )),
    turn('You', 'We tried three fixes. Revenue impact is growing.', 'तीन फिक्स। राजस्व प्रभाव बढ़ रहा।', alts(
      ['Partner API still down.', 'पार्टनर API अभी बंद।'],
      ['Support queue doubled.', 'सपोर्ट कतार दोगुनी।'],
      ['I need director help to get vendor call.', 'वेंडर कॉल डायरेक्टर मदद।']
    )),
    turn('Person', 'Summarize facts only.', 'सिर्फ तथ्य।', alts(
      ['No emotion.', 'भावना नहीं।'],
      ['What do you need from me?', 'मुझसे क्या?']
    )),
    turn('You', 'Need you on a call with vendor at four PM.', 'चार बजे वेंडर कॉल में चाहिए।', alts(
      ['Facts: down since Tuesday, SLA breached.', 'तथ्य: मंगल से बंद, SLA उल्लंघन।'],
      ['Estimated loss two lakhs a day.', 'अनुमानित नुकसान दो लाख दिन।'],
      ['Internal team exhausted options.', 'आंतरिक विकल्प खत्म।']
    )),
    turn('Person', 'I will join at four. Send brief.', 'चार बजे जॉइन। संक्षिप्त भेजो।', alts(
      ['Escalate with data.', 'डेटा संग एस्केलेट।'],
      ['Good judgment.', 'अच्छा निर्णय।']
    )),
    turn('You', 'Brief in your inbox now.', 'संक्षिप्त इनबॉक्स।', alts(
      ['Escalation is not failure.', 'एस्केलेशन असफलता नहीं।'],
      ['Thanks for backing.', 'समर्थन शुक्रिया।'],
      ['Prepared talking points.', 'बात बिंदु तैयार।']
    )),
    turn('Person', 'Read it. Solid. See you at four.', 'पढ़ा। मज़बूत। चार बजे।', alts(
      ['Loop client after vendor.', 'वेंडर बाद क्लाइंट।'],
      ['Calm tone helped.', 'शांत स्वर मदद।']
    )),
    turn('You', 'Will keep comms professional.', 'संचार पेशेवर।', alts(
      ['Escalation done right.', 'सही एस्केलेशन।'],
      ['Focus on fix.', 'ठीक पर ध्यान।'],
      ['Thanks.', 'शुक्रिया।']
    )),
  ]),
]);
