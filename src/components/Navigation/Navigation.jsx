import { useLocation } from "react-router";
import { NAVIGATION } from "../../utils/constants";
import { Header, Icons, Logo, Page, Pages } from "./Navigation.styled";

export default function Navigation() {
  const location = useLocation();

  return (
    <Header>
      <nav>
        <Logo to="/">
          <img src="images/logo.svg" alt="Logo" />
        </Logo>
        <Pages>
          <Page
            to={NAVIGATION.HOME}
            className={location.pathname === "/" && "active"}
          >
            Home
          </Page>
          <Page to={NAVIGATION.SHOP}>Shop</Page>
          <Page to={NAVIGATION.ABOUT}>About</Page>
        </Pages>
        <Icons>
          <img src="images/search.svg" alt="Search" />
          <img src="images/cart.svg" alt="Cart" />
          <img src="images/user.svg" alt="User" />
        </Icons>
      </nav>
    </Header>
  );
}
