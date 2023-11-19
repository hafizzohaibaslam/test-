import React from "react";

const FeaturedBundleItem = ({
  image,
  category,
  title,
  description,
  price,
  showModalHandler,
}) => {
  return (
    <>
      <div className="md:min-w-[40vw]">
        <button onClick={showModalHandler}>
          <div className="rounded-2xl overflow-hidden">
            <img src={image} alt="Featured Bundle" />
          </div>
          <div className="mt-4 flex flex-col items-start text-start font-primary text-themeBlue">
            <h4 className="text-lg font-secondary italic lg:text-sm">
              {category}
            </h4>
            <h3 className="text-1.5xl font-medium w-1/2 lg:text-base">
              {title}
            </h3>
            <p className="opacity-60 mt-2 mb-4 lg:text-sm">{description}</p>
            <h5 className="font-medium lg:text-sm">${price}</h5>
          </div>
        </button>
      </div>
    </>
  );
};

export default FeaturedBundleItem;
