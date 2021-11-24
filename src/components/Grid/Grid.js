import React from 'react';
import styled from 'styled-components';
import GridCard from 'components/GridCard/GridCard';

const GridComponent = ({className, data, pagination}) =>  {
    return ( 
    <div className={className}>
        <div className="grid-container">
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
        </div>
        {pagination &&
            <div className="pagination">
                <button>Prev</button>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>...</button>
                <button>Next</button>
            </div>}
    </div>);
}

const Grid = styled(GridComponent)`
    display: grid;
    grid-template-rows: 1fr auto;
    justify-items: center;
        
    background-color: #ECC344;
    padding: 2em;

    .grid-container {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 2.5em;
    }

    .grid-container div {
        background-color: white;
        border: 2px solid black;
        border-radius: 5px;
    }

    .grid-container span {
        padding: 0.5em;
    }`;

export default Grid;