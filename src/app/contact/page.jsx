"use client"
import PageHeader from '@/components/pageheader';
import Section from '@/components/section';
import SectionTitle from '@/components/sectiontitle';
import React from 'react';
import { useForm, } from 'react-hook-form';
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa";
import Button from '@/components/button';
import { InputField, TextAreaField } from '@/components/form-input-field/page';

export default function Page() {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: ""
    }
  });

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
    alert("Message sent successfully!");
    reset();
  };

  const cardData = [
    {
      icon: <FaMapMarkerAlt />, title: "Address",
      links: [{ text: "3517 W. Gray St. Utica, Pennsylvania 57867", url: "https://www.google.com/maps?q=3517+W.+Gray+St.+Utica,+PA+57867" }],
      bg: "bg-[#2EC4B636] text-black", iconBg: "bg-[#0B9E90]"
    },
    {
      icon: <FaPhoneAlt />, title: "Contact details",
      links: [
        { text: "(406) 555-0120", url: "tel:4065550120" },
        { text: "emailaddress@gmail.com", url: "mailto:emailaddress@gmail.com" }
      ],
      bg: "bg-[#FFBDCE] text-black", iconBg: "bg-[#FF3366]"
    },
    {
      icon: <FaClock />, title: "Working hours",
      details: "Monday-Friday: 10am - 7pm",
      bg: "bg-[#011627] text-white", iconBg: "bg-[#0965AF]"
    }
  ];

  return (
    <main>
      <PageHeader title="Contact Us" />
      <Section>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:gap-x-3 xl:gap-x-8 gap-y-6 md:gap-y-3">
          {cardData.map((item, index) => (
            <div key={index} className={`px-6 py-8 rounded-3xl ${item.bg} text-center border border-[#01162752]/30`}>
              <div className='flex justify-center'>
                <span className={`text-3xl font-extrabold p-5 w-fit rounded-full ${item.iconBg} text-white`}>{item.icon}</span>
              </div>
              <h2 className="text-2xl font-bold mt-4">{item.title}</h2>
              <div className='mt-4'>
                {item.details && <h1 className="text-lg font-normal items-center">{item.details}</h1>}
                {item.links?.length > 0 && (
                  <div className="flex flex-col gap-y-3">
                    {item.links.map((link, index) => (
                      <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="block text-lg font-normal items-center gap-2">
                        {link.text}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </Section>
      <Section color='#F5F5F5'>
        <div className="flex justify-center overflow-hidden">
          <div className="md:w-8/12 lg:w-6/12 text-center">
            <SectionTitle title="Fill the form below, to tailor your needs better" black={true} balance={true} />
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col w-full md:w-10/12 mx-auto gap-4 py-2.5 mt-4'>
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
            name="email"
            label="Email"
            type="email"
            control={control}
            rules={{
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address"
              }
            }}
            errors={errors} />

          <TextAreaField
            name="message"
            label="Message"
            control={control}
            rules={{ required: "Message is required" }}
            errors={errors} />

          <div className='flex justify-center mt-6'>
            <button>
              <Button title="Send Message" />
            </button>
          </div>
        </form>
      </Section>
    </main>
  );
}
