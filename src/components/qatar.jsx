import React from "react";
import { useNavigate } from "react-router-dom";

const QatarVisaTypes = () => {
  const navigate = useNavigate();
  const visaTypes = [
    {
      title: "تأشيرة سياحية",
      description:
        "تُمنح للزوار القادمين لغرض السياحة، وتسمح بالبقاء لفترة قصيرة داخل قطر.",
    },
    {
      title: "تأشيرة عمل",
      description:
        "مخصصة للأشخاص الذين ينوون العمل في قطر، وتتطلب عقد عمل رسمي من جهة داخلية.",
    },
    {
      title: "تأشيرة زيارة عائلية",
      description:
        "تُمنح لزيارة أفراد العائلة المقيمين في قطر، وتحتاج إلى دعوة من أحد الأقارب.",
    },
    {
      title: "تأشيرة رجال أعمال",
      description:
        "موجهة للأشخاص الذين يزورون قطر لحضور اجتماعات أو فعاليات تجارية.",
    },
    {
      title: "تأشيرة إقامة طويلة الأمد",
      description:
        "مخصصة للأشخاص الراغبين في الإقامة لفترات طويلة في قطر، سواءً للدراسة أو العمل أو العائلة.",
    },
    {
      title: "تأشيرة طالب",
      description:
        "تُمنح للطلاب المسجلين في المؤسسات التعليمية القطرية، وتكون مرتبطة بمدة الدراسة.",
    },
    {
      title: "تأشيرة عبور (ترانزيت)",
      description:
        "للمسافرين الذين يمرون عبر قطر في طريقهم إلى وجهة أخرى، وتكون قصيرة المدة.",
    },
    {
      title: "تأشيرة إقامة دائمة (بشروط خاصة)",
      description:
        "تُمنح لفئات معينة مثل المستثمرين أو أصحاب المهارات العالية، وفق شروط محددة من الحكومة القطرية.",
    },
    
  ];

  return (
    <section dir="rtl" className="bg-white font-[Tajawal,sans-serif] text-[#1A2255]">
      {/* Header with background image and overlay */}
      <div className="relative h-72 md:h-96 mb-16">
        <img
          src="/assets/images/qatar.jpg"
          alt="قطر"
          className="absolute inset-0 w-full h-full object-cover rounded-b-xl"
        />
        <div className="absolute inset-0 bg-black/50 rounded-b-xl"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h2 className="text-4xl font-bold mb-4">أنواع تأشيرات دولة قطر</h2>
          <p className="text-sm max-w-2xl">
            تعرف على الأنواع المختلفة للتأشيرات المتاحة للسفر إلى قطر.
          </p>
        </div>
      </div>

      {/* Visa Types Grid */}
      <div className="max-w-6xl mx-auto px-6 pb-16">
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {visaTypes.map(({ title, description }, idx) => (
            <div
              key={idx}
              onClick={() => navigate(`/apply-visa?visaType=${encodeURIComponent(title)}&country=قطر`)}
              className="bg-[#F9FAFB] border border-[#E5E7EB] p-5 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer hover:border-[#1A84C4] hover:border-2"
              style={{ cursor: 'pointer' }}
            >
              <h3 className="text-lg font-bold mb-2 text-[#1A2255]">{title}</h3>
              <p className="text-sm text-[#4B5563] leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-sm text-gray-600 max-w-3xl mx-auto leading-relaxed">
          تختلف متطلبات وإجراءات الحصول على التأشيرة حسب نوعها وجنسية مقدم الطلب. يُنصح بالتحقق من أحدث المعلومات من المصادر الرسمية قبل التقديم.
        </p>
      </div>
    </section>
  );
};

export default QatarVisaTypes;
