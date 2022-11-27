import React from "react";
import { motion } from "framer-motion";

export const LeftHero = (props) => {
  return (
    <div className="h-screen flex flex-col gap-5 items-center justify-center">
      <h1 className="text-[#17395C] text-8xl text-center font-['Inter'] font-black text-black-300 uppercase tracking-wider leading-[100px]">
        Hi My name is <br />
        <span className=" font-['Inter'] font-black bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          {props.name}
        </span>
        ,I Build <br />
        things for web
      </h1>
      <motion.button
        className="bg-orange-600 px-12 py-3 "
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => null}
      >
        Motion
      </motion.button>
    </div>
  );
};
