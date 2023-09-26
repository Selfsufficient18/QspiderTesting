import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoCaretDown, IoCaretUp } from "react-icons/io5";

//! importing icons from the assets
import table from "../assets/icons/table.png";
import textbox from "../assets/icons/textbox.png";
import button from "../assets/icons/button.png";
import check from "../assets/icons/check.png";
import dropdown from "../assets/icons/dropdown.png";
import external from "../assets/icons/external.png";
import radio from "../assets/icons/radio.png";

const SidebarBody = () => {
  //! State for mainlist
  const [activeTab, setActiveTab] = useState(0);
  //! State to check the sublist
  const [selectedSublist, setSelectedSublist] = useState(0);

  //! function to handle the mainlist
  const handleTabClick = index => {
    setActiveTab(index);
  };

  //! function to handle the click on sublist items
  const handleSublistItemClick = index => {
    setSelectedSublist(index);
  };

  //! List for the sidebar
  let linkData = [
    {
      linkName: "Web Elements",
      icon: "",
      linkTo: "/",
      subList: [
        { subliName: "Text Box", subliIcon: textbox, subliTo: "", path: "text" },
        { subliName: "Button", subliIcon: button, subliTo: "", path: "button" },
        { subliName: "Link", subliIcon: external, subliTo: "", path:"link" },
        {
          subliName: "Web Table",
          subliIcon: table,
          subliTo: "",
          path: "table",
        },
        { subliName: "Dropdown", subliIcon: dropdown, subliTo: "", path:"dropdown" },
        {
          subliName: "Check Box",
          subliIcon: check,
          subliTo: "",
          path: "checkbox",
        },
        {
          subliName: "Radio Button",
          subliIcon: radio,
          subliTo: "",
          path: "radio",
        },
      ],
    },
    {
      linkName: "Form",
      icon: "",
      linkTo: "/",
      subList: [{ subliName: "Text Box", subliIcon: "", subliTo: "" }],
    },
    {
      linkName: "Date-Picker",
      icon: "",
      linkTo: "/",
      subList: [{ subliName: "Text Box", subliIcon: "", subliTo: "" }],
    },
    {
      linkName: "Alerts",
      icon: "",
      linkTo: "/",
      subList: [{ subliName: "Text Box", subliIcon: "", subliTo: "" }],
    },
    {
      linkName: "Synchronization",
      icon: "",
      linkTo: "/",
      subList: [{ subliName: "Text Box", subliIcon: "", subliTo: "" }],
    },
    {
      linkName: "Drag And Drop",
      icon: "",
      linkTo: "/",
      subList: [{ subliName: "Text Box", subliIcon: "", subliTo: "" }],
    },
    {
      linkName: "Frames",
      icon: "",
      linkTo: "/",
      subList: [{ subliName: "Text Box", subliIcon: "", subliTo: "" }],
    },
    {
      linkName: "Shadow Root Elements",
      icon: "",
      linkTo: "/",
      subList: [{ subliName: "Text Box", subliIcon: "", subliTo: "" }],
    },
    {
      linkName: "Graph element",
      icon: "",
      linkTo: "/",
      subList: [{ subliName: "Text Box", subliIcon: "", subliTo: "" }],
    },
    {
      linkName: "Practice Page",
      icon: "",
      linkTo: "/",
      subList: [{ subliName: "Text Box", subliIcon: "", subliTo: "" }],
    },
    {
      linkName: "Discuss With us...",
      icon: "",
      linkTo: "/",
      subList: [{ subliName: "Text Box", subliIcon: "", subliTo: "" }],
    },
  ];

  return (
    <div className="overflow-y-scroll w-full h-[82vh] scrollbar scrollbar-w-2 scrollbar-thumb-[#a8a8a8] scrollbar-track-transparent scrollbar-thumb-rounded-md">
      <ul className="pt-2 pe-5">
        {linkData &&
          linkData?.length &&
          linkData?.map((ele, index) => {
            return (
              <React.Fragment key={ele.linkName}>
                <li
                  className={`relative flex items-center justify-between  ps-5 pe-5 ${
                    index === activeTab
                      ? "bg-gradient-to-r from-orange-400 to-orange-600 text-white"
                      : ""
                  } rounded-e-full py-1 mt-1 cursor-pointer`}
                  onClick={() => handleTabClick(index)}
                >
                  <section>{ele.linkName}</section>
                  <section>
                    {activeTab === index ? <IoCaretUp /> : <IoCaretDown />}
                  </section>
                </li>
                <div className="w-[100%]">
                  {activeTab !== null && activeTab === index && (
                    <ul className="mt-1 ps-10 pe-4">
                      {linkData[activeTab].subList.map((subEle, index) => (
                        <li
                          key={index}
                          className="no-use relative"
                          onClick={() => handleSublistItemClick(index)}
                        >
                          <NavLink
                            to={`/${subEle.path}`}
                            // className="ps-3 pe-8 py-1 font-semibold flex items-center justify-between w-full"
                            className={({ isActive }) =>
                              isActive
                                ? 'realtive before:content-[""] before:p-[1px] before:py-2 before:w-1 before:rounded-md before:bg-orange-400 before:h-5 before:block before:absolute before:left-0 flex items-center ps-3 pe-8 py-1 font-semibold justify-between w-full'
                                : "ps-3 pe-8 py-1 font-semibold flex items-center justify-between w-full"
                            }
                          >
                            <section>{subEle.subliName}</section>
                            <section className="ps-3">
                              <img
                                src={subEle.subliIcon}
                                className="h-4 w-4"
                                alt=""
                              />
                            </section>
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </React.Fragment>
            );
          })}
      </ul>
    </div>
  );
};

export default SidebarBody;