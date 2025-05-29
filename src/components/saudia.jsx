import React from "react";

const Saudi = () => {
  const visaTypes = [
    {
      title: "تأشيرة سياحية",
      description:
        "تأشيرة مخصصة للزيارات السياحية القصيرة. تتيح لك البقاء في السعودية لفترة محددة بهدف السياحة.",
    },
    {
      title: "تأشيرة عمل",
      description:
        "مخصصة للأشخاص الذين ينوون العمل في المملكة. تتطلب وجود عقد عمل وشروط خاصة للحصول عليها.",
    },
    {
      title: "تأشيرة زيارة عائلية",
      description:
        "تُمنح لزيارة أفراد العائلة المقيمين في السعودية. تسمح بالإقامة لفترة محددة.",
    },
    {
      title: "تأشيرة حج وعمرة",
      description:
        "مخصصة للحجاج والمعتمرين لأداء مناسك الحج أو العمرة.",
    },
    {
      title: "تأشيرة تجارية",
      description:
        "مخصصة للأشخاص الراغبين في القيام بأنشطة تجارية أو حضور مؤتمرات في المملكة.",
    },
    {
      title: "تأشيرة طالب",
      description:
        "تُمنح للطلاب الذين يرغبون في الدراسة في السعودية، وتكون صالحة طوال فترة الدراسة.",
    },
    {
      title: "تأشيرة انتقالية (ترانزيت)",
      description:
        "تأشيرة قصيرة المدة للأشخاص الذين يمرون عبر السعودية للسفر إلى دولة أخرى.",
    },
    {
      title: "تأشيرة إقامة طويلة الأمد",
      description:
        "تمنح للأشخاص الراغبين في الإقامة لفترة طويلة في المملكة لأغراض متعددة، مثل العمل أو الدراسة أو الزيارات العائلية الممتدة.",
    },
  ];

  return (
    <section dir="rtl" className="bg-white font-[Tajawal,sans-serif] text-[#1A2255]">
      {/* Hero Header */}
      <div className="relative h-72 md:h-96 mb-16">
        <img
          src="/assets/images/saudia.jpg"
          alt="تأشيرات السعودية"
          className="absolute inset-0 w-full h-full object-cover rounded-b-xl"
        />
        <div className="absolute inset-0 bg-black/50 rounded-b-xl"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h2 className="text-4xl font-bold mb-4">أنواع تأشيرات المملكة العربية السعودية</h2>
          <p className="text-sm max-w-2xl">
            تعرف على الأنواع المختلفة للتأشيرات حسب الغرض من السفر.
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
          تختلف المتطلبات والإجراءات حسب نوع التأشيرة. يُنصح بزيارة الموقع الرسمي لوزارة الخارجية السعودية أو السفارة للحصول على أحدث المعلومات قبل التقديم.
        </p>
      </div>
    </section>
  );
};

export default Saudi;
