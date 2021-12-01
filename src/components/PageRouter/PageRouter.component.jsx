import React, {useState} from "react";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import Home from "components/Home/Home";
import ProductList from "components/ProductList/ProductList.styles";
import ProductDetail from "components/ProductDetail/ProductDetail.styles";

const PageRouter = () => {
    const [currentPage, setCurrentPage] = useState("Home");

    const handleNavigation = () => {
        setCurrentPage((currentPage === "Home") ? "ProductList" : "Home");
      };

  return (
    <>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/products" component={ProductList} />
        <Route exact path="/product/:productId" component={ProductDetail} />
        <Route path="*">
          <span>404 Not Found.</span>
        </Route>
      </Switch>
      <Link to={currentPage === "Home" ? "/products" : "/home"}>
        <button id="btnChangePage" onClick={handleNavigation}>
          View All Products
        </button>
      </Link>

      <Redirect
        exact
        from="/wa-react-2021-q4-internal-capstone-project"
        to="/home"
      />
      <Redirect exact from="/" to="/home" />
    </>
  );
}

export default PageRouter;