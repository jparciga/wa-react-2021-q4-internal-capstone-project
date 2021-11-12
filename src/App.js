import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useFeaturedBanners } from "./utils/hooks/useFeaturedBanners";

import Home from "./pages/Home";

function App() {
  const { data, isLoading } = useFeaturedBanners();
  console.log(data, isLoading);

  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        </header>
        <body>
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </body>
      </BrowserRouter>
    </div>
  );
}

export default App;
