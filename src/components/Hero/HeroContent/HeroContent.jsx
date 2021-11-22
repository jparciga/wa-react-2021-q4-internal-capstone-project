import {
  HeroButton,
  HeroContentContainer,
  HeroContentCTA,
  HeroSubtitle,
  HeroText,
  HeroTitle,
} from "./HeroContent.styled";

export default function HeroContent({
  title,
  subtitle,
  text,
  buttonText = "Go",
  image,
}) {
  return (
    <HeroContentContainer image={image}>
      <HeroContentCTA>
        <HeroSubtitle>{subtitle}</HeroSubtitle>
        <HeroTitle>{title}</HeroTitle>
        <HeroText>{text}</HeroText>
        <HeroButton>
          {buttonText} <img src="images/arrow.svg" alt="Arrow Button" />
        </HeroButton>
      </HeroContentCTA>
    </HeroContentContainer>
  );
}
