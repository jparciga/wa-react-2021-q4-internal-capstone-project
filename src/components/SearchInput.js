import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchInputContent, SearchButton } from './SearchInput.styles';
import { GiMagnifyingGlass } from 'react-icons/gi';

const SearchInput = () => {
  const navigate = useNavigate();
  const inputRef = useRef(null);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        navigate(`search?q=${inputRef.current.value}`);
      }}
    >
      <SearchInputContent ref={inputRef} placeholder="Search Products..." />
      <SearchButton>
        <GiMagnifyingGlass />
      </SearchButton>
    </form>
  );
};
export default SearchInput;
