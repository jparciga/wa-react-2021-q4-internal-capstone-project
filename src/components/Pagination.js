import React from 'react';
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';
import { PaginationContent, ButtonNumber } from './Pagination.style';

export default function Pagination({ current, totalPages }) {
  return (
    <PaginationContent>
      <BiLeftArrow />
      <ButtonNumber>1</ButtonNumber>
      <ButtonNumber>2</ButtonNumber>
      <ButtonNumber>3</ButtonNumber>
      <BiRightArrow />
    </PaginationContent>
  );
}
