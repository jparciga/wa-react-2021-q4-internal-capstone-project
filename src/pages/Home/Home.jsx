import Banner from "../../components/Banner";
import FeaturedProducts from "../../components/FeaturedProducts";
import Slider from "../../components/Slider";

export default function Home({ changePage }) {
  const bannerList =
    require("../../mocks/en-us/featured-banners.json").results.map(
      ({ data }) => (
        <Banner
          title={data.title}
          subtitle={""}
          text={data.description[0].text}
          image={data.main_image.url}
        />
      )
    );

  const categories =
    require("../../mocks/en-us/product-categories.json").results.map(
      ({ id, data }) => ({
        id,
        name: data.name,
      })
    );

  const products =
    require("../../mocks/en-us/featured-products.json").results.map(
      ({ data }) => ({
        typeId: data.category.id,
        image: data.mainimage.url,
        name: data.name,
        price: data.price,
      })
    );

  return (
    <>
      <Slider contentList={bannerList} autoPlaySeconds={3000} />
      <FeaturedProducts
        title="Hot Products"
        categories={categories}
        products={products}
        changePage={changePage}
      />
    </>
  );
}
