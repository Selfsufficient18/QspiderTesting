import React, { useState } from "react";
import ButtonHeading from "./ButtonHeading";
import { toast } from "react-toastify";
import { CiMenuKebab } from "react-icons/ci";

const ButtonSubmitClick = () => {
  let [click, setClick] = useState(true);
  let [verify, setVerify] = useState(false);
  let [signup, setSignUp] = useState("");
  let [form1, setForm1] = useState(false);
  let [satisfaction, setSatisfaction] = useState("");
  let [form2, setForm2] = useState(false);
  let [problem, setProblem] = useState("");
  let [form3, setForm3] = useState(false);
  let [rate, setRate] = useState("");
  let [form4, setForm4] = useState("");
  return (
    <div className="form_content absolute left-[248px]  rounded-[20px] top-[70px] ml-[20px] h-[640px] w-[1020px] flex flex-col">
      <aside className="bg-white rounded-md h-[100%] w-[100%] border border-orange-200 shadow-sm shadow-orange-300 p-5 overflow-y-scroll scrollbar scrollbar-w-2 scrollbar-thumb-[#a8a8a8] scrollbar-track-transparent scrollbar-thumb-rounded-md">
        {click ? (
          <section className="absolute top-[-10px] left-[10%] bg-orange-500 w-[80%] p-[8px] px-10 rounded-3xl text-white font-bold capitalize text-[14px] flex justify-center items-center">
            <p className=" ">How to click on a submit button?</p>
          </section>
        ) : null}
        {verify ? (
          <section className="absolute top-[-10px] left-[10%] bg-orange-500 w-[80%] p-[8px] px-10 rounded-3xl text-white font-bold capitalize text-[14px] flex justify-center items-center">
            <p className="">How to verify, A button is clicked?</p>
          </section>
        ) : null}{" "}
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
                      setForm1(true);
                    }}
                  >
                    <section className="ps-4">
                      <input
                        type="radio"
                        name="signUp"
                        id="signup1"
                        className="cursor-pointer"
                        value="Good"
                        onChange={e => {
                          setSignUp(e.target.value);
                          setForm1(false);
                        }}
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
                        value="Average"
                        onChange={e => {
                          setSignUp(e.target.value);
                          setForm1(false);
                        }}
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
                        value="Bad"
                        onChange={e => {
                          setSignUp(e.target.value);
                          setForm1(false);
                        }}
                      />
                      <label className="ms-1 cursor-pointer" htmlFor="signup3">
                        Bad
                      </label>
                    </section>
                    <section className="ps-4">
                      <button
                        className={`active:bg-green-400 transition-all duration-300 active:border-green-400 rounded-md mx-1 px-5 py-2 text-black font-bold  ${
                          form1
                            ? "border-green-400 border transition-all duration-300 bg-green-300"
                            : " bg-orange-300 border border-orange-600"
                        }`}
                        type="submit"
                      >
                        Submit
                      </button>
                    </section>
                    <section className="text-green-600 ps-2">
                      {form1 ? (
                        <span className="text-green-600 p-1 px-2 ms-2 border border-green-400 rounded-md">
                          {`You Selected ${signup}`}
                        </span>
                      ) : (
                        ""
                      )}
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
                      setForm2(true);
                    }}
                  >
                    <section className="ps-4">
                      <input
                        type="radio"
                        name="satisfaction"
                        id="sat1"
                        className="cursor-pointer"
                        value="Yes"
                        onChange={e => {
                          setSatisfaction(e.target.value);
                          setForm2(false);
                        }}
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
                        value="No"
                        onChange={e => {
                          setSatisfaction(e.target.value);
                          setForm2(false);
                        }}
                      />
                      <label className="ms-1 cursor-pointer" htmlFor="sat2">
                        No
                      </label>
                    </section>

                    <section className="ps-4">
                      <button
                        className={`active:bg-green-400 transition-all duration-300 active:border-green-400 rounded-md mx-1 px-5 py-2 text-black font-bold  ${
                          form2
                            ? "border-green-400 border transition-all duration-300 bg-green-300"
                            : " bg-orange-300 border border-orange-600"
                        }`}
                        type="submit"
                      >
                        Submit
                      </button>
                    </section>
                    <section className="text-green-600 ps-2">
                      {form2 ? (
                        <span className="text-green-600 p-1 px-2 ms-2 border border-green-400 rounded-md">
                          {`You Selected ${satisfaction}`}
                        </span>
                      ) : (
                        ""
                      )}
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
                      setForm3(true);
                    }}
                  >
                    <section className="ps-4">
                      <input
                        type="radio"
                        name="problem"
                        id="prob1"
                        className="cursor-pointer"
                        value="Yes"
                        onChange={e => {
                          setProblem(e.target.value);
                          setForm3(false);
                        }}
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
                        value="No"
                        onChange={e => {
                          setProblem(e.target.value);
                          setForm3(false);
                        }}
                      />
                      <label className="ms-1 cursor-pointer" htmlFor="prob2">
                        No
                      </label>
                    </section>

                    <section className="ps-4">
                      <button
                        className={`active:bg-green-400 transition-all duration-300 active:border-green-400 rounded-md mx-1 px-5 py-2 text-black font-bold  ${
                          form3
                            ? "border-green-400 border transition-all duration-300 bg-green-300"
                            : " bg-orange-300 border border-orange-600"
                        }`}
                        type="submit"
                      >
                        Submit
                      </button>
                    </section>
                    <section className="ms-6">
                      {form3 ? (
                        <span className="text-green-600 p-1 px-2 ms-2 border border-green-400 rounded-md">
                          {`You Selected ${problem}`}
                        </span>
                      ) : (
                        ""
                      )}
                    </section>
                  </form>
                </article>
                <article className="ps-10 pb-8">
                  <p className="pb-3">4. Rate us on the scale of 1 to 5</p>
                  <form
                    className="flex items-center"
                    onSubmit={e => {
                      e.preventDefault();
                      setForm4(true);
                      toast("Submitted");
                    }}
                  >
                    <section className="ps-4">
                      <input
                        type="radio"
                        name="rate"
                        id="r1"
                        value="1"
                        className="cursor-pointer"
                        onChange={e => {
                          setRate(e.target.value);
                          setForm4(false);
                        }}
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
                        value="2"
                        className="cursor-pointer"
                        onChange={e => {
                          setRate(e.target.value);
                          setForm4(false);
                        }}
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
                        value="4"
                        onChange={e => {
                          setRate(e.target.value);
                          setForm4(false);
                        }}
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
                        value="4"
                        className="cursor-pointer"
                        onChange={e => {
                          setRate(e.target.value);
                          setForm4(false);
                        }}
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
                        value="5"
                        className="cursor-pointer"
                        onChange={e => {
                          setRate(e.target.value);
                          setForm4(false);
                        }}
                      />
                      <label className="ms-1 cursor-pointer" htmlFor="r5">
                        5
                      </label>
                    </section>
                    <section className="ps-4">
                      <button
                        className={`active:bg-green-400 transition-all duration-300 active:border-green-400 rounded-md mx-1 px-5 py-2  text-black font-bold  ${
                          form4
                            ? "border-green-400 border transition-all duration-300 bg-green-300"
                            : "bg-orange-300 border border-orange-600"
                        }`}
                        type="submit"
                      >
                        Submit
                      </button>
                    </section>
                    <section className="ms-6">
                      {form4 ? (
                        <span className="text-green-600 p-1 px-2 ms-2 border border-green-400 rounded-md">
                          {`You Selected ${rate}`}
                        </span>
                      ) : (
                        ""
                      )}
                    </section>
                  </form>
                </article>
              </section>
            </section>
          </section>
        </div>
      </aside>
      <article className="scenarios h-[110px] bg-white rounded-t-[20px] mt-[20px] relative top-2">
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
                  How to Click On A Submit Button ?
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
  );
};

export default ButtonSubmitClick;
