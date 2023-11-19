import React from "react";
import { IngredientsListItem } from "../components";
import {
  biotin_Img,
  boron_Img,
  calcium_hmb_Img,
  ceratiq_Img,
  choline_Img,
  folate_Img,
  hyabest_Img,
  iodine_Img,
  iron_Img,
  l_methionine_Img,
  magnesium_Img,
  melatonin_Img,
  omega_3_Img,
  pea_protein_Img,
  postbiotics_Img,
  prebiotics_Img,
  probiotics_Img,
  sugarcane_Img,
  vanilla_Img,
  vitamin_a_2_Img,
  vitamin_a_Img,
  vitamin_b12_Img,
  vitamin_c_Img,
  vitamin_d_Img,
  vitamin_e_Img,
  vitamin_k2_Img,
  zinc_Img,
} from "../assets";

const IngredientsListView = () => {
  const ingredientsListData = [
    { name: "Vitamin D", location: "Nottingham, UK", image: vitamin_d_Img },

    { name: "Omega-3 DHA", location: "Saskatoon, Canada", image: omega_3_Img },

    { name: "Folate", location: "Pisticci, Italy", image: folate_Img },

    {
      name: "Vitamin B12",
      location: "Naugatuck, Connecticut / North Brunswick, New Jersey",
      image: vitamin_b12_Img,
    },

    { name: "Magnesium", location: "Ogden, Utah", image: magnesium_Img },

    { name: "Vitamin K2", location: "Oslo, Norway", image: vitamin_k2_Img },

    { name: "Boron", location: "Momence, Illinois", image: boron_Img },

    { name: "Iron", location: "Ogden, Utah", image: iron_Img },

    {
      name: "Vitamin E",
      location: "Buenos Aires, Argentina",
      image: vitamin_e_Img,
    },

    {
      name: "Biotin",
      location: "Naugatuck, Connecticut / North Brunswick, New Jersey",
      image: biotin_Img,
    },

    { name: "Choline", location: "Verona, Missouri", image: choline_Img },

    { name: "Iodine", location: "Ogden, Utah", image: iodine_Img },

    { name: "Zinc", location: "Ogden, Utah", image: zinc_Img },

    {
      name: "Vitamin A",
      location: "Sisseln, Switzerland",
      image: vitamin_a_Img,
    },

    {
      name: "Vitamin A",
      location: "Be'er Sheva, Israel",
      image: vitamin_a_2_Img,
    },

    { name: "Vitamin C", location: "Dalry, Scotland", image: vitamin_c_Img },

    { name: "Prebiotics", location: "Kennesaw, GA", image: prebiotics_Img },

    {
      name: "Probiotics",
      location: "Hvidovre, Denmark",
      image: probiotics_Img,
    },

    { name: "Postbiotic", location: "Sevilla, Spain", image: postbiotics_Img },

    {
      name: "Organic Pea Protein",
      location: "Turtle Lake, Wisconsin / Dawson, Minnesota",
      image: pea_protein_Img,
    },

    {
      name: "Handcrafted Vanilla Flavor",
      location: "Erlanger, Kentucky",
      image: vanilla_Img,
    },

    {
      name: "Fermented Sugarcane (Reb-M)",
      location: "Sao Paulo, Brazil",
      image: sugarcane_Img,
    },

    { name: "L-Methionine", location: "Iwate, Japan", image: l_methionine_Img },

    {
      name: "Calcium HMB",
      location: "Jiangyin, Jiangsu, China",
      image: calcium_hmb_Img,
    },

    { name: "Hyabest®", location: "Goka, Japan", image: hyabest_Img },

    { name: "Ceratiq®", location: "Grasse, France", image: ceratiq_Img },

    {
      name: "Melatonin",
      location: "Chignolo d'Isola, Italy",
      image: melatonin_Img,
    },
  ];

  return (
    <>
      <div className="grid grid-cols-4 gap-x-10 gap-y-20 pt-20 lg:grid-cols-3 lg:gap-y-12 lg:pt-14 md:grid-cols-2">
        {ingredientsListData.map(({ name, location, image }, index) => (
          <IngredientsListItem
            key={index}
            name={name}
            location={location}
            image={image}
          />
        ))}
      </div>
    </>
  );
};

export default IngredientsListView;
