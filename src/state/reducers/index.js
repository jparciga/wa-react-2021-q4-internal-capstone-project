import { combineReducers } from "redux";
import productListReducer from 'state/reducers/ProductListReducer';
import searchResultsReducer from 'state/reducers/SearchResultsReducer';

const reducers = combineReducers({
    productList: productListReducer,
    searchResults: searchResultsReducer
});

export default reducers;