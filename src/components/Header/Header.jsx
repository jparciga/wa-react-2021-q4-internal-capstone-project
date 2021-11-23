import { Navbar, BrandName, NavLinks, NavItem, Search } from './Header.styled';
import { GrCart } from 'react-icons/gr';

const Header = ({goToHomePage}) => {
    return (
    <Navbar>
        <BrandName onClick={goToHomePage}>Torii</BrandName>
        <NavLinks>
            <NavItem>
                <Search 
                    placeholder=" 🔍 search..."
                 />
            </NavItem>
            <NavItem>
                <GrCart />
            </NavItem>
        </NavLinks>
      </Navbar>
    );
};

export default Header;