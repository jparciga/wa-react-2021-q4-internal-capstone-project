import React from 'react';
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';
import { PaginationContent, ButtonNumber } from './Pagination.style';
import { Link } from 'react-router-dom';
export default function Pagination({ current, totalPages }) {
  let pages = [];
  for (let page = 1; page <= totalPages; page++) {
    pages.push(page);
  }

  return (
    <PaginationContent>
      <BiLeftArrow />
      {pages.map((page, index) => (
        <ButtonNumber key={index}>
          <Link to={`?page=${page}`}> {page}</Link>
        </ButtonNumber>
      ))}
      <BiRightArrow />
    </PaginationContent>
  );
}
