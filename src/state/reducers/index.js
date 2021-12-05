import { combineReducers } from "redux";
import productListReducer from 'state/reducers/ProductListReducer';
import searchResultsReducer from 'state/reducers/SearchResultsReducer';
import shoppingCartReducer from 'state/reducers/ShoppingCartReducer';

const reducers = combineReducers({
    productList: productListReducer,
    searchResults: searchResultsReducer,
    shoppingCart: shoppingCartReducer
});

export default reducers;