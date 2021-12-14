import styled from "styled-components";

export const TableContainer = styled.table`
  background: ${({ theme }) => theme.accentWeak};
  color: ${({ theme }) => theme.light};
  width: 100%;
  border-collapse: collapse;
  border-radius: 4px;
  margin-bottom: 15px;

  tr {
    text-align: center;
  }

  th {
    height: 50px;
    background-color: ${({ theme }) => theme.darkWeak};
    border: none;

    :first-child {
      border-radius: 4px 0px 0px 0px;
    }

    :last-child {
      border-radius: 0px 4px 0px 0px;
    }
  }
`;

export const AccentRow = styled.tr`
  background: ${({ theme }) => theme.light};
  border-color: ${({ theme }) => theme.light};
  color: ${({ theme }) => theme.dark};
`;
