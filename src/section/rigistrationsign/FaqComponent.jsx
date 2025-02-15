"use client"
import Paragraph from '@/components/paragraph';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { BsChevronDown } from 'react-icons/bs';
import { FaChevronDown } from "react-icons/fa";


export default function FaqComponent() {

    const faqData = [
        { title: 'How much can I earn as a home tutor?', description: 'Your income as a home tutor depends on various factors, including geographic location, experience, qualifications, subjects, and hours spent teaching. Premium tutors make between 8K to 30K per month.' },
        { title: 'If I register as a premium member, do you guarantee that I will get students to teach?', description: 'While premium membership increases your visibility and chances of getting students, it does not guarantee placements.' },
        { title: 'Do I need to pay in order to go for teaching?', description: 'No, registering as a home tutor is free. Premium memberships are optional for additional benefits.' },
        { title: 'How to sign up as a home tutor?', description: 'You can sign up by visiting our website, filling out the registration form, and submitting your details.' },
        { title: 'How much can I earn as a home tutor?', description: 'Your income as a home tutor depends on various factors, including geographic location, experience, qualifications, subjects, and hours spent teaching. Premium tutors make between 8K to 30K per month.' },
        { title: 'If I register as a premium member, do you guarantee that I will get students to teach?', description: 'While premium membership increases your visibility and chances of getting students, it does not guarantee placements.' },
        { title: 'Do I need to pay in order to go for teaching?', description: 'No, registering as a home tutor is free. Premium memberships are optional for additional benefits.' },
        { title: 'How much can I earn as a home tutor?', description: 'Your income as a home tutor depends on various factors, including geographic location, experience, qualifications, subjects, and hours spent teaching. Premium tutors make between 8K to 30K per month.' },
        { title: 'If I register as a premium member, do you guarantee that I will get students to teach?', description: 'While premium membership increases your visibility and chances of getting students, it does not guarantee placements.' },
        { title: 'Do I need to pay in order to go for teaching?', description: 'No, registering as a home tutor is free. Premium memberships are optional for additional benefits.' },
    ];

    const [openIndex, setOpenIndex] = useState(0);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
            <div>
                {faqData.map((item, index) => (
                    <div key={index} className="border-b border-gray-300  md:px-5 py-4">
                        <button
                            className="w-full flex justify-between items-center text-start text-base md:text-lg font-semibold text-gray-800 focus:outline-none"
                            onClick={() => toggleAccordion(index)}
                        >
                            {item.title}
                            <FaChevronDown className={`transition-transform duration-500 text-base ${openIndex === index ? "rotate-180" : "rotate-0"}`} />
                        </button>
                        <div
                            className={`overflow-hidden transition-max-height duration-300 ease-in-out ${openIndex === index ? "max-h-96" : "max-h-0"}`} >
                            <div className='mt-4'>
                                <Paragraph text={item.description} />
                            </div>
                        </div>
                    </div>
                ))}


            </div>
        </>
    )
}
