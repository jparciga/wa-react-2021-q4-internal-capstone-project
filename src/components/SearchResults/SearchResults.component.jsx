import List from './List/List.styles'
import {useQuery} from 'hooks/useQuery'
import PropTypes from 'prop-types'

const SearchResultsComponent = ({className}) => {
  const query = useQuery()
  const searchTerm = query.get('q')

  return (
    <div className={className}>
      <h3>Search Results</h3>
      <List searchTerm={searchTerm} noElementsCustomMessage="No hits..." />
    </div>
  )
}

SearchResultsComponent.propTypes = {
  className: PropTypes.string,
}

export default SearchResultsComponent
