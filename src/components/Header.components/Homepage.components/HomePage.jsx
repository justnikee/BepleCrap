import React from "react";
import Hero from "./Hero";
import WorkSection from "./work.section";
import WebsiteName from "./websiteName";
import styled from "styled-components";
import BigImageText from "./BigImageText";
import NewHero from "./New Hero/NewHero";
import { motion, useScroll } from "framer-motion";
import "../../.././App.css";

const Home = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;
const HomePage = () => {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <motion.div
        className="progressBar"
        style={{
          scaleX: scrollYProgress,
        }}
      >
        {/* <NewHero /> */}
        <Hero
          heading_class="banner_heading"
          container_class="banner_container"
          heading="nikhil"
        />
        <WorkSection />
        <BigImageText />
        <WebsiteName />
      </motion.div>
    </>
  );
};

export default HomePage;
