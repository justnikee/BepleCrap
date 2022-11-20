import React from "react";

import styled from "styled-components";

const WorkData = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1626624340240-aadc087844fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    heading: "something",
    desc: "ipsum dolor sit amet consectetur adipisicing elit. Quod officia alias hic repellat explicabo natus id magnam quaerat ipsam illo!",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1578762915100-7a2d602a09bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1062&q=80",
    heading: "something",
    desc: "ipsum dolor sit amet consectetur adipisicing elit. Quod officia alias hic repellat explicabo natus id magnam quaerat ipsam illo!",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1575550597909-fff46d723735?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=797&q=80",
    heading: "something",
    desc: "ipsum dolor sit amet consectetur adipisicing elit. Quod officia alias hic repellat explicabo natus id magnam quaerat ipsam illo!",
  },
];

const ImageTextContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 80px;
  align-items: center;
`;
const Image = styled.img`
  height: 200px;
  width: 28vw;
  object-fit: cover;
`;

const WorkSection = () => {
  return (
    <ImageTextContainer>
      {WorkData.map((item) => {
        return (
          <figure id={item.id} className="flex flex-col gap-2">
            <Image src={item.image} alt={item.heading} />
            <h1 className="font-serif font-semibold uppercase leading-4">
              {item.heading}
            </h1>
            <p>{item.desc}</p>
          </figure>
        );
      })}
    </ImageTextContainer>
  );
};

export default WorkSection;
