import React, { useContext, useEffect, useState } from "react";
import { logo, loginIcon, cartIcon } from "../assets";
import { HeaderButton, HeaderLink } from "../components";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function Header({ toggleSidebar, toggleCart }) {
  const { cartItems } = useContext(CartContext);

  return (
    <>
      <header className="sticky top-0 left-0 right-0 w-full px-8 font-primary border-t-4 border-t-themeBlue border-b border-b-gray-300 bg-white xl:pl-4 xl:pr-6 z-20">
        <div className="max-w-[1170px] w-calcLargest mx-auto flex justify-between items-center text-primary xl:w-full">
          <div>
            <HeaderButton onClick={toggleSidebar}>Menu</HeaderButton>
          </div>
          <div>
            <Link to="/">
              <img src={logo} alt="logo" className="h-6 lg:h-5 md:h-4" />
            </Link>
          </div>
          <div className="flex items-center gap-x-14">
            <HeaderLink className={"md:hidden"}>Our Standards</HeaderLink>
            <div className="flex items-center gap-x-6">
              <HeaderLink to="/login">
                <img src={loginIcon} alt="login icon" className="h-6 lg:h-5" />
              </HeaderLink>
              <div className="relative">
                <HeaderButton onClick={toggleCart}>
                  <img src={cartIcon} alt="cart icon" className="h-6 lg:h-5" />
                </HeaderButton>
                {cartItems.length > 0 && (
                  <span className="absolute top-1/2 -translate-y-1/2 -right-0.5 translate-x-full text-themeBlue font-medium">
                    {cartItems.length > 9 ? "9+" : cartItems.length}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
