import React from "react";
import Sidebar from "../components/Header.components/contactus.component/Sidebar";
export const About = () => {
  return (
    <div className="flex">
      <div className="w-[5%]">
        <Sidebar />
      </div>
      <div className="w-[50%]">
        <h1 className="uppercase font-[syne]">About</h1>
      </div>
      <div className="w-[45%]">
        <img src={{ image }} alt="" />
      </div>
    </div>
  );
};
