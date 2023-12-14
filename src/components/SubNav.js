import React, { useState } from "react";
import { Link } from "react-router-dom";

import DropDown from "./Dropdown";

const Links = ["Home", "About", "Products", "Pages", "Contact"];

const SubNav = ({ menuOpen, setMenuOpen }) => {
  const [selected, setSelected] = useState("Home");
  return (
    <div className="relative">
      <div
        className={`${
          menuOpen ? "absolute z-10 right-0 shadow-xl " : "hidden"
        }`}
      >
        <div className="flex bg-white p-10 px-20 flex-grow justify-evenly items-center gap-6 flex-col lg:hidden">
          {Links.map((link) => {
            return (
              <span
                onClick={() => {
                  setMenuOpen(false);
                  setSelected(link);
                }}
                className=" uppercase cursor-pointer"
                style={{ color: selected === link ? "#e73c17" : "black" }}
                key={link}
              >
                <Link to="/Products"> {link}</Link>
              </span>
            );
          })}
        </div>
      </div>

      <div className=" justify-between relative bg-neutral-800 hidden lg:flex">
        <div
          className="p-3 flex items-center justify-center lg:w-80 ml-12 md:ml-0 lg:ml-16 xl:ml-24"
          style={{ background: "#e73c17" }}
        >
          <img src="/Categories.svg" alt="Search" className="p-1" />
          <DropDown variant="red" />
        </div>
        <div className=" flex-grow flex justify-evenly items-center gap-3">
          {Links.map((link) => {
            return (
              <span
                onClick={() => {
                  setSelected(link);
                }}
                className=" uppercase cursor-pointer"
                style={{ color: selected === link ? "#e73c17" : "white" }}
                key={link}
              >
                <Link to={`/${link}`}> {link}</Link>
              </span>
            );
          })}
        </div>
        <div className="p-3 flex items-center justify-evenly md:w-60 xl:w-[400px] text-white border-l-2">
          <img src="/Headphones.svg" alt="Search" width={40} height={40} />
          <div>
            <div className=" font-extralight uppercase text-sm">
              Contact Us 24/7
            </div>
            <div className="  uppercase text-lg">+12012987481</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubNav;
