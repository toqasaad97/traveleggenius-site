import React from 'react';
import * as yup from 'yup';

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

const countryOptions = [
  { value: '47',  label: "السعودية" },
  { value: '65', label: "قطر" },
  { value: '66', label: "الإمارات" },
  { value: '67', label: "مسقط" },

];

const visaTypeOptions = [
  { value: 'عمل', label: 'عمل' },
  { value: 'زيارة', label: 'زيارة' },
  { value: 'سياحة', label: 'سياحة' },
  { value: 'شنغن', label: 'شنغن' },
  { value: 'لم الشمل', label: 'لم الشمل' },
  { value: 'دراسة', label: 'دراسة' },
  { value: 'علاج', label: 'علاج' },
  { value: 'ترانزيت', label: 'ترانزيت' },
];

const genderOptions = [
  { value: 'ذكر', label: 'ذكر' },
  { value: 'أنثى', label: 'أنثى' },
];

class VisaApplicationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
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
      },
      errors: {},
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState((prev) => ({
      form: { ...prev.form, [name]: value },
      errors: { ...prev.errors, [name]: undefined },
    }));
  };

  handleSelectChange = (e) => {
    this.handleChange(e);
  };

  validateForm = async () => {
    try {
      await schema.validate(this.state.form, { abortEarly: false });
      this.setState({ errors: {} });
      return true;
    } catch (validationErrors) {
      const errors = {};
      validationErrors.inner.forEach((err) => {
        errors[err.path] = err.message;
      });
      this.setState({ errors });
      return false;
    }
  };

  onSubmit = async (e) => {
    e.preventDefault();
    const isValid = await this.validateForm();
    if (!isValid) return;

    const data = this.state.form;
    const message = `طلب تأشيرة جديد:
البلد: ${data.country}
نوع التأشيرة: ${data.visa_type}
الاسم: ${data.name} ${data.surname}
البريد الإلكتروني: ${data.email}
الهاتف: ${data.phone}
الجنس: ${data.gender}
تاريخ الميلاد: ${data.birth_date}
مكان الميلاد: ${data.birth_place}
الحالة الاجتماعية: ${data.marital_status}
عدد الأطفال: ${data.children_count}
رقم الجواز: ${data.passport_number}
تاريخ الإصدار: ${data.passport_issue_date}
تاريخ انتهاء الجواز: ${data.passport_expiry_date}
مكان إصدار الجواز: ${data.passport_issue_place}
المهنة: ${data.job}
جهة العمل: ${data.company}
المدينة: ${data.city}
العنوان: ${data.address}
سنوات الخبرة: ${data.work_years}
الراتب: ${data.salary}
السفر مع: ${data.travel_with}
تذكرة الطيران: ${data.flight_ticket}
ملاحظات: ${data.notes || 'لا يوجد'}`;

    const encodedMessage = encodeURIComponent(message);
    const phone = '201096266316'; // Use correct phone number with country code only
    window.open(`https://wa.me/${phone}?text=${encodedMessage}`, '_blank');
  };

  renderSelect = (label, name, options, required = false) => {
    const { form, errors } = this.state;
    return (
      <div>
        <label className="block mb-1 text-sm font-medium text-gray-700">
          {label} {required && '*'}
        </label>
        <select
          name={name}
          value={form[name]}
          onChange={this.handleSelectChange}
          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#1A84C4] ${
            errors[name] ? 'border-red-500' : 'border-gray-300'
          }`}
          dir="rtl"
        >
          <option value="">اختر</option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.label}>
              {opt.label}
            </option>
          ))}
        </select>
        {errors[name] && <p className="mt-1 text-sm text-red-600">{errors[name]}</p>}
      </div>
    );
  };

  renderInput = (label, name, type = 'text', required = false) => {
    const { form, errors } = this.state;
    return (
      <div>
        <label className="block mb-1 text-sm font-medium text-gray-700">
          {label} {required && '*'}
        </label>
        <input
          type={type}
          name={name}
          value={form[name]}
          onChange={this.handleChange}
          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#1A84C4] ${
            errors[name] ? 'border-red-500' : 'border-gray-300'
          }`}
          dir="rtl"
        />
        {errors[name] && <p className="mt-1 text-sm text-red-600">{errors[name]}</p>}
      </div>
    );
  };

  renderTextarea = (label, name) => {
    const { form } = this.state;
    return (
      <div className="md:col-span-2">
        <label className="block mb-1 text-sm font-medium text-gray-700">{label}</label>
        <textarea
          rows="4"
          name={name}
          value={form[name]}
          onChange={this.handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1A84C4]"
          dir="rtl"
        />
      </div>
    );
  };

  render() {
    return (
      <div className="max-w-5xl mx-auto p-6 bg-white rounded-2xl shadow-lg" dir="rtl">
        <h2 className="text-center text-white text-xl font-bold py-3 rounded-t-xl" style={{ backgroundColor: '#262751' }}>
          نموذج طلب التأشيرة
        </h2>
        <form onSubmit={this.onSubmit} className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {this.renderSelect('البلد المطلوب', 'country', countryOptions, true)}
          {this.renderSelect('نوع التأشيرة', 'visa_type', visaTypeOptions, true)}
          {this.renderInput('الاسم الأول', 'name', 'text', true)}
          {this.renderInput('اللقب', 'surname', 'text', true)}
          {this.renderInput('البريد الإلكتروني', 'email', 'email', true)}
          {this.renderInput('رقم الهاتف', 'phone', 'tel', true)}
          {this.renderSelect('الجنس', 'gender', genderOptions, true)}
          {this.renderInput('تاريخ الميلاد', 'birth_date', 'date', true)}
          {this.renderInput('مكان الميلاد', 'birth_place')}
          {this.renderSelect('الحالة الاجتماعية', 'marital_status', [
            { value: 'أعزب', label: 'أعزب' },
            { value: 'متزوج', label: 'متزوج' },
            { value: 'مطلق', label: 'مطلق' },
            { value: 'أرمل', label: 'أرمل' },
          ], true)}
          {this.renderInput('عدد الأطفال', 'children_count', 'number')}
          {this.renderInput('رقم الجواز', 'passport_number', 'text', true)}
          {this.renderInput('تاريخ الإصدار', 'passport_issue_date', 'date')}
          {this.renderInput('تاريخ انتهاء الجواز', 'passport_expiry_date', 'date', true)}
          {this.renderInput('مكان إصدار الجواز', 'passport_issue_place')}
          {this.renderInput('المهنة', 'job', 'text', true)}
          {this.renderInput('جهة العمل', 'company')}
          {this.renderInput('المدينة', 'city')}
          {this.renderInput('العنوان', 'address')}
          {this.renderInput('سنوات الخبرة', 'work_years', 'number')}
          {this.renderInput('الراتب', 'salary', 'number')}
          {this.renderSelect('السفر مع', 'travel_with', [
            { value: 'العائلة', label: 'العائلة' },
            { value: 'العمل', label: 'العمل' },
            { value: 'الوحدة', label: 'الوحدة' },
          ])}
          {this.renderSelect('تذكرة الطيران', 'flight_ticket', [
            { value: 'نعم', label: 'نعم' },
            { value: 'لا', label: 'لا' },
          ])}
          {this.renderTextarea('ملاحظات', 'notes')}

          <div className="md:col-span-2">
            <button type="submit" className="w-full py-3 bg-[#262751] text-white rounded-md hover:bg-[#1A84C4] transition-colors">
              إرسال الطلب
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default VisaApplicationForm;
