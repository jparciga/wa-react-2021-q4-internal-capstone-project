import styled from "styled-components";

const Content = styled.div`
    display: flex;
    justify-content: center;
    margin: 0 40px;
    flex-wrap: wrap;
`;

const Text = styled.div`
    font-size: 1.2em;
    font-weight: bold;  
    padding: 15px;
    margin: 10px;
    border: 2px solid #e6e6e6;
    border-radius: 10px;
    cursor: pointer;
    background: ${props => props.selected ? 'linear-gradient(90deg, #0072ff 0%, #00d4ff 100%)' : 'linear-gradient(90deg, rgb(255, 77, 0) 0%, #00d4ff 100%)'};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    box-shadow: ${props => props.selected && '0 8px 16px 0 rgba(0,0,0,0.2)' };

    &:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
        
    }
`;

export { Content, Text };