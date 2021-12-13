import { useContext } from 'react';
import PageContext from 'Utils/Context/PageContext';
import Home from 'Components/Pages/Home';
import { Wrapper, Title, SearchForm, Icon } from './Header.styles';

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
