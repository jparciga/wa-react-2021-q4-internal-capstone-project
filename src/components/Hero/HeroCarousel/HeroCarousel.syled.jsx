import styled from "styled-components";

export const TitleAccent = styled.span`
  font-family: "Work Sans", "Lato", sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.accent};
`;
