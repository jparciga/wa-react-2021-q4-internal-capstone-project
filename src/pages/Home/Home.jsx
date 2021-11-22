import Banner from "../../components/Banner";
import HotProducts from "../../components/HotProducts";
import Slider from "../../components/Slider";

export default function Home() {
  let bannerList =
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

  return (
    <>
      <Slider contentList={bannerList} autoPlaySeconds={3000} />
      <HotProducts />
    </>
  );
}
