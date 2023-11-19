import React from "react";

const SubscriptionBenefitsItem = ({ image, title, description }) => {
  return (
    <>
      <div className="flex flex-col gap-y-4 items-center text-center font-medium text-themeBlue">
        <img src={image} alt="subscription benefit" className="lg:w-8 lg:h-8" />
        <h4 className="text-xl lg:text-base">{title}</h4>
        <p className="opacity-60 lg:text-sm">{description}</p>
      </div>
    </>
  );
};

export default SubscriptionBenefitsItem;
