import { Link, Image, Title } from './Category.styles';
 
export default function Category({href: url, data: {main_image: image, name}}) {
    return (
    <Link href={url} alt={image.alt} >
        <Title>{name}</Title>
        <Image src={image.url} alt={image.alt} />
    </Link>);
}