import React from "react";
import { AdvisoryCarousel } from "../containers";
import {
  advisory1Img,
  advisory2Img,
  advisory3Img,
  advisory4Img,
} from "../assets";

const AdvisoryBoard = () => {
  const advisoryBoardMembers = [
    {
      image: advisory1Img,
      name: "Dr. Nima Alamdari, PhD",
      post: "Chief Scientific Officer (Prev. Harvard Faculty)",
    },
    {
      image: advisory2Img,
      name: "Dr. Nima Alamdari, PhD",
      post: "Chief Scientific Officer (Prev. Harvard Faculty)",
    },
    {
      image: advisory3Img,
      name: "Dr. Nima Alamdari, PhD",
      post: "Chief Scientific Officer (Prev. Harvard Faculty)",
    },
    {
      image: advisory4Img,
      name: "Dr. Nima Alamdari, PhD",
      post: "Chief Scientific Officer (Prev. Harvard Faculty)",
    },
  ];

  return (
    <>
      <section className="w-full px-16 bg-themeGray bg-opacity-60 font-primary py-20 lg:px-4 md:py-12">
        <div className=" max-w-[1170px] w-calcLargest mx-auto xl:max-w-[934px] lg:max-w-[700px] md:w-full">
          <h2 className="text-themeBlue font-medium text-5xl text-center lg:text-3xl">
            Scientific Advisory Board
          </h2>
          <p className="font-secondary mx-auto max-w-[75ch] text-lg text-themeBlue text-center mt-6 lg:text-base">
            Our scientific advisory board, comprised of medical doctors,
            nutritionists and scientists, helps guide our thinking around the
            latest research and product innovation.
          </p>
          <AdvisoryCarousel members={advisoryBoardMembers} />
        </div>
      </section>
    </>
  );
};

export default AdvisoryBoard;
