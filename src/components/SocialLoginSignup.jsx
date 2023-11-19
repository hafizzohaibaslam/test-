import React from "react";
import { appleIcon, googleIcon } from "../assets";
import Button1 from "./Button1";

const SocialLoginSignup = ({ type }) => {
  return (
    <>
      <div className="space-y-4">
        <Button1 icon={appleIcon} text={`${type} with Apple`} />
        <Button1 icon={googleIcon} text={`${type} with Google`} />
      </div>
    </>
  );
};

export default SocialLoginSignup;
