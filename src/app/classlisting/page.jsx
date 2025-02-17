"use client"
import PageHeader from '@/components/pageheader'
import Section from '@/components/section'
import React, { useState } from 'react'
import Button from '@/components/button'
import Image from 'next/image'
import Paragraph from '@/components/paragraph'
import { BsSearch } from "react-icons/bs";
import { FaRegFolder, FaStar } from "react-icons/fa"
import { FaRegHeart } from "react-icons/fa6";
import CheckboxList from '@/components/checkBoxlist'
import classcourses from '@/deta/class'
import WhyChoose from '@/section/common/WhyChoose'


export default function PageListing() {

    const classTypes = ["All", "Default", "Onsite", "Online"];
    const tutors = ["Joshua Brown", "John Smith", "Eliza Mic", "Holly Hunter", "Sammy King"];
    const prices = ["All", "Free", "Paid"];

    const [selectedClassTypes, setSelectedClassTypes] = useState([]);
    const [selectedTutors, setSelectedTutors] = useState([]);
    const [selectedPrices, setSelectedPrices] = useState([]);

    const toggleItem = (listSetter, item) => {
        listSetter((prev) =>
            prev.includes(item) ? prev.filter((c) => c !== item) : [...prev, item]
        );
    };

    return (
        <>
            <main>
                <PageHeader title="Class Listing" />
                <div>
                    <Section>
                        <div className='flex flex-col lg:flex-row  gap-y-8 gap-x-5'>

                            <div className='w-full lg:w-60 grid  grid-cols-2 md:grid-cols-3 gap-x-7 gap-y-8  h-fit lg:pr-4 xl:pr-6 lg:border-r border-[#00000033]/20'>
                                <div className='flex flex-col gap-y-3 col-span-2 md:col-span-3'>
                                    <h3 className="text-xl lg:text-2xl font-semibold">Search</h3>
                                    <select className="flex text-base   items-center w-full gap-5  border order-[#00000033]/20 rounded-lg p-4 bg-transparent  placeholder:text-[#000000BF]/75 bg-none focus:ring-none focus:outline-none">
                                        <option>Selected</option>
                                        <option>Recent classes</option>
                                        <option>Popular classes</option>
                                        <option>Upcoming classes</option>
                                    </select>
                                </div>

                                <div className='col-span-1 lg:col-span-3'>
                                    <CheckboxList title="Class Type" items={classTypes} selectedItems={selectedClassTypes} toggleItem={(item) => toggleItem(setSelectedClassTypes, item)} />
                                </div>

                                <div className='col-span-1 lg:col-span-3'>
                                    <CheckboxList title="Tutors" items={tutors} selectedItems={selectedTutors} toggleItem={(item) => toggleItem(setSelectedTutors, item)} />
                                </div>

                                <div className=' col-span-1 lg:col-span-3'>
                                    <CheckboxList title="Price" items={prices} selectedItems={selectedPrices} toggleItem={(item) => toggleItem(setSelectedPrices, item)} />
                                </div>
                            </div>

                            <div className='flex flex-1 flex-col gap-5   w-full xl:p-2 h-full'>
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

                                <div className='flex flex-col gap-5'>
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
                                                        <span>< FaRegHeart /></span>
                                                    </div>

                                                    <div className="flex gap-2 items-center ">
                                                        <span className="text-xl lg:text-2xl font-semibold">
                                                            ${items.price}
                                                        </span>
                                                    </div>
                                                </div>

                                            </div>


                                            <div className='md:px-4 py-3.5'>
                                                <h2 className="text-xl font-semibold mb-4">{items.title}</h2>
                                                <Paragraph text={items.description}  />

                                                <div className="flex items-center gap-3 mt-5">
                                                    <span className="text-xl font-medium">{items.rating}</span>
                                                    <div className=" flex items-center text-lg text-yellow-500">
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

                <div>
                    <WhyChoose/>
                </div>
            </main>
        </>
    )
}

