import styled from "styled-components";

export const ProductCardContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  cursor: pointer;
  width: 250px;
`;

export const ProductImage = styled.img`
  height: 14.375rem;
`;

export const ProductCategory = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.darkWeak};
  font-style: italic;
  margin-bottom: 5px;
  text-align: center;
`;

export const ProductName = styled.p`
  font-size: 1.125rem;
  font-weight: 700;
  margin-bottom: 5px;
  text-align: center;
`;

export const ProductPrice = styled.p`
  font-weight: 700;
  text-align: center;
  color: ${({ theme }) => theme.gray};
`;
