import {Switch, Route} from 'react-router-dom'
import Home from 'components/Home/Home'
import ProductList from 'components/ProductList/ProductList.styles'
import ProductDetail from 'components/ProductDetail/ProductDetail.styles'
import SearchResults from 'components/SearchResults/SearchResults.styles'
import ShoppingCart from 'components/ShoppingCart/ShoppingCart.styles'
import Checkout from 'components/Checkout/Checkout.styles'

export const routes = [
  {path: '/home', component: Home, exact: true},
  {path: '/products', component: ProductList, exact: true},
  {path: '/product/:productId', component: ProductDetail, exact: true},
  {path: '/search', component: SearchResults, exact: true},
  {path: '/cart', component: ShoppingCart, exact: true},
  {path: '/checkout', component: Checkout, exact: true},
]

const AppRouter = () => {
  return (
    <>
      <Switch>
        {routes.map(({exact, path, component}) => {
          return (
            <Route key={path} exact={exact} path={path} component={component} />
          )
        })}
        <Route path="*">
          <span>404 Not Found.</span>
        </Route>
      </Switch>
    </>
  )
}

export default AppRouter
