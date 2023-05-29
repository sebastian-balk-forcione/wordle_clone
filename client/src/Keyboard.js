import { letterChecker } from "./functions";
import { useEffect } from "react";
import keys from "../src/data/keys.json";
import styled from "styled-components";
import { FiDelete } from "react-icons/fi";

const Keyboard = ({
  guessedLetter,
  setGuessedLetter,
  word,
  setColorRoadMap,
  colorRoadMap,
  setLetters,
  letterArray,
  setCounter,
  counter,
}) => {
  useEffect(() => {
    // Perform actions dependent on guessedLetter state here
    console.log(guessedLetter);
  }, [guessedLetter]);

  useEffect(() => {
    document.addEventListener("keydown", detectKeyDown);
    return () => {
      document.removeEventListener("keydown", detectKeyDown);
    };
  }, [guessedLetter]);

  const [topRow, mdlRow, btmRow] = keys;

  const handleClick = (ev) => {
    // if statement to make sure that each turn doesn't go over 5 letters
    if (guessedLetter.length < 5) {
      setGuessedLetter((guessedLetter) => [...guessedLetter, ev]);
    }
  };

  const detectKeyDown = (e) => {
    if (e.keyCode > 64 && e.keyCode < 91) {
      handleClick(e.key.toUpperCase());
    } else if (e.keyCode === 8) {
      handleDelete();
    } else if (e.keyCode === 13) {
      handleSubmit();
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
    if (guessedLetter.length < 5) {
      return;
    }
    const wordJoined = guessedLetter.join("");
    // Checks if word exists...currently a bug (check "their")
    // fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${wordJoined}
    // `)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     if (data.title) {
    //       // Temp fix
    //       window.alert("Not a valid word");
    //     } else {
    //       const lowerCase = wordJoined.toLowerCase().split("");
    //       const answer = letterChecker(lowerCase, word);
    //       console.log(answer, word);
    //       setTurns(...setTurns, answer);
    //     }
    //   })
    //   .catch((err) => {});
    const toArray = wordJoined.split("");
    const answer = letterChecker(toArray, word);
    setCounter((counter) => counter + 1);
    const addMap = answer.forEach((e) => {
      setColorRoadMap((prevAns) => [...prevAns, e]);
    });
    setGuessedLetter([]);
    const eachGuess = toArray.forEach((i) => {
      setLetters((prevLetters) => [...prevLetters, i]);
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
            <button
              onClick={(ev) => handleClick(ev.target.textContent)}
              onKeyDown={(ev) => {
                console.log(ev);
              }}
            >
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
