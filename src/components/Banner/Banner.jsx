import {
  BannerContainer,
  BannerCTA,
  BannerSubtitle,
  BannerText,
  BannerTitle,
} from "./Banner.styled";

export default function Banner({ title, subtitle, text, image }) {
  return (
    <BannerContainer image={image}>
      <BannerCTA>
        <BannerSubtitle>{subtitle}</BannerSubtitle>
        <BannerTitle>{title}</BannerTitle>
        <BannerText>{text}</BannerText>
      </BannerCTA>
    </BannerContainer>
  );
}
