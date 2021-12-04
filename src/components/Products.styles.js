import styled from 'styled-components';
export const ProductList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;
  padding-bottom: 50px;
  align-items: left;
  margin-top: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0px;
    margin: 0px;
  }
`;
export const Product = styled.div`
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
