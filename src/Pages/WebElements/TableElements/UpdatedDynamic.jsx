import React, { useContext, useState } from "react";
import { ContextProvider } from "../../../contextApi/GlobalContext";
import { useNavigate } from "react-router-dom/dist";
import { createPortal } from "react-dom";

const UpdatedDynamic = () => {
  let { bootcamps, setBootcamps, handleAdd, beforeData } =
    useContext(ContextProvider);
  console.log(bootcamps);

  let [newdata, setNewdata] = useState({ ...beforeData });

  let { name, website, address, _id, averageCost, ratings, quantity } = newdata;

  let handleChange = e => {
    let { name, value } = e.target;
    setNewdata({ ...newdata, [name]: value });
  };

  let navigate = useNavigate();

  let handleSubmit = e => {
    e.preventDefault();
    handleAdd(newdata);
    navigate("/table/dynamic-table");
  };

  return (
    <>
      {createPortal(
        <>
          <div className="h-full m-auto flex flex-col justify-center items-center">
            <main
              className="absolute top-0 left-0 w-full h-full"
              onClick={() => {
                let modal1 = document.getElementById("updateModal");
                modal1.setAttribute("class", "");
                modal1.style.background = "rgba(0, 0, 0, 0.41)";
                navigate("/table/dynamic-table");
                handleAdd(newdata);
              }}
            >
              ulalala
            </main>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 shadow-md rounded-3xl p-4 px-6 w-[30%] bg-slate-100 relative top-2"
            >
              <aside className="flex flex-col">
                <label htmlFor="" className="font-semibold text-[14px] py-2">
                  Name :
                </label>
                <input
                  type="text"
                  placeholder="Example Bootmcamp"
                  name="name"
                  className="outline transition-all duration-150 outline-1 rounded-md focus:outline-orange-400 focus:shadow focus:shadow-orange-300 h-10 p-2 focus:outline-2"
                  onChange={handleChange}
                  value={name}
                />
              </aside>
              <article className="flex gap-5">
                <aside className="flex flex-col w-[50%]">
                  <label htmlFor="" className="font-semibold text-[14px] py-2">
                    Ratings :
                  </label>
                  <input
                    type="text"
                    placeholder="4.5 Star"
                    name="ratings"
                    onChange={handleChange}
                    className="outline transition-all duration-150 outline-1 rounded-md focus:outline-orange-400 focus:shadow focus:shadow-orange-300 h-10 p-2 focus:outline-2"
                    value={ratings}
                  />
                </aside>
                <aside className="flex flex-col w-[50%]">
                  <label htmlFor="" className="font-semibold text-[14px] py-2">
                    Quantity :
                  </label>
                  <input
                    type="text"
                    placeholder="5"
                    name="quantity"
                    onChange={handleChange}
                    className="outline transition-all duration-150 outline-1 rounded-md focus:outline-orange-400 focus:shadow focus:shadow-orange-300 h-10 p-2 focus:outline-2"
                    value={quantity}
                  />
                </aside>
              </article>
              <aside className="flex flex-col">
                <label htmlFor="" className="font-semibold text-[14px] py-2">
                  id :
                </label>
                <input
                  type="text"
                  placeholder="1234"
                  name="_id"
                  onChange={handleChange}
                  className="outline transition-all duration-150 outline-1 rounded-md focus:outline-orange-400 focus:shadow focus:shadow-orange-300 h-10 p-2 focus:outline-2"
                  value={_id}
                />
              </aside>

              <aside className="flex justify-center items-center">
                <button
                  type="submit"
                  onClick={() => {
                    let modal1 = document.getElementById("updateModal");
                    modal1.setAttribute("class", "");
                    modal1.style.background = "rgba(0, 0, 0, 0.41)";
                    return handleSubmit;
                  }}
                  className="p-2 px-6 bg-orange-500 rounded-md text-white font-bold hover:bg-orange-700 transition-all duration-300"
                >
                  Update Data
                </button>
              </aside>
            </form>
          </div>
        </>,
        document.getElementById("updateModal")
      )}
    </>
  );
};

export default UpdatedDynamic;
