import { useEffect, useState } from "react";
import styled from "styled-components";
import Keyboard from "./Keyboard";
import Board from "./Board";

const App = () => {
  const [word, setWord] = useState([]);
  const [guessedLetter, setGuessedLetter] = useState([]);
  const [turns, setTurns] = useState({});

  useEffect(() => {
    fetch(`https://random-word-api.vercel.app/api?words=1&length=5
    `)
      .then((res) => res.json())
      .then((data) => {
        setWord(data[0].split(""));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Wrapper>
      <div>
        <Board guessedLetter={guessedLetter} />
        <Keyboard
          guessedLetter={guessedLetter}
          setGuessedLetter={setGuessedLetter}
          word={word}
        ></Keyboard>
      </div>
    </Wrapper>
  );
};

export default App;

const Wrapper = styled.div`
  max-width: 100vw;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
