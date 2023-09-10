import styled, { keyframes, css } from "styled-components";
import { useEffect, useState } from "react";
import { hasLost } from "./functions";

const Board = ({ guessedLetter, colorRoadMap, letterArray, counter }) => {
  // Builds board squares
  const squares = [];
  for (let i = 0; i < 30; i++) {
    squares.push(<Square></Square>);
  }

  useEffect(() => {
    detectKeyDown();
  }, [guessedLetter]);

  const turnObject = {
    1: [0, 1, 2, 3, 4],
    2: [5, 6, 7, 8, 9],
    3: [10, 11, 12, 13, 14],
    4: [15, 16, 17, 18, 19],
    5: [20, 21, 22, 23, 24],
    6: [25, 26, 27, 28, 29],
  };

  const detectKeyDown = () => {
    return guessedLetter.length > 5 ? false : true;
  };

  // const deBugger = (turnObject, index, counter) => {
  //   console.log(true);
  //   // console.log(turnObject[counter][index % 5] === index);
  // };

  return (
    <ParentWrapper>
      <Wrapper>
        {squares.map((i, index) => {
          return (
            <Square
              key={index}
              style={
                colorRoadMap.length ? colorRoadMap[index] : { color: "black" }
              }
              counter={counter}
              index={index}
              turnObject={turnObject}
              guessedLetter={guessedLetter}
              letterArray={letterArray}
              detectKeyDown={detectKeyDown}
              hasLost={hasLost}
            >
              {letterArray.length > index
                ? letterArray[index]
                : turnObject[counter][index % 5] == index
                ? guessedLetter[index % 5]
                : " "}
            </Square>
          );
        })}
      </Wrapper>
    </ParentWrapper>
  );
};

export default Board;
const media = {
  mobile: "@media(max-width: 300px)",
  smallHeight: "@media(max-height: 690px)",
};

const ParentWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 30px;
  ${media.smallHeight} {
    margin-bottom: 0;
  }
`;
const Wrapper = styled.div`
  display: grid;
  grid-template: repeat(6, 1fr) / repeat(5, 1fr);
  grid-gap: 10px 10px;
`;

const shakeAnimation = keyframes`
0%   {transform: rotate(0)}
10%{ transform: rotate(10deg)}
20%{ transform: rotate(20deg)}
30%{ transform: rotate(10deg)}
40%{ transform: rotate(20deg)}
50% {transform: rotate(0deg)}
60%{ transform: rotate(-10deg)}
70%{ transform: rotate(-20deg)}
80%{ transform: rotate(-10deg)}
90%{ transform: rotate(-5deg)}
100% {transform: rotate(0)}`;

const Square = styled.div`
  transition: transform 100ms linear;
  animation: ${(props) =>
    !props.hasLost() &&
    props.turnObject[props.counter][props.index % 5] === props.index &&
    (props.turnObject[props.counter][props.index % 5] % 5) + 1 ===
      props.guessedLetter.length &&
    props.detectKeyDown()
      ? css`
          ${shakeAnimation} 200ms 1
        `
      : "none"};
  animation-timing-function: ease-out;
  animation-delay: 100ms;

  width: 55px;
  height: 55px;
  border: 2px solid lightgray;
  display: inline;
  font-size: 1.5rem;
  text-align: center;
  padding-top: 10px;
  font-weight: bold;
  ${media.mobile} {
    max-width: 16vw;
    max-height: calc(8vh - 10%);
  }
`;
