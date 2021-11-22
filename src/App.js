import "./styles/App.css";
import "./styles/HomeSlider.css";
import "./styles/FeaturedProducts.css";
import "./styles/HomeCategories.css";
import "./styles/BannerComponent.css"
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useFeaturedBanners } from "./utils/hooks/useFeaturedBanners";

// import Home from "./pages/Home";

//JSON data
import Banners from "./mocks/en-us/featured-banners.json";
import Categories from "./mocks/en-us/product-categories.json";
import FeaturedProducts from "./mocks/en-us/featured-products.json";

//Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeSliderComponent from "./components/HomeSlider";
import HomeCategoriesComponent from "./components/HomeCategories";
import FeaturedProductsComponent from "./components/FeaturedProducts";

// Transform Banners to Array Of Banners
const BannersArray = [];

for (var i in Banners.results)
{
  var item = Banners.results[i]; 

  BannersArray.push({
    "title":item.data.title,
    "description": item.data.description[0].text,
    "image":item.data.main_image.url
  });
}

const Home = () => {
  return (
    <div className="Home">
      <div className="featuredSlider">
        <HomeSliderComponent banners={BannersArray} />
      </div>
      <div className="Categories">
        <HomeCategoriesComponent categories={Categories.results} />
      </div>
      <div className="Products">
        <FeaturedProductsComponent products={FeaturedProducts.results} />
      </div>
    </div>
  );
};

function App() {
  const { data, isLoading } = useFeaturedBanners();
  console.log(data, isLoading);

  return (
    <div className="App">
      <Header />
      <div className="Body">
        <Home />
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
