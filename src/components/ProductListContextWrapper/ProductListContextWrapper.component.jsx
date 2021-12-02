import React from 'react'
import {useReducer} from 'react';
import ProductListContext from '../../state/ProductListContext';
import ProductListComponent from 'components/ProductList/ProductList.component';
import ProductListReducer, { PRODUCT_LIST_INITIAL_STATE} from '../../state/ProductListReducer';

const ProductListContextWrapper = ({className}) => {

    const [productListState, productListDispatcher] = useReducer(ProductListReducer, PRODUCT_LIST_INITIAL_STATE);

    return (
        <ProductListContext.Provider value={{productListState, productListDispatcher}}>
            <ProductListComponent className={className}/>
        </ProductListContext.Provider>
    )
}

export default ProductListContextWrapper;
