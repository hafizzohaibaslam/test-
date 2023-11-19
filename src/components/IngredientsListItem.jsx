import React from "react";

const IngredientsListItem = ({ name, location, image, href }) => {
  return (
    <>
      <a href={href}>
        <div className="rounded-full overflow-hidden aspect-square">
          <img src={image} alt="name" className="w-full h-full object-cover" />
        </div>
        <div className="text-themeBlue font-primary text-center space-y-1 mt-2">
          <h3 className="text-1.5xl font-medium lg:text-lg">{name}</h3>
          <p className="lg:text-sm">{location}</p>
        </div>
      </a>
    </>
  );
};

export default IngredientsListItem;
