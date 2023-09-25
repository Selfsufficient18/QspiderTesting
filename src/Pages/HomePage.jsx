import React, { useState } from "react";
import Nav from "../Components/Nav";
import { Outlet } from "react-router-dom";

import { AiOutlineRight } from "react-icons/ai";
import { AiOutlineLeft } from "react-icons/ai";
import Sidebar from "../Components/Sidebar";

const HomePage = () => {
  let [sidebar, setSidebar] = useState(true);

  const handleSidebar = () => {
    return setSidebar(!sidebar);
  };
  return (
    <div className="relative overflow-hidden">
      <section className="relative -z-1">
        <Nav />
      </section>
      <section className="h-full">
        <Outlet />
      </section>

      <aside
        className={`fixed top-0 transition-transform ${
          sidebar ? "translate-x-0" : "-translate-x-[100%]"
        } shadow-2xl rounded-e-[25px] h-screen bg-white duration-500 ease-in`}
      >
        <Sidebar />

        <div
          className={`rounded-full p-1 bg-orange-400 text-white font-extrabold flex justify-center items-center absolute top-[7.5%] ${
            sidebar ? "left-[95%]" : "left-[102%]"
          } cursor-pointer shadow-md`}
          onClick={handleSidebar}
        >
          {sidebar ? (
            <AiOutlineLeft />
          ) : (
            <AiOutlineRight />
          )}
        </div>
      </aside>
    </div>
  );
};

export default HomePage;
