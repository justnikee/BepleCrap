import React from "react";
import { motion } from "framer-motion";

const transition = {
  duration: 1.4,
  ease: [0.6, 0.1, -0.05, 0.9],
};

const ContactUs = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        width: 0,
      }}
      animate={{
        opacity: 1,
        width: "100%",
        transition: { delay: 0.2, ...transition },
      }}
      exit={{
        opacity: 0,
        width: 0,
        transition: { delay: 0.2, ...transition },
      }}
    >
      <div
        className="flex justify-center items-center"
        style={{
          height: "100vh",
          width: "100%",
          background: "#f54d4c",
          overflow: "hidden",
        }}
      >
        <h1 className="font-[syne] text-6xl">Contact Us</h1>
      </div>
    </motion.div>
  );
};

export default ContactUs;
