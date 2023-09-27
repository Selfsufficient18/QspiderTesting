import React from "react";
import { Outlet } from "react-router-dom";
import { CiMenuKebab } from "react-icons/ci";
import LinkRightPanel from "./LinkRightPanel";

const LinkMain = () => {
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
            <LinkRightPanel />
          </div>
        </section>
      </main>
    </>
  );
};

export default LinkMain;
