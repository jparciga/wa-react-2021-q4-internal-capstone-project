import styled from "styled-components";

export const AddToCartContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const AddToCartInput = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const InputLabel = styled.label`
  font-weight: 700;
  margin-right: 15px;
`;

export const InputText = styled.input`
  height: 100%;
  width: 60px;
  margin-right: 1px;
  font-size: 1.125rem;
  text-align: center;
`;

export const InputControls = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  height: 100%;
`;

export const InputButton = styled.button`
  height: 49%;
  width: 25px;
  background: ${({ theme }) => theme.accentWeak};
  border: none;
`;

export const AddToCartButton = styled.button`
  width: 280px;
  height: 50px;
  font-weight: 700;
  font-size: 1.125rem;
  border-radius: 5px;
  border: none;
  color: ${({ theme }) => theme.light};
  background-color: ${({ theme }) => theme.accentWeak};
`;
