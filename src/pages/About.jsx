import React from "react";
import Sidebar from "../components/Header.components/contactus.component/Sidebar";
export const About = () => {
  return (
    <div className="flex bg-[#1A1818] h-full relative">
      <div className="w-[5%] fixed h-screen ">
        <Sidebar />
      </div>
      <div className="w-[50%] flex flex-col justify-center pl-12 gap-8 ml-32">
        <h1 className="uppercase font-[syne] text-[#fff] text-8xl italic mt-32">
          About
        </h1>
        <h3 className="text-5xl text-white uppercase font-light italic">
          I'm Nikhil. A Developer,
          <br /> maker and problem solver.
        </h3>
        <p className="text-sm text-white font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
          aspernatur dolores praesentium temporibus corrupti tempora sed
          voluptates, cupiditate atque vel adipisci magnam dolor alias facere.
          Eos officiis ullam hic unde ut reprehenderit voluptate adipisci
          praesentium! Quasi molestias quis nemo reiciendis. At doloribus sequi
          in sint ea nobis placeat, sed iure?
          <br />
          <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
          amet est iure hic velit cumque culpa quas quidem architecto!
          Laboriosam.
        </p>
        <h2 className="text-2xl text-white font-light italic">EXPERIENCE</h2>
        <p className="text-sm text-white font-light">
          - 11 years experience in Web Design <br />
          - 9 years experience in Software Design
          <br />
          - 3 years experience in Front-end Web Development,
          <br />
          - 4 years experience in Webflow Development
          <br />
          - Recent experience in Framer Development
          <br />- 4 years experience in Product Management
        </p>
        <h2 className="text-2xl text-white italic font-light uppercase">
          {" "}
          skills
        </h2>
        <p className="text-sm text-white font-light">
          UI/UX Design / Strategy / Product Management / User Research / Agile{" "}
          <br />
          Methodologies / Collaboration / Design Sprints / Design Systems / HTML{" "}
          <br />
          and CSS / CMS Design & Architecture / Webflow Development / Framer
          <br />
          Development / Photography / Graphic Design
        </p>
      </div>
      <div className="w-[45%]">
        <img src="" alt="" />
      </div>
    </div>
  );
};
