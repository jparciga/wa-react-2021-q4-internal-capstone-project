import { useLocation } from "react-router";
import { NAVIGATION } from "../../utils/constants";
import { Header, Icons, Logo, Page, Pages } from "./Navigation.styled";
import LogoSVG from "../../images/logo.svg";
import SearchSVG from "../../images/search.svg";
import CartSVG from "../../images/cart.svg";
import UserSVG from "../../images/user.svg";

export default function Navigation() {
  const location = useLocation();

  return (
    <Header>
      <nav>
        <Logo to="/">
          <img src={LogoSVG} alt="Logo" />
        </Logo>
        <Pages>
          <Page
            to={NAVIGATION.HOME}
            className={location.pathname === "/" && "active"}
          >
            Home
          </Page>
          <Page to={NAVIGATION.SHOP} state={{ page: 1 }}>
            Shop
          </Page>
          <Page to={NAVIGATION.ABOUT}>About</Page>
        </Pages>
        <Icons>
          <img src={SearchSVG} alt="Search" />
          <img src={CartSVG} alt="Cart" />
          <img src={UserSVG} alt="User" />
        </Icons>
      </nav>
    </Header>
  );
}
