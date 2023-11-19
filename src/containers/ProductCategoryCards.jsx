import React, { useRef } from "react";
import { CategoryCard } from "../components/";
import {
  arrowLeft,
  multivitaminImage,
  pregnancyImage,
  gutHealthImage,
  skinImage,
  proteinImage,
} from "../assets";

const ProductCategoryCards = () => {
  const scrollRef = useRef(null);
  const styles = {
    scrollPadding: "0px 1000px",
    scrollSnapType: "x mandatory",
  };
  const scrollToLeft = () => {
    scrollRef.current.scrollLeft -= 400;
  };
  const scrollToRight = () => {
    scrollRef.current.scrollLeft += 400;
  };

  return (
    <>
      <section className="w-full font-primary py-14 overflow-hidden">
        <div className="max-w-[1170px] flex items-center justify-between w-full mx-auto mb-10 xl:max-w-[934px] lg:max-w-[700px] md:px-4 lg:mb-6">
          <h2 className="text-2xl font-medium text-themeBlue lg:text-xl">
            Find Your Ritual
          </h2>
          <div className="flex items-center gap-x-10">
            <button onClick={scrollToLeft}>
              <img src={arrowLeft} alt="arrow" className="w-5" />
            </button>
            <button onClick={scrollToRight}>
              <img src={arrowLeft} alt="arrow" className="w-5 rotate-180" />
            </button>
          </div>
        </div>
        <div className="flex max-w-[1170px] w-full mx-auto overflow-visible xl:max-w-[934px] lg:max-w-[700px] md:px-4">
          <div
            ref={scrollRef}
            className="no_scrollbar mx-[-1000px] overflow-x-scroll scroll-smooth"
            style={styles}>
            <div className="inline-flex whitespace-nowrap gap-x-8 px-[1000px] xl:gap-x-6 lg:gap-x-5 md:gap-x-3">
              <CategoryCard text={"Multivitamin"} image={multivitaminImage} />
              <CategoryCard text={"Pregnancy"} image={pregnancyImage} />
              <CategoryCard text={"Gut Health"} image={gutHealthImage} />
              <CategoryCard text={"Skin"} image={skinImage} />
              <CategoryCard text={"Protein"} image={proteinImage} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductCategoryCards;
