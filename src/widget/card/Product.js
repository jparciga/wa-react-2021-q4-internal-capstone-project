export default function Product({department, data: {mainimage: image, name, price}}) {
    return (
    <div className="link-wrapper" alt={image.alt} >
        <img className="grid-image" src={image.url} alt={image.alt} />
        <p>
            {name}<br/>
            $ {price}<br/>
            in {department}
        </p>
    </div>);
}