"use client"
import Button from '@/components/button';
import Section from '@/components/section';
import { FaCheck } from 'react-icons/fa';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { RiCloseLargeLine } from 'react-icons/ri';
import Link from 'next/link';
import { Checkbox, Input, Radio, Select, TextArea } from '@/components/frominputs';

export default function StudentEnrollmentForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    studentName: "",
    parentName: "",
    studentAge: "",
    gender: "",
    grade: "",
    school: "",
    subjects: [],
    preferredTimings: [],
    learningStyle: "",
    address: "",
    pinCode: "",
    state: "",
    city: "",
    phoneNumber: "",
    email: "",
    tutoringMode: [],
    preferredPlace: [],
    specialNeeds: "",
    additionalNotes: "",
    source: "",
    verificationCode: "",
    profileImage: null,
  });

  const steps = [
    { id: 1, name: "PERSONAL INFO" },
    { id: 2, name: "ACADEMIC NEEDS" },
    { id: 3, name: "PREFERENCES" },
    { id: 4, name: "VERIFICATION" },
  ];

  const handleNext = () => setCurrentStep((prev) => Math.min(prev + 1, steps.length));
  const handlePrev = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
  
    if (type === 'checkbox') {
      // Handle checkboxes for arrays (e.g., subjects, preferredTimings)
      const updatedValue = checked
        ? [...(formData[name] || []), value] // Add value to array
        : (formData[name] || []).filter((item) => item !== value); // Remove value from array
  
      setFormData((prev) => ({
        ...prev,
        [name]: updatedValue,
      }));
    } else if (type === 'radio') {
      // Handle radio buttons (e.g., learningStyle)
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    } else {
      // Handle other inputs (e.g., studentName, email, etc.)
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = () => console.log('Student Enrollment Form Submitted:', formData);

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return <PersonalInfoForm handleChange={handleChange} formData={formData} />;
      case 2:
        return <AcademicNeedsForm handleChange={handleChange} formData={formData} />;
      case 3:
        return <PreferencesForm handleChange={handleChange} formData={formData} />;
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
          <div className=''>
            {renderStepContent()}
          </div>

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

export function PersonalInfoForm({ handleChange, formData }) {
  const genderOptions = [
    { value: "", label: "Select Gender" },
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "other", label: "Other" },
  ]

  const stateOptions = [
    { value: "", label: "Select State" },
    { value: "delhi", label: "Delhi" },
    { value: "maharashtra", label: "Maharashtra" },
    { value: "karnataka", label: "Karnataka" },
  ]

  const gradeOptions = [
    { value: "", label: "Select Grade/Class" },
    { value: "nursery", label: "Nursery" },
    { value: "kg", label: "KG" },
    { value: "1st", label: "1st" },
    { value: "2nd", label: "2nd" },
    { value: "3rd", label: "3rd" },
    { value: "4th", label: "4th" },
    { value: "5th", label: "5th" },
    { value: "6th", label: "6th" },
    { value: "7th", label: "7th" },
    { value: "8th", label: "8th" },
    { value: "9th", label: "9th" },
    { value: "10th", label: "10th" },
    { value: "11th", label: "11th" },
    { value: "12th", label: "12th" },
    { value: "college", label: "College" },
  ]

  return (
    <div>
      <div className="flex justify-center">
        <div className="w-9/12 text-center">
          <h2 className="text-xl font-bold">Student Information</h2>
          <p className="mt-3 text-sm text-gray-600">
            Please provide the student's personal information to help us find the best tutor match.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-x-12 xl:gap-x-24 mt-10">
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
          <p className="text-sm text-gray-500 mt-2">Optional: Upload a recent picture of the student</p>
        </div>

        <Input
          label="Student Full Name*"
          type="text"
          name="studentName"
          value={formData.studentName || ""}
          onChange={handleChange}
          placeholder="Enter student's full name"
        />

        <Input
          label="Parent/Guardian Full Name*"
          type="text"
          name="parentName"
          value={formData.parentName || ""}
          onChange={handleChange}
          placeholder="Enter parent/guardian's full name"
        />

        <Input
          label="Student Age*"
          type="number"
          name="studentAge"
          value={formData.studentAge || ""}
          onChange={handleChange}
          placeholder="Enter age"
        />

        <Select
          label="Gender*"
          name="gender"
          options={genderOptions}
          value={formData.gender || ""}
          onChange={handleChange}
        />

        <Select
          label="Grade/Class*"
          name="grade"
          options={gradeOptions}
          value={formData.grade || ""}
          onChange={handleChange}
        />

        <Input
          label="School Name*"
          type="text"
          name="school"
          value={formData.school || ""}
          onChange={handleChange}
          placeholder="Enter current school name"
        />

        <Input
          label="Email Address*"
          type="email"
          name="email"
          value={formData.email || ""}
          onChange={handleChange}
          placeholder="Enter email address"
        />

        <Input
          label="Phone Number*"
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber || ""}
          onChange={handleChange}
          placeholder="Enter contact number"
        />

        <TextArea
          label="Home Address*"
          name="address"
          value={formData.address || ""}
          onChange={handleChange}
          placeholder="Enter complete home address"
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

        <Input
          label="City*"
          type="text"
          name="city"
          value={formData.city || ""}
          onChange={handleChange}
          placeholder="Enter city name"
        />
      </div>
    </div>
  )
}

