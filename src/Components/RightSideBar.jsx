import React, { useContext, useEffect, useState } from "react";
import { VscSearch } from "react-icons/vsc";
import { CgProfile } from "react-icons/cg";
import { HiOutlineUserGroup } from "react-icons/hi";
import { PiToolboxBold } from "react-icons/pi";
import { LiaHomeSolid } from "react-icons/lia";
import { FaAngleDown } from "react-icons/fa";
import { ContextProvider } from "../contextApi/GlobalContext";

const RightSideBar = () => {
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
    handleEnabled
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
              className={
                !enabled
                  ? "border-b-2 border-solid bg-orange-400 text-white flex justify-around items-center py-1 rounded-tl-full rounded-bl-full cursor-pointer poppins"
                  : "border-b-2 border-solid flex justify-around items-center py-1  rounded-tl-full rounded-bl-full cursor-pointer poppins"
              }
              onClick={handleEnabled}
            >
              <p className="font-bold">Enabled Mode</p>
              <FaAngleDown onClick={handleEnabled} />
            </div>

            {!enabled ? (
              <>
                <li
                  className={
                    place
                      ? "border-b-2 border-solid px-5 py-[2px]  bg-orange-100"
                      : "border-b-2 border-solid px-5 py-[2px]  bg-slate-100"
                  }
                  onClick={handlePlace}
                >
                  With placeholder
                </li>
                <li
                  className={
                    notplace
                      ? "border-b-2 border-solid px-5 py-[2px]  bg-orange-100 scrollbar overflow-x-scroll scrollbar-none whitespace-nowrap"
                      : "border-b-2 border-solid px-5 py-[2px]  bg-slate-100 scrollbar overflow-x-scroll scrollbar-none whitespace-nowrap"
                  }
                  onClick={handleNotPlace}
                >
                  Without placeholder
                </li>
                <li
                  className={
                    tool
                      ? "border-b-2 border-solid px-5 py-[2px]  bg-orange-100"
                      : "border-b-2 border-solid px-5 py-[2px]  bg-slate-100"
                  }
                  onClick={handleTool}
                >
                  With ToolTip
                </li>
                <li
                  className={
                    nottool
                      ? "border-b-2 border-solid px-5 py-[2px]  bg-orange-100"
                      : "border-b-2 border-solid px-5 py-[2px]  bg-slate-100"
                  }
                  onClick={handleNotTool}
                >
                  Without ToolTip
                </li>
                <li
                  className={
                    !tarea
                      ? "border-b-2 border-solid px-5 py-[2px]  bg-orange-100 scrollbar overflow-x-scroll scrollbar-none whitespace-nowrap"
                      : "border-b-2 border-solid px-5 py-[2px]  bg-slate-100 scrollbar overflow-x-scroll scrollbar-none whitespace-nowrap"
                  }
                  onClick={handleArea}
                >
                  Resizable Text Area
                </li>
              </>
            ) : (
              ""
            )}

            <div
              className={
                disabled
                  ? "border-b-2 border-solid bg-orange-400 text-white flex justify-around items-center py-1 rounded-tl-full rounded-bl-full poppins"
                  : "border-b-2 border-solid flex justify-around items-center py-1 rounded-tl-full rounded-bl-full poppins"
              }
              onClick={handleDisabled}
            >
              <p className="font-bold">Disabled Mode</p>
              <FaAngleDown onClick={handleDisabled} />
            </div>
            {disabled ? (
              <>
                <li
                  className={
                    place
                      ? "border-b-2 border-solid px-5 py-[2px]  bg-orange-100 scrollbar overflow-x-scroll scrollbar-none whitespace-nowrap"
                      : "border-b-2 border-solid px-5 py-[2px]  bg-slate-100 scrollbar overflow-x-scroll scrollbar-none whitespace-nowrap"
                  }
                  onClick={handlePlace}
                >
                  With placeholder
                </li>
                <li
                  className={
                    notplace
                      ? "border-b-2 border-solid px-5 py-[2px]  bg-orange-100 scrollbar overflow-x-scroll scrollbar-none whitespace-nowrap"
                      : "border-b-2 border-solid px-5 py-[2px]  bg-slate-100 scrollbar overflow-x-scroll scrollbar-none whitespace-nowrap"
                  }
                  onClick={handleNotPlace}
                >
                  Without placeholder
                </li>
                <li
                  className={
                    tool
                      ? "border-b-2 border-solid px-5 py-[2px]  bg-orange-100 scrollbar overflow-x-scroll scrollbar-none whitespace-nowrap"
                      : "border-b-2 border-solid px-5 py-[2px]  bg-slate-100 scrollbar overflow-x-scroll scrollbar-none whitespace-nowrap"
                  }
                  onClick={handleTool}
                >
                  With ToolTip
                </li>
                <li
                  className={
                    nottool
                      ? "border-b-2 border-solid px-5 py-[2px]  bg-orange-100 scrollbar overflow-x-scroll scrollbar-none whitespace-nowrap"
                      : "border-b-2 border-solid px-5 py-[2px]  bg-slate-100 scrollbar overflow-x-scroll scrollbar-none whitespace-nowrap"
                  }
                  onClick={handleNotTool}
                >
                  Without ToolTip
                </li>
                <li
                  className={
                    !tarea
                      ? "border-b-2 border-solid px-5 py-[2px]  bg-orange-100 scrollbar overflow-x-scroll scrollbar-none whitespace-nowrap"
                      : "border-b-2 border-solid px-5 py-[2px]  bg-slate-100 scrollbar overflow-x-scroll scrollbar-none whitespace-nowrap"
                  }
                  onClick={handleArea}
                >
                  Resizable Text Area
                </li>
              </>
            ) : (
              ""
            )}
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

export default RightSideBar;
