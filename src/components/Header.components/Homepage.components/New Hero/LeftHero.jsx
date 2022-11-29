import React, { useEffect } from "react";
import styled from "styled-components";
import gsap from "gsap";

export const LeftHero = () => {
  console.log(gsap);
  useEffect(() => {
    // for timeline in gsap well use timeline
    const t1 = gsap.timeline();

    t1.from(".singleline div ", {
      y: 2000,
      ease: "power4.out",
      delay: 1,
      duration: 2,
      stagger: {
        amount: 0.6,
      },
    });
    return () => {};
  });

  return (
    <AppContainer>
      <Wrapper>
        <Line className="singleline">
          <Text>
            H<span>i </span>
            <span>I'am</span>
          </Text>
        </Line>
        <Line className="singleline">
          <Text>
            <span>Ni</span>k<span>hi</span>L
          </Text>
        </Line>
        <Line className="singleline">
          <Text>
            <span>All </span>
            <span>I </span>
            <span>Do</span>
            <span>B</span>u<span>il</span>D
          </Text>
        </Line>
        <Line className="singleline">
          <Text>
            <span>things </span>
            <span>for we</span>b
          </Text>
        </Line>
      </Wrapper>
    </AppContainer>
  );
};

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: #000;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Line = styled.div`
  width: 100%;
  height: 8vw;
  position: relative;
  /* overflow: hidden; */
  border: 1px solid #fff;

  /* &:nth-of-type(1) {
    display: flex;
    justify-content: flex-end;
  }

  &:nth-of-type(3) {
    display: flex;
    justify-content: center;
  } */
`;

const Text = styled.div`
  position: absolute;
  font-size: 8vw;
  color: #fff;
  line-height: 9vh;

  span {
    font-family: "Major Mono Display", monospace;
    color: azure;
    font-size: 8vw;
  }
`;
