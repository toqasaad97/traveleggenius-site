import React from "react";
import {
  User,
  FileText,
  MessageCircle,
  CheckCircle,
  Send,
  Award,
  Clock,
  Shield,
  Globe,
  Smile
} from 'lucide-react';
import { Link } from 'react-router-dom';

const VisaSection = () => {
  const features = [
    { icon: <User className="w-5 h-5" />, text: "خدمة العملاء" },
    { icon: <FileText className="w-5 h-5" />, text: "عقد الخدمة" },
    { icon: <MessageCircle className="w-5 h-5" />, text: "التواصل مع خبراء التأشيرات" },
    { icon: <CheckCircle className="w-5 h-5" />, text: "عملية التأشيرة" },
    { icon: <Send className="w-5 h-5" />, text: "تقديم المستندات" },
    { icon: <Award className="w-5 h-5" />, text: "النتيجة" },
  ];

  const stats = [
    { icon: <Clock className="w-5 h-5" />, value: "24 ساعة", label: "استجابة سريعة" },
    { icon: <Shield className="w-5 h-5" />, value: "100%", label: "حماية البيانات" },
    { icon: <Globe className="w-5 h-5" />, value: "50+", label: "وجهات حول العالم" },
    { icon: <Smile className="w-5 h-5" />, value: "98%", label: "رضا العملاء" },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-[#f5f9ff] to-[#e8f1fa] font-tajawal" dir="rtl">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex flex-col items-center mb-12 text-center">
          <div className="w-20 h-1.5 rounded-full bg-gradient-to-r from-[#1A84C4] to-[#4CAFDF] mb-4"></div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#262751] mb-3">
            <Send className="w-8 h-8 text-[#1A84C4] inline-block ml-2" />
            كل ما تحتاجه لتسريع تأشيرتك
          </h2>
        </div>

        {/* Main Content Card */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-[#1A84C4]/10">
          <div className="flex flex-col md:flex-row-reverse">
            {/* Image Section */}
            <div className="md:w-1/2 p-6 md:p-8 flex items-center justify-center bg-gradient-to-br from-[#f0f7ff] to-[#e2eafc]">
              <img
                src="/assets/images/visasec.webp"
                alt="تسريع مستندات التأشيرة"
                className="w-full max-w-md rounded-xl shadow-lg border border-[#1A84C4]/10 transform hover:scale-105 transition duration-300"
                loading="lazy"
              />
            </div>

            {/* Content Section */}
            <div className="md:w-1/2 p-8 md:p-10">
              <p className="text-lg md:text-xl text-[#3a3a7c] leading-relaxed mb-8">
                لا مزيد من الساعات المهدورة في البحث عن قائمة الأوراق! مع <span className="font-bold text-[#1A84C4]">Visa VISSASSIT</span> يمكنك تجهيز جميع مستنداتك الرسمية من جهة واحدة بسرعة وسهولة والتقدم بطلب التأشيرة فورًا. احصل على استشارة فورية من خبرائنا!
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-4 mb-10">
                {features.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#f5f9ff] transition">
                    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-[#d4dcff] to-[#b8c4ff] text-[#1A84C4]">
                      {item.icon}
                    </span>
                    <span className="font-bold text-[#262751]">{item.text}</span>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-[#f5f9ff] p-3 rounded-lg text-center">
                    <div className="flex justify-center text-[#1A84C4] mb-1">
                      {stat.icon}
                    </div>
                    <div className="text-xl font-bold text-[#1A84C4]">{stat.value}</div>
                    <div className="text-sm text-[#3a3a7c]">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/apply-visa"
                  className="flex-1 text-center px-3 py-3 rounded-full bg-gradient-to-r from-[#1A84C4] to-[#4CAFDF] text-white font-bold hover:shadow-lg hover:from-[#4CAFDF] hover:to-[#1A84C4] transition-all"
                >
                  ابدأ تقديم طلبك
                </Link>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisaSection;