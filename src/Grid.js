import React from 'react';
import styled from 'styled-components';
import GridCard from './GridCard';

const GridComponent = ({className, data}) =>  {
    return ( 
    <div className={className}>
        {data.results.map((obj, index) => { return ( <GridCard key={obj.id} index={index} data={obj} />) })}
    </div> );
}

const Grid = styled(GridComponent)`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2.5em;

    background-color: #ECC344;
    padding: 2em;

    div {
        background-color: violet;
    }
`;

export default Grid;