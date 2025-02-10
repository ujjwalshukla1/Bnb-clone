import { useLocation } from "react-router-dom";
import SearchBox from "./SearchhBar.jsx";
import User from "./User.jsx";
import { Link } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const isListingPage = location.pathname === "/Listing";

  return (
    <div className="navbar bg-base-100 flex justify-between items-center border-b-2 py-5 border-b-slate-200">
      <img
        className="rounded-full"
        style={{ width: "150px", height: "100px" }}
        src="https://download.logo.wine/logo/Airbnb/Airbnb-Logo.wine.png"
      />
      <SearchBox />
      {!isListingPage && (
        <Link
          to="/Listing"
          className="relative border-2 flex items-center gap-5 transition-transform duration-200 border-slate-300 p-2 px-5 rounded-lg hover:bg-red-500 hover:border-0 hover:text-white hover:scale-105"
        >
          List your property
        </Link>
      )}
      <User />
    </div>
  );
}

export default Navbar;
