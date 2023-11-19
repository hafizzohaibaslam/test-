import React from "react";
import { Link } from "react-router-dom";

const HeroLink = ({ text, to = "/" }) => {
  return (
    <>
      <Link
        to={to}
        className="w-full text-center whitespace-nowrap bg-themeBlue text-white font-medium px-10 py-3 leading-7 rounded-full transition-colors duration-300 hover:text-themeBlue hover:bg-white md:py-2">
        {text}
      </Link>
    </>
  );
};

export default HeroLink;
