import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import Categories from "../components/Categories/Categories";
import FeaturedProducts from "../components/FeaturedProducts/FeaturedProducts";
import ImageSlider from "../components/ImageSlider/ImageSlider";

const HomePage = () => {
  return (
    <>
      <Header />
      <ImageSlider />
      <Categories />
      <FeaturedProducts />
      <Footer />
    </>
  )
}

export default HomePage;
