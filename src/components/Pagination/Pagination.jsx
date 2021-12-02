import { useLocation } from "react-router";
import { NAVIGATION } from "../../utils/constants";
import { PaginationButton, PaginationContainer } from "./Pagination.styled";

export default function Pagination({ totalPages }) {
  const { page: currentPage = 1, filter } = useLocation().state || {};

  let pageButtons = [];
  for (let page = 1; page <= totalPages; page++) {
    pageButtons.push(
      <PaginationButton
        key={page}
        to={NAVIGATION.SHOP}
        state={{ page, filter }}
        active={page === currentPage ? 1 : undefined}
      >
        {page}
      </PaginationButton>
    );
  }

  return (
    <PaginationContainer>
      <PaginationButton to={NAVIGATION.SHOP} state={{ page: 1, filter }}>
        {"<<"}
      </PaginationButton>
      <PaginationButton
        to={NAVIGATION.SHOP}
        state={{
          page: currentPage > 1 ? currentPage - 1 : currentPage,
          filter,
        }}
      >
        {"<"}
      </PaginationButton>
      {pageButtons}
      <PaginationButton
        to={NAVIGATION.SHOP}
        state={{
          page: currentPage < totalPages ? currentPage + 1 : currentPage,
          filter,
        }}
      >
        {">"}
      </PaginationButton>
      <PaginationButton
        to={NAVIGATION.SHOP}
        state={{ page: totalPages, filter }}
      >
        {">>"}
      </PaginationButton>
    </PaginationContainer>
  );
}
