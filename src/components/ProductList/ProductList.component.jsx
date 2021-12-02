import React, {useContext} from 'react';
import Grid from 'components/Grid/Grid.styles'

import Sidebar from 'components/Sidebar/Sidebar.component';
import useFiltering from './useFiltering';
import useProductCategories from 'hooks/useProductCategories';
import useProducts from 'hooks/useProducts';

import {useQuery} from 'hooks/useQuery';
import ProductListContext from 'state/ProductListContext';
import PropTypes from 'prop-types';

export const ProductListComponent = ({className}) => {

    const { productListState, productListDispatcher} = useContext(ProductListContext);

    let query = useQuery();
    const queryString = query.get("category");
    if(queryString)
    {   
         productListDispatcher({ type: "add_querystring", categoryId: queryString});
         query.delete('category');
    }   
    const [productCategories] = useProductCategories();
    const [products] = useProducts({pageSize: 12});
    const [filteredProducts, filters, handleCustomFiltering, clearAllFilters] = useFiltering(products, queryString);

    const gridData = { 
        totalPages: products.totalPages, 
        parsedData: products.parsedData, 
        isLoading: products.isLoading
    };

   

    return (
        <ProductListContext.Provider value={{productListState, productListDispatcher}}>
        <div className={className}>
            <Sidebar data={productCategories} 
                     title={`Categories`} />
            <Grid data={gridData} pagination />
        </div>
        </ProductListContext.Provider>
    )
};

ProductListComponent.propTypes = {
    className: PropTypes.string
};
  

export default ProductListComponent;
