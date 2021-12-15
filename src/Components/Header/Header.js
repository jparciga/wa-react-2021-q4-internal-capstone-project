import { Wrapper, Title, SearchForm, Icon, ActionLink } from './Header.styles';

export default function Header() {
    return (
        <Wrapper>
            <ActionLink to="/home"><Title>Consumerist</Title></ActionLink>
            <SearchForm action="/search" method="get" >
                <input type="text" placeholder="I'm looking for..." name="q" />
                <input type="submit" value="Search" />
            </SearchForm>
            <Icon title="Shopping Cart" alt="Shopping Cart" />
        </Wrapper>
    );
}
