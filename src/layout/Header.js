import {ReactComponent as CartIcon} from './icon/cart.svg';
import styled from 'styled-components';
import { useContext } from 'react';
import { PageContext } from '../utils/context/PageContext';
import Home from '../page/Home';

//#region Styled Components
const Wrapper = styled.header`
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

    @media screen and (max-width: 640px) {
        flex-direction: column;
    }    
`;

const Title = styled.h1`
    margin: 0;
    text-align: left;
    flex-grow: 1;
    cursor: pointer;
`;

const SearchForm = styled.form`
    margin: 0;
`;

const Icon = styled(CartIcon)`
    height: 1.7em;
    padding: 0;
    border: none;
    background: none;
    color: inherit;
`;
//#endregion

export default function Header() {
    const {navigate} = useContext(PageContext);
    const navigateHome = () => {navigate(() => Home)};

    return (
        <Wrapper>
            <Title onClick={navigateHome}>Consumerist</Title>
            <SearchForm>
                <input type="text" placeholder="I'm looking for..." name="search" disabled />
                <input type="submit" value="Search" disabled />
            </SearchForm>
            <Icon title="Shopping Cart" alt="Shopping Cart" />
        </Wrapper>
    );
}
