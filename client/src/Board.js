import styled from "styled-components";
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

  const turnObject = {
    1: [0, 1, 2, 3, 4],
    2: [5, 6, 7, 8, 9],
    3: [10, 11, 12, 13, 14],
    4: [15, 16, 17, 18, 19],
    5: [20, 21, 22, 23, 24],
    6: [25, 26, 27, 28, 29],
  };

  return (
    <Wrapper>
      {squares.map((i, index) => {
        return (
          <Square
            key={index}
            style={
              colorRoadMap.length ? colorRoadMap[index] : { color: "black" }
            }
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
  );
};

export default Board;

const Wrapper = styled.div`
  padding: 0 9.1vw 0 11vw;
  max-width: 20vw;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
`;

const Square = styled.div`
  width: 45px;
  height: 45px;
  border: 2px solid lightgray;
  display: inline;
`;
