import styled from 'styled-components'
import ListCardComponent from './ListCard.component'

const ListCard = styled(ListCardComponent)`
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  grid-template-rows: 1fr auto;
  gap: 1em;
  padding: 3em;

  background-color: white;
  border: 2px solid black;
  border-radius: 5px;

  img {
    width: 100%;
    height: auto;
    aspect-ratio: 4 / 3;
    object-fit: cover;
  }

  .list-card-data {
    display: flex;
    flex-direction: column;
  }
`

export default ListCard
