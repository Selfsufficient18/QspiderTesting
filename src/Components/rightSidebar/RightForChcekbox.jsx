import React, { useContext, useEffect, useState } from "react";
import { VscSearch } from "react-icons/vsc";
import { CgProfile } from "react-icons/cg";
import { HiOutlineUserGroup } from "react-icons/hi";
import { PiToolboxBold } from "react-icons/pi";
import { LiaHomeSolid } from "react-icons/lia";
import { FaAngleDown } from "react-icons/fa";
import { ContextProvider } from "../../contextApi/GlobalContext";
import { Link } from "react-router-dom";

const RightForChcekbox = () => {
  let [clicked, setClicked] = useState(false);

  let {
    place,
    handlePlace,
    notplace,
    handleNotPlace,
    tool,
    handleTool,
    nottool,
    handleNotTool,
    tarea,
    handleArea,
    disabled,
    handleDisabled,
    enabled,
    handleEnabled,
  } = useContext(ContextProvider);

  return (
    <>
      <aside className=" w-[100%] pt-3 relative top-[50px]">
        <div className="h-[43vh] bg-white rounded-tl-[20px] rounded-bl-[20px] pl-5 pr-6 pt-3 overflow-y-scroll scrollbar scrollbar-w-2 scrollbar-thumb-[#c7c5c5] scrollbar-track-transparent scrollbar-thumb-rounded-md shadow-lg border border-slate-300">
          <p className="font-bold border-b-2 border-solid text-[20px] ">
            Examples
          </p>
          <ul className="text-[15px] font-semibold mt-2 flex flex-col gap-1">
            <div
              className='w-[185px] text-black flex justify-between items-center py-1 px-2 cursor-pointer poppins after:content-[""] after:p-[1px] after:py-2 after:w-1 after:rounded-md after:bg-orange-400 after:h-5 after:block'
              onClick={handleEnabled}
            >
              <Link to={"/checkbox"} className="font-bold">
                Default
              </Link>
            </div>

            
          </ul>
        </div>
        <div className="h-[46vh] bg-white mt-3 rounded-tl-[20px] rounded-bl-[20px] p-5 overflow-y-scroll scrollbar scrollbar-w-2 scrollbar-thumb-[#c7c5c5] scrollbar-track-transparent scrollbar-thumb-rounded-md shadow-lg border border-slate-300">
          <p className="font-bold border-b-2 border-solid text-[18px]">
            Locators
          </p>
          <ul className=" text-[15px] text-[#4a4a4aee] flex flex-col gap-3 mt-3 ml-3 text-slate-500 font-bold ">
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

            <li className="flex justify-between items-center">
              <span>By Xpath</span>
              <span>
                <HiOutlineUserGroup />
              </span>
            </li>
            <li className="flex justify-between items-center">
              <span>Any Type</span>
              <span>
                <LiaHomeSolid />
              </span>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default RightForChcekbox;
