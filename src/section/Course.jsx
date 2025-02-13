import Button from '@/components/button'
import Section from '@/components/section'
import courses from '@/deta/courses'
import Image from 'next/image'
import React from 'react'
import SectionTitle from '@/components/sectiontitle'
export default function Course() {
    return (
        <>
            <Section color='#F5F5F5'>
                <div className="flex justify-center overflow-hidden">
                    <div className="md:w-96 text-center">
                        <SectionTitle title="Explore our most sought-after courses" black={true} />
                    </div>
                </div>

                <div className="flex flex-wrap justify-center gap-5 xl:gap-[27px] mt-8">
                    {courses.map((items, index) => (
                        <div className="relative rounded-3xl flex flex-col overflow-hidden w-full sm:w-[48%] md:w-[48%] xl:w-[32%] bg-white py-9 px-4 border border-[#011627]"
                            key={index}>
                            <div className="flex flex-col xl:h-[340px]">
                                <span className="text-[#011627BF] font-medium text-xl ">{items.instructor}</span>
                                <div className="font-semibold text-2xl leading-9 md:w-80 mt-2">{items.title}</div>
                                <p className="mt-2 text-lg leading-[1.8rem] text-black/75"> {items.description}</p>
                                <span className="text-5xl lg:text-6xl font-semibold border-text my-6">{items.instructor2}</span>
                            </div>
                            <div className="flex flex-col mt-2">
                                <h1 className="text-black text-4xl font-semibold">${items.price}</h1>
                                <button className="mt-6">
                                    <Button title="Enroll" />
                                </button>
                            </div>
                            <Image
                                src={items.img}
                                alt={items.instructor}
                                className={`absolute  ${items.imgClass}`}
                                width={2000}
                                height={2000}
                                priority
                            />
                        </div>
                    ))}
                </div>
            </Section>
        </>
    )
}


