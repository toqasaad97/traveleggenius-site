import React from 'react';

function Blog() {
  const services = [
    {
      id: 1,
      title: "تأشيرة الإمارات",
      subtitle: "شهر واحد",
      processingTime: "24 ساعة",
      description: "صورة الباسبور + صورة شخصية",
      phone: "+201281101081",
      image: "/assets/images/t1.jpeg",
      category: "تأشيرات",
      location: "المعادي، 6 شارع فلسطين، القاهرة - مصر",
    },
    {
      id: 2,
      title: "تأشيرة قطر",
      subtitle: "شهر",
      processingTime: "14 يوم",
      description: "صورة الباسبور + صورة شخصية",
      phone: "+201229417417",
      image: "/assets/images/t2.jpeg",
      category: "تأشيرات",
      location: "المعادي، 6 شارع فلسطين، القاهرة - مصر",
    },
    {
      id: 3,
      title: "تأشيرة مسقط",
      subtitle: "شهر",
      processingTime: "14 يوم",
      description: "صورة الباسبور + صورة شخصية",
      phone: "+201229417417",
      image: "/assets/images/t3.jpeg",
      category: "تأشيرات",
      location: "المعادي، 6 شارع فلسطين، القاهرة - مصر",
    },
    {
      id: 4,
      title: "تأشيرة السعودية",
      subtitle: "شهر",
      processingTime: "48 ساعة",
      description: "صورة الباسبور فقط",
      phone: "+201229417417",
      image: "/assets/images/t4.jpeg",
      category: "تأشيرات",
      location: "المعادي، 6 شارع فلسطين، القاهرة - مصر",
    },
    {
      id: 5,
      title: "تأشيرة الإمارات",
      subtitle: "شهر واحد",
      processingTime: "24 ساعة",
      description: "صورة الباسبور + صورة شخصية",
      phone: "+201281101081",
      image: "/assets/images/t5.jpeg",
      category: "تأشيرات",
      location: "المعادي، 6 شارع فلسطين، القاهرة - مصر",
    },
    {
      id: 6,
      title: "تأمين السفر",
      subtitle: "للتأشيرة",
      processingTime: "5 دقائق",
      description: "صورة الباسبور فقط",
      phone: "+201229417417",
      image: "/assets/images/t6.jpeg",
      category: "خدمات إضافية",
      location: "المعادي، 6 شارع فلسطين، القاهرة - مصر",
    },
    {
      id: 7,
      title: "حجز الفندق",
      subtitle: "للتأشيرة",
      processingTime: "5 دقائق",
      description: "صورة الباسبور فقط",
      phone: "+201229417417",
      image: "/assets/images/t7.jpeg",
      category: "خدمات إضافية",
      location: "المعادي، 6 شارع فلسطين، القاهرة - مصر",
    },
    {
      id: 8,
      title: "حجز الطيران",
      subtitle: "الاقتصادي",
      processingTime: "5 دقائق",
      description: "صورة الباسبور فقط",
      phone: "+201229417417",
      image: "/assets/images/t8.jpeg",
      category: "خدمات إضافية",
      location: "المعادي، 6 شارع فلسطين، القاهرة - مصر",
    },
  ];

  const visaServices = services.filter((service) => service.category === "تأشيرات");
  const additionalServices = services.filter((service) => service.category === "خدمات إضافية");

  return (
    <div className="min-h-screen bg-white" dir="rtl">
      {/* Header */}
      <header className="relative h-96 md:h-[32rem] w-full overflow-hidden">
        {/* Header Image with Overlay */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/assets/images/blog1.webp"
            alt="مدونة التأشيرات والسفر"
            className="w-full h-full object-cover object-center"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A84C4]/90 to-[#1A84C4]/40" />
        </div>
        
        {/* Header Content */}
        <div className="relative z-10 container mx-auto h-full flex flex-col justify-center items-center text-center px-4">
          <div className="max-w-4xl">
            <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-semibold mb-6 border border-white/30">
              بوابة التأشيرات
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              أحدث المقالات والنصائح حول تأشيرات السفر
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              اكتشف أحدث المعلومات والنصائح حول تأشيرات السفر والهجرة من خبرائنا
            </p>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-transparent" />
      </header>

      {/* Main Blog Content */}
      <main className="container mx-auto px-4 py-16">
        {/* Featured Blog Post */}
        <article className="mb-20 bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 md:p-12 border border-[#1A84C4]/10 shadow-lg">
          <div className="text-center mb-8">

            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "#262751" }}>
              دليل شامل لخدمات التأشيرات 
            </h2>
          </div>

          <div className="prose prose-lg max-w-none text-right">
            <p className="text-xl leading-relaxed mb-6" style={{ color: "#4A5568" }}>
              في عالم السفر المتطور، أصبحت الحاجة إلى خدمات تأشيرات موثوقة وسريعة أمراً ضرورياً. نقدم لكم في هذا المقال
              دليلاً شاملاً لجميع خدمات التأشيرات المتاحة مع أحدث المعلومات والمتطلبات.
            </p>

            <h3 className="text-2xl font-bold mb-4" style={{ color: "#262751" }}>
              أنواع التأشيرات المتاحة:
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl border border-[#1A84C4]/10 shadow-md">
                <h4 className="text-xl font-bold mb-3" style={{ color: "#262751" }}>
                  تأشيرات دول الخليج
                </h4>
                <ul className="space-y-2" style={{ color: "#4A5568" }}>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#1A84C4] rounded-full"></span>
                    <span>الإمارات العربية المتحدة</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#1A84C4] rounded-full"></span>
                    <span>دولة قطر</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#1A84C4] rounded-full"></span>
                    <span>المملكة العربية السعودية</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#1A84C4] rounded-full"></span>
                    <span>سلطنة عُمان</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl border border-[#1A84C4]/10 shadow-md">
                <h4 className="text-xl font-bold mb-3" style={{ color: "#262751" }}>
                  خدمات مساندة
                </h4>
                <ul className="space-y-2" style={{ color: "#4A5568" }}>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#4CAFDF] rounded-full"></span>
                    <span>تأمين السفر</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#4CAFDF] rounded-full"></span>
                    <span>حجز الفنادق</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#4CAFDF] rounded-full"></span>
                    <span>حجز تذاكر الطيران</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#4CAFDF] rounded-full"></span>
                    <span>خدمات التصوير</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </article>

        {/* Visa Services Blog Posts */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "#262751" }}>
              خدمات التأشيرات
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: "#4A5568" }}>
              تعرف على تفاصيل كل خدمة ومتطلباتها وأوقات المعالجة
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visaServices.map((service) => (
              <article
                key={service.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-[#1A84C4]/10 hover:border-[#1A84C4]/30"
              >
                <div className="relative">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full border border-[#1A84C4]/20">
                    <span className="text-sm font-semibold" style={{ color: "#262751" }}>
                      {service.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-gradient-to-l from-[#1A84C4] to-[#4CAFDF] text-white px-3 py-1 rounded-full">
                    <span className="text-sm font-semibold">جديد</span>
                  </div>
                </div>

                <div className="p-6">
                  <header className="mb-4">
                    <h3 className="text-2xl font-bold mb-2" style={{ color: "#262751" }}>
                      {service.title}
                    </h3>
                  </header>

                  <div className="space-y-4 mb-6">
                    <div className="bg-gradient-to-l from-blue-50 to-white p-4 rounded-lg border border-[#1A84C4]/10">
                      <h4 className="font-semibold mb-2" style={{ color: "#262751" }}>
                        تفاصيل الخدمة:
                      </h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-3">
                          <div className="w-6 h-6 bg-gradient-to-l from-[#1A84C4] to-[#4CAFDF] rounded-full flex items-center justify-center">
                            <span className="text-white text-xs">⏱️</span>
                          </div>
                          <span style={{ color: "#262751" }}>وقت المعالجة: {service.processingTime}</span>
                        </div>

                        <div className="flex items-center gap-3">
                          <div className="w-6 h-6 bg-gradient-to-l from-[#1A84C4] to-[#4CAFDF] rounded-full flex items-center justify-center">
                            <span className="text-white text-xs">📋</span>
                          </div>
                          <span style={{ color: "#4A5568" }}>المتطلبات: {service.description}</span>
                        </div>

                        {/* <div className="flex items-center gap-3">
                          <div className="w-6 h-6 bg-gradient-to-l from-[#1A84C4] to-[#4CAFDF] rounded-full flex items-center justify-center">
                            <span className="text-white text-xs">📞</span>
                          </div>
                          <span style={{ color: "#4A5568" }}>للاستفسار: {service.phone}</span>
                        </div> */}

                        {/* <div className="flex items-center gap-3">
                          <div className="w-6 h-6 bg-gradient-to-l from-[#1A84C4] to-[#4CAFDF] rounded-full flex items-center justify-center">
                            <span className="text-white text-xs">📍</span>
                          </div>
                          <span style={{ color: "#4A5568" }} className="text-xs">
                            {service.location}
                          </span>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Additional Services Blog Posts */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "#262751" }}>
              الخدمات الإضافية
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: "#4A5568" }}>
              خدمات مساندة تجعل رحلتك أكثر راحة وأماناً
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service) => (
              <article
                key={service.id}
                className="bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-[#1A84C4]/10 hover:border-[#1A84C4]/30"
              >
                <div className="relative">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-gradient-to-l from-[#1A84C4] to-[#4CAFDF] text-white px-3 py-1 rounded-full">
                    <span className="text-sm font-semibold">{service.category}</span>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full">
                    <span className="text-sm font-semibold">سريع</span>
                  </div>
                </div>

                <div className="p-6">
                  <header className="mb-4">
                    <h3 className="text-2xl font-bold mb-2" style={{ color: "#262751" }}>
                      {service.title}
                    </h3>
                    <p className="text-lg mb-2" style={{ color: "#4A5568" }}>
                      {service.subtitle}
                    </p>
                  </header>

                  <div className="space-y-4 mb-6">
                    <div className="bg-white p-4 rounded-lg border border-[#1A84C4]/10 shadow-sm">
                      <h4 className="font-semibold mb-2" style={{ color: "#262751" }}>
                        معلومات الخدمة:
                      </h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-3">
                          <div className="w-6 h-6 bg-gradient-to-l from-[#1A84C4] to-[#4CAFDF] rounded-full flex items-center justify-center">
                            <span className="text-white text-xs">⚡</span>
                          </div>
                          <span style={{ color: "#262751" }}>معالجة فورية: {service.processingTime}</span>
                        </div>

                        <div className="flex items-center gap-3">
                          <div className="w-6 h-6 bg-gradient-to-l from-[#1A84C4] to-[#4CAFDF] rounded-full flex items-center justify-center">
                            <span className="text-white text-xs">📋</span>
                          </div>
                          <span style={{ color: "#4A5568" }}>المطلوب: {service.description}</span>
                        </div>

                        <div className="flex items-center gap-3">
                          {/* <div className="w-6 h-6 bg-gradient-to-l from-[#1A84C4] to-[#4CAFDF] rounded-full flex items-center justify-center">
                            <span className="text-white text-xs">📞</span>
                          </div>
                          <span style={{ color: "#4A5568" }}>اتصل بنا: {service.phone}</span> */}
                        </div>

                        {/* <div className="flex items-center gap-3">
                          <div className="w-6 h-6 bg-gradient-to-l from-[#1A84C4] to-[#4CAFDF] rounded-full flex items-center justify-center">
                            <span className="text-white text-xs">📍</span>
                          </div>
                          <span style={{ color: "#4A5568" }} className="text-xs">
                            {service.location}
                          </span>
                        </div> */}
                      </div>
                    </div>
                  </div>

                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Tips and Advice Section */}
        <section className="mb-20">
          <div className="bg-[#F8FAFC] rounded-3xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "#262751" }}>
                نصائح مهمة للمسافرين
              </h2>
              <p className="text-xl max-w-4xl mx-auto" style={{ color: "#4A5568" }}>
                معلومات قيمة ونصائح عملية لضمان رحلة سفر ناجحة وخالية من المشاكل
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center bg-white p-6 rounded-xl shadow-md border border-[#1A84C4]/10">
                <div className="w-16 h-16 bg-gradient-to-l from-[#1A84C4] to-[#4CAFDF] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">📋</span>
                </div>
                <h3 className="text-lg font-bold mb-3" style={{ color: "#262751" }}>
                  تحضير الوثائق
                </h3>
                <p className="text-sm" style={{ color: "#4A5568" }}>
                  تأكد من صحة جميع الوثائق وصلاحيتها قبل التقديم
                </p>
              </div>

              <div className="text-center bg-white p-6 rounded-xl shadow-md border border-[#1A84C4]/10">
                <div className="w-16 h-16 bg-gradient-to-l from-[#1A84C4] to-[#4CAFDF] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">⏰</span>
                </div>
                <h3 className="text-lg font-bold mb-3" style={{ color: "#262751" }}>
                  التوقيت المناسب
                </h3>
                <p className="text-sm" style={{ color: "#4A5568" }}>
                  قدم طلب التأشيرة مبكراً لتجنب أي تأخير
                </p>
              </div>

              <div className="text-center bg-white p-6 rounded-xl shadow-md border border-[#1A84C4]/10">
                <div className="w-16 h-16 bg-gradient-to-l from-[#1A84C4] to-[#4CAFDF] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🛡️</span>
                </div>
                <h3 className="text-lg font-bold mb-3" style={{ color: "#262751" }}>
                  التأمين الصحي
                </h3>
                <p className="text-sm" style={{ color: "#4A5568" }}>
                  احرص على الحصول على تأمين سفر شامل
                </p>
              </div>

              <div className="text-center bg-white p-6 rounded-xl shadow-md border border-[#1A84C4]/10">
                <div className="w-16 h-16 bg-gradient-to-l from-[#1A84C4] to-[#4CAFDF] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">📞</span>
                </div>
                <h3 className="text-lg font-bold mb-3" style={{ color: "#262751" }}>
                  الدعم المستمر
                </h3>
                <p className="text-sm" style={{ color: "#4A5568" }}>
                  فريقنا متاح لمساعدتك في أي وقت
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information
        <section className="mb-20">
          <div className="bg-gradient-to-l from-[#1A84C4] to-[#4CAFDF] rounded-3xl p-8 md:p-12 text-white text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">معلومات التواصل</h2>
            <p className="text-xl mb-8 opacity-90">
              فريقنا المتخصص جاهز لمساعدتك في جميع استفساراتك حول التأشيرات والسفر
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-3xl mb-4">🇦🇪</div>
                <h3 className="text-xl font-bold mb-4">خدمات الإمارات</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-center gap-3">
                    <span className="text-lg">📞</span>
                    <span className="text-lg font-semibold">+201281101081</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-3xl mb-4">🌍</div>
                <h3 className="text-xl font-bold mb-4">خدمات الخليج والسفر</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-center gap-3">
                    <span className="text-lg">📞</span>
                    <span className="text-lg font-semibold">+201229417417</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-2">
                <span className="text-2xl">📍</span>
                <h4 className="text-lg font-bold">موقعنا</h4>
              </div>
              <p className="text-lg">المعادي، 6 شارع فلسطين، القاهرة - مصر</p>
            </div>
          </div>
        </section> */}
      </main>

 
    </div>
  );
}

export default Blog;