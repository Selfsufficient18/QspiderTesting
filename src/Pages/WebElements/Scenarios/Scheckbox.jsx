import React, { useContext, useRef } from "react";
import { ContextProvider } from "../../../contextApi/GlobalContext";
import { CiMenuKebab } from "react-icons/ci";

const Scheckbox = () => {
  let {
    CBClickedForDrop,
    setCBclcikedDrop,
    CBgetScDrop,
    setCBGetscDrop,
    handleCBetRDrop,
  } = useContext(ContextProvider);

  let Rfref = useRef();
  let Rsref = useRef();
  return (
    <>
      <article className="scenarios h-[110px] w-[1020px] bg-white  ml-[20px] rounded-t-[20px] absolute bottom-[-10px] left-[248px]">
        <div className="scenarios_1 ">
          <p className="text-[18px] font-bold p-[1px] px-8">Scenarios</p>
        </div>
        <div className="scenarios_2 bg-slate-100 w-[99%]  h-[69.5px] mx-auto my-0">
          <main className="relative top-1 flex flex-col gap-1 overflow-y-scroll scrollbar-w-2 scrollbar scrollbar-thumb-rounded-md scrollbar-track-transparent scrollbar-thumb-[#c7c5c5]">
            <aside className="bg-[white]  m-[1px] w-[99%] mx-auto my-0 flex justify-between items-center h-[30px]">
              <p
                className={
                  CBClickedForDrop
                    ? `text-[15px] font-semibold text-slate-500 px-4 rounded-2xl w-full p-1 hover:cursor-pointer`
                    : `text-[15px] text-white font-bold px-4 rounded-2xl bg-orange-600 w-full p-1 hover:cursor-pointer`
                }
                onClick={() => handleCBetRDrop(Rfref.current.innerText)}
                ref={Rfref}
              >
                How to select Checkbox ?
              </p>
              <CiMenuKebab />
            </aside>
            <aside className="bg-[white]  m-[1px] w-[99%] mx-auto my-0 flex justify-between items-center  h-[30px] hover:cursor-pointer">
              <p
                onClick={() => handleCBetRDrop(Rsref.current.innerText)}
                ref={Rsref}
                className={
                  !CBClickedForDrop
                    ? `text-[15px] font-semibold text-slate-500 px-4 rounded-2xl w-full p-1 hover:cursor-pointer`
                    : `text-[15px] text-white font-bold px-4 rounded-2xl bg-orange-600 w-full p-1 hover:cursor-pointer`
                }
              >
                How to deselect Checkbox ?
              </p>
              <CiMenuKebab />
            </aside>
          </main>
        </div>
      </article>
    </>
  );
};

export default Scheckbox;
