import React from "react";
import shoplogo from "../assets/logoImg.png";
import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { appContext } from "../context/Context";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const { cart } = useContext(appContext);
  const location = useLocation();

  return (
    <div className=" flex flex-col sm:flex-row sm:items-center sm:justify-between bg-rose-800 p-1 color text-white items-center shadow-md shadow-slate-800 z-10">
      <Link to="/">
        <div className="flex flex-col items-center sm:flex-row sm:items-center mb-4 sm:mb-0">
          <img
            className="w-16 h-16  object-cover hue-rotate-180"
            src={shoplogo}
            alt="shop-logo"
          />
          <h1 className=" text-xl font-[cursive] font-bold ml-1 tracking-widest">
            E-STORE
          </h1>
        </div>
      </Link>

      {location.pathname === "/" && (
        <div className="relative ">
          <Link to="/cart">
            <FaShoppingCart className="w-8 h-8  mr-4 hover:scale-110  transition-all " />
            {cart?.total_items ? (
              <button
                className="absolute bottom-[18px] left-[20px] w-[27px] h-[27px] text-sm font-bold bg-sky-800 text-white rounded-full"
                type="button"
              >
                {cart.total_items}
              </button>
            ) : (
              " "
            )}
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
