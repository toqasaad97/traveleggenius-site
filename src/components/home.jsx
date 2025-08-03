import CountryMarqueeSection from './country';
import HeroSection from './Hero';
import ServicesSection from './services';
import React from 'react';
import VisaSection from './visa';
import FaqAccordion from './fafQ';
import TestimonialsSection from './testimonials';
import AgenciesSection from './agancies';



function Home() {
  // Prevent horizontal scroll globally
  React.useEffect(() => {
    document.body.style.overflowX = 'hidden';
    return () => { document.body.style.overflowX = ''; };
  }, []);
  return (
    <div className="font-poppins">
      <HeroSection/>
      {/* <CountryMarqueeSection/> */}
      <ServicesSection/>
      <TestimonialsSection/>
      <VisaSection/>
      <AgenciesSection/>
      <FaqAccordion/>
    </div>
  );
}

export default Home;
