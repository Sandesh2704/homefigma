import Section from '@/components/section'
import SectionTitle from '@/components/sectiontitle'
import updates from '@/deta/updates'
import Image from 'next/image'
import React from 'react'

export default function Updates() {

    const cells = [1, 2, 3, 4];

    return (
        <>
            <Section color="#011627">
                <div className="overflow-hidden">
                    <SectionTitle title="Latest Updates" />


                    <div className="grid xl:grid-cols-6 grid-rows-6  gap-x-4 md:gap-x-7 gap-y-6 mt-12 mb-4">
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
                                src="/assests/blog/20d838ab647cce1ba4660b9888db145e.jpg"
                                alt="Wooden desk with typewriter"
                                className="w-full h-full md:h-[390px] rounded-b-3xl sm:rounded-b-none rounded-t-3xl  relative z-0"
                            />

                            <div className='hidden md:flex flex-col border h-full border-white/30 py-6 px-3'>
                                <span className="text-gray-300 text-sm">{updates[0].date}</span>
                                <div className='mt-1'>
                                    <SectionTitle title={updates[0].title} />
                                </div>

                                <p className="text-gray-300 text-base leading-[1.7rem] mt-3">
                                    {updates[0].description}
                                </p>
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
                                key={update.id}
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
                                    src="/assests/blog/3ffba104a65172e47c851115f0ea8450.jpg"
                                    alt="Desk setup"
                                    className="w-full md:w-[327px] h-full  px-2 object-cover rounded-3xl"
                                />

                                <div className="md:flex-1">
                                    <span className="text-white text-base">{update.date}</span>
                                    <h3 className="text-white text-xl leading-8 font-semibold mt-2 md:text-balance">
                                        {update.title}
                                    </h3>
                                    <p className="text-gray-300 text-base leading-[1.7rem] mt-3">
                                        {update.description}
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