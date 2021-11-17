import HeroContent from "./HeroContent";

export default function Hero() {
  return (
    <>
      <HeroContent
        title={
          <>
            Minimalist <span className="title_accent">Furniture</span> For Your
            Personal Space
          </>
        }
        subtitle="Most Popular 2021"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
          laboriosam laudantium voluptatem quaerat aspernatur perspiciatis qui
          libero accusantium culpa exercitationem. Sint, natus? Aspernatur
          corrupti perspiciatis, illo delectus quam quas vel."
        buttonText="Shop Now"
      />
      <img src="images/hero-shelf.jpg" alt="Shelf" className="hero_image" />
      <nav className="hero_selector">
        <span className="hero1"></span>
        <span className="hero2"></span>
        <span className="hero3"></span>
      </nav>
    </>
  );
}
