import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import { AdvisoryItem } from "../components";
import { chevronIcon } from "../assets";

const AdvisoryCarousel = ({ members }) => {
  const sliderRef = useRef(null);

  const previousSlide = () => {
    sliderRef.current.slickPrev();
  };

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const CustomPrevArrow = props => (
    <button
      className="custom-arrows prev-arrow"
      onClick={props.onClick}
      style={{ display: "none" }}
    />
  );

  const CustomNextArrow = props => (
    <button
      className="custom-arrows next-arrow"
      onClick={props.onClick}
      style={{ display: "none" }}
    />
  );

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Set this to the number of members you want to show in a row
    slidesToScroll: 1, // Set this to 1 to scroll one member at a time

    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 748,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="max-w-8xl mx-auto space-y-20 mt-12">
        <div>
          <Slider {...sliderSettings} ref={sliderRef}>
            {members?.map(({ image, name, post }, index) => (
              <AdvisoryItem key={index} image={image} name={name} post={post} />
            ))}
          </Slider>
        </div>
        <div className="flex justify-center">
          <div className="flex items-center gap-x-32 md:gap-x-12">
            <button onClick={previousSlide}>
              <img src={chevronIcon} alt="chevron" className="rotate-90" />
            </button>
            <button onClick={nextSlide}>
              <img src={chevronIcon} alt="chevron" className="-rotate-90" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdvisoryCarousel;
