import React, { useState } from 'react';
import { HelpCircle, PlusCircle, MinusCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

// const faqs = [
//   {
//     question: 'ما هي تأشيرة السياحة؟',
//     answer:
//       'تأشيرة السياحة هي وثيقة رسمية تسمح للشخص بالسفر إلى بلد آخر لأغراض سياحية، مثل العطلات، أو الأنشطة الثقافية، أو زيارة الأصدقاء والأقارب. تختلف متطلبات الحصول على هذه التأشيرة من بلد لآخر وتشمل عادة تقديم جواز السفر، استمارة الطلب، خطة السفر، وصور فوتوغرافية، بالإضافة إلى مستندات تثبت القدرة المالية.',
//   },
//   {
//     question: 'هل أحتاج إلى جواز سفر للحصول على تأشيرة سياحية؟',
//     answer: 'نعم، جميع طلبات التأشيرة تتطلب وجود جواز سفر ساري المفعول.',
//   },
//   {
//     question: 'ما هي المتطلبات لتقديم طلب تأشيرة سياحية؟',
//     answer: 'يجب أن يكون لديك جواز سفر صالح وألا يكون لديك منع من السفر إلى الخارج.',
//   },

//   {
//     question: 'كيف تساعدني Visa VISSASSIT في الحصول على تأشيرة سياحية؟',
//     answer:
//       'نقوم بحجز تذاكر الطيران والفنادق لك، ونوفر التأمين الصحي، ونقوم بإعداد خطابات النية والدوافع بشكل احترافي. نحن أيضًا نملأ استمارات الطلب ونتابع جميع مستنداتك. كل ما عليك فعله هو التوجه للقنصلية لتقديم البصمات والوثائق.',
//   },

//   {
//     question: 'هل الدعوة تساعد في تسريع أو قبول طلب التأشيرة؟',
//     answer: 'نعم، الدعوة يمكن أن تؤثر إيجابًا على نتيجة التأشيرة ولكن لا تسرّع الإجراءات.',
//   },

//   {
//     question: 'أنا لا أعمل حاليًا، هل يمكنني التقديم؟',
//     answer:
//       'نعم، يمكن لأحد أفراد أسرتك من الدرجة الأولى أن يكون كفيلك، أو يمكنك التقديم إذا كان لديك رصيد كافٍ في حسابك البنكي.',
//   },
//   {
//     question:
//       'أنا بانتظار نتيجة تأشيرتي إلى كندا، هل يمكنني التقديم إلى شنغن في هذه الأثناء؟',
//     answer: 'نعم، يمكنك ذلك.',
//   },
//   {
//     question: 'ما هي مدة صلاحية التأمين الصحي للسفر؟',
//     answer: 'تكون مطابقة لمدة رحلتك المخططة.',
//   },
//   {
//     question: 'أنا أقل من 18 عامًا، هل يمكنني التقديم على تأشيرة؟',
//     answer: 'نعم، بشرط الحصول على إذن من الوالدين (موافقة خطية).',
//   },
// ];
const faqs = [
  // السعودية
  {
    question: 'كيف يحصل المصري على تأشيرة سياحية إلى السعودية؟',
    answer: 'يمكن للمصريين التقديم على تأشيرة سياحية إلى السعودية إلكترونيًا إن كانوا مقيمين في دول معينة، أو من خلال مكاتب السفر المعتمدة في مصر. تشمل المتطلبات: جواز سفر ساري، صورة شخصية، حجز فندقي، وتذكرة طيران ذهاب وعودة.',
  },
  {
    question: 'هل يمكن للمصري التقديم على التأشيرة السياحية السعودية أونلاين؟',
    answer: 'إذا كان المصري مقيمًا في دول مثل الإمارات أو دول الخليج، يمكنه التقديم إلكترونيًا. أما من داخل مصر، فيُفضل التقديم عبر مكتب معتمد.',
  },

  // قطر
  {
    question: 'كيف يحصل المصري على تأشيرة سياحة إلى قطر؟',
    answer: 'يمكن للمصريين التقديم على تأشيرة سياحية إلى قطر عبر منصة "Visit Qatar" أو من خلال الفندق المضيف أو وكالات السفر. يجب توفير جواز سفر ساري، حجز فندقي، وتذكرة ذهاب وعودة.',
  },
  {
    question: 'هل يحتاج المصري إلى دعوة للحصول على تأشيرة قطر؟',
    answer: 'ليست إلزامية، لكنها تساعد في دعم الطلب، خاصة إن كانت من مقيم قطري أو شركة داخل الدولة.',
  },

  // الإمارات
  {
    question: 'ما طريقة حصول المصري على تأشيرة سياحية للإمارات؟',
    answer: 'يستطيع المصري التقديم من خلال وكالات السفر أو شركات الطيران الإماراتية مثل طيران الإمارات أو الاتحاد. تشمل المتطلبات جواز سفر، صورة شخصية، حجز فندقي، وتذكرة طيران.',
  },
  {
    question: 'كم مدة تأشيرة السياحة للمصريين إلى الإمارات؟',
    answer: 'تأشيرة السياحة للإمارات للمصريين تكون عادة لمدة 30 يومًا أو 60 يومًا، ويمكن التمديد من داخل الدولة.',
  },

  // سلطنة عُمان (مسقط)
  {
    question: 'كيف يمكن للمصري الحصول على تأشيرة سياحية إلى سلطنة عمان؟',
    answer: 'يمكن التقديم عبر الموقع الرسمي لشرطة عمان السلطانية. يجب أن يكون لدى المصري جواز سفر ساري، صورة شخصية، حجز فندقي، وخطة سفر.',
  },
  {
    question: 'هل المصري بحاجة إلى تأشيرة مسبقة لدخول سلطنة عمان؟',
    answer: 'نعم، المصريون يحتاجون إلى تأشيرة مسبقة. بعض الفئات مثل المقيمين في دول الخليج قد يحصلون على تأشيرة إلكترونية بسهولة.',
  }
  , {
    question: 'هل أحتاج إلى جواز سفر ساري للحصول على تأشيرة سياحية؟',
    answer: 'نعم، يجب أن يكون جواز السفر ساريًا لمدة لا تقل عن 6 أشهر من تاريخ السفر المتوقع.',
  },
  {
    question: 'ما هي المستندات المطلوبة عمومًا للحصول على تأشيرة سياحية؟',
    answer: 'عادة تشمل المستندات المطلوبة: جواز سفر، صورة شخصية، نموذج طلب تأشيرة، إثبات حجز فندقي، تذكرة طيران ذهاب وعودة، تأمين طبي، وكشف حساب بنكي.',
  },

  {
    question: 'هل وجود دعوة يساعد في قبول طلب التأشيرة؟',
    answer: 'نعم، وجود دعوة من مقيم أو جهة داخل الدولة المستضيفة يُعد دعمًا قويًا للطلب لكنه لا يضمن القبول بشكل نهائي.',
  },

  {
    question: 'هل يمكنني التقديم على أكثر من تأشيرة لدول مختلفة في نفس الوقت؟',
    answer: 'نعم، يمكن ذلك، بشرط ألا تكون هناك تعارضات في مواعيد السفر أو متطلبات البصمة لكل سفارة.',
  },
  {
    question: 'ما هي أسباب رفض التأشيرة السياحية؟',
    answer: 'تشمل الأسباب الشائعة: ضعف الملف المالي، نقص في المستندات، غياب نية واضحة للعودة، أو تقديم معلومات غير صحيحة.',
  },
  {
    question: 'هل يمكن استرجاع رسوم التأشيرة إذا تم الرفض؟',
    answer: 'لا، رسوم التأشيرة غير قابلة للاسترداد في حال الرفض في أغلب الدول.',
  },
  {
    question: 'هل أحتاج إلى حجز تذاكر طيران فعلية عند التقديم؟',
    answer: 'ليس بالضرورة. في معظم الحالات يكفي تقديم حجز مبدئي (غير مدفوع بالكامل) لإثبات نية السفر.'
  }
];

const FaqAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-[#f5f9ff] to-[#e8f1fa] font-[Tajawal,sans-serif]" dir="rtl">
      <div className="max-w-3xl mx-auto px-4">
        {/* Section Title */}
        <div className="flex items-center justify-center mb-12 gap-4">
          <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-[#d4dcff] to-[#b8c4ff] shadow">
            <HelpCircle className="w-7 h-7 text-[#1A84C4]" />
          </span>
          <div className="flex flex-col items-center w-full">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#262751] text-center mb-2">
              الأسئلة الشائعة حول تأشيرة السياحة
            </h2>
            <span className="block mx-auto w-24 h-1 rounded-full bg-gradient-to-r from-[#1A84C4] to-[#4CAFDF] mb-2"></span>
          </div>
        </div>
        {/* Accordion Timeline */}
        <div className="relative pl-8 md:pl-16">
          <div className="absolute right-0 top-0 bottom-0 w-2 md:w-3 bg-gradient-to-b from-[#1A84C4] to-[#4CAFDF] rounded-full"></div>
          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="relative flex items-start group">
                {/* Timeline Dot */}
                <span className={`absolute -right-4 md:-right-7 top-2 w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center shadow-lg border-4 md:border-8 border-white bg-gradient-to-br from-[#1A84C4] to-[#4CAFDF] z-10 transition-all duration-300 ${activeIndex === index ? 'scale-110' : ''}`}>
                  {activeIndex === index ? (
                    <MinusCircle className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  ) : (
                    <PlusCircle className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  )}
                </span>
                {/* Card */}
                <div className={`ml-2 md:ml-4 flex-1 bg-white border border-[#1A84C4]/10 rounded-xl shadow transition hover:shadow-lg overflow-hidden ${activeIndex === index ? 'ring-2 ring-[#1A84C4]/40' : ''}`}
                  style={{ marginRight: '2.5rem' }}
                >
                  <button
                    className="w-full flex justify-between items-center text-right px-6 py-4 font-bold text-[#1A84C4] text-lg focus:outline-none"
                    onClick={() => toggleAccordion(index)}
                  >
                    <span className="flex-1 text-right">{faq.question}</span>
                  </button>
                  {activeIndex === index && (
                    <div className="bg-[#f5f9ff] px-6 py-4 text-[#3a3a7c] text-base leading-relaxed rounded-b-xl border-t border-[#1A84C4]/10 animate-fadeIn">
                      {faq.answer}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Call-to-action Box */}
        <div className="mt-16 flex flex-col md:flex-row items-center bg-white rounded-xl shadow-xl border border-[#1A84C4]/10 py-8 px-6 gap-6">
          <span className="inline-flex items-center justify-center w-20 h-20 rounded-full
          bg-[#262751] shadow mb-4 md:mb-0 md:ml-6">
            <img
              src="/assets/images/logovisa.jpg"
              alt="Visa VISSASSIT"
              width="65"
              height="65"
              className="rounded-full object-cover"
            />
          </span>
          <div className="flex-1 text-right">
            <h3 className="text-2xl font-bold text-[#262751] mb-2">هل لديك سؤال آخر؟</h3>
            <p className="mb-4 text-[#3a3a7c] text-base">احصل على جميع الإجابات من خبراء التأشيرات لدينا بسرعة وسهولة.</p>
            <Link to="/contact" className="mt-2 px-8 py-3 rounded-full bg-gradient-to-r from-[#1A84C4] to-[#4CAFDF] text-white font-bold shadow hover:from-[#4CAFDF] hover:to-[#1A84C4] transition-all text-lg inline-block">اتصل بنا</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqAccordion;