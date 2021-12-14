import PropTypes from 'prop-types';
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from 'redux';
import { productListActionCreators } from 'state/index';

import { usePagination } from 'utils/hooks/usePagination';

const GridPaginator = ({ totalPages }) => {
    const currentPage = useSelector(({productList: { currentPage} }) => currentPage);
    const dispatch = useDispatch();

    const { createPaginationNumeration }=  usePagination("productList");
    const { first, prev, next, last } = bindActionCreators(productListActionCreators, dispatch);


    return (
        <div className="grid-paginator">
            {   
                (currentPage !== 1) &&
                <>
                    <button onClick={() => first() }>First</button> 
                    <button onClick={() => prev() }>Prev</button>
                </>           
            }
            { createPaginationNumeration(currentPage, totalPages) }
            {   
                (currentPage !== totalPages) &&
                <>
                    <button onClick={() => next() }>Next</button>
                    <button onClick={() => last() }>Last</button> 
                </>
            }
        </div>
    )
}

GridPaginator.propTypes = {
    className: PropTypes.string, 
    cardId: PropTypes.string, 
    url: PropTypes.string, 
    name: PropTypes.string, 
    category: PropTypes.string, 
    price: PropTypes.number
};

export default GridPaginator;