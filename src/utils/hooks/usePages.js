import { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
const usePages = (totalPages) => {
  const pages = [...Array(totalPages).keys()].map((num, index) =>
    parseInt(index + 1)
  );
  const search = useLocation().search;
  const paramPage = new URLSearchParams(search).get('page') ?? 1;
  const [currentPage, setCurrentPage] = useState(paramPage);
  useEffect(() => {
    setCurrentPage(parseInt(paramPage));
  }, [paramPage, currentPage]);

  return [pages, currentPage];
};
export default usePages;
