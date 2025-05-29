import React from "react";

const Muscat = () => {
  const visaTypes = [
    {
      title: "تأشيرة سياحية",
      description:
        "تُمنح للزوار القادمين بغرض السياحة إلى سلطنة عُمان، وتسمح بالبقاء لفترة قصيرة في مسقط وباقي المناطق.",
    },
    {
      title: "تأشيرة عمل",
      description:
        "مخصصة للأشخاص الذين ينوون العمل في عُمان، وتتطلب عقد عمل رسمي من جهة عُمانية.",
    },
    {
      title: "تأشيرة زيارة عائلية",
      description:
        "تُمنح لزيارة أفراد العائلة المقيمين في مسقط أو عُمان، وتحتاج إلى دعوة رسمية من المقيم.",
    },
    {
      title: "تأشيرة تجارية",
      description:
        "موجهة للأشخاص الذين يزورون مسقط لحضور اجتماعات أو فعاليات تجارية أو استثمارية.",
    },
    {
      title: "تأشيرة طالب",
      description:
        "تُمنح للطلاب المسجلين في المؤسسات التعليمية العُمانية، وتكون مرتبطة بمدة الدراسة.",
    },
    {
      title: "تأشيرة عبور (ترانزيت)",
      description:
        "للمسافرين الذين يمرون عبر مسقط في طريقهم إلى وجهة أخرى، وتكون قصيرة المدة.",
    },
    {
      title: "تأشيرة إقامة طويلة الأمد",
      description:
        "مخصصة للأشخاص الراغبين في الإقامة لفترات طويلة في مسقط أو السلطنة، سواءً للعمل أو الدراسة أو العائلة.",
    },
    {
      title: "تأشيرة المستثمرين ورواد الأعمال",
      description:
        "تُمنح للمستثمرين ورواد الأعمال الذين يستثمرون في السلطنة وفق شروط محددة.",
    },
  ];

  return (
    <section dir="rtl" className="bg-white font-[Tajawal,sans-serif] text-[#1A2255]">
      {/* Hero Header */}
      <div className="relative h-72 md:h-96 mb-16">
        <img
          src="/assets/images/msqat.jpeg"
          alt="تأشيرات مسقط"
          className="absolute inset-0 w-full h-full object-cover rounded-b-xl"
        />
        <div className="absolute inset-0 bg-black/50 rounded-b-xl"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h2 className="text-4xl font-bold mb-4">أنواع تأشيرات مسقط، سلطنة عمان</h2>
          <p className="text-sm max-w-2xl">
            تعرف على الأنواع المختلفة للتأشيرات حسب الغرض من السفر إلى مسقط.
          </p>
        </div>
      </div>

      {/* Cards Section */}
      <div className="max-w-6xl mx-auto px-6 pb-16">
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {visaTypes.map(({ title, description }, idx) => (
            <div
              key={idx}
              className="bg-[#F9FAFB] border border-[#E5E7EB] p-5 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-lg font-bold mb-2 text-[#1A2255]">{title}</h3>
              <p className="text-sm text-[#4B5563] leading-relaxed">{description}</p>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-sm text-gray-600 max-w-3xl mx-auto leading-relaxed">
          تختلف المتطلبات والإجراءات حسب نوع التأشيرة. يُنصح بزيارة الموقع الرسمي لوزارة الداخلية العُمانية أو السفارة للحصول على أحدث المعلومات قبل التقديم.
        </p>
      </div>
    </section>
  );
};

export default Muscat;