function AcademicNeedsForm({ handleChange, formData }) {
  const subjects = [
    "Mathematics", "Science", "Physics", "Chemistry", "Biology", "English", "Hindi", "Social Studies",
    "History", "Geography", "Computer Science", "Economics", "Accounting", "Business Studies",
    "Physical Education", "Art", "Music", "Foreign Languages", "Environmental Studies",
    "Competitive Exams", "NEET", "IIT-JEE", "Olympiad", "NTSE", "Grammar", "Literature",
    "Algebra", "Geometry", "Calculus", "Statistics", "Civics", "Political Science"
  ];

  const handleSubjectChange = (subject) => {
    const updatedSubjects = formData.subjects.includes(subject)
      ? formData.subjects.filter((s) => s !== subject) // Remove if already selected
      : [...formData.subjects, subject]; // Add if not selected

    handleChange({ target: { name: "subjects", value: updatedSubjects } });
  };

  const learningStyleOptions = [
    { value: "visual", label: "Visual Learner (learns best through seeing)" },
    { value: "auditory", label: "Auditory Learner (learns best through hearing)" },
    { value: "reading", label: "Reading/Writing Learner (learns best through reading and writing)" },
    { value: "kinesthetic", label: "Kinesthetic Learner (learns best through doing and moving)" },
    { value: "multimodal", label: "Multimodal Learner (combination of styles)" },
    { value: "unsure", label: "Not Sure" },
  ];

  return (
    <div>
      <div className='flex justify-center'>
        <div className='w-9/12 text-center'>
          <h2 className="text-xl font-bold">Academic Needs</h2>
          <p className="mt-3 text-sm text-gray-600">
            Please select the subjects you need help with and describe your learning preferences.
          </p>
        </div>
      </div>

      <div className='mt-10 space-y-10'>
        <div>
          <h3 className="text-md font-semibold mb-4">Select Subjects (You can select multiple)</h3>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-5'>
            {subjects.map((subject, index) => (
              <Checkbox
                key={index}
                label={subject}
                name="subjects"
                value={subject}
                checked={formData.subjects.includes(subject)}
                onChange={() => handleSubjectChange(subject)}
              />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-md font-semibold mb-4">Learning Style Preference</h3>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            {learningStyleOptions.map((style) => (
              <Radio
                key={style.value}
                label={style.label}
                name="learningStyle"
                value={style.value}
                checked={formData.learningStyle === style.value}
                onChange={handleChange}
              />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-md font-semibold mb-4">Special Needs or Requirements (Optional)</h3>
          <TextArea
            name="specialNeeds"
            value={formData.specialNeeds || ""}
            onChange={handleChange}
            placeholder="Please describe any special needs, learning disabilities, or specific requirements the student may have"
          />
        </div>
      </div>
    </div>
  );
}

function PreferencesForm({ handleChange, formData }) {
  const preferredTimings = [
    "Weekday Mornings (8AM-12PM)",
    "Weekday Afternoons (12PM-4PM)",
    "Weekday Evenings (4PM-8PM)",
    "Weekend Mornings (8AM-12PM)",
    "Weekend Afternoons (12PM-4PM)",
    "Weekend Evenings (4PM-8PM)",
  ];

  const handleTimingChange = (timing) => {
    const updatedTimings = formData.preferredTimings.includes(timing)
      ? formData.preferredTimings.filter((t) => t !== timing)
      : [...formData.preferredTimings, timing];

    handleChange({ target: { name: "preferredTimings", value: updatedTimings } });
  };

  const sourceOptions = [
    { value: "", label: "Select Source" },
    { value: "friend", label: "Friend/Family Referral" },
    { value: "social", label: "Social Media" },
    { value: "search", label: "Search Engine" },
    { value: "advertisement", label: "Advertisement" },
    { value: "school", label: "School Recommendation" },
    { value: "other", label: "Other" },
  ];

  return (
    <div>
      <div className='flex justify-center'>
        <div className='w-9/12 text-center'>
          <h2 className="text-xl font-bold">Tutoring Preferences</h2>
          <p className="mt-3 text-sm text-gray-600">
            Please let us know your preferences regarding tutoring mode, location, and timing.
          </p>
        </div>
      </div>

      <div className='mt-10 space-y-8'>
        {/* Tutoring Mode */}
        <div className='grid md:grid-cols-12 items-center gap-y-3 md:gap-x-5'>
          <label className='md:col-span-4 text-gray-600 text-sm md:text-right'>Preferred Tutoring Mode:*</label>
          <div className='md:col-span-8 flex items-center gap-5'>
            <Checkbox
              label="Online"
              name="tutoringMode"
              value="online"
              checked={formData.tutoringMode?.includes('online')}
              onChange={handleChange}
            />
            <Checkbox
              label="Offline/In-person"
              name="tutoringMode"
              value="offline"
              checked={formData.tutoringMode?.includes('offline')}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Preferred Place */}
        <div className='grid md:grid-cols-12 items-center gap-y-3 md:gap-x-5'>
          <label className='md:col-span-4 text-gray-600 text-sm md:text-right'>Preferred Location for in-person tutoring:*</label>
          <div className='md:col-span-8 flex items-center gap-5'>
            <Checkbox
              label="At Home"
              name="preferredPlace"
              value="studentHome"
              checked={formData.preferredPlace?.includes('studentHome')}
              onChange={handleChange}
            />
            <Checkbox
              label="At Tutor's Place"
              name="preferredPlace"
              value="tutorHome"
              checked={formData.preferredPlace?.includes('tutorHome')}
              onChange={handleChange}
            />
            <Checkbox
              label="At Learning Center"
              name="preferredPlace"
              value="learningCenter"
              checked={formData.preferredPlace?.includes('learningCenter')}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Preferred Timings */}
        <div>
          <h3 className="text-md font-semibold mb-4">Preferred Timings (Select all that apply)</h3>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            {preferredTimings.map((timing, index) => (
              <Checkbox
                key={index}
                label={timing}
                name="preferredTimings"
                value={timing}
                checked={formData.preferredTimings.includes(timing)}
                onChange={() => handleTimingChange(timing)}
              />
            ))}
          </div>
        </div>

        {/* Additional Notes */}
        <div>
          <h3 className="text-md font-semibold mb-4">Additional Notes or Requirements (Optional)</h3>
          <TextArea
            name="additionalNotes"
            value={formData.additionalNotes || ""}
            onChange={handleChange}
            placeholder="Please specify any other requirements or notes for the tutor (e.g., preferred teaching style, specific goals, etc.)"
          />
        </div>

        {/* How did you hear about us */}
        <div className='grid md:grid-cols-12 items-center gap-y-3 md:gap-x-5'>
          <label className='md:col-span-4 text-gray-600 text-sm md:text-right'>How did you hear about us?*</label>
          <div className='md:col-span-8'>
            <Select
              name="source"
              options={sourceOptions}
              value={formData.source || ""}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function VerificationForm({ handleChange, formData }) {
  const handleVerify = () => {
    alert(`Verifying code: ${formData.verificationCode}`);
  };

  return (
    <div className="flex flex-col items-center justify-center ">
      {/* Success Message */}
      <div className="w-full relative bg-green-100 border border-green-300 text-green-700 px-4 md:px-7 py-7 rounded-md ">
        <h2 className="text-2xl font-bold">Thank You for your Enrollment!</h2>
        <button className="text-gray-600 text-xl absolute top-4 right-4"><RiCloseLargeLine /></button>

        <p className="mt-4 text-base">
          To Complete Your Enrollment,
        </p>
        <p className="text-base mt-2">
          <span className="font-medium">Step 1:</span> Please verify your account by clicking the activation link sent to your Email Address.
        </p>
        <p className="text-base mt-2">
          <span className="font-medium">Step 2:</span> Enter the verification code you have received on your mobile number{" "}
          <span className="font-bold ">{formData.phoneNumber || "your registered number"}</span>.
        </p>
      </div>

      {/* Verification Section */}
      <div className="mt-12 text-center">
        <h3 className="text-lg font-medium text-green-700">
          Enter the code you have received on your mobile number{" "}
          <span className="font-bold">{formData.phoneNumber || "your registered number"}</span>
        </h3>

        {/* Input Field */}
        <div className="flex justify-start text-start md:justify-center flex-col md:flex-row items-center mt-10 space-x-2 gap-y-2">
          <label htmlFor="verificationCode" className="text-gray-600 text-sm font-medium">
            Verification Code:
          </label>
          <div className='flex flex-row'>
            <input
              type="text"
              id="verificationCode"
              name="verificationCode"
              value={formData.verificationCode || ""}
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