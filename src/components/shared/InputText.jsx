"use client";
import React from "react";
import { useFormContext } from "react-hook-form";

const InputText = ({ type, name, title, placeholder, required }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
      <div className="flex justify-between">
        <label className="relative font-" htmlFor={name}>
          {title}
        </label>
        {errors[name] && (
          <p className="!text-red-500 text-sm !m-0 !p-0">
            {errors[name].message}
          </p>
        )}
      </div>
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        {...register(name, {
          required: required ? `${title} অবশ্যক` : false,
        })}
        className="peer border-[#e5eaf2] border rounded-md outline-none px-4 py-3 dark:bg-transparent dark:border-slate-700 dark:placeholder:text-slate-500 dark:text-[#abc2d3] w-full focus:border-[#3B9DF8] transition-colors duration-300"
      />
    </div>
  );
};

export default InputText;
