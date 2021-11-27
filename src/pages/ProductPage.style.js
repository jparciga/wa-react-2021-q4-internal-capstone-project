import styled from 'styled-components';

export const ProductPageContent = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
  grid-template-areas:
    'sidebar main'
    'empty pagination';

  @media (max-width: 780px) {
    grid-template-columns: 100% 100%;
    grid-template-areas:
      'sidebar main'
      'empty pagination';
  }
`;
