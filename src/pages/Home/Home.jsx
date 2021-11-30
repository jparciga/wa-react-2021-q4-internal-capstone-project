import Banner from "../../components/Banner";
import FeaturedProducts from "../../components/FeaturedProducts";
import Slider from "../../components/Slider";
import { LOADING_TEXT } from "../../utils/constants";
import { useCategories } from "../../utils/hooks/useCategories";
import { useFeaturedBanners } from "../../utils/hooks/useFeaturedBanners";
import { useFeaturedProducts } from "../../utils/hooks/useFeaturedProducts";

export default function Home() {
  const bannerData = useFeaturedBanners();
  const categoriesData = useCategories();
  const featuredProductsData = useFeaturedProducts();

  const bannerList = bannerData.isLoading
    ? [<Banner title={LOADING_TEXT} />]
    : bannerData.data.results.map(({ data }) => (
        <Banner
          title={data.title}
          text={data.description[0].text}
          image={data.main_image.url}
        />
      ));

  const categories = categoriesData.isLoading
    ? [{ id: LOADING_TEXT, name: LOADING_TEXT }]
    : categoriesData.data.results.map(({ id, data }) => ({
        id,
        name: data.name,
      }));

  const featuredProducts = featuredProductsData.isLoading
    ? []
    : featuredProductsData.data.results.map(({ data }) => ({
        typeId: data.category.id,
        image: data.mainimage.url,
        name: data.name,
        price: data.price,
      }));

  return (
    <>
      <Slider contentList={bannerList} autoPlaySeconds={3000} />
      <FeaturedProducts
        title="Hot Products"
        categories={categories}
        products={featuredProducts}
      />
    </>
  );
}
