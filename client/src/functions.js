// EXERCISE: FIGURE OUT ANOTHER WAY TO ACCOMPLISH THIS
export const letterChecker = (guessedLetter, word) => {
  const newArray = [];
  const roadMap = guessedLetter.forEach((i, index1) => {
    const matchedItem = word.findIndex((e) => {
      return i === e;
    });
    if (i === word[index1]) {
      newArray.push(1);
    } else if (matchedItem !== -1) {
      newArray.push(2);
    } else {
      newArray.push(3);
    }
  });
  return newArray;
};
