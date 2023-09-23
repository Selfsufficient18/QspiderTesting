import React from "react";
import search from "../assets/icons/search.png";
import logoimg from '../assets/images/qspiders_logo.6096665.png'

const SidebarTop = () => {
  return (
    <div className="p-3 pb-1 border-b-[1px]">
      <section className="flex justify-center pb-1">
        <img src={logoimg} alt="" />
      </section>

      <div className="flex items-center">
        <section>
          <img src={search} alt="searchIcon" className="h-4 w-4" />
        </section>
        <section className="ps-2">
          <input type="text" className="focus:outline-none" />
        </section>
      </div>
    </div>
  );
};

export default SidebarTop;
