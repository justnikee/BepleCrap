import React from "react";
import "./hero.scss";
const Hero = ({ heading, container_class, heading_class }) => {
  return (
    <div className={container_class}>
      <h1 className={heading_class}>{heading}</h1>
    </div>
  );
};

export default Hero;
