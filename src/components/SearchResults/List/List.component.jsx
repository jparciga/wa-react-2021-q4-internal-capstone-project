import React, {useContext} from 'react'
import ListCard from 'components/SearchResults/List/ListCard/ListCard.styles';
import ListPaginator from './ListPaginator/ListPaginator.styles';
import useSearch from 'hooks/useSearch';
import SearchResultsContext from 'state/SearchResultsContext';

const ListComponent = ({className, searchTerm}) => {
    const {searchResultsState} = useContext(SearchResultsContext);

    const [{parsedData, isLoading}] = useSearch({pageSize: 20, searchTerm: searchTerm, page: searchResultsState.currentPage});

    if(isLoading)
        return(<h3>Loading...</h3>);

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

export default ListComponent;