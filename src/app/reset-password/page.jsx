"use client"
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import Section from '@/components/section';
import SectionTitle from '@/components/sectiontitle';
import Paragraph from '@/components/paragraph';
import Button from '@/components/button';
import { PasswordInput } from '@/components/form-input-field/page';

export default function ResetPasswordPage() {
    const searchParams = useSearchParams();
    const token = searchParams.get('token');

    const { handleSubmit, control, formState: { errors }, watch } = useForm({
        defaultValues: {
            password: "",
            confirmPassword: ""
        }
    });

    const password = watch("password");

    const onSubmit = (data) => {
        console.log("Reset Password Form Submitted:", data);
        // Add your password reset logic here, using the token from URL
    };

    return (
        <main>
            <Section>
            <div className="max-w-md mx-auto py-10">
            <div className="bg-[#F5F5F5] py-8 px-4 md:px-8 h-full w-full ">
                    <div className="text-center   mb-8 flex flex-col gap-y-5">
                        <SectionTitle title="Reset Your Password" black={true} />
                        <Paragraph text="Create a new secure password" />
                    </div>

                    <div className="">
                        {!token ? (
                            <div className="text-center text-red-500">
                                <p>Invalid or expired reset link. Please request a new password reset.</p>
                                <Link href="/forgot-password" className="text-blue-600 hover:underline mt-4 inline-block">
                                    Back to Forgot Password
                                </Link>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
                                <PasswordInput
                                    name="password"
                                    label="New Password"
                                    control={control}
                                    rules={{
                                        required: "Password is required",
                                        minLength: {
                                            value: 8,
                                            message: "Password must be at least 8 characters"
                                        },
                                        pattern: {
                                            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                            message: "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
                                        }
                                    }}
                                    errors={errors}
                                />

                                <PasswordInput
                                    name="confirmPassword"
                                    label="Confirm New Password"
                                    control={control}
                                    rules={{
                                        required: "Please confirm your password",
                                        validate: value =>
                                            value === password || "Passwords do not match"
                                    }}
                                    errors={errors}
                                />

                                <div className="text-sm text-gray-600 mt-2">
                                    <p>
                                        Your password must be at least 8 characters long and include uppercase and lowercase letters, numbers, and special characters.
                                    </p>
                                </div>

                                <button type="submit" className="flex justify-center mt-4">
                                    <Button title="Reset Password" />
                                </button>

                                <div className="text-center mt-6">
                                    <Link href="/login" className="text-sm text-blue-600 hover:underline">
                                        Back to Login
                                    </Link>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>
            </Section>
        </main>
    );
}


// "use client"
// import { useForm } from 'react-hook-form';
// import Link from 'next/link';
// import Section from '@/components/section';
// import SectionTitle from '@/components/sectiontitle';
// import Paragraph from '@/components/paragraph';
// import Button from '@/components/button';
// import { PasswordInput } from '@/components/form-input-field/page';

// export default function ResetPasswordPage() {
//     const { handleSubmit, control, formState: { errors }, watch } = useForm({
//         defaultValues: {
//             password: "",
//             confirmPassword: ""
//         }
//     });

//     const password = watch("password");

//     const onSubmit = (data) => {
//         console.log("Reset Password Form Submitted:", data);
//         alert("Password reset successfully! Redirecting to login page...");
//         // In a real app, you would redirect to login page after a successful reset
//     };

//     return (
//         <main>
//             <Section>
//                 <div className="max-w-md mx-auto py-10">
//                     <div className="text-center mb-8">
//                         <SectionTitle title="Reset Your Password" black={true} />
//                         <Paragraph text="Create a new secure password" />
//                     </div>

//                     <div className="bg-[#F5F5F5] p-8 rounded-lg">
//                         <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
//                             <PasswordInput
//                                 name="password"
//                                 label="New Password"
//                                 control={control}
//                                 rules={{
//                                     required: "Password is required",
//                                     minLength: {
//                                         value: 6,
//                                         message: "Password must be at least 6 characters"
//                                     }
//                                 }}
//                                 errors={errors}
//                             />

//                             <PasswordInput
//                                 name="confirmPassword"
//                                 label="Confirm New Password"
//                                 control={control}
//                                 rules={{
//                                     required: "Please confirm your password",
//                                     validate: value =>
//                                         value === password || "Passwords do not match"
//                                 }}
//                                 errors={errors}
//                             />

//                             <div className="text-sm text-gray-600 mt-2">
//                                 <p>
//                                     After resetting your password, you'll be able to login with your new credentials.
//                                 </p>
//                             </div>

//                             <button type="submit" className="flex justify-center mt-4">
//                                 <Button title="Reset Password" />
//                             </button>

//                             <div className="text-center mt-6">
//                                 <Link href="/login" className="text-sm text-blue-600 hover:underline">
//                                     Back to Login
//                                 </Link>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </Section>
//         </main>
//     );
// }