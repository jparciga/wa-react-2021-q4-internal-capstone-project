import React from 'react';
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';
import { PaginationContent, ButtonNumber } from './Pagination.style';

export default function Pagination({ current, totalPages }) {
  let pages = [];
  for (let page = 1; page <= totalPages; page++) {
    pages.push(page);
  }

  return (
    <PaginationContent>
      <BiLeftArrow />
      {pages.map((page, index) => (
        <ButtonNumber key={index}>{page}</ButtonNumber>
      ))}
      <BiRightArrow />
    </PaginationContent>
  );
}
