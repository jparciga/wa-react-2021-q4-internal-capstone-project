import React from "react"

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

export default Home;