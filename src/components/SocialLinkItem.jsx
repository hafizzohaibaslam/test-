import React from "react";

const SocialLinkItem = ({ icon, href = "#" }) => {
  return (
    <>
      <li>
        <a
          href={href}
          className="hover:opacity-60 transition-opacity duration-200">
          <img src={icon} alt="social link icon" />
        </a>
      </li>
    </>
  );
};

export default SocialLinkItem;
