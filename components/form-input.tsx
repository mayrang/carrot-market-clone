import React from "react";

interface FormInputProps {
  type: string;
  placeholder: string;
  errors: string[];
  required: boolean;
}

export default function FormInput({ type, placeholder, errors, required }: FormInputProps) {
  return (
    <div className="flex flex-col gap-2">
      <input
        type={type}
        placeholder={placeholder}
        required={required}
        className="bg-transparent placeholder:text-neutral-400 rounded-md w-full h-10 focus:outline-none ring-2 focus:ring-4 transition ring-neutral-200 focus:ring-orange-500 border-none "
      />
      {errors.map((error, index) => (
        <span key={index} className="text-red-500 font-medium">
          {error}
        </span>
      ))}
    </div>
  );
}
