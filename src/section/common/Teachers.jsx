import Section from '@/components/section'
import SectionTitle from '@/components/sectiontitle'
import team from '@/deta/team'
import Image from 'next/image'
import React from 'react'

export default function Teachers() {
    return (
        <>
            <Section color="black">
                <div className="pb-4 overflow-hidden">
                    <div className="text-center">
                        <SectionTitle title="Meet our team of experts" />
                    </div>
                    <div className="flex flex-wrap justify-center xl:justify-between gap-4 xl:gap-0 mt-10">
                        {team.map((items, index) => (
                            <div
                                key={index}
                                className="relative group w-full sm:w-[48%] md:w-[42%] lg:w-[32%] xl:w-[24%] h-[400px] xl:h-[420px]  rounded-3xl border-2 border-[#FFFFFF]/60 overflow-hidden shadow-lg"
                            >
                                <Image
                                    src={items.img || '/assests/teachers/99ebc2cfcc493a3bd27b587560aae365.jpg'}
                                    alt={items.name}
                                    height={1000}
                                    width={1000}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-[#2EC4B6] text-black flex flex-col justify-start px-4 transition-all duration-300 ease-in-out transform translate-y-[calc(100%-6rem)] group-hover:translate-y-0">
                                    <div className="py-4">
                                        <h3 className="text-2xl font-[600] mb-1">{items.name}</h3>
                                        <span className="block text-xl font-[500]">{items.role}</span>
                                    </div>
                                    <p className=" text-lg  xl:leading-[2rem] text-black opacity-0 font-[500] transition-opacity duration-300 group-hover:opacity-100 ">
                                        {items.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>
        </>
    )
}