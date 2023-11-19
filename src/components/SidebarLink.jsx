import React from "react";
import { Link } from "react-router-dom";

const SidebarLink = ({ text, to, onClick }) => {
  return (
    <>
      <Link
        onClick={onClick}
        to={to}
        className="relative text-themeBlue font-medium text-3xl px-1 after:absolute after:h-1/4 after:w-full after:top-1/2 after:-translate-y-1/2 after:left-0 after:bg-themeYellow after:opacity-0 after:transition-opacity after:duration-300 after:-z-10 hover:after:opacity-80">
        <span>{text}</span>
      </Link>
    </>
  );
};

export default SidebarLink;
