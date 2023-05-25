// EXERCISE: FIGURE OUT ANOTHER WAY TO ACCOMPLISH THIS
export const letterChecker = (guessedLetter, word) => {
  const newArray = [];
  const roadMap = guessedLetter.forEach((i, index1) => {
    const matchedItem = word.findIndex((e) => {
      return i === e;
    });
    if (i === word[index1]) {
      newArray.push({ color: "green" });
    } else if (matchedItem !== -1) {
      newArray.push({ color: "orange" });
    } else {
      newArray.push({ color: "grey" });
    }
  });
  return newArray;
};

export const countToFive = (index) => {};
