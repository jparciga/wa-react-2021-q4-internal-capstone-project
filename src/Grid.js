import React from 'react';
import styled from 'styled-components';
import GridCard from './GridCard';

const GridComponent = ({className, data}) =>  {
    return ( 
    <div className={className}>
        {data.results.map(obj => { return ( 
            <GridCard 
                key={obj.id} 
                url={obj.data.mainimage.url}
                name={obj.data.name}
                category={obj.data.category.slug}
                price={"$"+obj.data.price}
                />) 
        })}
    </div> );
}

const Grid = styled(GridComponent)`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2.5em;

    background-color: #ECC344;
    padding: 2em;

    div {
        background-color: white;
        border: 2px solid black;
        border-radius: 5px;
    }

    span {
        padding: 0.5em;
    }
`;

export default Grid;