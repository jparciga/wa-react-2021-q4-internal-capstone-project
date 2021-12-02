import React, {useReducer} from 'react'
import List from './List/List.styles';
import { useQuery } from 'hooks/useQuery';
import SearchResultsContext from 'state/SearchResultsContext';
import SearchResultsReducer, {SEARCH_RESULTS_INITIAL_STATE} from 'state/SearchResultsReducer';


const SearchResultsComponent = ({className}) => {

    const [searchResultsState, searchResultsDispatcher] = useReducer(SearchResultsReducer, SEARCH_RESULTS_INITIAL_STATE);

    const query = useQuery();
    const searchTerm = query.get('q');

    return (
        <SearchResultsContext.Provider value={{searchResultsState, searchResultsDispatcher}}>
            <div className={className}>
                <h3>Search Results</h3>   
                <List searchTerm={searchTerm}/>
            </div>
        </SearchResultsContext.Provider>
    );
}


export default SearchResultsComponent;