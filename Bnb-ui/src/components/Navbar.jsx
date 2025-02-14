import { useLocation } from "react-router-dom";
import SearchBox from "./SearchhBar.jsx";
import User from "./User.jsx";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

function Navbar() {
  const location = useLocation();
  const isListingPage = location.pathname === "/Listing";
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="navbar bg-base-100 flex flex-wrap justify-between items-center border-b-2 py-3 border-b-slate-200 px-4 md:px-10">
      {/* Left: Logo */}
      <img
        className="rounded-full w-20 md:w-36"
        src="https://download.logo.wine/logo/Airbnb/Airbnb-Logo.wine.png"
        alt="Airbnb Logo"
      />

      {/* Desktop Search Box */}
      <div className="hidden md:block ">
        <SearchBox />
      </div>

      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden text-gray-700 text-xl"
      >
        <FaBars />
      </button>

      {/* Listing Button (Always visible) */}
      {!isListingPage && (
        <Link
          to="/Listing"
          className="hidden md:flex border-2 items-center gap-2 text-sm transition-transform duration-200 border-slate-300 p-2 px-3 rounded-lg hover:bg-red-500 hover:border-0 hover:text-white hover:scale-105 md:px-5"
        >
          List your property
        </Link>
      )}

      {/* Desktop User Menu */}
      <div className="hidden md:block">
        <User />
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="absolute z-10 top-16 left-0 w-full bg-white shadow-lg p-4 flex flex-col gap-4 md:hidden">
          <SearchBox />
          <User />
        </div>
      )}
    </div>
  );
}

export default Navbar;
