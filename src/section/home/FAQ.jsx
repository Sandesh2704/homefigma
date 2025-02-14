'use client'
import Paragraph from '@/components/paragraph'
import Section from '@/components/section'
import SectionTitle from '@/components/sectiontitle'
import faqs from '@/deta/faq'
import React, { useState } from 'react'
import { RxArrowTopRight } from 'react-icons/rx'
import { motion } from 'framer-motion'

export default function FAQ() {
    const [selectedQuestion, setSelectedQuestion] = useState(1);

    return (
        <>
            <Section>
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 overflow-hidden">
                    <div className='order-last lg:order-first '>
                        <Paragraph text="Whether you're searching for the perfect tutor, browsing our FAQs, or exploring personalized learning solutions, we're here to support you. Our goal is to provide clear guidance and ensure your child's education journey is seamless and enriching"
                        fontlarg={true} />
                        <div className="space-y-3 mt-10 mb-4">
                            {faqs.map((faq, index) => (
                                <motion.button
                                    key={faq.id}
                                    onClick={() => setSelectedQuestion(faq.id)}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    whileHover={{ scale: 1 }}
                                    transition={{ duration: 0.2 }}
                                    className={`w-full px-3 md:px-6 py-3 rounded-xl lg:rounded-3xl flex items-center justify-between gap-4 
                                    ${selectedQuestion === faq.id
                                            ? 'bg-[#FF3366] text-white'
                                            : 'bg-white border border-[#01162752] hover:border-[#FF3366] text-tertiary'
                                        }`}
                                >
                                    <span className="flex text-base text-medium items-start text-start">
                                        <span className="mr-3 text-medium">
                                            {String(faq.id).padStart(2, "0")}
                                        </span>
                                        {faq.question}
                                    </span>
                                    <motion.div
                                        className={`p-2 md:p-3 text-xl lg:text-2xl rounded-full 
                                        ${selectedQuestion === faq.id ? "bg-[#2EC4B6]" : "bg-black text-white"}`}
                                        whileHover={{ rotate: 90 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <RxArrowTopRight />
                                    </motion.div>
                                </motion.button>
                            ))}
                        </div>
                    </div>

                    <div className="order-first lg:order-last" >
                        <SectionTitle title="Some of our most frequently asked questions" black={true} balance={true} />
                        <motion.div
                            key={selectedQuestion}
                            className="border border-[#01162752] px-4 md:px-8 py-6 rounded-2xl mt-8"
                        >
                            <h3 className="text-2xl font-medium mb-3">
                                {faqs[selectedQuestion - 1].question}
                            </h3>
                            <Paragraph text={faqs[selectedQuestion - 1].answer} fontlarg={true} />
                        </motion.div>
                    </div>
                </div>
            </Section>
        </>
    )
}