import React, { useState } from "react";

import SubNav from "./SubNav";
import DropDown from "./Dropdown";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="w-screen">
      <div className="flex items-center justify-between m-4 md:m-10 lg:m-16">
        {/* Logo on the left */}
        <div className="flex-shrink-0 relative">
          <img
            src="/eSHOP.svg"
            alt="Logo"
            className="sm:w-32 sm:h-14 w-20 h-10"
          />
        </div>

        {/* Search bar in the middle on desktop */}
        <div className="w-1/2 relative border-2 border-neutral-400 md:mx-8 hidden lg:flex">
          <input
            type="text"
            placeholder="Search products"
            className="w-full pl-8 py-5 border focus:outline-none"
          />
          <DropDown />
          {/* Search button */}
          <button
            type="button"
            className="px-4 py-2 m-1 text-sm w-16  text-white bg-neutral-800"
          >
            <img src="/Search.svg" alt="Search" />
          </button>
        </div>

        <div className="flex items-center justify-center gap-1 sm:gap-3">
          {/* Search icon on mobile */}
          <div className="lg:hidden relative ">
            <img
              src="/SearchDark.svg"
              alt="Search"
              className="dark p-1 w-7 h-7 sm:w-9 sm:h-9"
            />
          </div>

          {/* Login and Signup */}

          {/* Desktop */}
          <div className="text-neutral-900 text-xl font-extralight hidden lg:block">
            Login<span className="text-neutral-200"> | </span>Signup
          </div>
          {/* Mobile */}
          <div className="lg:hidden relative">
            <img
              src="/User.svg"
              alt="Heart"
              className="dark p-1 w-7 h-7 sm:w-9 sm:h-9"
            />
          </div>

          <div className="relative w-7 h-7 sm:w-9 sm:h-9">
            <img
              src="/Heart.svg"
              alt="Heart"
              className="dark p-1 w-7 h-7 sm:w-9 sm:h-9"
            />
          </div>

          <div className="relative w-7 h-7 sm:w-9 sm:h-9">
            <img
              src="/Cart.svg"
              alt="Cart"
              className="dark p-1 w-7 h-7 sm:w-9 sm:h-9"
            />
          </div>

          <button
            type="button"
            className="flex justify-center items-center m-1 text-sm w-10 h-10 sm:w-16 sm:h-16 text-white lg:hidden"
            onClick={toggleMenu}
            style={{ background: "#e73c17" }}
          >
            <div className="relative ">
              <img
                src="/Menu.svg"
                alt="Search"
                className="w-6 h-6 sm:w-12 sm:h-12"
              />
            </div>
          </button>
        </div>
      </div>
      <SubNav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </nav>
  );
};

export default Navbar;
