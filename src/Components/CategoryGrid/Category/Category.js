import { Link, Image, Title } from './Category.styles';
 
export default function Category({id, data: {main_image: image, name}}) {
    return (
    <Link to={`/products?c=${encodeURIComponent(id)}`} >
        <Title>{name}</Title>
        <Image src={image.url} alt={image.alt} />
    </Link>);
}