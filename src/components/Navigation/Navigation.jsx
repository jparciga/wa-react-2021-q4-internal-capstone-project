import { Header, Icons, Link, Links, Logo } from "./Navigation.styled";

export default function Navigation() {
  return (
    <Header>
      <nav>
        <Logo>
          <img src="images/logo.svg" alt="Logo" />
        </Logo>
        <Links>
          <Link active>Home</Link>
          <Link>Shop</Link>
          <Link>About</Link>
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
