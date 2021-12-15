import Header from 'Components/Header';
import Footer from 'Components/Footer';
import Home from 'Components/Pages/Home';
import PageContext from 'Utils/Context/PageContext';
import { useState, useEffect } from 'react';
import { Wrapper, Content } from './App.styles';

function App() {
  const [CurrentPage, setPage] = useState(() => Home);
  useEffect(() => window.scrollTo(0, 0), [CurrentPage]);
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
