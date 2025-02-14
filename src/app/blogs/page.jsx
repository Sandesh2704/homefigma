"use client"
import PageHeader from '@/components/pageheader'
import Section from '@/components/section'
import blogs from '@/deta/blog'
import React, { useState } from 'react'
import Button from '@/components/button'
import Image from 'next/image'
import Paragraph from '@/components/paragraph'
import { BsCalendarWeek, BsSearch } from "react-icons/bs";
import { LiaComment } from "react-icons/lia";
import { LuPenLine } from "react-icons/lu";
import { FaRegFolder} from "react-icons/fa"
import { FaRegHeart } from "react-icons/fa6";
import CheckboxList from '@/components/checkBoxlist'


export default function Blog() {

    const categories = [
        "Digital Marketing",
        "Graphics",
        "Online course",
        "SEO optimizing",
        "UI/UX",
        "Web Development",
    ];

    const tags = ["All", "Free", "Paid"];

    const [selectedCategories, setSelectedCategories] = useState([]);

    const toggleCategory = (category) => {
        setSelectedCategories((prev) =>
            prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
        );
    };

    return (
        <>
            <main>
                <PageHeader title="Blog" />
                <div>
                    <Section>
                        <div className='grid grid-cols-12 gap-6 xl:gap-8'>
                            <div className='col-span-12 lg:col-span-4 xl:col-span-3 grid  md:grid-cols-2 gap-x-7 gap-y-8  h-fit lg:pr-4 xl:pr-6 lg:border-r border-[#00000033]/20'>

                                <div className='flex flex-col gap-y-3 col-span-2'>
                                    <h3 className="text-xl lg:text-2xl font-semibold">Search</h3>
                                    <div className='flex  items-center w-full gap-5  border order-[#00000033]/20 rounded-lg p-4'>
                                        <input type=""
                                            className="bg-transparent w-full text-base placeholder:text-[#000000BF]/75 bg-none focus:ring-none focus:outline-none"
                                            placeholder='Search More' />
                                        <span>
                                            <BsSearch />
                                        </span>
                                    </div>
                                </div>

                                <div className='col-span-2 md:col-span-1 lg:col-span-2'>
                                    <CheckboxList title="Categories" items={categories} selectedItems={selectedCategories} toggleItem={toggleCategory} />
                                </div>

                                <div className='col-span-2 md:col-span-1 lg:col-span-2'>
                                    <CheckboxList title="Tags" items={tags} selectedItems={selectedCategories} toggleItem={toggleCategory} />
                                </div>

                                <div className="flex flex-col gap-y-3  p-2 border rounded-lg  col-span-2">
                                    <h3 className="text-xl lg:text-2xl font-semibold mb-2">Most Recent</h3>
                                    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-5'>
                                        {[1, 2, 3].map((item) => (
                                            <div key={item} className='space-y-2 py-1 border-b md:border-b-0 lg:border-b border-[#C2C2C26E]/50'>
                                                <div className='relative'>
                                                    <Image
                                                        src='/assests/blog/0eeb95c4bc6d7035a8553c7e7ed6c99b.jpg'
                                                        alt='blog'
                                                        className="w-full h-40 object-cover rounded-2xl"
                                                        width={200}
                                                        height={100}
                                                        priority />
                                                    <span className="absolute bottom-2 left-3 text-sm text-white bg-primary px-4 py-1 rounded-full">
                                                        Dec 18th 2024
                                                    </span>
                                                </div>
                                                <h1 className="text-lg lg:text-xl text-semibold">Blogs Header</h1>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className='col-span-12 lg:col-span-8 xl:col-span-9 flex flex-col gap-5   w-full xl:p-2 h-full'>

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
                                            <FaRegHeart/>
                                        </div>
                                    </div>
                                </div>

                                <div className='flex flex-col gap-5'>
                                    {blogs.map((items, index) => (
                                        <div key={index} className="rounded-3xl px-3 lg:px-6 py-3  lg:py-8 flex flex-col gap-3 border border-[#01162773]/45 ">
                                            <div className='px-2 lg:px-4 py-3.5 border border-[#01162773]/45 rounded-[18px]'>
                                                <Image
                                                    src={items.image}
                                                    alt={items.title}
                                                    className="w-full h-60 lg:h-[499px] object-cover rounded-2xl"
                                                    width={200}
                                                    height={100}
                                                    priority />
                                                <div className="lg:px-4 mt-4 text-tertiary text-base lg:text-lg flex flex-row flex-wrap justify-center sm:justify-between items-center gap-x-6 gap-y-3 sm:gap-0">
                                                    <div className="flex gap-2 items-center">
                                                        <span>
                                                            <BsCalendarWeek />
                                                        </span>
                                                        <h3>{items.date}</h3>
                                                    </div>

                                                    <div className="flex gap-2 items-center">
                                                        <span className="text-xl lg:text-2xl">
                                                            <LiaComment />
                                                        </span>
                                                        <h3>({items.comments}) Comments</h3>
                                                    </div>

                                                    <div className="flex gap-2 items-center">
                                                        <span>
                                                            <LuPenLine />
                                                        </span>
                                                        <h3>{items.author}</h3>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='md:px-4 py-3.5'>
                                                <h2 className="text-2xl lg:text-3xl font-semibold mb-4">{items.title}</h2>
                                                <Paragraph text={items.description} fontlarg={true} />
                                                <button className='mt-10'>
                                                    <Button title='Read More' />
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Section>
                </div>
            </main>
        </>
    )
}



