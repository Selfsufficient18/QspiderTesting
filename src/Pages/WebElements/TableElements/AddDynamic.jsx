import React, { useContext, useState } from "react";
import { ContextProvider } from "../../../contextApi/GlobalContext";
import { useNavigate } from "react-router-dom/dist";

const AddDynamic = () => {
  let { bootcamps, setBootcamps, handleAdd } = useContext(ContextProvider);
  console.log(bootcamps);

  let [newdata, setNewdata] = useState({
    name: "",
    website: "",
    address: "",
    _id: "",
    averageCost: "",
  });

  let { name, website, address, _id, averageCost } = newdata;

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
    <div className="h-full m-auto flex flex-col justify-center items-center ">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 shadow-md rounded-3xl p-4 px-6 w-[60%] bg-slate-100 relative top-2"
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
          />
        </aside>
        <article className="flex gap-5">
          <aside className="flex flex-col w-[50%]">
            <label htmlFor="" className="font-semibold text-[14px] py-2">
              Website :
            </label>
            <input
              type="text"
              placeholder="www.example.com"
              name="website"
              onChange={handleChange}
              className="outline transition-all duration-150 outline-1 rounded-md focus:outline-orange-400 focus:shadow focus:shadow-orange-300 h-10 p-2 focus:outline-2"
            />
          </aside>
          <aside className="flex flex-col w-[50%]">
            <label htmlFor="" className="font-semibold text-[14px] py-2">
              Addres :
            </label>
            <input
              type="text"
              placeholder="Example Bootmcamp address"
              name="address"
              onChange={handleChange}
              className="outline transition-all duration-150 outline-1 rounded-md focus:outline-orange-400 focus:shadow focus:shadow-orange-300 h-10 p-2 focus:outline-2"
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
          />
        </aside>
        <aside className="flex flex-col">
          <label htmlFor="" className="font-semibold text-[14px] py-2">
            Average Cost :
          </label>
          <input
            type="text"
            placeholder="20,000"
            name="averageCost"
            onChange={handleChange}
            className="outline transition-all duration-150 outline-1 rounded-md focus:outline-orange-400 focus:shadow focus:shadow-orange-300 focus:outline-2 h-10 p-2"
          />
        </aside>
        <aside className="flex justify-center items-center">
          <button
            type="submit"
            onClick={handleSubmit}
            className="p-2 px-6 bg-orange-500 rounded-md text-white font-bold"
          >
            Add Data
          </button>
        </aside>
      </form>
    </div>
  );
};

export default AddDynamic;
