import React, { useState } from 'react';
import { FaWhatsapp, FaPaperPlane } from 'react-icons/fa';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().required('الاسم مطلوب'),
  phone: yup.string().required('رقم الهاتف مطلوب'),
  message: yup.string().required('الرسالة مطلوبة'),
});

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const validateForm = async () => {
    try {
      await schema.validate(formData, { abortEarly: false });
      setErrors({});
      return true;
    } catch (validationErrors) {
      const newErrors = {};
      validationErrors.inner.forEach(err => {
        newErrors[err.path] = err.message;
      });
      setErrors(newErrors);
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const isValid = await validateForm();
    if (!isValid) {
      setIsSubmitting(false);
      return;
    }

    const whatsappMessage = `*رسالة جديدة*%0A%0A
*الاسم:* ${formData.name}%0A
*الهاتف:* ${formData.phone}%0A
*الرسالة:*%0A${formData.message}`;

    window.open(`https://wa.me/201096266316?text=${whatsappMessage}`, '_blank');
    
    setIsSubmitted(true);
    setFormData({
      name: '',
      phone: '',
      message: ''
    });
    
    setTimeout(() => {
      setIsSubmitted(false);
      setIsSubmitting(false);
    }, 3000);
  };

  return (
    <div
      className=" my-8 max-w-2xl mx-auto p-6 sm:p-10 bg-white rounded-3xl shadow-xl"
      dir="rtl"
    >
      <div className="mb-10 text-center">
        <div
          className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 shadow-lg"
          style={{ backgroundColor: '#262751' }}
        >
          <FaWhatsapp className="text-white text-3xl" />
        </div>
        <h2
          className="text-3xl font-extrabold"
          style={{ color: '#262751' }}
        >
          تواصل معنا
        </h2>
        <p className="text-[#555] mt-2 text-base md:text-lg">
          املأ النموذج وسنرد عليك قريباً
        </p>
      </div>

      {isSubmitted ? (
        <div className="text-center py-10 bg-white rounded-lg shadow-lg">
          <div
            className="inline-flex items-center justify-center w-24 h-24 rounded-full mx-auto mb-6 border-4"
            style={{ borderColor: '#262751', backgroundColor: '#e5e7f8' }}
          >
            <svg
              className="w-10 h-10 text-[#262751]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-[#262751] mb-3">
            تم الإرسال بنجاح
          </h3>
          <p className="text-[#555] text-base">سيتم التواصل معك عبر واتساب</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 text-lg font-semibold text-[#262751]">الاسم الكامل</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="أدخل اسمك"
                className={`w-full px-4 py-3 rounded-xl border text-base focus:outline-none focus:ring-2 focus:ring-[#262751] ${
                  errors.name ? 'border-red-600' : 'border-gray-300'
                }`}
              />
              {errors.name && <p className="mt-2 text-sm text-red-600">{errors.name}</p>}
            </div>
            <div>
              <label className="block mb-2 text-lg font-semibold text-[#262751]">رقم الهاتف</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-xl border text-base focus:outline-none focus:ring-2 focus:ring-[#262751] ${
                  errors.phone ? 'border-red-600' : 'border-gray-300'
                }`}
              />
              {errors.phone && <p className="mt-2 text-sm text-red-600">{errors.phone}</p>}
            </div>
          </div>

          <div>
            <label className="block mb-2 text-lg font-semibold text-[#262751]">الرسالة</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              placeholder="اكتب رسالتك هنا..."
              className={`w-full px-4 py-3 rounded-xl border text-base resize-none focus:outline-none focus:ring-2 focus:ring-[#262751] ${
                errors.message ? 'border-red-600' : 'border-gray-300'
              }`}
            ></textarea>
            {errors.message && <p className="mt-2 text-sm text-red-600">{errors.message}</p>}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 text-lg font-semibold text-white rounded-xl flex items-center justify-center gap-3 ${
              isSubmitting
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-[#262751] hover:bg-[#1f2558] transition duration-300'
            }`}
          >
            {isSubmitting ? 'جاري الإرسال...' : (
              <>
                <span>إرسال عبر واتساب</span>
                <FaPaperPlane className="text-xl" />
              </>
            )}
          </button>
        </form>
      )}

      <p className="mt-8 text-center text-sm text-[#555]">
        نسعد بتواصلك معنا خلال 24 ساعة
      </p>
    </div>
  );
};

export default Contact;
