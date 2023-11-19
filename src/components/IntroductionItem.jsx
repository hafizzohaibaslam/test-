import React from "react";

const IntroductionItem = ({ image, text }) => {
  return (
    <>
      <div className="w-36 flex flex-col gap-y-4 items-center md:flex-row md:w-auto md:gap-x-2">
        <div>
          <img src={image} alt="introduction icon" />
        </div>
        <h4 className="text-themeBlue text-center">{text}</h4>
      </div>
    </>
  );
};

export default IntroductionItem;
