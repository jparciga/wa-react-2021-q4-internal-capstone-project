import {ReactComponent as LeftArrow} from './assets/double-chevron-left.svg';
import {ReactComponent as RightArrow} from './assets/double-chevron-right.svg';
import { css } from "styled-components";
import styled from "styled-components";

export const Wrapper = styled.div`    
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    position: relative;
    box-sizing: border-box;
`;

export const SliderContainer = styled.ul`
    padding: 0;
    margin: auto;
    list-style-type: none;
    display: flex;
    flex-flow: row;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const SliderItem = styled.li`
    flex: 1 1 100%;
    height: 100%;
    transition: margin 0.5s;
    ${({hidden}) => hidden && css`
    display: none;
    `}
`;

export const Image = styled.img`
    max-width: 100%;
    max-height: 100%;
    box-sizing: border-box;
    display: block;
    margin-left: auto;
    margin-right: auto;
    object-fit: contain;
`;

export const controlArrow = css`
    position: absolute;
    background-color: rgba(0, 0, 0, 0.7);
    width: 3em;
    height: 10%;
    min-height: 4em;
    top: 45%;
    color: white;
    text-align: center;
    ${({hidden}) => hidden && css`
    visibility: collapse;
    `}
`;

export const PrevControl = styled(LeftArrow)`
    ${controlArrow}
    left: 0;
`;

export const NextControl = styled(RightArrow)`
    ${controlArrow}
    right: 0;
`;