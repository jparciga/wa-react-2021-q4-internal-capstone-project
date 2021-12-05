import React from 'react';
import PropTypes from 'prop-types';

import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from 'redux';
import { searchResultsActionCreators } from 'state/index';

const ListPaginatorComponent = ({className}) => {
    const { currentPage, totalPages } = useSelector((state) => state.searchResults);
    const dispatch = useDispatch();

    const { first, prev, next, last, setCurrentPage } = bindActionCreators(searchResultsActionCreators, dispatch);

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

    return (
        <div className={className}>
            <button onClick={() => first() }>First</button>
            <button onClick={() => prev() }>Prev</button>
            { createPaginationNumeration(currentPage, totalPages) }
            <button onClick={() => next() }>Next</button>
            <button onClick={() => last() }>Last</button>
        </div>
    );

    // return (
    //     <div className={className}>
    //         <button onClick={() => searchResultsDispatcher({ type: "first" }) }>First</button>
    //         <button onClick={() => searchResultsDispatcher({ type: "prev" }) }>Prev</button>
    //         { createPaginationNumeration(searchResultsState.currentPage, searchResultsState.totalPages) }
    //         <button onClick={() => searchResultsDispatcher({ type: "next" })}>Next</button>
    //         <button onClick={() => searchResultsDispatcher({ type: "last" })}>Last</button>
    //     </div>
    // )
}

ListPaginatorComponent.propTypes = {
    className: PropTypes.string
};

export default ListPaginatorComponent;
