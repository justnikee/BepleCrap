import React, { useEffect } from "react";
import ProfilePicture from "../../../../assets/pp.svg";
import Love from "../../../../assets/love.svg";
import Death from "../../../../assets/death.svg";
import Robot from "../../../../assets/robot.svg";

import gsap from "gsap";

const HeroSection = () => {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(".anime span", {
      y: 200,
      delay: 0.6,
      duration: 1.1,
      stagger: 0.3,
    }).to(".icon_rotate", 5, {
      rotation: 360,

      repeat: -1,
    });
  });

  return (
    <div className="flex h-screen ">
      <div className="flex flex-col gap-5 border-r-2 border-b-2 border-black bg-[#ffffff] justify-center items-start p-10 w-1/2">
        <h1 className="anime text-black text-6xl w-full font-[Syne] overflow-hidden">
          <span className="anim_text font-[Syne] inline-block overflow-hidden">
            Hii Im Nikhil
          </span>
          <br />
          <span className="anim_text font-[Syne] inline-block overflow-hidden">
            & I Build
          </span>
          <br />
          <span className="anim_text font-[Syne] inline-block">
            Things For Web
          </span>
        </h1>
        <p className="text-xl w-1/2 font-[MuseoModerno]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          possimus eius placeat veritatis explicabo ipsam debitis in nulla, est
          soluta!
        </p>
        <button className="bg-[#ffc900] px-16 py-3 border-r-black shadow uppercase font-bold ">
          contact now
        </button>
      </div>
      <div className="flex flex-col relative w-1/2 bg-[#ffffff] border-b-2 border-black justify-center items-center">
        <div className="p-20">
          <img className="h-full w-96" src={ProfilePicture} alt="" />
        </div>
        <span>
          <img
            className=" icon_rotate w-1/4 absolute top-1/2 right-12"
            src={Love}
            alt=""
          />
        </span>
        <span>
          <img
            className="w-1/4 absolute bottom-1/4 left-6"
            src={Death}
            alt=""
          />
        </span>
        <div>
          <img
            className="icon_rotate w-1/4 absolute top-16 left-10"
            src={Robot}
            alt=""
          />
        </div>
        {/* <img className="absolute bottom-12 left-6 icon" src={icons} alt="" />
        <img className="absolute right-4 bottom-10" src={icon2} alt="" />
        <button className="absolute bottom-10 right-1/3 bg-orange-500 px-8 uppercase py-2 shadow">
          Nikhil
        </button> */}
      </div>
    </div>
  );
};

export default HeroSection;
