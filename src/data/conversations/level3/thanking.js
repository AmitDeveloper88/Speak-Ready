import { lesson, turn, alts } from '../helpers.js';

const TOPIC = 'thanking';
const TITLE = 'Thanking';

export const thankingLessons = Object.fromEntries([
  lesson(TOPIC, TITLE, 'casual-thanks', 'Casual Thanks', [
    turn('Person', 'Here, I saved you a seat.', 'लो, तुम्हारे लिए सीट बचाई।', alts(
      ['Got your coffee.', 'तुम्हारी कॉफी ली।'],
      ['Picked this up for you.', 'यह तुम्हारे लिए उठाया।'],
      ['Your parcel arrived.', 'तुम्हारा पार्सल आ गया।']
    )),
    turn('You', 'Oh nice, thanks a lot.', 'अरे बढ़िया, बहुत शुक्रिया।', alts(
      ['Sweet, thank you.', 'प्यारा, शुक्रिया।'],
      ['You are a lifesaver, thanks.', 'तुमने बचा लिया, शुक्रिया।'],
      ['Thanks, I needed that.', 'शुक्रिया, यही चाहिए था।']
    )),
    turn('Person', 'No big deal.', 'कोई बड़ी बात नहीं।', alts(
      ['Anytime.', 'कभी भी।'],
      ['Happy to help.', 'मदद करके खुशी।'],
      ['We look out for each other.', 'एक दूसरे का ध्यान।']
    )),
    turn('You', 'Still, I really appreciate it.', 'फिर भी, सच में कद्र है।', alts(
      ['Means a lot though.', 'फिर भी मायने रखता।'],
      ['I owe you chai.', 'चाय का एहसान।'],
      ['Thanks again.', 'फिर शुक्रिया।']
    )),
    turn('Person', 'Chai sounds good later.', 'बाद में चाय ठीक।', alts(
      ['Buy you lunch someday.', 'कभी लंच।'],
      ['Just pass it forward.', 'आगे बढ़ाओ।']
    )),
    turn('You', 'Deal. Thanks once more.', 'ठीक। एक बार फिर शुक्रिया।', alts(
      ['Done. Grateful.', 'हो गया। आभारी।'],
      ['You rock.', 'तुम कमाल।'],
      ['Catch you after class.', 'क्लास के बाद।']
    )),
    turn('Person', 'See you in five.', 'पाँच मिनट में।', alts(
      ['Do not spill the coffee.', 'कॉफी गिराना मत।'],
      ['Save my seat too.', 'मेरी सीट भी।']
    )),
    turn('You', 'Will do. Thanks again, seriously.', 'ठीक। फिर शुक्रिया, सच में।', alts(
      ['Got it. Bye.', 'समझा। बाय।'],
      ['Thanks buddy.', 'शुक्रिया यार।'],
      ['Appreciate you.', 'तुम्हारी कद्र।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'formal-thanks', 'Formal Thanks', [
    turn('Person', 'Your documents are verified now.', 'आपके दस्तावेज़ सत्यापित हो गए।', alts(
      ['We approved your application.', 'आवेदन स्वीकृत।'],
      ['The form is complete.', 'फॉर्म पूरा।'],
      ['Your request is processed.', 'अनुरोध संसाधित।']
    )),
    turn('You', 'Thank you for your help, sir.', 'मदद के लिए धन्यवाद, सर।', alts(
      ['Thank you very much.', 'आपका बहुत धन्यवाद।'],
      ['I appreciate your support.', 'सहयोग की कद्र।'],
      ['Thanks for guiding me.', 'मार्गदर्शन के लिए शुक्रिया।']
    )),
    turn('Person', 'Glad we could assist.', 'खुशी कि सहायता हो सकी।', alts(
      ['That is our job.', 'यही हमारा काम।'],
      ['Visit if anything else arises.', 'और कुछ हो तो आइए।'],
      ['Please collect your receipt.', 'रसीद लीजिए।']
    )),
    turn('You', 'I am grateful for the quick service.', 'तेज़ सेवा के लिए आभारी।', alts(
      ['Your team was very efficient.', 'टीम बहुत कुशल।'],
      ['This saved me a lot of time.', 'बहुत समय बचा।'],
      ['Professional handling, thank you.', 'पेशेवर व्यवहार, धन्यवाद।']
    )),
    turn('Person', 'Feedback card is optional.', 'फीडबैक कार्ड वैकल्पिक।', alts(
      ['Have a good day ahead.', 'आगे का दिन शुभ।'],
      ['Next window is for payment.', 'अगली खिड़की भुगतान।'],
      ['Keep your reference number safe.', 'संदर्भ संख्या सुरक्षित।']
    )),
    turn('You', 'I will leave positive feedback.', 'सकारात्मक फीडबैक दूँगा।', alts(
      ['Sure, happy to rate.', 'ज़रूर, रेटिंग खुशी से।'],
      ['You deserve it.', 'आप इसके हकदार।'],
      ['Thanks again for everything.', 'सब के लिए फिर धन्यवाद।']
    )),
    turn('Person', 'Thank you. Take care.', 'धन्यवाद। संभाल कर।', alts(
      ['Welcome anytime.', 'कभी स्वागत।'],
      ['Goodbye.', 'नमस्ते।']
    )),
    turn('You', 'Goodbye, and thank you once more.', 'अलविदा, और एक बार धन्यवाद।', alts(
      ['Have a pleasant day.', 'शुभ दिन।'],
      ['Respectful thanks.', 'सादर धन्यवाद।'],
      ['I will recommend your office.', 'आपके कार्यालय की सिफारिश करूँगा।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'professional-thanks', 'Professional Thanks', [
    turn('Person', 'I reviewed your deck. Solid work.', 'डेक देखी। मज़बूत काम।', alts(
      ['Client liked the demo.', 'क्लाइंट को डेमो पसंद।'],
      ['Thanks for staying late.', 'देर तक रुकने का शुक्रिया।'],
      ['Your data was accurate.', 'डेटा सटीक।']
    )),
    turn('You', 'Thank you. Your feedback helped a lot.', 'धन्यवाद। आपकी प्रतिक्रिया बहुत मददगार।', alts(
      ['Thanks for the clear notes.', 'साफ नोट्स के लिए शुक्रिया।'],
      ['I appreciate the quick review.', 'जल्दी रिव्यू की कद्र।'],
      ['Grateful for your guidance.', 'मार्गदर्शन के लिए आभारी।']
    )),
    turn('Person', 'Team effort. You pulled your weight.', 'टीम प्रयास। आपने अपना हिस्सा निभाया।', alts(
      ['Keep this quality.', 'यही क्वालिटी रखें।'],
      ['Client wants a follow up.', 'क्लाइंट फॉलो अप चाहता।'],
      ['Presentation tomorrow still on?', 'कल प्रेज़ेंटेशन?']
    )),
    turn('You', 'Yes, I will refine slides tonight.', 'हाँ, आज रात स्लाइड ठीक करूँगा।', alts(
      ['On track for tomorrow.', 'कल के लिए तैयार।'],
      ['Thanks for trusting me.', 'भरोसे के लिए शुक्रिया।'],
      ['Your inputs are in already.', 'आपके सुझाव जोड़ दिए।']
    )),
    turn('Person', 'Email me the final by nine.', 'नौ बजे तक फाइनल ईमेल।', alts(
      ['CC legal please.', 'लीगल CC।'],
      ['Great collaboration.', 'बढ़िया सहयोग।']
    )),
    turn('You', 'Will do. Thank you for the opportunity.', 'करूँगा। मौका देने के लिए धन्यवाद।', alts(
      ['Sent by eight thirty.', 'साढ़े आठ तक।'],
      ['Thanks for backing me in the meeting.', 'मीटिंग में समर्थन शुक्रिया।'],
      ['I learned from this project.', 'इस प्रोजेक्ट से सीखा।']
    )),
    turn('Person', 'You earned it. Good night.', 'आपने कमाया। शुभ रात्रि।', alts(
      ['Rest well.', 'अच्छी नींद।'],
      ['See you tomorrow.', 'कल मिलते।']
    )),
    turn('You', 'Good night. Thanks again, truly.', 'शुभ रात्रि। फिर सच्चा धन्यवाद।', alts(
      ['Appreciate the mentorship.', 'मेंटरशिप की कद्र।'],
      ['Talk tomorrow.', 'कल बात।'],
      ['Grateful to work with you.', 'आपके साथ काम पर गर्व।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'appreciating-help', 'Appreciating Help', [
    turn('Person', 'I fixed your laptop issue.', 'लैपटॉप ठीक कर दिया।', alts(
      ['Here is the file you needed.', 'फाइल जो चाहिए थी।'],
      ['I talked to HR for you.', 'HR से आपके लिए बात।'],
      ['Gave you a ride home.', 'घर छोड़ा।']
    )),
    turn('You', 'I cannot thank you enough for this.', 'इसके लिए शब्द नहीं।', alts(
      ['You really saved my day.', 'आपने दिन बचाया।'],
      ['Huge thanks for stepping in.', 'बीच में आने का बड़ा शुक्रिया।'],
      ['I am so grateful for your help.', 'मदद के लिए बहुत आभारी।']
    )),
    turn('Person', 'Happy it worked out.', 'खुशी कि हो गया।', alts(
      ['Do not mention it.', 'ज़िक्र मत।'],
      ['We are colleagues.', 'सहकर्मी हैं।'],
      ['Call IT anytime.', 'IT को कभी कॉल।']
    )),
    turn('You', 'You went out of your way. I notice that.', 'आपने extra किया। मैं देखता हूँ।', alts(
      ['Extra effort means a lot.', 'अतिरिक्त प्रयास मायने।'],
      ['Not everyone does that.', 'सब नहीं करते।'],
      ['I will remember this kindness.', 'यह दया याद रहेगी।']
    )),
    turn('Person', 'Buy me lunch next week.', 'अगले हफ्ते लंच तुम्हारा।', alts(
      ['Just pass help forward.', 'मदद आगे बढ़ाओ।'],
      ['Teamwork right?', 'टीमवर्क?']
    )),
    turn('You', 'Lunch is on me, your choice.', 'लंच मेरा, जो चाहो।', alts(
      ['Any day you pick.', 'जो दिन चुनो।'],
      ['Dinner also if you want.', 'चाहो तो डिनर भी।'],
      ['Name the place.', 'जगह बताओ।']
    )),
    turn('Person', 'There is that Thai place.', 'वह थाई जगह।', alts(
      ['Wednesday works?', 'बुधवार?'],
      ['Invite two more?', 'दो और?']
    )),
    turn('You', 'Wednesday perfect. Thanks again, friend.', 'बुधवार परफेक्ट। फिर शुक्रिया, दोस्त।', alts(
      ['Booked. Grateful.', 'बुक। आभारी।'],
      ['You deserve it.', 'आप हकदार।'],
      ['Help like yours builds trust.', 'ऐसी मदद भरोसा बनाती।']
    )),
  ]),
]);
