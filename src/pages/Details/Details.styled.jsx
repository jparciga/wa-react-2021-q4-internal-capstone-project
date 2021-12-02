import styled from "styled-components";

export const GalleryContainer = styled.div`
  grid-column: 2 / span 2;
  justify-self: right;
  width: 500px;
`;

export const ProductInformation = styled.div`
  grid-column: 4 / span 2;
  width: 500px;
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

export const Specs = styled.table`
  background: ${({ theme }) => theme.accentWeak};
  width: 100%;
  border-collapse: collapse;
  border-radius: 4px;
  margin-bottom: 15px;
`;

export const AccentRow = styled.tr`
  background: ${({ theme }) => theme.light};
  border-color: ${({ theme }) => theme.light};
`;

export const Price = styled.p`
  font-size: 1.875rem;
  font-weight: 700;
  color: ${({ theme }) => theme.accent};
  margin-bottom: 15px;
`;

export const AddToCartForm = styled.div`
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

export const InputText = styled.input`
  height: 100%;
  width: 60px;
  margin-right: 1px;
  font-size: 1.125rem;
  text-align: center;
`;

export const InputControls = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  height: 100%;
`;

export const InputButton = styled.button`
  height: 49%;
  width: 25px;
  background: ${({ theme }) => theme.accentWeak};
  border: none;
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
`;
