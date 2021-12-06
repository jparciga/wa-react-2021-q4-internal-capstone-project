import styled from 'styled-components';

export const Button = styled.button`
  border: none;
  outline: 0;
  padding: 12px;
  color: white;
  background-color: red;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
  margin: 10px;
  &.success {
    background-color: #009137;
  }
`;
