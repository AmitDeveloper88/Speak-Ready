import { lesson, turn, alts } from '../helpers.js';

const TOPIC = 'work-experience';
const TITLE = 'Work Experience';

export const workExperienceLessons = Object.fromEntries([
  lesson(TOPIC, TITLE, 'current-role', 'Current Role', [
    turn('Person', 'Describe your current role.', 'वर्तमान भूमिका बताइए।', alts(
      ['Day to day responsibilities?', 'रोज जिम्मेदारी?'],
      ['Title and team size?', 'पद टीम आकार?']
    )),
    turn('You', 'I am senior backend engineer owning payments microservice.', 'सीनियर बैकएंड, पेमेंट माइक्रोसर्विस स्वामित्व।', alts(
      ['Lead QA for release train of eight engineers.', 'लीड QA आठ इंजीनियर रिलीज़।'],
      ['Product analyst for growth experiments.', 'प्रोडक्ट एनालिस्ट वृद्धि प्रयोग।'],
      ['Team of five, I mentor two juniors.', 'टीम पाँच, दो जूनियर मेंटर।']
    )),
    turn('Person', 'Biggest achievement there?', 'वहाँ सबसे बड़ी उपलब्धि?', alts(
      ['Tools you use?', 'टूल?'],
      ['Stakeholders?', 'हितधारक?']
    )),
    turn('You', 'Cut payment failures forty percent in one quarter.', 'एक तिमाही पेमेंट फेल चालीस प्रतिशत कम।', alts(
      ['Launched referral feature, ten percent uplift.', 'रेफरल फीचर दस प्रतिशत उछाल।'],
      ['Built dashboard executives use weekly.', 'डैशबोर्ड अधिकारी साप्ताहिक।'],
      ['Achievement uses numbers when possible.', 'संख्या जहाँ संभव।']
    )),
    turn('Person', 'How do you work with product?', 'प्रोडक्ट संग कैसे?', alts(
      ['Conflicts?', 'टकराव?'],
      ['On call?', 'ऑन कॉल?']
    )),
    turn('You', 'Weekly planning, clear specs, push back early if scope risky.', 'साप्ताहिक योजना, स्पेक, जोखिम स्कोप जल्दी ना।', alts(
      ['Rare conflicts, data decides.', 'कभी टकराव, डेटा फैसला।'],
      ['On call one week per month.', 'महीने में एक हफ्ता ऑन कॉल।'],
      ['Current role answer shows ownership.', 'स्वामित्व दिखाए।']
    )),
    turn('Person', 'Ownership is clear.', 'स्वामित्व साफ।', alts(
      ['Why leave then?', 'फिर क्यों छोड़?'],
      ['Manager name confidential okay.', 'मैनेजर गोपनीय ठीक।']
    )),
    turn('You', 'I will cover leaving reason next if you ask.', 'पूछें तो छोड़ने कारण।', alts(
      ['Current role stable and respectful exit planned.', 'स्थिर सम्मानजनक निकास।'],
      ['Thanks.', 'धन्यवाद।'],
      ['Ready.', 'तैयार।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'previous-company', 'Previous Company', [
    turn('Person', 'Why did you leave your previous company?', 'पिछली कंपनी क्यों छोड़ी?', alts(
      ['What did you learn there?', 'वहाँ क्या सीखा?'],
      ['Short tenure concern?', 'छोटी अवधि?']
    )),
    turn('You', 'I wanted larger scale problems after two years in a startup.', 'स्टार्टअप दो साल बाद बड़े स्केल समस्याएँ।', alts(
      ['Role was eliminated in restructuring.', 'पुनर्गठन में भूमिका समाप्त।'],
      ['I learned speed, now want deeper platform craft.', 'गति सीखी, गहरा प्लेटफॉर्म चाहिए।'],
      ['Left on good terms, reference available.', 'अच्छे संबंध, संदर्भ।']
    )),
    turn('Person', 'What would your manager say about you?', 'मैनेजर क्या कहेगा?', alts(
      ['Weakness there?', 'कमज़ोरी?'],
      ['Promotion history?', 'पदोन्नति?']
    )),
    turn('You', 'She would say reliable under pressure and helpful mentor.', 'दबाव में विश्वसनीय, मेंटर सहायक।', alts(
      ['He might mention I say no to vague scope.', 'अस्पष्ट स्कोप ना कहता।'],
      ['Promoted once in eighteen months.', 'अठारह महीने एक पदोन्नति।'],
      ['Previous company stories stay positive.', 'सकारात्मक रहें।']
    )),
    turn('Person', 'Any culture mismatch?', 'संस्कृति बेमेल?', alts(
      ['Salary reason?', 'वेतन?'],
      ['Would you rejoin?', 'फिर जॉइन?']
    )),
    turn('You', 'Early stage chaos was fine, I outgrew limited infra budget.', 'शुरुआती अराजक ठीक, सीमित इन्फ्रा बजट छोटा लगा।', alts(
      ['Not salary driven primarily.', 'मुख्य वेतन नहीं।'],
      ['Would rejoin for right project, not default.', 'सही प्रोजेक्ट पर, डिफ़ॉल्ट नहीं।'],
      ['No badmouthing former employer.', 'पूर्व नियोक्ता बुराई नहीं।']
    )),
    turn('Person', 'Professional tone appreciated.', 'पेशेवर स्वर कद्र।', alts(
      ['Reference check later.', 'बाद संदर्भ।'],
      ['Continue.', 'जारी।']
    )),
    turn('You', 'Happy to provide manager contact post offer.', 'ऑफर बाद संपर्क।', alts(
      ['Previous company chapter closed well.', 'अध्याय अच्छा बंद।'],
      ['Focus on this opportunity.', 'इस अवसर फोकस।'],
      ['Thank you.', 'धन्यवाद।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'internship-experience', 'Internship Experience', [
    turn('Person', 'Tell me about your internship at PayQuick.', 'PayQuick इंटर्नशिप।', alts(
      ['Summer intern only?', 'सिर्फ ग्रीष्मकालीन?'],
      ['Paid or unpaid?', 'वेतन?']
    )),
    turn('You', 'Three month paid intern, built fraud alert dashboard.', 'तीन महीने वेतन, धोखाधड़ी अलर्ट डैशबोर्ड।', alts(
      ['Six month part time during college.', 'कॉलेज छह महीने पार्ट टाइम।'],
      ['Remote intern for US startup.', 'US स्टार्टअप रिमोट।'],
      ['Converted to full time offer.', 'फुल टाइम ऑफर रूपांतरण।']
    )),
    turn('Person', 'What was your exact contribution?', 'सटीक योगदान?', alts(
      ['Team size?', 'टीम आकार?'],
      ['Mentor feedback?', 'मेंटर फीडबैक?']
    )),
    turn('You', 'I owned API integration and unit tests for alert rules.', 'अलर्ट नियम API इंटीग्रेशन यूनिट टेस्ट।', alts(
      ['Pair programmed with senior first month.', 'पहला महीना पेयर।'],
      ['Presented demo to risk team.', 'जोखिम टीम डेमो।'],
      ['Intern talk must separate team vs mine.', 'टीम बनाम मेरा अलग।']
    )),
    turn('Person', 'Offer after intern?', 'इंटर्न बाद ऑफर?', alts(
      ['Why not stay?', 'क्यों नहीं रुके?'],
      ['Learned most?', 'सबसे सीख?']
    )),
    turn('You', 'Received return offer, declined for grad school plan then pivoted.', 'रिटर्न ऑफर, ग्रेज स्कूल फिर मोड़ा।', alts(
      ['Accepted and worked one year.', 'स्वीकार एक साल काम।'],
      ['Learned production discipline and code review.', 'प्रोडक्शन अनुशासन कोड रिव्यू।'],
      ['Internship proved I enjoy industry work.', 'उद्योग काम पसंद साबित।']
    )),
    turn('Person', 'Clear contribution.', 'साफ योगदान।', alts(
      ['Strong intern story.', 'मज़बूत कहानी।'],
      ['Next topic projects.', 'अगला प्रोजेक्ट।']
    )),
    turn('You', 'Happy to deep dive dashboard metrics.', 'मेट्रिक गहराई खुशी।', alts(
      ['Intern experience counts.', 'इंटर्नशिप गिनती।'],
      ['Thanks.', 'शुक्रिया।'],
      ['Ready.', 'तैयार।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'why-leaving-job', 'Why Leaving Job', [
    turn('Person', 'You are employed. Why leave now?', 'नौकरी में। अब क्यों छोड़?', alts(
      ['Running from problems?', 'समस्याओं से भाग?'],
      ['Notice period?', 'नोटिस?']
    )),
    turn('You', 'I want platform scale and your tech stack fits my growth plan.', 'प्लेटफॉर्म स्केल, आपका स्टैक विकास योजना।', alts(
      ['Current company freezing promotions.', 'पदोन्नति स्थिर।'],
      ['Relocating to Bangalore for family.', 'परिवार बैंगलोर।'],
      ['Seeking more ownership, less maintenance only.', 'स्वामित्व, सिर्फ मेंटेनेंस नहीं।']
    )),
    turn('Person', 'What will you miss?', 'क्या याद आएगा?', alts(
      ['What must we offer?', 'हम क्या दें?'],
      ['Red flags we should know?', 'रेड फ्लैग?']
    )),
    turn('You', 'I will miss my team, leaving after handover plan.', 'टीम याद, हैंडओवर योजना बाद।', alts(
      ['Need learning budget and clear ladder.', 'सीख बजट स्पष्ट सीढ़ी।'],
      ['No red flags, ethical move.', 'रेड फ्लैग नहीं, नैतिक।'],
      ['Two month notice, negotiable to six weeks.', 'दो महीने नोटिस, छह हफ्ते बात।']
    )),
    turn('Person', 'Notice acceptable.', 'नोटिस स्वीकार।', alts(
      ['Counter offer risk?', 'काउंटर ऑफर?'],
      ['Motivation genuine?', 'प्रेरणा असली?']
    )),
    turn('You', 'I expect a counter but my decision is thoughtful, not emotional.', 'काउंटर अपेक्षा, फैसला सोचा भावनात्मक नहीं।', alts(
      ['Toward growth not running away.', 'विकास की ओर भाग नहीं।'],
      ['Leaving answer respects current employer.', 'वर्तमान नियोक्ता सम्मान।'],
      ['Excited about this interview process.', 'इंटरव्यू उत्साह।']
    )),
    turn('Person', 'Mature answer.', 'परिपक्व।', alts(
      ['HR will discuss notice.', 'HR नोटिस।'],
      ['Almost done.', 'लगभग खत्म।']
    )),
    turn('You', 'Thank you. I will honor notice fully.', 'धन्यवाद। नोटिस पूरा मानूँगा।', alts(
      ['Why leaving is key interview moment.', 'छोड़ना महत्वपूर्ण पल।'],
      ['Open to HR details.', 'HR विवरण खुला।'],
      ['Appreciate time.', 'समय कद्र।']
    )),
  ]),
]);
