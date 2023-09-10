import styled from "styled-components";
import { PlayAgain } from "./PlayAgain";

const Status = ({
  setCounter,
  setLetters,
  setColorRoadMap,
  setGameStatus,
  gameStatus,
  text,
  hasWhat,
}) => {
  const handleClick = () => {
    setCounter(1);
    setLetters([]);
    setColorRoadMap([]);
    setGameStatus({ ...gameStatus, hasLost: false });
  };
  return (
    <Wrapper>
      <Header>{text}</Header>
      <PlayAgain onClick={handleClick} />
    </Wrapper>
  );
};

export default Status;

const Wrapper = styled.div`
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const Header = styled.h1`
  font-size: max(5vw, 5rem);
  text-align: center;
`;
