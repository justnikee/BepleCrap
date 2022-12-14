import React, { useEffect } from "react";
import ProfilePicture from "../../../../assets/pp.svg";
import pp from "../../../.././assets/PortfolioWorkimages/main.gif";
import styled from "styled-components";
import gsap from "gsap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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
      <div className="flex h-screen border-b-[3px] border-[#08081b]">
        <div className="flex flex-col gap-10  border-[#08081b] bg-[#ffffff] justify-center items-start p-10 w-[60%]">
          <Heading className="anime text-black text-6xl w-full font-[Syne] overflow-hidden">
            <span className="anim_text font-[Syne] inline-block leading-[64px]">
              Hii Im Nikhil,
            </span>
            <br />
            <span className="anim_text font-[Syne] inline-block leading-[64px]">
              And I Build
            </span>
            <br />
            <span className="anim_text font-[Syne] inline-block leading-[64px]">
              Things For Web
            </span>
          </Heading>
          <SubHeading className="text-2xl w-full font-[MuseoModerno] sub_text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            possimus eius placeat veritatis explicabo ipsam debitis in nulla,
            est soluta!
          </SubHeading>
          <Link to="/contact">
            <motion.button
              initial={{
                opacity: 0,
                y: 100,
              }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 2, ...transition },
              }}
              whileHover={{
                boxShadow: "none",
                ease: "linear",
              }}
              className=" bg-[#ffc900] px-16 py-3 border-[3px] border-black rounded-xl border-r-black shadow uppercase font-bold "
            >
              contact now
            </motion.button>
          </Link>
        </div>
        <div className="flex flex-col relative  bg-[#ffffff]  justify-center items-end w-[40%]">
          <div className="p-20">
            <motion.img
              initial={{
                opacity: 0,
                y: 200,
              }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 3, ...transition },
              }}
              className="h-full w-96"
              src={pp}
              alt=""
            />
          </div>
        </div>
      </div>
      {/* <div className="h-screen w-screen bg-slate-600 flex justify-center items-center">
        <h1>section 2</h1>
      </div> */}
    </>
  );
};

// const Button = styled.button`
//   /* clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0% 100%);
//   opacity: 0;
//   transform: translateY(100px); */
// `;

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
