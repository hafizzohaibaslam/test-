import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ShopAllProductsItem = ({
  image,
  categoryLabel,
  title,
  description,
  price,
  itemId,
}) => {
  const { cartItems, setCartItems } = useContext(CartContext);

  const addToCartHandler = () => {
    const cartItem = { title, image, price, categoryLabel, itemId };
    setCartItems(prevState => [...prevState, cartItem]);
  };

  const alreadyInCart = cartItems.some(item => item.itemId === itemId);

  return (
    <>
      <div className="md:min-w-[40vw]">
        <div className="relative rounded-2xl overflow-hidden">
          <img src={image} alt="Featured Bundle" />
          <button
            disabled={alreadyInCart}
            onClick={addToCartHandler}
            className="absolute left-0 bottom-0 right-0 bg-white bg-opacity-60 p-3 font-medium text-themeBlue text-lg transition-colors duration-300 hover:text-white hover:bg-themeBlue lg:text-base lg:p-2 disabled:bg-themeYellow disabled:text-themeBlue">
            {!alreadyInCart ? "Add to cart" : "Added to cart"}
          </button>
        </div>
        <div className="mt-4 flex flex-col items-start text-start font-primary text-themeBlue">
          <h4 className="text-lg font-secondary italic lg:text-sm">
            {categoryLabel}
          </h4>
          <h3 className="text-1.5xl font-medium w-1/2 lg:text-base">{title}</h3>
          <p className="opacity-60 mt-2 mb-4 lg:text-sm">{description}</p>
          <h5 className="font-medium lg:text-sm">${price}</h5>
        </div>
      </div>
    </>
  );
};

export default ShopAllProductsItem;
