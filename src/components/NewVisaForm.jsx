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
  { value: '47', label: 'المملكة المتحدة' },
  { value: '65', label: 'الدنمارك' },
  { value: '66', label: 'بلجيكا' },
  { value: '67', label: 'كندا' },
  { value: '68', label: 'ألمانيا' },
  { value: '69', label: 'فرنسا' },
  { value: '70', label: 'إيطاليا' },
  { value: '71', label: 'مالطا' },
  { value: '72', label: 'أيرلندا' },
  { value: '106', label: 'إسبانيا' },
  { value: '107', label: 'البرتغال' },
  { value: '108', label: 'أمريكا' },
  { value: '109', label: 'المجر' },
  { value: '110', label: 'اليونان' },
  { value: '111', label: 'دبي' },
  { value: '112', label: 'بولندا' },
  { value: '113', label: 'بلغاريا' },
  { value: '114', label: 'لوكسمبورغ' },
  { value: '115', label: 'السويد' },
  { value: '116', label: 'رومانيا' },
  { value: '117', label: 'سلوفينيا' },
  { value: '118', label: 'إستونيا' },
  { value: '128', label: 'ليتوانيا' },
  { value: '129', label: 'النرويج' },
  { value: '130', label: 'السعودية' },
  { value: '131', label: 'كوريا الجنوبية' },
  { value: '144', label: 'النمسا' },
  { value: '145', label: 'أستراليا' },
  { value: '185', label: 'هولندا' },
  { value: '370', label: 'لاتفيا' },
  { value: '384', label: 'فنلندا' },
  { value: '498', label: 'روسيا' },
  { value: '499', label: 'الصين' },
];

// Visa type options organized by country
const visaTypesByCountry = {
  'السعودية': [
    { value: 'تأشيرة سياحية', label: 'تأشيرة سياحية' },
    { value: 'تأشيرة عمل', label: 'تأشيرة عمل' },
    { value: 'تأشيرة زيارة عائلية', label: 'تأشيرة زيارة عائلية' },
    { value: 'تأشيرة تجارية', label: 'تأشيرة تجارية' },
    { value: 'تأشيرة حج وعمرة', label: 'تأشيرة حج وعمرة' },
    { value: 'تأشيرة علاج طبي', label: 'تأشيرة علاج طبي' },
    { value: 'تأشيرة عبور', label: 'تأشيرة عبور' },
  ],
  'قطر': [
    { value: 'تأشيرة سياحية', label: 'تأشيرة سياحية' },
    { value: 'تأشيرة عمل', label: 'تأشيرة عمل' },
    { value: 'تأشيرة زيارة عائلية', label: 'تأشيرة زيارة عائلية' },
    { value: 'تأشيرة تجارية', label: 'تأشيرة تجارية' },
    { value: 'تأشيرة طالب', label: 'تأشيرة طالب' },
    { value: 'تأشيرة رجال أعمال', label: 'تأشيرة رجال أعمال' },
  ],
  'الإمارات': [
    { value: 'تأشيرة سياحية', label: 'تأشيرة سياحية' },
    { value: 'تأشيرة عمل', label: 'تأشيرة عمل' },
    { value: 'تأشيرة زيارة عائلية', label: 'تأشيرة زيارة عائلية' },
    { value: 'تأشيرة تجارية', label: 'تأشيرة تجارية' },
    { value: 'تأشيرة طالب', label: 'تأشيرة طالب' },
    { value: 'تأشيرة إقامة طويلة الأمد', label: 'تأشيرة إقامة طويلة الأمد' },
    { value: 'تأشيرة إقامة دائمة (بشروط خاصة)', label: 'تأشيرة إقامة دائمة (بشروط خاصة)' },
  ],
  'مسقط': [
    { value: 'تأشيرة سياحية', label: 'تأشيرة سياحية' },
    { value: 'تأشيرة عمل', label: 'تأشيرة عمل' },
    { value: 'تأشيرة زيارة عائلية', label: 'تأشيرة زيارة عائلية' },
    { value: 'تأشيرة تجارية', label: 'تأشيرة تجارية' },
    { value: 'تأشيرة طالب', label: 'تأشيرة طالب' },
    { value: 'تأشيرة عبور (ترانزيت)', label: 'تأشيرة عبور (ترانزيت)' },
    { value: 'تأشيرة المستثمرين ورواد الأعمال', label: 'تأشيرة المستثمرين ورواد الأعمال' },
  ],
};

