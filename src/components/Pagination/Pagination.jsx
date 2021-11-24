import { PaginationButton, PaginationContainer } from "./Pagination.styled";

export default function Pagination() {
  return (
    <PaginationContainer>
      <PaginationButton>{"<<"}</PaginationButton>
      <PaginationButton>{"<"}</PaginationButton>
      <PaginationButton active>{"1"}</PaginationButton>
      <PaginationButton>{"2"}</PaginationButton>
      <PaginationButton>{"3"}</PaginationButton>
      <PaginationButton>{">"}</PaginationButton>
      <PaginationButton>{">>"}</PaginationButton>
    </PaginationContainer>
  );
}
