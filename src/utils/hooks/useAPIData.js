import { useState, useEffect } from 'react';
import { API_BASE_URL } from '../constants';
import { useLatestAPI } from './useLatestAPI';

export function useAPIData({queries, pageSize, page = ''}, mapFunction) {
    const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
    const [pageNumber, setPageNumber] = useState(page);
    const [retrievedData, setRetrievedData] = useState(() => ({
      page: 1, 
      totalPages: 0,
      parsedData: [],
      isLoading: true,
    }));

    useEffect(() => {
        if (!apiRef || isApiMetadataLoading) {
          return () => {};
        }
    
        const controller = new AbortController();
    
        async function getDataFromAPI() {
          try {
            setRetrievedData({ page: 1, totalPages: 0, parsedData: [], isLoading: true });

            const queryString = queries.map(query => {
                return `q=${encodeURIComponent(`[[${query}]]`)}`;
            }).join('&');
    
            const response = await fetch(
              `${API_BASE_URL}/documents/search?ref=${apiRef}&${queryString}&lang=en-us&pageSize=${pageSize}${(page) ? `&page=${pageNumber}` : ''}`,
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
    
            setRetrievedData({ page, totalPages, parsedData, isLoading: false });
            setPageNumber(pageNumber);
          } catch (err) {
            setRetrievedData({ page: 1, totalPages: 0, parsedData: [], isLoading: false });
            setPageNumber(1);
            console.error(err);
          }
        }
    
        getDataFromAPI();
    
        return () => {
          controller.abort();
        };
      }, [apiRef, isApiMetadataLoading, pageNumber]);

      return [retrievedData, pageNumber, setPageNumber];
};