import letters from "../src/data/letters.json";
import styled from "styled-components";
import { FiDelete } from "react-icons/fi";

const Keyboard = () => {
  const [topRow, mdlRow, btmRow] = letters;

  return (
    <Wrapper>
      <Rows>
        {topRow.map((i) => {
          return <button>{i}</button>;
        })}
      </Rows>

      <Rows>
        {mdlRow.map((i) => {
          return <button>{i}</button>;
        })}
      </Rows>

      <Rows>
        <button>Enter</button>
        {btmRow.map((i) => {
          return <button>{i}</button>;
        })}
        <button>{<FiDelete />}</button>
      </Rows>
    </Wrapper>
  );
};

export default Keyboard;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Letters = styled.span``;

const Rows = styled.div`
  display: flex;
  flex-direction: row;
`;
