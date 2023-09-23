import React, { useState } from "react";
import ButtonHeading from "./ButtonHeading";
import { CiMenuKebab } from "react-icons/ci";

const ButtonDisabled = () => {
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
    <div>
      <div className="p-8 shadow-xl rounded-xl ">
        <section className="">
          <section className="bg-white rounded-xl">
            <ButtonHeading />
            <section className="px-4">
              <article className="ps-10 pb-4">
                <p className="pb-3">
                  1. Was sign up process simple to use, would you like to rate
                  us?
                </p>
                <button
                  className={`rounded-md mx-1 px-3 py-2 bg-orange-600 text-white font-bold ${
                    signUp1
                      ? "bg-gradient-to-r from-orange-300 to-orange-500 "
                      : ""
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
                  className={`rounded-md mx-1 px-3 py-2 bg-orange-600 text-white font-bold ${
                    signUp2
                      ? "bg-gradient-to-r from-orange-300 to-orange-500 "
                      : ""
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
                  className={`rounded-md mx-1 px-3 py-2 bg-orange-600 text-white font-bold ${
                    signUp3
                      ? "bg-gradient-to-r from-orange-300 to-orange-500 "
                      : ""
                  }`}
                  onClick={() => {
                    setSignUp1(false);
                    setSignUp2(false);
                    setSignUp3(true);
                  }}
                >
                  Bad
                </button>
              </article>
              <article className="ps-10 pb-8">
                <p className="pb-3">2. Are you satisfied with our product?</p>
                <button
                  className={`rounded-md mx-1 px-3 py-2 bg-orange-600 text-white font-bold ${
                    satisfaction1
                      ? "bg-gradient-to-r from-orange-300 to-orange-500 "
                      : ""
                  }`}
                  onClick={() => {
                    setSatisfaction1(true);
                    setSatisfaction2(false);
                  }}
                >
                  Yes
                </button>
                <button
                  className={`rounded-md mx-1 px-3 py-2 bg-orange-600 text-white font-bold ${
                    satisfaction2
                      ? "bg-gradient-to-r from-orange-300 to-orange-500 "
                      : ""
                  }`}
                  onClick={() => {
                    setSatisfaction1(false);
                    setSatisfaction2(true);
                  }}
                >
                  No
                </button>
              </article>
              <article className="ps-10 pb-8">
                <p className="pb-3">
                  3. Do you have any problem with our product?
                </p>
                <button
                  className={`rounded-md mx-1 px-3 py-2 bg-orange-600 text-white font-bold ${
                    problem1
                      ? "bg-gradient-to-r from-orange-300 to-orange-500 "
                      : ""
                  }`}
                  onClick={() => {
                    setProblem1(true);
                    setProblem2(false);
                  }}
                >
                  Yes
                </button>
                <button
                  className={`rounded-md mx-1 px-3 py-2 bg-orange-600 text-white font-bold ${
                    problem2
                      ? "bg-gradient-to-r from-orange-300 to-orange-500 "
                      : ""
                  }`}
                  onClick={() => {
                    setProblem1(false);
                    setProblem2(true);
                  }}
                >
                  No
                </button>
              </article>
              <article className="ps-10 pb-8">
                <p className="pb-3">4. Rate us on the scale of 1 to 5</p>
                <button
                  className={`rounded-md mx-1 px-5 py-2 bg-orange-600 text-white font-bold ${
                    rate1
                      ? "bg-gradient-to-r from-orange-300 to-orange-500 "
                      : ""
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
                  className={`rounded-md mx-1 px-5 py-2 bg-orange-600 text-white font-bold ${
                    rate2
                      ? "bg-gradient-to-r from-orange-300 to-orange-500 "
                      : ""
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
                  className={`rounded-md mx-1 px-5 py-2 bg-orange-600 text-white font-bold ${
                    rate3
                      ? "bg-gradient-to-r from-orange-300 to-orange-500 "
                      : ""
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
                  className={`rounded-md mx-1 px-5 py-2 bg-orange-600 text-white font-bold ${
                    rate4
                      ? "bg-gradient-to-r from-orange-300 to-orange-500 "
                      : ""
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
                  className={`rounded-md mx-1 px-5 py-2 bg-orange-600 text-white font-bold ${
                    rate5
                      ? "bg-gradient-to-r from-orange-300 to-orange-500 "
                      : ""
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
              </article>
              <form
                className="flex justify-between"
                onSubmit={e => {
                  e.preventDefault();
                }}
              >
                <section>
                  <input type="checkbox" name="submit" id="submit" />
                  <label htmlFor="submit" className="ps-2">
                    To submit please accept our{" "}
                    <span className="underline cursor-pointer">
                      terms & conditions
                    </span>
                  </label>
                </section>
                <section>
                  <button
                    className="border-2 py-2 px-3 border-orange-300 text-orange-400 cursor-not-allowed"
                    disabled
                  >
                    Submit
                  </button>
                </section>
              </form>
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
                How to Click On A Button ?
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

export default ButtonDisabled;
