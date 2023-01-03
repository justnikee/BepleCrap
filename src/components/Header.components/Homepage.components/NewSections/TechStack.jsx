import React from "react";
import gsap from "gsap";
import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import htmllogo from "../../../../assets/PortfolioWorkimages/html.webp";
import csslogo from "../../../../assets/PortfolioWorkimages/css-3.webp";
import jslogo from "../../../../assets/PortfolioWorkimages/js.webp";
import sasslogo from "../../../../assets/PortfolioWorkimages/sass.webp";
import tailwindlogo from "../../../../assets/PortfolioWorkimages/Tailwind.webp";
import react from "../../../../assets/PortfolioWorkimages/react.webp";
import Fmotion from "../../../../assets/PortfolioWorkimages/motion.svg";
import Ggsap from "../../../../assets/PortfolioWorkimages/gsap.svg";
import Tools from "./Tools";

const techImages = [
  {
    name: "html",
    link: htmllogo,
  },
  {
    name: "css",
    link: csslogo,
  },
  {
    name: "js",
    link: jslogo,
  },
  {
    name: "sass",
    link: sasslogo,
  },
  {
    name: "Tailwind",
    link: tailwindlogo,
  },
  {
    name: "react",
    link: react,
  },
];

const AnimeImages = [
  {
    name: "Framer Motion",
    link: Fmotion,
  },
  {
    name: "gsap",
    link: Ggsap,
  },
];

gsap.registerPlugin(ScrollTrigger);

const TechStack = ({ transition }) => {
  const heading_ref = useRef(null);

  useEffect(() => {
    const el = heading_ref.current;
    gsap.fromTo(
      el,
      { y: 100 },
      {
        y: 0,
        scrollTrigger: {
          trigger: el,
          start: "top center",
          triggerAction: "restart none none none",
        },
      }
    );
  });

  return (
    <>
      <section className="flex justify-center items-center w-screen h-full">
        <div className="flex w-full h-full relative">
          <h2
            ref={heading_ref}
            className="heading__stack font-[syne] text-6xl font-bold bg-black text-white h-screen w-full sticky top-0 flex justify-center items-center"
          >
            Texh <br></br> Staxk
          </h2>
          <aside className="flex flex-col h-full w-full">
            <div className="h-screen bg-[#FFC700] border-l-2 border-b-2 border-black flex flex-col justify-center items-center gap-5">
              <motion.h1
                initial={{
                  opacity: 0,
                  x: 100,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { delay: 0.2, ...transition },
                }}
                className="text-3xl font-[syne] italic text-white border-x-slate-700"
              >
                FrontEnd Technologies
              </motion.h1>
              <motion.div
                initial={{
                  opacity: 0,
                  x: 300,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { delay: 0.6, ...transition },
                }}
                className="text-5xl font-[syne] text-black-400 bold flex gap-8"
              >
                {techImages.map((item, key) => {
                  return (
                    <div
                      className="flex flex-col gap-1 items-center justify-center"
                      key={key}
                    >
                      <img
                        className="w-10 h-10"
                        src={item.link}
                        alt={item.name}
                      />
                      <p className="text-2xl font-sans uppercase ">
                        {item.name}
                      </p>
                    </div>
                  );
                })}
              </motion.div>
              <motion.h1
                initial={{
                  opacity: 0,
                  x: 100,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { delay: 0.2, ...transition },
                }}
                className="text-3xl font-[syne] italic text-white border-x-slate-700"
              >
                Animation Libraries
              </motion.h1>
              <motion.div
                initial={{
                  opacity: 0,
                  x: 300,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { delay: 0.6, ...transition },
                }}
                className="text-5xl font-[syne] text-black-400 bold flex gap-8"
              >
                {AnimeImages.map((item, key) => {
                  return (
                    <div
                      className="flex flex-col gap-1 items-center justify-center"
                      key={key}
                    >
                      <img
                        className="w-10 h-10"
                        src={item.link}
                        alt={item.name}
                      />
                      <p className="text-2xl font-sans uppercase ">
                        {item.name}
                      </p>
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
};

export default TechStack;
