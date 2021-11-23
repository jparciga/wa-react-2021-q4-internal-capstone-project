import styled from "styled-components";

export const ProductsGridContainer = styled.div`
  grid-column: 2 / span 4;
`;

export const ProductsGridHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ProductsGridTitle = styled.h1`
  font-size: 1.75rem;
  font-weight: 700;
`;

export const ProductsGridOption = styled.span`
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 10px;
  background: ${({ theme, active }) =>
    active ? theme.accentWeak : theme.light};

  :not(:first-child) {
    margin-left: 10px;
  }
`;

export const Grid = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 60px;
`;
