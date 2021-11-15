import React from 'react';
import ProductsData from '../mocks/en-us/featured-products.json';
import styled from 'styled-components';
const ProductList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;
  padding-bottom: 50px;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0px;
    margin: 0px;
  }
`;
const Product = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  width: 300px;
  margin: auto;
  text-align: center;
  font-family: arial;
  @media (max-width: 768px) {
    width: 90%;
    text-align: center;
    align-items: center;
    margin: 0px;
    margin-bottom: 15px;
  }
`;
const ProductPrice = styled.p`
  color: grey;
  font-size: 22px;
`;
const ProductButton = styled.button`
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

export default function Products({ categoryId }) {
  const products = categoryId
    ? ProductsData.results.filter(
        (prod) => prod.data.category.id === categoryId
      )
    : ProductsData.results;
  return (
    <ProductList>
      {products.map((prod) => {
        return (
          <Product key={prod.id}>
            <h2>{prod.data.name}</h2>
            <div>
              <img
                style={{ width: '100%' }}
                src={prod.data.mainimage.url}
                alt={prod.data.name}
              />
            </div>
            <div> {prod.data.category.slug} </div>
            <ProductPrice> ${prod.data.price} </ProductPrice>
            <ProductButton> Add to Cart </ProductButton>
          </Product>
        );
      })}
    </ProductList>
  );
}
