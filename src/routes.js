import Home from './pages/HomePage';
import Products from './pages/ProductsPage';
import ProductDetail from './pages/ProductDetailPage';
export const routes = [
  {
    name: 'Home',
    path: '/',
    element: Home,
  },
  {
    name: 'Home',
    path: '/home',
    element: Home,
  },
  {
    name: 'Products',
    path: '/products',
    element: Products,
  },
  {
    name: 'Product Detail',
    path: '/products/:productId',
    element: ProductDetail,
  },
  {
    name: 'Search',
    path: '/search',
    element: Products,
  },
];
