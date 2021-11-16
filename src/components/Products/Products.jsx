import ProductItem from '../ProductItem';
import { Content, Items } from './Products.styled';
import featuredProducts from '../../mocks/en-us/featured-products.json';
import { useState } from 'react';

const Products = () => {

    const [products] = useState(featuredProducts.results);

    return (
        <Content>
            <h2>Featured Products</h2>
            <Items>
                {products.map(product => <ProductItem product={product} />)}
            </Items>
        </Content>
    );
};

export default Products;