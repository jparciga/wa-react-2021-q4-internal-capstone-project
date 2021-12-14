import { css } from 'styled-components';
import styled from 'styled-components';

export const PageLink = styled.a`
    text-decoration: none;
    color: black;
    margin: 0 0.3em; 
    cursor: pointer;
    ${({active}) => active && css`
        font-weight: bold;
        cursor: default;
    `}
`;