import React from "react";
import { xIcon } from "../assets";

const FeaturedBundleModal = ({ hideModalHandler }) => {
  return (
    <>
      <div
        className="fixed top-0 left-0 right-0 bottom-0 bg-black opacity-50 z-30"
        onClick={hideModalHandler}></div>
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-4/5 bg-white px-20 py-10 z-40 xl:w-2/3 lg:w-5/6 md:w-full">
        <button
          className="absolute p-2 top-4 right-4 hover:opacity-60"
          onClick={hideModalHandler}>
          <img src={xIcon} alt="x icon" />
        </button>
        <div>Modal Content</div>
      </div>
    </>
  );
};

export default FeaturedBundleModal;
