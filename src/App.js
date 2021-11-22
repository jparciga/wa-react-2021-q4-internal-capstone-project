import { useState } from "react";

import "./styles/App.css";
import "./styles/HomeSlider.css";
import "./styles/Product.css";
import "./styles/HomeCategories.css";
import "./styles/BannerComponent.css";
import "./styles/Sidebar.css"
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useFeaturedBanners } from "./utils/hooks/useFeaturedBanners";

// import Home from "./pages/Home";

//JSON data
import Banners from "./mocks/en-us/featured-banners.json";
import Categories from "./mocks/en-us/product-categories.json";
import FeaturedProducts from "./mocks/en-us/featured-products.json";
import Products from "./mocks/en-us/products.json";

//Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeSliderComponent from "./components/HomeSlider";
import HomeCategoriesComponent from "./components/HomeCategories";
import FeaturedProductsComponent from "./components/FeaturedProducts";
import AllProducts from "./components/AllProducts";

// Transform Banners to Array Of Banners
const BannersArray = [];

for (var bannerCounter in Banners.results) {
  var banner = Banners.results[bannerCounter];

  BannersArray.push({
    title: banner.data.title,
    description: banner.data.description[0].text,
    image: banner.data.main_image.url,
  });
}

const CategoriesArray = [];

  for (var categoriesCounter in Categories.results) {
    var category = Categories.results[categoriesCounter];

    CategoriesArray.push({
      name: category.data.name,
      id: category.id,
      selected: false
    });
  }

  const FeaturedProductsArray = [];

  for (var featuredProductCounter in FeaturedProducts.results) {
    var featuredProduct = FeaturedProducts.results[featuredProductCounter];

    FeaturedProductsArray.push({
      id: featuredProduct.id,
      name: featuredProduct.data.name,
      url: featuredProduct.data.mainimage.url,
      price: featuredProduct.data.price,
      categoryId: featuredProduct.data.category.id
    });
  }

  const ProductsArray = [];

  for (var productCounter in Products.results) {
    var product = Products.results[productCounter];

    ProductsArray.push({
      id: product.id,
      name: product.data.name,
      url: product.data.mainimage.url,
      price: product.data.price,
      categoryId: product.data.category.id
    });
  }

const Home = ({ event }) => {
  return (
    <div className="Home">
      <div className="featuredSlider">
        <HomeSliderComponent banners={BannersArray} />
      </div>
      <div className="Categories">
        <HomeCategoriesComponent categories={Categories.results} />
      </div>
      <div className="Products">
        <FeaturedProductsComponent products={FeaturedProductsArray} categories={CategoriesArray} />
        <button className="See-more-button" onClick={() => event()}>
          View all products
        </button>
      </div>
    </div>
  );
};

function App() {
  const [showHome, setHomeShow] = useState(true);
  const [showProducts, setProductsShow] = useState(false);
  const { data, isLoading } = useFeaturedBanners();
  console.log(data, isLoading);

  const changeToHomePage = () => {
    setHomeShow(true);
    setProductsShow(false);
  };

  const changeToProductsPage = () => {
    setHomeShow(false);
    setProductsShow(true);
  };

  return (
    <div className="App">
      <Header event={changeToHomePage} />
      <div className="Body">
        {showHome && <Home event={changeToProductsPage} />}
        {showProducts && <AllProducts products={ProductsArray} categories={CategoriesArray}/>}
      </div>
      <Footer />
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
