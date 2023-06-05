import { letterChecker, hasWon, hasLost } from "./functions";
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
  gameStatus,
  setGameStatus,
}) => {
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

  const findColor = (i) => {
    const hasGreen = colorRoadMap.some((x) => {
      if (x.value === i && x.color === "green") {
        return true;
      }
    });

    const colorMapBack = colorRoadMap.findLast((x) => x.value === i);
    if (hasGreen && colorMapBack.color === "orange") {
      return "green";
    } else {
      return colorMapBack.color;
    }
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
    if (hasWon(answer)) {
      setGameStatus({ ...gameStatus, hasWon: true });
      window.alert("Winner");
      return;
    } else if (hasLost(counter, answer)) {
      window.alert("LOSER");
      return;
    }
  };

  return (
    <ParentWrapper>
      <Wrapper>
        <Rows>
          {topRow.map((i) => {
            return (
              <Button
                onClick={(ev) => handleClick(ev.target.textContent)}
                style={
                  letterArray.includes(i)
                    ? { background: findColor(i) }
                    : { color: "black" }
                }
              >
                {i}
              </Button>
            );
          })}
        </Rows>

        <Rows second>
          {mdlRow.map((i) => {
            return (
              <Button
                onClick={(ev) => handleClick(ev.target.textContent)}
                style={
                  letterArray.includes(i)
                    ? { background: findColor(i) }
                    : { color: "black" }
                }
              >
                {i}
              </Button>
            );
          })}
        </Rows>

        <Rows>
          <Button
            onClick={handleSubmit}
            style={{ width: "60px", fontSize: "80%" }}
          >
            ENTER
          </Button>
          {btmRow.map((i) => {
            return (
              <Button
                onClick={(ev) => handleClick(ev.target.textContent)}
                style={
                  letterArray.includes(i)
                    ? { background: findColor(i) }
                    : { color: "black" }
                }
              >
                {i}
              </Button>
            );
          })}
          <Button
            onClick={() => handleDelete()}
            style={{ width: "55px", fontSize: "110%" }}
          >
            {<FiDelete />}
          </Button>
        </Rows>
      </Wrapper>
    </ParentWrapper>
  );
};

export default Keyboard;

const ParentWrapper = styled.div`
  display: flex;
  justify-content: center;
  /* border: 1px solid black; */
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* border: 1px solid black; */
  min-width: 550px;
`;

const Rows = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 10px;
`;

const Button = styled.button`
  all: unset;
  width: 33px;
  height: 45px;
  padding: 5px;
  text-align: center;
  border-radius: 5px;
  background-color: lightgray;
  /* border: 1px solid black; */
  margin-right: 4px;
`;
