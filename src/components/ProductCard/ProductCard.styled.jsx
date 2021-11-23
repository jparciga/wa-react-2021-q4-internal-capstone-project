import styled from "styled-components";

export const ProductCardContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  cursor: pointer;
  margin-bottom: 60px;
  width: 250px;
`;

export const ProductImage = styled.img`
  height: 14.375rem;
`;

export const ProductName = styled.p`
  font-size: 1.125rem;
  font-weight: 700;
  margin-bottom: 5px;
`;

export const ProductPrice = styled.p`
  font-weight: 700;
  color: ${({ theme }) => theme.gray};
`;
