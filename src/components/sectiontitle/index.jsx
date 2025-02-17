 "use client"
 import { motion, useInView } from 'framer-motion';
 import React, { useRef } from 'react';

export default function SectionTitle({ title, black, balance, center }) {
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
        <div className={`${center ? "flex justify-center w-full" : ""}`}>
            <p className={`text-3xl leading-[2.6rem] font-[600] 
                ${black ? 'text-black' : "text-white"} 
                ${balance ? 'text-balance' : ""} 
                ${center ? "text-center" : ""}`}>
                
                {splittedText.map((current, i) => (
                    <motion.span
                        key={i}
                        ref={ref}
                        variants={pullupVariant}
                        initial="initial"
                        animate={isInView ? 'animate' : ''}
                        custom={i}
                        className={`inline-block pr-2.5`} 
                    >
                        {current}
                    </motion.span>
                ))}
            </p>
        </div>
    );
}
