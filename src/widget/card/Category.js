export default function Category({href: url, data: {main_image: image, name}}) {
    return (
    <a href={url} className="link-wrapper" alt={image.alt} >
        <p className="grid-item-overlay">{name}</p>
        <img className="grid-image" src={image.url} alt={image.alt} />
    </a>);
}