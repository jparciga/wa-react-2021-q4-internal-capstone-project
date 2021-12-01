import React from 'react';
import GridCard from 'components/GridCard/GridCard';
import GridPaginator from 'components/GridPaginator/GridPaginator.component';

const GridComponent = ( {
    className, 
    data: { 
        page, 
        totalPages, 
        parsedData = [], 
        isLoading }, 
    pagination, 
    setPageNumber}) =>  {
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
                pagination &&
                <GridPaginator 
                    page={page} 
                    totalPages={totalPages} 
                    setPageNumber={setPageNumber} 
                />
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

export default GridComponent;
