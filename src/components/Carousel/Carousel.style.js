import styled from 'styled-components';
import CarouselComponent from './Carousel';

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