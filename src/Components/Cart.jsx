import React from "react";
import FoodItemList from "./FoodItemList";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Your Cart 🛒
      </h2>

      <div className="space-y-4">
        {cartItems?.length === 0 ? (
          <h1 className="text-xl text-center text-gray-500 font-medium">
            Cart is empty, add items to the cart!
          </h1>
        ) : (
          <FoodItemList items={cartItems} />
        )}

        <div className="flex justify-center mt-6">
          <button
            onClick={handleClearCart}
            className="px-6 py-2 bg-red-500 text-white font-semibold rounded hover:bg-red-600 transition duration-300 cursor-pointer"
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
