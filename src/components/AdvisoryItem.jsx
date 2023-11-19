import React from "react";

const AdvisoryItem = ({ image, name, post }) => {
  return (
    <>
      <div className="flex flex-col items-center mx-2 bg-white px-8 py-12 md:mx-auto md:max-w-xs">
        <div className="rounded-full overflow-hidden">
          <img src={image} alt={name} className="w-full h-full" />
        </div>
        <div className="text-themeBlue text-center mt-4">
          <h3 className="font-primary font-medium mb-2">{name}</h3>
          <p className="font-secondary text-sm italic">{post}</p>
        </div>
      </div>
    </>
  );
};

export default AdvisoryItem;
