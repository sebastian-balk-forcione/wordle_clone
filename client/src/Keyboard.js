import letters from "../src/data/letters.json";
import styled from "styled-components";
import { FiDelete } from "react-icons/fi";

const Keyboard = ({ guessedLetter, setGuessedLetter }) => {
  const [topRow, mdlRow, btmRow] = letters;

  const handleClick = (ev) => {
    if (guessedLetter.length < 5) {
      setGuessedLetter((guessedLetter) => [...guessedLetter, ev]);
    }
  };

  const handleDelete = () => {
    setGuessedLetter((oldValues) => {
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
