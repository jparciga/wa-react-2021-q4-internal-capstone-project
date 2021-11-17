export default function Navigation() {
  return (
    <header>
      <nav>
        <img src="images/logo.svg" alt="Logo" className="logo" />
        <div className="links">
          <span>Home</span>
          <span>Shop</span>
          <span>About</span>
        </div>
        <div className="icons">
          <img src="images/search.svg" alt="Search" />
          <img src="images/cart.svg" alt="Cart" />
          <img src="images/user.svg" alt="User" />
        </div>
      </nav>
    </header>
  );
}
