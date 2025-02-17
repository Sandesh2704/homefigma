
"use client"
import Button from '@/components/button';
import Section from '@/components/section'
import SectionTitle from '@/components/sectiontitle';
import Paragraph from '@/components/paragraph';
import Link from 'next/link';
import Slider from 'react-slick';
import Image from 'next/image';
import { TiSocialGooglePlus } from "react-icons/ti";
import { useEffect, useRef, useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import FaqComponent from '@/section/rigistrationsign/FaqComponent';
import { useForm, Controller } from 'react-hook-form';

export default function Page() {
    const sliderRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const goToSlide = (index) => {
        sliderRef.current.slickGoTo(index);
        setActiveIndex(index);
    };

    const { handleSubmit, control, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log("Form Submitted:", data);
        alert("Message sent successfully!");
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
                    <div className='grid grid-cols-12 gap-y-12 gap-x-4 2xl:gap-x-8'>
                        <div className='col-span-12 lg:col-span-7 w-full'>
                            <div className='w-full flex justify-center'>
                                <div className="md:w-10/12 xl:w-8/12 text-center flex flex-col gap-3">
                                    <SectionTitle title="Trusted by 80,000+ Tuition Teachers Like you" black={true} />
                                    <Paragraph text="We often have 500+ Open tuition jobs" />
                                </div>
                            </div>

                            <div className='bg-[#F5F5F5] mt-10'>
                                <div className="group relative w-full">
                                    <Slider {...settings} ref={sliderRef} className="w-full overflow-hidden">
                                        {[1, 2, 3, 4, 5, 6].map((item) => (
                                            <div key={item} className="relative w-full">
                                                <Image
                                                    src="/assests/heroSection/c12c7f59a8a354143d29f7ed1349f148.jpg"
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
                                                className={`w-3 h-3 rounded-full transition-all shadow-md ${activeIndex === index ? 'bg-yellow-400' : 'bg-white/70 hover:bg-white'}`}
                                            />
                                        ))}
                                    </div>
                                </div>

                                <div className='py-9 px-4 md:px-8 h-fit w-full text-center text-gray-600'>
                                    <h1 className="italic text-lg lg:text-xl mb-3">- {reviews[currentIndex].name}</h1>
                                    <p className="text-base lg:text-lg leading-[1.4rem]">{reviews[currentIndex].text}</p>
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
                                    <Link href="/signupdetailsfrom" className="px-6 py-2 w-fit text-center bg-secondary text-white flex items-center justify-center rounded-lg gap-2">
                                        <span className='text-3xl'><TiSocialGooglePlus /></span>
                                        <h1 className='text-base font-[500]'>Login in with Google</h1>
                                    </Link>
                                </div>

                                <div className='flex justify-center'>
                                    <h1 className='text-base text-extrabold'> OR</h1>
                                </div>

                                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
                                    <Controller
                                        name="name"
                                        control={control}
                                        defaultValue=""
                                        rules={{ required: 'Name is required' }}
                                        render={({ field }) => (
                                            <InputField2
                                                label="Name"
                                                type="text"
                                                {...field}
                                                error={errors.name}
                                            />
                                        )}
                                    />
                                    <Controller
                                        name="phone"
                                        control={control}
                                        defaultValue=""
                                        rules={{ required: 'Phone is required', pattern: { value: /^[0-9]{10}$/, message: 'Invalid phone number' } }}
                                        render={({ field }) => (
                                            <InputField2
                                                label="Phone"
                                                type="tel"
                                                {...field}
                                                error={errors.phone}
                                            />
                                        )}
                                    />
                                    <Controller
                                        name="email"
                                        control={control}
                                        defaultValue=""
                                        rules={{ required: 'Email is required', pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: 'Invalid email address' } }}
                                        render={({ field }) => (
                                            <InputField2
                                                label="Email"
                                                type="email"
                                                {...field}
                                                error={errors.email}
                                            />
                                        )}
                                    />
                                    <Controller
                                        name="password"
                                        control={control}
                                        defaultValue=""
                                        rules={{ required: 'Password is required', minLength: { value: 6, message: 'Password must be at least 6 characters' } }}
                                        render={({ field }) => (
                                            <InputField2
                                                label="Password"
                                                type="password"
                                                {...field}
                                                error={errors.password}
                                            />
                                        )}
                                    />

                                    <label className='text-center text-sm leading-[1.4rem] text-gray-600 mt-3'>
                                        <input type="checkbox" required className='h-3 w-3 mr-2' />
                                        I agree to the <strong>Terms &amp; Conditions</strong> and Privacy Policy and also authorize TheTuitionTeacher.com to contact me. This will override the registry with Dnc/Ndnc.
                                    </label>
                                    <button  type="submit" className='flex justify-center mt-5'>
                                        <Button title="Sign In" />
                                    </button>

                                    <div className='text-center text-sm leading-[1.4rem] text-gray-600 mt-7'>
                                        <h1 className=''>Already a member? <strong><Link href="/">Login</Link></strong></h1>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </Section>

                <Section>
                    <div>
                        <FaqComponent />
                    </div>
                </Section>
            </main>
        </>
    )
}

 function InputField2({ type, value, onChange, name, required, label, error }) {
    return (
        <div>
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                className="py-3 px-4 w-full border text-lg bg-white text-tertiary rounded-lg placeholder:text-tertiary placeholder:text-base focus:ring-none focus:outline-none"
                required={required}
                placeholder={label}
            />
            {error && <span className="text-red-500 text-sm">{error.message}</span>}
        </div>
    );
};