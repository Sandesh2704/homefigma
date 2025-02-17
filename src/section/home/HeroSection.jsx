import Button from '@/components/button';
import Section from '@/components/section';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function HeroSection() {
    const stats = [
        { label: "Students", value: 100, bg: "bg-[#2EC4B636]" },
        { label: "Teachers", value: 100, bg: "bg-[#FF336652] " },
        { label: "Courses", value: 100, bg: "bg-[#011627] text-white" },
    ];

    
    const text = "Elevate your child's learning experience with our professional home tuition services.";
    const splittedText = text.split(' ');
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true });
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
        <Section>
            <div className="grid xl:grid-cols-2 gap-10  overflow-hidden">
                <div className=" lg:pr-8">
                    <div className='pr-5 lg:pr-0'>
                    {splittedText.map((current, i) => (
                        <motion.span
                            key={i}
                            ref={ref}
                            variants={pullupVariant}
                            initial="initial"
                            animate={isInView ? 'animate' : ''}
                            custom={i}
                            className="text-[35px] leading-[3rem]  font-[600]   pr-2  inline-block"
                        >
                            {current === '' ? <span>&nbsp;</span> : current}
                        </motion.span>
                    ))}
                    </div>

                    <p className="text-[17px] leading-[1.8rem]  font-normal text-tertiary mt-3 mb-6"
                    >
                        Say goodbye to academic struggles and confusion. Our professional tutors ensure a personalized learning experience, empowering your child to excel every day.
                    </p>

    

                    <div className="flex items-center space-x-6">
                        <Link href="/signin">
                            <Button title="Sign In" bgGreen={true} />
                        </Link>
                        <Link href="/getstarted">
                            <Button title="Get Started" />
                        </Link>
                    </div>

                    <div className="flex flex-wrap justify-center md:justify-start gap-3.5 mt-9">
                        {stats.map((items, index) => (
                            <div
                                key={index}
                                className={`text-center ${items.bg} py-[19px] px-[34px] border border-[#011627]/30 rounded-3xl`}
                            >
                                <h6 className="text-lg font-normal mb-3 md:mb-4">{items.label}</h6>
                                <h3 className="text-3xl font-semibold">{items.value}+</h3>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-y-4  gap-x-3 ">
                    <Image
                        src="/assests/heroSection/00bec2872c1d0f42d1c3565a5995a521.png"
                        alt="Main Teacher"
                        className="rounded-3xl w-full h-[360px] object-cover col-span-2"
                        width={1000}
                        height={1000}
                        priority
                    />

                    <Image
                        src="/assests/heroSection/6fb32429b68ae24ea78c4bb8bb1a3cf1.png"
                        alt="Teacher 1"
                        className="rounded-3xl w-full h-[172px] object-cover"
                        width={1000}
                        height={1000}
                        priority
                    />
                    <Image
                        src="/assests/heroSection/ca7b69c39f5863c6d90999b27501e9f4.png"
                        alt="Teacher 2"
                        className="rounded-3xl w-full h-[172px] object-cover"
                        width={1000}
                        height={1000}
                        priority
                    />

                </div>
            </div>
        </Section>
    );
}