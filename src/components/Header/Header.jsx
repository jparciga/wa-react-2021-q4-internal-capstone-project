import { Navbar, BrandName, NavLinks, NavItem, Search } from './Header.styled';
import { GrCart } from 'react-icons/gr';

const Header = () => {
    return (
    <Navbar>
        <BrandName>Torii</BrandName>
        <NavLinks>
            <NavItem>
                <Search 
                    placeholder=" 🔍  search your dreams..."
                 />
            </NavItem>
            <NavItem>Furniture</NavItem>
            <NavItem>
                <GrCart />
            </NavItem>
        </NavLinks>
      </Navbar>
    );
};

export default Header;