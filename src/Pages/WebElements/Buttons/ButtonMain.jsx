import React from "react";
import { Outlet } from "react-router-dom";
import ButtonRightPanel from "./ButtonRightPanel";
import { CiMenuKebab } from "react-icons/ci";

const ButtonMain = () => {
  return (
    <>
      <main className="flex h-[669px] bg-gray-300">
        <section className="textbox_contents bg-[#e3e8e7] h-[630px] overflow-hidden">
          <article>
            <aside>
              <Outlet />
            </aside>
          </article>

          {/* <article className="scenarios h-[110px] w-[1020px] bg-white  ml-[20px] rounded-t-[20px] absolute bottom-[-10px] left-[248px]">
            <div className="scenarios_1 ">
              <p className="text-[18px] font-bold p-[1px] px-8">Scenarios</p>
            </div>
            <div className="scenarios_2 bg-slate-100 w-[99%]  h-[69.5px] mx-auto my-0">
              <main className="relative top-1 flex flex-col gap-1">
                <aside className="bg-[white]  m-[1px] w-[99%] mx-auto my-0 flex justify-between items-center h-[30px]">
                  <p className="text-[15px] font-semibold text-slate-500 px-4">
                    How to Click On A Submit Button ?
                  </p>
                  <CiMenuKebab />
                </aside>
                <aside className="bg-[white]  m-[1px] w-[99%] mx-auto my-0 flex justify-between items-center  h-[30px]">
                  <p className="text-[15px] font-semibold text-slate-500  px-4">
                    How to verify that Submit Button is Clicked
                  </p>
                  <CiMenuKebab />
                </aside>
              </main>
            </div>
          </article> */}
          <div>
            <ButtonRightPanel />
          </div>
        </section>
      </main>
    </>
  );
};

export default ButtonMain;
