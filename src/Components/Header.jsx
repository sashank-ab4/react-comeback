import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants.js";
import useOnlineStatus from "../utils/useOnlineStatus.jsx";
import UserContext from "../utils/UserContext.jsx";
import { useSelector } from "react-redux";
const Header = () => {
  const [buttonName, setButtonName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="flex justify-between bg-cyan-900 shadow-lg text-white ">
      <div className="logo-container">
        <img src={LOGO_URL} alt="" />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">{onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-4">
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <Link to="/about" className="link">
            About
          </Link>
          <li className="px-4">
            <Link to="/contact" className="link">
              Contact
            </Link>
          </li>
          <li className="">
            <Link to="/confectionery" className="link">
              Confectionery
            </Link>
          </li>
          <li className="px-4  font-bold">
            {" "}
            <Link to="/cart">Cart</Link>({cartItems.length})
          </li>
          <li className="px-4">
            <Link to="/login" className="link">
              <button
                className="px-3 cursor-pointer"
                onClick={() => {
                  setButtonName(buttonName === "Login" ? "Logout" : "Login");
                }}
              >
                {buttonName}
              </button>
            </Link>
          </li>
          <li>{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
