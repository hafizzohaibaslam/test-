import React from "react";
import { logo } from "../assets";
import FooterLinkList from "./FooterLinkList";
import { Link } from "react-router-dom";

const Footer = () => {
  const shopLinks = [
    { text: "multivitamin", href: "#" },
    { text: "gut health", href: "#" },
    { text: "skin", href: "#" },
    { text: "protein", href: "#" },
    { text: "bundles", href: "#" },
    { text: "gift cards", href: "#" },
  ];
  const aboutLinks = [
    { text: "ingredients", href: "#" },
    { text: "who we are", href: "#" },
    { text: "clinical study", href: "#" },
    { text: "the journal", href: "#" },
    { text: "reviews", href: "#" },
  ];
  const moreLinks = [
    { text: "help", href: "#" },
    { text: "return policy", href: "#" },
    { text: "contact us", href: "#" },
    { text: "careers", href: "#" },
    { text: "press", href: "#" },
  ];

  return (
    <>
      <footer className="w-full px-8 font-primary lg:px-4 ">
        <div className="border-t-4 py-14 grid grid-cols-4 border-t-themeBlue max-w-[1170px] w-calcLargest mx-auto xl:max-w-[934px] lg:max-w-[700px] md:w-full md:flex md:flex-col md:gap-y-3">
          <div className="md:hidden">
            <Link to="/">
              <img src={logo} alt="ritual logo" className="h-9" />
            </Link>
          </div>
          <FooterLinkList title={"shop"} links={shopLinks} />
          <FooterLinkList title={"about"} links={aboutLinks} />
          <FooterLinkList title={"more"} links={moreLinks} />
        </div>
      </footer>
    </>
  );
};

export default Footer;
