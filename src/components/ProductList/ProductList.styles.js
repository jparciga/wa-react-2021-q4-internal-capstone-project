import styled from 'styled-components';
import {ProductListComponent} from './ProductList.component'

const ProductList = styled(ProductListComponent)`
    display: grid;
    grid-template-columns: 1fr 6fr;  
    grid-template-rows: 1fr;   
`;

export default ProductList;