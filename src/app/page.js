"use client"
import { useEffect } from "react"
import Head from 'next/head';
import AOS from "aos"
import "aos/dist/aos.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import HeroSection from "../section/home/HeroSection";
import HeroSection2 from "../section/home/HeroSection2";
import Course from "../section/home/Course";
import Testimonial from "../section/common/Testimonial";
import Help from "../section/home/Help";
import Teachers from "../section/common/Teachers";
import Pricing from "../section/home/Pricing";
import Updates from "../section/home/Updates";
import FAQ from "../section/home/FAQ";


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
