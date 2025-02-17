import Button from '@/components/button'
import Section from '@/components/section'
import courses from '@/deta/courses'
import Image from 'next/image'
import React from 'react'
import SectionTitle from '@/components/sectiontitle'
import Paragraph from '@/components/paragraph'

export default function Course() {
    return (
        <>
            <Section color='#F5F5F5'>
                    <div className="text-center">
                        <SectionTitle title="Explore our most sought-after courses" black={true} />
                    </div>

                <div className="w-full flex flex-wrap justify-center lg:justify-between gap-7 lg:gap-0 mt-8">
                    {courses.map((items, index) => (
                        <div className="w-full sm:w-[48%] md:w-[44%] lg:w-[32%]  relative rounded-3xl flex flex-col justify-between overflow-hidden bg-white pt-6 pb-9 px-4 border border-[#011627] "
                            key={index}>
                            <div className="flex flex-col">
                                <span className="text-[#011627BF] font-medium text-xl ">{items.instructor}</span>
                                <h1 className="font-semibold text-xl  my-2 ">{items.title}</h1>
                                <Paragraph text={items.description}/>
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
