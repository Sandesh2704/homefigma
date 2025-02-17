"use client"
import Button from '@/components/button';
import Section from '@/components/section'
import SectionTitle from '@/components/sectiontitle';
import Paragraph from '@/components/paragraph';
import InputField2 from '@/components/inputfield2';
import Link from 'next/link';
import Slider from 'react-slick';
import Image from 'next/image';
import { TiSocialGooglePlus } from "react-icons/ti";
import { useEffect, useRef, useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import FaqComponent from '@/section/rigistrationsign/FaqComponent';

export default function page() {
    const sliderRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const goToSlide = (index) => {
        sliderRef.current.slickGoTo(index);
        setActiveIndex(index);
    };

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
        alert("Message sent successfully!");
        setFormData({ name: "", phone: "", email: "", password: "" });
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: false,
        prevArrow: false,
        afterChange: (current) => setActiveIndex(current)
    };

    const reviews = [
        { name: 'Nikhil Mishra', text: 'It is good for me to work with the tuition teacher. Services and tuitions provided by tuition teacher is seriously good. I am happy to work with the tuition teacher.' },
        { name: 'Anita Sharma', text: 'The tuition teacher is very knowledgeable and helpful. My child has improved significantly in studies.' },
        { name: 'Ravi Kumar', text: 'I highly recommend the tuition teacher. They provide excellent service and support.' },
        { name: 'Priya Sinha', text: 'Working with the tuition teacher has been a great experience. They are patient and very effective.' }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
        }, 10000);

        return () => clearInterval(interval);
    }, []);



    return (
        <>
            <main>
                <Section>
                    <div className='grid grid-cols-12 gap-y-12 gap-x-4 2xl:gap-x-8 md:px-20 lg:px-0  xl:px-0 2xl:px-20 '>
                        <div className='col-span-12 lg:col-span-7 w-full '>
                            <div className='w-full flex justify-center'>
                                <div className="md:w-10/12 xl:w-8/12 text-center flex flex-col gap-3">
                                    <SectionTitle title="Trusted by 80,000+ Tuition Teachers Like you" black={true} />
                                    <Paragraph text="We often have 500+ Open tuition jobs" />
                                </div>
                            </div>

                            <div className='bg-[#F5F5F5] mt-10'>
                                <div className="group relative w-full ">
                                    <Slider {...settings} ref={sliderRef} className="w-full overflow-hidden">
                                        {[1, 2, 3, 4, 5, 6].map((item) => (
                                            <div key={item} className="relative w-full">
                                                <Image
                                                    src={`/assests/heroSection/c12c7f59a8a354143d29f7ed1349f148.jpg`}
                                                    alt={`testimonial ${item}`}
                                                    className="w-full h-[450px] object-cover md:h-[450px] sm:h-[350px]"
                                                    width={1000}
                                                    height={1000}
                                                    priority
                                                />
                                                <div className='absolute bg-black/20 w-full h-full top-0 bottom-0' />
                                            </div>
                                        ))}
                                    </Slider>
                                    <button onClick={() => sliderRef.current.slickNext()} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 text-white/50 hover:text-white transition-colors">
                                        <IoIosArrowForward className="text-2xl md:text-3xl xl:text-5xl font-normal" />
                                    </button>
                                    <button onClick={() => sliderRef.current.slickPrev()} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 text-white/50 hover:text-white transition-colors">
                                        <IoIosArrowBack className="text-2xl md:text-3xl xl:text-5xl font-normal" />
                                    </button>
                                    <div className="absolute bottom-6 w-full flex justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                        {[1, 2, 3, 4, 5, 6].map((item, index) => (
                                            <button
                                                key={index}
                                                onClick={() => goToSlide(index)}
                                                className={`w-3 h-3 rounded-full transition-all shadow-md ${activeIndex === index ? 'bg-yellow-400' : 'bg-white/70 hover:bg-white '}`} />
                                        ))}
                                    </div>
                                </div>

                                <div className='py-9 px-4 md:px-8 h-fit w-full text-center text-gray-600'>
                                    <h1 className="italic text-lg lg:text-xl mb-3">- {reviews[currentIndex].name}</h1>
                                    <p className="text-base lg:text-lg leading-[1.4rem] ">{reviews[currentIndex].text}</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-span-12 lg:col-span-5 py-8 px-4 md:px-8 h-full w-full bg-[#F5F5F5]'>
                            <div className='text-center flex flex-col gap-y-2'>
                                <SectionTitle title="Register as a Tuition Teacher" black={true} />
                                <Paragraph text="We often have 500+ Open tuition jobs" />
                            </div>

                            <div className='flex flex-col gap-y-6 mt-12'>
                                <div className='flex justify-center'>
                                    <Link href="/signupdetailsfrom" className={`px-6 py-2 w-fit  text-center bg-secondary text-white flex items-center justify-center rounded-lg gap-2`} >
                                        <span className='text-3xl'><TiSocialGooglePlus /></span>
                                        <h1 className='text-base font-[500]'>Login in with Google</h1>
                                    </Link>
                                </div>

                                <div className='flex justify-center'>
                                    <h1 className='text-base text-extrabold'> OR</h1>
                                </div>

                                <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                                    <InputField2
                                        label="Name"
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                    <InputField2
                                        label="Phone"
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                    />
                                    <InputField2
                                        label="Email"
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                    <InputField2
                                        label="Password"
                                        type="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        required
                                    />

                                    <label className='text-center text-sm leading-[1.4rem] text-gray-600 mt-3'>
                                        <input type="checkbox" required className='h-3 w-3 mr-2 ' />
                                        I agree to the <strong>Terms &amp; Conditions</strong> and Privacy Policy and also authorize TheTuitionTeacher.com to contact me. This will override the registry with Dnc/Ndnc.
                                    </label>
                                    <div className='flex justify-center mt-5'>
                                        <Link href="/signupdetailsfrom">
                                            <Button title="Sign In" />
                                        </Link>
                                    </div>

                                    <div className='text-center text-sm leading-[1.4rem] text-gray-600 mt-7'>
                                        <h1 className=''>Already a member? <strong><Link href="/" >Login</Link>  </strong>
                                        </h1>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </Section>

                <Section>
                    <div className='md:px-10 xl:px-20'>
                        <FaqComponent />
                    </div>
                </Section>
            </main>
        </>
    )
}

