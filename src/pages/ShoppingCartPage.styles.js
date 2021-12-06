import styled from 'styled-components';

export const ShoppingCartContent = styled.div`
  display: flex;
`;
export const ShoppingCartTitle = styled.h1`
  text-align: center;
`;
export const TableProducts = styled.div`
  flex-grow: 4;
  display: grid;
  align-items: center;
  align-content: center;
`;
export const ProductsRow = styled.div`
  padding: 20px;
  display: grid;
  max-width: 1100px;
  grid-template-columns: 5% 20% 40% 20% 15%;
`;
export const RowElement = styled.div`
  align-self: center;
`;
export const TableResume = styled.div`
  padding: 20px;
  flex: 2;
`;

export const Flex1 = styled.div`
  flex: 1;
`;
export const Flex2 = styled.div`
  flex: 2;
`;

export const DeleteButton = styled.div`
  color: #bc2f42;
  &:hover {
    cursor: pointer;
  }
`;
