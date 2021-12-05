import { useState, useEffect } from "react";
import { API_BASE_URL } from "../constants";
import { useLatestAPI } from "./useLatestAPI";

import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { searchResultsActionCreators } from "state/index";

export function useSearchResultsAPIData({ queries, pageSize, mapFunction }) {
  
  const searchResults = useSelector((state) => state.searchResults);
  const { setValues } = bindActionCreators(searchResultsActionCreators, useDispatch());

  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
  const [retrievedData, setRetrievedData] = useState({
    parsedData: [],
    totalPages: 1,
    isLoading: true,
  });

  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => {};
    }

    const controller = new AbortController();

    async function getDataFromAPI() {
      try {
        const queryString = queries
          .map((query) => {
            return `q=${encodeURIComponent(`[[${query}]]`)}`;
          })
          .join("&");

        const response = await fetch(
          `${API_BASE_URL}/documents/search?ref=${apiRef}&${queryString}&lang=en-us&pageSize=${pageSize}&page=${searchResults.currentPage}`,
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

        setValues({ currentPage: searchResults.currentPage, totalPages });
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
  }, [apiRef, isApiMetadataLoading, searchResults]);

  return [retrievedData];
}
