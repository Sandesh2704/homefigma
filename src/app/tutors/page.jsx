"use client"

import Button from "@/components/button";
import PageHeader from "@/components/pageheader";
import Paragraph from "@/components/paragraph";
import Section from "@/components/section";
import Image from "next/image";
import { FaRegFolder, FaRegHeart, FaStar } from "react-icons/fa";
export default function TutorPage() {


  return (
    <>
      <main>
        <PageHeader title="tutors Details" />
        <Section>
          <div className="rounded-3xl px-3 lg:px-6 py-3  lg:py-8 flex flex-col md:flex-row w-full  gap-5 border  border-[#01162773]/45 hover:border-primary hover:border-b-8 hover:border-2 duration-150 ">



            <Image
              src="/assests/teachers/99ebc2cfcc493a3bd27b587560aae365.jpg"
              alt="Joshua Brown"
              className="w-full sm:w-72 h-[340px] object-cover rounded-2xl"
              width={200}
              height={100}
              priority />


            <div className='lg:px-4 py-3.5 flex-1 w-full flex-col'>
              <h2 className="text-xl font-semibold mb-4">Joshua Brown</h2>
              <Paragraph text="orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />

              <div className="flex items-center gap-3 mt-5">
                <span className="text-xl font-medium">5.0</span>
                <div className=" flex items-center text-lg text-yellow-500">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>

              </div>
              <div className='flex items-center md:justify-between flex-col md:flex-row  mt-8 gap-y-6'>
                <div className='flex items-center justify-between md:justify-start gap-2'>
                  <div className='flex items-center  -space-x-3'>
                    {
                      [
                        "/assests/footer/23cfad77518a87ed584fd876f15475f1.png",
                        "/assests/footer/d0b69d873d205c11baf035716923dcf5.png",
                        "/assests/footer/34a6277fc3c71c809062c9bd784caa25.png",
                        "/assests/footer/4c8c58ca88650363e7fb08ee0c19d728.png",
                      ].map((items, index) => (
                        <Image
                          src={items}
                          alt={`Image ${index + 1}`}
                          height={1000}
                          width={1000}
                          className="object-cover relative w-10 h-10 rounded-full border border-black overflow-hidden"
                          key={index}
                        />
                      ))
                    }
                  </div>
                  <h1 className='text-lg font-medium'>50+ Students</h1>
                </div>

                <button>
                                                                        <Button title='Book tutor ' />
                                                                    </button>
              </div>


            </div>
            </div>
        </Section>


      </main>
    </>
  );
}