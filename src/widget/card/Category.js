import styled from "styled-components";

//#region Styled Components
const Link = styled.a`
    display: inline-block;
    padding: 0;
    margin: 0;
    border: 0;
    text-decoration: none;
`;

const Title = styled.p`
    color: white;
    background-color: black;
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    padding: 0.2em 1em;
    margin: 0;
`;

const Image = styled.img`
    width: 100%;
`;
//#endregion

export default function Category({href: url, data: {main_image: image, name}}) {
    return (
    <Link href={url} alt={image.alt} >
        <Title>{name}</Title>
        <Image src={image.url} alt={image.alt} />
    </Link>);
}