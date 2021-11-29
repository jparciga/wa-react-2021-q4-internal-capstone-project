import React from 'react';
import styled from 'styled-components';
import GridCard from 'components/GridCard/GridCard';

const GridComponent = ({className, data: { page, totalPages, parsedData = [], isLoading }, pagination, setPageNumber}) =>  {

    const createPaginationNumeration = (page, totalPages) => {
        let content = [];
        for (let i = 1; i <= totalPages; i++) {
            content.push(<button style={ (page === i) ? { color: "red" } : {}} key={`number${i}}`} onClick={() => setPageNumber(i)}>{i}</button>);
        }

        return content;
    };

    const paginationControls = pagination && (
        <div className="grid-paginator">
            <button onClick={() => setPageNumber(1)}>First</button>
            <button onClick={() => setPageNumber((pageNumber) => { return (pageNumber > 1) ? pageNumber - 1 : pageNumber; })}>Prev</button>
            { createPaginationNumeration(page, totalPages) }
            <button onClick={() => setPageNumber((pageNumber) => { return (pageNumber < totalPages) ? pageNumber + 1 : pageNumber; })}>Next</button>
            <button onClick={() => setPageNumber(totalPages)}>Last</button>
        </div>
    );
    
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