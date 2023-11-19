import React from "react";
import { H2 } from "../components";
import { mysImg1, mysImg2, mysImg3, mysImg4 } from "../assets";

const MakeYourselfSection = () => {
  return (
    <>
      <section className="w-full px-8 font-primary lg:px-4 py-24 lg:py-16">
        <div className="max-w-[1170px] w-calcLargest mx-auto xl:max-w-[934px] lg:max-w-[700px] md:w-full">
          <a href="/" className="text-center">
            <H2 text={"Make Your Self"} />
            <h4 className="text-lg font-secondary mt-6 text-themeBlue lg:text-base">
              Commit to yourself every single day with{" "}
              <span className="underline">@Ritual</span>
            </h4>
          </a>
          <div className="mt-14 grid grid-cols-4 gap-4 md:grid-cols-2 lg:mt-10">
            <div>
              <img src={mysImg1} alt="make your self" />
            </div>
            <div>
              <img src={mysImg2} alt="make your self" />
            </div>
            <div>
              <img src={mysImg3} alt="make your self" />
            </div>
            <div>
              <img src={mysImg4} alt="make your self" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MakeYourselfSection;
