import React from "react";
import { Link } from "react-router-dom";
const HeroLinks = () => {
  return (
    <>
      <div className="flex gap-8 flex-col font-[syne]">
        <Link className="flex" to="/">
          <p className="socials_text text-8xl transition-all hover:italic duration-1000 ease-in-out uppercase text-grey-500 hover:text-black">
            home
          </p>
        </Link>
        <Link className="flex" to="/work">
          <p className="socials_text text-8xl hover:italic uppercase text-grey-500 ease-in duration-2000 hover:text-black">
            Work
          </p>
        </Link>
        <Link className="flex" to="/contact">
          <p className="socials_text text-8xl uppercase hover:italic text-grey-400 hover:text-black">
            Contact
          </p>
        </Link>
      </div>
    </>
  );
};

export default HeroLinks;
