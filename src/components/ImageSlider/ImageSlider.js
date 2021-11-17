import React from 'react'
import styled from 'styled-components';

const ImageSliderComponent = ({className, key, url, index, slideIndex}) => {
    return (
        <div key={key} className={className}>
            <img key={key+index} src={url} alt="none"></img>    
        </div>
    )
}

const ImageSlider = styled(ImageSliderComponent)`
    opacity: 1;
    transition: opacity ease-in-out 0.4s; 
    opacity: ${ props => props.slideIndex === props.index + 1 ? "1; ": "0;"}    
    }
`;

export default ImageSlider;