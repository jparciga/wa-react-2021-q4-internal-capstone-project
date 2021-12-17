import styled from 'styled-components'
import ListComponent from 'components/SearchResults/List/List.component'

const List = styled(ListComponent)`
  display: grid;
  grid-template-rows: 4fr auto;
  gap: 2em;
  justify-items: center;

  .list-cards {
    display: grid;
    grid-template-rows: 1fr auto;
    gap: 5em;
  }
`

export default List
