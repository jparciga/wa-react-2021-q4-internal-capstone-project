import styled from "styled-components";

const Card = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    width: 300px;
    position: relative;
    text-align: center;
    padding: 30px;

    &:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
`;

const Title = styled.h3`
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: red;
`;

const Image = styled.img`
    height: 250px;
    padding-top: 20px;
`;

export { Card, Title, Image};