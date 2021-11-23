import { NAVIGATION } from "../../utils/constants";
import { Header, Icons, Link, Links, Logo } from "./Navigation.styled";

export default function Navigation({ changePage, activePage }) {
  return (
    <Header>
      <nav>
        <Logo onClick={() => changePage(NAVIGATION.HOME)}>
          <img src="images/logo.svg" alt="Logo" />
        </Logo>
        <Links>
          <Link
            onClick={() => changePage(NAVIGATION.HOME)}
            active={activePage === NAVIGATION.HOME}
          >
            Home
          </Link>
          <Link
            onClick={() => changePage(NAVIGATION.SHOP)}
            active={activePage === NAVIGATION.SHOP}
          >
            Shop
          </Link>
          <Link
            onClick={() => changePage(NAVIGATION.ABOUT)}
            active={activePage === NAVIGATION.ABOUT}
          >
            About
          </Link>
        </Links>
        <Icons>
          <img src="images/search.svg" alt="Search" />
          <img src="images/cart.svg" alt="Cart" />
          <img src="images/user.svg" alt="User" />
        </Icons>
      </nav>
    </Header>
  );
}
