import React from "react";
import { useFormContext } from "react-hook-form";

const SubmitButton = ({ onClick, children, disabled = false, style }) => {
  const { handleSubmit, reset } = useFormContext();
  return (
    <button
      className="w-full border-2 border-slate-300 hover:border-teal-500 bg-white hover:bg-teal-500 px-2 py-1 text-teal-900 hover:text-teal-50 rounded transition-all"
      onClick={handleSubmit((data) => {
        onClick(data, reset);
      })}
    >
      {children}
    </button>
    // <Button
    //   onClick={handleSubmit((data) => {
    //     onClick(data, reset);
    //   })}
    //   disabled={disabled}
    //   style={style}>
    //   {children}
    // </Button>
  );
};

export default SubmitButton;
