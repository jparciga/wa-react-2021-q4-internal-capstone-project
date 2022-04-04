import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import NavBar from './navbar/navbar';
import Footer from './footer/footer';
import Home from './home/home'

function App() {
  return(
    <div className='App'>
      <NavBar/>
      <Home/>
      <Footer/>
    </div>
  )
}

export default App;
