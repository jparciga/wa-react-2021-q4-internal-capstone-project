import { Link } from "react-router-dom";
import styled from "styled-components";

export const ProductContent = styled(Link)`
  display: flex;
  cursor: pointer;
  width: 100%;
  height: 320px;
  border: solid 2px ${({ theme }) => theme.accentWeak};
  border-radius: 10px 10px 0px 0px;
`;

export const ProductInfo = styled.div`
  padding: 0px 10px;
`;

export const ProductImage = styled.img`
  height: 14.375rem;
`;

export const ProductCategory = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.darkWeak};
  font-style: italic;
  text-align: center;
`;

export const ProductName = styled.p`
  font-size: 1.125rem;
  font-weight: 700;
  text-align: center;
`;

export const ProductPrice = styled.p`
  font-weight: 700;
  text-align: center;
  color: ${({ theme }) => theme.accentWeak};
  margin-bottom: 10px;
`;

export const AddToCart = styled.button`
  width: 100%;
  height: 80px;
  font-weight: 700;
  font-size: 1.125rem;
  border-radius: 0px 0px 10px 10px;
  border: none;
  color: ${({ theme }) => theme.light};
  background-color: ${({ theme }) => theme.accentWeak};
`;

export const ContentLeft = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-around;
  width: 250px;
  height: inherit;
`;

export const ContentRight = styled.div`
  width: 350px;
  height: 94%;
  margin: 10px 10px 10px 0px;
  padding-left: 10px;
  border-left: solid 2px ${({ theme }) => theme.accentWeak};
`;
