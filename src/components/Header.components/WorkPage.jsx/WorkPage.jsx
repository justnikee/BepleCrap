import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const transition = {
  duration: 1.4,
  ease: [0.6, 0.1, -0.05, 0.9],
};

const WorkPage = () => {
  return (
    <AnimatePresence>
      <div
        className="flex justify-center items-center"
        style={{
          height: "100vh",
          width: "100%",
          background: "transparent",
          overflow: "hidden",
        }}
      >
        <motion.h1
          initial={{
            opacity: 0,
            y: 200,
            transitionDelay: 1,
          }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.2, ...transition },
          }}
          exit={{
            opacity: 0,
          }}
          className="text-6xl font-[syne] uppercase"
        >
          WorkPage
        </motion.h1>
      </div>
    </AnimatePresence>
  );
};

export default WorkPage;
