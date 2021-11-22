import styled from "styled-components";

export const HotProductsContainer = styled.div`
  grid-column: 2 / span 4;
`;

export const HotHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HotTitle = styled.h1`
  font-size: 1.75rem;
  font-weight: 700;
`;

export const HotOption = styled.span`
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 10px;
  background: ${({ theme, active }) =>
    active ? theme.accentWeak : theme.light};

  :not(:first-child) {
    margin-left: 10px;
  }
`;
