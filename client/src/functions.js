export const letterChecker = (guessedLetter, word) => {
  const newArray = [];

  const guessedWordDups = valueDuplicates(guessedLetter);
  const wordInPlayDups = valueDuplicates(word);

  const roadMap = guessedLetter.forEach((i, index1) => {
    // matches the index from the guessedLetter mto the word(-1 means letter doesn't match)
    const matchedItem = word.findIndex((e) => {
      return i === e;
    });

    // Finds duplicates that are guessed later in the word so that the color map makes sense
    const foundLetter = newArray.find((x) => x.value === i);

    // THis if block checks to see if the word is a match but first checks if there are duplicates within the word so that they can be treated accordingly
    if (i === word[index1]) {
      console.log("hello");
      if (foundLetter && guessedWordDups.length > 0) {
        newArray.find((x) => {
          if (x.value === i && !wordInPlayDups.includes(i)) {
            x.backgroundColor = "grey";
          }
        });
      }
      newArray.push({
        backgroundColor: "green",
        color: "white",
        border: "none",
        value: i,
      });
      // The below else if checks to if their is a positive index match.
    } else if (matchedItem !== -1) {
      // This check paired with the one above will see if there are any duplicates in the guessedWord and positive index match. That will imediately render it as orange.
      if (guessedWordDups.length === 0) {
        newArray.push({
          backgroundColor: "orange",
          color: "white",
          border: "none",
          value: i,
        });
      } else if (foundLetter && wordInPlayDups.length === 0) {
        // Checks to see if this letter has already been guessed and that there are no duplicates in the word, rendering the tile grey.

        newArray.push({
          backgroundColor: "grey",
          color: "white",
          border: "none",
          value: i,
        });
      } else if (wordInPlayDups.length > 0) {
        // This check is looking for duplcates in the wordInPlay.

        newArray.push({
          backgroundColor: "orange",
          color: "white",
          border: "none",
          value: i,
        });
      } else {
        // catch all orange if the above checks dont go through.
        newArray.push({
          backgroundColor: "orange",
          color: "white",
          border: "none",
          value: i,
        });
      }
    } else {
      // Letter doesn't exist in the word

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
  const answer = roadMap.every((i) => i.backgroundColor === "green");
  return answer;
};

export const hasLost = (counter, roadMap) => {
  if (counter === 6 && !hasWon(roadMap)) {
    return true;
  } else {
    return false;
  }
};
