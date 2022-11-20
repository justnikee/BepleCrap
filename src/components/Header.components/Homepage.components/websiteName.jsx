import React from "react";
import Hero from "./Hero";
const image =
  "https://images.unsplash.com/photo-1580715911279-6bc35abc2e4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=440&q=80";
const WebsiteName = () => {
  return (
    <div className="flex gap-2 justify-between">
      <Hero
        heading_class="website_heading"
        container_class="website_container"
        heading="website"
      />
      <div className="flex h-72 w-1/3">
        <img
          className="object-cover w-full border border-black"
          src={image}
          alt=""
        />
      </div>
    </div>
  );
};

export default WebsiteName;
