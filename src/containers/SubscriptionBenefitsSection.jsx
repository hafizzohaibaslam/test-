import React from "react";
import { SubscriptionBenefitsItem } from "../components";
import {
  benefit1Img,
  benefit2Img,
  benefit3Img,
  benefit4Img,
  benefit5Img,
  benefit6Img,
} from "../assets";

const SubscriptionBenefitsSection = () => {
  const benefitsData = [
    {
      image: benefit1Img,
      title: "Delivered monthly",
      description:
        "Your subscription shows up monthly so you don't run out of your Ritual Essentials.",
    },
    {
      image: benefit2Img,
      title: "Free shipping for subscribers, always",
      description: "Even when you need to snooze or rush your order.",
    },
    {
      image: benefit3Img,
      title: "Control your delivery date",
      description:
        "Tell us when you need your subscription order, and we'll be there.",
    },
    {
      image: benefit4Img,
      title: "Easy cancellation, anytime",
      description:
        "Cancel your subscription at any time—no strings attached, ever.",
    },
    {
      image: benefit5Img,
      title: "30 day money-back guarantee",
      description: "Don't love it within 30 days? It's on us.",
    },
    {
      image: benefit6Img,
      title: "Bundle up",
      description:
        "Keeping up healthy habits can be easier when you share the Ritual.",
    },
  ];

  return (
    <>
      <section className="w-full px-8 py-20 font-primary xl:px-4">
        <div className="max-w-[1170px] w-calcLargest mx-auto flex flex-col gap-y-14 items-center xl:max-w-[934px] lg:max-w-[700px] md:w-full">
          <h3 className="text-3xl font-medium text-themeBlue lg:text-2xl">
            Making healthy habits easy
          </h3>
          <div className="grid grid-cols-3 gap-x-20 gap-y-14 md:grid-cols-1 md:gap-y-10">
            {benefitsData.map(({ image, title, description }, index) => (
              <SubscriptionBenefitsItem
                key={index}
                image={image}
                title={title}
                description={description}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SubscriptionBenefitsSection;
