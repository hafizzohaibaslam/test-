import React, { useState } from "react";
import { IngredientsListView, IngredientsMapView } from "../containers";

const IngredientsMain = () => {
  const [view, setView] = useState("list");

  return (
    <>
      <section className="w-full px-8 py-20 font-primary lg:px-4 md:py-8">
        <div className="max-w-[1170px] w-calcLargest mx-auto xl:max-w-[934px] lg:max-w-[700px] md:w-full">
          <div className="text-themeBlue text-center space-y-4">
            <h1 className="text-6xl font-medium lg:text-4xl md:text-3xl">
              Traceable Ingredients
            </h1>
            <p className="text-lg font-secondary md:text-base">
              Learn about how our ingredients are Made Traceable&reg; and why we
              chose them.
            </p>
          </div>
          <div className="flex items-center justify-center gap-x-14 mt-14 font-medium text-themeBlue text-lg lg:mt-10 md:mt-6">
            <button
              onClick={() => setView("list")}
              className={`border-b-2 border-b-themeBlue pb-1 md:text-base ${
                view === "list" ? "opacity-100" : "opacity-60"
              }`}>
              List View
            </button>
            <button
              onClick={() => setView("map")}
              className={`border-b-2 border-b-themeBlue pb-1 md:text-base ${
                view === "map" ? "opacity-100" : "opacity-60"
              }`}>
              Map View
            </button>
          </div>
          {view === "list" ? <IngredientsListView /> : <IngredientsMapView />}
        </div>
      </section>
      <hr className="border-t-4 border-t-themeBlue w-1/6 mx-auto mt-8 mb-2" />
    </>
  );
};

export default IngredientsMain;
