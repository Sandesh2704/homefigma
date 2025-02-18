"use client"
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import Section from '@/components/section';
import SectionTitle from '@/components/sectiontitle';
import Paragraph from '@/components/paragraph';
import Button from '@/components/button';
import { InputField } from '@/components/form-input-field/page';

export default function page() {
    const { handleSubmit, control, formState: { errors } } = useForm({
        defaultValues: {
            email: ""
        }
    });

    const onSubmit = (data) => {
        console.log("Forgot Password Form Submitted:", data);
    };

    return (
        <main>
            <Section>
                <div className="max-w-md mx-auto py-10">
                    <div className="text-center mb-8">
                        <SectionTitle title="Forgot Your Password?" black={true} />
                        <Paragraph text="Enter your email to receive a password reset link" />
                    </div>

                    <div className="bg-[#F5F5F5] p-8 rounded-lg">
                        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
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

                            <div className="text-sm text-gray-600 mt-2">
                                <p>
                                    We'll send you an email with instructions to reset your password.
                                </p>
                            </div>

                            <button type="submit" className="flex justify-center mt-4">
                                <Button title="Send Reset Link" />
                            </button>

                            <div className="text-center text-sm text-gray-600 mt-6">
                                <h1>
                                    Back to{" "}
                                    <Link href="/login" className="font-bold text-blue-600 hover:underline">
                                        Login
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