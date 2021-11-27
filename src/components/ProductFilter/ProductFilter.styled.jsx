import styled from "styled-components";

export const ProductFilterSidebar = styled.aside`
  grid-column: 1;
  height: 80vh;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  border-right: solid;
  border-radius: 30%;
  border-color: ${({ theme }) => theme.accentWeak};
`;

export const FilterButton = styled.button`
  height: 50px;
  width: 90%;
  border: none;
  background: ${({ active, theme }) =>
    active ? theme.accentWeak : "transparent"};
  color: ${({ active, theme }) => (active ? theme.light : theme.accent)};
  font-weight: 700;
  border-radius: 10px;
`;

export const FilterDivider = styled.h1`
  width: 90%;
  border: solid;
  border-radius: 10px;
  border-color: ${({ theme }) => theme.accentWeak};
  margin: 10px 0px;
`;

export const ProductFilterContent = styled.div`
  grid-column: 2 / span 4;
  margin-bottom: 30px;
`;
