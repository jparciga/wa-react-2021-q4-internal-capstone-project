
import React from 'react';
import Grid from 'components/Grid/Grid'

import Sidebar from 'components/Sidebar/Sidebar.component';
import useFiltering from './useFiltering';
import useProductCategories from 'hooks/useProductCategories';
import useProducts from 'hooks/useProducts';

export const ProductListComponent = ({className, categories}) => {
    const productCategories = useProductCategories();
    const products = useProducts();

    const [filteredProducts, filters, handleCustomFilering] = useFiltering(products);
    console.log('Filtered Products: ', filteredProducts)
    return (
        <div className={className}>
            <Sidebar data={productCategories} 
                     clickEvent={handleCustomFilering} 
                     title={`Categories`} 
                     filters={filters} />
            <Grid data={{ parsedData: filteredProducts, isLoading: products.isLoading}} pagination />
        </div>
    )
};
