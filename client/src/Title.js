import styled from "styled-components";

const Title = () => {
  return (
    <>
      <Wrapper>
        <Header>Wordle</Header>
      </Wrapper>

      <Line />
    </>
  );
};

export default Title;

const media = {
  mobile: "@media(max-width: 300px)",
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 5px 0;
`;

const Header = styled.h1`
  font-weight: bold;
  font-size: 2.5rem;
  ${media.mobile} {
    font-size: 1.8rem;
  }
`;

const Line = styled.div`
  border-bottom: 2px solid lightgray;
  margin-bottom: 15px;
  min-width: 100vw;
`;
