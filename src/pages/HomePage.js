import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Categories from "../components/Categories/Categories";
import FeaturedProducts from "../components/FeaturedProducts/FeaturedProducts";
import ImageSlider from "../components/ImageSlider/ImageSlider";

import {results as featuredBanners} from '../utils/mocks/en-us/featured-banners.json';

const HomePage = () => {
  return (
    <>
      <Header />
      <ImageSlider featuredBanners={featuredBanners} />
      <Categories />
      <FeaturedProducts />
      <Footer />
    </>
  )
}

export default HomePage;
