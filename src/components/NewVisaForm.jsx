import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import { useSearchParams } from 'react-router-dom';

const schema = yup.object().shape({
  country: yup.string().required('البلد المطلوب مطلوب'),
  visa_type: yup.string().required('نوع التأشيرة مطلوب'),
  name: yup.string().required('الاسم الأول مطلوب'),
  surname: yup.string().required('اللقب مطلوب'),
  email: yup.string().email('بريد إلكتروني غير صالح').required('البريد الإلكتروني مطلوب'),
  phone: yup.string().required('رقم الهاتف مطلوب'),
  gender: yup.string().required('الجنس مطلوب'),
  birth_date: yup.string().required('تاريخ الميلاد مطلوب'),
  passport_number: yup.string().required('رقم الجواز مطلوب'),
  passport_expiry_date: yup.string().required('تاريخ انتهاء الجواز مطلوب'),
  job: yup.string().required('المهنة مطلوبة'),
  marital_status: yup.string().required('الحالة الاجتماعية مطلوبة'),
});

// Country options with values matching the labels exactly for URL parameter matching
const countryOptions = [
  { value: 'السعودية', label: 'السعودية' },
  { value: 'قطر', label: 'قطر' },
  { value: 'الإمارات', label: 'الإمارات' },
  { value: 'مسقط', label: 'مسقط' },
];

// Visa type options from all country components (Saudi, UAE, Qatar, Muscat)
const visaTypeOptions = [
  // Common visa types
  { value: 'تأشيرة سياحية', label: 'تأشيرة سياحية' },
  { value: 'تأشيرة عمل', label: 'تأشيرة عمل' },
  { value: 'تأشيرة زيارة عائلية', label: 'تأشيرة زيارة عائلية' },
  { value: 'تأشيرة تجارية', label: 'تأشيرة تجارية' },
  { value: 'تأشيرة طالب', label: 'تأشيرة طالب' },
  { value: 'تأشيرة عبور (ترانزيت)', label: 'تأشيرة عبور (ترانزيت)' },
  { value: 'تأشيرة إقامة طويلة الأمد', label: 'تأشيرة إقامة طويلة الأمد' },
  
  // Additional visa types from all countries
  { value: 'تأشيرة حج وعمرة', label: 'تأشيرة حج وعمرة' },
  { value: 'تأشيرة علاج طبي', label: 'تأشيرة علاج طبي' },
  { value: 'تأشيرة عبور', label: 'تأشيرة عبور' },
  { value: 'تأشيرة رجال أعمال', label: 'تأشيرة رجال أعمال' },
  { value: 'تأشيرة إقامة دائمة (بشروط خاصة)', label: 'تأشيرة إقامة دائمة (بشروط خاصة)' },
  { value: 'تأشيرة المستثمرين ورواد الأعمال', label: 'تأشيرة المستثمرين ورواد الأعمال' }
];

const genderOptions = [
  { value: 'ذكر', label: 'ذكر' },
  { value: 'أنثى', label: 'أنثى' },
];

const maritalStatusOptions = [
  { value: 'أعزب', label: 'أعزب' },
  { value: 'متزوج', label: 'متزوج' },
  { value: 'مطلق', label: 'مطلق' },
  { value: 'أرمل', label: 'أرمل' },
];

const travelWithOptions = [
  { value: 'العائلة', label: 'العائلة' },
  { value: 'العمل', label: 'العمل' },
  { value: 'الوحدة', label: 'الوحدة' },
];

const flightTicketOptions = [
  { value: 'نعم', label: 'نعم' },
  { value: 'لا', label: 'لا' },
];

