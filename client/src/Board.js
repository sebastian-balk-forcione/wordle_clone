import styled from "styled-components";

const Board = ({ guessedLetter }) => {
  const squares = [];
  for (let i = 0; i < 30; i++) {
    squares.push(<Square></Square>);
  }

  return (
    <Wrapper>
      {squares.map((i, index) => {
        return <Square>{guessedLetter[index]}</Square>;
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
