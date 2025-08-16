import React, { useState } from "react";
import FoodItemList from "./FoodItemList";

const RestaruantCategory = ({ data, showItems, setShowIndex, dummy }) => {
  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div className="w-full flex justify-center">
      {/* Accordion Header */}
      <div className="w-full sm:w-10/12 md:w-8/12 lg:w-6/12 my-4 bg-gray-50 shadow-md rounded-lg p-6 transition-all duration-200">
        <div
          onClick={handleClick}
          className="flex justify-between items-center cursor-pointer mb-4"
        >
          <span className=" font-semibold text-xl text-gray-800 ">
            {data.title} ({data.itemCards.length})
          </span>
          <span className="text-gray-600 text-xl hover:text-black transition">
            ↓
          </span>
        </div>
        {showItems && <FoodItemList items={data.itemCards} dummy={dummy} />}
      </div>
      {/* Accordion Content */}
    </div>
  );
};

export default RestaruantCategory;
