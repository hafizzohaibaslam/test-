import React from "react";
import {
  AdvisoryBoard,
  ApproachMain,
  FounderSection,
  LeadershipTeam,
  ProductCategoryCards,
} from "../containers";

const Approach = () => {
  return (
    <>
      <section className="w-full px-8 xl:px-6 md:px-3 font-primary">
        <div className="max-w-[1920px] max-h-[747px] mx-auto w-calcLargest h-calcLargest flex items-center justify-center bg-heroApproach bg-cover bg-center bg-no-repeat xl:w-full lg:h-calcLarge md:h-calcMedium md:bg-heroApproachMobile">
          <h1 className="text-8xl text-white font-medium pb-4 border-b-8 border-b-white xl:text-7xl md:text-5xl">
            It's time <br /> to clear <br />{" "}
            <span className="pl-28 md:pl-20">up the</span> <br /> facts
          </h1>
        </div>
      </section>
      <ApproachMain />
      <FounderSection />
      <LeadershipTeam />
      <AdvisoryBoard />
      <ProductCategoryCards />
    </>
  );
};

export default Approach;
