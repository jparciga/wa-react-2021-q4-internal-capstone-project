import {useAPIData} from 'utils/hooks/useAPIData'
import {productsByProductIdMapFunction} from 'utils/mapFunctions'

//retrieve multiple products by their id's
//https://wizeline-academy.cdn.prismic.io/api/v2/documents/search?ref=YZaBvBIAACgAvnOP&q=[[any%28document.id%2C+%5B%22YZWdwRIAACkAumb-%22%2C+%22YZWlSRIAACoAuoj9%22%5D%29]]
export const useProductById = (productIds = [], pageSize) => {
  const concatenatedProductIds = productIds
    .map(productId => `"${productId}"`)
    .join(',')
  const queries = [`any(document.id, [${concatenatedProductIds}])`]

  const [product] = useAPIData(
    {queries, pageSize},
    productsByProductIdMapFunction,
  )
  return [product]
}

export default useProductById
