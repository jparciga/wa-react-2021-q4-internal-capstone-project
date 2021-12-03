import React, {useContext} from 'react'
import ListCard from 'components/SearchResults/List/ListCard/ListCard.styles';
import ListPaginator from './ListPaginator/ListPaginator.styles';
import useSearch from 'hooks/useSearch';
import SearchResultsContext from 'state/SearchResultsContext';
import PropTypes from 'prop-types';

const ListComponent = ({className, searchTerm, noElementsCustomMessage}) => {
    const {searchResultsState} = useContext(SearchResultsContext);

    const [{parsedData, isLoading}] = useSearch({pageSize: 20, searchTerm: searchTerm, page: searchResultsState.currentPage});

    if(isLoading)
        return(<h3>Loading...</h3>);

    if(parsedData.length === 0)
        return(<h4 style={{textAlign: "center"}}>{noElementsCustomMessage}</h4>)

    return (
        <div className={className}>
            {
                (searchResultsState.totalPages > 1) ? <ListPaginator /> : null
            }
            <div className="list-cards">
                {
                    parsedData.map((data) => {
                        return (<ListCard key={data.id} data={data} />)
                    })
                }
            </div>
            {
                (searchResultsState.totalPages > 1) ? <ListPaginator /> : null
            }
        </div>
    )
}

ListComponent.propTypes = {
    className: PropTypes.string,
    searchTerm: PropTypes.string,
    noElementsCustomMessage: PropTypes.string
};

export default ListComponent;