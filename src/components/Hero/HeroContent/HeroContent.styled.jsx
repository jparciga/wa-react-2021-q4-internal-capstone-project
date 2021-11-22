import styled from "styled-components";

export const HeroContentContainer = styled.div`
  grid-column: 2 / span 4;
  height: 32.8125rem;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: flex-start;
  background: linear-gradient(
      ${({ theme }) => theme.light50},
      ${({ theme }) => theme.light50}
    ),
    url("${({ image }) => image}");
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 10px;
`;

export const HeroContentCTA = styled.div`
  margin-left: 50px;
  width: 500px;
`;

export const HeroTitle = styled.h1`
  font-family: "Work Sans", "Lato", sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 15px;
`;

export const HeroSubtitle = styled.h2`
  font-size: 1.0625rem;
  margin-bottom: 15px;
`;

export const HeroText = styled.p`
  font-size: 0.8125rem;
  margin-bottom: 30px;
`;

export const HeroButton = styled.button`
  font-weight: 700;
  color: ${({ theme }) => theme.light};
  background-color: ${({ theme }) => theme.accentWeak};
  border: none;
  border-radius: 100px;
  padding: 20px 35px;
  display: flex;
  align-items: center;

  img {
    margin-left: 9px;
  }
`;
