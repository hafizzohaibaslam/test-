import React, { useEffect, useState } from "react";
import {
  arrowLeft2,
  woman1Img,
  woman2Img,
  woman3Img,
  woman4Img,
} from "../assets";
import { H2 } from "../components";

const TestimonialsCarousel = () => {
  const [current, setCurrent] = useState(0);

  const content = [
    {
      img: woman1Img,
      tagline:
        "The thing I love most about Ritual is just how transparent they are.",
      name: "Lori Coyle",
      role: "Fitness Program Manager",
      prev: 3,
      next: 1,
    },
    {
      img: woman2Img,
      tagline: "I love that it has omegas in it but they are plant-based.",
      name: "Erica Chidi Cohen",
      role: "Doula and Health Educator",
      prev: 0,
      next: 2,
    },
    {
      img: woman3Img,
      tagline: "Nice to just have them delivered to the door.",
      name: "Crystalrose Guerra",
      role: "Professional Athlete",
      prev: 1,
      next: 3,
    },
    {
      img: woman4Img,
      tagline: "Everything is sourced with such integrity and responsibility.",
      name: "Megan Monahan",
      role: "Meditation Teacher",
      prev: 2,
      next: 0,
    },
  ];

  const total = content.length;

  const [isClickDisabled, setIsClickDisabled] = useState(true);
  const handleClick = increment => {
    if (isClickDisabled) {
      setIsClickDisabled(false);

      setTimeout(() => {
        setIsClickDisabled(true);
      }, 600); // 600 milliseconds (0.6 seconds) delay
      if (increment === -1 && current === 0) {
        setCurrent(total - 1);
        return;
      }
      setCurrent(current => (current + increment) % total);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrent(current => (current + 1) % total);
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [current, total]);
  return (
    <>
      <div className="px-8 lg:px-4 py-24 font-primary bg-themeGray bg-opacity-60 lg:py-16">
        <div className="text-center pb-12 space-y-4">
          <H2 text={"Skeptics Speak"} />
          <p className="text-themeBlue font-secondary text-lg lg:text-base">
            With millions of Rituals delivered, discover why customers trust us
            with their daily health.
          </p>
        </div>
        <div className="relative max-w-[1170px] w-calcLargest mx-auto xl:max-w-[934px] lg:max-w-[700px] md:w-full">
          <div className="block md:hidden testimonial_desc absolute left-0 w-1/4 text-themeBlue text-left mt-12 pr-4 z-20">
            <h2 className="text-3xl font-medium md:text-left">
              "{content[current].tagline}"
            </h2>
            <h3 className="text-lg font-medium mt-4">
              {content[current].name}
            </h3>
            <span className="text-base italic font-secondary">
              {content[current].role}
            </span>
          </div>
          <div className="slides w-3/4 ml-auto z-0 flex gap-x-6 md:w-full md:gap-x-2">
            <div className="primary relative overflow-hidden flex flex-col justify-end w-[40%] h-96 lg:h-80 xs:h-64">
              {content.map((c, i) => (
                <img
                  src={c.img}
                  alt="slide"
                  className={
                    (current === i && "current") +
                    " slide absolute object-cover h-full w-full top-0"
                  }
                  key={i}
                />
              ))}
              <div className="hidden z-30 relative text-white p-2 bg-gradient-to-t from-[rgb(0,0,0,1)] to-[rgb(0,0,0,0)] md:block">
                <h3 className="name font-medium mt-4">
                  {content[current].name}
                </h3>
                <span className="name text-sm italic font-secondary">
                  {content[current].role}
                </span>
              </div>
            </div>
            <div className="secondary flex flex-col items-center w-[60%] md:w-[60%]">
              <div className="slides w-full flex gap-x-6 z-0 md:gap-x-2">
                {[1, 2].map(num => (
                  <div
                    className={`w-full h-72 relative overflow-hidden lg:h-64 xs:h-48`}
                    key={num}>
                    {content.map((c, i) => (
                      <img
                        src={c.img}
                        alt="slide"
                        className={
                          ((current + num) % total === i % total && "current") +
                          " slide absolute top-0 object-cover h-full w-full"
                        }
                        key={i}
                      />
                    ))}
                  </div>
                ))}
              </div>
              <div className="controls bg-gray-100 w-36 h-[50px] flex gap-4 -mt-8 z-10 md:gap-2">
                <div
                  className="w-1/2 flex items-center justify-center cursor-pointer"
                  onClick={() => handleClick(-1)}>
                  <img src={arrowLeft2} alt="arrow left" className="w-6" />
                </div>
                <div
                  className="w-1/2 flex items-center justify-center cursor-pointer"
                  onClick={() => handleClick(1)}>
                  <img
                    src={arrowLeft2}
                    alt="arrow right"
                    className="rotate-180 w-6"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <h2 className="hidden md:block font-primary text-themeBlue text-xl font-medium w-1/2 min-w-[250px] mt-4">
          "{content[current].tagline}"
        </h2>
      </div>
    </>
  );
};

export default TestimonialsCarousel;
