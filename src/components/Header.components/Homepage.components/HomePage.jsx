import React from "react";
import Hero from "./Hero";
import WorkSection from "./work.section";
import WebsiteName from "./websiteName";
import styled from "styled-components";
import BigImageText from "./BigImageText";
import Banner from "./Banner";
import HeroSection from "./NewSections/HeroSection";

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
      <Hero
        heading_class="banner_heading"
        container_class="banner_container"
        heading="nikhil"
      />
      <WorkSection />
      <BigImageText />
      <WebsiteName />
      <Banner />
    </>
  );
};

export default HomePage;
