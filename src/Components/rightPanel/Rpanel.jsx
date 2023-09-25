import React, { useState } from "react";
import RightSideBar from "../RightSideBar";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Rpanel = () => {
  let [sidebar, setSidebar] = useState(true);

  const handleSidebar = () => {
    return setSidebar(!sidebar);
  };
  return (
    <section
      className={`border h-[100vh] top-0 fixed z-[2000] right-0 bg-white ps-3  w-[235px] rounded-s-[25px] shadow-lg transition-all duration-700 ${
        sidebar ? "translate-x-0 " : "translate-x-[100%] "
      }`}
    >
      <div
        className={`rounded-full p-1 bg-orange-400 text-white flex justify-center items-center absolute top-[7.5%] ${
          sidebar ? "right-[95%]" : "right-[102%]"
        } cursor-pointer shadow-md`}
        onClick={handleSidebar}
      >
        {!sidebar ? <AiOutlineLeft /> : <AiOutlineRight />}
      </div>
      <RightSideBar />
    </section>
  );
};

export default Rpanel;
