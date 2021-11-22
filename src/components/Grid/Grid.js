import React from 'react';
import styled from 'styled-components';
import GridCard from 'components/GridCard/GridCard';

const GridComponent = ({className, data}) =>  {
    console.log("Inside Grid: ", data);

    return ( 
    <div className={className}>
        {
        (data.length > 0) 
        ?
            data.map(obj => { return ( 
                <GridCard 
                    key={obj.id} 
                    url={obj.data.mainimage.url}
                    name={obj.data.name}
                    category={obj.data.category.slug}
                    price={"$"+obj.data.price}
                    />) 
            })
        :   
            <p style={{textAlign: "center"}}>Sorry! No elements.</p>}
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