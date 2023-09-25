import React from "react";
import { Outlet } from "react-router-dom";
import { CiMenuKebab } from "react-icons/ci";
import LinkRightPanel from "./LinkRightPanel";

const LinkMain = () => {
  return (
    <>
      <main className="flex h-[669px] bg-gray-300">
        <section className="textbox_contents bg-[#e3e8e7] h-[630px] overflow-hidden">
          <article className="form_content absolute left-[248px] bg-orange-200 rounded-[20px] top-[70px] ml-[20px] h-[520px] w-[1020px] flex gap-3">
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
                    How to Click On A Link Text ?
                  </p>
                  <CiMenuKebab />
                </aside>
                <aside className="bg-[white]  m-[1px] w-[99%] mx-auto my-0 flex justify-between items-center  h-[30px]">
                  <p className="text-[15px] font-semibold text-slate-500  px-4">
                    How to Click on a link text that will open in a new tab?
                  </p>
                  <CiMenuKebab />
                </aside>
              </main>
            </div>
          </article>
          <div>
            <LinkRightPanel />
          </div>
        </section>
      </main>
    </>
  );
};

export default LinkMain;
