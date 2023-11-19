import React, { useEffect, useState } from "react";
import {
  FeaturedBundleItem,
  FeaturedBundleModal,
  H2,
  Link1,
} from "../components";
import { featuredBImg1, featuredBImg2, featuredBImg3 } from "../assets";
import { Link } from "react-router-dom";

const FeaturedBundles = () => {
  const featuredBundlesData = [
    {
      image: featuredBImg1,
      category: "Women 18+",
      title: "Multivitamin Synbiotic+",
      description:
        "The clinical-backed multivitamin for Women 18+ and the research-stacked Synbiotic+ for daily gut support.",
      price: 87,
    },
    {
      image: featuredBImg2,
      category: "Gut Health & Skin",
      title: "Synbiotic+ HyaCera\u2122",
      description:
        "Research-stacked Synbiotic+ for daily gut support and hydrating HyaCera™ to help minimize wrinkles.",
      price: 108,
    },
    {
      image: featuredBImg1,
      category: "Women 50+",
      title: "Multivitamin Synbiotic+",
      description:
        "The daily multivitamin for Women 50+ and the research-stacked Synbiotic+ for daily gut support.",
      price: 93,
    },
    {
      image: featuredBImg3,
      category: "Essential Duo",
      title: "Pregnancy",
      description:
        "Prenatal multivitamin + plant-based protein for before and during pregnancy.",
      price: 79,
    },
  ];
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModalHandler = () => {
    setIsModalVisible(true);
  };
  const hideModalHandler = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    if (isModalVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [isModalVisible]);

  return (
    <>
      <section className="w-full px-8 font-primary lg:px-4 pb-20 lg:pb-12">
        <div className="max-w-[1170px] w-calcLargest mx-auto xl:max-w-[934px] lg:max-w-[700px] md:w-full">
          <div className="flex items-center justify-between mb-8 md:mb-6">
            <H2 text={"Featured Bundles"} />
            <Link
              to={"/shop-all"}
              className={`font-primary text-lg font-medium text-themeBlue border-b-2 border-b-themeBlue transition-opacity duration-200 hover:opacity-60 lg:text-base`}>
              Shop All
            </Link>
          </div>
          <div className="flex gap-x-7 md:overflow-scroll md:gap-x-4">
            {featuredBundlesData.map(
              ({ image, category, title, description, price }, index) => (
                <FeaturedBundleItem
                  key={index}
                  image={image}
                  category={category}
                  title={title}
                  description={description}
                  price={price}
                  showModalHandler={showModalHandler}
                />
              ),
            )}
          </div>
        </div>
      </section>
      {isModalVisible && (
        <FeaturedBundleModal
          isModalVisible={isModalVisible}
          hideModalHandler={hideModalHandler}
        />
      )}
    </>
  );
};

export default FeaturedBundles;
