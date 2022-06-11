import React from "react";
import { Controller, useFormContext } from "react-hook-form";

function TextAreaEmail({ name, type }) {
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
              <textarea
                type={type}
                name={name}
                onChange={onChange}
                value={value}
                className="border-none focus:outline-none dark:bg-gray-700 dark:text-gray-100 rounded outline-none px-[10px] py-[10px] text-sm w-full h-full resize-y max-h-80"
              />
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

export default TextAreaEmail;
