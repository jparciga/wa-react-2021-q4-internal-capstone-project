import styled from 'styled-components';

export const ProductDetailPageContent = styled.div`
  display: grid;
  grid-template-columns: 50% 35% 15%;
  grid-template-areas: 'images content actions';
`;

export const ProductName = styled.h1`
  font-size: 24px;
  font-weight: 400;
`;
export const ProductPrice = styled.div`
  color: #b12704;
  font-size: 18px;
`;
export const ProductSKU = styled.div`
  font-size: 15px;
  margin: 20px 0px;
`;
export const ProductDescription = styled.p`
  font-size: 14px;
  font-weight: 400;
`;
export const ProductTags = styled.span`
  padding-right: 15px;
  font-size: 12px;
`;
export const ProductCarousel = styled.div`
  margin: 15px;
  width: 90%;
  max-height: 80vh;
  background-color: red;
`;

export const ProductActions = styled.div`
  margin: 15px;
  padding-left: 2px;
`;

export const InStock = styled.div`
  font-weight: bold;
  color: green;
  margin: 20px 0px;
`;
