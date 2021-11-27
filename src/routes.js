import Home from './pages/HomePage';
import Products from './pages/ProductsPage';

export const routes = [
  {
    name: 'Home',
    path: '/',
    element: Home,
  },
  {
    name: 'Products',
    path: '/products',
    element: Products,
  },
];
