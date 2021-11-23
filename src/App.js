import './App.css';
import Header from './components/Header';
import Footer from "./components/Footer";
import HomePage from './pages/HomePage';
import ProductsList from './pages/ProductsList';
import { useState } from 'react';

const App = () => {
  const [showHomePage, setShowHomePage] = useState(true);

  const toggleHomePage = () => {
    window.scrollTo(0, 0);
    setShowHomePage(!showHomePage);
  }

  return (
    <div className="App">
      <Header goToHomePage={() => setShowHomePage(true)}/>
      {
        showHomePage ? 
        <HomePage toggleHomePage={toggleHomePage} /> : 
        <ProductsList toggleHomePage={toggleHomePage}/>
      }
      <Footer />
    </div>
  );
};

export default App;
