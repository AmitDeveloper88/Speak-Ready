import { lesson, turn, alts } from '../helpers.js';

const TOPIC = 'doctor-visits';
const TITLE = 'Doctor Visits';

export const doctorVisitsLessons = Object.fromEntries([
  lesson(TOPIC, TITLE, 'describing-symptoms', 'Describing Symptoms', [
    turn('Person', 'What brings you in today?', 'आज क्यों आए?', alts(
      ['How are you feeling?', 'कैसा महसूस?'],
      ['Any pain or fever?', 'दर्द या बुखार?']
    )),
    turn('You', 'I have had a sore throat and mild fever since yesterday.', 'कल से गले में खराश, हल्का बुखार।', alts(
      ['Cough and body ache for three days.', 'तीन दिन खाँसी, शरीर दर्द।'],
      ['Stomach pain after meals since Monday.', 'सोमवार से खाने बाद पेट दर्द।'],
      ['Headache and dizziness this morning.', 'आज सुबह सिरदर्द चक्कर।']
    )),
    turn('Person', 'Any difficulty breathing?', 'साँस में तकलीफ?', alts(
      ['Temperature at home?', 'घर तापमान?'],
      ['Allergies to medicine?', 'दवा एलर्जी?']
    )),
    turn('You', 'Breathing is fine. Fever was around hundred one.', 'साँस ठीक। बुखार एक सौ एक।', alts(
      ['No known drug allergy.', 'दवा एलर्जी नहीं।'],
      ['I took paracetamol once.', 'एक बार पैरासिटामोल।'],
      ['Pain worse at night.', 'रात दर्द ज़्यादा।']
    )),
    turn('Person', 'Let me check your throat.', 'गला देखता हूँ।', alts(
      ['Say ah.', 'आह कहिए।'],
      ['Lungs sound clear.', 'फेफड़े साफ।']
    )),
    turn('You', 'Sure doctor.', 'जी डॉक्टर।', alts(
      ['Is it viral?', 'वायरल?'],
      ['Do I need tests?', 'टेस्ट?'],
      ['How many days rest?', 'कितने दिन आराम?']
    )),
    turn('Person', 'Likely viral. Rest, fluids, medicine three days.', 'वायरल। आराम, तरल, दवा तीन दिन।', alts(
      ['Come back if fever spikes.', 'बुखार बढ़े तो आएँ।'],
      ['Avoid cold drinks.', 'ठंडी चीज़ नहीं।']
    )),
    turn('You', 'Thank you doctor. I will follow that.', 'धन्यवाद डॉक्टर। मानूँगा।', alts(
      ['Clear symptoms help diagnosis.', 'साफ लक्षण निदान।'],
      ['When should I return?', 'कब वापस?'],
      ['Have a good day.', 'अच्छा दिन।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'at-pharmacy', 'At the Pharmacy', [
    turn('Person', 'Prescription please.', 'प्रिस्क्रिप्शन।', alts(
      ['How can I help?', 'क्या मदद?'],
      ['OTC or prescribed?', 'बिना या डॉक्टर?']
    )),
    turn('You', 'I need these medicines on the prescription.', 'प्रिस्क्रिप्शन की दवाएँ चाहिए।', alts(
      ['Do you have cough syrup for adults?', 'वयस्क खाँसी सिरप?'],
      ['Same generic as written here?', 'यहाँ लिखा जेनेरिक?'],
      ['Any substitute if out of stock?', 'स्टॉक न हो तो विकल्प?']
    )),
    turn('Person', 'Two items available, one substitute okay?', 'दो मिलीं, एक विकल्प?', alts(
      ['Take after food.', 'खाने के बाद।'],
      ['Show ID for certain tabs.', 'कुछ टैब के लिए आईडी।']
    )),
    turn('You', 'Substitute is fine if same salt.', 'नमक वही हो तो विकल्प ठीक।', alts(
      ['Only branded please.', 'सिर्फ ब्रांड।'],
      ['Explain morning and night dose.', 'सुबह रात खुराक समझाएँ।'],
      ['Total bill?', 'कुल बिल?']
    )),
    turn('Person', 'Morning one, night one after food. Total four twenty.', 'सुबह एक, रात एक खाने बाद। कुल चार सौ बीस।', alts(
      ['Drink water plenty.', 'पानी खूब।'],
      ['Avoid alcohol on antibiotic.', 'एंटीबायोटिक पर शराब नहीं।']
    )),
    turn('You', 'Any side effects I should watch?', 'कौन से साइड इफेक्ट देखूँ?', alts(
      ['UPI payment okay?', 'UPI?'],
      ['Need a bag.', 'थैला चाहिए।'],
      ['How long is the course?', 'कोर्स कितना?']
    )),
    turn('Person', 'Mild nausea possible. Course five days.', 'हल्का मितली। पाँच दिन कोर्स।', alts(
      ['Call doctor if rash.', 'दाने हों तो डॉक्टर।'],
      ['Bill printed.', 'बिल प्रिंट।']
    )),
    turn('You', 'Paid. Thanks for explaining doses.', 'पे किया। खुराक समझाने शुक्रिया।', alts(
      ['Pharmacy talk prevents mistakes.', 'फार्मेसी बात गलती रोकती।'],
      ['I will read the leaflet.', 'पत्रक पढ़ूँगा।'],
      ['Good day.', 'अच्छा दिन।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'follow-up-questions', 'Follow-up Questions', [
    turn('Person', 'Reports look better than last week.', 'रिपोर्ट पिछले हफ्ते से बेहतर।', alts(
      ['How is the pain now?', 'दर्द अब?'],
      ['Did you finish the course?', 'कोर्स पूरा?']
    )),
    turn('You', 'Pain is almost gone. Should I continue the tablets?', 'दर्द लगभग गया। गोली जारी?', alts(
      ['Can I exercise tomorrow?', 'कल व्यायाम?'],
      ['Diet restrictions still?', 'आहार प्रतिबंध?'],
      ['When is the next visit?', 'अगली मुलाकात?']
    )),
    turn('Person', 'Finish two more days, then stop.', 'दो दिन और, फिर बंद।', alts(
      ['Light walk is fine.', 'हल्की सैर ठीक।'],
      ['Avoid fried food one week.', 'एक हफ्ता तला नहीं।']
    )),
    turn('You', 'What signs mean I should come back early?', 'जल्दी वापस आने के संकेत?', alts(
      ['Fever again?', 'फिर बुखार?'],
      ['Can I travel this weekend?', 'इस वीकेंड यात्रा?'],
      ['Work from office okay?', 'ऑफिस काम?']
    )),
    turn('Person', 'Return if fever over hundred two or chest pain.', 'बुखार एक सौ दो से ऊपर या छाती दर्द।', alts(
      ['Travel is okay if you feel well.', 'अच्छा लगे तो यात्रा।'],
      ['Mask in crowded places.', 'भीड़ में मास्क।']
    )),
    turn('You', 'Understood. Thank you for clear follow up.', 'समझा। साफ फॉलो अप शुक्रिया।', alts(
      ['I will note these on phone.', 'फोन नोट।'],
      ['Patients should ask doubts.', 'मरीज़ संदेह पूछे।'],
      ['See you in two weeks.', 'दो हफ्ते बाद।']
    )),
    turn('Person', 'Two weeks unless symptoms return.', 'दो हफ्ते जब तक लक्षण न आएँ।', alts(
      ['Take care.', 'संभाल।'],
      ['Front desk for receipt.', 'रसीद फ्रंट डेस्क।']
    )),
    turn('You', 'Got receipt. Feeling reassured.', 'रसीद मिली। आश्वस्त।', alts(
      ['Doctor visits need good questions.', 'डॉक्टर अच्छे सवाल।'],
      ['Heading home to rest.', 'आराम घर।'],
      ['Thanks again.', 'फिर शुक्रिया।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'medical-reports', 'Medical Reports', [
    turn('Person', 'Your blood test results arrived.', 'ब्लड टेस्ट आया।', alts(
      ['X ray is ready.', 'एक्स रे तैयार।'],
      ['Lab called about report.', 'लैब रिपोर्ट कॉल।']
    )),
    turn('You', 'Is anything serious in the report?', 'रिपोर्ट में गंभीर कुछ?', alts(
      ['Can you explain the high number?', 'ऊँचा नंबर समझाएँ?'],
      ['Do I need more tests?', 'और टेस्ट?'],
      ['Should I see a specialist?', 'विशेषज्ञ?']
    )),
    turn('Person', 'Vitamin D is low, cholesterol slightly borderline.', 'विटामिन D कम, कोलेस्ट्रॉल सीमा पर।', alts(
      ['No emergency.', 'आपात नहीं।'],
      ['Liver enzymes normal.', 'लिवर एंजाइम सामान्य।']
    )),
    turn('You', 'What lifestyle changes do you suggest?', 'कौन से जीवनशैली बदलाव?', alts(
      ['Supplements needed?', 'सप्लीमेंट?'],
      ['Repeat test when?', 'टेस्ट दोहराएँ कब?'],
      ['Diet plan?', 'आहार योजना?']
    )),
    turn('Person', 'Sun morning walk, less fried food, supplement eight weeks.', 'सुबह धूप सैर, कम तला, आठ हफ्ते सप्लीमेंट।', alts(
      ['Repeat test in three months.', 'तीन महीने बाद टेस्ट।'],
      ['Print diet sheet at desk.', 'डेस्क पर आहार शीट।']
    )),
    turn('You', 'Please email the report copy too.', 'रिपोर्ट ईमेल भी।', alts(
      ['Hard copy for insurance.', 'बीमा हार्ड कॉपी।'],
      ['I will share with family doctor.', 'पारिवारिक डॉक्टर शेयर।'],
      ['Thanks for plain language.', 'सादी भाषा शुक्रिया।']
    )),
    turn('Person', 'Email sent. Questions anytime.', 'ईमेल भेजा। कभी पूछें।', alts(
      ['Stay hydrated.', 'हाइड्रेटेड रहें।'],
      ['Book follow up online.', 'ऑनलाइन फॉलो अप।']
    )),
    turn('You', 'Will book online. Reports are less scary now.', 'ऑनलाइन बुक करूँगा। रिपोर्ट कम डरावनी।', alts(
      ['Medical English helps patients.', 'मेडिकल अंग्रेज़ी मदद।'],
      ['Motivated to improve diet.', 'आहार सुधार प्रेरणा।'],
      ['Goodbye doctor.', 'अलविदा डॉक्टर।']
    )),
  ]),
]);
