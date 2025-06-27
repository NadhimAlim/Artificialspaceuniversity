import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white sticky top-0 shadow-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Brand Name */}
          <Link to="/" className="text-2xl font-extrabold tracking-tight text-gray-900 no-underline">
            Nadhim <span className="text-blue-600">Alim</span>
          </Link>

          {/* Menu - Desktop */}
          <div className="hidden md:block">
            <div className="ml-auto flex items-center space-x-3">
              <Link
                to="/login"
                className="block px-3 py-2 hover:bg-gray-100 rounded-md no-underline"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="block px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 no-underline"
              >
                Sign Up
              </Link>
            </div>
          </div>

          {/* Toggle Button - Mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-3">
            <div className="px-2 pt-2 space-y-1">
              <Link
                to="/kurikulum"
                className="block px-3 py-2 hover:bg-gray-100 rounded-md"
              >
                Lihat Kurikulum
              </Link>
              <Link
                to="/login"
                className="block px-3 py-2 hover:bg-gray-100 rounded-md"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="block px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Sign Up
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
