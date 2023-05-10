import { letterChecker } from "./functions";
import letters from "../src/data/letters.json";
import styled from "styled-components";
import { FiDelete } from "react-icons/fi";

const Keyboard = ({ guessedLetter, setGuessedLetter, word, setTurns }) => {
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

  const handleSubmit = () => {
    const wordJoined = guessedLetter.join("");
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${wordJoined}
    `)
      .then((res) => res.json())
      .then((data) => {
        if (data.title) {
          // Temp fix
          window.alert("Not a valid word");
        } else {
          const lowerCase = wordJoined.toLowerCase().split("");
          const answer = letterChecker(lowerCase, word);
          console.log(answer, word);
          setTurns(...setTurns, answer);
        }
      })
      .catch((err) => {});
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
        <button onClick={handleSubmit}>Enter</button>
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

const Rows = styled.div`
  display: flex;
  flex-direction: row;
`;
