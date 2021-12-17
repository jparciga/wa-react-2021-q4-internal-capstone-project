import Grid from 'components/Grid/Grid.styles'

import Sidebar from 'components/Sidebar/Sidebar.component'
import useProductCategories from 'hooks/useProductCategories'
import useProducts from 'hooks/useProducts'

import {useQuery} from 'hooks/useQuery'
import PropTypes from 'prop-types'

import {useDispatch} from 'react-redux'
import {bindActionCreators} from 'redux'
import {productListActionCreators} from 'state/index'

export const ProductListComponent = ({className}) => {
  const {addQueryString} = bindActionCreators(
    productListActionCreators,
    useDispatch(),
  )

  let query = useQuery()
  const queryString = query.get('category')
  if (queryString) {
    addQueryString(queryString)
    query.delete('category')
  }
  const [productCategories] = useProductCategories()
  const [products] = useProducts({pageSize: 12})

  const gridData = {
    totalPages: products.totalPages,
    parsedData: products.parsedData,
    isLoading: products.isLoading,
  }

  return (
    <div className={className}>
      <Sidebar data={productCategories} title={`Categories`} />
      <Grid data={gridData} pagination />
    </div>
  )
}

ProductListComponent.propTypes = {
  className: PropTypes.string,
}

export default ProductListComponent
