import React, { useEffect } from "react";
import ProfilePicture from "../../../../assets/pp.svg";
import styled from "styled-components";
import gsap from "gsap";

const HeroSection = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: "Power4.inOut", duration: 2 },
    });
    tl.to(".anime", {
      "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
      opacity: 1,
      y: 0,
      duration: 2,
    })
      .to(
        ".sub_text",
        {
          "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
          opacity: 1,
          duration: 1.5,
          y: 0,
        },
        "-=1.5"
      )
      .to(
        ".button",
        {
          "clip-path": "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
          opacity: 1,
          duration: "1",
          y: 0,
        },
        "-=1.2"
      );
  });

  return (
    <>
      <div className="flex h-screen ">
        <div className="flex flex-col gap-5 border-r-2 border-b-2 border-black bg-[#ffffff] justify-center items-start p-10 w-1/2">
          <Heading className="anime text-black text-6xl w-full font-[Syne] overflow-hidden">
            <span className="anim_text font-[Syne] inline-block">
              Hii Im Nikhil
            </span>
            <br />
            <span className="anim_text font-[Syne] inline-block">
              & I Build
            </span>
            <br />
            <span className="anim_text font-[Syne] inline-block">
              Things For Web
            </span>
          </Heading>
          <SubHeading className="text-xl w-1/2 font-[MuseoModerno] sub_text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            possimus eius placeat veritatis explicabo ipsam debitis in nulla,
            est soluta!
          </SubHeading>
          <Button className="button bg-[#ffc900] px-16 py-3 border-r-black shadow uppercase font-bold ">
            contact now
          </Button>
        </div>
        <div className="flex flex-col relative w-1/2 bg-[#ffffff] border-b-2 border-black justify-center items-center">
          <div className="p-20">
            <img className="h-full w-96" src={ProfilePicture} alt="" />
          </div>
        </div>
      </div>
      <div className="h-screen w-screen bg-slate-600 flex justify-center items-center">
        <h1>section 2</h1>
      </div>
    </>
  );
};

const Button = styled.button`
  clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0% 100%);
  opacity: 0;
  transform: translateY(100px);
`;

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
