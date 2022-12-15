import React from "react";
import gsap from "gsap";
import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const TechStack = () => {
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
  }, []);

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
            <div className="h-screen bg-[#FFC700] border-l-2 border-b-2 border-black flex justify-center items-center p-60">
              We’ve heard all the reasons to not use smooth scroll. It feels
              hacky. It’s inaccessible. It’s not performant. It’s
              over-engineered. And historically, those were all true. But we
              like to imagine things as they could be, then build them. So, why
              should you use smooth scroll?
            </div>
            <div className="h-screen border-l-2 border-black border-b-2 flex justify-center items-center p-60">
              We’ve heard all the reasons to not use smooth scroll. It feels
              hacky. It’s inaccessible. It’s not performant. It’s
              over-engineered. And historically, those were all true. But we
              like to imagine things as they could be, then build them. So, why
              should you use smooth scroll?
            </div>
            <div className="h-screen border-l-2 border-black border-b-2 flex justify-center items-center p-60 bg-[#FF98A2]">
              We’ve heard all the reasons to not use smooth scroll. It feels
              hacky. It’s inaccessible. It’s not performant. It’s
              over-engineered. And historically, those were all true. But we
              like to imagine things as they could be, then build them. So, why
              should you use smooth scroll?
            </div>
            <div className="h-screen border-l-2 border-black border-b-2 flex justify-center items-center p-60 bg-[#3BB3BD]">
              We’ve heard all the reasons to not use smooth scroll. It feels
              hacky. It’s inaccessible. It’s not performant. It’s
              over-engineered. And historically, those were all true. But we
              like to imagine things as they could be, then build them. So, why
              should you use smooth scroll?
            </div>
          </aside>
        </div>
      </section>
    </>
  );
};

export default TechStack;
