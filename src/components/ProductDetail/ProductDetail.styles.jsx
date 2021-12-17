import styled from 'styled-components'
import ProductDetailComponent from 'components/ProductDetail/ProductDetail.component'

const ProductDetail = styled(ProductDetailComponent)`
  display: grid;
  grid-template-columns: 4fr 2fr;
  grid-template-rows: 3fr 1fr 1fr;
  gap: 3em;
  padding: 2em;

  & > div {
    border: 1px solid black;
  }

  .product-detail-tags,
  .product-detail-description,
  .product-detail-specs {
    grid-column: 1/3;
  }

  .product-detail-data {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }

  .product-detail-data {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }

  .product-detail-data .addToCart {
    grid-column: 1/3;
  }
`

export default ProductDetail
