import React, { useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [isopen, setIsOpen] = useState(false);

  return (
    <div
      className="header_container"
      style={{
        background: "#c3bcb2",
        borderBottom: "1px solid #000",
        display: "flex",
        justifyContent: "center",
        height: "70px",
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
        <div className="uppercase">mohali, Punjab India</div>
        <div className="logo text-3xl">
          <Link className="uppercase" to="/">
            Nikeeyyy
          </Link>
        </div>
        <div
          onClick={() => {
            return setIsOpen(!isopen);
          }}
          className="flex flex-col gap-1.5 cursor-pointer ham_bars"
        >
          <div className="w-8 bg-black top_bar"></div>
          <div className="w-8 bg-black bottom_bar"></div>
        </div>
      </div>

      <div
        className="nav-overlay h-screen flex justify-center items-center flex-col w-screen gap-5"
        style={{
          top: isopen ? "0%" : "-100%",
          transitionDelay: isopen ? "0s" : "0s",
        }}
      >
        <div className="flex items-center gap-8 flex-col">
          <Link onClick={() => setIsOpen(false)} className="flex" to="/">
            <span
              style={{
                color: "#c3bcb2",
              }}
              className="text-xl"
            >
              01
            </span>
            <p className="socials_text text-9xl transition-all duration-1000 ease-in-out uppercase text-center text-grey-500 hover:line-through">
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
            <p className="socials_text text-9xl uppercase text-grey-500 ease-in duration-2000 hover:line-through">
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
            <p className="socials_text text-9xl uppercase text-grey-400 hover:line-through">
              Contact
            </p>
          </Link>
        </div>
        <div className="socials flex gap-4 my-8 ">
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
      </div>
    </div>
  );
};

export default Header;
