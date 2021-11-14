import React, {useState} from 'react';
import styled from 'styled-components';
import ButtonSlider from './ButtonSlider';

const CarouselComponent = ({className, data}) => {
    const [xPos, setXpos] = useState(0);

    const moveCarousel = (direction) => {
        if(direction === "prev" && xPos > -600){
            setXpos(x => x - 200);
        }
     
        if(direction === "next" && xPos < 600){
            setXpos(x => x + 200);
        }
    };

    return (
    <div className={className}>
        <div className="track" style={{transform: `translateX(${xPos}px)` }}>
            {data.results.map(obj => {
                return (
                    <div id={obj.id} className="card-container">
                        <div className="card"><img src={obj.data.main_image.url} alt="haha"></img> </div>
                    </div>
                );
            })}      
        </div>
        <ButtonSlider moveSlide={() => moveCarousel("prev")} direction="prev"></ButtonSlider>
        <ButtonSlider moveSlide={() => moveCarousel("next")} direction="next"></ButtonSlider>
    </div> );
}

const Carousel = styled(CarouselComponent)`
    display:grid;    
    grid-template: "track" 1fr;
    place-items: center;
    place-content: center;
    overflow: hidden;
    max-height: clamp(450px, 30vh, 600px);

    & > * {
        grid-area: track;
        max-width: 1000px;
    }

    .track {
        background-color: white;
        display:grid;
        grid-template-columns 1fr 1fr 1fr 1fr 1fr;
        
        gap: 0.5em;
    }


    .card-container {
        justify-self: center;
        align-self: center;
    }
    img {
        width: 100%;
        height: auto;
        aspect-ratio: 16 / 9;
        object-fit: cover;
    }
`;



export default Carousel;