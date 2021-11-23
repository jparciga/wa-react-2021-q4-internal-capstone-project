import styled from "styled-components";

export const FeaturedProductsContainer = styled.div`
  grid-column: 2 / span 4;
  display: flex;
  flex-direction: column;
  align-items: space-between;
`;

export const FeaturedProductsHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FeaturedProductsTitle = styled.h1`
  font-size: 1.75rem;
  font-weight: 700;
`;

export const FeaturedProductsOption = styled.span`
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

export const ViewAllButton = styled.button`
  align-self: center;
  margin: 30px 0px;
  width: 300px;
  height: 50px;
  background: transparent;
  color: ${({ theme }) => theme.accent};
  border-color: ${({ theme }) => theme.accent};
  border-style: solid;
  border-radius: 10px;
  font-weight: 700;
  font-size: 1.125rem;
`;
