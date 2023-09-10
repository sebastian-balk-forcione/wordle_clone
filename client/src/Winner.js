import { PlayAgain } from "./PlayAgain";

const Winner = () => {
  // const handleClick = () => {
  //   setCounter(1);
  //   setLetters([]);
  //   setColorRoadMap([]);
  //   setGameStatus({ ...gameStatus, hasWon: true });
  // };
  return (
    <>
      <h1>You Win</h1>
      <PlayAgain />
    </>
  );
};

export default Winner;
