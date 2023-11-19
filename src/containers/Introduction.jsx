import React from "react";
import {
  traceableIcon,
  nonGmoIcon,
  testedIcon,
  veganIcon,
  colorantsIcon,
} from "../assets";
import { IntroductionItem } from "../components";

const Introduction = () => {
  return (
    <>
      <section className="w-full px-4 font-primary pb-12">
        <div className="max-w-[1170px] mx-auto flex flex-col items-center gap-y-8 md:items-start">
          <h2 className="text-2xl text-center font-medium text-themeBlue md:text-start">
            Daily essentials with good intentions — for living life or creating
            it.
          </h2>
          <div className="flex md:flex-col md:w-full md:gap-y-6">
            <IntroductionItem
              image={traceableIcon}
              text={"Traceable Ingredients"}
            />
            <IntroductionItem image={nonGmoIcon} text={"Non-GMO"} />
            <IntroductionItem image={testedIcon} text={"Third Party Tested"} />
            <IntroductionItem image={veganIcon} text={"Vegan"} />
            <IntroductionItem
              image={colorantsIcon}
              text={"No Artificial Colorants"}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Introduction;
