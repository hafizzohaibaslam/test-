import React from "react";

const InputBox = ({ label, idHtmlFor, type = "#" }) => {
  return (
    <>
      <div className="font-primary flex flex-col gap-y-2">
        <label
          htmlFor={idHtmlFor}
          className="text-sm font-medium text-themeBlue">
          {label}
        </label>
        <input
          type={type}
          id={idHtmlFor}
          className="border border-themeBlue border-opacity-40 px-4 py-2 text-themeBlue font-medium"
        />
      </div>
    </>
  );
};

export default InputBox;
