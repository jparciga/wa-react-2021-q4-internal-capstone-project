import {useState, useEffect} from 'react'
import {API_BASE_URL} from '../constants'
import {useLatestAPI} from './useLatestAPI'

import {useSelector, useDispatch} from 'react-redux'
import {bindActionCreators} from 'redux'
import {productListActionCreators} from 'state/index'

export function useProductListAPIData({queries, pageSize, mapFunction}) {
  const productList = useSelector(state => state.productList)
  const {setValues} = bindActionCreators(
    productListActionCreators,
    useDispatch(),
  )

  const {ref: apiRef, isLoading: isApiMetadataLoading} = useLatestAPI()
  const [retrievedData, setRetrievedData] = useState({
    parsedData: [],
    totalPages: 1,
    isLoading: true,
  })

  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => {}
    }

    const controller = new AbortController()

    async function getDataFromAPI() {
      try {
        const queryString = queries
          .map(query => {
            return `q=${encodeURIComponent(`[[${query}]]`)}`
          })
          .join('&')

        const response = await fetch(
          `${API_BASE_URL}/documents/search?ref=${apiRef}&${queryString}&lang=en-us&pageSize=${pageSize}&page=${productList.currentPage}`,
          {
            signal: controller.signal,
          },
        )
        const data = await response.json()

        const mappingFunction = data => {
          const results = data.results
          return results.map(mapFunction)
        }

        const parsedData = mappingFunction(data)

        let totalPages = data.total_pages

        setValues({
          currentPage: productList.currentPage,
          totalPages,
          filters: productList.filters,
        })
        setRetrievedData({parsedData, totalPages, isLoading: false})
      } catch (err) {
        setRetrievedData({parsedData: [], totalPages: 1, isLoading: false})
        console.error(err)
      }
    }

    getDataFromAPI()

    return () => {
      controller.abort()
    }
  }, [
    apiRef,
    isApiMetadataLoading,
    productList.currentPage,
    productList.filters,
  ])

  return [retrievedData]
}
