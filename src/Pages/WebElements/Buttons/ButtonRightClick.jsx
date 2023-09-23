import React from "react";
import ButtonHeading from "./ButtonHeading";
import DropdownButton from "./RightClickButton";
import { toast } from "react-toastify";
import { CiMenuKebab } from "react-icons/ci";

const ButtonRightClick = () => {
  return (
    <div>
      <div className="p-4 shadow-xl rounded-xl ">
        <section className="">
          <section className="bg-white rounded-xl">
            <ButtonHeading />
            <section className="px-4">
              <article className="ps-10 pb-4">
                <p className="pb-3">
                  1. Was sign up process simple to use, would you like to rate
                  us?
                </p>
                <DropdownButton
                  buttonLabel={"Right Click"}
                  options={["Good", "Average", "Bad"]}
                />
              </article>
              <article className="ps-10 pb-8">
                <p className="pb-3">2. Are you satisfied with our product?</p>
                <DropdownButton
                  buttonLabel={"Right Click"}
                  options={["Yes", "No"]}
                />
              </article>
              <article className="ps-10 pb-8">
                <p className="pb-3">
                  3. Do you have any problem with our product?
                </p>
                <DropdownButton
                  buttonLabel={"Right Click"}
                  options={["Yes", "No"]}
                />
              </article>
              <article className="ps-10 pb-8">
                <p className="pb-3">4. Rate us on the scale of 1 to 5</p>
                <DropdownButton
                  options={[1, 2, 3, 4, 5]}
                  buttonLabel={"Right Click"}
                />
              </article>
              <section className="flex justify-end">
                <button
                  onClick={() => toast("Submitted")}
                  className="rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-orange-500 text-sm font-medium  focus:outline-none text-white"
                >
                  Submit
                </button>
              </section>
            </section>
          </section>
        </section>
      </div>
      {/* <article className="scenarios h-[110px] bg-white  ml-[20px] rounded-t-[20px] mt-10">
        <div className="scenarios_1 ">
          <p className="text-[18px] font-bold p-[1px] px-8">Scenarios</p>
        </div>
        <div className="scenarios_2 bg-slate-100 w-[99%]  h-[69.5px] mx-auto my-0">
          <main className="relative top-1 flex flex-col gap-1">
            <aside className="bg-[white]  m-[1px] w-[99%] mx-auto my-0 flex justify-between items-center h-[30px]">
              <p className="text-[15px] font-semibold text-slate-500 px-4">
                How to Right Click On A Button ?
              </p>
              <CiMenuKebab />
            </aside>
            <aside className="bg-[white]  m-[1px] w-[99%] mx-auto my-0 flex justify-between items-center  h-[30px]">
              <p className="text-[15px] font-semibold text-slate-500  px-4">
                How to verify the Button is Clicked
              </p>
              <CiMenuKebab />
            </aside>
          </main>
        </div>
      </article> */}
    </div>
  );
};

export default ButtonRightClick;
