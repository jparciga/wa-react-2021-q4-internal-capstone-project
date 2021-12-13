import { Wrapper, Title, SearchForm, Icon, ActionLink } from './Header.styles';

export default function Header() {
    return (
        <Wrapper>
            <ActionLink to="/home"><Title>Consumerist</Title></ActionLink>
            <SearchForm>
                <input type="text" placeholder="I'm looking for..." name="search" disabled />
                <input type="submit" value="Search" disabled />
            </SearchForm>
            <Icon title="Shopping Cart" alt="Shopping Cart" />
        </Wrapper>
    );
}
