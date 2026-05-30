import { lesson, turn, alts } from '../helpers.js';

const TOPIC = 'shopping';
const TITLE = 'Shopping';

export const shoppingLessons = Object.fromEntries([
  lesson(TOPIC, TITLE, 'asking-price', 'Asking the Price', [
    turn('Person', 'Hello, looking for something specific?', 'कुछ खास ढूँढ रहे?', alts(
      ['Welcome to our store.', 'स्टोर में स्वागत।'],
      ['Just browsing?', 'सिर्फ देख रहे?']
    )),
    turn('You', 'How much is this blue cotton shirt?', 'नीली कॉटन शर्ट कितने की?', alts(
      ['Price for these shoes?', 'जूते की कीमत?'],
      ['What is the final price on this bag?', 'बैग की अंतिम कीमत?'],
      ['Is this on sale?', 'सेल पर है?']
    )),
    turn('Person', 'That shirt is nine ninety nine.', 'शर्ट नौ सौ निन्यानवे।', alts(
      ['MRP is on the tag.', 'MRP टैग पर।'],
      ['Shoes start at two four ninety.', 'जूते दो हज़ार चार सौ से।']
    )),
    turn('You', 'Any discount if I buy two?', 'दो लूँ तो छूट?', alts(
      ['Student discount available?', 'स्टूडेंट छूट?'],
      ['Online price match?', 'ऑनलाइन मैच?'],
      ['Last price for cash?', 'कैश अंतिम?']
    )),
    turn('Person', 'Ten percent off on two pieces.', 'दो पर दस प्रतिशत।', alts(
      ['Festival offer running.', 'त्योहार ऑफर।'],
      ['I can check with manager.', 'मैनेजर से पूछूँ।']
    )),
    turn('You', 'Fair. I will take one in medium.', 'ठीक। एक मीडियम।', alts(
      ['Let me try first.', 'पहले ट्राय।'],
      ['Show medium in black too.', 'काला मीडियम भी।'],
      ['I will decide in a minute.', 'एक मिनट।']
    )),
    turn('Person', 'Trial room is on the left.', 'ट्राय रूम बाएँ।', alts(
      ['Billing counter that way.', 'बिलिंग उधर।'],
      ['Exchange within seven days.', 'सात दिन एक्सचेंज।']
    )),
    turn('You', 'Thanks. Clear price helps.', 'शुक्रिया। साफ कीमत मदद।', alts(
      ['Asking price is normal.', 'कीमत पूछना सामान्य।'],
      ['I will try and come back.', 'ट्राय कर आऊँगा।'],
      ['Good service.', 'अच्छी सेवा।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'trying-clothes', 'Trying Clothes', [
    turn('Person', 'Which size do you usually wear?', 'आमतौर कौन सा साइज़?', alts(
      ['Need a different size?', 'दूसरा साइज़?'],
      ['How is the fit?', 'फिट कैसी?']
    )),
    turn('You', 'Medium usually, but this feels tight on shoulders.', 'आमतौर मीडियम, कंधे पर तंग।', alts(
      ['Large may work better.', 'लार्ज बेहतर।'],
      ['Waist is fine, length is long.', 'कमर ठीक, लंबाई ज़्यादा।'],
      ['Can I try large in same color?', 'वही रंग लार्ज?']
    )),
    turn('Person', 'I will bring large. Color is popular.', 'लार्ज लाता। रंग लोकप्रिय।', alts(
      ['Alteration free for length.', 'लंबाई सिलाई मुफ्त।'],
      ['Stretch fabric version also.', 'स्ट्रेच भी।']
    )),
    turn('You', 'Large fits well. Sleeve still a bit long.', 'लार्ज ठीक। आस्तीन थोड़ी लंबी।', alts(
      ['Perfect fit, I will take it.', 'परफेक्ट, लूँगा।'],
      ['Maybe medium in stretch?', 'स्ट्रेच मीडियम?'],
      ['Need hem shortened.', 'घेर छोटा करवाना।']
    )),
    turn('Person', 'Hem done by tomorrow evening.', 'कल शाम तक घेर।', alts(
      ['Wear with these trousers.', 'इन पैंट के साथ पहनें।'],
      ['Mirror here.', 'आईना यहाँ।']
    )),
    turn('You', 'Great. I will buy with alteration.', 'बढ़िया। सिलाई के साथ खरीदूँगा।', alts(
      ['Without alteration also okay.', 'बिना सिलाई भी ठीक।'],
      ['Match belt on rack?', 'रैक पर बेल्ट?']
    )),
    turn('Person', 'Belt aisle near shoes.', 'बेल्ट जूतों के पास।', alts(
      ['Bill with alteration tag.', 'बिल पर सिलाई टैग।'],
      ['Pickup after six PM.', 'शाम छह बाद लें।']
    )),
    turn('You', 'Perfect. Trying before buying helps.', 'बढ़िया। पहले ट्राय फायदेमंद।', alts(
      ['Thanks for size swap.', 'साइज़ बदलने शुक्रिया।'],
      ['See you at pickup.', 'पिकअप पर।'],
      ['Comfort matters most.', 'आराम सबसे।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'return-exchange', 'Return or Exchange', [
    turn('Person', 'How can I help at the desk?', 'डेस्क पर क्या मदद?', alts(
      ['Return or exchange?', 'वापस या बदल?'],
      ['Receipt please.', 'रसीद।']
    )),
    turn('You', 'I want to exchange this kettle. It leaks.', 'केटली बदलनी। रिसती।', alts(
      ['Return these shoes, sole came off.', 'जूते वापस, तलवा उतरा।'],
      ['Wrong size delivered online.', 'ऑनलाइन गलत साइज़।'],
      ['Color different from website photo.', 'वेबसाइट से रंग अलग।']
    )),
    turn('Person', 'Sorry about that. Bill and box please.', 'माफ़। बिल और डिब्बा।', alts(
      ['Within policy window?', 'नीति अवधि में?'],
      ['When did you buy?', 'कब खरीदा?']
    )),
    turn('You', 'Here is bill and full packing. Bought three days ago.', 'बिल और पैकिंग। तीन दिन पहले।', alts(
      ['Amazon invoice on phone.', 'फोन पर अमेज़न इनवॉइस।'],
      ['Tags still attached.', 'टैग लगे।'],
      ['Used once only for testing.', 'एक बार टेस्ट।']
    )),
    turn('Person', 'We can replace same model or refund.', 'वही मॉडल या रिफंड।', alts(
      ['Store credit also option.', 'स्टोर क्रेडिट।'],
      ['Manager approved exchange.', 'मैनेजर ने मंज़ूर।']
    )),
    turn('You', 'Replacement please, I still need a kettle.', 'बदलना चाहिए, केटली चाहिए।', alts(
      ['Refund to original card.', 'मूल कार्ड रिफंड।'],
      ['Upgrade model with price diff.', 'अंतर भर अपग्रेड।'],
      ['Check new piece before I leave.', 'जाने से पहले नई जाँच।']
    )),
    turn('Person', 'Tested new unit in front of you. All good.', 'नई आपके सामने टेस्ट।', alts(
      ['Exchange slip here.', 'एक्सचेंज स्लिप।'],
      ['Warranty card inside.', 'वारंटी कार्ड अंदर।']
    )),
    turn('You', 'Thanks for smooth exchange.', 'सुचारु बदलने शुक्रिया।', alts(
      ['Returns need polite firm talk.', 'वापसी में विनम्र दृढ़ता।'],
      ['Happy now.', 'अब खुश।'],
      ['Have a good day.', 'अच्छा दिन।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'asking-discount', 'Asking for a Discount', [
    turn('Person', 'Final price is on the display.', 'अंतिम कीमत डिस्प्ले पर।', alts(
      ['Already on offer.', 'पहले से ऑफर।'],
      ['MRP fixed for this brand.', 'ब्रांड MRP फिक्स।']
    )),
    turn('You', 'It is slightly over my budget. Any best price today?', 'थोड़ा बजट से ऊपर। आज सबसे अच्छी कीमत?', alts(
      ['Can you do something on price?', 'कीमत पर कुछ?'],
      ['I am a regular customer here.', 'यहाँ नियमित ग्राहक।'],
      ['Cash payment, any extra off?', 'कैश, और छूट?']
    )),
    turn('Person', 'I can take fifty rupees off.', 'पचास रुपये कम।', alts(
      ['Five percent for cash.', 'कैश पाँच प्रतिशत।'],
      ['Bundle with socks saves eighty.', 'मोज़े संग अस्सी बचत।']
    )),
    turn('You', 'If you make it hundred off, I buy now.', 'सौ कम करें तो अभी लूँ।', alts(
      ['Match competitor flyer price?', 'प्रतिस्पर्धी फ्लायर?'],
      ['Two items, better deal?', 'दो चीज़, बेहतर?'],
      ['I will recommend your shop.', 'दुकान सिफारिश करूँगा।']
    )),
    turn('Person', 'Okay, hundred off, deal.', 'ठीक, सौ कम, सौदा।', alts(
      ['Manager nodded.', 'मैनेजर हाँ।'],
      ['Only today for you.', 'सिर्फ आज आपके लिए।']
    )),
    turn('You', 'Done. Please pack and bill.', 'हो गया। पैक बिल।', alts(
      ['Fair bargain, thanks.', 'उचित सौदेबाज़ी।'],
      ['UPI payment okay?', 'UPI ठीक?'],
      ['Need gift wrap.', 'गिफ्ट रैप।']
    )),
    turn('Person', 'Gift wrap free for you.', 'आपके लिए गिफ्ट रैप मुफ्त।', alts(
      ['Bill at counter two.', 'काउंटर दो।'],
      ['Visit again.', 'फिर आइए।']
    )),
    turn('You', 'Appreciate it. Polite ask worked.', 'कद्र। विनम्र पूछ काम आई।', alts(
      ['Discount not always given.', 'हमेशा छूट नहीं।'],
      ['Happy with purchase.', 'खरीद से खुश।'],
      ['Bye.', 'अलविदा।']
    )),
  ]),
]);
