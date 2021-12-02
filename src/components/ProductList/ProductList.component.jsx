import React, {useContext} from 'react';
import Grid from 'components/Grid/Grid.styles'

import Sidebar from 'components/Sidebar/Sidebar.component';
import useFiltering from './useFiltering';
import useProductCategories from 'hooks/useProductCategories';
import useProducts from 'hooks/useProducts';

import {useQuery} from 'hooks/useQuery';
import ProductListContext from 'state/ProductListContext';

export const ProductListComponent = ({className}) => {

    const { productListState, productListDispatcher} = useContext(ProductListContext);

    let query = useQuery();
    const queryString = query.get("category");

    const [productCategories] = useProductCategories();
    const [products, pageNumber, setPageNumber] = useProducts({pageSize: 12});
    const [filteredProducts, filters, handleCustomFiltering, clearAllFilters] = useFiltering(products, queryString);

    const gridData = { 
        page: pageNumber, 
        totalPages: products.totalPages, 
        parsedData: products.parsedData, 
        isLoading: products.isLoading
    };

    return (
        <ProductListContext.Provider value={{productListState, productListDispatcher}}>
        <div className={className}>
            <Sidebar data={productCategories} 
                     clickEvent={handleCustomFiltering} 
                     clearAllFilters={clearAllFilters}
                     title={`Categories`} 
                     filters={filters} />
            <Grid data={gridData} setPageNumber={setPageNumber} pagination />
        </div>
        </ProductListContext.Provider>
    )
};

export default ProductListComponent;
