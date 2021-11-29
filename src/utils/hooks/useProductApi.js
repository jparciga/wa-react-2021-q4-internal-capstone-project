import { useState, useEffect } from 'react';
import { API_BASE_URL } from '../constants';
import { useLatestAPI } from './useLatestAPI';

export function useProductApi(documentId, elementsPerPage = 10, page = 1) {
  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
  const [response, setResponse] = useState(() => ({
    data: {},
    isLoading: true,
  }));

  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => {};
    }

    const controller = new AbortController();

    async function getDocumentType() {
      try {
        setResponse({ data: {}, isLoading: true });

        const response = await fetch(
          `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
            '[[at(document.id, "' + documentId + '")]]'
          )}&lang=en-us`,
          {
            signal: controller.signal,
          }
        );
        const data = await response.json();

        setResponse({ data, isLoading: false });
      } catch (err) {
        setResponse({ data: {}, isLoading: false });
        console.error(err);
      }
    }

    getDocumentType();

    return () => {
      controller.abort();
    };
  }, [apiRef, isApiMetadataLoading, documentId]);

  return response;
}
