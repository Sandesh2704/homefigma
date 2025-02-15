"use client"
import Button from '@/components/button';
import CheckboxList from '@/components/checkBoxlist';
import PageHeader from '@/components/pageheader'
import Paragraph from '@/components/paragraph';
import Section from '@/components/section'
import classcourses from '@/deta/class';
import team from '@/deta/team';
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
            <PageHeader title="Our Tutors" />
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

                            <div className='grid md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 gap-5'>
                                {team.map((items, index) => (
                                    <div key={index} className="rounded-3xl px-3 lg:px-[18px] py-3  lg:py-[22px] border  border-[#01162773]/45 hover:border-primary hover:border-b-8 hover:border-2 duration-150 ">
                                       <div className='relative'>
                                       <Image
                                                src={items.img}
                                                alt={items.name}
                                                className="w-full h-[302px] object-cover rounded-2xl"
                                                width={200}
                                                height={100}
                                                priority />
                                            <div className="absolute ">

                                            </div>
                                       </div>
                                        
                                      
                                        <div className='text-center flex flex-col gap-y-2 mt-4'>
                                            <h2 className="text-xl lg:text-2xl font-semibold">{items.name}</h2>
                                            <h3 className='text-base md:text-lg font-normal'>{items.role}</h3>
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
