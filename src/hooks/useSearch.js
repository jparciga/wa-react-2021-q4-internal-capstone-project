import {useSearchResultsAPIData} from 'utils/hooks/useSearchResultsAPIData'

const useSearch = ({pageSize, searchTerm}) => {
  const queries = [
    'at(document.type, "product")',
    `fulltext(document, "${searchTerm}")`,
  ]
  const mapFunction = ({
    id,
    data: {
      name,
      category: {slug},
      mainimage: {url},
      short_description,
      price,
      stock,
    },
  }) => {
    return {
      id,
      name,
      url,
      category: slug,
      shortDescription: short_description,
      price,
      stock,
    }
  }

  const [searchedProducts] = useSearchResultsAPIData({
    queries,
    pageSize,
    mapFunction,
  })
  return [searchedProducts]
}

export default useSearch
