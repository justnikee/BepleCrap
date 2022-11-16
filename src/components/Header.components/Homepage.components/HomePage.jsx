import React from "react";
import Hero from "./Hero";
import WorkSection from "./work.section";

import styled from "styled-components";

const Home = styled.div`
  padding: 30px;
`;
const HomePage = () => {
  return (
    <Home>
      <Hero />
      <WorkSection />
    </Home>
  );
};

export default HomePage;
