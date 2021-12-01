import React from 'react';

const GridPaginator = ({ page, totalPages, setPageNumber }) => {

    const createPaginationNumeration = (page, totalPages) => {
        let content = [];
        for (let i = 1; i <= totalPages; i++) {
            content.push(<button style={ (page === i) ? { color: "red" } : {}} key={`number${i}}`} onClick={() => setPageNumber(i)}>{i}</button>);
        }

        return content;
    };

    return (
        <div className="grid-paginator">
            <button onClick={() => setPageNumber(1)}>First</button>
            <button onClick={() => setPageNumber((pageNumber) => { return (pageNumber > 1) ? pageNumber - 1 : pageNumber; })}>Prev</button>
            { createPaginationNumeration(page, totalPages) }
            <button onClick={() => setPageNumber((pageNumber) => { return (pageNumber < totalPages) ? pageNumber + 1 : pageNumber; })}>Next</button>
            <button onClick={() => setPageNumber(totalPages)}>Last</button>
        </div>
    )
}

export default GridPaginator;