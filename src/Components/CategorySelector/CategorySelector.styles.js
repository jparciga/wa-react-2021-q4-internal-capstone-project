import { css } from "styled-components";
import styled from "styled-components";

export const CategoryContainer = styled.fieldset`
    border: none;
`;

export const Category = styled.label`
    ${({active}) => active && css`    
    font-weight: bold;
    `}
`;