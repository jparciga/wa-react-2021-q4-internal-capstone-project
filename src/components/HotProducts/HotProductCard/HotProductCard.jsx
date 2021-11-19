import {
  HotBlankCard,
  HotImage,
  HotName,
  HotPrice,
  HotProductCardContainer,
} from "./HotProductCard.styled";

export default function HotProductCard({ image, name, price, inactive }) {
  return inactive ? (
    <HotBlankCard />
  ) : (
    <HotProductCardContainer>
      <HotImage src={image} alt={name} />
      <HotName>{name}</HotName>
      <HotPrice>{price}</HotPrice>
    </HotProductCardContainer>
  );
}
