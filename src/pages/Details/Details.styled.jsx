import styled from "styled-components";

export const DetailsContainer = styled.div`
  grid-column: 2 / span 4;
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
`;

export const GalleryContainer = styled.div`
  width: 500px;
  margin: 15px;
`;

export const ProductInformation = styled.div`
  width: 500px;
  margin: 15px;
`;

export const Header = styled.div`
  margin-bottom: 15px;
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 2.25rem;
`;

export const Label = styled.span`
  font-weight: 700;
  font-size: inherit;
`;

export const Data = styled.p`
  margin-bottom: 15px;
`;

export const Info = styled.p`
  font-style: italic;
  font-size: 0.875rem;
`;

export const Price = styled.p`
  font-size: 1.875rem;
  font-weight: 700;
  color: ${({ theme }) => theme.accent};
  margin-bottom: 15px;
`;
