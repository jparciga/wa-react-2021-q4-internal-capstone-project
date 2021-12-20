import {render, screen, fireEvent} from '@testing-library/react'
import {within} from '@testing-library/react'
import Sidebar from 'components/Sidebar/Sidebar.component'
import GridPaginator from 'components/GridPaginator/GridPaginator.component'
import {useSelector, useDispatch} from 'react-redux'
import {bindActionCreators} from 'redux'

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}))

const next = jest.fn()
const prev = jest.fn()
// eslint-disable-next-line no-unused-vars
const modifyFilter = jest.fn(_x => {})
//const resetFilter = jest.fn()

jest.mock('redux', () => ({
  ...jest.requireActual('redux'),
  bindActionCreators: jest.fn(),
}))

const sidebarDataSource = [
  {
    id: 'YWHx-xIAAC0Ayj7i',
    name: 'Bed & Bath',
    url: 'https://images.prismic.io/wizeline-academy/5df875b5-3e43-4cf0-97b9-06ed73ed6d9b_sanibell-bv-530lZQXMKGw-unsplash-web+%281%29.jpg?auto=compress,format&rect=0,24,1920,1231&w=621&h=398',
  },
  {
    id: 'YWHy0xIAACoAykKm',
    name: 'Lighting',
    url: 'https://images.prismic.io/wizeline-academy/fdc4897a-c224-450f-9378-a39d2afaa7f6_zero-take-uLcBn2TsavU-unsplash-web+%281%29.jpg?auto=compress,format&rect=1,0,1919,1230&w=621&h=398',
  },
]

const mockAppState = {
  searchResult: {
    currentPage: 1,
    totalPages: 1,
  },
  productList: {
    currentPage: 1,
    totalPages: 1,
    filters: [],
  },
}

describe('productList test suite', () => {
  beforeEach(() => {
    useSelector.mockImplementation(callback => {
      return callback(mockAppState)
    })

    bindActionCreators.mockImplementation(() => {
      return {
        first: jest.fn(),
        prev: prev,
        next: next,
        last: jest.fn(),
        modifyFilter: modifyFilter,
        resetFilter: jest.fn(),
      }
    })
  })
  afterEach(() => {
    useSelector.mockClear()
    bindActionCreators.mockClear()
  })

  test('test product category sidebar', () => {
    const mockData = {parsedData: sidebarDataSource, isLoading: false}
    render(<Sidebar data={mockData} title={`Categories`}></Sidebar>)
    const sidebarParentDiv = screen.getByTestId('sidebar')
    const {getAllByTestId} = within(sidebarParentDiv)
    const items = getAllByTestId('category')

    expect(sidebarParentDiv).toBeDefined()
    expect(items.length).toEqual(2)
  })
  test('test category filtering', () => {
    const mockedDispatch = jest.fn()
    useDispatch.mockReturnValue(mockedDispatch)

    const mockData = {parsedData: sidebarDataSource, isLoading: false}
    render(<Sidebar data={mockData} title={`Categories`}></Sidebar>)
    const sidebarList = screen.getByRole('list', {
      name: /categories/i,
    })
    const {getAllByTestId} = within(sidebarList)
    const items = getAllByTestId('category')

    fireEvent.click(items[0])
    expect(modifyFilter).toHaveBeenCalledTimes(1)
  })
  test('test pagination controls', () => {
    const mockedDispatch = jest.fn()
    useSelector.mockImplementation(selectorFn => selectorFn(mockAppState))
    useDispatch.mockReturnValue(mockedDispatch)
    render(<GridPaginator totalPages={3}></GridPaginator>)

    const pageButtons = screen.getAllByTestId('pageNumbers')

    expect(pageButtons.length).toEqual(3)
  })
  test('test prev button disabled when on first page', () => {
    const mockedDispatch = jest.fn()
    useSelector.mockImplementation(selectorFn => selectorFn(mockAppState))
    useDispatch.mockReturnValue(mockedDispatch)
    render(<GridPaginator totalPages={3}></GridPaginator>)
    expect(screen.queryByTestId(/prev/i)).toBeNull()
  })
  test('test next button working', () => {
    const mockedDispatch = jest.fn()
    useSelector.mockImplementation(selectorFn => selectorFn(mockAppState))
    useDispatch.mockReturnValue(mockedDispatch)
    render(<GridPaginator totalPages={3}></GridPaginator>)

    const nextButton = screen.getByTestId('next')

    fireEvent.click(nextButton)
    expect(next).toHaveBeenCalledTimes(1)
  })
  test('test prev button working', () => {
    const mockedDispatch = jest.fn()
    useSelector.mockImplementation(selectorFn =>
      selectorFn({...mockAppState, productList: {currentPage: 3}}),
    )
    useDispatch.mockReturnValue(mockedDispatch)
    render(<GridPaginator totalPages={3}></GridPaginator>)

    const prevButton = screen.getByTestId('prev')

    fireEvent.click(prevButton)
    expect(prev).toHaveBeenCalledTimes(1)
  })
  test('test next button disable when on last page', () => {
    const mockedDispatch = jest.fn()
    useSelector.mockImplementation(selectorFn =>
      selectorFn({...mockAppState, productList: {currentPage: 3}}),
    )
    useDispatch.mockReturnValue(mockedDispatch)
    render(<GridPaginator totalPages={3}></GridPaginator>)
    expect(screen.queryByTestId(/next/i)).toBeNull()
  })
})
