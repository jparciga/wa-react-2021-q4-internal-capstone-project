import {render} from '@testing-library/react'
import Slider from 'components/Slider/Slider'

describe('productList test suite', () => {
  test('test product category sidebar', () => {
    const mockData = {data: {parsedData: [], isLoading: false}}

    render(<Slider data={mockData}></Slider>)
  })
  test('test category filtering', () => {})
  test('test pagination controls', () => {})
  test('test prev button disabled when on first page', () => {})
  test('test next button working', () => {})
  test('test prev button working', () => {})
  test('test next button disable when on last page', () => {})
})