// All visa types for when no country is selected
const allVisaTypes = [
  { value: 'تأشيرة سياحية', label: 'تأشيرة سياحية' },
  { value: 'تأشيرة عمل', label: 'تأشيرة عمل' },
  { value: 'تأشيرة زيارة عائلية', label: 'تأشيرة زيارة عائلية' },
  { value: 'تأشيرة تجارية', label: 'تأشيرة تجارية' },
  { value: 'تأشيرة طالب', label: 'تأشيرة طالب' },
  { value: 'تأشيرة عبور (ترانزيت)', label: 'تأشيرة عبور (ترانزيت)' },
  { value: 'تأشيرة إقامة طويلة الأمد', label: 'تأشيرة إقامة طويلة الأمد' },
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
    notes: ''
  });

  const [searchState, setSearchState] = useState({
    activeDropdown: null,
    countrySearch: '',
    visaTypeSearch: '',
    searchTerm: '',
    isDropdownOpen: false
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
      const matchedVisaType = allVisaTypes.find(opt => opt.value === visaType || opt.label === visaType);
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

    // If country changes, clear the visa type
    if (name === 'country') {
      setForm(prevState => ({
        ...prevState,
        country: value,
        visa_type: '' // Reset visa type when country changes
      }));
    } else {
      setForm(prevState => ({
        ...prevState,
        [name]: value
      }));
    }

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

  // Get filtered visa types based on selected country
  const getFilteredVisaTypes = () => {
    if (!form.country) return allVisaTypes;
    return visaTypesByCountry[form.country] || allVisaTypes;
  };

  const renderInput = (label, name, type = 'text', required = false, options = []) => {
    if (type === 'select') {
      return (
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={name}>
            {label} {required && <span className="text-red-500">*</span>}
          </label>
          <select
            id={name}
            name={name}
            value={form[name] || ''}
            onChange={handleChange}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors[name] ? 'border-red-500' : ''
            }`}
            dir="rtl"
          >
            <option value="">اختر {label.toLowerCase()}</option>
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
    }

    return (
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={name}>
          {label} {required && <span className="text-red-500">*</span>}
        </label>
        <input
          type={type}
          id={name}
          name={name}
          value={form[name] || ''}
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
  };

  const renderSelect = (label, name, options, required = false) => {
    const { searchTerm, isDropdownOpen, activeDropdown } = searchState;

    const filteredOptions = options.filter(option =>
      option.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
      option.value.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const isActive = isDropdownOpen && activeDropdown === name;

    return (
      <div className="mb-4 relative">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={name}>
          {label} {required && <span className="text-red-500">*</span>}
        </label>

        <div className="relative">
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder={`ابحث عن ${label.toLowerCase()}...`}
            value={isActive ? searchTerm : (options.find(opt => opt.value === form[name])?.label || '')}
            onChange={(e) => setSearchState(prev => ({ ...prev, searchTerm: e.target.value }))}
            onFocus={() => {
              setSearchState(prev => ({
                ...prev,
                isDropdownOpen: true,
                activeDropdown: name,
                searchTerm: ''
              }));
            }}
            onClick={() => {
              setSearchState(prev => ({
                ...prev,
                isDropdownOpen: true,
                activeDropdown: name
              }));
            }}
            dir="rtl"
          />
          <div className="absolute left-3 top-2.5 text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {isActive && (
          <div
            className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg"
            onMouseLeave={() => {
              setSearchState(prev => ({
                ...prev,
                isDropdownOpen: false,
                activeDropdown: null
              }));
            }}
          >
            <div className="max-h-60 overflow-y-auto">
              {filteredOptions.length > 0 ? (
                filteredOptions.map((option) => (
                  <div
                    key={option.value}
                    className={`px-4 py-2 hover:bg-gray-100 cursor-pointer ${
                      form[name] === option.value ? 'bg-blue-50' : ''
                    }`}
                    onClick={() => {
                      handleChange({ target: { name, value: option.value } });
                      setSearchState(prev => ({
                        ...prev,
                        isDropdownOpen: false,
                        activeDropdown: null
                      }));
                    }}
                  >
                    {option.label}
                  </div>
                ))
              ) : (
                <div className="px-4 py-2 text-gray-500">لا توجد نتائج</div>
              )}
            </div>
          </div>
        )}

        {errors[name] && (
          <p className="text-red-500 text-xs italic mt-1">{errors[name]}</p>
        )}
      </div>
    );
  };

  const renderCountryDropdown = () => {
    const { countrySearch, isDropdownOpen, activeDropdown } = searchState;

    const filteredCountries = countryOptions.filter(option =>
      option.label.toLowerCase().includes(countrySearch.toLowerCase()) ||
      option.value.toLowerCase().includes(countrySearch.toLowerCase())
    );

    const isActive = isDropdownOpen && activeDropdown === 'country';

    return (
      <div className="mb-4 relative">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="country">
          البلد المطلوب <span className="text-red-500">*</span>
        </label>

        <div className="relative">
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="ابحث عن البلد..."
            value={isActive ? countrySearch : (countryOptions.find(opt => opt.value === form.country)?.label || '')}
            onChange={(e) => setSearchState(prev => ({ ...prev, countrySearch: e.target.value }))}
            onFocus={() => {
              setSearchState(prev => ({
                ...prev,
                isDropdownOpen: true,
                activeDropdown: 'country',
                countrySearch: ''
              }));
            }}
            onClick={() => {
              setSearchState(prev => ({
                ...prev,
                isDropdownOpen: true,
                activeDropdown: 'country'
              }));
            }}
            dir="rtl"
          />
          <div className="absolute left-3 top-2.5 text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {isActive && (
          <div
            className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg"
            onMouseLeave={() => {
              setSearchState(prev => ({
                ...prev,
                isDropdownOpen: false,
                activeDropdown: null
              }));
            }}
          >
            <div className="max-h-60 overflow-y-auto">
              {filteredCountries.length > 0 ? (
                filteredCountries.map((option) => (
                  <div
                    key={option.value}
                    className={`px-4 py-2 hover:bg-gray-100 cursor-pointer ${
                      form.country === option.value ? 'bg-blue-50' : ''
                    }`}
                    onClick={() => {
                      handleChange({ target: { name: 'country', value: option.value } });
                      setSearchState(prev => ({
                        ...prev,
                        isDropdownOpen: false,
                        activeDropdown: null,
                        visaTypeSearch: ''
                      }));
                    }}
                  >
                    {option.label}
                  </div>
                ))
              ) : (
                <div className="px-4 py-2 text-gray-500">لا توجد نتائج</div>
              )}
            </div>
          </div>
        )}

        {errors.country && (
          <p className="text-red-500 text-xs italic mt-1">{errors.country}</p>
        )}
      </div>
    );
  };

  const renderVisaTypeDropdown = () => {
    const { visaTypeSearch, isDropdownOpen, activeDropdown } = searchState;

    const filteredVisaTypes = getFilteredVisaTypes().filter(option =>
      option.label.toLowerCase().includes(visaTypeSearch.toLowerCase()) ||
      option.value.toLowerCase().includes(visaTypeSearch.toLowerCase())
    );

    const isActive = isDropdownOpen && activeDropdown === 'visa_type';

    return (
      <div className="mb-4 relative">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="visa_type">
          نوع التأشيرة <span className="text-red-500">*</span>
        </label>

        <div className="relative">
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="ابحث عن نوع التأشيرة..."
            value={isActive ? visaTypeSearch : (getFilteredVisaTypes().find(opt => opt.value === form.visa_type)?.label || '')}
            onChange={(e) => setSearchState(prev => ({ ...prev, visaTypeSearch: e.target.value }))}
            onFocus={() => {
              setSearchState(prev => ({
                ...prev,
                isDropdownOpen: true,
                activeDropdown: 'visa_type',
                visaTypeSearch: ''
              }));
            }}
            onClick={() => {
              setSearchState(prev => ({
                ...prev,
                isDropdownOpen: true,
                activeDropdown: 'visa_type'
              }));
            }}
            dir="rtl"
          />
          <div className="absolute left-3 top-2.5 text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {isActive && (
          <div
            className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg"
            onMouseLeave={() => {
              setSearchState(prev => ({
                ...prev,
                isDropdownOpen: false,
                activeDropdown: null
              }));
            }}
          >
            <div className="max-h-60 overflow-y-auto">
              {filteredVisaTypes.length > 0 ? (
                filteredVisaTypes.map((option) => (
                  <div
                    key={option.value}
                    className={`px-4 py-2 hover:bg-gray-100 cursor-pointer ${
                      form.visa_type === option.value ? 'bg-blue-50' : ''
                    }`}
                    onClick={() => {
                      handleChange({ target: { name: 'visa_type', value: option.value } });
                      setSearchState(prev => ({
                        ...prev,
                        isDropdownOpen: false,
                        activeDropdown: null
                      }));
                    }}
                  >
                    {option.label}
                  </div>
                ))
              ) : (
                <div className="px-4 py-2 text-gray-500">لا توجد نتائج</div>
              )}
            </div>
          </div>
        )}

        {errors.visa_type && (
          <p className="text-red-500 text-xs italic mt-1">{errors.visa_type}</p>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8" dir="rtl">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            تقديم طلب تأشيرة
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {renderCountryDropdown()}
              {renderVisaTypeDropdown()}
              {renderInput('الاسم الأول', 'name', 'text', true)}
              {renderInput('اللقب', 'surname', 'text', true)}
              {renderInput('البريد الإلكتروني', 'email', 'email', true)}
              {renderInput('رقم الهاتف', 'phone', 'tel', true)}
              {renderInput('الجنس', 'gender', 'select', true, genderOptions)}
              {renderInput('تاريخ الميلاد', 'birth_date', 'date', true)}
              {renderInput('مكان الميلاد', 'birth_place')}
              {renderInput('الحالة الاجتماعية', 'marital_status', 'select', true, maritalStatusOptions)}
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

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="notes">
                ملاحظات إضافية
              </label>
              <textarea
                id="notes"
                name="notes"
                value={form.notes || ''}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                rows="3"
                dir="rtl"
              />
            </div>

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
