import React from 'react';
import styled from 'styled-components';
import GridCard from 'components/GridCard/GridCard';

const GridComponent = ({className, data}) =>  {
    const filledGrid = (               
    <>
        <div className="grid-container">
            {
                data.map(obj => { return ( 
                    <GridCard 
                        key={obj.id} 
                        url={obj.data.mainimage.url}
                        name={obj.data.name}
                        category={obj.data.category.slug}
                        price={"$"+obj.data.price}
                    />) 
                }) 
            }
        </div>
        <div className="grid-paginator">
            <button>Prev</button>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>...</button>
            <button>Next</button>
        </div>
    </>);
    
    return ( 
    <div className={className}>
        { (data.length > 0) 
            ? 
                filledGrid 
            : 
                <p style={{textAlign: "center"}}>Sorry! No elements.</p> }
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