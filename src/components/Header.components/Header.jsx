import React, { useEffect, useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [isopen, setIsOpen] = useState(false);
  const [stickyHead, setSticky] = useState();

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  const isSticky = (e) => {
    const scrollTop = window.scrollY;
    const addSticky = scrollTop >= 70 ? "stickyHead" : "";
    setSticky(addSticky);
    console.log(addSticky);
  };

  const stickyClass = `${stickyHead}`;

  return (
    <div
      className={stickyClass}
      style={{
        background: "#ffffff",
        borderBottom: "3px solid #08081b",
        display: "flex",
        justifyContent: "center",
        height: "70px",
        overflow: "hidden",
        width: "100%",
        transition: "1s ease all",
      }}
    >
      <div
        className="w-100 max-w-8xl px-4"
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* <div className="uppercase font-bold w-1/3 font-[syne]">
          Chandigarh, India
        </div> */}
        <div className="text-3xl w-1/3 flex justify-start">
          <Link
            className="uppercase font-extrabold text-[#00483C] font-[syne] "
            to="/"
          >
            Nikeeyyy
          </Link>
        </div>
        <div
          onClick={() => {
            return setIsOpen(!isopen);
          }}
          className="flex flex-col gap-1.5 cursor-pointer ham_bars w-1/3 items-end"
        >
          <div className="w-8 bg-black top_bar"></div>
          <div className="w-8 bg-black bottom_bar"></div>
        </div>
      </div>

      <div
        className="nav-overlay h-screen flex justify-center items-center flex-col w-screen gap-5 fixed"
        style={{
          top: isopen ? "0%" : "-120%",
          transitionDelay: isopen ? "0s" : "0s",
        }}
      >
        <div className="flex items-center gap-8 flex-col font-[syne]">
          <Link onClick={() => setIsOpen(false)} className="flex" to="/">
            <span
              style={{
                color: "#c3bcb2",
              }}
              className="text-xl"
            >
              01
            </span>
            <p className="socials_text text-7xl transition-all duration-1000 ease-in-out uppercase text-center text-grey-500 hover:line-through">
              home
            </p>
          </Link>
          <Link onClick={() => setIsOpen(false)} className="flex" to="/work">
            <span
              style={{
                color: "#c3bcb2",
              }}
              className="text-xl "
            >
              02
            </span>
            <p className="socials_text text-7xl uppercase text-grey-500 ease-in duration-2000 hover:line-through">
              Work
            </p>
          </Link>
          <Link onClick={() => setIsOpen(false)} className="flex" to="/contact">
            <span
              style={{
                color: "#c3bcb2",
              }}
              className="text-xl "
            >
              03
            </span>
            <p className="socials_text text-7xl uppercase text-grey-400 hover:line-through">
              Contact
            </p>
          </Link>
        </div>
        <div className="socials flex gap-4 my-8 font-[syne] ">
          <a href="www.instagram.com">
            <span className="socials_text">Instagram</span>
          </a>
          <a href="www.twitter.com">
            <span className="socials_text">Twitter</span>
          </a>
          <a href="www.linkedin.com">
            <span className="socials_text">Linkedin</span>
          </a>
        </div>
        <div
          className="absolute top-8 right-10 transition duration-1000 ease-in-out  hover:rotate-180 cursor-pointer h-100"
          onClick={() => setIsOpen(false)}
        >
          <div className="h-px w-8 bg-slate-300 rotate-45 hover:scale-110"></div>
          <div className="h-px w-8 bg-slate-300 -rotate-45 hover:scale-125"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
