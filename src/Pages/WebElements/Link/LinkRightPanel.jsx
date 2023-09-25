import React, { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { HiOutlineUserGroup } from "react-icons/hi";
import { LiaHomeSolid } from "react-icons/lia";
import { PiToolboxBold } from "react-icons/pi";
import { VscSearch } from "react-icons/vsc";
import { Link } from "react-router-dom";

const LinkRightPanel = () => {
  let [sidebar, setSidebar] = useState(true);
  const [selectedSublist, setSelectedSublist] = useState(0);

  //! function to handle the right panel
  const handleSidebar = () => {
    return setSidebar(!sidebar);
  };

  //! List for making the right upper panel
  let exampleList = [
    { listName: "Default Link", path: "link" },
    { listName: "Link in New Tab", path: "button/buttonRightClick" },
    { listName: "Link gives 1XX", path: "button/buttonDoubleClick" },
    { listName: "Link gives 2XX", path: "button/buttonSubmitClick" },
    { listName: "Link gives 3XX", path: "button/buttonDisabled" },
    { listName: "Link gives 4XX", path: "button/buttonDisabled" },
    { listName: "Link gives 5XX", path: "button/buttonDisabled" },
  ];

  //! function to handle the click on sublist items
  const handleSublistItemClick = index => {
    setSelectedSublist(index);
  };
  return (
    <section
      className={`border h-[100vh] top-0 absolute z-[2000] right-0 bg-white ps-3  w-[235px] rounded-s-[25px] shadow-lg transition-all duration-700 ${
        sidebar ? "translate-x-0 " : "translate-x-[100%] "
      }`}
    >
      <div
        className={`rounded-full h-5 w-5 bg-orange-400 text-white flex justify-center items-center absolute top-[7.5%] ${
          sidebar ? "right-[95%]" : "right-[102%]"
        } cursor-pointer shadow-md`}
        onClick={handleSidebar}
      >
        {!sidebar ? <AiOutlineLeft /> : <AiOutlineRight />}
      </div>
      <div className="pt-16">
        <div className="h-[43vh] bg-white rounded-tl-[20px] rounded-bl-[20px] pl-5 pr-6 pt-3 overflow-y-scroll scrollbar scrollbar-w-2 scrollbar-thumb-[#c7c5c5] scrollbar-track-transparent scrollbar-thumb-rounded-md shadow-lg border border-slate-300">
          <p className="font-bold border-b-2 border-solid text-[20px]">
            Examples
          </p>
          <ul>
            {exampleList &&
              exampleList.length &&
              exampleList.map((ele, index) => {
                return (
                  <React.Fragment key={ele.listName}>
                    <li
                      className={` ${
                        index === selectedSublist
                          ? 'w-[185px] text-black flex justify-between items-center py-1 px-2 cursor-pointer poppins after:content-[""] after:p-[1px] after:py-2 after:w-1 after:rounded-md after:bg-orange-400 after:h-5 after:block '
                          : "w-[185px] flex justify-between items-center py-1  cursor-pointer poppins px-2"
                      } flex items-center`}
                      onClick={() => handleSublistItemClick(index)}
                    >
                      <Link
                        to={`/${ele.path}`}
                        className="ps-3 pe-8 py-1 font-semibold flex items-center justify-between w-full"
                      >
                        {ele.listName}
                      </Link>
                    </li>
                  </React.Fragment>
                );
              })}
          </ul>
        </div>
        <div className="h-[46vh] bg-white mt-3 rounded-tl-[20px] rounded-bl-[20px] p-5 overflow-y-scroll scrollbar scrollbar-w-2 scrollbar-thumb-[#c7c5c5] scrollbar-track-transparent scrollbar-thumb-rounded-md shadow-lg border border-slate-300">
          <p className="font-bold border-b-2 border-solid text-[18px]">
            Locators
          </p>
          <ul className="poppins text-[15px] text-[#4a4a4aee] flex flex-col gap-3 mt-3 ml-3 text-slate-500 font-bold ">
            <li className="flex justify-between items-center ">
              <span>By ID</span>
              <span>
                <VscSearch />
              </span>
            </li>
            <li className="flex justify-between items-center">
              <span>By Name</span>
              <span>
                <CgProfile />
              </span>
            </li>
            <li className="flex justify-between items-center">
              <span>By ClassName</span>
              <span>
                <HiOutlineUserGroup />
              </span>
            </li>
            <li className="flex justify-between items-center">
              <span>By TagName</span>
              <span>
                <PiToolboxBold />
              </span>
            </li>
            {/* <li className="flex justify-between items-center">
              <span>By CssSelector</span>
              <span>
                <HiOutlineUserGroup />
              </span>
            </li> */}
            <li className="flex justify-between items-center">
              <span>By Xpath</span>
              <span>
                <HiOutlineUserGroup />
              </span>
            </li>
            {/* <li className="flex justify-between items-center">
              <span>Any Type</span>
              <span>
                <LiaHomeSolid />
              </span>
            </li> */}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default LinkRightPanel;
