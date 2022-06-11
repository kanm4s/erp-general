import React from "react";

const SubmitButton = ({ onClick, children, disabled = false, style }) => {
  return (
    <div className="grid grid-cols-2 gap-1">
      <div className="col-start-1 col-end-3">
        <button
          type="submit"
          className="w-full border-2 border-slate-300 hover:border-teal-500 bg-white hover:bg-teal-500 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-500 dark:hover:border-gray-500 px-2 py-1 text-teal-900 hover:text-teal-50 rounded transition-all"
        >
          {children}
        </button>
      </div>
    </div>
  );
};

export default SubmitButton;
