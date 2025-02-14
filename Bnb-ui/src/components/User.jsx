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

  const { user, loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return (
    <div
      ref={dropdownRef}
      className="relative border-2 flex flex-row gap-5 border-slate-300 p-2 px-5 rounded-badge"
    >
      <div className=" mt-2 cursor-pointer" onClick={toggleDropdown}>
        <RxHamburgerMenu />
      </div>

      <div className="cursor-pointer">
        <img
          style={{ width: "30px", height: "30px" }}
          className="rounded-full"
          src={
            user?.picture ||
            "https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
          }
          alt="User Icon"
        />
      </div>

      {isDropdownOpen && (
        <div className="absolute right-0 top-12 w-48 p-2 bg-white border border-gray-300 rounded-lg shadow-xl z-50">
          <ul className="py-2 text-sm text-gray-700">
            <Link
              to="/profile"
              className="block px-4 py-2 hover:bg-gray-100 hover:text-blue-600 transition rounded-md"
            >
              Profile
            </Link>
            <li className="block px-4 py-2 hover:bg-gray-100 hover:text-blue-600 transition rounded-md cursor-pointer">
              Settings
            </li>
            <Link
              to="/my"
              className="block px-4 py-2 hover:bg-gray-100 hover:text-blue-600 transition rounded-md"
            >
              My Products
            </Link>
            <div className="border-t border-gray-200 my-2"></div>

            {isAuthenticated ? (
              <button
                className="w-full px-4 py-2 text-center bg-red-500 text-white font-medium rounded-md hover:bg-red-600 transition"
                onClick={() => logout()}
              >
                Logout
              </button>
            ) : (
              <div className="flex flex-col gap-2 px-2">
                <button className="w-full px-4 py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 transition">
                  Signup
                </button>
                <button
                  className="w-full px-4 py-2 bg-green-500 text-white font-medium rounded-md hover:bg-green-600 transition"
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
