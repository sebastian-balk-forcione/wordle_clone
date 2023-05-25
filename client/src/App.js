import { useEffect, useState } from "react";
import styled from "styled-components";
import Keyboard from "./Keyboard";
import Board from "./Board";

const App = () => {
  // Mock word for the purposes of coding during flight
  const [word, setWord] = useState(["S", "L", "A", "T", "E"]);

  // I think the counter should be used to keep track of the previous turns
  const [counter, setCounter] = useState(0);

  // This state keeps track of all previous guesses so that it they can render to the page
  const [letters, setLetters] = useState([]);

  // this state keeps tracks of the guessed letters during each turn. Gets reset after every submit
  const [guessedLetter, setGuessedLetter] = useState([]);

  // This state delivers the color roadmap for the user
  const [colorRoadMap, setColorRoadMap] = useState([]);

  // useEffect(() => {
  //   fetch(`https://random-word-api.vercel.app/api?words=1&length=5
  //   `)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setWord(data[0].split(""));
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  return (
    <Wrapper>
      <div>
        <Board
          guessedLetter={guessedLetter}
          colorRoadMap={colorRoadMap}
          setLetters={setLetters}
          letterArray={letters}
          counter={counter}
        />
        <Keyboard
          guessedLetter={guessedLetter}
          setGuessedLetter={setGuessedLetter}
          word={word}
          setColorRoadMap={setColorRoadMap}
          colorRoadMap={colorRoadMap}
          setLetters={setLetters}
          letterArray={letters}
          counter={counter}
          setCounter={setCounter}
        />
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
