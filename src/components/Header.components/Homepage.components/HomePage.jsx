import React from "react";
import styled from "styled-components";

import HeroSection from "./NewSections/HeroSection";
import TechStack from "./NewSections/TechStack";

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
    </>
  );
};

export default HomePage;
