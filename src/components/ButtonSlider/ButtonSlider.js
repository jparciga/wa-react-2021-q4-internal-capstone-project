import React from 'react'
import leftArrow from 'images/left_arrow.svg';
import rightArrow from 'images/right_arrow.svg';

const ButtonSliderComponent = ({className, moveSlide, direction}) => {
    return (
        <button
        onClick={moveSlide}
        className={className}>
            <img src={direction === "next" ? rightArrow : leftArrow} alt="rightArrow" style={{width:"25px", height:"25px", pointerEvents:"none"}} />
        </button>
    )
};

export default ButtonSliderComponent;