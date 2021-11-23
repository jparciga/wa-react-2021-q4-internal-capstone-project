import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    user-select: none;
  }

  h1,
  h2,
  p,
  span,
  button {
    font-family: "Lato", sans-serif;
    font-size: 1rem;
    font-weight: 400;
    color: ${({ theme }) => theme.dark};
  }

  main {
    overflow: auto;
    background: ${({ theme }) => theme.light};
    display: grid;
    grid-template-columns:
      minmax(60px, 150px)
      repeat(4, minmax(50px, 1fr))
      minmax(60px, 150px);
    grid-column-gap: 30px;
    height: 100vh;
  }

  button {
    cursor: pointer;
  }
`;
