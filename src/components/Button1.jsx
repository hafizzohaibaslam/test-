import React from "react";

const Button1 = ({ icon, text, onClick }) => {
  return (
    <>
      <button
        onClick={onClick}
        className="w-full flex items-center justify-center gap-x-2 p-3 rounded-full border-2 border-black transition-colors duration-300 hover:bg-themeYellow hover:border-themeYellow">
        <img src={icon} alt="social icon" />
        <span className="font-medium font-primary">{text}</span>
      </button>
    </>
  );
};

export default Button1;
