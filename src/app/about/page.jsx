import PageHeader from '@/components/pageheader'
import Teachers from '@/section/common/Teachers'
import Testimonial from '@/section/common/Testimonial'
import WhyChoose from '@/section/common/WhyChoose'
import React from 'react'
import SectionTitle from '@/components/sectiontitle';
import { HiOutlineTv } from "react-icons/hi2";
import { RiDropdownList } from "react-icons/ri";
import { RxLaptop } from "react-icons/rx";
import { FaGraduationCap } from "react-icons/fa";
import Section from '@/components/section'

export default function page() {

  const achievements = [
    { icon: <FaGraduationCap fontWeight={900} />, title: "Happy Students", value: "100+", bg: "bg-[#2EC4B636] text-black", iconBg: "bg-[#0B9E90]" },
    { icon: <HiOutlineTv />, title: "Tutors", value: "100+", bg: "bg-[#FFBDCE] text-black", iconBg: "bg-[#FF3366]" },
    { icon: <RiDropdownList />, title: "Available courses", value: "100+", bg: "bg-[#0A8D81] text-white", iconBg: "bg-[#02443E]" },
    { icon: <RxLaptop />, title: "Satisfaction", value: "96%", bg: "bg-[#011627] text-white", iconBg: "bg-[#0965AF]" },
  ];

  return (
    <>
      <main>
        <PageHeader title="About Us" />



        <Section>
          <div className="flex justify-center overflow-hidden">
            <div className="sm:w-8/12 xl:w-6/12 text-center">
              <SectionTitle title="Celebrating Our Achievements with Trusted Partnerships" black={true} balance={true} />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:gap-x-3 xl:gap-x-7 gap-y-6  md:gap-y-3   mt-8   py-2">
            {achievements.map((item, index) => (
              <div key={index} className={`px-6 py-8 rounded-3xl  ${item.bg} text-center border border-[#01162752]/30`}>
                <div className='flex justify-center '>
                  <span className={`text-3xl font-extrabold p-5 w-fit rounded-full ${item.iconBg} text-white`}>
                    {item.icon}
                  </span>
                </div>
                <h3 className="text-xl font-normal mt-3">{item.title}</h3>
                <h1 className="text-4xl font-bold mt-3">{item.value}</h1>
              </div>
            ))}
          </div>
        </Section>



        <Testimonial />
        <WhyChoose />
        <Teachers />
      </main>
    </>
  )
}
