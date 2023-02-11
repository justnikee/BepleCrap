import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="flex flex-col ">
        <div className="h-[40%]">©/2023</div>
        <div className="h-[20%]">
          <div className="h-full w-[2px] bg-black"></div>
        </div>
        <div className="h-[40%]">
          <Link to="/" className="uppercase text-sm ">
            home
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
