"use client"
import { useForm } from 'react-hook-form';
import React from 'react';
import Section from '@/components/section';
import Image from 'next/image';
import Paragraph from '@/components/paragraph';
import { RiGraduationCapLine, RiPriceTag3Line } from 'react-icons/ri';
import { FaChalkboardTeacher } from 'react-icons/fa';
import { InputField } from '@/components/form-input-field/page';

export default function page() {

  const teacherData = {
    name: "Rajesh Kumar",
    profileImage: "/assests/teachers/ae55b3cd59ae8c195ab1c6ca840c713d.jpg", 
    gender: "Male",
    monthlyFee: "₹2,000",
    teachingExperience: "5 years",
    collegeName: "Delhi University",
    graduationYear: "2015",
    major: "Computer Science",
    selfDescription: "Dedicated home tutor for students up to class 10th in all subjects",
    skillsAndExperience: "I have 5 years of experience teaching mathematics and science to students from 6th to 10th standard. My students have shown consistently improved results and I specialize in making complex concepts easy to understand.",
    address: "123, Green Park, New Delhi",
    pinCode: "110016",
    state: "Delhi",
    city: "New Delhi",
    phone: "976868659779", 
    email: "rajesh.kumar@example.com",
    tutoringMode: ["Online", "Offline"],
    preferredPlace: ["Student Home"],
    interestedInSchool: "Yes",
    subjects: ["6th", "7th", "8th", "9th", "10th", "Mathematics", "Science"]
  };


  const { handleSubmit, control, formState: { errors } } = useForm({
    defaultValues: {
      email: "",
      password: ""
    }
  });

  const onSubmit = (data) => {
    console.log("Login Form Submitted:", data);
  };


  return (
    <>
      <main>
        <Section>
          <div className="grid grid-cols-12 py-5 gap-y-6">
            <div className='col-span-12 lg:col-span-7 flex flex-col'>
              <div className="border p-6  flex flex-col xl:flex-row gap-y-7 gap-x-6">
                <div className="flex justify-center xl:justify-start">
                  <Image
                    src={teacherData.profileImage}
                    alt={teacherData.name}
                    width={100}
                    height={100}
                    priority
                    className="h-48 w-48 rounded-full  object-cover"
                    onError={(e) => { e.target.src = "https://via.placeholder.com/200?text=Teacher"; e.target.onerror = null; }}
                  />
                </div>
                <div className="xl:flex-1 text-center xl:text-start">
                  <h1 className="text-2xl lg:text-3xl font-bold text-gray-800">{teacherData.name}</h1>
                  <p className="mt-3  xl:text-xl text-gray-600 text-balance">{teacherData.selfDescription}</p>
                  <div className="mt-4 flex flex-row flex-wrap justify-center xl:justify-start  gap-x-5 gap-y-3">
                    <div className="flex items-center text-gray-600">
                      <RiGraduationCapLine className="mr-2 text-blue-500" />
                      <span>{teacherData.major}, {teacherData.collegeName}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <FaChalkboardTeacher className="mr-2 text-blue-500" />
                      <span>{teacherData.teachingExperience} Experience</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <RiPriceTag3Line className="mr-2 text-blue-500" />
                      <span>{teacherData.monthlyFee}/month</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">About Me</h2>
                <p className="text-gray-700 whitespace-pre-line">{teacherData.skillsAndExperience}</p>
              </div>

              <div className="border p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Education & Qualification</h2>
                <div className="">
                  <h3 className="text-lg font-medium text-gray-800">{teacherData.major}</h3>
                  <p className="text-gray-600">{teacherData.collegeName}</p>
                  <p className="text-gray-600">Graduated: {teacherData.graduationYear}</p>
                </div>
              </div>

              <div className="border p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Subjects I Teach</h2>
                <div className="flex flex-wrap gap-2">
                  {teacherData.subjects.map((subject, index) => (
                    <span key={index} className="px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                      {subject}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Teaching Preferences</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-5">
                  <div>
                    <h3 className="text-md font-medium text-gray-700">Tutoring Mode</h3>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {teacherData.tutoringMode.map((mode, index) => (
                        <span key={index} className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                          {mode}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-md font-medium text-gray-700">Preferred Teaching Location</h3>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {teacherData.preferredPlace.map((place, index) => (
                        <span key={index} className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                          {place}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-md font-medium text-gray-700">Interested in School/Institute</h3>
                    <h3 className="mt-2 w-fit px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800">{teacherData.interestedInSchool}</h3>
                  </div>
                </div>
              </div>
            </div>

            <div className='lg:sticky lg:top-3 col-span-12 lg:col-span-5 py-8 px-4 md:px-7  h-fit w-full border bg-[#F5F5F5] gap-y-6'>
              <div className="border-b pb-4 broder-gray-900  gap-6">
                <div className="flex justify-center">
                  <Image
                    src={teacherData.profileImage}
                    alt={teacherData.name}
                    width={100}
                    height={100}
                    priority
                    className="h-32 w-32 rounded-full  object-cover"
                    onError={(e) => { e.target.src = "https://via.placeholder.com/200?text=Teacher"; e.target.onerror = null; }}
                  />
                </div>
                <div className="md:flex-1 mt-4 text-center">
                  <h1 className="text-2xl mb-3 font-bold text-gray-800">{teacherData.name}</h1>
                  <Paragraph text="Your Search for Perfect Tuition Teacher ends here, Just fill out the details below & we will connect you with Aanshi to schedule a free one-to-one trial class." />
                </div>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 mt-5">
                <InputField
                  name="name"
                  label="Name"
                  type="text"
                  control={control}
                  rules={{ required: "Name is required" }}
                  errors={errors} />

                <InputField
                  name="phone"
                  label="Phone"
                  type="number"
                  control={control}
                  rules={{
                    required: "Phone number is required",
                    pattern: { value: /^[0-9]+$/, message: "Invalid phone number" }
                  }}
                  errors={errors} />

                <InputField
                  name="city"
                  label="City"
                  type="text"
                  control={control}
                  rules={{ required: "City is required" }}
                  errors={errors} />


                <div className="mt-6 flex justify-center">
                  <button className=" bg-primary hover:bg-blue-700 text-black font-medium py-3 px-6 rounded-lg transition duration-200 transform hover:scale-105">
                    Contect with {teacherData.name}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Section>
      </main>
    </>
  );
}
