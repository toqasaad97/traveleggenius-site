import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css';

const CountryFlagBox = ({ title, href, flagSrc, alt, text }) => (
  <div className="flex flex-col items-center w-[110px] mx-2">
    <a title={title} href={href} className="flex flex-col items-center">
      <img
        src={flagSrc.startsWith('/') ? flagSrc : '/' + flagSrc}
        alt={alt}
        width={72}
        height={50}
        className="rounded-xl shadow border border-gray-200 bg-white object-cover"
        style={{ width: 72, height: 50 }}
        decoding="async"
        fetchpriority="low"
        loading="lazy"
      />
      <span className="block text-center mt-2 text-base font-medium text-gray-900">{text}</span>
    </a>
  </div>
);

const CountryMarqueeSection = () => {
  const countries = [
    { title: "السعودية", href: "/saudi", flagSrc: "/assets/country/sa.svg", alt: "السعودية", text: "السعودية" },
    { title: "قطر", href: "/qatar", flagSrc: "/assets/country/qa.svg", alt: "قطر", text: "قطر" },
    { title: "الإمارات", href: "/emirates", flagSrc: "/assets/country/ae.svg", alt: "الإمارات", text: "الإمارات" },
    { title: "مسقط", href: "/masqat", flagSrc: "/assets/country/om.svg", alt: "مسقط", text: "مسقط" }
  ];

  return (
    <section className="section-marque py-20">
      <Swiper
        modules={[Autoplay, FreeMode]}
        slidesPerView={8}
        spaceBetween={24}
        loop={true}
        speed={1200}
        freeMode={true}
        autoplay={{ delay: 0, disableOnInteraction: false }}
        breakpoints={{
          320: { slidesPerView: 3 },
          640: { slidesPerView: 5 },
          1024: { slidesPerView: 8 },
        }}
        className="country-marquee-swiper"
      >
        {countries.map((country, index) => (
          <SwiperSlide key={index}>
            <CountryFlagBox {...country} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default CountryMarqueeSection;