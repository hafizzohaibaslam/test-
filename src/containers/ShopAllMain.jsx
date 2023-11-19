import React, { useState } from "react";
import ShopAllCategoriesNav from "./ShopAllCategoriesNav";
import ShopAllProductsGrid from "./ShopAllProductsGrid";
import { shopAllP1Img, shopAllP2Img, shopAllP3Img } from "../assets";

const ShopAllMain = () => {
  const [selectedCategory, setSelectedCategory] = useState({
    text: "All",
    categoryLabel: "all",
  });
  const allProducts = [
    {
      image: shopAllP1Img,
      categories: ["multivitamin"],
      categoryLabel: "Women 18+",
      title: "Multivitamin Synbiotic+",
      description:
        "The clinical-backed multivitamin for Women 18+ and the research-stacked Synbiotic+ for daily gut support.",
      price: 87,
      itemId: "0001",
    },
    {
      image: shopAllP2Img,
      categories: ["pregnancy"],
      categoryLabel: "Gut Health & Skin",
      title: "Synbiotic+ HyaCera\u2122",
      description:
        "Research-stacked Synbiotic+ for daily gut support and hydrating HyaCera™ to help minimize wrinkles.",
      price: 108,
      itemId: "0002",
    },
    {
      image: shopAllP3Img,
      categories: ["gutHealth"],
      categoryLabel: "Women 50+",
      title: "Multivitamin Synbiotic+",
      description:
        "The daily multivitamin for Women 50+ and the research-stacked Synbiotic+ for daily gut support.",
      price: 93,
      itemId: "0003",
    },
    {
      image: shopAllP1Img,
      categories: ["skin"],
      categoryLabel: "Women 50+",
      title: "Multivitamin Synbiotic+",
      description:
        "The daily multivitamin for Women 50+ and the research-stacked Synbiotic+ for daily gut support.",
      price: 93,
      itemId: "0004",
    },
    {
      image: shopAllP2Img,
      categories: ["protein"],
      categoryLabel: "Women 50+",
      title: "Multivitamin Synbiotic+",
      description:
        "The daily multivitamin for Women 50+ and the research-stacked Synbiotic+ for daily gut support.",
      price: 93,
      itemId: "0005",
    },
  ];
  const categoriesDescriptions = [
    {
      category: "all",
      description:
        "Healthy habits can take many forms. But whether it's taking a multivitamin or protein powder, our formulations include key nutrients the body actually needs.",
    },
    {
      category: "multivitamin",
      description:
        "Simple, clean, and backed by science. Our multivitamins are Made Traceable® and formulated to help fill gaps in the diet.",
    },
    {
      category: "pregnancy",
      description:
        "A lineup of clean, traceable formulas for when it matters most. These products are science-backed, third-party tested and designed with key nutrients to help meet heightened nutrient demands.",
    },

    {
      category: "gutHealth",
      description:
        "Our 3-in-1 formula is science-backed and researched-stacked for a new take on daily gut support.",
    },
    {
      category: "skin",
      description:
        "A simple way to turn your skincare routine inside out with ingredients that support skin that glows.",
    },
    {
      category: "protein",
      description:
        "Our plant-based proteins are proactive by nature. With clean, sugar-free formulas, they deserve a place in your daily diet to help support the nutrient demands of key life stages.",
    },
  ];
  return (
    <>
      <main className="w-full px-8 py-20 font-primary lg:px-4 lg:py-8">
        <div className="max-w-[1170px] w-calcLargest mx-auto xl:max-w-[934px] lg:max-w-[700px] md:w-full">
          <div className="text-themeBlue font-medium space-y-2 pb-2 border-b-2">
            <h1 className="text-6xl lg:text-4xl">{selectedCategory.text}</h1>
            <ShopAllCategoriesNav
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          </div>
          <ShopAllProductsGrid
            allProducts={allProducts}
            selectedCategory={selectedCategory}
            categoriesDescriptions={categoriesDescriptions}
          />
        </div>
      </main>
    </>
  );
};

export default ShopAllMain;
