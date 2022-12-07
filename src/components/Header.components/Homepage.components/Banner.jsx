import React from "react";
import { useEffect } from "react";
import gsap from "gsap";

import styled from "styled-components";

const Banner = () => {
  useEffect(() => {
    const t1 = gsap.timeline();

    t1.from(".banner_container", {
      x: -200,
      opacity: 0,
      delay: 1,
      duration: 2,
      stagger: {
        amount: 0.6,
      },
    });
    return () => {};
  }, []);
  return (
    <>
      <BannerContainer className="banner_container text-8xl text-white">
        Nikhil
      </BannerContainer>
    </>
  );
};

const BannerContainer = styled.div`
  font-family: "Major Mono Display", monospace;
  background-color: transparent;
  color: #000;
  opacity: 1;
`;

export default Banner;
