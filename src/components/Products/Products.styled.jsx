import styled from "styled-components";

const Items = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: center;
    margin: 0 20px;
`;

const Content = styled.div`
    text-align: center;
    margin: 50px auto;
`;

const Title = styled.h2`
    margin-bottom: 40px;
    @media (max-width: 768px) {
        font-size: 1.2rem;
    }
`;

export { Items, Content, Title};