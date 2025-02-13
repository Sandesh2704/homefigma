"use client"
import { useEffect } from "react"
import { Suspense, lazy } from 'react';
import Head from 'next/head';
import AOS from "aos"
import "aos/dist/aos.css"
import Pricing from "@/section/Pricing";
import Teachers from "@/section/Teachers";
import Course from "@/section/Course";
import Testimonial from "@/section/Testimonial"
import Updates from "@/section/Updates";
import FAQ from "@/section/FAQ";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import HeroSection2 from "@/section/HeroSection2";
import HeroSection from "@/section/HeroSection";
import Help from "@/section/Help";

export default function Home() {

  useEffect(() => {
    AOS.init();
  }, []);


  return (
    <>
      <Head>
        <title>Your Page Title</title>
        <meta name="description" content="Description of your page" />
      </Head>


      <div>
        <div>
          <HeroSection />
          <HeroSection2 />
          <Course />
          <Testimonial />
          <Help />
          <Teachers />
          <Pricing />
          <Updates />
          <FAQ />
        </div>
        {/* <Suspense fallback={<div>Loading...</div>}>
     
        
        </Suspense> */}
      </div>
    </>
  );
}
