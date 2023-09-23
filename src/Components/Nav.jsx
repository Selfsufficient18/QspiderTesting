import React, { useEffect, useRef, useState } from "react";

import { IoCaretDown } from "react-icons/io5";
import { IoCaretUp } from "react-icons/io5";

//! Common Styles css
// import "./commonStyles.css";

const Navbar = () => {
  //! State to handle the dropdown in test
  let [isOpen, setIsOpen] = useState(false);

  //! ref to directly access the dropdown list
  const dropdownRef = useRef(null);

  //! function to handle the dropdown
  const toggleDropdown = () => {
    return setIsOpen(!isOpen);
  };

  //! function to handle dropdown when clicked outside
  const handleClickOutside = event => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // Add event listener when the component mounts
    document.addEventListener("mousedown", handleClickOutside);

    // Remove event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className=" bg-gray-800  h-12">
      
    </div>
  );
};

export default Navbar;
