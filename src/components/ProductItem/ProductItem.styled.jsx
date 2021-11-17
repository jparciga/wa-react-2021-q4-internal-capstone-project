import styled from "styled-components";

const Card = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    width: 300px;
    text-align: center;
    padding: 30px;
    border-radius: 20px;
    &:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
`;

const Image = styled.img`
    height: 250px;
    padding-top: 20px;
`;

const Title = styled.div`
    font-weight: bold;
    font-size: 1.2em;
    height: 50px;
    padding-top: 20px;
    border-bottom: 1px solid #ccc;
`;

const Price = styled.p`
    font-size: 1.5em;
    font-weight: bold;
`;

const Category = styled.p`
    font-size: 1em;
    text-transform: capitalize;
`;

const Content = styled.div`
    padding: 2px 16px;
`;

export { Card, Image, Content, Title, Price, Category };