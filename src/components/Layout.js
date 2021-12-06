import { Routes, Route } from 'react-router-dom';
import { routes } from '../routes';
import { Footer } from './Footer.styles';
import Header from './Header';
import Content from './Content';
import { ThemeContextProvider } from '../context/ThemeContext';
import { CartContextProvider } from '../context/CartContext';
export default function Layout() {
  return (
    <ThemeContextProvider>
      <CartContextProvider>
        <Header />
        <Content>
          <Routes>
            {routes.map(({ path, element: Component }, index) => {
              return <Route key={index} path={path} element={<Component />} />;
            })}
          </Routes>
        </Content>
        <Footer>
          Ecommerce created during Wizeline’s Academy React Bootcamp
        </Footer>
      </CartContextProvider>
    </ThemeContextProvider>
  );
}
