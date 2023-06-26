// EXERCISE: FIGURE OUT ANOTHER WAY TO ACCOMPLISH THIS
export const letterChecker = (guessedLetter, word) => {
  const newArray = [];

  const guessedWordDups = valueDuplicates(guessedLetter);
  const wordInPlayDups = valueDuplicates(word);

  const roadMap = guessedLetter.forEach((i, index1) => {
    const matchedItem = word.findIndex((e) => {
      return i === e;
    });

    const foundLetter = newArray.find((x) => x.value === i);

    if (i === word[index1]) {
      if (foundLetter && guessedWordDups.length > 0) {
        newArray.find((x) => {
          if (x.value === i && !wordInPlayDups.includes(i)) {
            x.color = "grey";
          }
        });
      }

      newArray.push({
        backgroundColor: "green",
        color: "white",
        border: "none",
        value: i,
      });
    } else if (matchedItem !== -1) {
      if (guessedWordDups.length === 0) {
        newArray.push({
          backgroundColor: "orange",
          color: "white",
          border: "none",
          value: i,
        });
      } else if (foundLetter && wordInPlayDups.length === 0) {
        newArray.push({
          backgroundColor: "grey",
          color: "white",
          border: "none",
          value: i,
        });
      } else if (wordInPlayDups.length > 0) {
        newArray.push({
          backgroundColor: "orange",
          color: "white",
          border: "none",
          value: i,
        });
      } else {
        newArray.push({
          backgroundColor: "orange",
          color: "white",
          border: "none",
          value: i,
        });
      }
    } else {
      newArray.push({
        backgroundColor: "grey",
        color: "white",
        border: "none",
        value: i,
      });
    }
  });
  return newArray;
};

const valueDuplicates = (word) => {
  const sortedArray = word.slice().sort();
  const multipleValues = sortedArray.filter(
    (i, index) => i === sortedArray[index + 1]
  );
  return multipleValues;
};

export const hasWon = (roadMap) => {
  const answer = roadMap.every((i) => i.color === "green");
  return answer;
};

export const hasLost = (counter, roadMap) => {
  if (counter === 6 && !hasWon(roadMap)) {
    return true;
  }
};
