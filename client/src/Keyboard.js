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
      return colorMapBack.backgroundColor;
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
    //       console.log(data.title);
    //       window.alert("Not a valid word");
    //       return;
    //     } else {
    //       console.log(data.title);
    //       const lowerCase = wordJoined.toLowerCase().split("");
    //       const answer = letterChecker(lowerCase, word);
    //       console.log("reaching");
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
      window.alert(`You lost!`);
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

        <Row2 second>
          {mdlRow.map((i) => {
            return (
              <Button2
                onClick={(ev) => handleClick(ev.target.textContent)}
                style={
                  letterArray.includes(i)
                    ? { background: findColor(i) }
                    : { color: "black" }
                }
              >
                {i}
              </Button2>
            );
          })}
        </Row2>

        <Rows>
          <Enter onClick={handleSubmit}>ENTER</Enter>
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

          <Del onClick={() => handleDelete()}>{<FiDelete />}</Del>
        </Rows>
      </Wrapper>
    </ParentWrapper>
  );
};

export default Keyboard;

const media = {
  desktop: "@media(min-width: 500px)",
};

const ParentWrapper = styled.div`
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
`;

const Rows = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 97%;
  padding-top: 10px;
  ${media.desktop} {
    width: 484px;
  }
`;

const Button = styled.button`
  all: unset;
  width: 9%;
  height: 55px;
  text-align: center;
  font-size: 1.15rem;
  border-radius: 5px;
  background-color: lightgray;
  cursor: pointer;
  ${media.desktop} {
    width: 44px;
  }
`;

const Row2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 88%;
  padding-top: 10px;
  ${media.desktop} {
    width: 438px;
  }
`;

const Button2 = styled.button`
  all: unset;
  width: 10.3%;
  height: 55px;
  text-align: center;
  font-size: 1.15rem;
  border-radius: 5px;
  background-color: lightgray;
  cursor: pointer;
  ${media.desktop} {
    width: 44px;
  }
`;

const Enter = styled.button`
  all: unset;
  width: 15%;
  font-size: 75%;
  border-radius: 5px;
  text-align: center;
  margin-right: 4px;
  background-color: lightgray;
  /* ${media.mobile} {
    width: 15vw;
  } */
`;

const Del = styled.button`
  all: unset;
  width: 15%;
  font-size: 125%;
  border-radius: 5px;
  text-align: center;
  background-color: lightgray;
  /* ${media.mobile} {
    width: 15vw;
  } */
`;