const VisaForm = () => {
  const [searchParams] = useSearchParams();
  const [form, setForm] = useState({
    country: '',
    visa_type: '',
    name: '',
    surname: '',
    email: '',
    phone: '',
    gender: '',
    birth_date: '',
    birth_place: '',
    marital_status: '',
    children_count: '',
    passport_number: '',
    passport_issue_date: '',
    passport_expiry_date: '',
    passport_issue_place: '',
    job: '',
    company: '',
    city: '',
    address: '',
    work_years: '',
    salary: '',
    travel_with: '',
    flight_ticket: '',
    notes: '',
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    // Get country and visaType from URL parameters
    const country = searchParams.get('country');
    const visaType = searchParams.get('visaType');
    
    // If we have values in URL, update the form state
    const updates = {};
    
    if (country) {
      // Find the matching country from our options to ensure consistent formatting
      const matchedCountry = countryOptions.find(opt => opt.label === country);
      if (matchedCountry) {
        updates.country = matchedCountry.label;
      } else {
        updates.country = country; // Fallback to raw value if no match
      }
    }
    
    if (visaType) {
      // Find the matching visa type from our options to ensure consistent formatting
      const matchedVisaType = visaTypeOptions.find(opt => opt.value === visaType || opt.label === visaType);
      if (matchedVisaType) {
        updates.visa_type = matchedVisaType.value;
      } else {
        updates.visa_type = visaType; // Fallback to raw value if no match
      }
    }
    
    if (Object.keys(updates).length > 0) {
      setForm(prevState => ({
        ...prevState,
        ...updates
      }));
    }
  }, [searchParams]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prevState => ({
      ...prevState,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prevState => ({
        ...prevState,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await schema.validate(form, { abortEarly: false });
      
      // Form is valid, prepare the WhatsApp message
      const message = `طلب تأشيرة جديد:
البلد: ${form.country}
نوع التأشيرة: ${form.visa_type}
الاسم: ${form.name} ${form.surname}
البريد الإلكتروني: ${form.email}
الهاتف: ${form.phone}
الجنس: ${form.gender}
تاريخ الميلاد: ${form.birth_date}
مكان الميلاد: ${form.birth_place}
الحالة الاجتماعية: ${form.marital_status}
عدد الأطفال: ${form.children_count}
رقم الجواز: ${form.passport_number}
تاريخ الإصدار: ${form.passport_issue_date}
تاريخ انتهاء الجواز: ${form.passport_expiry_date}
مكان إصدار الجواز: ${form.passport_issue_place}
المهنة: ${form.job}
جهة العمل: ${form.company}
المدينة: ${form.city}
العنوان: ${form.address}
سنوات الخبرة: ${form.work_years}
الراتب: ${form.salary}
السفر مع: ${form.travel_with}
تذكرة الطيران: ${form.flight_ticket}
ملاحظات: ${form.notes || 'لا يوجد'}`;

      // Encode the message for URL
      const encodedMessage = encodeURIComponent(message);
      const phone = '201229417417'; // Use correct phone number with country code
      
      // Open WhatsApp with the pre-filled message
      window.open(`https://wa.me/${phone}?text=${encodedMessage}`, '_blank');
      
    } catch (error) {
      const validationErrors = {};
      error.inner.forEach(err => {
        validationErrors[err.path] = err.message;
      });
      setErrors(validationErrors);
    }
  };

  const renderInput = (label, name, type = 'text', required = false) => (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={name}>
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={form[name]}
        onChange={handleChange}
        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
          errors[name] ? 'border-red-500' : ''
        }`}
        dir="rtl"
      />
      {errors[name] && (
        <p className="text-red-500 text-xs italic mt-1">{errors[name]}</p>
      )}
    </div>
  );

  const renderSelect = (label, name, options, required = false) => (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={name}>
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <select
        id={name}
        name={name}
        value={form[name]}
        onChange={handleChange}
        className={`shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
          errors[name] ? 'border-red-500' : ''
        }`}
        dir="rtl"
      >
        <option value="">اختر {label}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {errors[name] && (
        <p className="text-red-500 text-xs italic mt-1">{errors[name]}</p>
      )}
    </div>
  );

  const renderTextarea = (label, name) => (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={name}>
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        value={form[name]}
        onChange={handleChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        rows="3"
        dir="rtl"
      />
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8" dir="rtl">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            تقديم طلب تأشيرة
          </h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {renderSelect('البلد المطلوب', 'country', countryOptions, true)}
              {renderSelect('نوع التأشيرة', 'visa_type', visaTypeOptions, true)}
              {renderInput('الاسم الأول', 'name', 'text', true)}
              {renderInput('اللقب', 'surname', 'text', true)}
              {renderInput('البريد الإلكتروني', 'email', 'email', true)}
              {renderInput('رقم الهاتف', 'phone', 'tel', true)}
              {renderSelect('الجنس', 'gender', genderOptions, true)}
              {renderInput('تاريخ الميلاد', 'birth_date', 'date', true)}
              {renderInput('مكان الميلاد', 'birth_place')}
              {renderSelect('الحالة الاجتماعية', 'marital_status', maritalStatusOptions, true)}
              {renderInput('عدد الأطفال', 'children_count', 'number')}
              {renderInput('رقم الجواز', 'passport_number', 'text', true)}
              {renderInput('تاريخ الإصدار', 'passport_issue_date', 'date')}
              {renderInput('تاريخ انتهاء الجواز', 'passport_expiry_date', 'date', true)}
              {renderInput('مكان إصدار الجواز', 'passport_issue_place')}
              {renderInput('المهنة', 'job', 'text', true)}
              {renderInput('جهة العمل', 'company')}
              {renderInput('المدينة', 'city')}
              {renderInput('العنوان', 'address')}
              {renderInput('سنوات الخبرة', 'work_years', 'number')}
              {renderInput('الراتب', 'salary', 'number')}
              {renderSelect('السفر مع', 'travel_with', travelWithOptions)}
              {renderSelect('تذكرة الطيران', 'flight_ticket', flightTicketOptions)}
            </div>
            
            {renderTextarea('ملاحظات إضافية', 'notes')}
            
            <div className="flex justify-center mt-8">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg focus:outline-none focus:shadow-outline transition duration-150"
              >
                إرسال الطلب
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VisaForm;
