"use client"
import { motion, useInView } from 'framer-motion';
import Button from '@/components/button'
import Section from '@/components/section'
import SectionTitle from '@/components/sectiontitle'
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'

export default function HeroSection2() {

    const title = " Our platform provides a wide range of online courses for you to discover."
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const splittedText = title.split(' ');
    const pullupVariant = {
        initial: { y: 20, opacity: 0 },
        animate: (i) => ({
            y: 0,
            opacity: 1,
            transition: {
                delay: i * 0.1,
            },
        }),
    };

    return (
        <>

     
                <Section>
                    <div className="grid xl:grid-cols-2 gap-5 bg-white overflow-hidden">
                        <div className="grid grid-cols-4 grid-rows-4 gap-y-2 md:gap-y-2.5 gap-x-2 md:gap-x-4 order-last xl:order-first">
                            <Image
                                className="rounded-3xl object-cover w-full h-[400px] md:h-full col-span-2 row-span-4"
                                src="/assests/heroSection/8c4d92e9786756077e88b423410795d3.jpg"
                                alt="Main Teacher"
                                width={900}
                                height={900}
                                priority
                            />
                            <Image
                                src="/assests/heroSection/d035daee1752e70310c09850f74d9617.jpg"
                                alt="Teacher 1"
                                width={1000}
                                height={1000}
                                priority
                                className="rounded-3xl object-cover w-full h-full col-span-2 row-span-2"
                            />
                            <Image
                                src="/assests/heroSection/c12c7f59a8a354143d29f7ed1349f148.jpg"
                                alt="Teacher 2"
                                width={1000}
                                height={1000}
                                priority
                                className="rounded-3xl object-cover w-full h-full col-span-2 row-span-2"
                            />
                        </div>
                        <div className="px-6 py-12 border border-[#01162780] h-full rounded-[32px] order-first xl:order-last"  >
                            <div className='xl:pr-5 mb-3'>
                                <div className={`flex justify-center w-full`}>
                                    <p className={` text-balance text-black text-[37px] leading-[3rem]   font-[600] `}>
                                        {splittedText.map((current, i) => (
                                            <motion.span
                                                key={i}
                                                ref={ref}
                                                variants={pullupVariant}
                                                initial="initial"
                                                animate={isInView ? 'animate' : ''}
                                                custom={i}
                                                className={` ${i === 0 ? "" : "inline-block pr-2.5"}`}
                                            >
                                                {current}
                                            </motion.span>
                                        ))}
                                    </p>
                                </div>
                            </div>
                            <p className="text-lg leading-[2rem]  mb-7 text-tertiary">
                                Unlock limitless learning opportunities on our platform with a wide variety of online courses. Dive into
                                different topics and grow your skills at your own pace.
                            </p>
                            <div className="flex items-center">
                                <Link href="/">
                                    <Button title="Learn More" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </Section>
         
        </>
    )
}