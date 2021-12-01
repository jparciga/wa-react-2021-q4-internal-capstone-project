import styled from "styled-components";

const LoadingSpan = styled.span`
  grid-column: 2 / span 4;
  text-align: center;
  font-size: 1.875rem;
`;

export default function Loading() {
  return <LoadingSpan>Loading...</LoadingSpan>;
}
