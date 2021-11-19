import { HeroOption, HeroSelector } from "./Hero.styled";
import HeroCarousel from "./HeroCarousel/HeroCarousel";

export default function Hero() {
  return (
    <>
      <HeroCarousel />
      <HeroSelector>
        <HeroOption active />
        <HeroOption />
        <HeroOption />
      </HeroSelector>
    </>
  );
}
