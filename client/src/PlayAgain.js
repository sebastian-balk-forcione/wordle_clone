import styled from "styled-components";

export const PlayAgain = ({ onClick }) => {
  return (
    <>
      <Button onClick={onClick}>Play Again?</Button>
    </>
  );
};

const Button = styled.button`
  width: 10rem;
  padding: 1rem;
  font-size: max(1vw, 1rem);
  cursor: pointer;
`;
