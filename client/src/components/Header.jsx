import React from "react";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="bg-slate-200 shadow-md ">
        <div className="flex justify-between items-center max-w-6xl p-3 mx-auto">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-blue-700">India</span>
            <span className="text-slate-500">Estate</span>
          </h1>
          <form className="bg-slate-100 p-3 rounded-lg flex items-center">
            <input
              className="bg-transparent outline-none focus:outline-none"
              type="text"
              placeholder="Search..."
              name="propertySearch"
            />
            <FiSearch size={20} />
          </form>
          <ul className="hidden sm:flex gap-4">
            <Link to="/">
              <li className="text-slate-700 hover:underline">Home</li>
            </Link>
            <Link to="/about">
              <li className="text-slate-700 hover:underline">About</li>
            </Link>
            <Link to="/signin">
              <li className="text-slate-700 hover:underline">Sign In</li>
            </Link>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
