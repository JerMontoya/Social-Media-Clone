import React from "react";
import { logout } from "../firebase";
import logo from "../assets/logo.jpg";
import { Link, useNavigate } from "react-router-dom";
import profile from "../assets/profile.png";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <nav className="w-full bg-black/75 backdrop-blur-md px-6 py-4 flex items-center justify-between shadow-lg">
      {/* Left side - Logo + Title */}
      <div className="flex items-center gap-3">
        <img src={logo} alt="Logo" className="h-10 w-10 rounded-full" />
        <h1 className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text text-transparent text-3xl font-bold tracking-wide">
          Tether
        </h1>
        <p className="text-gray-300 text-sm italic mt-1 ml-3">
          stronger together
        </p>
      </div>

      {/* Right side - Nav links + Logout */}
      <ul className="flex items-center gap-6">
        {location.pathname !== "/feed" && (
          <li>
            <Link
              to="/feed"
              className="text-gray-300 hover:text-pink-400 transition"
            >
              Feed
            </Link>
          </li>
        )}
        {location.pathname !== "/profile" && (
          <li className="flex">
            <img
              src={profile}
              alt="avatar"
              className="w-10 h-10 rounded-full border-2 border-pink-400"
            />
            <Link
              to="/profile"
              className="mt-2 mx-1 text-gray-300 hover:text-pink-400 transition"
            >
              Profile
            </Link>
          </li>
        )}
        <button
          onClick={handleLogout}
          className="bg-pink-500 hover:bg-pink-600 text-white font-medium px-4 py-2 rounded-lg transition"
        >
          Logout
        </button>
      </ul>
    </nav>
  );
};

export default Navbar;
