import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const slides = [
    {
      title: "طيران اقتصادي من القاهرة",
      description: "سافر إلى دول الخليج بأقل الأسعار. نوفر عروض خاصة على خطوط الطيران الاقتصادية مع أمتعة مجانية.",
      image: "/assets/images/bgh2.jpg",
      link: "/apply-visa"
    },
    {
      title: "فيزا الإمارات خلال 48 ساعة",
      description: "استخراج فيزا الإمارات بسرعة قياسية. مستندات بسيطة وموافقة مضمونة مع مكتبنا في القاهرة.",
      image: "/assets/images/bgh1.jpg",
      link: "/apply-visa"
    },
    {
      title: "خدمات فيزا السعودية من القاهرة",
      description: "نوفر لك استخراج فيزا السعودية بسرعة واحترافية. مستندات قليلة وإجراءات سهلة مع أفضل الأسعار.",
      image: "/assets/images/bgh3.jpg",
      link: "/apply-visa"
    }
  ];

  return (
    <section id="hero" dir="rtl" className="relative py-16 bg-[#262751] text-white font-[Tajawal,sans-serif]">
      <div className="absolute inset-0 opacity-10 z-0 bg-gradient-to-br from-[#1A84C4] via-[#1A2255] to-[#262751]" />
      <div className="container mx-auto px-4 relative z-10">
        <Swiper
          modules={[Pagination, Autoplay, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          pagination={{
            clickable: true,
            el: '.custom-pagination',
            bulletClass: 'swiper-pagination-bullet',
            bulletActiveClass: 'swiper-pagination-bullet-active',
          }}
          autoplay={{ delay: 8000, disableOnInteraction: false }}
          speed={1200}
          loop={true}
          className="rounded-3xl overflow-hidden shadow-2xl border border-[#4CAFDF]/20"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-[550px] flex items-center justify-center bg-[#1A2255]">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-1000 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#1A2255]/90 to-[#262751]/80" />

                <div className="relative z-10 max-w-2xl text-right p-6 md:p-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">{slide.title}</h2>
                  <p className="text-[#D4DCFF] text-lg mb-6">{slide.description}</p>
                  <Link
                    to={slide.link}
                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#1A84C4] to-[#4CAFDF] hover:from-[#4CAFDF] hover:to-[#1A84C4] text-white px-7 py-3 rounded-full text-lg font-bold shadow-md transition-all duration-500"
                  >
                    احجز الآن
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default HeroSection;
