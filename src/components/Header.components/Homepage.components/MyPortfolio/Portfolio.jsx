import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { motion } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1630857453903-0386bfb0d990?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
  "https://images.unsplash.com/photo-1635696802234-d86ae1d8a992?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fHJlbmRlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1635323979696-a0279890cf25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fHJlbmRlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1633167606207-d840b5070fc2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjB8fHJlbmRlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
];

const Portfolio = ({ transition }) => {
  const portfolio__trigger = useRef(null);
  const heading = useRef(null);
  const imagesRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    const trigEl = portfolio__trigger.current;
    const headEl = heading.current;
    const imgEl = imagesRef.current;

    tl.fromTo(
      ".anime_image",
      { y: 200, opacity: 0, duration: 2, ease: "power4.out" },
      {
        y: 0,
        opacity: 1,
        duration: 2,
        stagger: 0.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: trigEl,
          start: "top center",
          triggerAction: "restart none none none",
        },
      }
    ).to(imgEl, {
      opacity: 0,
      y: 100,
      duration: 2,
      stagger: 0.2,
    });
  }, []);

  return (
    <>
      <div
        ref={portfolio__trigger}
        className="flex flex-col h-full w-screen gap-8 py-16 px-4 "
      >
        <h1 ref={heading} className="text-7xl font-[syne]">
          {" "}
          My Portfolio{" "}
        </h1>
        <p className="text-lg w-1/2">
          A small gallery of recent projects chosen by me. I've done them all
          together with amazing
          <br /> people from companies around the globe. It's only a drop in{" "}
          <br />
          the ocean compared to the entire list.
        </p>
        <section className="w-screen grid grid-cols-4 gap-4">
          {images.map((img, i) => {
            return (
              <div className="overflow-hidden ">
                <motion.img
                  whileHover={{
                    scale: 1.3,
                    transition: { delay: 0.2, ...transition },
                  }}
                  ref={imagesRef}
                  className="anime_image h-full w-96 object-cover"
                  key={i}
                  src={img}
                ></motion.img>
              </div>
            );
          })}
        </section>
      </div>
    </>
  );
};

export default Portfolio;
