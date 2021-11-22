import styled from "styled-components";

export const SliderControls = styled.div`
  grid-column: 2 / span 4;
  text-align: center;
  margin-bottom: 45px;

  *:not(:first-child) {
    margin-left: 13px;
  }
`;

export const SliderButton = styled.span`
  cursor: pointer;
  font-size: 25px;
  user-select: none;
`;
