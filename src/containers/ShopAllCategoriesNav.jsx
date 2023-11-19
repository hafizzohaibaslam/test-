import React from "react";
import { ShopAllCategoryLabel } from "../components";

const ShopAllCategoriesNav = ({ selectedCategory, setSelectedCategory }) => {
  const categoriesLabels = [
    { text: "All", categoryLabel: "all" },
    { text: "Multivitamin", categoryLabel: "multivitamin" },
    { text: "Pregnancy", categoryLabel: "pregnancy" },
    { text: "Gut Health", categoryLabel: "gutHealth" },
    { text: "Skin", categoryLabel: "skin" },
    { text: "Protein", categoryLabel: "protein" },
  ];

  return (
    <>
      <div className="w-full overflow-hidden">
        <div className="no_scrollbar flex items-stretch gap-x-10 pr-4 pt-4 pb-6 w-full overflow-auto lg:gap-x-6 lg:pt-0 lg:pb-2">
          {categoriesLabels.map(({ text, categoryLabel }, index) => (
            <ShopAllCategoryLabel
              key={index}
              text={text}
              categoryLabel={categoryLabel}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ShopAllCategoriesNav;
