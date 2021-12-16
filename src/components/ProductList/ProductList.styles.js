import styled from 'styled-components'
import ProductListContextWrapper from 'components/ProductListContextWrapper/ProductListContextWrapper.component'

const ProductList = styled(ProductListContextWrapper)`
  display: grid;
  grid-template-columns: 1fr 6fr;
  grid-template-rows: 1fr;
`

export default ProductList
