import React from "react";

const ApproachMainItem = ({ heading, paragraph, image }) => {
  return (
    <>
      <div className="flex gap-12 md:flex-col-reverse">
        <div className="w-2/3 lg:w-1/2 md:w-full text-center">
          <h2 className="text-5xl font-medium mb-4 lg:text-3xl">{heading}</h2>
          <p className="font-secondary text-lg lg:text-base">{paragraph}</p>
        </div>
        <div className="w-1/3 lg:w-1/2 md:w-full">
          <img src={image} alt="appraoch image" />
        </div>
      </div>
    </>
  );
};

export default ApproachMainItem;
