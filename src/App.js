import Header from './layout/Header';
import Footer from './layout/Footer';
import Home from './page/Home'
import styled from 'styled-components';

//#region Styled Components
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  justify-content: flex-start;
  width: 100vw;
  height: 100vh;
`;

const Content = styled.div`
  flex-grow: 1;
  width: 100%;
  padding: 0 2rem;
  box-sizing: border-box;
`;
//#endregion

function App() {
  return (
    <Wrapper>
      <Header />
      <Content>
        <Home />
      </Content>
      <Footer />
    </Wrapper>
  );
}

export default App;
