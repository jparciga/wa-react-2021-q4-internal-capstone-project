import { Card, Image, Content, Title, Price, Category} from './ProductItem.styled';

const ProductItem = ({product}) => {
    let { data: { name, images , price, category: { slug: categoryName }}} = product;
    let { image: { url } } =  images[0];
    return (
        <Card>
            <Image src={url} alt={name} />
            <Content>
                <Title>{name}</Title>
                <Category>Category: {categoryName}</Category>
                <Price>${price}</Price>
            </Content>
            
        </Card>
    );
};

export default ProductItem;