import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  grid-column: 2 / span 4;
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

export const TableForm = styled.table`
  margin-bottom: 20px;
  padding: 10px;
  border-spacing: 0px 15px;

  tr {
    vertical-align: top;
  }

  td:first-child {
    text-align: right;
  }

  label {
    margin-right: 10px;
  }

  label,
  input,
  textarea {
    font-size: 1.125rem;
    font-weight: 700;
  }

  input,
  textarea {
    background: ${({ theme }) => theme.accentWeak};
    color: ${({ theme }) => theme.light};
    border: none;
    border-radius: 4px;
    padding: 5px;
  }
`;

export const ZipCodeInput = styled.input`
  width: 65px;
`;

export const TotalSection = styled.div`
  margin-bottom: 20px;
  text-align: center;
`;

export const TotalLabel = styled.span`
  font-weight: 700;
  font-size: 1.5rem;
`;

export const TotalPrice = styled.span`
  margin-left: 10px;
  font-weight: 700;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.accent};
`;

export const ButtonSecition = styled.div`
  display: flex;
  justify-content: space-between;
  height: 50px;
`;

export const LinkButton = styled(Link)`
  width: 45%;
  padding: 13px;
  text-align: center;
  font-weight: 700;
  font-size: 1.275rem;
  background: ${({ theme }) => theme.accentWeak};
  color: ${({ theme }) => theme.light};
  border-radius: 4px;
`;

export const Button = styled.button`
  width: 45%;
  font-weight: 700;
  font-size: 1.275rem;
  background: ${({ theme }) => theme.accentWeak};
  color: ${({ theme }) => theme.light};
  border: none;
  border-radius: 4px;
`;
