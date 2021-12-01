import styled from 'styled-components';

export const ProductDetailPageContent = styled.div`
  display: grid;
  grid-template-columns: 50% 35% 15%;
  grid-template-areas: 'images content actions';
  @media (max-width: 780px) {
    grid-template-columns: 100%;
    grid-template-areas:
      'images'
      'content'
      'content';
  }
`;

export const ProductName = styled.h1`
  font-size: 24px;
  font-weight: 400;
  margin: 20px;
`;
export const ProductPrice = styled.div`
  color: #b12704;
  font-size: 18px;
  margin: 20px;
`;
export const ProductSKU = styled.div`
  font-size: 15px;
  margin: 20px;
`;
export const ProductDescription = styled.p`
  font-size: 14px;
  font-weight: 400;
  margin: 20px;
`;
export const ProductCategory = styled.p`
  font-size: 14px;
  font-weight: 400;
  margin: 20px;
`;
export const ProductTags = styled.span`
  padding-right: 15px;
  font-size: 12px;
  margin: 20px;
`;
export const ProductCarousel = styled.div`
  margin: 15px;
  width: 90%;
  max-height: 80vh;
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
export const QuantityButton = styled.button`
  padding: 10px;
  margin: 5px;
`;
export const QuantityInput = styled.input`
  padding: 10px;
  margin: 5px;
  width: 30%;
  text-align: center;
`;

export const ProductSpecs = styled.ul`
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  margin: 20px;
  padding: 15px;
`;
export const ProductSpecItem = styled.li``;
