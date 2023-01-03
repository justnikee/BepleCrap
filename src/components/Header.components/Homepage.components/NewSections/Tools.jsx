import React from "react";
import { motion } from "framer-motion";
import gitimg from "../../../../assets/PortfolioWorkimages/git.svg";
import yarnimg from "../../../../assets/PortfolioWorkimages/yarn.svg";
import npmimg from "../../../../assets/PortfolioWorkimages/npm.svg";
import bashimg from "../../../../assets/PortfolioWorkimages/bash.svg";

const Images = [
  {
    name: "git",
    link: gitimg,
  },
  {
    name: "yarn",
    link: yarnimg,
  },
  {
    name: "npm",
    link: npmimg,
  },
  {
    name: "bash",
    link: bashimg,
  },
];

const Tools = () => {
  return (
    <>
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
        Tools
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
        {Images.map((item, key) => {
          return (
            <div
              className="flex flex-col gap-1 items-center justify-center"
              key={key}
            >
              <img className="w-10 h-10" src={item.link} alt={item.name} />
              <p className="text-2xl font-sans uppercase ">{item.name}</p>
            </div>
          );
        })}
      </motion.div>
    </>
  );
};

export default Tools;
