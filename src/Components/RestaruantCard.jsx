import { CDN_URL } from "../utils/constants";
const RestaruantCard = ({ resData }) => {
  if (!resData) return null;

  const {
    name = "Restaurant",
    cloudinaryImageId = "",
    cuisines = [],
    avgRating = "N/A",
    sla = {},
    costForTwo = "",
  } = resData;

  return (
    <div className=" m-4 p-4 w-[300px] min-h-[420px] bg-gray-100 hover:bg-gray-200 rounded-lg shadow-md transition-all duration-300 flex flex-col justify-between ">
      <img
      className="rounded-md h-[180px] w-full object-cover"
        src={
          cloudinaryImageId
            ?   `${CDN_URL}/${cloudinaryImageId}`
            : "https://via.placeholder.com/300x200?text=No+Image"
        }
        alt="restaurant"
      />
      <h3 className="font-bold py-4 text-xl mb-1 truncate">{name}</h3>
      <h4 className="text-base text-gray-700 mb-1 truncate">{cuisines.join(", ")}</h4>
      <div className="text-sm text-gray-600 space-y-1">
      <h4>⭐ {avgRating} stars</h4>
      <h4>⏱️ {sla?.deliveryTime ?? "?"} mins</h4>
      <h4>💵{costForTwo}</h4>
      </div>
    </div>
  );
};



export default RestaruantCard;