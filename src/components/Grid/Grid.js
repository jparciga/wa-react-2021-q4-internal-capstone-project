import React from 'react';
import styled from 'styled-components';
import GridCard from 'components/GridCard/GridCard';

const GridComponent = ({className, data: { parsedData = [], isLoading }, pagination}) =>  {
    console.log('Parsed Data Inside Grid: ', parsedData);

    const paginationControls = pagination && (
        <div className="grid-paginator">
            <button>Prev</button>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>...</button>
            <button>Next</button>
        </div>
    );
    
    const filledGrid = (               
    <>
        <div className="grid-container">
            {
                parsedData.map(({ id, url, name, category, price }) => { return ( 
                    <GridCard 
                        key={id} 
                        url={url}
                        name={name}
                        category={category}
                        price={price}
                    />) 
                }) 
            }
        </div>
        {
            pagination && (paginationControls)
        }

    </>);

   
   
    
    return ( 
    <div className={className}>
        { (parsedData.length > 0) 
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