import Header from './layout/Header';
import Footer from './layout/Footer';
import Home from './page/Home';
import styled from 'styled-components';
import { PageContext } from './utils/context/PageContext';
import { useState } from 'react';

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
  const [CurrentPage, setPage] = useState(() => Home);
  const contextData = { page: CurrentPage, navigate: setPage };

  return (
    <Wrapper>
      <PageContext.Provider value={contextData}>
        <Header />
        <Content>
          <CurrentPage />
        </Content>
        <Footer />
      </PageContext.Provider>
    </Wrapper>
  );
}

export default App;
