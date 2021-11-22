import './Layout.css';
import {ReactComponent as CartIcon} from './icon/cart.svg';

export default function Header() {
    return (
        <header className="header-wrapper">
            <h1 className="page-title">Consumerist</h1>
            <form className="search-bar">
                <input type="text" placeholder="I'm looking for..." name="search" disabled />
                <input type="submit" value="Search" disabled />
            </form>
            <CartIcon className="cart-icon" title="Shopping Cart" alt="Shopping Cart" />
        </header>
    );
}
