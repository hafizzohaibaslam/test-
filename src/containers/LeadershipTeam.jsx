import React from "react";
import { LeadershipItem } from "../components";
import { leadership1Img, leadership2Img } from "../assets";

const LeadershipTeam = () => {
  return (
    <>
      <section className="w-full px-16 font-primary sm:px-4 py-20 md:py-12">
        <div className="max-w-[934px] w-calcLargest mx-auto lg:max-w-[700px] md:w-full">
          <h2 className="text-themeBlue font-medium text-5xl text-center lg:text-3xl">
            Our Scientific Leadership Team
          </h2>
          <div className="font-secondary mx-auto max-w-[75ch] text-lg text-themeBlue text-center mt-6 lg:text-base">
            <p>
              What happens when a Harvard trained physiologist and a registered
              dietician walk into a lab?
            </p>
            <a
              href="#"
              className="underline hover:opacity-60 transition-opacity duration-300">
              Essential for Women.
            </a>
          </div>
          <div className="flex items-start justify-center gap-x-20 mt-16 xl:gap-x-8 lg:gap-x-0 md:flex-col md:items-center md:gap-y-8">
            <LeadershipItem
              image={leadership1Img}
              name={"Dr. Nima Alamdari, PhD"}
              post={"Scientific Officer"}
              department={"Physiology"}
            />
            <LeadershipItem
              image={leadership2Img}
              name={"Dr. Mastaneh Sharafi, PhD, RD"}
              post={"VP, Scientific & Clinical Affairs"}
              department={"Nutritional Sciences"}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default LeadershipTeam;
