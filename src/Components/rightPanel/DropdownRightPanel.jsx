import React, { useState } from "react";
import RightSideBar from "../RightSideBar";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import DropRightSidebar from './../rightSidebar/DropRightSidebar';

const DropdownRightPanel = () => {
  let [sidebar, setSidebar] = useState(true);

  const handleSidebar = () => {
    return setSidebar(!sidebar);
  };
  return (
    <section
      className={`border h-[100vh] top-0 absolute z-[2000] right-0 bg-white ps-3  w-[235px] rounded-s-[25px] shadow-lg transition-all duration-700 ${
        sidebar ? "translate-x-0 " : "translate-x-[100%] "
      }`}
    >
      <div
        className={`rounded-full h-5 w-5 bg-orange-400 text-white flex justify-center items-center absolute top-[7.5%] ${
          sidebar ? "right-[95%]" : "right-[102%]"
        } cursor-pointer shadow-md`}
        onClick={handleSidebar}
      >
        {!sidebar ? <AiOutlineLeft /> : <AiOutlineRight />}
      </div>
      <DropRightSidebar />
    </section>
  );
};

export default DropdownRightPanel;
