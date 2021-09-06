import styled from 'styled-components';
import EmailInput from "./EmailInput"

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Box = styled.div`
  padding: 32px 50px;
  width: 540px;
  box-shadow: 0px 8px 20px rgb(0 0 0 / 20%);
`;
const Title = styled.h1`
  font-size: 22px;
  color: #050038;
  font-weight: 300;
`;

function App() {
  return (
    <Wrapper>
      <Box>
        <Title>Share <b>Project name</b> with others</Title>
        <EmailInput />
      </Box>
    </Wrapper>
  );
}

export default App;
