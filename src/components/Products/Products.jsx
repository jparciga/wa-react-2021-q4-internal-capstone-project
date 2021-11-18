import ProductItem from '../ProductItem';
import { Content, Items, Title } from './Products.styled';
import featuredProducts from '../../mocks/en-us/featured-products.json';
import { useState } from 'react';

const Products = ({title}) => {

    const [products] = useState(featuredProducts.results);

    return (
        <Content>
            <Title>{title}</Title>
            <Items>
                {products.map(product => <ProductItem product={product} />)}
            </Items>
        </Content>
    );
};

export default Products;