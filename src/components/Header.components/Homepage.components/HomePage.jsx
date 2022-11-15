import React from "react";
import Hero from "./Hero";

import styled from "styled-components";

const Home = styled.div`
  padding: 30px;
`;
const HomePage = () => {
  return (
    <Home>
      <Hero />
    </Home>
  );
};

export default HomePage;
