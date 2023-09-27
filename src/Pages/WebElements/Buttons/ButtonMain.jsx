import React from "react";
import { Outlet } from "react-router-dom";
import ButtonRightPanel from "./ButtonRightPanel";
import { CiMenuKebab } from "react-icons/ci";
import { Toaster } from 'react-hot-toast';

const ButtonMain = () => {
  return (
    <>
      <main className="flex h-[669px] bg-gray-300">
        <section className="textbox_contents bg-[#e3e8e7] h-[630px] overflow-hidden">
          <article>
            <aside>
              <Outlet />
            </aside>
          </article>
          <div>
            <ButtonRightPanel />
          </div>
        </section>
      </main>
    </>
  );
};

export default ButtonMain;
