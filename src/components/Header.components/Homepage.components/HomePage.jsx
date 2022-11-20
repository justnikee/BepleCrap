import React from "react";
import Hero from "./Hero";
import WorkSection from "./work.section";
import WebsiteName from "./websiteName";
import styled from "styled-components";
import BigImageText from "./BigImageText";

const Home = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;
const HomePage = () => {
  return (
    <Home>
      <Hero
        heading_class="banner_heading"
        container_class="banner_container"
        heading="nikhil"
      />
      <WorkSection />
      <BigImageText />
      <WebsiteName />
    </Home>
  );
};

export default HomePage;
