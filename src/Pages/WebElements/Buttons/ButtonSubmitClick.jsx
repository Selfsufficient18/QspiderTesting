import React, { useState } from "react";
import ButtonHeading from "./ButtonHeading";
import { CiMenuKebab } from "react-icons/ci";
import { toast } from "react-toastify";

const ButtonSubmitClick = () => {
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
          <section className="bg-white rounded-xl p-5">
            <ButtonHeading />
            <section className="px-4">
              <article className="ps-10 pb-4">
                <p className="pb-3">
                  1. Was sign up process simple to use, would you like to rate
                  us?
                </p>
                <form
                  className="flex items-center"
                  onSubmit={e => {
                    e.preventDefault();
                    toast("Submitted");
                  }}
                >
                  <section className="ps-4">
                    <input
                      type="radio"
                      name="signUp"
                      id="signup1"
                      className="cursor-pointer"
                    />
                    <label className="ms-1 cursor-pointer" htmlFor="signup1">
                      Good
                    </label>
                  </section>
                  <section className="ps-4">
                    <input
                      type="radio"
                      name="signUp"
                      id="signup2"
                      className="cursor-pointer"
                    />
                    <label className="ms-1 cursor-pointer" htmlFor="signup2">
                      Average
                    </label>
                  </section>

                  <section className="ps-4">
                    <input
                      type="radio"
                      name="signUp"
                      id="signup3"
                      className="cursor-pointer"
                    />
                    <label className="ms-1 cursor-pointer" htmlFor="signup3">
                      Bad
                    </label>
                  </section>
                  <section className="ps-4">
                    <button
                      className="rounded-md mx-1 px-3 py-2 bg-orange-600 text-white font-bold"
                      type="submit"
                    >
                      Submit
                    </button>
                  </section>
                </form>
              </article>
              <article className="ps-10 pb-8">
                <p className="pb-3">2. Are you satisfied with our product?</p>
                <form
                  className="flex items-center"
                  onSubmit={e => {
                    e.preventDefault();
                    toast("Submitted");
                  }}
                >
                  <section className="ps-4">
                    <input
                      type="radio"
                      name="satisfaction"
                      id="sat1"
                      className="cursor-pointer"
                    />
                    <label className="ms-1 cursor-pointer" htmlFor="sat1">
                      Yes
                    </label>
                  </section>
                  <section className="ps-4">
                    <input
                      type="radio"
                      name="satisfaction"
                      id="sat2"
                      className="cursor-pointer"
                    />
                    <label className="ms-1 cursor-pointer" htmlFor="sat2">
                      No
                    </label>
                  </section>

                  <section className="ps-4">
                    <button
                      className="rounded-md mx-1 px-3 py-2 bg-orange-600 text-white font-bold"
                      type="submit"
                    >
                      Submit
                    </button>
                  </section>
                </form>
              </article>
              <article className="ps-10 pb-8">
                <p className="pb-3">
                  3. Do you have any problem with our product?
                </p>
                <form
                  className="flex items-center"
                  onSubmit={e => {
                    e.preventDefault();
                    toast("Submitted");
                  }}
                >
                  <section className="ps-4">
                    <input
                      type="radio"
                      name="problem"
                      id="prob1"
                      className="cursor-pointer"
                    />
                    <label className="ms-1 cursor-pointer" htmlFor="prob1">
                      Yes
                    </label>
                  </section>
                  <section className="ps-4">
                    <input
                      type="radio"
                      name="problem"
                      id="prob2"
                      className="cursor-pointer"
                    />
                    <label className="ms-1 cursor-pointer" htmlFor="prob2">
                      No
                    </label>
                  </section>

                  <section className="ps-4">
                    <button
                      className="rounded-md mx-1 px-3 py-2 bg-orange-600 text-white font-bold"
                      type="submit"
                    >
                      Submit
                    </button>
                  </section>
                </form>
              </article>
              <article className="ps-10 pb-8">
                <p className="pb-3">4. Rate us on the scale of 1 to 5</p>
                <form
                  className="flex items-center"
                  onSubmit={e => {
                    e.preventDefault();
                    toast("Submitted");
                  }}
                >
                  <section className="ps-4">
                    <input
                      type="radio"
                      name="rate"
                      id="r1"
                      className="cursor-pointer"
                    />
                    <label className="ms-1 cursor-pointer" htmlFor="r1">
                      1
                    </label>
                  </section>
                  <section className="ps-4">
                    <input
                      type="radio"
                      name="rate"
                      id="r2"
                      className="cursor-pointer"
                    />
                    <label className="ms-1 cursor-pointer" htmlFor="r2">
                      2
                    </label>
                  </section>

                  <section className="ps-4">
                    <input
                      type="radio"
                      name="rate"
                      id="r3"
                      className="cursor-pointer"
                    />
                    <label className="ms-1 cursor-pointer" htmlFor="r3">
                      3
                    </label>
                  </section>
                  <section className="ps-4">
                    <input
                      type="radio"
                      name="rate"
                      id="r4"
                      className="cursor-pointer"
                    />
                    <label className="ms-1 cursor-pointer" htmlFor="r4">
                      4
                    </label>
                  </section>
                  <section className="ps-4">
                    <input
                      type="radio"
                      name="rate"
                      id="r5"
                      className="cursor-pointer"
                    />
                    <label className="ms-1 cursor-pointer" htmlFor="r5">
                      5
                    </label>
                  </section>
                  <section className="ps-4">
                    <button
                      className="rounded-md mx-1 px-3 py-2 bg-orange-600 text-white font-bold"
                      type="submit"
                    >
                      Submit
                    </button>
                  </section>
                </form>
              </article>
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
    </div>
  );
};

export default ButtonSubmitClick;
