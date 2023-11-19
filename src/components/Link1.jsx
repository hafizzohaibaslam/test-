import React from "react";

const Link1 = ({ href = "#", text, fontSize = "text-lg" }) => {
  return (
    <>
      <a
        href={href}
        className={`font-primary ${fontSize} font-medium text-themeBlue border-b-2 border-b-themeBlue transition-opacity duration-200 hover:opacity-60 lg:text-base`}>
        {text}
      </a>
    </>
  );
};

export default Link1;
