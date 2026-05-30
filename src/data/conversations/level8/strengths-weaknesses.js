import { lesson, turn, alts } from '../helpers.js';

const TOPIC = 'strengths-weaknesses';
const TITLE = 'Strengths & Weaknesses';

export const strengthsWeaknessesLessons = Object.fromEntries([
  lesson(TOPIC, TITLE, 'key-strengths', 'Key Strengths', [
    turn('Person', 'What are your top three strengths?', 'तीन मुख्य ताकत?', alts(
      ['Why should we pick you?', 'क्यों चुनें?'],
      ['Differentiator?', 'अंतर?']
    )),
    turn('You', 'Calm debugging, clear writing, and mentoring juniors.', 'शांत डिबग, साफ लेखन, जूनियर मेंटर।', alts(
      ['Fast learner, strong ownership, client empathy.', 'तेज़ सीख, स्वामित्व, क्लाइंट सहानुभूति।'],
      ['System thinking, reliable delivery, honest communication.', 'सिस्टम सोच, विश्वसनीय डिलीवरी, ईमानदार संचार।'],
      ['Pick strengths with examples ready.', 'उदाहरण तैयार।']
    )),
    turn('Person', 'Example for debugging?', 'डिबग उदाहरण?', alts(
      ['Not generic please.', 'सामान्य नहीं।'],
      ['Proof?', 'प्रमाण?']
    )),
    turn('You', 'Last outage I traced payment timeout to DNS TTL in twenty minutes.', 'पिछला आउटेज DNS TTL बीस मिनट।', alts(
      ['Wrote runbook team still uses.', 'रनबुक टीम अभी।'],
      ['Manager cited in performance review.', 'प्रदर्शन समीक्षा उल्लेख।'],
      ['Strength claims need one story each.', 'एक कहानी प्रति ताकत।']
    )),
    turn('Person', 'Impressive example.', 'प्रभावी उदाहरण।', alts(
      ['Overused strength?', 'अधिक इस्तेमाल?'],
      ['Weakness next.', 'कमज़ोरी अगली।']
    )),
    turn('You', 'I avoid saying hard worker only. I prefer specific skills.', 'सिर्फ मेहनती नहीं। विशिष्ट कौशल।', alts(
      ['Strengths match job description keywords.', 'जॉब विवरण मेल।'],
      ['Confident not arrogant tone.', 'आत्मविश्वास अहंकार नहीं।'],
      ['Ready for weakness question.', 'कमज़ोरी सवाल तैयार।']
    )),
    turn('Person', 'Good awareness. Weakness?', 'जागरूकता। कमज़ोरी?', alts(
      ['Classic question.', 'क्लासिक।'],
      ['Be real.', 'असली।']
    )),
    turn('You', 'I will answer weakness in STAR format next.', 'अगले STAR कमज़ोरी।', alts(
      ['Strength section complete.', 'ताकत पूर्ण।'],
      ['Thank you.', 'धन्यवाद।'],
      ['Continue.', 'जारी।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'weakness-improvement', 'Weakness with Improvement', [
    turn('Person', 'What is your biggest weakness?', 'सबसे बड़ी कमज़ोरी?', alts(
      ['Not a strength in disguise.', 'छद्म ताकत नहीं।'],
      ['How improving?', 'कैसे सुधार?']
    )),
    turn('You', 'I sometimes over explain in meetings.', 'कभी मीटिंग में ज़्यादा समझाता।', alts(
      ['Public speaking used to make me nervous.', 'पहले सार्वजनिक बोलना घबराहट।'],
      ['I can be slow to delegate.', 'सौंपने में धीमा।'],
      ['Real weakness, not humble brag.', 'असली, झूठी विनम्रता नहीं।']
    )),
    turn('Person', 'What are you doing about it?', 'क्या कर रहे?', alts(
      ['Still a problem?', 'अभी समस्या?'],
      ['Feedback received?', 'फीडबैक?']
    )),
    turn('You', 'I set three bullet limit before speaking and ask for time check.', 'बोलने से पहले तीन बुलेट, समय चेक।', alts(
      ['Joined Toastmasters for six months.', 'छह महीने Toastmasters।'],
      ['Delegate small tasks weekly to intern.', 'साप्ताहिक इंटर्न को छोटा काम।'],
      ['Show improvement plan clearly.', 'सुधार योजना साफ।']
    )),
    turn('Person', 'Measurable progress?', 'मापने योग्य प्रगति?', alts(
      ['Manager agree?', 'मैनेजर सहमत?'],
      ['Risk for this role?', 'इस भूमिका जोखिम?']
    )),
    turn('You', 'Last retro, teammates said updates got shorter.', 'पिछला रेट्रो, अपडेट छोटे।', alts(
      ['Manager noted improvement in review.', 'समीक्षा सुधार।'],
      ['Low risk for IC role, I watch it.', 'IC जोखिम कम, ध्यान।'],
      ['Weakness answer shows self awareness.', 'आत्म जागरूकता।']
    )),
    turn('Person', 'Self aware. Acceptable.', 'आत्म जागरूक। स्वीकार्य।', alts(
      ['Do not use perfectionism cliche.', 'परफेक्शनिस्म क्लिशे नहीं।'],
      ['Moving on.', 'आगे।']
    )),
    turn('You', 'I avoid perfectionism cliche on purpose.', 'जानबूझकर क्लिशे नहीं।', alts(
      ['Weakness plus fix is the formula.', 'कमज़ोरी और ठीक सूत्र।'],
      ['Thanks for listening.', 'सुनने धन्यवाद।'],
      ['Next question.', 'अगला।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'team-fit', 'Team Fit', [
    turn('Person', 'How do you fit a fast paced team?', 'तेज़ टीम में फिट?', alts(
      ['Culture add or fit?', 'संस्कृति जोड़ फिट?'],
      ['Remote hybrid okay?', 'रिमोट हाइब्रिड?']
    )),
    turn('You', 'I thrive with clear goals and async updates in Slack.', 'साफ लक्ष्य स्लैक अतुल्यकालिक अपडेट।', alts(
      ['I bring calm when incidents hit.', 'इंसिडेंट शांत।'],
      ['I like feedback twice a week not yearly only.', 'सप्ताह में दो बार फीडबैक।'],
      ['Fit means values not same personality.', 'मूल्य नहीं एक व्यक्तित्व।']
    )),
    turn('Person', 'Our team is blunt. Comfortable?', 'टीम सीधी। आराम?', alts(
      ['Conflict style?', 'टकराव शैली?'],
      ['Pairing?', 'पेयरिंग?']
    )),
    turn('You', 'I prefer direct feedback. I stay polite and factual.', 'सीधा फीडबैक पसंद। विनम्र तथ्य।', alts(
      ['Conflict: listen first, propose options.', 'टकराव: पहले सुन, विकल्प।'],
      ['Happy to pair program daily if needed.', 'ज़रूरत रोज पेयर।'],
      ['Blunt teams need thick skin and respect.', 'मोटी त्वचा सम्मान।']
    )),
    turn('Person', 'Hybrid three days office.', 'हाइब्रिड तीन दिन ऑफिस।', alts(
      ['Travel quarterly?', 'तिमाही यात्रा?'],
      ['Timezone overlap?', 'समय क्षेत्र ओवरलैप?']
    )),
    turn('You', 'Three days works. I live thirty minutes away.', 'तीन दिन ठीक। तीस मिनट दूर।', alts(
      ['Quarterly travel fine.', 'तिमाही यात्रा ठीक।'],
      ['Overlap ten to four IST with US East.', 'IST दस से चार US पूर्व।'],
      ['Team fit answers show flexibility.', 'लचीलापन।']
    )),
    turn('Person', 'Sounds aligned.', 'मेल लगता।', alts(
      ['Reference check culture fit.', 'संदर्भ संस्कृति।'],
      ['Panel likes you.', 'पैनल पसंद।']
    )),
    turn('You', 'Glad to hear. I am selective about culture too.', 'खुशी। मैं भी संस्कृति चुनता।', alts(
      ['Team fit is two way interview.', 'दो तरफा इंटरव्यू।'],
      ['Excited about your values post.', 'मूल्य पोस्ट उत्साह।'],
      ['Thank you.', 'धन्यवाद।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'learning-ability', 'Learning Ability', [
    turn('Person', 'How do you learn new tech quickly?', 'नई टेक जल्दी कैसे?', alts(
      ['Example last month?', 'पिछले महीने उदाहरण?'],
      ['Courses or on the job?', 'कोर्स काम पर?']
    )),
    turn('You', 'I read docs, build a toy project, then apply on a small ticket.', 'डॉक, खिलौना प्रोजेक्ट, छोटा टिकट।', alts(
      ['Pair with expert first week.', 'पहला हफ्ता विशेषज्ञ पेयर।'],
      ['Teach back in team lunch learn.', 'टीम लंच सिखाओ।'],
      ['Learning story beats claiming genius.', 'कहानी प्रतिभा दावा नहीं।']
    )),
    turn('Person', 'Last thing you learned?', 'आखिरी सीख?', alts(
      ['Failed learning attempt?', 'असफल प्रयास?'],
      ['Stay updated how?', 'अपडेट कैसे?']
    )),
    turn('You', 'Learned Rust for a CLI tool, shipped internal beta.', 'Rust CLI, आंतरिक बीटा।', alts(
      ['Tried GraphQL, rolled back, learned limits.', 'GraphQL रोलबैक, सीमा सीखी।'],
      ['Newsletters and conference videos weekends.', 'न्यूज़लेटर वीकेंड वीडियो।'],
      ['Failure in learning shows honesty.', 'सीख विफलता ईमानदारी।']
    )),
    turn('Person', 'How fast productive in new stack?', 'नए स्टैक कितनी जल्दी?', alts(
      ['Onboarding expectation two weeks?', 'दो हफ्ते अपेक्षा?'],
      ['Mentor needed?', 'मेंटर?']
    )),
    turn('You', 'Basic productivity two weeks, confident in six.', 'दो हफ्ते बुनियाद, छह आत्मविश्वास।', alts(
      ['I ask questions early not late.', 'जल्दी सवाल।'],
      ['Buddy mentor speeds me up.', 'बडी तेज़।'],
      ['Learning ability is top hire trait.', 'शीर्ष भर्ती गुण।']
    )),
    turn('Person', 'Reasonable timeline.', 'उचित समयरेखा।', alts(
      ['We invest in learning budget.', 'सीख बजट।'],
      ['Good answer.', 'अच्छा जवाब।']
    )),
    turn('You', 'Learning budget is a plus for me.', 'सीख बजट प्लस।', alts(
      ['Strengths weaknesses round done.', 'राउंड पूर्ण।'],
      ['Ready for behavioral.', 'व्यवहार तैयार।'],
      ['Thanks.', 'शुक्रिया।']
    )),
  ]),
]);
