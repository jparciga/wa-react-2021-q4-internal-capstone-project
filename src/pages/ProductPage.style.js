import styled from 'styled-components';

export const ProductPageContent = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
  grid-template-areas:
    'sidebar main'
    'empty pagination';
`;
