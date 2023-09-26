import React from "react";
import Navbar from "../../Components/Navbar";
import { CiMenuKebab } from "react-icons/ci";
import { Outlet } from "react-router-dom";
import DropdownRightPanel from './../../Components/rightPanel/DropdownRightPanel';
import DdSc from "./Scenarios/DdSc";

const Dropdown = () => {
  return (
    <>
      <Navbar />
      <main className="flex h-[669px] bg-gray-300">
        <section className="textbox_contents bg-[#e3e8e7] h-[630px] overflow-hidden">
          <article className="form_content absolute left-[248px] bg-[#e3e8e7] rounded-[20px] top-[70px] ml-[20px] h-[520px] w-[1020px] flex gap-3">
            <aside className="bg-white rounded-md h-[100%] w-[100%] border border-orange-200 shadow-sm shadow-orange-300 p-5 overflow-y-scroll scrollbar scrollbar-w-2 scrollbar-thumb-[#c7c5c5] scrollbar-track-transparent scrollbar-thumb-rounded-md">
              <Outlet />
            </aside>
          </article>

        <DdSc />

          <div>
            <DropdownRightPanel />
          </div>
        </section>
      </main>
    </>
  );
};

export default Dropdown;
