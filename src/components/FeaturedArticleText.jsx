import React from "react";

const FeaturedAtricleRight = ({ children, spacing = "left" }) => {
  let spacingStyles = "";
  if (spacing === "right") {
    spacingStyles = "mr-[8.33%]";
  } else {
    spacingStyles = "ml-[8.33%]";
  }
  return (
    <>
      <div
        className={`w-1/2 flex flex-col gap-y-6 items-start md:w-full md:m-0 md:mt-8 md:gap-y-4 ${spacingStyles}`}>
        {children}
      </div>
    </>
  );
};

export default FeaturedAtricleRight;
