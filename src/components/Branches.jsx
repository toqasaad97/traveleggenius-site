import { useState } from 'react';
import { Phone, MapPin, MessageCircle, ChevronLeft, ChevronRight, PhoneCall } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Branches = () => {
  const branches = [
    {
      id: 1,
      title: 'الإمارات - دبي',
      address: 'بيزنس باي تور',
      phone: '+201229417417',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.0!2d55.27!3d25.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDEyJzAwLjAiTiA1NcKwMTYnMDAuMCJF!5e0!3m2!1sen!2sae!4v1620000000000!5m2!1sen!2sae'
    },
    {
      id: 2,
      title: 'مصر - القاهرة',
      address: 'المعادي - شارع فلسطين',
      phone: '+201229417417',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.0!2d31.25!3d30.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDAwJzAwLjAiTiAzMcKwMTUnMDAuMCJF!5e0!3m2!1sen!2seg!4v1620000000000!5m2!1sen!2seg'
    }
  ];

  const navigate = useNavigate();
  const [activeBranch, setActiveBranch] = useState(0);

  const nextBranch = () => {
    setActiveBranch((prev) => (prev + 1) % branches.length);
  };

  const prevBranch = () => {
    setActiveBranch((prev) => (prev - 1 + branches.length) % branches.length);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="text-[#1A84C4] font-medium text-lg mb-2 inline-block">تواصل مع فروعنا</span>
          <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
            زوروا فروعنا
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-[#1A84C4] to-[#4CA1D5] mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            نقدم خدماتنا المتميزة من خلال فروعنا المنتشرة في مختلف أنحاء المنطقة
          </p>
        </div>

        {/* Desktop View */}
        <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {branches.map((branch) => (
            <div 
              key={branch.id}
              className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              {/* Map Section */}
              <div className="relative h-64 bg-gray-100">
                <iframe
                  src={branch.mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className="absolute inset-0 w-full h-full"
                  title={`Map for ${branch.title}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 right-0 p-6 text-right w-full">
                  <h3 className="text-2xl font-bold text-white">{branch.title}</h3>
                  <p className="text-gray-200 mt-1">{branch.address}</p>
                </div>
              </div>
              
              {/* Info Section */}
              <div className="p-6">
                <div className="flex items-start gap-4 mb-5">
                  <div className="p-2 bg-[#E6F2FA] rounded-lg flex-shrink-0">
                    <MapPin className="h-5 w-5 text-[#1A84C4]" />
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-500">العنوان</p>
                    <p className="text-gray-800">{branch.address}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-2 bg-[#E6F2FA] rounded-lg flex-shrink-0">
                    <Phone className="h-5 w-5 text-[#1A84C4]" />
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-500">الهاتف</p>
                    <a 
                      href={`tel:${branch.phone}`}
                      className="text-[#1A84C4] hover:text-[#156AA3] transition-colors"
                    >
                      {branch.phone}
                    </a>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => navigate('/contact')}
                    className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-[#1A84C4] to-[#4CA1D5] hover:from-[#156AA3] hover:to-[#1A84C4] text-white py-3 px-4 rounded-lg font-medium transition-all duration-300 shadow hover:shadow-md"
                  >
                    <MessageCircle className="h-5 w-5" />
                    <span>تواصل معنا</span>
                  </button>
                  <a 
                    href={`tel:${branch.phone}`}
                    className="flex items-center justify-center p-3 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200 shadow-sm"
                  >
                    <PhoneCall className="h-5 w-5 text-[#1A84C4]" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View */}
        <div className="lg:hidden">
          <div className="relative bg-white rounded-xl shadow-md overflow-hidden">
            {/* Map Section */}
            <div className="relative h-56 bg-gray-100">
              <iframe
                src={branches[activeBranch].mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="absolute inset-0 w-full h-full"
                title={`Map for ${branches[activeBranch].title}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 right-0 p-4 text-right w-full">
                <h3 className="text-xl font-bold text-white">{branches[activeBranch].title}</h3>
                <p className="text-gray-200 text-sm">{branches[activeBranch].address}</p>
              </div>
              
              {/* Navigation Arrows */}
              <div className="absolute top-1/2 left-3 right-3 flex justify-between -translate-y-1/2">
                <button 
                  onClick={prevBranch}
                  className="p-2 bg-white/90 rounded-full shadow hover:bg-white transition-colors"
                >
                  <ChevronRight className="h-5 w-5 text-[#1A84C4]" />
                </button>
                <button 
                  onClick={nextBranch}
                  className="p-2 bg-white/90 rounded-full shadow hover:bg-white transition-colors"
                >
                  <ChevronLeft className="h-5 w-5 text-[#1A84C4]" />
                </button>
              </div>
            </div>
            
            {/* Info Section */}
            <div className="p-5">
              <div className="flex items-start gap-3 mb-4">
                <div className="p-2 bg-[#E6F2FA] rounded-lg flex-shrink-0">
                  <MapPin className="h-5 w-5 text-[#1A84C4]" />
                </div>
                <div className="text-right">
                  <p className="text-xs font-medium text-gray-500">العنوان</p>
                  <p className="text-gray-800">{branches[activeBranch].address}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 bg-[#E6F2FA] rounded-lg flex-shrink-0">
                  <Phone className="h-5 w-5 text-[#1A84C4]" />
                </div>
                <div className="text-right">
                  <p className="text-xs font-medium text-gray-500">الهاتف</p>
                  <a 
                    href={`tel:${branches[activeBranch].phone}`}
                    className="text-[#1A84C4] hover:text-[#156AA3] transition-colors text-sm"
                  >
                    {branches[activeBranch].phone}
                  </a>
                </div>
              </div>
              
              <div className="flex gap-2">
                <button
                  onClick={() => navigate('/contact')}
                  className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-[#1A84C4] to-[#4CA1D5] text-white py-2 px-3 rounded-lg font-medium text-sm transition-all shadow"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>تواصل معنا</span>
                </button>
                <a 
                  href={`tel:${branches[activeBranch].phone}`}
                  className="flex items-center justify-center p-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors shadow-sm"
                >
                  <PhoneCall className="h-4 w-4 text-[#1A84C4]" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Indicators */}
          <div className="flex justify-center mt-4 gap-1">
            {branches.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveBranch(index)}
                className={`w-2 h-2 rounded-full transition-all ${activeBranch === index ? 'bg-[#1A84C4] w-6' : 'bg-gray-300'}`}
                aria-label={`Go to branch ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="mt-16 bg-white rounded-xl shadow-md overflow-hidden max-w-4xl mx-auto">
          <div className="p-8 md:p-10 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#E6F2FA] rounded-full mb-6">
              <MessageCircle className="h-7 w-7 text-[#1A84C4]" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              هل تحتاج إلى مساعدة؟
            </h3>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              فريقنا متاح على مدار الساعة لمساعدتك في أي استفسارات قد تكون لديكم
            </p>
            <button
              onClick={() => navigate('/contact')}
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#1A84C4] to-[#4CA1D5] hover:from-[#156AA3] hover:to-[#1A84C4] text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 shadow hover:shadow-md"
            >
              <MessageCircle className="h-5 w-5" />
              تواصل معنا الآن
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Branches;