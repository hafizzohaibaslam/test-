import React from "react";

const H3 = ({ text }) => {
  return (
    <>
      <h3 className="font-primary text-2.5xl font-medium text-themeBlue lg:text-1.5xl">
        {text}
      </h3>
    </>
  );
};

export default H3;
