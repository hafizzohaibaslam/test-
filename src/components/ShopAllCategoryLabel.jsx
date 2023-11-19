import React from "react";

const ShopAllCategoryLabel = ({
  text,
  selectedCategory,
  setSelectedCategory,
  categoryLabel,
}) => {
  return (
    <>
      <button
        className={`text-1.5xl py-2 whitespace-nowrap lg:text-base ${
          selectedCategory.categoryLabel === categoryLabel
            ? "opacity-100"
            : "opacity-60"
        } `}
        onClick={() => setSelectedCategory({ text, categoryLabel })}>
        {text}
      </button>
    </>
  );
};

export default ShopAllCategoryLabel;
