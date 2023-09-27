import React from "react";
import { useState } from "react";
import { CiMenuKebab } from "react-icons/ci";
import { Link } from "react-router-dom";

const LinkFirst = () => {
  let [click, setClick] = useState(true);
  let [verify, setVerify] = useState(false);
  return (
    <article className="form_content absolute left-[248px] rounded-[20px] top-[70px] ml-[20px] h-[640px] w-[1020px] flex flex-col">
      <aside className="bg-white rounded-md h-[100%] w-[100%] border border-orange-200 shadow-sm shadow-orange-300 p-5 overflow-y-scroll scrollbar scrollbar-w-2 scrollbar-thumb-[#a8a8a8] scrollbar-track-transparent scrollbar-thumb-rounded-md">
        {click ? (
          <section className="absolute top-[-10px] left-[10%] bg-orange-500 w-[80%] p-[8px] px-10 rounded-3xl text-white font-bold capitalize text-[14px] flex justify-center items-center">
            <p className="">How to Click On Link Text ?</p>
          </section>
        ) : null}
        {verify ? (
          <section className="absolute top-[-10px] left-[10%] bg-orange-500 w-[80%] p-[8px] px-10 rounded-3xl text-white font-bold capitalize text-[14px] flex justify-center items-center">
            <span className="">
              How to Click on a Link text which open in new tab
            </span>
          </section>
        ) : null}
        <div className=" rounded-md p-4">
          <h2 className="font-bold text-[25px] pb-6">Terms and Conditions</h2>
          <p className="pb-4 text-[16px] text-slate-600 pe-10">
            Help protect your website and its users with clear and fair website
            terms and conditions. These terms and conditions for a website set
            out key issues such as acceptable use, privacy, cookies,
            registration and passwords, intellectual property, links to other
            sites, termination and disclaimers of responsibility. Terms and
            conditions are used and necessary to protect a website owner from
            liability of a user relying on the information or the goods provided
            from the site then suffering a loss.
          </p>
          <p className="pb-4 text-[16px] text-slate-600 pe-10">
            Making your own terms and conditions for your website is hard, not
            impossible, to do. It can take a few hours to few days for a person
            with no legal background to make. But worry no more; we are here to
            help you out.
          </p>
          <p className="pb-4 text-[16px] text-slate-600 pe-10">
            All you need to do is fill up the blank spaces and then you will
            receive an email with your personalized terms and conditions.
          </p>
          <p className="pb-4 text-[16px] text-slate-600 pe-10">
            {" "}
            <span className="font-bold text-black">
              Looking for a Privacy Policy?
            </span>{" "}
            Check out{" "}
            <Link to="/link/second-link" className="text-blue-600">
              Privacy Policy Generator.
            </Link>
          </p>
          <p className="pb-4 text-[16px] text-slate-600 pe-10">
            The accuracy of the generated document on this website is not
            legally binding. Use at your own risk.
          </p>
        </div>
      </aside>
      <article className="scenarios h-[110px] bg-white rounded-t-[20px] mt-[20px] relative top-2 w-[1020px]">
        <div className="scenarios_1 ">
          <p className="text-[18px] font-bold p-[1px] px-8">Scenarios</p>
        </div>
        <div className="scenarios_2 bg-slate-100 w-[99%]  h-[69.5px] mx-auto my-0">
          <main className="relative top-1 flex flex-col gap-1 overflow-y-scroll scrollbar-w-2 scrollbar scrollbar-thumb-rounded-md scrollbar-track-transparent scrollbar-thumb-[#c7c5c5] ps-1">
            <article className="flex justify-center items-center">
              <aside
                className={`bg-[white]  m-[1px] w-[99%] mx-auto my-0 flex justify-between items-center h-[30px] rounded-full ${
                  click ? "bg-orange-600" : ""
                }`}
                onClick={() => {
                  setClick(true);
                  setVerify(false);
                }}
              >
                <p
                  className={`text-[15px] font-semibold ${
                    click ? "text-white" : "text-slate-500"
                  } px-4`}
                >
                  How to Click On Link Text ?
                </p>
              </aside>
              <CiMenuKebab />
            </article>
            <article className="flex justify-center items-center">
              <aside
                className={`bg-[white]  m-[1px] w-[99%] mx-auto my-0 flex justify-between items-center h-[30px] rounded-full ${
                  verify ? "bg-orange-600" : ""
                }`}
                onClick={() => {
                  setClick(false);
                  setVerify(true);
                }}
              >
                <p
                  className={`text-[15px] font-semibold ${
                    verify ? "text-white" : "text-slate-500"
                  } px-4`}
                >
                  How to Click on a Link text which open in new tab
                </p>
              </aside>
              <CiMenuKebab />
            </article>
          </main>
        </div>
      </article>
    </article>
  );
};

export default LinkFirst;
