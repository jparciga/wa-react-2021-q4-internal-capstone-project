import styled from 'styled-components';

export const ProductCardItem = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  width: 300px;
  margin: auto;
  text-align: center;
  font-family: arial;
  margin-bottom: 15px;
  @media (max-width: 768px) {
    width: 90%;
    text-align: center;
    align-items: center;
    margin: 0px;
    margin-bottom: 15px;
  }
`;

export const ProductPrice = styled.p`
  color: grey;
  font-size: 22px;
`;
export const ProductButton = styled.button`
  border: none;
  outline: 0;
  padding: 12px;
  color: white;
  background-color: #fea41c;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
`;
export const ProductTitle = styled.h2`
  height: 58px;
`;
