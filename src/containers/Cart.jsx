import React, { useContext, useEffect, useState } from "react";
import { xIcon } from "../assets";
import { CartItem, Link1 } from "../components";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = ({ isCartExpanded, toggleCart }) => {
  useEffect(() => {
    if (isCartExpanded) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [isCartExpanded]);

  const { cartItems } = useContext(CartContext);

  const total = cartItems.reduce((acc, item) => acc + item.price, 0);
  const formattedTotalPrice = total.toFixed(2);

  return (
    <>
      {isCartExpanded && (
        <div
          className="fixed top-0 left-0 right-0 bottom-0 bg-black opacity-50 z-40"
          onClick={toggleCart}></div>
      )}
      <aside
        className={`max-w-md w-full font-primary max-h-screen fixed top-0 bottom-0 bg-white z-50 transition-right duration-300 md:max-w-full ${
          isCartExpanded ? "right-0" : "-right-full"
        }`}>
        <div className="h-full flex flex-col">
          <div className="flex-1 overflow-auto">
            <div className="px-10 pt-10 md:px-6 md:pt-6">
              <div className="flex items-center justify-between">
                <h3 className="text-1.5xl font-medium text-themeBlue mb-2">
                  Your Cart
                </h3>
                <button className="p-2 hover:opacity-60" onClick={toggleCart}>
                  <img src={xIcon} alt="x icon" />
                </button>
              </div>
              <div className="flex flex-col items-stretch mt-10 gap-y-8">
                {cartItems.length === 0 ? (
                  <>
                    <p className="text-center font-medium text-themeBlue">
                      Your cart is empty. <br /> Fill it with something good
                    </p>
                    <Link
                      className="font-primary font-medium mx-auto w-fit text-themeBlue border-b-2 border-b-themeBlue transition-opacity duration-200 hover:opacity-60"
                      to={"/shop-all"}>
                      Shop All
                    </Link>
                  </>
                ) : (
                  cartItems.map(
                    ({ title, image, categoryLabel, price, itemId }) => (
                      <CartItem
                        key={itemId}
                        title={title}
                        image={image}
                        categoryLabel={categoryLabel}
                        price={price}
                        itemId={itemId}
                      />
                    ),
                  )
                )}
              </div>
            </div>
          </div>
          <hr className="mx-10 border-t-2 border-t-gray-200 md:mx-6" />
          <div className="flex flex-col items-stretch gap-y-3 px-10 pb-10 pt-6 md:px-6">
            <div className="text-themeBlue font-medium text-sm flex justify-between items-center">
              <span>Subtotal</span>
              <span>${formattedTotalPrice}</span>
            </div>
            <div className="text-themeBlue font-medium text-sm flex justify-between items-center">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <a
              href="#"
              className="mt-2 font-medium text-white w-full bg-themeBlue text-center p-3 rounded-full transition-colors duration-300 hover:bg-themeYellow hover:text-themeBlue tracking-wider">
              Checkout
            </a>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Cart;
