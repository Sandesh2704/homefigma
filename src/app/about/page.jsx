import PageHeader from '@/components/pageheader'
import Achievements from '@/section/about/Achievements'
import Teachers from '@/section/common/Teachers'
import Testimonial from '@/section/common/Testimonial'
import WhyChoose from '@/section/common/WhyChoose'
import React from 'react'

export default function page() {
  return (
    <>
      <main>
        <PageHeader title="About Us"/>
        <Achievements />
        <Testimonial />
        <WhyChoose />
        <Teachers />
      </main>
    </>
  )
}
