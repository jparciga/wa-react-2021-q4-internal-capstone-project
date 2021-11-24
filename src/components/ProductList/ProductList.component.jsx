
import React from 'react';
import Grid from 'components/Grid/Grid'
import styled from 'styled-components';

import Sidebar from 'components/Sidebar/Sidebar.component';
import useFiltering from './useFiltering';

const ProductListComponent = ({className, products, categories}) => {
    const [filteredData, filters, handleCustomFilering] = useFiltering(products);

    return (
        <div className={className}>
            <Sidebar data={categories} clickEvent={handleCustomFilering} title={`Categories`} filters={filters} />
            <Grid data={filteredData} />
        </div>
    )
};

const ProductList = styled(ProductListComponent)`
    display: grid;
    grid-template-columns: 1fr 6fr;  
    grid-template-rows: 1fr;   
`;



export default ProductList;