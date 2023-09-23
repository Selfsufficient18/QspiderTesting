import React from "react";
import SidebarTop from "./SidebarTop";
import SidebarBody from "./SidebarBody";

const Sidebar = () => {
  return (
    <div>
      <div className="px-3">
        <SidebarTop />
      </div>
      <div>
        <SidebarBody />
      </div>
    </div>
  );
};

export default Sidebar;
