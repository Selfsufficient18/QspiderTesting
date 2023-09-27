import React, { useState } from "react";
import ButtonHeading from "./ButtonHeading";
import toast from "react-hot-toast";
import { CiMenuKebab } from "react-icons/ci";

const ButtonDefault = () => {
  let [click, setClick] = useState(true);
  let [verify, setVerify] = useState(false);
  //! Sign Up process states
  let [signUp1, setSignUp1] = useState(false);
  let [signUp2, setSignUp2] = useState(false);
  let [signUp3, setSignUp3] = useState(false);
  //! Satisfaction Buttons states
  let [satisfaction1, setSatisfaction1] = useState(false);
  let [satisfaction2, setSatisfaction2] = useState(false);
  //! Problem button states
  let [problem1, setProblem1] = useState(false);
  let [problem2, setProblem2] = useState(false);
  //! Rating button states
  let [rate1, setRate1] = useState(false);
  let [rate2, setRate2] = useState(false);
  let [rate3, setRate3] = useState(false);
  let [rate4, setRate4] = useState(false);
  let [rate5, setRate5] = useState(false);
  return (
    <>
      <div className="form_content absolute left-[248px]  rounded-[20px] top-[70px] ml-[20px] h-[640px] w-[1020px] flex flex-col">
        <aside className="bg-white rounded-md h-[100%] w-[100%] border border-orange-200 shadow-sm shadow-orange-300 p-5 overflow-y-scroll scrollbar scrollbar-w-2 scrollbar-thumb-[#a8a8a8] scrollbar-track-transparent scrollbar-thumb-rounded-md">
          {click ? (
            <section className="absolute top-[-10px] left-[10%] bg-orange-500 w-[80%] p-[8px] px-10 rounded-3xl text-white font-bold capitalize text-[14px] flex justify-center items-center">
              <p className=" ">How to click on a button?</p>
            </section>
          ) : null}
          {verify ? (
            <section className="absolute top-[-10px] left-[10%] bg-orange-500 w-[80%] p-[8px] px-10 rounded-3xl text-white font-bold capitalize text-[14px] flex justify-center items-center">
              <p className="">How to verify, A button is clicked?</p>
            </section>
          ) : null}
          <div className="p-8 shadow-xl rounded-xl ">
            <section className="">
              <section className="bg-white rounded-xl">
                <ButtonHeading />
                <section className="px-4">
                  <article className="ps-10 pb-4">
                    <p className="pb-3">
                      1. Was sign up process simple to use, would you like to
                      rate us?
                    </p>
                    <button
                      className={`active:bg-green-400 transition-all duration-300 active:border-green-400 rounded-md mx-1 px-5 py-2 text-black font-bold   ${
                        signUp1
                          ? "border-green-400 border transition-all duration-300 bg-green-300"
                          : " bg-orange-300 border border-orange-600"
                      }`}
                      onClick={() => {
                        setSignUp1(true);
                        setSignUp2(false);
                        setSignUp3(false);
                      }}
                    >
                      Good
                    </button>
                    <button
                      className={`active:bg-green-400 transition-all duration-300 active:border-green-400 rounded-md mx-1 px-5 py-2 text-black font-bold  ${
                        signUp2
                          ? "border-green-400 border transition-all duration-300 bg-green-300"
                          : " bg-orange-300 border border-orange-600"
                      }`}
                      onClick={() => {
                        setSignUp1(false);
                        setSignUp2(true);
                        setSignUp3(false);
                      }}
                    >
                      Average
                    </button>
                    <button
                      className={`active:bg-green-400 transition-all duration-300 active:border-green-400 rounded-md mx-1 px-5 py-2  text-black font-bold  ${
                        signUp3
                          ? "border-green-400 border transition-all duration-300 bg-green-300"
                          : "bg-orange-300 border border-orange-600"
                      }`}
                      onClick={() => {
                        setSignUp1(false);
                        setSignUp2(false);
                        setSignUp3(true);
                      }}
                    >
                      Bad
                    </button>

                    {signUp1 ? (
                      <span className="text-green-600 p-1 px-2 ms-2 border border-green-400 rounded-md">
                        You selected Good
                      </span>
                    ) : (
                      ""
                    )}
                    {signUp2 ? (
                      <span className="text-green-600 p-1 px-2 ms-2 border border-green-400 rounded-md">
                        You selected Average
                      </span>
                    ) : (
                      ""
                    )}
                    {signUp3 ? (
                      <span className="text-green-600 p-1 px-2 ms-2 border border-green-400 rounded-md">
                        You selected Bad
                      </span>
                    ) : (
                      ""
                    )}
                  </article>
                  <article className="ps-10 pb-8">
                    <p className="pb-3">
                      2. Are you satisfied with our product?
                    </p>
                    <button
                      className={`active:bg-green-400 transition-all duration-300 active:border-green-400 rounded-md mx-1 px-5 py-2 text-black font-bold  ${
                        satisfaction1
                          ? "border-green-400 border transition-all duration-300 bg-green-300"
                          : " bg-orange-300 border border-orange-600"
                      }`}
                      onClick={() => {
                        setSatisfaction1(true);
                        setSatisfaction2(false);
                      }}
                    >
                      Yes
                    </button>
                    <button
                      className={`active:bg-green-400 transition-all duration-300 active:border-green-400 rounded-md mx-1 px-5 py-2 text-black font-bold  ${
                        satisfaction2
                          ? "border-green-400 border transition-all duration-300 bg-green-300"
                          : " bg-orange-300 border border-orange-600"
                      }`}
                      onClick={() => {
                        setSatisfaction1(false);
                        setSatisfaction2(true);
                      }}
                    >
                      No
                    </button>
                    {satisfaction1 ? (
                      <span className="text-green-600 p-1 px-2 ms-2 border border-green-400 rounded-md">
                        You selected Yes
                      </span>
                    ) : (
                      ""
                    )}
                    {satisfaction2 ? (
                      <span className="text-green-600 p-1 px-2 ms-2 border border-green-400 rounded-md">
                        You selected No
                      </span>
                    ) : (
                      ""
                    )}
                  </article>
                  <article className="ps-10 pb-8">
                    <p className="pb-3">
                      3. Do you have any problem with our product?
                    </p>
                    <button
                      className={`active:bg-green-400 transition-all duration-300 active:border-green-400 rounded-md mx-1 px-5 py-2 text-black font-bold  ${
                        problem1
                          ? "border-green-400 border transition-all duration-300 bg-green-300"
                          : " bg-orange-300 border border-orange-600"
                      }`}
                      onClick={() => {
                        setProblem1(true);
                        setProblem2(false);
                      }}
                    >
                      Yes
                    </button>
                    <button
                      className={`active:bg-green-400 transition-all duration-300 active:border-green-400 rounded-md mx-1 px-5 py-2 text-black font-bold  ${
                        problem2
                          ? "border-green-400 border transition-all duration-300 bg-green-300"
                          : " bg-orange-300 border border-orange-600"
                      }`}
                      onClick={() => {
                        setProblem1(false);
                        setProblem2(true);
                      }}
                    >
                      No
                    </button>
                    {problem1 ? (
                      <span className="text-green-600 p-1 px-2 ms-2 border border-green-400 rounded-md">
                        You selected Yes
                      </span>
                    ) : (
                      ""
                    )}
                    {problem2 ? (
                      <span className="text-green-600 p-1 px-2 ms-2 border border-green-400 rounded-md">
                        You selected No
                      </span>
                    ) : (
                      ""
                    )}
                  </article>
                  <article className="ps-10 pb-8">
                    <p className="pb-3">4. Rate us on the scale of 1 to 5</p>
                    <button
                      className={`active:bg-green-400 transition-all duration-300 active:border-green-400 rounded-md mx-1 px-5 py-2  text-black font-bold  ${
                        rate1
                          ? "border-green-400 border transition-all duration-300 bg-green-300"
                          : "bg-orange-300 border border-orange-600"
                      }`}
                      onClick={() => {
                        setRate1(true);
                        setRate2(false);
                        setRate3(false);
                        setRate4(false);
                        setRate5(false);
                      }}
                    >
                      1
                    </button>
                    <button
                      className={`active:bg-green-400 transition-all duration-300 active:border-green-400 rounded-md mx-1 px-5 py-2 text-black font-bold  ${
                        rate2
                          ? "border-green-400 border transition-all duration-300 bg-green-300"
                          : " bg-orange-300 border border-orange-600"
                      }`}
                      onClick={() => {
                        setRate1(false);
                        setRate2(true);
                        setRate3(false);
                        setRate4(false);
                        setRate5(false);
                      }}
                    >
                      2
                    </button>
                    <button
                      className={`active:bg-green-400 transition-all duration-300 active:border-green-400 rounded-md mx-1 px-5 py-2 text-black font-bold  ${
                        rate3
                          ? "border-green-400 border transition-all duration-300 bg-green-300"
                          : " bg-orange-300 border border-orange-600"
                      }`}
                      onClick={() => {
                        setRate1(false);
                        setRate2(false);
                        setRate3(true);
                        setRate4(false);
                        setRate5(false);
                      }}
                    >
                      3
                    </button>
                    <button
                      className={`active:bg-green-400 transition-all duration-300 active:border-green-400 rounded-md mx-1 px-5 py-2 text-black font-bold  ${
                        rate4
                          ? "border-green-400 border transition-all duration-300 bg-green-300"
                          : " bg-orange-300 border border-orange-600"
                      }`}
                      onClick={() => {
                        setRate1(false);
                        setRate2(false);
                        setRate3(false);
                        setRate4(true);
                        setRate5(false);
                      }}
                    >
                      4
                    </button>
                    <button
                      className={`active:bg-green-400 transition-all duration-300 active:border-green-400 rounded-md mx-1 px-5 py-2 text-black font-bold  ${
                        rate5
                          ? "border-green-400 border transition-all duration-300 bg-green-300"
                          : " bg-orange-300 border border-orange-600"
                      }`}
                      onClick={() => {
                        setRate1(false);
                        setRate2(false);
                        setRate3(false);
                        setRate4(false);
                        setRate5(true);
                      }}
                    >
                      5
                    </button>
                    {rate1 ? (
                      <span className="text-green-600 p-1 px-2 ms-2 border border-green-400 rounded-md">
                        You selected 1
                      </span>
                    ) : (
                      ""
                    )}
                    {rate2 ? (
                      <span className="text-green-600 p-1 px-2 ms-2 border border-green-400 rounded-md">
                        You selected 2
                      </span>
                    ) : (
                      ""
                    )}
                    {rate3 ? (
                      <span className="text-green-600 p-1 px-2 ms-2 border border-green-400 rounded-md">
                        You selected 3
                      </span>
                    ) : (
                      ""
                    )}
                    {rate4 ? (
                      <span className="text-green-600 p-1 px-2 ms-2 border border-green-400 rounded-md">
                        You selected 4
                      </span>
                    ) : (
                      ""
                    )}
                    {rate5 ? (
                      <span className="text-green-600 p-1 px-2 ms-2 border border-green-400 rounded-md">
                        You selected 5
                      </span>
                    ) : (
                      ""
                    )}
                  </article>
                </section>
              </section>
            </section>
            <section className="flex justify-end pe-10">
              <button
                className="border-2 py-2 px-3 border-orange-300 text-orange-400 shadow-lg rounded-md font-bold"
                onClick={() => toast("✅ submitted")}
              >
                Submit
              </button>{" "}
            </section>
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
                    How to Click On A Button ?
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
                    How to verify the Button is Clicked
                  </p>
                </aside>
                <CiMenuKebab />
              </article>
            </main>
          </div>
        </article>
      </div>
    </>
  );
};

export default ButtonDefault;
