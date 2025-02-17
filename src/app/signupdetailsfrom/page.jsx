"use client"
import Button from '@/components/button';
import Section from '@/components/section';
import { FaCheck } from 'react-icons/fa';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Page() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({});
  const steps = [
    { id: 1, name: "LOCATION" },
    { id: 2, name: "SUBJECT/CLASS" },
    { id: 3, name: "PROFILE" },
    { id: 4, name: "VERIFICATION" },
  ];

  const handleNext = () => setCurrentStep((prev) => Math.min(prev + 1, steps.length));
  const handlePrev = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = () => console.log('Form Data Submitted:', formData);

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return <LocationForm handleChange={handleChange} formData={formData} />;
      case 2:
        return <SubjectForm handleChange={handleChange} formData={formData} />;
      case 3:
        return <ProfileForm handleChange={handleChange} formData={formData} />;
      case 4:
        return <VerificationForm handleChange={handleChange} formData={formData} />;
      default:
        return null;
    }
  };

  return (
    <Section>
      <div className="w-full 2xl:w-8/12 mx-auto p-12 bg-white border">
        <div className="relative flex items-center mb-6">
          {steps.map((step) => (
            <div key={step.id} className="flex flex-col items-center w-full relative">
              <div className={`w-8 h-8 z-10 text-sm rounded-full flex items-center justify-center ${currentStep >= step.id ? 'bg-[#7DE0C5] text-white' : 'bg-gray-300'}`}>{step.id}</div>
              <span className="mt-2 text-xs font-medium text-gray-700">{step.name}</span>
            </div>
          ))}
        </div>

        <div className='mt-12'>
          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }}>
            {renderStepContent()}
          </motion.div>

        </div>


        <div className="flex justify-between mt-6">
          {currentStep > 1 && (<button onClick={handlePrev} className="bg-gray-500 text-white px-4 py-2 rounded">Previous</button>)}
          {currentStep < steps.length ? (
            <button onClick={handleNext} className="bg-blue-500 text-white px-4 py-2 rounded ml-auto">Next</button>
          ) : (
            <button onClick={handleSubmit} className="bg-green-500 text-white px-4 py-2 rounded ml-auto">Submit</button>
          )}
        </div>
      </div>
    </Section>
  );
}






function LocationForm({ handleChange, formData }) {

  const [form, setForm] = useState({
    tutoringMode: '',
    preferredPlace: [''],
    interestedInSchool: ''
  });



  return (
    <div>
      <div className='flex justify-center '>
        <div className='w-9/12 text-center '>
          <h2 className="text-xl  font-bold">Select Teaching Locations</h2>
          <p className="mt-3 text-sm  text-gray-600">Please select your preferred teaching area, tutoring mode and place to teach. You can add as many locations as you like. Then click on Next to continue.</p>
        </div>
      </div>

      <div className='mt-10 space-y-6'>
        {/* Tutoring Mode */}
        <div className='grid grid-cols-12 items-center gap-4'>
          <label className='col-span-3 text-gray-500 text-sm text-right'>Tutoring Mode:*</label>
          <div className='col-span-9 flex items-center gap-5'>
            <Radio label="Online" name="tutoringMode" value="online" checked={form.tutoringMode === 'online'} onChange={handleChange} />
            <Radio label="Offline" name="tutoringMode" value="offline" checked={form.tutoringMode === 'offline'} onChange={handleChange} />
          </div>
        </div>

        {/* Preferred Place to Teach */}
        <div className='grid grid-cols-12 items-center gap-4'>
          <label className='col-span-3 text-gray-500 text-sm text-right'>Preferred Place to teach:*</label>
          <div className='col-span-9 flex items-center gap-5'>
            <Checkbox label="Your Home" name="yourHome" checked={form.preferredPlace.includes('yourHome')} onChange={handleChange} />
            <Checkbox label="Student Home" name="studentHome" checked={form.preferredPlace.includes('studentHome')} onChange={handleChange} />
          </div>
        </div>

        {/* Interest in Teaching at Schools or Institutes */}
        <div className='grid grid-cols-12 items-center gap-4'>
          <label className='col-span-3 text-gray-500 text-sm text-right'>Are you interested to teach in School or Coaching Institutes?:*</label>
          <div className='col-span-9 flex items-center gap-5'>
            <Radio label="Yes" name="interestedInSchool" value="yes" checked={form.interestedInSchool === 'yes'} onChange={handleChange} />
            <Radio label="No" name="interestedInSchool" value="no" checked={form.interestedInSchool === 'no'} onChange={handleChange} />
          </div>
        </div>


      </div>
    </div>
  );
}



const Input = ({ label, name, type = "text", value, onChange }) => (
  <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <input type={type} name={name} value={value} onChange={onChange} className="w-full border rounded px-3 py-2" />
  </div>
);

const Checkbox = ({ label, name, checked, onChange }) => (
  <label className="flex items-center text-gray-500 text-sm">
    <input type="checkbox" name={name} checked={checked} onChange={onChange} className="mr-2" />
    {label}
  </label>
);

const Radio = ({ label, name, value, checked, onChange }) => (
  <label className="flex items-center text-gray-500 text-sm">
    <input type="radio" name={name} value={value} checked={checked} onChange={onChange} className="mr-2" />
    {label}
  </label>
);

const Select = ({ label, name, options, value, onChange }) => (
  <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <select name={name} value={value} onChange={onChange} className="w-full border rounded px-3 py-2">
          {options.map((option, index) => (
              <option key={index} value={option.value}>{option.label}</option>
          ))}
      </select>
  </div>
);




{/* <div className="mb-4">
        <label className="block mb-2 font-medium">Tutoring Mode:*</label>
        <Checkbox label="Online" name="online" />
        <Checkbox label="Offline" name="offline" />
      </div>

      <div className="mb-4">
        <label className="block mb-2 font-medium">Preferred Place to teach:*</label>
        <Checkbox label="Your Home" name="yourHome" />
        <Checkbox label="Student Home" name="studentHome" />
      </div>

      <div className="mb-4">
        <label className="block mb-2 font-medium">Are you interested to teach in School or Coaching Institutes?:*</label>
        <div>
          <input type="radio" value="Yes" /> Yes
          <input type="radio" value="No" /> No
        </div>
      </div> */}