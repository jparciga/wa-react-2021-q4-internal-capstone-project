import { Content } from './Button.styled';

const Button = ({text, handleOnClick}) => {
    return (
        <Content onClick={handleOnClick}>
            { text }
        </Content>
    );
};

export default Button;