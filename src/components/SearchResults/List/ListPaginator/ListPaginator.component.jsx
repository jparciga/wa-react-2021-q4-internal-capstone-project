import React, {useContext} from 'react'
import SearchResultsContext from 'state/SearchResultsContext';
import PropTypes from 'prop-types';

const ListPaginatorComponent = ({className}) => {
    
    const {searchResultsState, searchResultsDispatcher} = useContext(SearchResultsContext);

    const createPaginationNumeration = (page, totalPages) => {
        let content = [];
        for (let i = 1; i <= totalPages; i++) {
            content.push(
                <button 
                    style={ (page === i) ? { color: "red" } : {}} 
                    key={`number${i}}`}  
                    onClick={() => searchResultsDispatcher({ type: "set_current_page", currentPage: i})}>
                        {i}
                </button>);
        }

        return content;
    };

    return (
        <div className={className}>
            <button onClick={() => searchResultsDispatcher({ type: "first" }) }>First</button>
            <button onClick={() => searchResultsDispatcher({ type: "prev" }) }>Prev</button>
            { createPaginationNumeration(searchResultsState.currentPage, searchResultsState.totalPages) }
            <button onClick={() => searchResultsDispatcher({ type: "next" })}>Next</button>
            <button onClick={() => searchResultsDispatcher({ type: "last" })}>Last</button>
        </div>
    )
}

ListPaginatorComponent.propTypes = {
    className: PropTypes.string
};

export default ListPaginatorComponent;
