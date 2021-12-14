import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;

  display: grid;
  grid-template-rows: 1fr 5fr 1fr;
  grid-template-columns: 6fr;

  grid-template-areas:
    "header"
    "content"
    "footer";

  gap: 1em;
`;

export const Logo = styled.div`
  grid-area: logo;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.header`
  background-color: orange;
  grid-area: header;
  display:grid;
  grid-template-columns: 1fr 4fr 1fr;
  grid-template-areas:
    "logo search shoppingcart";
  gap: 1em;
`;

export const Search = styled.div`
  grid-area: search;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;


export const Content = styled.div`
  background-color: gold;
  grid-area: content;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Footer = styled.div`
  background-color: lavender;
  grid-area: footer;
  text-align: center;
`;