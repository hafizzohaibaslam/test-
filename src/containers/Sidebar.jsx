import React, { useEffect } from "react";
import { xIcon } from "../assets";
import SidebarLink from "../components/SidebarLink";

const Sidebar = ({ isSidebarExpanded, toggleSidebar }) => {
  useEffect(() => {
    if (isSidebarExpanded) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [isSidebarExpanded]);
  return (
    <>
      {isSidebarExpanded && (
        <div
          className="fixed top-0 left-0 right-0 bottom-0 bg-black opacity-50 z-40"
          onClick={toggleSidebar}></div>
      )}
      <aside
        className={`max-w-md w-full font-primary max-h-screen fixed overflow-y-auto top-0 bottom-0 bg-white z-50 transition-left duration-300 md:max-w-full ${
          isSidebarExpanded ? "left-0" : "-left-full"
        }`}>
        <button
          className="absolute p-2 top-6 right-6 hover:opacity-60"
          onClick={toggleSidebar}>
          <img src={xIcon} alt="x icon" />
        </button>
        <div className="py-24 px-20 flex flex-col gap-y-8 items-start md:px-10">
          <SidebarLink onClick={() => toggleSidebar()} to={"/"} text={"Home"} />
          <SidebarLink
            onClick={() => toggleSidebar()}
            to={"/ingredients"}
            text={"Ingredients"}
          />
          <SidebarLink
            onClick={() => toggleSidebar()}
            to={"/approach"}
            text={"Approach"}
          />
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
