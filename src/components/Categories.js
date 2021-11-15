import React from 'react';
import ProductCategoriesData from '../mocks/en-us/product-categories.json';
import styled from 'styled-components';
const Category = styled.div`
  padding: 15px;
  &:hover {
    cursor: pointer;
    background-color: #111;
  }
  @media (max-width: 768px) {
    width: 91%;
    text-align: center;
    align-items: center;
    margin: 0px;
    margin-bottom: 15px;
  }
`;
const AllCategories = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
  justify-content: space-evenly;
  background-color: #999;
  color: white;
  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    width: 90%;
    text-align: center;
    align-items: center;
    margin: 0px;
    margin-bottom: 15px;
    height: 100%;
    top: 55px;
  }
`;
export default function Categories({ showMenu }) {
  const categories = showMenu ? (
    <AllCategories>
      {ProductCategoriesData.results.map((category) => {
        return <Category key={category.id}>{category.data.name}</Category>;
      })}
    </AllCategories>
  ) : (
    ''
  );
  return categories;
}
