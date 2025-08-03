import React from "react";
import { useNavigate } from "react-router-dom";

const UAE = () => {
  const navigate = useNavigate();

  const visaTypes = [
    {
      title: "تأشيرة سياحية",
      description:
        "تُمنح للزوار القادمين بغرض السياحة، وتسمح بالبقاء لفترة قصيرة داخل الإمارات.",
    },
    {
      title: "تأشيرة عمل",
      description:
        "مخصصة للأشخاص الذين ينوون العمل في الإمارات وتتطلب عقد عمل رسمي من جهة داخلية.",
    },
    {
      title: "تأشيرة زيارة عائلية",
      description:
        "تُمنح لزيارة أفراد العائلة المقيمين في الإمارات، وتحتاج إلى دعوة رسمية.",
    },
    {
      title: "تأشيرة تجارية",
      description:
        "موجهة للأشخاص الذين يزورون الإمارات لحضور اجتماعات أو فعاليات تجارية.",
    },
    {
      title: "تأشيرة طالب",
      description:
        "مخصصة للطلاب المسجلين في المؤسسات التعليمية في الإمارات، وتكون صالحة طوال فترة الدراسة.",
    },
    {
      title: "تأشيرة علاج طبي",
      description:
        "تُمنح للأشخاص القادمين لتلقي العلاج الطبي في المستشفيات والمراكز الطبية في الإمارات.",
    },
    {
      title: "تأشيرة عبور",
      description:
        "للمسافرين العابرين عبر الإمارات إلى وجهة أخرى، وتكون صالحة لمدة 96 ساعة.",
    },
    {
      title: "تأشيرة إقامة طويلة الأمد",
      description:
        "مخصصة للمستثمرين وأصحاب المواهب والمهنيين ذوي المهارات العالية.",
    },
    {
      title: "تأشيرة طالب",
      description:
        "تُمنح للطلاب المسجلين في المؤسسات التعليمية الإماراتية، وتكون مرتبطة بمدة الدراسة.",
    },
    {
      title: "تأشيرة عبور (ترانزيت)",
      description:
        "للمسافرين الذين يمرون عبر الإمارات في طريقهم إلى وجهة أخرى، وتكون قصيرة المدة.",
    },
    {
      title: "تأشيرة إقامة طويلة الأمد",
      description:
        "مخصصة للأشخاص الراغبين في الإقامة لفترات طويلة في الإمارات، سواءً للدراسة أو العمل أو العائلة.",
    },
    {
      title: "تأشيرة المستثمرين ورواد الأعمال",
      description:
        "تُمنح للمستثمرين ورواد الأعمال الذين يستثمرون في الإمارات وفق شروط محددة.",
    },
  ];

  return (
    <section dir="rtl" className="bg-white font-[Tajawal,sans-serif] text-[#1A2255]">
      {/* Hero Header */}
      <div className="relative h-72 md:h-96 mb-16">
        <img
          src="/assets/images/uae.jpeg"
          alt="تأشيرات الإمارات"
          className="absolute inset-0 w-full h-full object-cover rounded-b-xl"
        />
        <div className="absolute inset-0 bg-black/50 rounded-b-xl"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h2 className="text-4xl font-bold mb-4">أنواع تأشيرات دولة الإمارات العربية المتحدة</h2>
          <p className="text-sm max-w-2xl">
            تعرف على الأنواع المختلفة للتأشيرات حسب الغرض من السفر إلى الإمارات.
          </p>
        </div>
      </div>

      {/* Cards Section */}
      <div className="max-w-6xl mx-auto px-6 pb-16">
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {visaTypes.map(({ title, description }, idx) => (
            <div
              key={idx}
              onClick={() => navigate(`/apply-visa?visaType=${encodeURIComponent(title)}&country=الإمارات`)}
              className="bg-[#F9FAFB] border border-[#E5E7EB] p-5 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer hover:border-[#1A84C4] hover:border-2"
              style={{ cursor: 'pointer' }}
            >
              <h3 className="text-lg font-bold mb-2 text-[#1A2255]">{title}</h3>
              <p className="text-sm text-[#4B5563] leading-relaxed">{description}</p>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-sm text-gray-600 max-w-3xl mx-auto leading-relaxed">
          تختلف المتطلبات والإجراءات حسب نوع التأشيرة. يُنصح بزيارة الموقع الرسمي للهيئة الاتحادية للهوية والجنسية أو السفارة الإماراتية للحصول على أحدث المعلومات قبل التقديم.
        </p>
      </div>
    </section>
  );
};

export default UAE;
