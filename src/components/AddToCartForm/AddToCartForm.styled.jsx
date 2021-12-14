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

export const AddToCartButton = styled.button`
  width: 280px;
  height: 50px;
  font-weight: 700;
  font-size: 1.125rem;
  border-radius: 5px;
  border: none;
  color: ${({ theme }) => theme.light};
  background-color: ${({ theme }) => theme.accentWeak};

  :disabled {
    background-color: ${({ theme }) => theme.disabled};
  }
`;
