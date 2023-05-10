// EXERCISE: FIGURE OUT ANOTHER WAY TO ACCOMPLISH THIS
export const letterChecker = (guessedLetter, word) => {
  const newArray = [];
  const roadMap = guessedLetter.forEach((i, index1) => {
    const matchedItem = word.findIndex((e) => {
      return i === e;
    });
    if (i === word[index1]) {
      newArray.push({ status: "correct", color: "green" });
    } else if (matchedItem !== -1) {
      newArray.push({ status: "almost correct", color: "orange" });
    } else {
      newArray.push({ status: "wrong", color: "grey" });
    }
  });
  return newArray;
};
