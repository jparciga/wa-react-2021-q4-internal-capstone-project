import React from 'react';
import Grid from 'components/Grid/Grid.styles'

import Sidebar from 'components/Sidebar/Sidebar.component';
import useFiltering from './useFiltering';
import useProductCategories from 'hooks/useProductCategories';
import useProducts from 'hooks/useProducts';

import {useQuery} from 'hooks/useQuery';

export const ProductListComponent = ({className}) => {
    let query = useQuery();
    const queryString = query.get("category");

    const [productCategories] = useProductCategories();
    const [products, pageNumber, setPageNumber] = useProducts({page: 1, pageSize: 12});
    const [filteredProducts, filters, handleCustomFiltering, clearAllFilters] = useFiltering(products, queryString);

    const gridData = { 
        page: pageNumber, 
        totalPages: products.totalPages, 
        parsedData: filteredProducts, 
        isLoading: products.isLoading
    };

    return (
        <div className={className}>
            <Sidebar data={productCategories} 
                     clickEvent={handleCustomFiltering} 
                     clearAllFilters={clearAllFilters}
                     title={`Categories`} 
                     filters={filters} />
            <Grid data={gridData} pagination setPageNumber={setPageNumber} />
        </div>
    )
};
