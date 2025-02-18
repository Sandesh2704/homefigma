// "use client"
// import PageHeader from '@/components/pageheader'
// import Section from '@/components/section'
// import SectionTitle from '@/components/sectiontitle';
// import React, { useState } from 'react'
// import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa";
// import Button from '@/components/button';

// export default function page() {

//   const cardData = [
//     {
//       icon: <FaMapMarkerAlt />,
//       title: "Address",
//       links: [
//         { text: "3517 W. Gray St. Utica, Pennsylvania 57867", url: "https://www.google.com/maps?q=3517+W.+Gray+St.+Utica,+PA+57867" }
//       ],
//       bg: "bg-[#2EC4B636] text-black",
//       iconBg: "bg-[#0B9E90]"
//     },
//     {
//       icon: <FaPhoneAlt />,
//       title: "Contact details",
//       links: [
//         { text: "(406) 555-0120", url: "tel:4065550120" },
//         { text: "emailaddress@gmail.com", url: "mailto:emailaddress@gmail.com" }
//       ],
//       bg: "bg-[#FFBDCE] text-black",
//       iconBg: "bg-[#FF3366]"
//     },
//     {
//       icon: <FaClock />,
//       title: "Working hours",
//       details: "Monday-Friday: 10am - 7pm",
//       bg: "bg-[#011627] text-white",
//       iconBg: "bg-[#0965AF]"
//     }
//   ];



//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form Submitted:", formData);
//     alert("Message sent successfully!");
//     setFormData({ name: "", phone: "", email: "", message: "" });
//   };



//   return (
//     <>
//       <main>
//         <PageHeader title="Contact Us" />

//         <Section>
//           <div className="grid grid-cols-1 sm:grid-cols-3 md:gap-x-3 xl:gap-x-8 gap-y-6  md:gap-y-3">
//             {cardData.map((item, index) => (
//               <div key={index} className={`px-6 py-8 rounded-3xl  ${item.bg} text-center border border-[#01162752]/30`}>
//                 <div className='flex justify-center '>
//                   <span className={`text-3xl font-extrabold p-5 w-fit rounded-full ${item.iconBg} text-white`}>
//                     {item.icon}
//                   </span>
//                 </div>

//                 <h2 className="text-2xl font-bold mt-4">{item.title}</h2>
//                 <div className='mt-4'>
//                   {item.details && <h1 className="text-lg  font-normal items-center ">{item.details}</h1>}
//                   {item.links?.length > 0 && (
//                     <div className="flex flex-col gap-y-3">
//                       {item.links.map((link, index) => (
//                         <a
//                           key={index}
//                           href={link.url}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="block text-lg  font-normal items-center gap-2"
//                         >
//                           {link.text}
//                         </a>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </Section>


//         <Section color='#F5F5F5'>
//           <div className="flex justify-center overflow-hidden">
//             <div className="md:w-8/12 lg:w-6/12 text-center">
//               <SectionTitle title="Fill the form below, to tailor your needs better" black={true} balance={true} />
//             </div>
//           </div>

//           <form onSubmit={handleSubmit} className='flex flex-col w-full md:w-10/12  mx-auto gap-4 py-2.5 mt-4'>
//             <InputField
//               label="Name"
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />
//             <InputField
//               label="Phone"
//               type="tel"
//               name="phone"
//               value={formData.phone}
//               onChange={handleChange}
//               required
//             />
//             <InputField
//               label="Email"
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//             <textarea
//               type="textarea"
//               name="message"
//               placeholder="Message"
//               value={formData.message}
//               onChange={handleChange}
//               rows="4"
//               className="py-3 px-4 border text-xl placeholder:text-xl border-[#011627] text-tertiary rounded-lg placeholder:text-tertiary  focus:ring-none focus:outline-none"
//               required
//             />
//             <div className='flex justify-center mt-6'>
//               <button >
//                 <Button title="Send Massage" />
//               </button>
//             </div>
//           </form>
//         </Section>
//       </main></>
//   )
// }



// function InputField({ type, value, onChange, name, required, label }) {
//   return (
//     <input
//       type={type}
//       name={name}
//       value={value}
//       onChange={onChange}
//       className="py-3 px-4 border text-xl placeholder:text-xl border-[#011627] text-tertiary rounded-lg placeholder:text-tertiary  focus:ring-none focus:outline-none"
//       required={required}
//       placeholder={label}
//     />
//   );
// };


"use client"
import PageHeader from '@/components/pageheader';
import Section from '@/components/section';
import SectionTitle from '@/components/sectiontitle';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa";
import Button from '@/components/button';

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
          rules={{ required: "Phone number is required",
          pattern: { value: /^[0-9]+$/, message: "Invalid phone number" }}} 
          errors={errors} />

          <InputField 
          name="email" 
          label="Email" 
          type="email"
          control={control} 
          rules={{ required: "Email is required", 
          pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, 
          message: "Invalid email address" }}} 
          errors={errors} />

          <InputField 
          name="message"
          label="Message" 
          control={control} 
          rules={{ required: "Message is required" }} 
          errors={errors} 
          textarea />

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

function InputField({ name, label, control, rules, errors, textarea, type }) {
  return (
    <div>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field }) => (
          textarea ?
            <textarea {...field} placeholder={label} className="py-3 px-4 w-full border text-xl placeholder:text-xl border-[#011627] text-tertiary rounded-lg placeholder:text-tertiary focus:ring-none focus:outline-none" rows="4" />
            :
            <input {...field} type={type} placeholder={label} className="py-3 px-4 w-full border text-xl placeholder:text-xl border-[#011627] text-tertiary rounded-lg placeholder:text-tertiary focus:ring-none focus:outline-none" />
        )}
      />
      {errors[name] && <p className="text-red-500 text-sm mt-1">{errors[name].message}</p>}
    </div>
  );
}
