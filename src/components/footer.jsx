import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Footer = () => {
  return (
    <footer className="w-full bg-[#262751] border-t border-[#1A84C4]/10 text-[#F0F4F8] font-[Tajawal,sans-serif] pt-12 pb-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-6">
          <img src="/assets/images/logovisa.jpg" alt="Visa VISSASSIT" className="w-28 mb-4" />

          <div className="flex flex-col items-center space-y-4">
  

            {/* <a href="tel:+201229417417" className="flex items-center space-x-3 hover:text-[#1A84C4] transition-colors">
              <svg className="w-6 h-6 text-[#1A84C4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-lg">+20 122 941 7417</span>
            </a> */}
          </div>
        </div>
      </div>

      <div className="border-t border-[#1A84C4]/10 mt-8 pt-4 text-center text-sm text-[#b8c4ff]">
        جميع الحقوق محفوظة &copy; {new Date().getFullYear()} Visa VISSASSIT
      </div>
    </footer>
  );
};

export default Footer;