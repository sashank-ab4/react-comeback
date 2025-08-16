import RestaruantCard from "./RestaruantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.jsx";


const Body = () => {
  const [listOfRests, setListOfRests] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState('');


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.0005383&lng=81.8040345&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const restaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    if (restaurants) {
      setListOfRests(restaurants);
      setFilteredRestaurant(restaurants);
    }
  };
  //custom hook 
const onlineStatus = useOnlineStatus();
if(onlineStatus ===  false) return (
    <div className="offline-banner">
      <div className="offline-icon">📡</div>
      <h1 className="offline-text">You are Offline</h1>
      <p className="offline-subtext">Please check your internet connection!</p>
    </div>
  );
  return listOfRests.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      
    <div className="filter-btn">
        <div className="filter flex">
        <div className=" search p-4 m-4">
        <input
          type="text"
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-700 shadow-md"
          placeholder="Search Restaurants"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="px-4 py-2 bg-cyan-900 m-4 rounded-lg  text-white cursor-pointer"
          onClick={() => {
            const filtered = listOfRests.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            //This filters the restaurants where the name includes the searchText typed by the user (case-insensitive match).
            setFilteredRestaurant(filtered);
          }}
        >
          Search
        </button>
        <button
          className="px-4 my-4 p-2 bg-cyan-900 rounded-lg  text-white cursor-pointer"
          onClick={() => {
            const filteredList = listOfRests.filter(
              (res) => res.info.avgRating > 4
            );
            setFilteredRestaurant(filteredList);
          }}
        >
          Top Rated ⭐
        </button>
      </div>
        
          </div> 
      </div>

      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {filteredRestaurant.map((restaurant) => (
         <Link 
         className="link"
         key={restaurant.info.id}
         to={"/restaurants/" + restaurant.info.id }>


          <RestaruantCard
            
            resData={restaurant.info}
          /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
