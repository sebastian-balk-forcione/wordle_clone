import styled from "styled-components";

const Title = () => {
  return (
    <div>
      <Wrapper>
        <Header>Wordle</Header>
      </Wrapper>
      <Line />
    </div>
  );
};

export default Title;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 5px 0 20px;
  /* border: 1px solid black; */
`;

const Header = styled.h1`
  font-weight: bold;
`;

const Line = styled.div`
  border-bottom: 2px solid lightgray;
  margin-bottom: 20px;
`;
