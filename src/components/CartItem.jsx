import React, { useContext } from "react";
import { deleteIcon } from "../assets";
import { CartContext } from "../context/CartContext";

const CartItem = ({ image, title, price, categoryLabel, itemId }) => {
  const { cartItems, setCartItems } = useContext(CartContext);
  const removeItemHandler = () => {
    const updatedCartItems = cartItems.filter(item => item.itemId !== itemId);
    setCartItems(updatedCartItems);
  };

  return (
    <>
      <div className="relative flex gap-x-4 font-primary pb-4 border-b">
        <button
          onClick={removeItemHandler}
          className="absolute p-2 transition-opacity duration-300 top-0 right-0 opacity-60 hover:opacity-100">
          <img src={deleteIcon} alt="delete icon" />
        </button>
        <div className="max-w-[110px]">
          <img src={image} alt={title} className="w-full" />
        </div>
        <div className="w-full space-y-1 pr-8 text-themeBlue">
          <h6 className="text-sm font-secondary italic">{categoryLabel}</h6>
          <h5 className="font-medium">{title}</h5>
          <h6 className="opacity-60 text-sm">${price}</h6>
        </div>
      </div>
    </>
  );
};

export default CartItem;
