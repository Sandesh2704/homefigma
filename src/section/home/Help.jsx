import Section from '@/components/section'
import SectionTitle from '@/components/sectiontitle'
import services from '@/deta/services'
import Image from 'next/image'
import React from 'react'

export default function Help() {
    return (
        <>
            <Section>
                <div className="py-5 overflow-hidden">
                    <div className="flex justify-center w-full">
                        <SectionTitle title="How we can help you succeed" black={true} />
                    </div>
                    <div className="flex flex-col gap-y-10 mx-auto mt-12">
                        {services.map((item, index) => (
                            <div
                                className="relative grid md:grid-cols-2 gap-y-5 md:gap-x-24 xl:gap-x-36 items-center lg:justify-center"
                                key={index}
                                data-aos="fade-up"

                            >
                                {/* Mobile Icon */}
                                <div className="md:hidden flex items-center justify-center relative z-10">
                                    <div className="text-3xl text-white bg-[#011627] p-3 rounded-full">
                                        {item.icon}
                                    </div>
                                    <div className="flex-1 w-full border border-dashed border-[#011627]/50" />
                                </div>

                                {/* Content Box */}
                                <div
                                    className={`bg-[#B4EAE4] py-6 md:py-8 px-6 lg:px-8 rounded-xl flex flex-col h-full ${index % 2 !== 0 ? "md:order-1" : "md:order-2"
                                        }`}
                                    data-aos="fade-right">
                                    <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-4">{item.title}</h2>
                                    <div className="text-base md:text-lg leading-[2rem] text-black">{item.description}</div>
                                </div>

                                <div
                                    className="hidden md:flex flex-col items-center justify-center absolute inset-0"
                                    data-aos="zoom-in" >
                                    <div className="text-3xl md:text-4xl font-bold text-white bg-[#011627] p-3 md:p-4 rounded-full">
                                        {item.icon}
                                    </div>
                                    <div className="flex-1 h-2 border-l-2 border-dashed border-[#011627]/50" />
                                </div>

                                <div
                                    className={`relative w-full h-40 md:h-full xl:h-56 ${index % 2 !== 0 ? "md:order-2" : "md:order-1"
                                        }`}
                                    data-aos="fade-left"
                                >
                                    <Image
                                        src={item.imageUrl || "/placeholder.svg"}
                                        alt={item.title}
                                        width={500}
                                        height={500}
                                        className="h-full object-cover w-full rounded-xl"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>
        </>
    )
}