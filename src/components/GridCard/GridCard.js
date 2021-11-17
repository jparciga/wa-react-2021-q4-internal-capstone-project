import React from 'react'
import styled from 'styled-components'

const GridCardComponent = ({className, url, name, category, price}) => {
    return (
        <div className={className}>
            <img src={url} alt="img"></img>
            <span>{name}</span>
            <span>{category}</span>
            <span>{price}</span>
        </div>
    )
};

const GridCard = styled(GridCardComponent)`
    display:flex;
    flex-direction:column;
    padding:0.5em;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);

    img {
        width: 100%;
        height: auto;
        aspect-ratio: 4 / 3;
        object-fit: cover;
    }
`;


export default GridCard;
