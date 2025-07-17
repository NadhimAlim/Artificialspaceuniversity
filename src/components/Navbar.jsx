import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white sticky top-0 shadow-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <Link
            to="/"
            className="text-2xl font-extrabold tracking-tight text-gray-900 no-underline"
          >
            Nadhim <span className="text-blue-600">Alim</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <NavItem to="/news" label="News" />
            <NavItem to="/login" label="Login" />
            <Link
              to="/register"
              className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition duration-200 no-underline"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6 text-gray-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-2 pb-4 space-y-2">
            <NavItem to="/news" label="News" mobile />
            <NavItem to="/login" label="Login" mobile />
            <Link
              to="/register"
              className="block w-full px-3 py-2 text-center bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200"
            >
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

// Komponen kecil untuk link menu
const NavItem = ({ to, label, mobile }) => (
  <Link
    to={to}
    className={`${
      mobile ? "block w-full text-left" : ""
    } px-3 py-2 rounded-md hover:bg-gray-100 text-gray-800 no-underline transition duration-200`}
  >
    {label}
  </Link>
);

export default Navbar;


