import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar";
import { CiMenuKebab } from "react-icons/ci";
import { VscSearch } from "react-icons/vsc";
import { CgProfile } from "react-icons/cg";
import { HiOutlineUserGroup } from "react-icons/hi";
import { PiToolboxBold } from "react-icons/pi";
import { LiaHomeSolid } from "react-icons/lia";
import FormComponent from "../../Components/FormComponent";
import RightSideBar from "../../Components/RightSideBar";
import { Inspector } from "react-inspector";
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Link, Outlet, useNavigate } from "react-router-dom";
import signup from './sign.avif'
import Rpanel from "../../Components/rightPanel/Rpanel";
import { Toaster } from "react-hot-toast";
import Stext from "./Scenarios/Stext";

const Text = () => {
  let [clicked, setClicked] = useState(false);


  return (
    <>
      <Navbar />
      <main className="flex h-[669px] bg-gray-300">
        <section className="textbox_contents bg-[#e3e8e7] h-[630px] overflow-hidden">
          <article className="form_content absolute left-[248px] bg-[#e3e8e7] rounded-[20px] top-[70px] ml-[20px] h-[520px] w-[1020px] flex gap-3">
            <Toaster position="top-center" reverseOrder={false}></Toaster>
            <aside className="bg-white rounded-md h-[100%] w-[100%] border border-orange-200 shadow-sm shadow-orange-300 p-5 overflow-y-scroll scrollbar scrollbar-w-2 scrollbar-thumb-[#a8a8a8] scrollbar-track-transparent scrollbar-thumb-rounded-md">
              <Outlet />
            </aside>
          </article>

          <Stext />

          <div>
            <Rpanel />
          </div>
        </section>
      </main>
    </>
  );
};

export default Text;
