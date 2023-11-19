import React from "react";
import { ShopAllProductsItem } from "../components";

const ShopAllProductsGrid = ({
  allProducts,
  selectedCategory,
  categoriesDescriptions,
}) => {
  return (
    <>
      <div className="py-8">
        <p className="max-w-3xl text-2xl text-themeBlue my-4 font-medium lg:text-xl lg:my-2">
          {
            categoriesDescriptions.find(
              description =>
                description.category === selectedCategory.categoryLabel,
            ).description
          }
        </p>
        <div className="grid grid-cols-4 gap-x-6 py-8 gap-y-20 md:grid-cols-2">
          {allProducts
            .filter(
              product =>
                selectedCategory.categoryLabel === "all" ||
                product.categories.includes(selectedCategory.categoryLabel),
            )
            .map(
              ({ image, categoryLabel, title, description, price, itemId }) => (
                <ShopAllProductsItem
                  key={itemId}
                  itemId={itemId}
                  image={image}
                  categoryLabel={categoryLabel}
                  title={title}
                  description={description}
                  price={price}
                />
              ),
            )}
        </div>
      </div>
    </>
  );
};

export default ShopAllProductsGrid;
