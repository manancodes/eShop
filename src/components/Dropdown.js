import React, { useState } from "react";

// Define the available categories
const Categories = ["All Categories", "Category 1", "Category 2"];

const DropDown = ({ variant = "normal" }) => {
  // State for dropdown visibility
  const [showDropDown, setShowDropDown] = useState(false);

  // State for selected category
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  // Toggle dropdown visibility
  const toggleDropDown = () => {
    setShowDropDown((prev) => !prev);
  };

  // Select a category from the dropdown
  const selectCategory = (category) => {
    setSelectedCategory(category);
    setShowDropDown(false);
  };

  return (
    <div className="relative inline-block text-left">
      {/* Category dropdown button */}
      <button
        type="button"
        onClick={toggleDropDown}
        className={`inline-flex items-center justify-center h-full px-4 py-2  ${
          variant === "red" ? "text-xl" : " w-52 text-xl font-extralight"
        }`}
        style={{ color: variant === "red" ? "#fff" : "#000" }}
      >
        {selectedCategory}
        {/* Dropdown icon */}
        <img
          src="/DownArrow.svg"
          alt="Search"
          className={`${
            variant === "red" ? "dark:invert ml-1" : ""
          } p-1 w-9 h-9`}
        />
      </button>

      {/* Dropdown content */}
      <div
        className="absolute right-0 mt-2 bg-white border border-gray-300 z-10"
        style={{ display: showDropDown ? "block" : "none" }}
      >
        {/* Map over categories to create dropdown options */}
        {Categories.map((category) => (
          <div key={category}>
            <button
              className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={() => selectCategory(category)}
            >
              {category}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DropDown;
