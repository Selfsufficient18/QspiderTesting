// // import React, { useState } from "react";

// // const DropdownButton = ({ buttonLabel, options }) => {
// //   const [dropdownVisible, setDropdownVisible] = useState(false);
// //   const [position, setPosition] = useState({ x: 0, y: 0 });

// //   const handleContextMenu = e => {
// //     e.preventDefault();
// //     setPosition({ x: e.clientX, y: e.clientY });
// //     setDropdownVisible(true);
// //   };

// //   const handleOptionClick = option => {
// //     setDropdownVisible(false);
// //   };

// //   const closeDropdown = () => {
// //     setDropdownVisible(false);
// //   };

// //   return (
// //     <div className="relative inline-block text-left">
// //       <button
// //         onContextMenu={handleContextMenu}
// //         onClick={closeDropdown}
// //         className={`active:bg-green-400 transition-all duration-300 active:border-green-400 rounded-md mx-1 px-5 py-2 bg-orange-300 border border-orange-600 text-black font-bold`}
// //       >
// //         {buttonLabel}
// //       </button>
// //       {dropdownVisible && (
// //         <div
// //           style={{ left: 0, top: "100%", zIndex: 20 }}
// //           className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
// //         >
// //           <div className="py-1">
// //             {options.map(option => (
// //               <div
// //                 key={option}
// //                 onClick={() => handleOptionClick(option)}
// //                 className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-100 hover:text-indigo-900 cursor-pointer"
// //               >
// //                 {option}
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default DropdownButton;

// import React, { useState } from "react";

// const RightClickButton = ({
//   options,
//   defaultButtonText,
//   onOptionClick,
//   position,
// }) => {
//   const [showContextMenu, setShowContextMenu] = useState(false);
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [buttonText, setButtonText] = useState(
//     defaultButtonText || "Right Click"
//   );

//   const handleContextMenu = e => {
//     e.preventDefault();
//     setShowContextMenu(true);
//     setSelectedOption(null);
//   };

//   const handleOptionClick = option => {
//     setShowContextMenu(false);
//     setSelectedOption(option);

//     if (onOptionClick) {
//       onOptionClick(option);
//     }
//   };

//   const contextMenu = showContextMenu && (
//     <div
//       className="absolute bg-white border rounded shadow-lg p-2 z-20"
//       style={position || { top: "30px", left: "30px" }}
//     >
//       {options.map(option => (
//         <div
//           key={option}
//           className="cursor-pointer hover:bg-gray-200 p-1 "
//           onClick={() => handleOptionClick(option)}
//         >
//           {option}
//         </div>
//       ))}
//     </div>
//   );

//   return (
//     <div className="relative">
//       <button
//         className={`active:bg-green-400 transition-all duration-300 active:border-green-400 rounded-md mx-1 px-5 py-2 text-black font-bold   ${
//           signUp1
//             ? "border-green-400 border transition-all duration-300 bg-green-300"
//             : " bg-orange-300 border border-orange-600"
//         }`}
//         onClick={() => handleOptionClick(defaultButtonText)}
//         onContextMenu={handleContextMenu}
//       >
//         {buttonText}
//       </button>
//       {contextMenu}
//     </div>
//   );
// };

// export default RightClickButton;
