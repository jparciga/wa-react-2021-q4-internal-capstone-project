import './Header.css'
import {FiShoppingCart} from "react-icons/fi";

const Header = () => {
  return (
    <nav className='header-container'>
      <div className='logo-container'>
        <h2>WizeShop</h2>
      </div>
      <div className='items-container'>
        <div className='search-input'>
          <input placeholder='Search...' />
        </div>
        <div className='icons-container'>
          <FiShoppingCart className='icon-shopping-cart' />
        </div>
      </div>
    </nav>
  )
}

export default Header;
