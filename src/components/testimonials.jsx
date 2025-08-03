import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const TestimonialsSection = () => {
  const navigate = useNavigate();
  const visaItems = [
    { image: "/assets/images/t1.jpeg" },
    { image: "/assets/images/t2.jpeg" },
    { image: "/assets/images/t3.jpeg" },
    { image: "/assets/images/t4.jpeg" },
    { image: "/assets/images/t5.jpeg" },
    { image: "/assets/images/t6.jpeg" },
    { image: "/assets/images/t7.jpeg" },
    { image: "/assets/images/t8.jpeg" },
  ];

  // Consistent blue color
  const blueColor = '#1A84C4';

  return (
    <section dir="rtl" className="py-16 bg-white relative">
      <div className="max-w-4xl mx-auto px-4">
        <div className="relative">
          <Swiper
            modules={[Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{
              clickable: true,
              el: '.visa-pagination',
              bulletClass: 'visa-bullet',
              bulletActiveClass: 'visa-bullet-active'
            }}
            navigation={{
              nextEl: '.visa-swiper-next',
              prevEl: '.visa-swiper-prev',
            }}
            loop={true}
            className="mb-10"
          >
            {visaItems.map((item, index) => (
              <SwiperSlide key={index}>
                <div 
                  className="flex justify-center items-center h-full cursor-pointer"
                  onClick={() => {
                    navigate('/apply-visa');
                    // Scroll to top of the page
                    window.scrollTo(0, 0);
                  }}
                >
                  <img
                    src={item.image}
                    alt={`تأشيرة ${index + 1}`}
                    className="mx-auto max-h-[70vh] w-auto object-contain rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                    loading="lazy"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons - Blue Style */}
          <button className="visa-swiper-prev absolute top-1/2 -right-4 z-10 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg border border-[#1A84C4] hover:bg-[#1A84C4] transition-all duration-300 group">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#1A84C4] group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <button className="visa-swiper-next absolute top-1/2 -left-4 z-10 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg border border-[#1A84C4] hover:bg-[#1A84C4] transition-all duration-300 group">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#1A84C4] group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Pagination Dots */}
          <div className="visa-pagination flex justify-center gap-2 mt-6" />
        </div>
      </div>

      {/* Custom Styles with Consistent Blue Color */}
      <style jsx>{`
        .visa-bullet {
          width: 12px;
          height: 12px;
          background: #e5e7eb;
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.3s;
        }
        .visa-bullet-active {
          background: ${blueColor};
          width: 30px;
          border-radius: 6px;
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;