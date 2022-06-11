import React from "react";
import { Controller, useFormContext } from "react-hook-form";

function TextArea({ name, type }) {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => {
          return (
            <>
              <label htmlFor={name} className="pr-5 text-lg dark:text-gray-100">
                {name}
              </label>
              <div className="grid grid-cols-5 gap-1">
                <textarea
                  type={type}
                  name={name}
                  onChange={onChange}
                  value={value}
                  className="border-2 border-slate-300 dark:bg-gray-700 dark:text-gray-100 focus:border-teal-500 rounded outline-none px-[5px] py-[5px] text-sm col-start-1 col-span-5"
                />
              </div>
            </>
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

export default TextArea;
