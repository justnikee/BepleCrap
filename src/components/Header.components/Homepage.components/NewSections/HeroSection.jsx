import React from "react";
import ProfilePicture from "../../../../assets/61942b84ec3d406199f07d78_vegalia-p-800.png";
import icons from "../../../../assets/6195275a9e5f4655891de886_gum-coins.svg";
import icon2 from "../../../../assets/619f97a0f047aaa46093f3b3_paint-brush.svg";
const HeroSection = () => {
  return (
    <div className="flex h-full ">
      <div className="flex flex-col gap-5 border-r-2 border-b-2 border-black bg-[#FF90E8] justify-center items-start p-10 w-1/2">
        <h1 className="text-black text-7xl w-full">
          Go from <br />
          Zero to $1
        </h1>
        <p className="text-xl w-1/2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          possimus eius placeat veritatis explicabo ipsam debitis in nulla, est
          soluta!
        </p>
        <button className="bg-[#FFC900] px-16 py-3 border-r-black shadow uppercase font-bold ">
          contact now
        </button>
      </div>
      <div className="flex flex-col relative w-1/2 bg-[#ffc900] border-b-2 border-black">
        <div className="p-20">
          <img className="" src={ProfilePicture} alt="" />
        </div>
        <img className="absolute bottom-12 left-6" src={icons} alt="" />
        <img className="absolute right-4 bottom-10" src={icon2} alt="" />
        <button className="absolute bottom-10 right-1/3 bg-orange-500 px-8 uppercase py-2 shadow">
          Nikhil
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
