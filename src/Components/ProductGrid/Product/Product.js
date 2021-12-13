import { Link, Image } from './Product.styles';

export default function Product({data: {mainimage: image, name, price, category}}) {
    return (
    <Link alt={image.alt} >
        <Image src={image.url} alt={image.alt} />
        <p>
            {name}<br/>
            $ {price}<br/>
            in {category.name}
        </p>
    </Link>);
}