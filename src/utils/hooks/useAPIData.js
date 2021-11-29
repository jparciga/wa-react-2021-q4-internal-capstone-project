import { useState, useEffect } from 'react';
import { API_BASE_URL } from '../constants';
import { useLatestAPI } from './useLatestAPI';

export function useAPIData({queries, pageSize}, mapFunction) {
    const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
    const [retrievedData, setRetrievedData] = useState(() => ({
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
            setRetrievedData({ parsedData: [], isLoading: true });

            const queryString = queries.map(query => {
                return `q=${encodeURIComponent(`[[${query}]]`)}`;
            }).join('&');
    
            const response = await fetch(
              `${API_BASE_URL}/documents/search?ref=${apiRef}&${queryString}&lang=en-us&pageSize=${pageSize}`,
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
    
            setRetrievedData({ parsedData, isLoading: false });
          } catch (err) {
            setRetrievedData({ parsedData: [], isLoading: false });
            console.error(err);
          }
        }
    
        getDataFromAPI();
    
        return () => {
          controller.abort();
        };
      }, [apiRef, isApiMetadataLoading]);

      return retrievedData;
};