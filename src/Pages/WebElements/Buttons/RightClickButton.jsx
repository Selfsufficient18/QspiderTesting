import React, { useState } from "react";

const DropdownButton = ({ buttonLabel, options }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleContextMenu = e => {
    e.preventDefault();
    setPosition({ x: e.clientX, y: e.clientY });
    setDropdownVisible(true);
  };

  const handleOptionClick = option => {
    setDropdownVisible(false);
  };

  const closeDropdown = () => {
    setDropdownVisible(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onContextMenu={handleContextMenu}
        onClick={closeDropdown}
        className="rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-orange-500 text-sm font-medium  focus:outline-none text-white"
      >
        {buttonLabel}
      </button>
      {dropdownVisible && (
        <div
          style={{ left: 0, top: "100%", zIndex: 20 }}
          className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
        >
          <div className="py-1">
            {options.map(option => (
              <div
                key={option}
                onClick={() => handleOptionClick(option)}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-100 hover:text-indigo-900 cursor-pointer"
              >
                {option}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownButton;
