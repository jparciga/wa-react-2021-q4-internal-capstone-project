import styled from 'styled-components';

const Content = styled.div`
    padding: 1rem;
    border-radius: 0.5rem;
    background-color: #fff;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
    background: linear-gradient(90deg, #0072ff 0%, #00d4ff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

export { Content, Title };