import styled from 'styled-components';
import SearchResultsComponent from 'components/SearchResults/SearchResults.component';

const SearchResults = styled(SearchResultsComponent)`
    display: grid;
    grid-template-rows: 1fr auto;
    gap: 2em;
    padding: 1em;

    & .list-container {
        display: inherit;
        grid-template-rows: 4fr auto;
    }
`;


export default SearchResults;