import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="flex h-full flex-col-reverse justify-center items-center  border-r">
        <div className="h-[40%] write-verticle text-center ">
          <span className="text-[#ECE7E1]">©/2023</span>
        </div>
        <div className="h-[20%] write-verticle flex justify-start ">
          <div className="h-full w-[1px] bg-[#ECE7E1] "></div>
        </div>
        <div className="h-[40%] flex justify-center">
          <Link
            to="/"
            className="uppercase text-sm write-verticle text-center text-[#ECE7E1] hover:underline "
          >
            home
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
