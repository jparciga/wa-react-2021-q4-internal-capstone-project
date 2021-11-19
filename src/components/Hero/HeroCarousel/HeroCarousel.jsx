import HeroContent from "../HeroContent";
import { TitleAccent } from "./HeroCarousel.syled";

export default function HeroCarousel({ contentList }) {
  return (
    <HeroContent
      title={
        <>
          Minimalist <TitleAccent>Furniture</TitleAccent> For Your Personal
          Space
        </>
      }
      subtitle="Most Popular 2021"
      text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
          laboriosam laudantium voluptatem quaerat aspernatur perspiciatis qui
          libero accusantium culpa exercitationem. Sint, natus? Aspernatur
          corrupti perspiciatis, illo delectus quam quas vel."
      buttonText="Shop Now"
      image="https://images.prismic.io/wizeline-academy/edaf28da-2e46-4f75-8a69-a972119f40ed_banner-3-2.jpeg?auto=compress,format&rect=0,0,1429,700&w=1440&h=705"
    />
  );
}
