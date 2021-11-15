import logo from "./Logo.png";
import "./App.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useFeaturedBanners } from "./utils/hooks/useFeaturedBanners";
import { FaShoppingCart } from "react-icons/fa";

// import Home from "./pages/Home";
import HomeSliderComponent from "./components/HomeSlider";
import Banners from "./mocks/en-us/featured-banners.json";
import HomeCategoriesComponent from "./components/HomeCategories";
import Categories from "./mocks/en-us/product-categories.json";
import FeaturedProductsComponent from "./components/FeaturedProducts";
import FeaturedProducts from "./mocks/en-us/featured-products.json";

const Home = () => {
  return (
    <div className="Home">
      <div className="featuredSlider">
        <HomeSliderComponent banners={Banners.results} />
      </div>
      <div className="Categories">
        {/* <HomeCategories categories={Categories.results} /> */}
      </div>
      <div className="Products">
        <FeaturedProductsComponent products={FeaturedProducts.results}/>
      </div>
    </div>
  );
};

function App() {
  const { data, isLoading } = useFeaturedBanners();
  console.log(data, isLoading);

  return (
    <div className="App">
      <div className="App-header">
        <div>
          <span className="Title">
            <img className="Logo" src={logo} alt="Logo" width="25px" />
            Muebleria Xtrema
          </span>
          <span className="Shopping-options">
            <FaShoppingCart className="Shopping-cart"/>
            <input placeholder="Search" className="Search-input"></input>
          </span>
        </div>
      </div>
      <div className="Body">
        <Home />
      </div>
      <div className="Footer">
      Ecommerce created during Wizeline’s Academy React Bootcamp
      </div>
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
