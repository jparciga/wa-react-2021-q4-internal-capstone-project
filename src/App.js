import logo from "./Logo.png";
import "./App.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useFeaturedBanners } from "./utils/hooks/useFeaturedBanners";

// import Home from "./pages/Home";
import HomeSlider from "./components/HomeSlider";
import Banners from "./mocks/en-us/featured-banners.json";
import HomeCategories from "./components/HomeCategories";
import Categories from "./mocks/en-us/product-categories.json";

const Home = () => {
  return (
    <div className="Home">
      <div className="featuredSlider">
        <HomeSlider banners={Banners.results} />
      </div>
      <div className="Categories">
        <HomeCategories categories={Categories.results} />
      </div>
      <div className="Products"></div>
    </div>
  );
};

function App() {
  const { data, isLoading } = useFeaturedBanners();
  console.log(data, isLoading);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="Logo"/>
      </header>
      <div className="Body">
        <Home />
      </div>
      <div className="Footer"></div>
    </div>

    // <div className="App">
    //   <BrowserRouter>
    //     <header className="App-header">
    //     </header>
    //     <body>
    //       <Routes>
    //         <Route path="/" element={<Home />}></Route>
    //       </Routes>
    //     </body>
    //   </BrowserRouter>
    // </div>
  );
}

export default App;
