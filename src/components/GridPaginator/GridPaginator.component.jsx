import PropTypes from 'prop-types';
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from 'redux';
import { productListActionCreators } from 'state/index';

const GridPaginator = ({ totalPages }) => {
    const currentPage = useSelector(({productList: { currentPage} }) => currentPage);
    const dispatch = useDispatch();

    const { first, prev, next, last, setCurrentPage } = bindActionCreators(productListActionCreators, dispatch);

    const createPaginationNumeration = (page, totalPages) => {
        let content = [];
        for (let i = 1; i <= totalPages; i++) {
            content.push(<button style={ (page === i) ? { color: "red" } : {}} key={`number${i}}`} onClick={() => setCurrentPage(i)}>{i}</button>);
        }
        return content;
    };

    return (
        <div className="grid-paginator">
            <button onClick={() => first() }>First</button>
            <button onClick={() => prev() }>Prev</button>
            { createPaginationNumeration(currentPage, totalPages) }
            <button onClick={() => next() }>Next</button>
            <button onClick={() => last() }>Last</button>
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