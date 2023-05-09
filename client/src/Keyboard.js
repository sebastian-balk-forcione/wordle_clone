import letters from "../src/data/letters.json";
import styled from "styled-components";
import { FiDelete } from "react-icons/fi";

const Keyboard = ({ guessLetter, setGuessLetter }) => {
  const [topRow, mdlRow, btmRow] = letters;

  const handleClick = (ev) => {
    setGuessLetter((guessLetter) => [...guessLetter, ev]);
  };

  const handleDelete = () => {
    setGuessLetter((oldValues) => {
      return oldValues.filter(
        (letter, index) => index !== oldValues.length - 1
      );
    });
  };

  return (
    <Wrapper>
      <Rows>
        {topRow.map((i) => {
          return (
            <button onClick={(ev) => handleClick(ev.target.textContent)}>
              {i}
            </button>
          );
        })}
      </Rows>

      <Rows>
        {mdlRow.map((i) => {
          return (
            <button onClick={(ev) => handleClick(ev.target.textContent)}>
              {i}
            </button>
          );
        })}
      </Rows>

      <Rows>
        <button>Enter</button>
        {btmRow.map((i) => {
          return (
            <button onClick={(ev) => handleClick(ev.target.textContent)}>
              {i}
            </button>
          );
        })}
        <button onClick={() => handleDelete()}>{<FiDelete />}</button>
      </Rows>
    </Wrapper>
  );
};

export default Keyboard;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Letters = styled.span``;

const Rows = styled.div`
  display: flex;
  flex-direction: row;
`;
