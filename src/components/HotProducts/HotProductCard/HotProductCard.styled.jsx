import styled from "styled-components";

export const HotProductCardContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  cursor: pointer;
  margin-bottom: 60px;
`;

export const HotImage = styled.img`
  height: 14.375rem;
`;

export const HotName = styled.p`
  font-size: 1.125rem;
  font-weight: 700;
  margin-bottom: 5px;
`;

export const HotPrice = styled.p`
  font-weight: 700;
  color: ${({ theme }) => theme.gray};
`;

export const HotBlankCard = styled.div`
  height: 14.375rem;
  width: 14.375rem;
`;
