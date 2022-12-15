import React from "react";
import styled from "styled-components";

import HeroSection from "./NewSections/HeroSection";
import TechStack from "./NewSections/TechStack";
import Portfolio from "./MyPortfolio/Portfolio";
import "../../.././App.css";

const Home = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;
const HomePage = () => {
  return (
    <>
      <HeroSection />
      <TechStack />
      <Portfolio />
    </>
  );
};

export default HomePage;
