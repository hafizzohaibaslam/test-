import React from "react";
import {
  FeaturedAtricle,
  FeaturedBundles,
  Hero,
  Introduction,
  MakeYourselfSection,
  ProductCategoryCards,
  TestimonialsCarousel,
} from "../containers";
import {
  FeaturedArticleImage,
  FeaturedArticleText,
  H2,
  FeaturedListItem,
  FeaturedP,
  Link1,
} from "../components";
import {
  featuredImg1,
  featuredImg2,
  featuredImg3,
  deliveryIcon,
  moneyBackIcon,
  savingIcon,
  shippingIcon,
} from "../assets";

function Home() {
  return (
    <>
      <Hero />
      <ProductCategoryCards />
      <Introduction />

      {/* Featured Atricle 1 */}
      <FeaturedAtricle>
        <FeaturedArticleImage>
          <img src={featuredImg1} alt="featured" />
        </FeaturedArticleImage>
        <FeaturedArticleText>
          <H2 text={"We're not about pseudoscience and half-truths"} />
          <FeaturedP
            text={
              "From Omega-3 DHA from microalgae to regeneratively-farmed pea protein, our scientists studied diets and genetics to make daily essentials based on what we need."
            }
          />
          <Link1 text={"Who We Are"} />
        </FeaturedArticleText>
      </FeaturedAtricle>

      {/* Featured Atricle 2 */}
      <FeaturedAtricle flexOnMobile="md:flex-col-reverse">
        <FeaturedArticleText spacing="right">
          <H2 text={"You deserve traceability"} />
          <FeaturedP
            text={
              "We share our sources, studies, and suppliers — daily essentials backed by the first visible supply chain of its kind."
            }
          />
          <Link1 text={"Meet Our Ingredients"} />
          <Link1 text={"Our Clinical Study"} />
        </FeaturedArticleText>
        <FeaturedArticleImage>
          <img src={featuredImg2} alt="featured" />
        </FeaturedArticleImage>
      </FeaturedAtricle>

      <FeaturedBundles />

      {/* Featured Atricle 3 */}
      <FeaturedAtricle>
        <FeaturedArticleImage>
          <img src={featuredImg3} alt="featured" />
        </FeaturedArticleImage>
        <FeaturedArticleText>
          <H2 text={"Clean and simple, delivered"} />
          <FeaturedP
            text={
              "Meet your Ritual subscription that flexes with you. Easy-to-start. Easy-to-cancel. Our team of scientists and nutritional experts are on a mission to turn your new healthy habit into a Ritual."
            }
          />
          <ul className="flex flex-col gap-y-6">
            <FeaturedListItem
              image={shippingIcon}
              text={"Free shipping, always"}
            />
            <FeaturedListItem
              image={deliveryIcon}
              text={"Control your delivery date"}
            />
            <FeaturedListItem
              image={savingIcon}
              text={"Save on every bundle"}
            />
            <FeaturedListItem
              image={moneyBackIcon}
              text={"30 day money-back guarantee"}
            />
          </ul>
        </FeaturedArticleText>
      </FeaturedAtricle>

      <TestimonialsCarousel />

      <MakeYourselfSection />
    </>
  );
}

export default Home;
