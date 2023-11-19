import React from "react";

const H2 = ({ text }) => {
  return (
    <>
      <h2 className="text-h2 leading-h2 font-medium font-primary text-themeBlue lg:text-2xl">
        {text}
      </h2>
    </>
  );
};

export default H2;
