import React from "react";
import styled from "styled-components";

import HeroSection from "./NewSections/HeroSection";
import TechStack from "./NewSections/TechStack";
import Portfolio from "./MyPortfolio/Portfolio";
import "../../.././App.css";

const transition = {
  duration: 1.4,
  ease: [0.6, 0.1, -0.05, 0.9],
};

const Home = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;
const HomePage = () => {
  return (
    <>
      <HeroSection transition={transition} />
      <TechStack transition={transition} />
      <Portfolio transition={transition} />
    </>
  );
};

export default HomePage;
