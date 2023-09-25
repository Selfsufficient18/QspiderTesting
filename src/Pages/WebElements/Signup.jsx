import React, { useContext, useEffect, useState } from "react";
import sign_img from "./sign.avif";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { ContextProvider } from "../../contextApi/GlobalContext";
import toast from "react-hot-toast";

const Signup = () => {
  let [state, setState] = useState({
    name: "",
    email: "",
    password: "",
  });

  let [loading, setLoading] = useState(false);

  let [btn, setBtn] = useState(false);

  useEffect(() => {
    if (state.name && state.email && state.password) {
      setBtn(false);
    } else {
      setBtn(true);
    }
  });

  let { name, email, password } = state;

  let handleChange = e => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  let navigate = useNavigate();

  let handleSubmit = e => {
    e.preventDefault();
    console.log("signed in");
    toast("sign in succesfull", {
      icon: "✅",
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
      position: "",
    });
    navigate("/text/login");
  };

  let {
    place,
    handlePlace,
    notplace,
    handleNotPlace,
    tool,
    handleTool,
    nottool,
    handleNotTool,
    tarea,
    handleArea,
    disabled,
    getSc,
  } = useContext(ContextProvider);

  return (
    <>
      <article className="flex h-[80vh] rounded ">
        <aside className="basis-[40%] border-r-[3px]  flex justify-center flex-col items-center h-[68vh]">
          <figure className="h-[70%]">
            <picture className="relative flex justify-center items-center">
              <img
                src={sign_img}
                alt="signin"
                className="h-[50vh] w-[90%] filter hue-rotate-[16deg]"
              />
            </picture>
          </figure>

          {/* this will change */}
          <section className="absolute top-[-10px] left-[10%] bg-orange-500 w-[80%] p-[8px] px-10 rounded-3xl text-white font-bold capitalize text-[14px] flex justify-center items-center">
            <p>{getSc}</p>
          </section>
          {/* ---------------- */}
        </aside>
        <aside className="p-2 basis-[60%] bg-white h-fit">
          <div className="w-full rounded-lg">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-[rgb(242,87,53)] md:text-2xl ">
                Register
              </h1>
              <form
                className="space-y-4 md:space-y-6"
                action="#"
                onSubmit={handleSubmit}
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Your name
                  </label>
                  {tarea ? (
                    <input
                      onChange={handleChange}
                      type="text"
                      name="name"
                      id="name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:placeholder-gray-400 focus:bg-[rgb(240,240,240)] disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder={!place ? "" : "Enter your name"}
                      title={tool ? "Enter your name here" : ""}
                      required=""
                      value={name}
                      disabled={disabled ? true : false}
                    />
                  ) : (
                    <textarea
                      onChange={handleChange}
                      type="text"
                      name="name"
                      id="name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:placeholder-gray-400 focus:bg-[rgb(240,240,240)] disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder={!place ? "" : "Enter your name"}
                      title={tool ? "Enter your name here" : ""}
                      required=""
                      value={name}
                      disabled={disabled ? true : false}
                    />
                  )}
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Email
                  </label>
                  {tarea ? (
                    <input
                      onChange={handleChange}
                      type="email"
                      name="email"
                      id="email"
                      title={tool ? "Enter your E-mail here" : ""}
                      placeholder={!place ? " " : "example@gmail.com"}
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:placeholder-gray-400 focus:bg-[rgb(240,240,240)] disabled:opacity-50 disabled:cursor-not-allowed"
                      required=""
                      value={email}
                      disabled={disabled ? true : false}
                    />
                  ) : (
                    <textarea
                      onChange={handleChange}
                      type="email"
                      name="email"
                      id="email"
                      title={tool ? "Enter your E-mail here" : ""}
                      placeholder={!place ? " " : "example@gmail.com"}
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:placeholder-gray-400 focus:bg-[rgb(240,240,240)] disabled:opacity-50 disabled:cursor-not-allowed "
                      required=""
                      value={email}
                      disabled={disabled ? true : false}
                    />
                  )}
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    password
                  </label>
                  {tarea ? (
                    <input
                      onChange={handleChange}
                      type="password"
                      name="password"
                      id="password"
                      placeholder={!place ? " " : "Enter your password"}
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500
                    focus:bg-[rgb(240,240,240)] disabled:opacity-50 disabled:cursor-not-allowed"
                      required=""
                      title={tool ? "Enter Password here" : ""}
                      value={password}
                      disabled={disabled ? true : false}
                    />
                  ) : (
                    <textarea
                      onChange={handleChange}
                      type="password"
                      name="password"
                      id="password"
                      placeholder={!place ? " " : "Enter your password"}
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500
                    focus:bg-[rgb(240,240,240)] disabled:opacity-50 disabled:cursor-not-allowed"
                      required=""
                      title={tool ? "Enter Password here" : ""}
                      value={password}
                      disabled={disabled ? true : false}
                    />
                  )}
                </div>
                <div className="flex gap-[10px] justify-between">
                  <button
                    type="submit"
                    className={
                      btn
                        ? "disabled:cursor-not-allowed focus:outline-none disabled:opacity-30 bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:shadow-outline"
                        : "bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline opacity-100"
                    }
                    disabled={btn ? true : false}
                  >
                    Register
                  </button>
                  <Link
                    to="/text/login"
                    className="text-[12px] font-sans font-bold text-slate-500 relative top-3 hover:text-slate-700 cursor-pointer"
                  >
                    Already have an account ? Login Now
                  </Link>
                  <Link
                    type="button"
                    className="bg-orange-500 hover:bg-orange-700 text-white py-2 px-4 rounded"
                    to="/text/login"
                  >
                    <span className="flex gap-2 justify-center items-center">
                      <span>
                        <AiOutlineArrowLeft />
                      </span>
                      <span>Login</span>
                    </span>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </aside>
      </article>
    </>
  );
};

export default Signup;
