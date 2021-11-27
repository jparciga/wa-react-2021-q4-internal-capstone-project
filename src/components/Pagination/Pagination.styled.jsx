import styled from "styled-components";

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;

  button:not(:first-child) {
    margin-left: 10px;
  }
`;

export const PaginationButton = styled.button`
  background: ${({ active, theme }) =>
    active ? theme.accentWeak : theme.light};
  border: solid ${({ theme }) => theme.accentWeak};
  border-radius: 5px;
  height: 30px;
  width: 30px;
  font-size: 0.875rem;
  font-weight: 700;
  color: ${({ active, theme }) => (active ? theme.light : theme.accentWeak)};
`;
