"use client"
import { useEffect } from "react"
import Head from 'next/head';
import AOS from "aos"
import "aos/dist/aos.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import HeroSection from "@/section/HeroSection";
import HeroSection2 from "@/section/HeroSection2";
import Course from "@/section/Course";
import Testimonial from "@/section/Testimonial";
import Help from "@/section/Help";
import Teachers from "@/section/Teachers";
import Pricing from "@/section/Pricing";
import Updates from "@/section/Updates";
import FAQ from "@/section/FAQ";


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
      
      </div>
    </>
  );
}
