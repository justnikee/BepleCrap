import React, { useEffect } from "react";
import styled from "styled-components";
import gsap from "gsap";
import HeroLinks from "../../HeroLinks";
import Sidebar from "../../contactus.component/Sidebar";

const HeroSection = ({ transition }) => {
  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: "Power4.inOut", duration: 2 },
    });
    tl.to(".anime", {
      "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
      opacity: 1,
      y: 0,
      duration: 2,
      delay: 0.2,
    }).to(
      ".sub_text",
      {
        "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        opacity: 1,
        duration: 1,
        y: 0,
        delay: 0.4,
      },
      "-=0.5"
    );
  });

  return (
    <>
      <div className="flex h-screen w-screen border-b-[3px] border-[#ECE7E1]">
        <div className="w-[5%]">
          <Sidebar />
        </div>

        <div className="flex flex-col gap-10 w-[45%] border-[#ECE7E1] bg-[#1A1818] justify-center items-start p-10">
          <Heading className="anime text-[#ECE7E1] font-[Syne] overflow-hidden">
            <span className="anim_text text-3xl  uppercase font-[Montserrat] inline-block ">
              Hi Im Nikhil,
            </span>
            <br />
            <span className="anim_text text-3xl uppercase font-[Montserrat] inline-block ">
              And I Build
            </span>
            <br />
            <span className="anim_text text-3xl uppercase font-[Montserrat] inline-block">
              Things For Web
            </span>
          </Heading>
          <SubHeading className="text-l w-[80%] font-[Montserrat] sub_text text-[#ECE7E1]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            possimus eius placeat veritatis explicabo ipsam debitis in nulla,
            est soluta!
          </SubHeading>
        </div>
        <div className="flex flex-col relative  bg-[#1A1818]  justify-center items-end w-[50%]">
          <div className="p-20">
            <HeroLinks transition={transition} />
          </div>
        </div>
      </div>
    </>
  );
};

const SubHeading = styled.p`
  clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0% 100%);
  opacity: 0;
  transform: translateY(100px);
`;

const Heading = styled.h1`
  clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0% 100%);
  opacity: 0;
  transform: translateY(100px);
`;

export default HeroSection;
