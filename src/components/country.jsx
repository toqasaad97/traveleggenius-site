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
    { title: "أمريكا", href: "/usa", flagSrc: "/assets/country/us.svg", alt: "أمريكا", text: "أمريكا" },
    { title: "ألمانيا", href: "/germany", flagSrc: "/assets/country/de.svg", alt: "ألمانيا", text: "ألمانيا" },
    { title: "تركيا", href: "/turkey", flagSrc: "/assets/country/tr.svg", alt: "تركيا", text: "تركيا" },
    { title: "أوروبا", href: "/europe", flagSrc: "/assets/country/eu.svg", alt: "أوروبا", text: "أوروبا" },
    { title: "أستراليا", href: "/australia", flagSrc: "/assets/country/au.svg", alt: "أستراليا", text: "أستراليا" },
    { title: "بلجيكا", href: "/belgium", flagSrc: "/assets/country/be.svg", alt: "بلجيكا", text: "بلجيكا" },
    { title: "بلغاريا", href: "/bulgaria", flagSrc: "/assets/country/bg.svg", alt: "بلغاريا", text: "بلغاريا" },
    { title: "دبي", href: "/dubai", flagSrc: "/assets/country/ae.svg", alt: "دبي", text: "دبي" },
    { title: "دانماركا", href: "/denmark", flagSrc: "/assets/country/dk.svg", alt: "دانماركا", text: "دانماركا" },
    { title: "إستونيا", href: "/estonia", flagSrc: "/assets/country/ee.svg", alt: "إستونيا", text: "إستونيا" },
    { title: "فرنسا", href: "/france", flagSrc: "/assets/country/fr.svg", alt: "فرنسا", text: "فرنسا" },
    { title: "هولندا", href: "/netherlands", flagSrc: "/assets/country/nl.svg", alt: "هولندا", text: "هولندا" },
    { title: "إيطاليا", href: "/italy", flagSrc: "/assets/country/it.svg", alt: "إيطاليا", text: "إيطاليا" },
    { title: "إيرلندا", href: "/ireland", flagSrc: "/assets/country/ie.svg", alt: "إيرلندا", text: "إيرلندا" },
    { title: "إنجلترا", href: "/uk", flagSrc: "/assets/country/gb.svg", alt: "إنجلترا", text: "إنجلترا" },
    { title: "إسبانيا", href: "/spain", flagSrc: "/assets/country/es.svg", alt: "إسبانيا", text: "إسبانيا" },
    { title: "السويد", href: "/sweden", flagSrc: "/assets/country/se.svg", alt: "السويد", text: "السويد" },
    { title: "كندا", href: "/canada", flagSrc: "/assets/country/ca.svg", alt: "كندا", text: "كندا" },
    { title: "ليتوانيا", href: "/lithuania", flagSrc: "/assets/country/lt.svg", alt: "ليتوانيا", text: "ليتوانيا" },
    { title: "مالطا", href: "/malta", flagSrc: "/assets/country/mt.svg", alt: "مالطا", text: "مالطا" },
    { title: "البرتغال", href: "/portugal", flagSrc: "/assets/country/pt.svg", alt: "البرتغال", text: "البرتغال" },
    { title: "المجر", href: "/hungary", flagSrc: "/assets/country/hu.svg", alt: "المجر", text: "المجر" },
    { title: "بولندا", href: "/poland", flagSrc: "/assets/country/pl.svg", alt: "بولندا", text: "بولندا" },
    { title: "لوكسمبورغ", href: "/luxembourg", flagSrc: "/assets/country/lu.svg", alt: "لوكسمبورغ", text: "لوكسمبورغ" },
    { title: "النرويج", href: "/norway", flagSrc: "/assets/country/no.svg", alt: "النرويج", text: "النرويج" },
    { title: "رومانيا", href: "/romania", flagSrc: "/assets/country/ro.svg", alt: "رومانيا", text: "رومانيا" },
    { title: "سلوفينيا", href: "/slovenia", flagSrc: "/assets/country/si.svg", alt: "سلوفينيا", text: "سلوفينيا" },
    { title: "السعودية", href: "/saudi-arabia", flagSrc: "/assets/country/sa.svg", alt: "السعودية", text: "السعودية" },
    { title: "كوريا الجنوبية", href: "/south-korea", flagSrc: "/assets/country/kr.svg", alt: "كوريا الجنوبية", text: "كوريا الجنوبية" },
    { title: "اليونان", href: "/greece", flagSrc: "/assets/country/gr.svg", alt: "اليونان", text: "اليونان" },
    { title: "لاتفيا", href: "/latvia", flagSrc: "/assets/country/lv.svg", alt: "لاتفيا", text: "لاتفيا" },
    { title: "فنلندا", href: "/finland", flagSrc: "/assets/country/fi.svg", alt: "فنلندا", text: "فنلندا" },
    { title: "روسيا", href: "/russia", flagSrc: "/assets/country/ru.svg", alt: "روسيا", text: "روسيا" },
    { title: "الصين", href: "/china", flagSrc: "/assets/country/cn.svg", alt: "الصين", text: "الصين" }
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