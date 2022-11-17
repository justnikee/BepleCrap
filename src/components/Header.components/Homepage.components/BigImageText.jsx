import React from "react";
import "./bigimage.css";
const BigImageText = () => {
  return (
    <div className="main_grid">
      <div className="left_side">
        <div className="top_text">
          <p>
            <span className="big_one">intractive</span>
            <span>artist</span>
          </p>
        </div>
        <div className="middle_image">
          <img
            src="https://uploads-ssl.webflow.com/5f2429f172d117fcee10e819/605c6ce3bc0c7d1cd4ca847e_avatar-star-p-800.jpeg"
            alt=""
          />
        </div>
        <div className="bottom_text">
          As a multidisciplinary freelancer, I'm passionate about creating
          iconic digital experiences through motion, typography, and creative
          coding for companies and agencies around the world.
        </div>
      </div>
      <div className="right_side">
        <div className="big_image">
          <img
            src="https://uploads-ssl.webflow.com/5f2429f172d117fcee10e819/605c62f4c78c4ba46a1268be_avatar-1-p-2000.jpeg"
            alt=""
          />
        </div>
        <div className="big_text">
          <p>
            DIGITAL ART DIRECTOR
            <br /> INTERACTIVE DESIGNER
            <br /> CREATIVE DEVELOPER
            <br /> BASED IN AMSTERDAM, NL.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BigImageText;
