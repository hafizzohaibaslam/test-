import React from "react";
import { LoginSignupMain, SubscriptionBenefitsSection } from "../containers";
import { InputBox, Link1, SocialLoginSignup } from "../components";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <LoginSignupMain>
        <div className="text-center text-themeBlue mb-8 space-y-3">
          <h2 className="text-xl font-medium lg:text-lg">Login</h2>
          <h3 className="text-lg font-secondary lg:text-base">
            We'll pick up right where we left off.
          </h3>
        </div>
        <form className="space-y-6">
          <InputBox label={"Email"} idHtmlFor={"email"} type="email" />
          <InputBox label={"Password"} idHtmlFor={"password"} type="password" />
          <div className="text-center">
            <Link1 text={"Forgot your password?"} fontSize="text-sm" />
          </div>
          <button className="mt-2 font-medium text-white w-full bg-themeBlue text-center p-3 rounded-full transition-colors duration-300 hover:bg-themeYellow hover:text-themeBlue tracking-wider">
            Login
          </button>
        </form>
        <div className="my-4 text-sm font-medium text-themeBlue opacity-60 text-center">
          OR
        </div>
        <SocialLoginSignup type={"Login"} />
        <p className="mt-8 text-center text-themeBlue font-secondary text-lg lg:text-base">
          New to Ritual?{" "}
          <Link
            to={"/signup"}
            className="underline hover:opacity-60 transition-opacity duration-300">
            Sign up
          </Link>
          .
        </p>
      </LoginSignupMain>
      <SubscriptionBenefitsSection />
    </>
  );
};

export default Login;
