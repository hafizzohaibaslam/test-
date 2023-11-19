import React from "react";
import { HeroLink } from "../components";

const Hero = () => {
  return (
    <>
      <section className="w-full px-8 xl:px-6 md:px-3 font-primary">
        <div className="max-w-[1920px] max-h-[747px] mx-auto w-calcLargest h-calcLargest flex flex-col items-center justify-center gap-y-8 bg-hero bg-cover bg-center bg-no-repeat xl:w-full lg:h-calcLarge md:h-calcMedium md:bg-heroMobile md:gap-y-4">
          <h1 className="flex flex-col gap-y-1 text-7xl font-semibold text-themeBlue xl:text-6xl md:text-4xl">
            <div className="pl-28 md:pl-12">The future</div>of health
            <div>
              <em className="pl-28 md:pl-12 font-secondary font-normal">
                — is clear.
              </em>
            </div>
          </h1>
          <div className="flex items-center gap-x-4 md:flex-col md:gap-y-2">
            <HeroLink to="/shop-all" text={"Shop All"} />
            <HeroLink to="/shop-all" text={"Shop Bundles"} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
