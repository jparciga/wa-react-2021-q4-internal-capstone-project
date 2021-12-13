import styled from "styled-components";

const Content = styled.footer`
    background-color: #282c34;
    width: 100%;
    padding: 2rem 2rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    color: white;
    box-sizing: border-box;
`;

export default function Footer() {
    return (
        <Content>
            <p>Ecommerce created during Wizeline’s Academy React Bootcamp</p>
        </Content>
    );
}