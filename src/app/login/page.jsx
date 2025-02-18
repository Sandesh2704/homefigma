"use client"
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import Section from '@/components/section';
import SectionTitle from '@/components/sectiontitle';
import Paragraph from '@/components/paragraph';
import Button from '@/components/button';
import { InputField, PasswordInput } from '@/components/form-input-field/page';
import Image from 'next/image';

export default function page() {
    const { handleSubmit, control, formState: { errors } } = useForm({
        defaultValues: {
            email: "",
            password: ""
        }
    });

    const onSubmit = (data) => {
        console.log("Login Form Submitted:", data);
    };

    return (
        <main>
            <Section>

                <div className='grid grid-cols-12 gap-y-12 gap-x-4 2xl:gap-x-8'>
                    <div className='col-span-12 lg:col-span-7 w-full'>
                        <div className='w-full flex justify-center'>
                            <div className="md:w-11/12 xl:w-8/12 text-center flex flex-col gap-3">
                                <SectionTitle title="Join Thousands of Tutors Trusting Our Platform" black={true} />
                                <Paragraph text="Access over 500+ available courses and tutorials to help you teach better and grow your tutoring business." />
                            </div>
                        </div>

                        <div className='mt-5'>
                            <Image
                                width={100}
                                height={100}
                                priority
                                src="/assests/blog/6aa6c9d0ff9ea524571bd1030bbf55c5.jpg"
                                alt="Desk setup"
                                className="w-full  object-cover"
                            />
                        </div>
                    </div>


                    <div className='col-span-12 lg:col-span-5 py-8 px-4 md:px-8 h-full w-full bg-[#F5F5F5] gap-y-6'>
                        <div className='text-center flex flex-col gap-y-2'>
                            <SectionTitle title="Login to Your Account" black={true} />
                            <Paragraph text="Access your tuition dashboard" />
                        </div>

                        <div className="flex items-center justify-center py-6">
                            <div className="flex-grow h-px bg-gray-300"></div>
                            <span className="px-3 text-gray-600 font-medium">OR</span>
                            <div className="flex-grow h-px bg-gray-300"></div>
                        </div>

                        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                            <InputField
                                name="email"
                                label="Email"
                                type="email"
                                control={control}
                                rules={{
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                        message: "Invalid email address"
                                    }
                                }}
                                errors={errors}
                            />

                            <PasswordInput
                                name="password"
                                label="Password"
                                control={control}
                                rules={{
                                    required: "Password is required"
                                }}
                                errors={errors}
                            />

                            <div className="flex justify-between items-start mt-2">
                                <label className="flex items-center text-sm text-gray-600">
                                    <input type="checkbox" required className="h-4 w-4 mr-2" />
                                    Remember me
                                </label>
                                <div className='flex flex-col text-right'>
                                    <Link href="/forgot-password" className="text-sm text-blue-400 hover:text-blue-600 hover:underline">
                                        Forget Password?
                                    </Link>
                                    <Link href="/reset-password" className="text-sm text-blue-400 hover:text-blue-600 hover:underline">
                                        Reset Password?
                                    </Link>
                                </div>

                            </div>

                            <button type="submit" className="flex justify-center mt-6">
                                <Button title="Login" />
                            </button>

                            <div className="text-center text-sm text-gray-600 mt-6">
                                <h1>
                                    Don't have an account?{" "}
                                    <Link href="/register" className="font-bold text-blue-600 hover:underline">
                                        Register
                                    </Link>
                                </h1>
                            </div>
                        </form>



                    </div>
                </div>
            </Section>

        </main>
    );
}