import React, { useState } from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import { IoCaretDown } from "react-icons/io5";

const Button = () => {
  //! State for mainlist
  const [activeTab, setActiveTab] = useState(0);
  //! State to check the sublist
  const [selectedSublist, setSelectedSublist] = useState(0);
  let [sidebar, setSidebar] = useState(true);

  //! function to handle the mainlist
  const handleTabClick = index => {
    setActiveTab(index);
  };

  //! function to handle the click on sublist items
  const handleSublistItemClick = index => {
    setSelectedSublist(index);
  };

  const handleSidebar = () => {
    return setSidebar(!sidebar);
  };
  let modeList = [
    {
      mode: "Enabled Mode",
      icon: "",
      subMode: [
        { subModeOption: "With tooltip" },
        { subModeOption: "Without tooltip" },
        { subModeOption: "With right click" },
        { subModeOption: "With double click" },
        { subModeOption: "With normal click" },
        { subModeOption: "Enabled after delay" },
      ],
    },
    {
      mode: "Disabled Mode",
      icon: "",
      subMode: [
        { subModeOption: "With tooltip" },
        { subModeOption: "Without tooltip" },
        { subModeOption: "With right click" },
        { subModeOption: "With double click" },
        { subModeOption: "With normal click" },
      ],
    },
  ];

  let locatorList = [
    { locName: "By Id", icon: "" },
    { locName: "By Name", icon: "" },
    { locName: "By Tag Name", icon: "" },
    { locName: "By Class Name", icon: "" },
    { locName: "By Css selector", icon: "" },
    { locName: "By xpath", icon: "" },
    { locName: "Any Type", icon: "" },
  ];
  return (
    <div className="flex gap-5 w-[100%] ">
      <section className="flex justify-center shadow-xl shadow-slate-300 rounded-lg w-[80%] py-3 gap-10">
        <aside className=" p-5 w-[50%]">
          <article className="bg-white p-5 rounded-xl shadow-xl pb-2">
            <section className="border-b-[1px] border-slate-300 pb-2">
              <button
                className="bg-gradient-to-r from-green-300 to-blue-300 rounded-sm py-2 px-3 text-slate-700 font-semibold mx-5"
                title="This is a tooltip"
                onClick={() => alert("Thank You For Clicking On Me.")}
              >
                Click Me
              </button>
              <button
                className="bg-gradient-to-r from-green-300 to-blue-300 rounded-sm py-2 px-3 disabled:opacity-80"
                disabled
                title="this is a tooltip"
              >
                Click Me
              </button>
            </section>
            <article className="pt-2">
              <button
                className="bg-gradient-to-r from-green-300 to-blue-300 rounded-sm py-2 px-3 text-slate-700 font-semibold mx-5"
                title="This is a tooltip"
                onDoubleClick={() => window.confirm("Double Click")}
              >
                Double Click Me
              </button>
            </article>
          </article>
        </aside>
        <aside className="flex items-end">
          <button className="bg-gradient-to-r from-orange-400 to-orange-600 py-1 px-2 text-white shadow-md">
            View Source
          </button>
        </aside>
      </section>

      <section
        className={`w-[20%] relative transition-transform shadow-xl shadow-slate-300 rounded-lg py-2 ps-5 pe-0  ${
          sidebar ? "-translate-x-[0]" : "translate-x-[100%]"
        }`}
      >
        <div
          className={`rounded-full h-5 w-5 bg-orange-400 text-white flex justify-center items-center absolute top-[15%] ${
            sidebar ? "right-[96%]" : "right-[110%]"
          } cursor-pointer shadow-md`}
          onClick={handleSidebar}
        >
          {sidebar ? <AiOutlineRight /> : <AiOutlineLeft />}
        </div>
        <section className="">
          <h3 className="font-bold pb-1 border-b-[1px]">Examples</h3>
          <ul className="pt-2 pe-5">
            {modeList &&
              modeList?.length &&
              modeList?.map((ele, index) => {
                return (
                  <React.Fragment key={ele.mode}>
                    <li
                      className={`relative flex items-center ps-4 ${
                        index === activeTab
                          ? "bg-gradient-to-r from-orange-400 to-orange-600 text-white"
                          : ""
                      } rounded-s-full py-1 mt-1 cursor-pointer`}
                      onClick={() => handleTabClick(index)}
                    >
                      <section></section>
                      <section className="pe-3">{ele.mode}</section>
                      <section>
                        <IoCaretDown />
                      </section>
                    </li>
                    <div className="w-[100%]">
                      {activeTab !== null && activeTab === index && (
                        <ul className="mt-1 ps-3">
                          {modeList[activeTab].subMode.map((subEle, index) => (
                            <li
                              key={index}
                              className={`py-1 ps-4 cursor-pointer bg-slate-100 border-b-[1px] ${
                                index === selectedSublist
                                  ? "bg-gradient-to-r from-orange-200 to-orange-300"
                                  : ""
                              }`}
                              onClick={() => handleSublistItemClick(index)}
                            >
                              <p className="text-black text-xs">
                                {subEle.subModeOption}
                              </p>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </React.Fragment>
                );
              })}
          </ul>
        </section>
        <section className="mt-2">
          <h3 className="font-bold pb-1 border-b-[1px]">Locators</h3>
          <ul className="pt-2 pe-5">
            {locatorList &&
              locatorList?.length &&
              locatorList?.map((ele, index) => {
                return (
                  <React.Fragment key={ele.locName}>
                    <li
                      className={`relative flex items-center ps-4 ${
                        index === activeTab
                          ? "bg-gradient-to-r from-orange-400 to-orange-600 text-white"
                          : ""
                      } rounded-s-full cursor-pointer`}
                      onClick={() => handleTabClick(index)}
                    >
                      <section></section>
                      <section className="pe-3">{ele.locName}</section>
                      <section>{/* <IoCaretDown /> */}</section>
                    </li>
                  </React.Fragment>
                );
              })}
          </ul>
        </section>
      </section>
    </div>
  );
};

export default Button;
