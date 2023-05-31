import styled from "styled-components";

const Title = () => {
  return (
    <Wrapper>
      <Header>Wordle</Header>
      {/* <Line></Line> */}
    </Wrapper>
  );
};

export default Title;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Header = styled.h1`
  font-family: Helvetica, sans-serif;
`;

const Line = styled.div`
  width: 100vw;
  border-bottom: 1px solid black;
`;
