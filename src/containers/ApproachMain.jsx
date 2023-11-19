import React from "react";
import { approach1Img, approach2Img, approach3Img } from "../assets";
import ApproachMainItem from "./ApproachMainItem";

const ApproachMain = () => {
  return (
    <>
      <main className="w-full px-8 font-primary text-themeBlue py-20 lg:px-4 lg:py-12">
        <div className=" max-w-[1170px] w-calcLargest mx-auto xl:max-w-[934px] lg:max-w-[700px] space-y-12 md:w-full">
          <ApproachMainItem
            image={approach1Img}
            heading={
              <>
                For skeptics, <span className="font-secondary italic">by</span>{" "}
                skeptics.
              </>
            }
            paragraph={
              <>
                We're not about pseudoscience and half-truths. Health fads make
                our eyes roll. So, when we set out to develop{" "}
                <a
                  href="#"
                  className="underline transition-opacity duration-300 hover:opacity-60">
                  Essential for Women
                </a>{" "}
                , we wanted something simple, clean, and backed by science. We
                challenged some of the top scientists to reimagine the daily
                multivitamin for women. The result is everything we think a
                multivitamin should be.
              </>
            }
          />
          <ApproachMainItem
            image={approach2Img}
            heading={"We're Made Traceable®"}
            paragraph={
              <>
                For us, reimagining the multivitamin has always been about more
                than just combining great{" "}
                <a
                  href="#"
                  className="underline transition-opacity duration-300 hover:opacity-60">
                  ingredients
                </a>{" "}
                — it's working with companies that care as much about their
                supply chain as we do. We've worked tirelessly to find the right
                partners worldwide with the ingredients that meet our Made
                Traceable® standards. At Ritual, true transparency isn't just
                something printed on a label. We're committed to sharing the
                choices we made that impact you and the planet.
              </>
            }
          />
          <ApproachMainItem
            image={approach3Img}
            heading={"No B.S."}
            paragraph={
              <>
                We care so much about what we put in and on our bodies, but when
                it comes to vitamins, we still rely on blind faith. Too often,
                companies make their process and formulations intentionally
                confusing to keep their customers from knowing what's really
                going on. We're proud of the product we've put together with no
                unnecessary ingredients and with nutrients in their best forms.
                So go ahead and look under the hood—we want you to.
                <a
                  href="#"
                  className="underline transition-opacity duration-300 hover:opacity-60">
                  See our clinical study.
                </a>{" "}
              </>
            }
          />
        </div>
      </main>
    </>
  );
};

export default ApproachMain;
