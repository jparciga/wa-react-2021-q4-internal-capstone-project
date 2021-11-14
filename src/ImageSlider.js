import React from 'react'

import styled from 'styled-components';


const ImageSlider = ({className, id, url, index, slideIndex}) => {
    return (
        <div id={id} className={className}>
                <img id={id} src={url} alt="none"></img>    
            </div>
    )
}
//style={{width: "100%", height: "100%", objectFit:"cover" }}
const StyledImageSlider = styled(ImageSlider)`
    opacity: 1;
    transition: opacity ease-in-out 0.4s; 
    opacity: ${ props => props.slideIndex === props.index + 1 ? "1; ": "0;"}    
    }
`;

export default StyledImageSlider;