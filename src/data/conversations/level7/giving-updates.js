import { lesson, turn, alts } from '../helpers.js';

const TOPIC = 'giving-updates';
const TITLE = 'Giving Updates';

export const givingUpdatesLessons = Object.fromEntries([
  lesson(TOPIC, TITLE, 'daily-standup', 'Daily Standup', [
    turn('Person', 'Rohan, your turn. Yesterday, today, blockers?', 'रोहन, बारी। कल, आज, ब्लॉकर?', alts(
      ['Keep it under one minute.', 'एक मिनट से कम।'],
      ['We have eight people.', 'आठ लोग।']
    )),
    turn('You', 'Yesterday I merged the login fix and started API tests.', 'कल लॉगिन फिक्स मर्ज, API टेस्ट शुरू।', alts(
      ['Yesterday docs, today code review.', 'कल डॉक, आज कोड रिव्यू।'],
      ['Yesterday pairing with QA, today bug fix.', 'कल QA पेयर, आज बग।'],
      ['Short: fixed cache bug, testing now.', 'छोटा: कैश बग ठीक, टेस्ट।']
    )),
    turn('Person', 'Blockers?', 'ब्लॉकर?', alts(
      ['Timer gentle.', 'टाइमर हल्का।'],
      ['Anyone need help?', 'मदद?']
    )),
    turn('You', 'Blocked on staging access. Need DevOps approval.', 'स्टेजिंग एक्सेस ब्लॉक। DevOps मंज़ूरी।', alts(
      ['No blockers, on track.', 'ब्लॉकर नहीं, पटरी।'],
      ['Waiting for design asset only.', 'डिज़ाइन एसेट इंतजार।'],
      ['Need review from Vikram one hour.', 'विक्रम एक घंटा रिव्यू।']
    )),
    turn('Person', 'Ping DevOps channel after standup.', 'स्टैंडअप बाद DevOps चैनल।', alts(
      ['I will nudge them.', 'धक्का दूँगा।'],
      ['Next person.', 'अगला।']
    )),
    turn('You', 'Will do. Today I finish API tests if access lands.', 'करूँगा। एक्सेस मिले तो आज API टेस्ट खत्म।', alts(
      ['Standup updates should be crisp.', 'स्टैंडअप संक्षिप्त।'],
      ['Thanks team.', 'टीम शुक्रिया।'],
      ['Handing mic.', 'माइक सौंप।']
    )),
    turn('Person', 'Thanks Rohan. Neha next.', 'शुक्रिया रोहन। नेहा अगली।', alts(
      ['Good update.', 'अच्छा अपडेट।'],
      ['Staging ticket linked.', 'स्टेजिंग टिकट लिंक।']
    )),
    turn('You', 'Saw the link. Appreciate it.', 'लिंक देखा। कद्र।', alts(
      ['Daily rhythm helps.', 'रोज लय मदद।'],
      ['Back to work.', 'काम पर।'],
      ['Done.', 'हो गया।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'weekly-status', 'Weekly Status', [
    turn('Person', 'Give us a five minute weekly from your squad.', 'स्क्वाड पाँच मिनट साप्ताहिक।', alts(
      ['Manager sync.', 'मैनेजर सिंक।'],
      ['Leadership review.', 'लीडरशिप रिव्यू।']
    )),
    turn('You', 'We closed twelve tickets, shipped payment retry.', 'बारह टिकट बंद, पेमेंट रिट्राई शिप।', alts(
      ['Velocity up ten percent.', 'वेग दस प्रतिशत ऊपर।'],
      ['Two incidents, both resolved same day.', 'दो इंसिडेंट, उसी दिन ठीक।'],
      ['Onboarding flow live for beta users.', 'ऑनबोर्डिंग बीटा लाइव।']
    )),
    turn('Person', 'Risks for next week?', 'अगले हफ्ते जोखिम?', alts(
      ['Customer impact?', 'ग्राहक प्रभाव?'],
      ['Hiring update?', 'भर्ती?']
    )),
    turn('You', 'Risk is holiday coverage and pending security audit.', 'जोखिम छुट्टी कवरेज, सिक्योरिटी ऑडिट।', alts(
      ['Vendor API change Friday.', 'शुक्रवार वेंडर API बदल।'],
      ['One engineer on leave.', 'एक इंजीनियर छुट्टी।'],
      ['Low risk if audit slots tomorrow.', 'कल स्लॉट तो कम जोखिम।']
    )),
    turn('Person', 'Need help from leadership?', 'लीडरशिप मदद?', alts(
      ['Celebrate wins.', 'जीत सेलिब्रेट।'],
      ['Budget okay.', 'बजट ठीक।']
    )),
    turn('You', 'Please chase security for audit slot.', 'सिक्योरिटी ऑडिट स्लॉट धक्का।', alts(
      ['No extra headcount yet.', 'अतिरिक्त हेडकाउंट नहीं।'],
      ['Weekly format keeps us honest.', 'साप्ताहिक ईमानदारी।'],
      ['Thanks for listening.', 'सुनने शुक्रिया।']
    )),
    turn('Person', 'I will ping security today.', 'आज सिक्योरिटी पिंग।', alts(
      ['Strong week.', 'मज़बूत हफ्ता।'],
      ['Share deck link.', 'डेक लिंक।']
    )),
    turn('You', 'Deck in email. That is all from us.', 'ईमेल डेक। हमारी तरफ बस।', alts(
      ['Status talks need numbers.', 'स्टेटस संख्या चाहिए।'],
      ['Next week focus is audit.', 'अगला फोकस ऑडिट।'],
      ['Thank you.', 'धन्यवाद।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'delay-update', 'Delay Update', [
    turn('Person', 'Is the release still on for Friday?', 'शुक्रवार रिलीज़ अभी भी?', alts(
      ['Client asked on Slack.', 'क्लाइंट स्लैक पूछा।'],
      ['Board wants green light.', 'बोर्ड हरी झंडी।']
    )),
    turn('You', 'I need to share a delay. We slip to next Tuesday.', 'देरी बतानी। अगले मंगल तक।', alts(
      ['Honestly, Friday is not realistic.', 'सच में शुक्रवार असली नहीं।'],
      ['We found a regression late.', 'देर से रिग्रेशन।'],
      ['I should have flagged this yesterday.', 'कल फ्लैग करना चाहिए था।']
    )),
    turn('Person', 'Reason and impact?', 'कारण प्रभाव?', alts(
      ['How sure is Tuesday?', 'मंगल कितना पक्का?'],
      ['Who is affected?', 'कौन प्रभावित?']
    )),
    turn('You', 'Payment edge case failed QA. Impact is beta clients only.', 'पेमेंट एज केस QA फेल। सिर्फ बीटा क्लाइंट।', alts(
      ['Fix in progress, eighty percent done.', 'ठीक चल रहा, अस्सी प्रतिशत।'],
      ['Tuesday buffer for soak test.', 'मंगल सोक टेस्ट बफर।'],
      ['No data loss risk.', 'डेटा हानि जोखिम नहीं।']
    )),
    turn('Person', 'Draft client message with product.', 'प्रोडक्ट संग क्लाइंट संदेश।', alts(
      ['I will shield you with leadership.', 'लीडरशिप ढाल।'],
      ['Transparency helps.', 'पारदर्शिता मदद।']
    )),
    turn('You', 'I will send draft in one hour.', 'एक घंटे ड्राफ्ट।', alts(
      ['Delay news is hard but necessary.', 'देरी खबर कठिन ज़रूरी।'],
      ['Lesson learned on early flags.', 'जल्दी फ्लैग सबक।'],
      ['Thanks for backing the team.', 'टीम समर्थन शुक्रिया।']
    )),
    turn('Person', 'We trust the new date.', 'नई तारीख भरोसा।', alts(
      ['Update ticket.', 'टिकट अपडेट।'],
      ['No blame.', 'दोष नहीं।']
    )),
    turn('You', 'Ticket updated. Committed to Tuesday.', 'टिकट अपडेट। मंगल प्रतिबद्ध।', alts(
      ['Owning delays builds trust.', 'देरी स्वीकार भरोसा।'],
      ['Back to fix.', 'ठीक पर।'],
      ['Thanks.', 'शुक्रिया।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'sharing-good-news', 'Sharing Good News', [
    turn('Person', 'Any wins before we close?', 'बंद से पहले जीत?', alts(
      ['Celebrate something.', 'कुछ सेलिब्रेट।'],
      ['Morale boost needed.', 'मनोबल चाहिए।']
    )),
    turn('You', 'Good news. Error rate dropped forty percent after our fix.', 'अच्छी खबर। फिक्स बाद एरर दर चालीस प्रतिशत घटी।', alts(
      ['Client renewed contract today.', 'क्लाइंट आज अनुबंध नवीनीकृत।'],
      ['We hit uptime target three months straight.', 'तीन महीने अपटाइम लक्ष्य।'],
      ['Neha shipped tests ahead of schedule.', 'नेहा समय से पहले टेस्ट।']
    )),
    turn('Person', 'That is huge. Tell the story briefly.', 'बड़ी बात। संक्षेप कहानी।', alts(
      ['Who led it?', 'किसने लीड?'],
      ['Share in all hands?', 'ऑल हैंड्स शेयर?']
    )),
    turn('You', 'Team effort. Root cause was cache TTL, we patched and monitored.', 'टीम प्रयास। जड़ कैश TTL, पैच मॉनिटर।', alts(
      ['I will credit QA in the post.', 'पोस्ट QA श्रेय।'],
      ['Graphs in the deck slide seven.', 'डेक स्लाइड सात ग्राफ।'],
      ['Customers noticed faster checkout.', 'ग्राहक तेज़ चेकआउट नोटिस।']
    )),
    turn('Person', 'Please post in wins channel.', 'विन चैनल पोस्ट।', alts(
      ['Pizza on Friday?', 'शुक्रवार पिज़्ज़ा?'],
      ['Manager shoutout coming.', 'मैनेजर शाउटआउट।']
    )),
    turn('You', 'Posting now. Good news deserves noise.', 'अभी पोस्ट। अच्छी खबर शोर लायक।', alts(
      ['Positive updates lift the squad.', 'सकारात्मक अपडेट उत्साह।'],
      ['Thanks for the forum.', 'मंच शुक्रिया।'],
      ['Onward to next goal.', 'अगले लक्ष्य।']
    )),
    turn('Person', 'Well done team.', 'शाबाश टीम।', alts(
      ['Keep momentum.', 'गति बनाए रखो।'],
      ['Meeting adjourned.', 'मीटिंग समाप्त।']
    )),
    turn('You', 'Thanks everyone who helped.', 'मदद करने वाले सब शुक्रिया।', alts(
      ['Sharing wins is leadership too.', 'जीत शेयर नेतृत्व भी।'],
      ['Celebrating then back to work.', 'जश्न फिर काम।'],
      ['Great day.', 'शानदार दिन।']
    )),
  ]),
]);
