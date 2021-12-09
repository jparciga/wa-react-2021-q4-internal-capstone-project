import styled from "styled-components";

//#region Styled Components
const Link = styled.a`
    display: inline-block;
    padding: 0;
    margin: 0;
    border: 0;
    text-decoration: none;
`;

const Image = styled.img`
    width: 100%;
`;
//#endregion

export default function Product({department, data: {mainimage: image, name, price}}) {
    return (
    <Link alt={image.alt} >
        <Image src={image.url} alt={image.alt} />
        <p>
            {name}<br/>
            $ {price}<br/>
            in {department}
        </p>
    </Link>);
}