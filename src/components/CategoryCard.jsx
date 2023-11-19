import React from "react";

const CategoryCard = ({ image, text, href = "#" }) => {
  return (
    <>
      <a
        href={href}
        className="flex flex-col w-[270px] cursor-pointer xl:w-[214px] lg:w-[160px] md:w-[26.25vw]">
        <div className="h-[140px] overflow-hidden xl:h-[110px] lg:h-[82px] md:h-auto">
          <img
            src={image}
            alt="card image"
            className="h-full w-full object-cover hover:scale-110 transition-transfrom duration-300"
          />
        </div>
        <h3 className="text-themeBlue text-lg bg-zinc-50 bg-opacity-90 text-center py-3 lg:text-sm lg:py-2">
          <span className="md:hidden">Shop</span> {text}
        </h3>
      </a>
    </>
  );
};

export default CategoryCard;
