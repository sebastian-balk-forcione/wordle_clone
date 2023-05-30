// EXERCISE: FIGURE OUT ANOTHER WAY TO ACCOMPLISH THIS
export const letterChecker = (guessedLetter, word) => {
  const newArray = [];

  const guessedWordDups = valueDuplicates(guessedLetter);
  const wordInPlayDups = valueDuplicates(word);

  const roadMap = guessedLetter.forEach((i, index1) => {
    const matchedItem = word.findIndex((e) => {
      return i === e;
    });
    if (i === word[index1]) {
      if (
        newArray.find((x) => x.value === i) &&
        guessedWordDups.length > 0 &&
        wordInPlayDups.length === 0
      ) {
        newArray.find((x) => {
          if (x.value === i) {
            x.color = "grey";
          }
        });
      }
      newArray.push({ color: "green", value: i });
    } else if (matchedItem !== -1) {
      if (guessedWordDups.length === 0) {
        newArray.push({ color: "orange", value: i });
      } else if (
        newArray.find((x) => x.value === i) &&
        wordInPlayDups.length === 0
      ) {
        newArray.push({ color: "grey", value: i });
      } else if (wordInPlayDups.length > 0) {
        newArray.push({ color: "orange", value: i });
      } else {
        newArray.push({ color: "orange", value: i });
      }
    } else {
      newArray.push({ color: "grey", value: i });
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
