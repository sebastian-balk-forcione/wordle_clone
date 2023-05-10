import styled from "styled-components";
import { useEffect } from "react";

const Board = ({ guessedLetter, turns }) => {
  useEffect(() => {
    console.log(turns.length);
  }, [turns]);

  const squares = [];
  for (let i = 0; i < 30; i++) {
    squares.push(<Square></Square>);
  }
  const defaultColor = {
    styles: { color: "pink" },
  };
  console.log(turns.length);
  return (
    <Wrapper>
      {squares.map((i, index) => {
        return (
          <Square
            key={index}
            style={turns.length < 0 ? defaultColor.styles : console.log("poop")}
          >
            {guessedLetter[index]}
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
