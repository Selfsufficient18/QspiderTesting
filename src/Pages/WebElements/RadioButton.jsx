import React, { useContext } from "react";
import Rpanel from "../../Components/rightPanel/Rpanel";
import { CiMenuKebab } from "react-icons/ci";
import { Outlet } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import RpanelForRadio from "../../Components/rightPanel/RpanelForRadio";
import Sradio from "./Scenarios/Sradio";
import { ContextProvider } from "../../contextApi/GlobalContext";

const RadioButton = () => {

    let {
      RClickedForDrop,
      setRclcikedDrop,
      RgetScDrop,
      setRGetscDrop,
      handleGetRDrop,
    } = useContext(ContextProvider);

  return (
    <>
      <main className="flex  h-[669px] bg-gray-300">
        <section className="textbox_contents bg-[#e3e8e7] h-[630px] overflow-hidden">
          <article className="form_content absolute left-[248px] bg-[#e3e8e7] rounded-[20px] top-[70px] ml-[20px] h-[520px] w-[1020px] flex gap-3">
            <Toaster position="top-center" reverseOrder={false}></Toaster>
            <section className="absolute top-[-10px] left-[10%] bg-orange-500 w-[80%] p-[8px] px-10 rounded-3xl text-white font-bold capitalize text-[14px] flex justify-center items-center z-20">
              <p>{RgetScDrop}</p>
            </section>
            <aside className="bg-white rounded-md h-[100%] w-[100%] border border-orange-200 shadow-sm shadow-orange-300 p-5 overflow-y-scroll scrollbar scrollbar-w-2 scrollbar-thumb-[#a8a8a8] scrollbar-track-transparent scrollbar-thumb-rounded-md">
              <Outlet />
            </aside>
          </article>

          <Sradio />

          <div>
            <RpanelForRadio />
          </div>
        </section>
      </main>
    </>
  );
};

export default RadioButton;