import styled from "styled-components";

export const HeroImage = styled.div`
  grid-column: 4 / span 2;
  text-align: right;

  img {
    height: 32.8125rem;
  }
`;

export const HeroSelector = styled.div`
  grid-column: 2 / span 4;
  text-align: center;
  margin-bottom: 45px;
`;

export const HeroOption = styled.span`
  cursor: pointer;

  :after {
    content: "${({ active }) => (active ? "●" : "○")}";
  }

  :not(:first-child) {
    margin-left: 13px;
  }
`;
