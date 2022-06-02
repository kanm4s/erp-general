import React from "react";
import { Controller, useFormContext } from "react-hook-form";

function Input({ name, type, editPrev }) {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <>
      <Controller
        defaultValue={""}
        control={control}
        render={({ field: { onChange, value } }) => {
          return (
            <div className="grid grid-cols-5 gap-1">
              <label htmlFor={name} className="pr-5 text-lg">
                {name}
              </label>
              <input
                type={type}
                name={name}
                onChange={onChange}
                value={value}
                className="border-2 border-slate-300 focus:border-teal-500 rounded outline-none px-[5px] py-[3px] text-sm col-start-3 col-span-4"
              />
            </div>
          );
        }}
        name={name}
      />
      {errors[name] && (
        <span className="text-red-600 text-right flex grow justify-end">
          {errors[name].message}
        </span>
      )}
    </>
  );
}

export default Input;
