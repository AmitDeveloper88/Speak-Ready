import { lesson, turn, alts } from '../helpers.js';

const TOPIC = 'invitations';
const TITLE = 'Invitations';

export const invitationsLessons = Object.fromEntries([
  lesson(TOPIC, TITLE, 'inviting-someone', 'Inviting Someone', [
    turn('Person', 'Any plans this Friday evening?', 'इस शुक्रवार शाम प्लान?', alts(
      ['Free Saturday morning?', 'शनिवार सुबह फ्री?'],
      ['Doing anything fun?', 'मज़ा कुछ?'],
      ['Busy weekend?', 'व्यस्त वीकेंड?']
    )),
    turn('You', 'Not yet. Want to join a board game night?', 'अभी नहीं। बोर्ड गेम नाइट?', alts(
      ['Free Friday. Care for dinner?', 'शुक्रवार फ्री। डिनर?'],
      ['Thinking movie night. Interested?', 'मूवी नाइट। रुचि?'],
      ['Hosting chai at my place. Come?', 'घर चाय। आओगे?']
    )),
    turn('Person', 'Board games sound fun. What time?', 'बोर्ड गेम मज़ेदार। कितने बजे?', alts(
      ['Who else is coming?', 'और कौन?'],
      ['Should I bring food?', 'खाना लाऊँ?'],
      ['Where is it?', 'कहाँ?']
    )),
    turn('You', 'Seven PM at my flat in Koramangala.', 'शाम सात, कोरमंगला फ्लैट।', alts(
      ['Koramangala, seven sharp.', 'कोरमंगला, सात ठीक।'],
      ['My place, snacks included.', 'मेरे घर, स्नैक्स।'],
      ['Seven, fifth block, near the park.', 'सात, पाँचवाँ ब्लॉक, पार्क।']
    )),
    turn('Person', 'I can bring chips and drinks.', 'चिप्स और ड्रिंक लाऊँगा।', alts(
      ['Need the address pin.', 'पता पिन?'],
      ['Any game in mind?', 'कौन सा गेम?'],
      ['Can I bring one friend?', 'एक दोस्त?']
    )),
    turn('You', 'One friend is welcome. Sending location now.', 'एक दोस्त वेलकम। लोकेशन भेज रहा।', alts(
      ['Location on WhatsApp.', 'व्हाट्सऐप लोकेशन।'],
      ['Catan and Uno ready.', 'काटान और यूनो।'],
      ['Chips perfect.', 'चिप्स परफेक्ट।']
    )),
    turn('Person', 'Got it. See you Friday.', 'मिल गया। शुक्रवार।', alts(
      ['Looking forward.', 'इंतज़ार।'],
      ['Thanks for inviting.', 'बुलाने शुक्रिया।']
    )),
    turn('You', 'Great. It will be a fun night.', 'बढ़िया। मज़ेदार रात होगी।', alts(
      ['Cannot wait.', 'इंतज़ार नहीं।'],
      ['See you at seven.', 'सात बजे।'],
      ['Feel free to come early.', 'जल्दी आना चाहो तो।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'accepting-invitations', 'Accepting Invitations', [
    turn('Person', 'We are hiking Sunday dawn. Join us?', 'रविवार सुबह हाइक। साथ?', alts(
      ['Dinner at my place tomorrow?', 'कल मेरे घर डिनर?'],
      ['Office party Thursday?', 'गुरुवार ऑफिस पार्टी?'],
      ['Want to co-host the webinar?', 'वेबिनार साथ होस्ट?']
    )),
    turn('You', 'Yes, I would love to join.', 'हाँ, जुड़ना चाहूँगा।', alts(
      ['Count me in.', 'मैं भी।'],
      ['Sounds great, I am in.', 'बढ़िया, मैं तैयार।'],
      ['Thanks for asking. Yes.', 'पूछने शुक्रिया। हाँ।']
    )),
    turn('Person', 'Meet at five thirty AM, trail gate.', 'साढ़े पाँच, ट्रेल गेट।', alts(
      ['Bring water and shoes.', 'पानी जूते।'],
      ['Rain forecast low.', 'बारिश कम संभावना।'],
      ['Carpool from my place?', 'मेरे घर से कार?']
    )),
    turn('You', 'Perfect. I can bring extra water.', 'परफेक्ट। अतिरिक्त पानी लाऊँगा।', alts(
      ['Trail gate works.', 'ट्रेल गेट ठीक।'],
      ['Carpool helps, thanks.', 'कारपूल मदद।'],
      ['I have good hiking shoes.', 'अच्छे जूते हैं।']
    )),
    turn('Person', 'Share your number for the group.', 'ग्रुप के लिए नंबर।', alts(
      ['Beginner friendly pace.', 'शुरुआती गति।'],
      ['Breakfast after hike.', 'हाइक के बाद नाश्ता।']
    )),
    turn('You', 'Sending number now. Excited for sunrise.', 'नंबर भेजा। सूर्योदय उत्सुक।', alts(
      ['Sunrise views motivate me.', 'सूर्योदय प्रेरणा।'],
      ['Thanks for including me.', 'शामिल करने शुक्रिया।'],
      ['Will sleep early Saturday.', 'शनिवार जल्दी सोऊँगा।']
    )),
    turn('Person', 'Sleep early indeed. See you Sunday.', 'सच में जल्दी सोना। रविवार।', alts(
      ['Weather looks clear.', 'मौसम साफ।'],
      ['Bring a light jacket.', 'हल्की जैकेट।']
    )),
    turn('You', 'Will do. Thanks again for the invite.', 'ठीक। फिर बुलावे शुक्रिया।', alts(
      ['Sunday at gate.', 'रविवार गेट।'],
      ['Cannot wait.', 'इंतज़ार।'],
      ['Have a good evening.', 'अच्छी शाम।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'declining-invitations', 'Declining Invitations', [
    turn('Person', 'Pool party at my club Saturday. Coming?', 'शनिवार क्लब पूल पार्टी। आओगे?', alts(
      ['Karaoke tonight?', 'आज रात कराओके?'],
      ['Join our road trip?', 'रोड ट्रिप?'],
      ['Team lunch out tomorrow?', 'कल टीम लंच बाहर?']
    )),
    turn('You', 'Thanks for asking. I cannot make it Saturday.', 'पूछने शुक्रिया। शनिवार नहीं आ पाऊँगा।', alts(
      ['I wish I could, but I am busy.', 'चाहता हूँ, पर व्यस्त।'],
      ['Sorry, Saturday is booked.', 'माफ़, शनिवार बुक।'],
      ['Thanks, I have family plans.', 'शुक्रिया, परिवार प्लान।']
    )),
    turn('Person', 'No worries. Another time?', 'कोई बात नहीं। कभी और?', alts(
      ['Family event?', 'परिवार इवेंट?'],
      ['Work?', 'काम?'],
      ['Health okay?', 'तबीयत ठीक?']
    )),
    turn('You', 'Cousin wedding out of town. Free next week.', 'कज़िन शादी, शहर बाहर। अगले हफ्ते फ्री।', alts(
      ['Family wedding travel.', 'शादी यात्रा।'],
      ['Back Monday. Coffee then?', 'सोमवार वापस। फिर कॉफी?'],
      ['Truly wish I could swim.', 'सच में तैरना चाहता।']
    )),
    turn('Person', 'Coffee next Wednesday works.', 'अगले बुधवार कॉफी।', alts(
      ['Enjoy the wedding.', 'शादी एंजॉय।'],
      ['Send photos.', 'फोटो भेजना।']
    )),
    turn('You', 'Wednesday sounds good. Thanks for understanding.', 'बुधवार ठीक। समझ शुक्रिया।', alts(
      ['Appreciate flexibility.', 'लचीलापन कद्र।'],
      ['Will say hi to the group.', 'ग्रुप को हाय।'],
      ['Hope party is fun.', 'पार्टी मज़ेदार हो।']
    )),
    turn('Person', 'It will be. Miss you there.', 'होगी। वहाँ याद आओगे।', alts(
      ['Wednesday confirmed.', 'बुधवार पक्का।'],
      ['Take care on travel.', 'यात्रा संभाल।']
    )),
    turn('You', 'See you Wednesday. Have fun Saturday.', 'बुधवार मिलते। शनिवार मज़ा।', alts(
      ['Safe travels for me too.', 'मेरी यात्रा सुरक्षित।'],
      ['Thanks again.', 'फिर शुक्रिया।'],
      ['Good night.', 'शुभ रात्रि।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'rescheduling-plans', 'Rescheduling Plans', [
    turn('Person', 'Still on for tennis at six?', 'छह बजे टेनिस?', alts(
      ['Dinner tonight at eight?', 'आज रात आठ डिनर?'],
      ['Meeting at three?', 'तीन बजे मीटिंग?'],
      ['Movie show at seven?', 'सात बजे शो?']
    )),
    turn('You', 'Can we move it to seven? Running late.', 'सात कर सकते? लेट।', alts(
      ['Need to reschedule to seven.', 'सात पर बदलना।'],
      ['Sorry, six is tight. Seven okay?', 'माफ़, छह टाइट। सात?'],
      ['Traffic hit. Push one hour?', 'ट्रैफिक। एक घंटा?']
    )),
    turn('Person', 'Seven works for me.', 'मेरे लिए सात ठीक।', alts(
      ['Court booked till eight.', 'कोर्ट आठ तक।'],
      ['Happens, no stress.', 'होता, तनाव नहीं।'],
      ['Text when you leave?', 'निकलो तो मैसेज?']
    )),
    turn('You', 'Thanks for being flexible. I will ping at six forty.', 'लचीले शुक्रिया। साढ़े छह पिंग।', alts(
      ['Grateful for the shift.', 'बदलाव आभारी।'],
      ['On my way soon.', 'जल्द निकलूँगा।'],
      ['Sorry for the change.', 'बदलाव माफ़।']
    )),
    turn('Person', 'Bring extra balls if you can.', 'हो सके तो अतिरिक्त बॉल।', alts(
      ['Water bottle too.', 'पानी की बोतल।'],
      ['New racket?', 'नई रैकेट?']
    )),
    turn('You', 'Packed already. See you at seven.', 'पैक कर लिया। सात बजे।', alts(
      ['Balls in bag.', 'बॉल बैग में।'],
      ['Court two as usual?', 'हमेशा कोर्ट दो?'],
      ['Thanks again.', 'फिर शुक्रिया।']
    )),
    turn('Person', 'Court two yes. Drive safe.', 'कोर्ट दो हाँ। सुरक्षित चलना।', alts(
      ['No rush now.', 'अब जल्दी नहीं।'],
      ['See you soon.', 'जल्द मिलते।']
    )),
    turn('You', 'Will do. Appreciate the patience.', 'ठीक। धैर्य कद्र।', alts(
      ['Seven sharp.', 'सात ठीक।'],
      ['Good sport.', 'अच्छा साथी।'],
      ['Talk soon.', 'जल्द बात।']
    )),
  ]),
]);
