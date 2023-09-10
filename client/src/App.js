import { useEffect, useState } from "react";
import Keyboard from "./Keyboard";
import Board from "./Board";
import Title from "./Title";
import GlobalStyles from "./GlobalStyles";
import Status from "./Status";

const App = () => {
  // Mock word for the purposes of coding during flight
  const [word, setWord] = useState([]);

  // I think the counter should be used to keep track of the previous turns
  const [counter, setCounter] = useState(1);

  // This state keeps track of all previous guesses so that it they can render to the page
  const [letters, setLetters] = useState([]);

  // this state keeps tracks of the guessed letters during each turn. Gets reset after every submit
  const [guessedLetter, setGuessedLetter] = useState([]);

  // This state delivers the color roadmap for the user
  const [colorRoadMap, setColorRoadMap] = useState([]);

  const [gameStatus, setGameStatus] = useState({
    hasWon: false,
    hasLost: false,
  });

  useEffect(() => {
    fetch(`https://random-word-api.vercel.app/api?words=1&length=5
    `)
      .then((res) => res.json())
      .then((data) => {
        setWord(data[0].toUpperCase().split(""));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [gameStatus]);
  console.log(word, gameStatus);
  return (
    <>
      <GlobalStyles />
      {counter === 7 ? (
        <Status
          setCounter={setCounter}
          setLetters={setLetters}
          setColorRoadMap={setColorRoadMap}
          setGameStatus={setGameStatus}
          gameStatus={gameStatus}
          text={"You Lose!"}
          hasWhat={"hasLost"}
        />
      ) : gameStatus.hasWon ? (
        <Status
          setCounter={setCounter}
          setLetters={setLetters}
          setColorRoadMap={setColorRoadMap}
          setGameStatus={setGameStatus}
          gameStatus={gameStatus}
          text={"You Win!"}
          hasWhat={"hasWon"}
        />
      ) : (
        <>
          <Title />
          <Board
            guessedLetter={guessedLetter}
            colorRoadMap={colorRoadMap}
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
            setGameStatus={setGameStatus}
            gameStatus={gameStatus}
          />
        </>
      )}
    </>
  );
};

export default App;
