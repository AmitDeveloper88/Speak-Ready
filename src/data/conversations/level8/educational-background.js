import { lesson, turn, alts } from '../helpers.js';

const TOPIC = 'educational-background';
const TITLE = 'Educational Background';

export const educationalBackgroundLessons = Object.fromEntries([
  lesson(TOPIC, TITLE, 'college-degree', 'College and Degree', [
    turn('Person', 'Tell me about your college and degree.', 'कॉलेज डिग्री बताइए।', alts(
      ['Where did you study?', 'कहाँ पढ़े?'],
      ['Undergrad or postgrad?', 'स्नातक स्नातकोत्तर?']
    )),
    turn('You', 'I did B Tech in Computer Science from VIT Vellore, twenty nineteen.', 'VIT वेल्लोर CS B Tech, उन्नीस।', alts(
      ['B CA from Delhi University, twenty twenty.', 'DU BCA, बीस।'],
      ['M Tech IIT Madras after B Tech NIT.', 'IIT माद्रास M Tech, पहले NIT।'],
      ['Diploma plus lateral entry to engineering.', 'डिप्लोमा फिर इंजीनियरिंग।']
    )),
    turn('Person', 'Why that college?', 'वह कॉलेज क्यों?', alts(
      ['Campus placement record?', 'कैंपस प्लेसमेंट?'],
      ['Extracurriculars?', 'पाठ्येतर?']
    )),
    turn('You', 'Strong coding culture and practical labs.', 'कोडिंग संस्कृति व्यावहारिक लैब।', alts(
      ['Near home and affordable.', 'घर पास किफायती।'],
      ['Scholarship made it possible.', 'छात्रवृत्ति संभव।'],
      ['IEEE chapter activities helped network.', 'IEEE नेटवर्क।']
    )),
    turn('Person', 'Final year project topic?', 'अंतिम वर्ष प्रोजेक्ट?', alts(
      ['Thesis grade?', 'थीसिस ग्रेड?'],
      ['Any research?', 'अनुसंधान?']
    )),
    turn('You', 'Smart attendance system using face recognition, grade A.', 'चेहरा पहचान स्मार्ट उपस्थिति, ग्रेड A।', alts(
      ['Blockchain supply chain demo.', 'ब्लॉकचेन सप्लाई चेन।'],
      ['Published one paper in college symposium.', 'सिम्पोजियम एक पेपर।'],
      ['Education answers should be factual.', 'शिक्षा जवाब तथ्य।']
    )),
    turn('Person', 'Solid foundation.', 'मज़बूत बुनियाद।', alts(
      ['Matches our grad hire bar.', 'ग्रेजुएट बार मेल।'],
      ['Moving on.', 'आगे।']
    )),
    turn('You', 'Happy to share project repo link.', 'रिपो लिंक शेयर खुशी।', alts(
      ['College shaped my discipline.', 'कॉलेज अनुशासन।'],
      ['Thanks.', 'धन्यवाद।'],
      ['Next question ready.', 'अगला तैयार।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'grades-subjects', 'Grades and Subjects', [
    turn('Person', 'Your CGPA is seven point one. Comments?', 'CGPA सात एक। टिप्पणी?', alts(
      ['Low marks in math?', 'गणित कम?'],
      ['Favorite subject?', 'पसंदीदा विषय?']
    )),
    turn('You', 'Early years were average, final two years above eight point five.', 'शुरू औसत, अंतिम दो आठ पाँच से ऊपर।', alts(
      ['Math improved after extra practice.', 'गणित अतिरिक्त अभ्यास बाद ठीक।'],
      ['I focused on projects over exams sometimes.', 'कभी परीक्षा से प्रोजेक्ट।'],
      ['CGPA does not show hackathon wins.', 'CGPA हैकाथॉन नहीं दिखाता।']
    )),
    turn('Person', 'Which subjects helped your job?', 'कौन से विषय नौकरी मदद?', alts(
      ['Any backlogs cleared?', 'बैकलॉग?'],
      ['Online courses?', 'ऑनलाइन कोर्स?']
    )),
    turn('You', 'Operating systems and networking help daily in backend work.', 'OS नेटवर्किंग रोज बैकएंड।', alts(
      ['DBMS for schema design.', 'DBMS स्कीमा।'],
      ['No pending backlogs.', 'बैकलॉग नहीं।'],
      ['Coursera distributed systems completed.', 'Coursera वितरित सिस्टम।']
    )),
    turn('Person', 'Honest about improvement.', 'सुधार ईमानदारी।', alts(
      ['We value growth.', 'विकास कद्र।'],
      ['Grades not everything.', 'ग्रेड सब नहीं।']
    )),
    turn('You', 'I agree. Skills and delivery matter more now.', 'सहमत। कौशल डिलीवरी अब ज़्यादा।', alts(
      ['Still I worked to raise GPA final year.', 'फिर भी अंतिम वर्ष GPA बढ़ाया।'],
      ['Grades subject talk needs no excuses.', 'बहाने नहीं।'],
      ['Ready for skill round.', 'कौशल राउंड।']
    )),
    turn('Person', 'Skill round next.', 'अगला कौशल।', alts(
      ['Take five minutes.', 'पाँच मिनट।'],
      ['Good attitude.', 'अच्छा रवैया।']
    )),
    turn('You', 'Thank you. I will grab water.', 'धन्यवाद। पानी।', alts(
      ['Honest grade story builds trust.', 'ईमानदार ग्रेड भरोसा।'],
      ['Back in five.', 'पाँच में वापस।'],
      ['Okay.', 'ठीक।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'gap-year', 'Gap Year Explanation', [
    turn('Person', 'There is a gap of fourteen months on your resume.', 'रिज़्यूमे चौदह महीने अंतराल।', alts(
      ['Why no job in twenty twenty two?', 'बाईस में नौकरी क्यों नहीं?'],
      ['Career break explain.', 'करियर ब्रेक।']
    )),
    turn('You', 'I took time for family health and completed a cloud certification.', 'परिवार स्वास्थ्य, क्लाउड प्रमाणपत्र पूरा।', alts(
      ['Startup I joined shut down, I upskilled before next role.', 'स्टार्टअप बंद, अगली भूमिका पहले अपस्किल।'],
      ['Preparation for civil services attempt, then returned to tech.', 'सिविल प्रयास, फिर टेक।'],
      ['Visa delay for onsite, worked freelance meanwhile.', 'वीज़ा देर, बीच फ्रीलांस।']
    )),
    turn('Person', 'Why not mention in cover letter?', 'कवर लेटर क्यों नहीं?', alts(
      ['Productive during gap?', 'अंतराल उत्पादक?'],
      ['Risk hiring gap?', 'अंतराल जोखिम?']
    )),
    turn('You', 'Fair point. I should have stated it upfront. I stayed productive.', 'सही। पहले बताना चाहिए था। उत्पादक रहा।', alts(
      ['Built two portfolio projects during gap.', 'अंतराल दो पोर्टफोलियो।'],
      ['Volunteered tech support for NGO.', 'NGO टेक सपोर्ट।'],
      ['Gap answers need honesty not drama.', 'ईमानदारी नाटक नहीं।']
    )),
    turn('Person', 'What prevents repeat gap?', 'दोहराव कैसे रोके?', alts(
      ['Ready for full pace?', 'पूरा गति तैयार?'],
      ['References from gap period?', 'अंतराल संदर्भ?']
    )),
    turn('You', 'Family situation stable now. I am fully available and motivated.', 'परिवार स्थिर। पूर्ण उपलब्ध प्रेरित।', alts(
      ['Freelance client reference available.', 'फ्रीलांस संदर्भ।'],
      ['I chose this role for long term.', 'लंबी अवधि यह भूमिका।'],
      ['No repeat gap planned.', 'दोहराव योजना नहीं।']
    )),
    turn('Person', 'Acceptable explanation.', 'स्वीकार्य।', alts(
      ['Let us proceed.', 'आगे।'],
      ['Documentation later.', 'बाद दस्तावेज़।']
    )),
    turn('You', 'Thank you for hearing the full context.', 'पूरा संदर्भ सुनने धन्यवाद।', alts(
      ['Gap year handled with facts.', 'तथ्य संग अंतराल।'],
      ['Ready to focus on role.', 'भूमिका फोकस।'],
      ['Next question.', 'अगला सवाल।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'certifications', 'Certifications', [
    turn('Person', 'You list AWS and Kubernetes certs. How recent?', 'AWS Kubernetes प्रमाण। कितने हाल?', alts(
      ['Certification vs experience?', 'प्रमाण बनाम अनुभव?'],
      ['Paid courses?', 'पेड कोर्स?']
    )),
    turn('You', 'AWS Solutions Architect last year, CKA renewed six months ago.', 'AWS पिछले साल, CKA छह महीने नवीनीकृत।', alts(
      ['Azure fundamentals during college.', 'कॉलेज Azure बुनियाद।'],
      ['Scrum master cert for team lead role.', 'स्क्रम मास्टर टीम लीड।'],
      ['Certs support hands on, not replace it.', 'प्रमाण हाथ से मदद, बदला नहीं।']
    )),
    turn('Person', 'Applied at work?', 'काम पर लागू?', alts(
      ['Exam only knowledge?', 'सिर्फ परीक्षा?'],
      ['Company paid?', 'कंपनी पे?']
    )),
    turn('You', 'I migrated one service to EKS using those skills.', 'EKS माइग्रेशन उन कौशल से।', alts(
      ['Cost saved twenty percent on cloud bill.', 'क्लाउड बिल बीस प्रतिशत बचत।'],
      ['Self funded, studied weekends.', 'खुद पैसा, वीकेंड पढ़ाई।'],
      ['Labs mattered more than multiple choice.', 'लैब MCQ से ज़्यादा।']
    )),
    turn('Person', 'Good application story.', 'अच्छी लागू कहानी।', alts(
      ['Other learning habits?', 'और सीख आदत?'],
      ['Over certified?', 'ज़्यादा प्रमाण?']
    )),
    turn('You', 'I read release notes and internal postmortems weekly.', 'रिलीज़ नोट पोस्टमॉर्टम साप्ताहिक।', alts(
      ['Certs are checkpoints, not finish line.', 'प्रमाण चेकपॉइंट, अंत नहीं।'],
      ['Happy to skip cert talk if you prefer projects.', 'चाहें तो प्रोजेक्ट।'],
      ['Certification shows learning discipline.', 'प्रमाण अनुशासन।']
    )),
    turn('Person', 'Discipline noted.', 'अनुशासन नोट।', alts(
      ['Practical test next.', 'व्यावहारिक अगला।'],
      ['Impressive.', 'प्रभावशाली।']
    )),
    turn('You', 'Ready for practical.', 'व्यावहारिक तैयार।', alts(
      ['Thanks for valuing certs fairly.', 'प्रमाण उचित कद्र।'],
      ['Education section complete.', 'शिक्षा पूर्ण।'],
      ['Continue.', 'जारी।']
    )),
  ]),
]);
