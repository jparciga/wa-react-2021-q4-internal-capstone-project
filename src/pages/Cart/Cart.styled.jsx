import styled from "styled-components";

export const CartContainer = styled.div`
  grid-column: 2 / span 4;
`;

export const Thumbnail = styled.img`
  width: 100px;
`;

export const RemoveButton = styled.button`
  border: none;
  height: 40px;
  width: 40px;
  font-weight: 700;
  font-size: 1.725rem;
  color: ${({ theme }) => theme.light};
  background: ${({ theme }) => theme.darkWeak};
  border-radius: 4px;
`;
