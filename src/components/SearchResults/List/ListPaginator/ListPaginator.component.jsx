import React from 'react';
import PropTypes from 'prop-types';

import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from 'redux';
import { searchResultsActionCreators } from 'state/index';

import { usePagination } from 'utils/hooks/usePagination';

const ListPaginatorComponent = ({className}) => {
    const { currentPage, totalPages } = useSelector((state) => state.searchResults);
    const dispatch = useDispatch();

    const { createPaginationNumeration } = usePagination("searchResults");
    const { first, prev, next, last } = bindActionCreators(searchResultsActionCreators, dispatch);

    return (
        <div className={className}>
            <button onClick={() => first() }>First</button>
            <button onClick={() => prev() }>Prev</button>
            { createPaginationNumeration(currentPage, totalPages) }
            <button onClick={() => next() }>Next</button>
            <button onClick={() => last() }>Last</button>
        </div>
    );
}

ListPaginatorComponent.propTypes = {
    className: PropTypes.string
};

export default ListPaginatorComponent;
