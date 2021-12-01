import React from 'react';
import styled from 'styled-components';
import GridCard from 'components/GridCard/GridCard';
import GridPaginator from 'components/GridPaginator/GridPaginator.component';

const GridComponent = ({className, data: { page, totalPages, parsedData = [], isLoading }, pagination, setPageNumber}) =>  {
  
    const filledGrid = (               
    <>
        <div className="grid-container">
            {
                parsedData.map(({ id, url, name, category, price }) => { return ( 
                    <GridCard 
                        key={id}
                        cardId={id} 
                        url={url}
                        name={name}
                        category={category}
                        price={price}
                    />) 
                }) 
            }
        </div>
        {
            pagination && <GridPaginator page={page} totalPages={totalPages} setPageNumber={setPageNumber} />
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