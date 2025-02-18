"use client"
import { useState } from 'react';
import { Controller } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';


export const  InputField = ({ name, label, control, rules, errors, type }) => {
    return (
        <div>
            <Controller
                name={name}
                control={control}
                rules={rules}
                render={({ field }) => (
                    <input
                        {...field}
                        placeholder={label}
                        type={type}
                        className="py-3 px-4 w-full border text-lg bg-white text-tertiary rounded-lg placeholder:text-tertiary placeholder:text-base focus:ring-none focus:outline-none" />
                )}
            />
            {errors[name] && <p className="text-red-500 text-sm mt-1">{errors[name].message}</p>}
        </div>
    )
}


export const PasswordInput = ({ name, label, control, rules, errors }) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="relative">
            <Controller
                name={name}
                control={control}
                rules={rules}
                render={({ field }) => (
                    <div className="relative">
                        <input
                            {...field}
                            placeholder={label}
                            type={showPassword ? "text" : "password"}
                            className="py-3 px-4 w-full border text-lg bg-white text-tertiary rounded-lg placeholder:text-tertiary placeholder:text-base focus:ring-none focus:outline-none pr-10"
                        />
                        <button
                            type="button"
                            onClick={togglePasswordVisibility}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                        >
                            {showPassword ? <FaEyeSlash className="text-xl" /> : <FaEye className="text-xl" />}
                        </button>
                    </div>
                )}
            />
            {errors[name] && <p className="text-red-500 text-sm mt-1">{errors[name].message}</p>}
        </div>
    );
}


export const  TextAreaField = ({ name, label, control, rules, errors, }) =>{
  return (
    <div>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field }) => (
            <textarea 
            {...field} 
            rows="5"
            placeholder={label} 
            className="py-3 px-4 w-full border text-lg bg-white text-tertiary rounded-lg placeholder:text-tertiary placeholder:text-base focus:ring-none focus:outline-none" />
        )}
      />
      {errors[name] && <p className="text-red-500 text-sm mt-1">{errors[name].message}</p>}
    </div>
  );
}