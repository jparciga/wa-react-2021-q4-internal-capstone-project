import React, {useState } from 'react';
import styled from 'styled-components';

import ButtonSlider from 'components/ButtonSlider/ButtonSlider.style';
import ImageSlider from 'components/ImageSlider/ImageSlider';
import PropTypes from 'prop-types';

const SliderComponent = ({className, data: { parsedData = [], isLoading }}) => {

    const [slideIndex, setSlideIndex] = useState(1);

    const nextSlide = () => {
        if(slideIndex !== parsedData.length) {
            setSlideIndex(slideIndex + 1);
        } else if (slideIndex === parsedData.length) {
            setSlideIndex(1);
        }
    };

    const prevSlide = () => {
        if(slideIndex !== 1) {
            setSlideIndex(slideIndex - 1);
        } else if (slideIndex === 1) {
            setSlideIndex(parsedData.length);
        }
    };

    const moveDot = index => {
        setSlideIndex(index)
    };
    
    if(isLoading)
        return (<h1>Loading...</h1>);

    return ( 
    <div className={className}>
        {parsedData.map( ({id, url}, index) => {
            return (<ImageSlider key={id} url={url} index={index} slideIndex={slideIndex}></ImageSlider>)
        } )}
        <ButtonSlider moveSlide={prevSlide} direction={"prev"} />
        <ButtonSlider moveSlide={nextSlide} direction={"next"} />
        
        <div className="container-dots">
            {Array.from({length: parsedData.length}).map((item, index) => (
                <div key={index}
                onClick={() => moveDot(index + 1)}
                className={slideIndex === index + 1 ? "dot active" : "dot"}
                ></div>
            ))}
        </div>
    </div>
    );
}

const Slider = styled(SliderComponent)`
    display: grid;
    grid-template: "container" 1fr;
    place-items: center;
    place-content: center;
    overflow: hidden;
    max-height: clamp(450px, 50vh, 600px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    
    & > * {
        grid-area: container;
        max-width: 1000px;
    }

    img {
        width: 100%;
        height: auto;
        aspect-ratio: 16 / 9;
        object-fit: cover;
    }

    .container-dots {
        place-self: end center;
        transform: translateY(-250%);
        display: flex;
    }

    .dot {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        border: 3px solid #f1f1f1;
        margin: 0 5px;
        background: #f1f1f1;
        cursor: pointer;
      }
      .dot.active {
        background: rgb(32, 32, 32);
      }
    
`;

SliderComponent.propTypes = {
    data: PropTypes.shape({ 
        parsedData: PropTypes.array, 
        isLoading: PropTypes.bool
    }) , 
    title: PropTypes.string
};

export default Slider;

