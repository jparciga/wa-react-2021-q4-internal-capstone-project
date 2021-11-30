import styled from "styled-components";
import Banner from "../../components/Banner";
import FeaturedProducts from "../../components/FeaturedProducts";
import Slider from "../../components/Slider";
import { LOADING_TEXT } from "../../utils/constants";
import { useCategories } from "../../utils/hooks/useCategories";
import { useFeaturedBanners } from "../../utils/hooks/useFeaturedBanners";
import { useFeaturedProducts } from "../../utils/hooks/useFeaturedProducts";

const Loading = styled.span`
  grid-column: 2 / span 4;
  text-align: center;
  font-size: 1.875rem;
`;

export default function Home() {
  const bannerData = useFeaturedBanners();
  const categoriesData = useCategories();
  const featuredProductsData = useFeaturedProducts();

  const bannerList = bannerData.isLoading
    ? []
    : bannerData.data.results.map(({ data }) => (
        <Banner
          title={data.title}
          text={data.description[0].text}
          image={data.main_image.url}
        />
      ));

  const categories = categoriesData.isLoading
    ? []
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
      {bannerList.length === 0 ? (
        <Loading>{LOADING_TEXT}</Loading>
      ) : (
        <Slider contentList={bannerList} autoPlaySeconds={3000} />
      )}
      {featuredProducts.length === 0 || categories.length === 0 ? (
        <Loading>{LOADING_TEXT}</Loading>
      ) : (
        <FeaturedProducts
          title="Hot Products"
          categories={categories}
          products={featuredProducts}
        />
      )}
    </>
  );
}
