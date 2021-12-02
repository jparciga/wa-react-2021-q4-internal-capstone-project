import React, {useContext} from 'react';
import ProductListContext from 'state/ProductListContext';
import PropTypes from 'prop-types';

const GridPaginator = ({ totalPages }) => {

    const { productListState, productListDispatcher } = useContext(ProductListContext);

    const createPaginationNumeration = (page, totalPages) => {
        let content = [];
        for (let i = 1; i <= totalPages; i++) {
            content.push(<button style={ (page === i) ? { color: "red" } : {}} key={`number${i}}`} onClick={() => productListDispatcher({ type: "set_current_page", currentPage: i})}>{i}</button>);
        }

        return content;
    };

    return (
        <div className="grid-paginator">
            <button onClick={() => productListDispatcher({ type: "first" }) }>First</button>
            <button onClick={() => productListDispatcher({ type: "prev" }) }>Prev</button>
            { createPaginationNumeration(productListState.currentPage, totalPages) }
            <button onClick={() => productListDispatcher({ type: "next" })}>Next</button>
            <button onClick={() => productListDispatcher({ type: "last" })}>Last</button>
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