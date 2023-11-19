import React from "react";

const HeaderButton = ({ children, onClick }) => {
  return (
    <>
      <button
        onClick={onClick}
        className="relative text-themeBlue font-medium py-5 overflow-hidden after:absolute after:-bottom-2 after:left-0 after:right-0 after:bg-themeYellow after:h-1 hover:after:bottom-0 after:transition-bottom after:duration-200">
        {children}
      </button>
    </>
  );
};

export default HeaderButton;
