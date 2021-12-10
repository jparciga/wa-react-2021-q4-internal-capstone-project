import { useDispatch } from "react-redux";
import { bindActionCreators } from 'redux';
import { searchResultsActionCreators } from 'state/index';
import { productListActionCreators } from 'state/index';

export const usePagination = (sliceSelector) => {
    const dispatch = useDispatch();

    //there are two distinct "setCurrentPage" actions, one on searchResults and another on productList
    const { setCurrentPage } = (sliceSelector === "productList") ? 
    bindActionCreators(productListActionCreators, dispatch) : 
    bindActionCreators(searchResultsActionCreators, dispatch);

    const createPaginationNumeration = (page, totalPages) => {
        let content = [];
        for (let i = 1; i <= totalPages; i++) {
            content.push(
                <button 
                    style={ (page === i) ? { color: "red" } : {}} 
                    key={`number${i}}`}  
                    onClick={() => setCurrentPage(i)}>
                        {i}
                </button>);
        }
        return content;
    };

    return {createPaginationNumeration};

}