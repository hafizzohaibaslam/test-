import React, { useState } from "react";
import { chevronIcon } from "../assets";

const FooterLinkList = ({ title, links }) => {
  const [isListExpanded, setIsListExpanded] = useState(false);
  const listExpandHandler = () => {
    setIsListExpanded(prevState => !prevState);
  };
  return (
    <>
      <div>
        <h5 className="uppercase text-xs text-themeBlue opacity-60 font-semibold tracking-widest md:hidden">
          {title}
        </h5>
        <button
          className="hidden w-full md:flex items-center justify-between pt-3 pb-6"
          onClick={listExpandHandler}>
          <span className="uppercase text-xs text-themeBlue opacity-60 font-semibold tracking-widest">
            {title}
          </span>
          <img
            src={chevronIcon}
            alt="chevron icon"
            className={`transition-transform duration-200 ${
              isListExpanded ? "rotate-180" : "rotate-0"
            }`}
          />
        </button>
        <div
          className={`pt-6 transition-grid-rows duration-200 md:grid md:border-b md:border-b-themeBlue md:pt-0 ${
            isListExpanded
              ? "md:grid-rows-[1fr] md:pb-4"
              : "md:grid-rows-[0fr] md:pb-0"
          }`}>
          <ul className={`flex flex-col gap-y-3 md:overflow-hidden`}>
            {links.map(({ href, text }, index) => (
              <li key={index}>
                <a
                  href={href}
                  className="text-lg text-themeBlue font-medium capitalize hover:opacity-60 transition-opacity duration-200 lg:text-sm">
                  {text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default FooterLinkList;
