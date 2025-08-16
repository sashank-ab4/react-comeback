import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
const FoodItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex"
        >
          <div className="flex justify-between items-start">
            <div>
              <h4 className="py-2 text-2xl">{item.card.info.name}</h4>

              {item.card.info.description}
            </div>
            <div className="text-right text-green-700 font-semibold text-md">
              ₹
              {item.card.info.price
                ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100}
            </div>

            <div className="">
              <button
                className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg cursor-pointer"
                onClick={() => handleAddItem(item)}
              >
                Add +
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default FoodItemList;
