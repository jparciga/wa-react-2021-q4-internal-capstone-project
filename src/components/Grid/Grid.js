import GridCard from 'components/GridCard/GridCard'
import GridPaginator from 'components/GridPaginator/GridPaginator.component'
import PropTypes from 'prop-types'

const GridComponent = ({
  className,
  data: {totalPages, parsedData = [], isLoading},
  pagination,
}) => {
  if (isLoading) return <h1>Loading...</h1>

  const showPagination = pagination && totalPages > 1

  const filledGrid = (
    <>
      <div className="grid-container">
        {parsedData.map(({id, url, name, category, price, stock}) => {
          return (
            <GridCard
              key={id}
              cardId={id}
              url={url}
              name={name}
              category={category}
              price={price}
              stock={stock}
            />
          )
        })}
      </div>
      {showPagination && <GridPaginator totalPages={totalPages} />}
    </>
  )

  return (
    <div data-testid="test-grid" className={className}>
      {parsedData.length > 0 ? (
        filledGrid
      ) : (
        <p style={{textAlign: 'center'}}>Sorry! No elements.</p>
      )}
    </div>
  )
}

GridComponent.propTypes = {
  className: PropTypes.string,
  data: PropTypes.shape({
    totalPages: PropTypes.number,
    parsedData: PropTypes.array,
    isLoading: PropTypes.bool,
  }),
  pagination: PropTypes.bool,
  setPageNumber: PropTypes.func,
}

export default GridComponent
