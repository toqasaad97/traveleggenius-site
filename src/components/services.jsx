import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "استشارات تأشيرة السياحة",
      description: "نقدم التوجيه المهني لتبسيط عملية التقدم بطلب للحصول على تأشيرة سياحية، مما يجعل خطط سفرك ممكنة",
      image:'/assets/images/s3.webp',
      color: "from-[#d4dcff] to-[#b8c4ff]",
      link: "/apply-visa"
    },
    {
      id: 2,
      title: "استشارات تأشيرة العمل",
      description: "نقدم خدمات استشارية متخصصة لمساعدتك في استكشاف فرص العمل في الخارج.",
      image: 'assets/images/S2.webp', 
      color: "from-[#aacde1] to-[#8cb8d9]",
      link: "/apply-visa"
    },
    {
      id: 3,
      title: "استشارات التعليم في الخارج",
      description: "نقدم استشارات لمساعدتك في البحث عن فرص التعليم الدولية والعثور على الأنسب لك.",
      image: '/assets/images/S1.webp',
      color: "from-[#bcd9a9] to-[#9fc58d]",
      link: "/apply-visa"
    }
  ];

  return (
    <section className="w-full py-12 md:py-20 bg-gradient-to-b from-[#f5f9ff] to-[#e8f1fa] font-[Tajawal,sans-serif] overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 overflow-x-hidden">
        <div className="mb-12 md:mb-16 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#262751] mb-3">
          نوفر لك جميع خدمات السفر في مكان واحد
          </h2>
       
        </div>
        <div className='mx-0'>
           {/* Responsive grid: col-12 on mobile, col-4 on md+ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center md:justify-items-stretch">
          {services.map((service) => (
            <div key={service.id} className={`mx-auto md:mx-0 bg-gradient-to-br ${service.color} rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 min-h-[420px] md:min-h-[500px] flex flex-col p-4 md:p-6 w-full font-[Tajawal,sans-serif] max-w-xs md:max-w-full`}>
              <img 
                src={service.image} 
                alt={service.title}
                className="w-full h-40 md:h-48 object-cover rounded-xl border border-[#1A84C4]/30 mb-5"
                loading="lazy"
              />
              <div className="flex flex-col items-center text-center h-full">
                <h3 className="text-xl md:text-2xl font-bold text-[#262751] mb-3 md:mb-4 font-[Tajawal,sans-serif]">
                  {service.title}
                </h3>
                <p className="text-[#3a3a7c] text-sm md:text-base mb-6 flex-grow font-[Tajawal,sans-serif]">
                  {service.description}
                </p>
                <a 
                  href={service.link} 
                  className="mt-auto px-6 py-2 bg-gradient-to-r from-[#1A84C4] to-[#4CAFDF] text-white rounded-full font-medium hover:from-[#4CAFDF] hover:to-[#1A84C4] transition-all duration-300 shadow-md hover:shadow-lg font-[Tajawal,sans-serif]"
                >
                  ابدأ طلبك
                </a>
              </div>
            </div>
          ))}
        </div>

        </div>

       
      </div>

      <style jsx>{`
        .service-bullet {
          width: 12px;
          height: 12px;
          background-color: #c9e3f5;
          border-radius: 50%;
          display: inline-block;
          margin: 0 5px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .service-bullet-active {
          background-color: #1A84C4;
          width: 30px;
          border-radius: 6px;
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;