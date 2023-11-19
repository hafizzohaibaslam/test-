import React from "react";

const FeaturedAtricle = ({
  children,
  className = "",
  flexOnMobile = "md:flex-col",
}) => {
  return (
    <>
      <section className="w-full px-8 pb-32 font-primary lg:px-4 lg:pb-20">
        <div
          className={`max-w-[1170px] w-calcLargest mx-auto flex items-center xl:max-w-[934px] lg:max-w-[700px] md:w-full ${flexOnMobile} ${className}`}>
          {children}
        </div>
      </section>
    </>
  );
};

export default FeaturedAtricle;
