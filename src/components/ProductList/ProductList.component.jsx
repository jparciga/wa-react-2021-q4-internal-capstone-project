
import React from 'react';
import Grid from 'components/Grid/Grid'

import Sidebar from 'components/Sidebar/Sidebar.component';
import useFiltering from './useFiltering';

export const ProductListComponent = ({className, products, categories}) => {
    const [filteredData, filters, handleCustomFilering] = useFiltering(products);

    return (
        <div className={className}>
            <Sidebar data={categories} 
                     clickEvent={handleCustomFilering} 
                     title={`Categories`} 
                     filters={filters} />
            <Grid data={filteredData} />
        </div>
    )
};
