import styled from "styled-components";

const Title = () => {
  return (
    <ParentWrapper>
      <Wrapper>
        <Header>Wordle</Header>
      </Wrapper>

      <Line />
    </ParentWrapper>
  );
};

export default Title;
const ParentWrapper = styled.div`
  font-size: 16px;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 0.75vh 0 3vh;

  /* border: 1px solid black;   */
`;

const Header = styled.h1`
  font-weight: bold;
  font-size: 2.5em;
`;

const Line = styled.div`
  border-bottom: 2px solid lightgray;
  margin-bottom: 3vh;
  min-width: 100vw;
`;
