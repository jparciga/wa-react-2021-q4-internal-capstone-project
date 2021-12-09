import styled from "styled-components";

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
  background: ${({ theme }) => theme.accentWeak};
  border: none;
`;
