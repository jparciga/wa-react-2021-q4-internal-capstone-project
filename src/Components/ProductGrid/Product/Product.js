import { Link, Image } from './Product.styles';
import { ActionButton } from 'Components/UI';

export default function Product({id, data: {mainimage: image, name, price, category}}) {
    return (
    <>
        <Link alt={image.alt} to={`/product/${id}`} >
            <Image src={image.url} alt={image.alt} />
            <p>
                {name}<br/>
                $ {price}<br/>
                in {category.name}
            </p>
        </Link>
        <ActionButton>Add to Cart </ActionButton>
    </>);
}