import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const HeroLinks = () => {
  return (
    <>
      <div className="flex gap-8 flex-col font-[syne] text-[#ECE7E1]">
        <Link className="flex" to="/">
          <AnimatePresence>
            <motion.p
              initial={{
                opacity: 0,
                x: 700,
                transitionDelay: 1,
              }}
              animate={{
                opacity: 1,
                x: 0,
                transition: { delay: 3, ease: [0.17, 0.67, 0.83, 0.67] },
              }}
              exit={{
                opacity: 0,
              }}
              className="socials_text text-8xl transition-all hover:italic duration-1000 ease-in-out uppercase text-grey-500 text-[#ECE7E1 ]"
            >
              home
            </motion.p>
          </AnimatePresence>
        </Link>
        <Link className="flex" to="/work">
          <motion.p
            initial={{
              opacity: 0,
              x: 700,
              transitionDelay: 2,
            }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { delay: 3.2, ease: [0.17, 0.67, 0.83, 0.67] },
            }}
            exit={{
              opacity: 0,
            }}
            className="socials_text text-8xl hover:italic uppercase text-grey-500 ease-in duration-2000 text-[#ECE7E1 ]"
          >
            Work
          </motion.p>
        </Link>
        <Link className="flex" to="/contact">
          <motion.p
            initial={{
              opacity: 0,
              x: 700,
            }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { delay: 3.4, ease: [0.17, 0.67, 0.83, 0.67] },
            }}
            exit={{
              opacity: 0,
            }}
            className="socials_text text-8xl uppercase hover:italic text-grey-400 text-[#ECE7E1 ]"
          >
            Contact
          </motion.p>
        </Link>
      </div>
    </>
  );
};

export default HeroLinks;
