import ProductItem from '../ProductItem';
import { Content, Items, Title } from './Products.styled';

const Products = ({title, items}) => {

    return (
        <Content>
            <Title>{title}</Title>
            <Items>
                {items.map(product => <ProductItem key={product.id} product={product} />)}
            </Items>
        </Content>
    );
};

export default Products;