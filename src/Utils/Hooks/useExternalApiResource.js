import { useEffect, useState } from 'react';
import { API_BASE_URL } from 'Utils/constants';
import { useLatestAPI } from './useLatestAPI';

export default function useExternalApiResource(resourceSpec, pageSize = 5) {
  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
  const [ page, setPage ] = useState(1);

  const [documents, setDocuments] = useState(() => ({
    data: {},
    isLoading: true,
  }));


  useEffect(() => {
    if (!apiRef || isApiMetadataLoading || resourceSpec.length === 0) {
      return () => {};
    }

    const controller = new AbortController();

    async function fetchData() {
      try {
        setDocuments({ data: {}, isLoading: true });
        const query = resourceSpec.reduce((acc, {operator, field, value}) => {
            return acc + `&q=${encodeURIComponent(`[[${operator}(${field}, ${JSON.stringify(value)})]]`)}`;
        }, '');

        const pageParam = page ? `&page=${page}` : '';

        const response = await fetch(
          `${API_BASE_URL}/documents/search?ref=${apiRef}${query}&lang=en-us&pageSize=${pageSize}${pageParam}`,
          {
            signal: controller.signal,
          }
        );
        const data = await response.json();

        setDocuments({ data, isLoading: false });
      } catch (err) {
        setDocuments({ data: {}, isLoading: false });
        console.error(err);
      }
    }

    fetchData();

    return () => {
      controller.abort();
    };
  }, [apiRef, isApiMetadataLoading, resourceSpec, pageSize, page]);

  return [documents, setPage];
}