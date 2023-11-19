import React from "react";
import { H3, Link1, SocialLinkItem } from "../components";
import {
  facebookIcon,
  instagramIcon,
  pinterestIcon,
  twitterIcon,
  youtubeIcon,
} from "../assets";

const NewsletterSection = () => {
  return (
    <section className="w-full px-8 font-primary lg:px-4 py-20 md:py-12 border-t border-t-gray-300">
      <div className="flex items-start justify-between max-w-[1170px] w-calcLargest mx-auto xl:max-w-[934px] lg:max-w-[700px] md:w-full md:flex-col md:gap-y-6">
        <div className="max-w-[300px]">
          <H3 text={"We have high standards for emails too."} />
        </div>
        <div className="flex flex-col w-1/2 gap-y-10 md:w-full">
          <div className="flex items-center gap-x-4 bg-gray-100 px-6 py-4 w-full">
            <input
              type="email"
              className="w-full text-themeBlue outline-none tracking-wide bg-transparent placeholder:text-themeBlue placeholder:opacity-60 placeholder:text-sm placeholder:font-medium"
              placeholder="Enter your email"
            />
            <Link1 text={"Subscribe"} fontSize="text-base" />
          </div>
          <ul className="flex gap-x-8">
            <SocialLinkItem icon={facebookIcon} />
            <SocialLinkItem icon={instagramIcon} />
            <SocialLinkItem icon={pinterestIcon} />
            <SocialLinkItem icon={twitterIcon} />
            <SocialLinkItem icon={youtubeIcon} />
          </ul>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
