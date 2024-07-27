import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className=" flex justify-between shadow-lg">
      <div className="py-4 px-12  mx-4 flex items-center">
        <span className="text-2xl font-bold font-sans ">ShopEase</span>
        <span className="text-4xl font-bold  text-pink-400 text-center relative bottom-1">
          .
        </span>
      </div>

      <div className="py-4 px-8  flex items-center mr-10">
        <ul className="flex justify-between">
          <li>
            <Link className="font-sans pr-8 font-bold text-lg" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="font-sans pr-8 font-bold text-lg">
              AboutUs
            </Link>
          </li>
          <li>
            <Link className="font-sans pr-8 font-bold text-lg">Cart</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
