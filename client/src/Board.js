import styled from "styled-components";
import { useEffect } from "react";

const Board = ({ guessedLetter, turns, letterArray, setLetters, counter }) => {
  useEffect(() => {}, [turns, guessedLetter]);

  // Builds board squares
  const squares = [];
  for (let i = 0; i < 30; i++) {
    squares.push(<Square></Square>);
  }
  console.log("rerender");
  return (
    <Wrapper>
      {squares.map((i, index) => {
        return (
          <Square
            key={index}
            style={turns.length ? turns[index] : { color: "black" }}
          >
            {/* The else's index is the problem - need a way to always count to 5(4)*/}
            {turns.length > index
              ? letterArray[counter][index]
              : guessedLetter[index]}
          </Square>
        );
      })}
    </Wrapper>
  );
};

export default Board;

const Wrapper = styled.div`
  max-width: 20vw;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
`;

const Square = styled.div`
  width: 30px;
  height: 30px;
  border: 2px solid pink;
  display: inline;
`;
