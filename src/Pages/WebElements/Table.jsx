import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar";
import { CiMenuKebab } from "react-icons/ci";
import { VscSearch } from "react-icons/vsc";
import { CgProfile } from "react-icons/cg";
import { HiOutlineUserGroup } from "react-icons/hi";
import { PiToolboxBold } from "react-icons/pi";
import { LiaHomeSolid } from "react-icons/lia";
import FormComponent from "../../Components/FormComponent";
import RightSideBar from "../../Components/RightSideBar";
import { Inspector } from "react-inspector";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link, Outlet, useNavigate } from "react-router-dom";
import signup from "./sign.avif";
import Rpanel from "../../Components/rightPanel/Rpanel";
import RpanelForTable from "../../Components/rightPanel/RpanelForTable";

const Table = () => {
  let [clicked, setClicked] = useState(false);

  return (
    <>
      <Navbar />
      <main className="flex h-[669px] bg-gray-300">
        <section className="textbox_contents bg-[#e3e8e7] h-[630px] overflow-hidden">
          <article className="form_content absolute left-[248px] bg-[#e3e8e7] rounded-[20px] top-[70px] ml-[20px] h-[520px] w-[1020px] flex gap-3">
            <aside className="bg-white rounded-md h-[100%] w-[100%] border border-orange-200 shadow-sm shadow-orange-300 p-5 overflow-y-scroll scrollbar scrollbar-w-2 scrollbar-thumb-[#a8a8a8] scrollbar-track-transparent scrollbar-thumb-rounded-md">
              <Outlet />
            </aside>
          </article>

          <article className="scenarios h-[110px] w-[1020px] bg-white  ml-[20px] rounded-t-[20px] absolute bottom-[-10px] left-[248px]">
            <div className="scenarios_1 ">
              <p className="text-[18px] font-bold p-[1px] px-8">Scenarios</p>
            </div>
            <div className="scenarios_2 bg-slate-100 w-[99%]  h-[69.5px] mx-auto my-0">
              <main className="relative top-1 flex flex-col gap-1">
                <aside className="bg-[white]  m-[1px] w-[99%] mx-auto my-0 flex justify-between items-center h-[30px]">
                  <p className="text-[15px] font-semibold text-slate-500 px-4">
                    How to enter data into Text field ?
                  </p>
                  <CiMenuKebab />
                </aside>
                <aside className="bg-[white]  m-[1px] w-[99%] mx-auto my-0 flex justify-between items-center  h-[30px]">
                  <p className="text-[15px] font-semibold text-slate-500  px-4">
                    How to Enter data into text field which is having same
                    attributes as other text field ?
                  </p>
                  <CiMenuKebab />
                </aside>
              </main>
            </div>
          </article>

          <div>
            <RpanelForTable />
          </div>
        </section>
      </main>
    </>
  );
};

export default Table;
