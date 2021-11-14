import React from 'react'
import styled from 'styled-components'

const GridCardComponent = ({className, data}) => {
    return (
        <div className={className}>
            <img src="" alt="img"></img>
            <span>name</span>
            <span>category</span>
            <span>price</span>
        </div>
    )
};

const GridCard = styled(GridCardComponent)`
    display:flex;
    flex-direction:column;
`;


export default GridCard;
