import Paragraph from '@/components/paragraph'
import Section from '@/components/section'
import SectionTitle from '@/components/sectiontitle'
import updates from '@/deta/updates'
import Image from 'next/image'
import React from 'react'

export default function Updates() {


    return (
        <>
            <Section color="#011627">
                <div className="overflow-hidden">
                    <SectionTitle title="Latest Updates" />
                    <div className="grid xl:grid-cols-6 grid-rows-6  gap-x-4 md:gap-x-6 gap-y-5 mt-10">
                        <div
                            className="relative flex flex-col h-full overflow-hidden group w-full col-span-3 row-span-6"
                            data-aos="fade-up"
                            data-aos-duration="600"
                            data-aos-once="true"
                        >
                            <Image
                                width={100}
                                height={100}
                                priority
                                src="/assests/blog/0eeb95c4bc6d7035a8553c7e7ed6c99b.jpg"
                                alt="Wooden desk with typewriter"
                                className="w-full h-full md:h-[390px] rounded-b-3xl sm:rounded-b-none rounded-t-3xl  relative z-0"
                            />

                            <div className='hidden md:flex flex-col border h-full border-white/30 py-6 px-3'>
                                <span className="text-gray-300 text-sm">{updates[0].date}</span>
                                <div className='mt-1 mb-3'>
                                    <SectionTitle title={updates[0].title} />
                                </div>
                                <Paragraph text={updates[0].description}  black={true}/>
                            </div>

                            <div className="flex flex-col md:hidden md:flex-1 px-4 py-6">
                                <span className="text-gray-400 text-xs">{updates[0].date}</span>
                                <h3 className="text-white text-xl font-semibold mt-1 text-balance">{updates[0].title}</h3>
                                <p className="text-gray-300 text-base leading-[1.7rem] mt-2">
                                    {updates[0].description}
                                </p>
                            </div>
                        </div>

                        {updates.slice(1).map((update, index) => (
                            <div
                                key={index}
                                className="flex flex-col md:flex-row items-start space-y-3 space-x-2 w-full h-full col-span-3 row-span-2"
                                data-aos="fade-up-left"
                                data-aos-duration="1000"
                                data-aos-delay={index * 200}
                                data-aos-once="true"
                            >
                                <Image
                                    width={100}
                                    height={100}
                                    priority
                                    src="/assests/blog/6aa6c9d0ff9ea524571bd1030bbf55c5.jpg"
                                    alt="Desk setup"
                                    className="w-full md:w-[320px]   px-2 object-cover rounded-3xl"
                                />
                                <div className="md:flex-1 px-5 xl:px-0">
                                    <span className="text-white text-sm">{update.date}</span>
                                    <h3 className="text-white text-lg leading-7 font-semibold mt-1 md:text-balance mb-2">
                                        {update.title}
                                    </h3>
                                    {/* <Paragraph text={update.description}  black={true}/> */}
                                    <p className='text-gray-400 text-sm leading-6'>{update.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>
        </>
    )
}