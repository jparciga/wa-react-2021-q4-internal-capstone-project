import './App.css';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Home from './page/Home'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content-wrapper">
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;
