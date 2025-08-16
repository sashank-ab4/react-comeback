import React, { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaruantCategory from "./RestaruantCategory";

const RestaruantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);
  const dummy = "Dummy data";

  if (resInfo === null) return <Shimmer />;

  const { name, city, cuisines } = resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  //console.log(categories)
  return (
    <div className="menu bg-white text-cyan-700 p-6 rounded-lg max-w-2xl mx-auto shadow-lg">
      <h2 className="text-3xl font-bold mb-2 ">{name}</h2>
      <h3 className="text-lg text-cyan-700  mb-1">{cuisines.join(", ")}</h3>
      <h3 className="text-md text-cyan-700  mb-4">{city}</h3>

      <h3 className="text-2xl font-semibold border-b border-cyan-300 pb-2 mb-4">
        Menu
      </h3>

      {categories.map((category, index) => (
        //controlled component
        <RestaruantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => {
            setShowIndex(index);
          }}
          dummy={dummy}
        />
      ))}

      {/* <ul className='space-y-3'>
       
{itemCards?.map((item) => (
  <li className='bg-gray-400  rounded-md px-4 py-3  transition-all duration-200'
   key={item.card.info.id}>
    <span className="font-medium">
      -{item.card.info.name}
      </span>
      <span className='float-left'>
       ₹ {item.card.info.defaultPrice / 100 || item.card.info.price / 100 
}
        </span></li>
))}

      </ul>  */}
    </div>
  );
};

export default RestaruantMenu;
