import styled from "styled-components";

export const TableContainer = styled.table`
  background: ${({ theme }) => theme.accentWeak};
  width: 100%;
  border-collapse: collapse;
  border-radius: 4px;
  margin-bottom: 15px;
`;

export const AccentRow = styled.tr`
  background: ${({ theme }) => theme.light};
  border-color: ${({ theme }) => theme.light};
`;
