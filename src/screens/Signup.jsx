import React, { useState } from "react";
import { LoginSignupMain, SubscriptionBenefitsSection } from "../containers";
import { InputBox, SocialLoginSignup } from "../components";
import { Link } from "react-router-dom";

const Signup = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const showForm = () => {
    setIsFormVisible(true);
  };
  return (
    <>
      <LoginSignupMain>
        <div className="text-center text-themeBlue mb-8 space-y-3">
          <h2 className="text-xl font-medium lg:text-lg">Sign Up</h2>
          <h3 className="text-lg font-secondary lg:text-base">
            New here? Don't be a stranger.
          </h3>
        </div>
        <SocialLoginSignup type={"Sign up"} />
        <div className="my-2 text-sm font-medium text-themeBlue opacity-60 text-center">
          OR
        </div>
        {!isFormVisible ? (
          <button
            onClick={showForm}
            className="font-medium text-white w-full bg-themeBlue text-center p-3 rounded-full transition-colors duration-300 hover:bg-themeYellow hover:text-themeBlue tracking-wider">
            Sign up with Email
          </button>
        ) : (
          <form className="space-y-6">
            <InputBox
              label={"First Name"}
              idHtmlFor={"firstName"}
              type="text"
            />
            <InputBox label={"Last Name"} idHtmlFor={"lastName"} type="text" />
            <InputBox label={"Email"} idHtmlFor={"email"} type="email" />
            <InputBox
              label={"Password"}
              idHtmlFor={"password"}
              type="password"
            />
            <button className="mt-2 font-medium text-white w-full bg-themeBlue text-center p-3 rounded-full transition-colors duration-300 hover:bg-themeYellow hover:text-themeBlue tracking-wider">
              Save and Continue
            </button>
          </form>
        )}
        <p className="font-medium text-themeBlue opacity-60 my-4">
          By creating an account, I agree to the{" "}
          <a href="#" className="border-b border-b-themeBlue hover:opacity-50">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="border-b border-b-themeBlue hover:opacity-50">
            Privacy Policy
          </a>
          .
        </p>
        <div className="flex gap-x-4 items-center">
          <div className="w-6 h-6 relative">
            <input
              type="checkbox"
              id="receiveUpdates"
              className="absolute top-0 left-0 right-0 bottom-0"
            />
          </div>
          <label
            htmlFor="receiveUpdates"
            className="w-full font-medium text-themeBlue tracking-wide">
            I want to receive updates, tips, and other emails from Ritual. P.S.
            - you can unsubscribe any time.
          </label>
        </div>
        <p className="mt-8 text-center text-themeBlue font-secondary text-lg lg:text-base">
          Already have an account?{" "}
          <Link
            to={"/Login"}
            className="underline hover:opacity-60 transition-opacity duration-300">
            Login
          </Link>
          .
        </p>
      </LoginSignupMain>
      <SubscriptionBenefitsSection />
    </>
  );
};

export default Signup;
