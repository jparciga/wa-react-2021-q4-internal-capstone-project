import React from 'react'
import leftArrow from './images/left_arrow.svg';
import rightArrow from './images/right_arrow.svg';

import styled from 'styled-components';


const ButtonSlider = ({className, moveSlide, direction}) => {
    return (
        <button
        onClick={moveSlide}
        className={className}>
            <img src={direction === "next" ? rightArrow : leftArrow} alt="rightArrow" style={{width:"25px", height:"25px", pointerEvents:"none"}} />
        </button>
    )
};


const StyledButtonSlider = styled(ButtonSlider)`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: #f1f1f1;
    border: 1px solid rgba(34, 34, 34, 0.287);
    cursor: pointer;
    transform: translateY(-10%);
    place-self: ${props => props.direction === "next" ? "center right" : "center left"}
`;

// width: 60px;
// height: 60px;
// border-radius: 50%;
// background: #f1f1f1;
// border: 1px solid rgba(34, 34, 34, 0.287);
// position: absolute;
// display: flex;
// justify-content: center;
// align-items: center;
// cursor: pointer;

// top: 50%;
// ${props => props.direction === "next" ? "right: 20px;" : "left: 20px;"}
// transform: translateY(-60%);

export default StyledButtonSlider;