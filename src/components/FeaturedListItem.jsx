import React from "react";

const FeaturedListItem = ({ image, text }) => {
  return (
    <>
      <li className="flex items-center gap-x-4">
        <img src={image} alt="featured icon" />
        <span className="text-themeBlue font-secondary text-lg lg:text-base">{text}</span>
      </li>
    </>
  );
};

export default FeaturedListItem;
