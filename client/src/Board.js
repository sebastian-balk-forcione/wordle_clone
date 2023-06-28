import styled, { keyframes } from "styled-components";
import { useEffect } from "react";

const Board = ({
  guessedLetter,
  colorRoadMap,
  letterArray,
  setLetters,
  counter,
  gameStatus,
}) => {
  // Builds board squares
  const squares = [];
  for (let i = 0; i < 30; i++) {
    squares.push(<Square></Square>);
  }

  // useEffect(() => {
  //   console.log(guessedLetter.length);
  // }, [guessedLetter]);

  const turnObject = {
    1: [0, 1, 2, 3, 4],
    2: [5, 6, 7, 8, 9],
    3: [10, 11, 12, 13, 14],
    4: [15, 16, 17, 18, 19],
    5: [20, 21, 22, 23, 24],
    6: [25, 26, 27, 28, 29],
  };

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
            >
              {letterArray.length > index
                ? letterArray[index]
                : turnObject[counter][index % 5] === index
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

// const KeyPressAnimation = keyframes`
// 0%   {width: 55px; height: 55px}
//   25%  {width: 67px; height: 67px}
//   50%  {width: 70px; height: 70px}
//   75%  {width: 67px; height: 67px}
//   100% {width: 55px; height: 55px}`;

const Square = styled.div`
  transition: 1s, transform 2s;
  transform: ${(props) =>
    props.turnObject[props.counter][props.index % 5] === props.index &&
    props.turnObject[props.counter][props.index % 5] + 1 ===
      props.guessedLetter.length &&
    "rotate(180deg)"};

  animation-duration: 5s;
  animation-iteration-count: 1;
  animation-timing-function: ease-in-out;
  width: 55px;
  height: 55px;
  border: 2px solid lightgray;
  display: inline;
  font-size: 1.5rem;
  text-align: center;
  padding-top: 10px;
  font-weight: bold;
  ${media.mobile} {
    /* Need to adjust this */
    max-width: 16vw;
    max-height: calc(8vh - 10%);
  }
`;
