"use client"
import Button from '@/components/button';
import CheckboxList from '@/components/checkBoxlist';
import PageHeader from '@/components/pageheader'
import Paragraph from '@/components/paragraph';
import Section from '@/components/section'
import classcourses from '@/deta/class';
import Image from 'next/image';
import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs';
import { FaRegFolder, FaRegHeart, FaStar } from 'react-icons/fa';

export default function page() {


    const locations = ["All", "Default", "Onsite", "Online"];
    const courses = ["Joshua Brown", "John Smith", "Eliza Mic", "Holly Hunter", "Sammy King"];
    const prices = ["All", "Free", "Paid"];

        const [selectedLocations, setSelectedLocations] = useState([]);
        const [selectedCourses, setSelectedCourses] = useState([]);
        const [selectedPrices, setSelectedPrices] = useState([]);
      
        const toggleItem = (listSetter, item) => {
          listSetter((prev) =>
            prev.includes(item) ? prev.filter((c) => c !== item) : [...prev, item]
          );
        };


    return (
        <>
        <PageHeader title="Our Tutors"/>
        <div>
        <Section>
                        <div className='grid grid-cols-12 gap-6 xl:gap-8'>

                            <div className='col-span-12 lg:col-span-3 grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-x-7 gap-y-8  h-fit lg:pr-4 xl:pr-6 lg:border-r border-[#00000033]/20'>
                                <div className=''>
                                    <CheckboxList title="Location" items={locations} selectedItems={selectedLocations} toggleItem={(item) => toggleItem(setSelectedLocations, item)} />
                                </div>

                                <div className=''>
                                    <CheckboxList title="Course taught" items={courses} selectedItems={selectedCourses} toggleItem={(item) => toggleItem(setSelectedCourses, item)} />
                                </div>

                                <div className=''>
                                <CheckboxList title="Price" items={prices} selectedItems={selectedPrices} toggleItem={(item) => toggleItem(setSelectedPrices, item)} />
  
                                </div>
                            </div>

                            <div className='col-span-12 lg:col-span-9 xl:col-span-9 flex flex-col gap-5   w-full xl:p-2 h-full'>
                                <div className='py-[22px] px-[18px] bg-[#F5F5F5] rounded-lg gap-5  grid md:grid-cols-2'>
                                    <div className='flex  items-center w-full gap-5  border rounded-lg px-6 py-4'>
                                        <input type=""
                                            className="bg-transparent w-full text-base placeholder:text-[#000000BF]/75 bg-none focus:ring-none focus:outline-none"
                                            placeholder='Search More' />
                                        <span>
                                            <BsSearch />
                                        </span>
                                    </div>


                                    <div className='flex gap-3 justify-end w-full'>
                                        <div className='p-3 md:p-4 rounded-lg bg-primary text-white text-xl md:text-2xl '>
                                            <FaRegFolder />
                                        </div>
                                        <div className='p-3 md:p-4 rounded-lg bg-secondary text-white text-xl md:text-2xl '>
                                            <FaRegHeart />
                                        </div>
                                    </div>
                                </div>

                                <div className='grid grid-cols-3 gap-5'>
                                    {classcourses.map((items, index) => (
                                        <div key={index} className="rounded-3xl px-3 lg:px-6 py-3  lg:py-8 grid grid-cols-1 lg:grid-cols-2  gap-5 border  border-[#01162773]/45 hover:border-primary hover:border-b-8 hover:border-2 duration-150 ">
                                            <div className='px-2 lg:px-4 py-3.5 h-fit border border-[#01162773]/45 rounded-[18px]'>
                                                <Image
                                                    src={items.image}
                                                    alt={items.title}
                                                    className="w-full h-[218px] object-cover rounded-2xl"
                                                    width={200}
                                                    height={100}
                                                    priority />

                                                <div className="lg:px-4 mt-4  flex  justify-between items-center gap-x-6 gap-y-3 sm:gap-0">
                                                    <div className="flex gap-2 text-2xl text-tertiary font-normal items-center">
                                                        <span><FaRegFolder /></span>
                                                        <span><FaRegHeart /></span>
                                                    </div>

                                                    <div className="flex gap-2 items-center ">
                                                        <span className="text-xl lg:text-2xl font-semibold">
                                                            ${items.price}
                                                        </span>
                                                    </div>
                                                </div>

                                            </div>


                                            <div className='md:px-4 py-3.5'>
                                                <h2 className="text-xl lg:text-2xl font-semibold mb-4">{items.title}</h2>
                                                <Paragraph text={items.description} fontlarg={true} />

                                                <div className="flex items-center gap-3 mt-5">
                                                    <span className="text-xl font-medium">{items.rating}</span>
                                                    <div className=" flex items-center text-xl text-yellow-500">
                                                        <FaStar />
                                                        <FaStar />
                                                        <FaStar />
                                                        <FaStar />
                                                        <FaStar />
                                                    </div>

                                                </div>
                                                <div className='flex items-center justify-between mt-11'>
                                                    <div className='flex items-center gap-2'>
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
                                                        <h1 className='text-lg font-medium'>{items.students}+ Students</h1>
                                                    </div>


                                                    <button>
                                                        <Button title='Enroll' />
                                                    </button>
                                                </div>

                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Section>
        </div>
        </>
    )
}
