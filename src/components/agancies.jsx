import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Globe } from "lucide-react";
import "swiper/css";

const AgenciesSection = () => {
  const agencies = [
    {
      src: "/assets/images/1.webp",
      alt: "iData",
    },
    {
      src: "/assets/images/3.webp",
      alt: "VFS",
    },
    {
      src: "/assets/images/4.svg",
      alt: "AS Visa",
    },
    {
      src: "/assets/images/5.svg",
      alt: "BLS",
    },
    {
      src: "/assets/images/6.svg",
      alt: "القنصلية العامة لدبي",
    },
    {
      src: "/assets/images/7.webp",
      alt: "روسيا",
    },
  ];

  return (
    <section className="w-full py-16 bg-gradient-to-b from-[#e8f1fa] to-[#c1e0fa] font-[Tajawal,sans-serif]" dir="rtl">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-[#4CAFDF] to-[#1A84C4] shadow">
              <Globe className="w-6 h-6 text-white" />
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#262751] text-center">
              مكاتب الحجز المعتمد
            </h2>
          </div>
          <span className="block mx-auto w-24 h-1 rounded-full bg-gradient-to-r from-[#1A84C4] to-[#4CAFDF] mb-2"></span>
        </div>
      
        <Swiper
          modules={[Autoplay]}
          spaceBetween={12}
          slidesPerView={2}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={3000}
          breakpoints={{
            640: { slidesPerView: 3 },
            900: { slidesPerView: 4 },
            1200: { slidesPerView: 5 },
          }}
          className="w-full"
        >
          {agencies.map((agency, index) => {
            // Colorful gradient palette for cards
            const gradients = [
              "from-[#d4dcff] to-[#b8c4ff]",
              "from-[#aacde1] to-[#8cb8d9]",
              "from-[#bcd9a9] to-[#9fc58d]",
              "from-[#ffe0b2] to-[#ffd180]",
              "from-[#fbc2eb] to-[#a6c1ee]",
              "from-[#fad0c4] to-[#ffd1ff]",
              "from-[#cfd9df] to-[#e2ebf0]",
            ];
            const grad = gradients[index % gradients.length];
            return (
              <SwiperSlide key={index} className="flex justify-center items-center h-36">
                <div className={`bg-gradient-to-br ${grad} rounded-2xl shadow-xl flex items-center justify-center p-6 h-28 w-40 md:w-48 mx-auto transition-transform hover:scale-105 duration-300 border-0`}>
                  <img
                    loading="lazy"
                    src={agency.src}
                    alt={agency.alt}
                    className="max-h-16 max-w-full object-contain drop-shadow-lg transition-all duration-300 hover:drop-shadow-[0_0_16px_white]"
                    style={{ maxWidth: '100%', maxHeight: '64px' }}
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default AgenciesSection;