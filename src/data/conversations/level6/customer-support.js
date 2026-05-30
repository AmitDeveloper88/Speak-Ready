import { lesson, turn, alts } from '../helpers.js';

const TOPIC = 'customer-support';
const TITLE = 'Customer Support';

export const customerSupportLessons = Object.fromEntries([
  lesson(TOPIC, TITLE, 'product-not-working', 'Product Not Working', [
    turn('Person', 'Thanks for calling TechHome support.', 'टेकहोम सपोर्ट।', alts(
      ['Chat support, how can I help?', 'चैट सपोर्ट।'],
      ['Warranty line speaking.', 'वारंटी लाइन।']
    )),
    turn('You', 'My blender stopped working after one week.', 'ब्लेंडर एक हफ्ते बाद बंद।', alts(
      ['Laptop fan is very loud.', 'लैपटॉप पंखा शोर।'],
      ['AC remote not pairing.', 'AC रिमोट पेयर नहीं।'],
      ['Phone battery drains in two hours.', 'फोन बैटरी दो घंटे।']
    )),
    turn('Person', 'Model number and purchase date please.', 'मॉडल नंबर खरीद तारीख।', alts(
      ['Still under warranty?', 'वारंटी में?'],
      ['Any error light?', 'एरर लाइट?']
    )),
    turn('You', 'Model BL four five, bought on Amazon March second.', 'मॉडल BL चार पाँच, अमेज़न दो मार्च।', alts(
      ['Invoice on email.', 'ईमेल इनवॉइस।'],
      ['Motor smells burnt.', 'मोटर जली गंध।'],
      ['Jar is fine, base dead.', 'जार ठीक, बेस बंद।']
    )),
    turn('Person', 'Under warranty. Pickup for repair or replacement.', 'वारंटी। मरम्मत या बदल पिकअप।', alts(
      ['Try reset once.', 'एक बार रीसेट।'],
      ['Service center list on SMS.', 'SMS सेंटर सूची।']
    )),
    turn('You', 'Replacement preferred if possible.', 'हो सके तो बदलना।', alts(
      ['How many days turnaround?', 'कितने दिन?'],
      ['Pickup address same as order.', 'पिकअप पता ऑर्डर जैसा।'],
      ['Temporary refund if delayed?', 'देरी हो तो अस्थायी रिफंड?']
    )),
    turn('Person', 'Replacement pickup tomorrow, refund if stock fails.', 'कल पिकअप बदल, स्टॉक न हो तो रिफंड।', alts(
      ['Ticket T seven eight nine.', 'टिकट T सात आठ नौ।'],
      ['Sorry for trouble.', 'परेशानी माफ़।']
    )),
    turn('You', 'Ticket noted. Thanks for quick help.', 'टिकट नोट। जल्दी मदद शुक्रिया।', alts(
      ['Support calls need model details ready.', 'सपोर्ट मॉडल तैयार।'],
      ['I will pack original box.', 'मूल डिब्बा पैक।'],
      ['Goodbye.', 'अलविदा।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'refund-request', 'Refund Request', [
    turn('Person', 'Returns team, order ID please.', 'रिटर्न टीम, ऑर्डर ID।', alts(
      ['Refund status line.', 'रिफंड स्टेटस।'],
      ['Marketplace support.', 'मार्केटप्लेस सपोर्ट।']
    )),
    turn('You', 'I returned shoes ten days ago, refund not received.', 'जूते दस दिन पहले लौटाए, रिफंड नहीं।', alts(
      ['Cancelled flight refund pending.', 'फ्लाइट रद्द रिफंड लंबित।'],
      ['Double charged, need reversal.', 'दो बार चार्ज, उलट।'],
      ['Course cancelled, money back please.', 'कोर्स रद्द, पैसा वापस।']
    )),
    turn('Person', 'I see return scanned on March twenty.', 'रिटर्न बीस मार्च स्कैन।', alts(
      ['Bank takes five to seven days.', 'बैंक पाँच सात दिन।'],
      ['Refund queued yesterday.', 'कल कतार में।']
    )),
    turn('You', 'Today is day twelve. Can you escalate?', 'आज दिन बारह। एस्केलेट?', alts(
      ['Need refund before rent date.', 'किराया तारीख से पहले।'],
      ['Send email confirmation.', 'ईमेल कन्फर्म।'],
      ['Original payment was UPI.', 'मूल UPI था।']
    )),
    turn('Person', 'Escalated to supervisor. Refund initiated now.', 'सुपरवाइज़र। रिफंड अभी शुरू।', alts(
      ['Expect credit in forty eight hours.', 'अड़तालीस घंटे क्रेडिट।'],
      ['Compensation coupon added.', 'कूपन मुआवज़ा।']
    )),
    turn('You', 'Please share reference number for my bank.', 'बैंक के लिए संदर्भ नंबर।', alts(
      ['Coupon appreciated.', 'कूपन कद्र।'],
      ['I will watch UPI statement.', 'UPI स्टेटमेंट देखूँगा।'],
      ['Thanks for escalating.', 'एस्केलेट शुक्रिया।']
    )),
    turn('Person', 'Reference RF two two four five emailed.', 'संदर्भ RF ईमेल।', alts(
      ['Call back if not credited.', 'क्रेडिट न हो तो कॉल।'],
      ['Anything else?', 'और?']
    )),
    turn('You', 'That is enough. Polite firm tone worked.', 'बस। विनम्र दृढ़ स्वर काम आया।', alts(
      ['Refund talk needs dates ready.', 'रिफंड तारीख तैयार।'],
      ['I will check in two days.', 'दो दिन बाद चेक।'],
      ['Thanks.', 'शुक्रिया।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'late-delivery', 'Late Delivery', [
    turn('Person', 'Delivery support, sorry for the delay.', 'डिलीवरी सपोर्ट, देरी माफ़।', alts(
      ['Courier partner line.', 'कूरियर पार्टनर।'],
      ['Where is my order team.', 'ऑर्डर कहाँ टीम।']
    )),
    turn('You', 'My order was promised yesterday, still not here.', 'कल का वादा, अभी नहीं।', alts(
      ['Gift for birthday today, very late.', 'आज जन्मदिन गिफ्ट, बहुत लेट।'],
      ['Grocery slot missed twice.', 'किराना स्लॉट दो बार छूटा।'],
      ['Tracking stuck since Monday.', 'ट्रैकिंग सोमवार से अटकी।']
    )),
    turn('Person', 'Heavy rain caused hub backlog.', 'भारी बारिश हब बैकलॉग।', alts(
      ['Out for delivery today by six.', 'आज छह तक डिलीवरी।'],
      ['Package misrouted, fixed now.', 'गलत रूट, ठीक।']
    )),
    turn('You', 'Can you confirm delivery before six PM?', 'छह से पहले डिलीवरी कन्फर्म?', alts(
      ['I need compensation for delay.', 'देरी मुआवज़ा।'],
      ['Cancel if not today.', 'आज नहीं तो रद्द।'],
      ['Call rider directly?', 'राइडर सीधे कॉल?']
    )),
    turn('Person', 'Priority flagged, rider will call thirty minutes before.', 'प्राथमिकता, तीस मिनट पहले कॉल।', alts(
      ['Waive delivery fee.', 'डिलीवरी फीस माफ़।'],
      ['Ten percent coupon sent.', 'दस प्रतिशत कूपन।']
    )),
    turn('You', 'Fee waiver helps. I will wait till six.', 'फीस माफ़ मदद। छह तक इंतजार।', alts(
      ['Please update tracking live.', 'लाइव ट्रैकिंग अपडेट।'],
      ['Birthday gift stress reduced a bit.', 'गिफ्ट तनाव थोड़ा कम।'],
      ['Thanks for listening.', 'सुनने शुक्रिया।']
    )),
    turn('Person', 'Tracking refreshed. Apologies again.', 'ट्रैकिंग रिफ्रेश। फिर माफ़ी।', alts(
      ['SMS when out for delivery.', 'डिलीवरी पर SMS।'],
      ['We value your patience.', 'धैर्य कद्र।']
    )),
    turn('You', 'I will watch SMS. Hope it arrives on time.', 'SMS देखूँगा। समय पर आए।', alts(
      ['Late delivery English is common online.', 'ऑनलाइन देरी बात सामान्य।'],
      ['Escalate again if missed.', 'छूटे फिर एस्केलेट।'],
      ['Bye.', 'अलविदा।']
    )),
  ]),

  lesson(TOPIC, TITLE, 'wrong-bill-charge', 'Wrong Bill Charge', [
    turn('Person', 'Billing department, name on account?', 'बिलिंग, खाते नाम?', alts(
      ['Subscription support.', 'सब्सक्रिप्शन सपोर्ट।'],
      ['Mobile plan helpline.', 'मोबाइल प्लान।']
    )),
    turn('You', 'My bill shows nine ninety nine but plan is seven ninety nine.', 'बिल नौ निन्यानवे, प्लान सात निन्यानवे।', alts(
      ['Charged for data I did not use.', 'अनुपयोगी डेटा चार्ज।'],
      ['Annual fee without notice.', 'बिना नोटिस वार्षिक फीस।'],
      ['Roaming charge while in India.', 'भारत में रोमिंग चार्ज।']
    )),
    turn('Person', 'I see an add on pack active.', 'ऐड ऑन पैक सक्रिय।', alts(
      ['Free trial ended last month.', 'फ्री ट्रायल पिछले महीने खत्म।'],
      ['Maybe family member subscribed.', 'परिवार सदस्य सब्सक्राइब?']
    )),
    turn('You', 'I did not activate add on. Please remove and refund.', 'ऐड ऑन नहीं चालू किया। हटाएँ रिफंड।', alts(
      ['Show me activation proof.', 'सक्रियण प्रमाण।'],
      ['Disable auto renew now.', 'ऑटो नवीनीकरण बंद।'],
      ['Adjust this month bill.', 'इस महीने बिल ठीक।']
    )),
    turn('Person', 'Removed add on, two month credit applied.', 'ऐड ऑन हटा, दो महीने क्रेडिट।', alts(
      ['Refund one month on card.', 'एक महीना कार्ड रिफंड।'],
      ['SMS confirmation sent.', 'SMS कन्फर्म।']
    )),
    turn('You', 'Please email breakdown for my records.', 'रिकॉर्ड ईमेल विवरण।', alts(
      ['Confirm no future add ons.', 'भविष्य ऐड ऑन नहीं।'],
      ['Thanks for fixing quickly.', 'जल्दी ठीक शुक्रिया।'],
      ['I almost paid without checking.', 'जाँच के बिना लगभग पे कर देता।']
    )),
    turn('Person', 'Email sent. Always review bill before pay.', 'ईमेल। पे से पहले बिल देखें।', alts(
      ['Auto debit can be paused.', 'ऑटो डेबिट रोक।'],
      ['Happy to help.', 'मदद खुशी।']
    )),
    turn('You', 'I will review monthly now. Case closed.', 'अब मासिक देखूँगा। मामला बंद।', alts(
      ['Wrong bill needs calm proof.', 'गलत बिल शांत प्रमाण।'],
      ['Credit noted.', 'क्रेडिट नोट।'],
      ['Goodbye.', 'अलविदा।']
    )),
  ]),
]);
