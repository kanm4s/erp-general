import React from "react";
import { Controller, useFormContext } from "react-hook-form";

function Input({ name }) {
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
              <input
                type="text"
                name="projectName"
                onChange={onChange}
                value={value}
              />
            </>
          );
        }}
        name={name}
      />
      {errors[name] && (
        <span className="text-blue-600">{errors[name].message}</span>
      )}
    </>
  );
}

export default Input;
