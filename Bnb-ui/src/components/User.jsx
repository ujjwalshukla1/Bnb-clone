import { useState, useEffect, useRef } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

function User() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return (
    <div
      ref={dropdownRef}
      className="relative border-2 flex flex-row gap-5 border-slate-300 p-2 px-5 rounded-badge"
    >
      <div className="cursor-pointer" onClick={toggleDropdown}>
        <RxHamburgerMenu />
      </div>

      <div className="cursor-pointer">
        <img
          style={{ width: "30px", height: "30px" }}
          src="https://cdn-icons-png.flaticon.com/512/9187/9187604.png"
          alt="User Icon"
        />
      </div>

      {isDropdownOpen && (
        <div className="absolute right-0 transition-shadow p-4 top-3 mt-10 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-10">
          <ul className="py-2 text-sm text-gray-700">
            <Link to="/profile" className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Profile
            </Link>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Settings
            </li>
            <Link
              to="/my"
              className="px-2 py-2 hover:bg-gray-100 cursor-pointer"
            >
              My Products
            </Link>
            {isAuthenticated ? (
              <button
                className="px-4 py-2 mt-6 bg-red-500 rounded-md text-white hover:bg-gray-100 hover:text-black cursor-pointer"
                onClick={() => logout()}
              >
                Logout
              </button>
            ) : (
              <div className="flex flex-col gap-3 p-2">
                <button className="px-4 py-2 bg-red-500 rounded-md text-white transition-all hover:bg-gray-100 hover:text-black cursor-pointer">
                  Signup
                </button>
                <button
                  className="px-4 py-2 bg-red-500 rounded-md text-white transition-all hover:bg-gray-100 hover:text-black cursor-pointer"
                  onClick={() => loginWithRedirect()}
                >
                  Login
                </button>
              </div>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

export default User;
