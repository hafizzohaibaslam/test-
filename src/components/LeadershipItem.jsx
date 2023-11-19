import React from "react";

const LeadershipItem = ({ image, name, post, department }) => {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="rounded-full overflow-hidden xl:w-4/5 lg:w-2/3">
          <img src={image} alt={name} className="w-full h-full" />
        </div>
        <div className="text-lg text-themeBlue text-center mt-4 lg:text-base">
          <h3 className="font-primary font-medium mb-2">{name}</h3>
          <p className="font-secondary">{post}</p>
          <p className="font-secondary">({department})</p>
        </div>
      </div>
    </>
  );
};

export default LeadershipItem;
