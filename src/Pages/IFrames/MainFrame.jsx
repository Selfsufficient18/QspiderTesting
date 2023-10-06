import React, { useContext } from "react";
import Rpanel from "../../Components/rightPanel/Rpanel";
import { CiMenuKebab } from "react-icons/ci";
import { Outlet } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import RpanelForChcekbox from "../../Components/rightPanel/RpanelForChexkbox";
import { ContextProvider } from "../../contextApi/GlobalContext";
import Scheckbox from './../WebElements/Scenarios/Scheckbox';

const notify = () => toast.success("Successfully Submitted!");
const MainFrame = () => {
  let handleSubmit = e => {
    e.preventDefault();
  };

  let { CBgetScDrop } = useContext(ContextProvider);
  return (
    <>
      <main className="flex  h-[669px] bg-gray-300">
        <section className="textbox_contents bg-[#e3e8e7] h-[630px] overflow-hidden">
          <article className="form_content absolute left-[248px] bg-[#e3e8e7] rounded-[20px] top-[70px] ml-[20px] h-[520px] w-[1020px] flex gap-3">
            <Toaster />
            <section className="absolute top-[-10px] left-[10%] bg-orange-500 w-[80%] p-[8px] px-10 rounded-3xl text-white font-bold capitalize text-[14px] flex justify-center items-center z-20">
              <p>{CBgetScDrop}</p>
            </section>
            <aside className="bg-white rounded-md h-[100%] w-[100%] border border-orange-200 shadow-sm shadow-orange-300 p-5 overflow-y-scroll scrollbar scrollbar-w-2 scrollbar-thumb-[#c7c5c5] scrollbar-track-transparent scrollbar-thumb-rounded-md flex justify-center items-center">
              <Outlet />
            </aside>
          </article>

          <Scheckbox />

          <div>
            <RpanelForChcekbox />
          </div>
        </section>
      </main>
    </>
  );
};

export default MainFrame;
