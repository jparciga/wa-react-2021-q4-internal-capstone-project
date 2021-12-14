import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
`;

export const Input = styled.input`
  height: 100%;
  width: 60px;
  margin-right: 1px;
  font-size: 1.125rem;
  text-align: center;
`;

export const Controls = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  height: 100%;
`;

export const Button = styled.button`
  height: 49%;
  width: 25px;
  font-weight: 700;
  color: ${({ theme }) => theme.light};
  background: ${({ dark, theme }) =>
    dark ? theme.darkWeak : theme.accentWeak};
  border: none;
  border-radius: 2px;
`;
