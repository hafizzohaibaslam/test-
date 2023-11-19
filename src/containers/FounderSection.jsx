import React from "react";
import { founderImg } from "../assets";
import { H3 } from "../components";

const FounderSection = () => {
  return (
    <>
      <section className="w-full px-16 font-primary bg-themeGray bg-opacity-60 sm:px-4 py-20 my-12 md:py-12">
        <div className="max-w-[934px] w-calcLargest mx-auto lg:max-w-[700px] md:w-full">
          <h2 className="text-themeBlue font-medium text-5xl text-center lg:text-3xl">
            Created by a woman who wouldn't settle for less than the truth.
          </h2>
          <div className="mt-12 flex flex-row gap-x-20 xl:gap-x-12 sm:flex-col sm:items-center sm:gap-y-8">
            <div className="w-1/3 xl:w-2/5 sm:w-full sm:max-w-[200px]">
              <img src={founderImg} alt="founder image" className="w-full" />
            </div>
            <div className="w-2/3 space-y-6 xl:w-3/5 sm:w-full">
              <div className="font-secondary text-lg text-themeBlue space-y-6 lg:text-base">
                <p>
                  When I was pregnant, I turned my house upside down to get rid
                  of products with ingredients I couldn't get behind. I replaced
                  everything from my cleaning supplies to my deodorant. But, in
                  my search for my ideal{" "}
                  <a
                    href="#"
                    className="underline hover:opacity-60 transition-opacity duration-300">
                    prenatal vitamin
                  </a>
                  , I found questionable ingredients. I couldn't find a brand
                  that I trusted, so I decided to build my own.
                </p>
                <p>
                  I founded Ritual with the belief that better health begins
                  with better ingredients. With us, you'll know where
                  ingredients come from and why it's there. Some call it
                  obsess-iveness, we call it traceability.
                </p>
                <p>Welcome to your new daily ritual.</p>
              </div>
              <div>
                <H3 text={"Katerina Schneider"} />
                <H3 text={"CEO & Founder"} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FounderSection;
