"use client"
import Button from '@/components/button';
import Section from '@/components/section';
import { FaCheck } from 'react-icons/fa';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { RiCloseLargeLine } from 'react-icons/ri';
import Link from 'next/link';
import { Checkbox, Input, Radio, Select, TextArea } from '@/components/frominputs';

export default function Page() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    gender: "",
    monthlyFee: "",
    teachingExperience: "",
    collegeName: "",
    graduationYear: "",
    major: "",
    selfDescription: "",
    skillsAndExperience: "",
    address: "",
    pinCode: "",
    state: "",
    source: "",
    city: "",
    tutoringMode: [],
    preferredPlace: [],
    interestedInSchool: "",
    verificationCode: "",
    profileImage: null,  
    subjects: [],      
  });

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
  
    if (type === 'checkbox') {
      // Handle checkboxes for arrays (e.g., tutoringMode, preferredPlace)
      const updatedValue = checked
        ? [...(formData[name] || []), value] // Add value to array
        : (formData[name] || []).filter((item) => item !== value); // Remove value from array
  
      setFormData((prev) => ({
        ...prev,
        [name]: updatedValue,
      }));
    } else if (type === 'radio') {
      // Handle radio buttons (e.g., interestedInSchool)
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    } else {
      // Handle other inputs (e.g., city, pinCode, etc.)
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
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
      <div className="w-full mx-auto py-16 px-4 md:px-7 lg:px-16 bg-white border">
        <div className="relative flex items-center ">
          {steps.map((step) => (
            <div key={step.id} className="flex flex-col items-center w-full relative">
              <div className={`w-8 h-8 z-10 text-sm rounded-full flex items-center justify-center ${currentStep >= step.id ? 'bg-[#7DE0C5] text-white' : 'bg-gray-300'}`}>{step.id}</div>
              <span className="mt-2 text-xs font-medium text-gray-700">{step.name}</span>
            </div>
          ))}
        </div>
        <div className='mt-12 lg:px-12 xl:px-20'>
          {/* <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }}> */}
          <div className=''>
            {renderStepContent()}
          </div>

          {/* </motion.div> */}



          <div className="flex justify-between mt-12">
            {currentStep > 1 && (
              <button onClick={handlePrev} className="bg-gray-500 text-white px-4 py-2 rounded">Previous</button>)
            }
            {currentStep < steps.length ? (
              <button onClick={handleNext} className="bg-blue-500 text-white px-4 py-2 rounded ml-auto">Next</button>
            ) : (
              <button onClick={handleSubmit} className="bg-green-500 text-white px-4 py-2 rounded ml-auto">Submit</button>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
}

export function ProfileForm({ handleChange, formData }) {
  const genderOptions = [
    { value: "", label: "Select Gender" },
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "other", label: "Other" },
  ]

  const sourceOptions = [
    { value: "", label: "Select Source" },
    { value: "friend", label: "Friend Referral" },
    { value: "social", label: "Social Media" },
    { value: "search", label: "Search Engine" },
    { value: "other", label: "Other" },
  ]

  const stateOptions = [
    { value: "", label: "Select State" },
    { value: "delhi", label: "Delhi" },
    { value: "maharashtra", label: "Maharashtra" },
    { value: "karnataka", label: "Karnataka" },
  ]

  return (
    <div >
      <div className="flex justify-center">
        <div className="w-9/12 text-center">
          <h2 className="text-xl font-bold">Complete Your Profile</h2>
          <p className="mt-3 text-sm text-gray-600">
            Please fill in your profile details accurately to help us match you with the right students.
          </p>
        </div>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-x-12 xl:gap-x-32 mt-12">

        <div className="flex flex-col text-start items-center">
          <label htmlFor="profileImage" className="cursor-pointer w-40 h-10 border-2 border-dashed border-gray-300 flex items-center justify-center bg-gray-50">
            <span className="text-sm text-gray-600">Upload Picture</span>
          </label>
          <input
            type="file"
            id="profileImage"
            name="profileImage"
            accept="image/*"
            className="hidden"
            onChange={handleChange}
          />
          <p className="text-sm  text-gray-500 mt-2">Please upload a recent professional picture of yourself</p>
        </div>

        <Select
          label="Gender*"
          name="gender"
          options={genderOptions}
          value={formData.gender || ""}
          onChange={handleChange}
        />

        <Input
          label="Monthly Tuition Fee*"
          type="text"
          name="monthlyFee"
          value={formData.monthlyFee || ""}
          onChange={handleChange}
          placeholder="Ex. 2000"
        />

        <Input
          label="Total Teaching Experience (Years and Months)*"
          type="text"
          name="teachingExperience"
          value={formData.teachingExperience || ""}
          onChange={handleChange}
          placeholder="Ex. 1 year"
        />

        <Input
          label="College Name*"
          type="text"
          name="collegeName"
          value={formData.collegeName || ""}
          onChange={handleChange}
          placeholder="Ex. Lucknow University"
        />

        <Input
          label="Graduation Year*"
          type="text"
          name="graduationYear"
          value={formData.graduationYear || ""}
          onChange={handleChange}
          placeholder="Ex. 2014"
        />

        <Input
          label="Major*"
          type="text"
          name="major"
          value={formData.major || ""}
          onChange={handleChange}
          placeholder="Ex. Computer Science"
        />


        <Input
          label="Define yourself in one sentence*"
          type="text"
          name="selfDescription"
          value={formData.selfDescription || ""}
          onChange={handleChange}
          placeholder="Ex. Home tutor for students upto class 5th, all subjects"
        />



        <TextArea
          label="Define your skills and experience*"
          name="skillsAndExperience"
          value={formData.skillsAndExperience || ""}
          onChange={handleChange}
          placeholder="Please Describe your Experience, skills, ability in detail"
        />


        <TextArea
          label="Home Address*"
          name="skillsAndExperience"
          value={formData.address || ""}
          onChange={handleChange}
          placeholder="Enter your complete address"
        />



        <Input
          label="Pin Code*"
          type="text"
          name="pinCode"
          value={formData.pinCode || ""}
          onChange={handleChange}
          placeholder="Enter pin code"
        />

        <Select
          label="State*"
          name="state"
          options={stateOptions}
          value={formData.state || ""}
          onChange={handleChange}
        />

        <Select
          label="How did you hear about us?*"
          name="source"
          options={sourceOptions}
          value={formData.source || ""}
          onChange={handleChange}
        />

      </div>
    </div>
  )
}

function VerificationForm({ handleChange, formData }) {


  const handleVerify = () => {
    alert(`Verifying code: ${formData.verificationCode}`);
  };

  return (
    <div className="flex flex-col items-center justify-center ">
      {/* Success Message */}
      <div className="w-full relative bg-green-100 border border-green-300 text-green-700 px-4 md:px-7 py-7 rounded-md ">

        <h2 className="text-2xl font-bold">Thank You for your Registration!</h2>
        <button className="text-gray-600 text-xl absolute top-4 right-4"><RiCloseLargeLine /></button>

        <p className="mt-4 text-base">
          To Continue,
        </p>
        <p className="text-base mt-2">
          <span className="font-medium">Step 1:</span> Please verify your account by clicking the activation link sent to your Email Address.
        </p>
        <p className="text-base mt-2">
          <span className="font-medium">Step 2:</span> Enter the verification code you have received on your mobile number{" "}
          <span className="font-bold ">9767359779</span>.
        </p>
      </div>

      {/* Verification Section */}
      <div className="mt-12 text-center">
        <h3 className="text-lg font-medium text-green-700">
          Enter the code you have received on your mobile number{" "}
          <span className="font-bold">9767359779</span>
        </h3>

        {/* Input Field */}
        <div className="flex justify-start text-start md:justify-center flex-col md:flex-row items-center mt-10 space-x-2 gap-y-2">

          <label htmlFor="verificationCode" className="text-gray-600 text-sm font-medium">
            Verification Code:
          </label>
          <div classsName='flex flex-row'>
            <input
              type="text"
              id="verificationCode"
              value={formData.verificationCode}
              onChange={handleChange}
              className="border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              onClick={handleVerify}
              className="bg-green-600 hover:bg-green-700 text-white text-base px-4 py-1 rounded font-medium"
            >
              Verify
            </button>
          </div>
        </div>

        {/* Resend Option */}
        <p className="text-sm text-gray-600 mt-7">
          Verification Code Not Received?{" "}
          <Link href="#" className="text-blue-600 hover:underline">
            Resend Verification Code: Click Here
          </Link>
        </p>
      </div>
    </div>
  );
}

function LocationForm({ handleChange, formData }) {
  return (
    <div>
      <div className='flex justify-center '>
        <div className='lg:w-9/12 text-center '>
          <h2 className="text-xl font-bold">Select Teaching Locations</h2>
          <p className="mt-3 text-sm text-gray-600">
            Please select your preferred teaching area, tutoring mode, and place to teach.
            You can add as many locations as you like. Then click on Next to continue.
          </p>
        </div>
      </div>

      <div className='mt-10 space-y-7'>
        {/* Select City */}
        <div className='grid md:grid-cols-12  items-center gap-y-3 md:gap-x-5'>
          <label className='md:col-span-4 text-gray-500 text-sm md:text-right'>Select City:*</label>
          <div className='md:col-span-5 lg:col-span-3'>
            <select
              name="city"
              value={formData.city || ""}
              onChange={handleChange}
              className='border px-3 py-2 rounded text-gray-500 text-sm w-full'
            >
              <option value="">Select City</option>
              <option value="mumbai">Mumbai</option>
              <option value="pune">Pune</option>
              <option value="delhi">Delhi</option>
              <option value="bangalore">Bangalore</option>
            </select>
          </div>
        </div>

        {/* Tutoring Mode */}
        <div className='grid md:grid-cols-12 items-center gap-y-3 md:gap-x-5'>
          <label className='md:col-span-4 text-gray-500 text-sm md:text-right'>Tutoring Mode:*</label>
          <div className='md:col-span-8 flex items-center gap-5'>
            <Checkbox
              label="Online"
              name="tutoringMode"
              value="online"
              checked={formData.tutoringMode?.includes('online')}
              onChange={handleChange}
            />
            <Checkbox
              label="Offline"
              name="tutoringMode"
              value="offline"
              checked={formData.tutoringMode?.includes('offline')}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Preferred Place to Teach */}
        <div className='grid md:grid-cols-12 items-center gap-y-3 md:gap-x-5'>
          <label className='md:col-span-4 text-gray-500 text-sm md:text-right'>Preferred Place to teach:*</label>
          <div className='md:col-span-8 flex items-center gap-5'>
            <Checkbox
              label="Your Home"
              name="preferredPlace"
              value="yourHome"
              checked={formData.preferredPlace?.includes('yourHome')}
              onChange={handleChange}
            />
            <Checkbox
              label="Student Home"
              name="preferredPlace"
              value="studentHome"
              checked={formData.preferredPlace?.includes('studentHome')}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Interest in Teaching at Schools or Institutes */}
        <div className='grid md:grid-cols-12 items-center gap-y-3 md:gap-x-5'>
          <label className='md:col-span-4 text-gray-500 text-sm md:text-right'>
            Are you interested to teach in School or Coaching Institutes?:*
          </label>
          <div className='md:col-span-8 flex items-center gap-5'>
            <Radio
              label="Yes"
              name="interestedInSchool"
              value="yes"
              checked={formData.interestedInSchool === 'yes'}
              onChange={handleChange}
            />
            <Radio
              label="No"
              name="interestedInSchool"
              value="no"
              checked={formData.interestedInSchool === 'no'}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function SubjectForm({ handleChange, formData }) {
  const subjects = [
    "Nursery", "Kg", "1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th", "10th",
    "11th", "12th", "Hobby Courses", "Languages", "Competitive Exam", "B.Tech", "B.A.", "B.Com.",
    "B.Sc.", "BBA", "MBA", "BCA", "MCA", "M.A.", "M.Com", "M.Sc.", "M.Tech", "PMT", "IIT-JEE",
    "MBBS", "C.S.", "LLB", "Diploma", "NEET", "IIT-JEE", "PMT"
  ];

  const handleSubjectChange = (subject) => {
    const updatedSubjects = formData.subjects.includes(subject)
      ? formData.subjects.filter((s) => s !== subject) // Remove if already selected
      : [...formData.subjects, subject]; // Add if not selected

    handleChange({ target: { name: "subjects", value: updatedSubjects } });
  };

  return (
    <div>
      <div className='flex justify-center'>
        <div className='w-9/12 text-center'>
          <h2 className="text-xl font-bold">Select Subject/Class</h2>
          <p className="mt-3 text-sm text-gray-600">
            Please select the subjects or classes you are interested in teaching. You can select multiple options.
          </p>
        </div>
      </div>

      <div className='grid grid-cols-2 md:grid-cols-4 gap-5  xl:px-24 mt-12'>
        {subjects.map((subject, index) => (
          <Checkbox
            key={index}
            label={subject}
            name="subjects"
            checked={formData.subjects.includes(subject)}
            onChange={() => handleSubjectChange(subject)}
            
          />
        ))}
      </div>
    </div>
  );
}