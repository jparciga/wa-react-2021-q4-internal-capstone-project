import Home from './pages/HomePage';
import Products from './pages/ProductsPage';
import ProductDetail from './pages/ProductDetailPage';
import ShoppingCart from './pages/ShoppingCartPage';
import Checkout from './pages/CheckoutPage';
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
  {
    name: 'Checkout',
    path: '/checkout',
    element: Checkout,
  },
  {
    name: 'Cart',
    path: '/cart',
    element: ShoppingCart,
  },
];
