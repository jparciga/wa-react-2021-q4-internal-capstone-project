import { Card, Title, Image } from './ProductItem.styled';

const ProductItem = ({product}) => {
    let { data: { name, images } } = product;
    let { image: { url } } =  images[0];
    return (
        <Card>
            <Image src={url} alt={name} />
            <Title>{name}</Title>
        </Card>
    );
};

export default ProductItem;