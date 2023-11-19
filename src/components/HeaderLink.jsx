import React from "react";
import { Link } from "react-router-dom";

const HeaderLink = ({ children, to = "/", className }) => {
  return (
    <>
      <Link
        to={to}
        className={`relative text-themeBlue font-medium py-5 overflow-hidden after:absolute after:-bottom-2 after:left-0 after:right-0 after:bg-themeYellow after:h-1 hover:after:bottom-0 after:transition-bottom after:duration-200 ${className}`}>
        {children}
      </Link>
    </>
  );
};

export default HeaderLink;
