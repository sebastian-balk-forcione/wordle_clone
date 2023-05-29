// EXERCISE: FIGURE OUT ANOTHER WAY TO ACCOMPLISH THIS
export const letterChecker = (guessedLetter, word) => {
  const newArray = [];

  const sortedArray = guessedLetter.slice().sort();
  const multipleValues = sortedArray.filter(
    (i, index) => i === sortedArray[index + 1]
  );

  const roadMap = guessedLetter.forEach((i, index1) => {
    const matchedItem = word.findIndex((e) => {
      return i === e;
    });

    if (i === word[index1]) {
      newArray.push({ color: "green" });
    } else if (matchedItem !== -1) {
      if (multipleValues.includes(i)) {
        console.log("test");
        newArray.push({ color: "blue" });
      } else {
        newArray.push({ color: "orange" });
      }
      // Needs to be more logic in this if block
    } else {
      newArray.push({ color: "grey" });
    }
  });
  return newArray;
};
