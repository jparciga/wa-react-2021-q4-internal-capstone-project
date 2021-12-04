import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';
import { PaginationContent, ButtonNumber } from './Pagination.style';
import { Link } from 'react-router-dom';
import usePages from '../utils/hooks/usePages';
export default function Pagination({ totalPages }) {
  const [pages, currentPage] = usePages(totalPages);
  return (
    <PaginationContent>
      <BiLeftArrow />
      {pages.map((page) => (
        <ButtonNumber key={page}>
          {page === currentPage ? (
            page
          ) : (
            <Link to={`?page=${page}`}>{page}</Link>
          )}
        </ButtonNumber>
      ))}
      <BiRightArrow />
    </PaginationContent>
  );
}
