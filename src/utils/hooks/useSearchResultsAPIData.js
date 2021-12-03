import { useState, useEffect} from 'react';
import { API_BASE_URL } from '../constants';
import { useLatestAPI } from './useLatestAPI';

import SearchResultsContext from 'state/SearchResultsContext';
import { useContext } from 'react';

export function useSearchResultsAPIData({queries, pageSize, mapFunction}) {
    const { searchResultsState, searchResultsDispatcher } = useContext(SearchResultsContext);
    const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
    const [retrievedData, setRetrievedData] = useState({
        parsedData: [],
        totalPages: 1,
        isLoading: true
    });

    useEffect(() => {
        if (!apiRef || isApiMetadataLoading) {
          return () => {};
        }
    
        const controller = new AbortController();
    
        async function getDataFromAPI() {
          try {
            const queryString = queries.map(query => {
                return `q=${encodeURIComponent(`[[${query}]]`)}`;
            }).join('&');
    
            const response = await fetch(
              `${API_BASE_URL}/documents/search?ref=${apiRef}&${queryString}&lang=en-us&pageSize=${pageSize}&page=${searchResultsState.currentPage}`,
              {
                signal: controller.signal,
              }
            );
            const data = await response.json();

            const mappingFunction = (data) => {
                const results = data.results;
                return results.map(mapFunction);
             };

            const parsedData = mappingFunction(data);

            let totalPages = data.total_pages;
    
            searchResultsDispatcher({ type: 'set_values', payload: {currentPage: searchResultsState.currentPage, totalPages }});
            setRetrievedData({ parsedData, totalPages, isLoading: false });
          } catch (err) {
            //productListDispatcher({ type: 'set_initial_state'});
            setRetrievedData({ parsedData: [], totalPages: 1, isLoading: false });
            console.error(err);
          }
        }
    
        getDataFromAPI();
    
        return () => {
          controller.abort();
        };
      }, [apiRef, 
        isApiMetadataLoading, 
        searchResultsState
    ]);

      return [retrievedData];
};