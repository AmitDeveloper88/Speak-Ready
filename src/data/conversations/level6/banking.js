import { lesson, turn, alts } from '../helpers.js';

const TOPIC = 'banking';
const TITLE = 'Banking';

export const bankingLessons = Object.fromEntries([
  lesson(TOPIC, TITLE, 'opening-account', 'Opening an Account', [
    turn('Person', 'Welcome to City Bank. New account?', 'सिटी बैंक स्वागत। नया खाता?', alts(
      ['Take a token for savings desk.', 'बचत डेस्क टोकन।'],
      ['KYC documents ready?', 'KYC तैयार?']
    )),
    turn('You', 'I want to open a savings account with debit card.', 'बचत खाता डेबिट कार्ड के साथ।', alts(
      ['Salary account for new job.', 'नई नौकरी वेतन खाता।'],
      ['Joint account with my wife.', 'पत्नी संग संयुक्त।'],
      ['Student account if available.', 'छात्र खाता हो तो।']
    )),
    turn('Person', 'Aadhaar, PAN, and one photo please.', 'आधार, PAN, एक फोटो।', alts(
      ['Address proof also.', 'पता प्रमाण।'],
      ['Minimum balance five thousand.', 'न्यूनतम पाँच हज़ार।']
    )),
    turn('You', 'Here are originals and copies.', 'मूल और कॉपी।', alts(
      ['I can maintain five thousand.', 'पाँच हज़ार रख सकता।'],
      ['Nominee is my mother.', 'नामांकित माँ।'],
      ['Net banking from day one?', 'पहले दिन नेट बैंकिंग?']
    )),
    turn('Person', 'Form filled. Signature here and here.', 'फॉर्म भरा। यहाँ यहाँ हस्ताक्षर।', alts(
      ['Debit card in seven days.', 'कार्ड सात दिन।'],
      ['Instant kit for premium.', 'प्रीमियम तुरंत किट।']
    )),
    turn('You', 'I prefer SMS alerts for every transaction.', 'हर लेनदेन SMS अलर्ट।', alts(
      ['Email statements monthly.', 'मासिक ईमेल स्टेटमेंट।'],
      ['UPI enable on same number.', 'इसी नंबर UPI।'],
      ['Cheque book not needed.', 'चेक बुक नहीं।']
    )),
    turn('Person', 'Alerts enabled. Account active in two hours.', 'अलर्ट चालू। दो घंटे में सक्रिय।', alts(
      ['Welcome kit explains apps.', 'वेलकम किट ऐप।'],
      ['Relationship manager for salary.', 'वेतन RM।']
    )),
    turn('You', 'Thank you. Opening account was smoother than I expected.', 'धन्यवाद। खाता खोलना सोच से आसान।', alts(
      ['Bank visits need document prep.', 'बैंक दस्तावेज़ तैयारी।'],
      ['I will download the app.', 'ऐप डाउनलोड।'],
      ['Good day.', 'अच्छा दिन।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'atm-problem', 'ATM Problem', [
    turn('Person', 'Bank helpline, how may I help?', 'बैंक हेल्पलाइन।', alts(
      ['ATM dispute desk.', 'ATM विवाद डेस्क।'],
      ['Card services.', 'कार्ड सेवा।']
    )),
    turn('You', 'The ATM swallowed my card and did not dispense cash.', 'ATM ने कार्ड निगला, नकद नहीं दिया।', alts(
      ['Cash debited but not received.', 'कटा पैसा नहीं मिला।'],
      ['Machine showed error after PIN.', 'PIN के बाद एरर।'],
      ['Receipt says success but no money.', 'रसीद सफल, पैसा नहीं।']
    )),
    turn('Person', 'Which ATM location and time?', 'कौन सा ATM समय?', alts(
      ['Last four digits of card?', 'कार्ड अंतिम चार?'],
      ['Amount attempted?', 'कोशिश राशि?']
    )),
    turn('You', 'Sector eighteen branch ATM, today six fifteen PM, five thousand.', 'सेक्टर अठारह, आज शाम छह पंद्रह, पाँच हज़ार।', alts(
      ['Card ends in two three four five.', 'कार्ड अंत दो तीन चार पाँच।'],
      ['I have the error photo.', 'एरर फोटो है।'],
      ['Still at the machine.', 'अभी मशीन पर।']
    )),
    turn('Person', 'Block card now for safety. Dispute ticket opened.', 'सुरक्षा कार्ड ब्लॉक। विवाद टिकट।', alts(
      ['Cash reverse in forty eight hours if failed.', 'असफल हो तो अड़तालीस घंटे वापसी।'],
      ['New card in five days.', 'नया कार्ड पाँच दिन।']
    )),
    turn('You', 'Please block the card. SMS me the ticket number.', 'कार्ड ब्लॉक करें। टिकट SMS।', alts(
      ['Can I withdraw inside branch tomorrow?', 'कल शाखा निकासी?'],
      ['Need cash tonight for medicine.', 'आज रात दवा नकद।'],
      ['Sorry for the panic tone.', 'घबराहट स्वर माफ़।']
    )),
    turn('Person', 'Ticket nine nine two one. Branch cash possible with ID.', 'टिकट नौ नौ दो एक। आईडी से शाखा नकद।', alts(
      ['We apologize.', 'माफ़ी।'],
      ['Monitor SMS updates.', 'SMS देखें।']
    )),
    turn('You', 'Thank you. I will visit branch tomorrow morning.', 'धन्यवाद। कल सुबह शाखा।', alts(
      ['ATM issues need calm facts.', 'ATM शांत तथ्य।'],
      ['Saved ticket number.', 'टिकट सेव।'],
      ['Goodbye.', 'अलविदा।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'money-transfer', 'Money Transfer', [
    turn('Person', 'Need help with transfer?', 'ट्रांसफर मदद?', alts(
      ['IMPS, NEFT, or RTGS?', 'IMPS, NEFT, RTGS?'],
      ['Business or personal?', 'व्यवसाय या व्यक्तिगत?']
    )),
    turn('You', 'I want to send fifty thousand to my sister urgently.', 'बहन को पचास हज़ार जल्दी।', alts(
      ['Rent payment to landlord account.', 'मकान मालिक खाते किराया।'],
      ['International wire to UK university.', 'UK यूनिवर्सिटी वायर।'],
      ['UPI limit exceeded, need bank transfer.', 'UPI सीमा पार, बैंक ट्रांसफर।']
    )),
    turn('Person', 'IMPS is instant with small fee.', 'IMPS तुरंत छोटी फीस।', alts(
      ['NEFT same day if before cutoff.', 'कटऑफ से पहले NEFT आज।'],
      ['Verify beneficiary name match.', 'लाभार्थी नाम मिलान।']
    )),
    turn('You', 'Use IMPS please. Here is her account and IFSC.', 'IMPS। खाता IFSC।', alts(
      ['Double check spelling of name.', 'नाम वर्तनी दोबारा।'],
      ['Send confirmation SMS to me.', 'मुझे SMS कन्फर्म।'],
      ['Is fifty k within today limit?', 'पचास हज़ार आज सीमा में?']
    )),
    turn('Person', 'Within limit. OTP on your phone now.', 'सीमा में। OTP फोन पर।', alts(
      ['Never share OTP with anyone.', 'OTP किसी को न दें।'],
      ['Read beneficiary aloud.', 'लाभार्थी ज़ोर से पढ़ें।']
    )),
    turn('You', 'OTP entered. Please confirm success on screen.', 'OTP डाला। स्क्रीन सफलता कन्फर्म।', alts(
      ['I see success message.', 'सफल संदेश दिखा।'],
      ['Share UTR number.', 'UTR नंबर।'],
      ['Receipt print please.', 'रसीद प्रिंट।']
    )),
    turn('Person', 'UTR eight eight four two sent. Transfer successful.', 'UTR भेजा। ट्रांसफर सफल।', alts(
      ['Sister should see in minutes.', 'मिनटों में दिखे।'],
      ['Anything else?', 'और?']
    )),
    turn('You', 'That is all. Thanks for guiding IMPS.', 'बस। IMPS मार्गदर्शन शुक्रिया।', alts(
      ['Money talk needs careful listening.', 'पैसा बात सावधान सुनना।'],
      ['Will inform my sister.', 'बहन को बताऊँगा।'],
      ['Good day.', 'अच्छा दिन।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'loan-inquiry', 'Loan Inquiry', [
    turn('Person', 'Home loan desk, how can I assist?', 'होम लोन डेस्क।', alts(
      ['Personal loan information?', 'पर्सनल लोन जानकारी?'],
      ['Car loan rates today?', 'आज कार लोन दर?']
    )),
    turn('You', 'I want to know eligibility for a home loan around forty lakhs.', 'चालीस लाख होम लोन पात्रता।', alts(
      ['Personal loan for medical bills.', 'मेडिकल पर्सनल लोन।'],
      ['Top up on existing loan?', 'मौजूदा लोन टॉप अप?'],
      ['Interest rate for salaried IT?', 'IT वेतनबद्ध ब्याज?']
    )),
    turn('Person', 'Salary slips, ITR, and property papers needed.', 'वेतन पर्ची, ITR, संपत्ति कागज़।', alts(
      ['CIBIL above seven fifty preferred.', 'CIBIL सात सौ पचास ऊपर।'],
      ['Rate starts near eight point five.', 'दर आठ दशमलव पाँच से।']
    )),
    turn('You', 'What EMI for twenty years at that rate?', 'उस दर पर बीस साल EMI?', alts(
      ['Processing fee?', 'प्रोसेसिंग फीस?'],
      ['Prepayment penalty?', 'पूर्व भुगतान जुर्माना?'],
      ['How long for approval?', 'मंज़ूरी कितनी देर?']
    )),
    turn('Person', 'Rough EMI thirty five thousand. Approval two to three weeks.', 'अनुमान EMI पैंतीस हज़ार। मंज़ूरी दो तीन हफ्ते।', alts(
      ['Partial prepayment allowed yearly.', 'वार्षिक आंशिक पूर्व भुगतान।'],
      ['Schedule advisor call?', 'सलाहकार कॉल?']
    )),
    turn('You', 'Please schedule advisor call Saturday morning.', 'शनिवार सुबह सलाहकार कॉल।', alts(
      ['Send brochure on email.', 'ईमेल ब्रोशर।'],
      ['I will gather documents this week.', 'इस हफ्ते कागज़ इकट्ठा।'],
      ['Compare with another bank too.', 'दूसरे बैंक से तुलना।']
    )),
    turn('Person', 'Saturday ten AM booked. Checklist emailed.', 'शनिवार दस बजे। चेकलिस्ट ईमेल।', alts(
      ['No obligation.', 'कोई बाध्यता नहीं।'],
      ['Ask questions freely.', 'खुलकर पूछें।']
    )),
    turn('You', 'Thank you. Loan inquiry feels clearer now.', 'धन्यवाद। लोन पूछताछ साफ।', alts(
      ['Big money needs slow English.', 'बड़ा पैसा धीमी अंग्रेज़ी।'],
      ['I will read checklist tonight.', 'आज रात चेकलिस्ट।'],
      ['See you Saturday.', 'शनिवार मिलते।']
    )),
  ]),
]);
