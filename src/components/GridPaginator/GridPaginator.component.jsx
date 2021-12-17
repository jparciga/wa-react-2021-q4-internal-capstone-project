import PropTypes from 'prop-types'
import {useSelector, useDispatch} from 'react-redux'
import {bindActionCreators} from 'redux'
import {productListActionCreators} from 'state/index'

import {usePagination} from 'utils/hooks/usePagination'

const GridPaginator = ({totalPages}) => {
  const currentPage = useSelector(({productList: {currentPage}}) => currentPage)
  const dispatch = useDispatch()

  const {createPaginationNumeration} = usePagination('productList')
  const {first, prev, next, last} = bindActionCreators(
    productListActionCreators,
    dispatch,
  )

  return (
    <div className="grid-paginator">
      {currentPage !== 1 && (
        <>
          <button data-testid="first" onClick={() => first()}>
            First
          </button>
          <button data-testid="prev" onClick={() => prev()}>
            Prev
          </button>
        </>
      )}
      {createPaginationNumeration(currentPage, totalPages)}
      {currentPage !== totalPages && (
        <>
          <button data-testid="next" onClick={() => next()}>
            Next
          </button>
          <button data-testid="last" onClick={() => last()}>
            Last
          </button>
        </>
      )}
    </div>
  )
}

GridPaginator.propTypes = {
  totalPages: PropTypes.number,
}

export default GridPaginator
