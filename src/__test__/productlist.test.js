import {render, screen} from '@testing-library/react'
import Slider from 'components/Slider/Slider.component'
import GridPaginator from 'components/GridPaginator/GridPaginator.component'
import {useSelector, useDispatch} from 'react-redux'

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}))

const sidebarDataSource = [
  {
    id: 'YWHx-xIAAC0Ayj7i',
    uid: null,
    url: null,
    type: 'category',
    href: 'https://wizeline-academy.cdn.prismic.io/api/v2/documents/search?ref=YWYpRBIAACwA3RZ5&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22YWHx-xIAAC0Ayj7i%22%29+%5D%5D',
    tags: [],
    first_publication_date: '2021-10-09T23:33:05+0000',
    last_publication_date: '2021-10-12T23:45:23+0000',
    slugs: ['bed--bath'],
    linked_documents: [],
    lang: 'en-us',
    alternate_languages: [
      {
        id: 'YWHx7xIAACsAyj6p',
        type: 'category',
        lang: 'es-mx',
      },
    ],
    data: {
      name: 'Bed & Bath',
      main_image: {
        dimensions: {
          width: 621,
          height: 398,
        },
        alt: 'Bath',
        copyright: null,
        url: 'https://images.prismic.io/wizeline-academy/5df875b5-3e43-4cf0-97b9-06ed73ed6d9b_sanibell-bv-530lZQXMKGw-unsplash-web+%281%29.jpg?auto=compress,format&rect=0,24,1920,1231&w=621&h=398',
      },
    },
  },
  {
    id: 'YWHy0xIAACoAykKm',
    uid: null,
    url: null,
    type: 'category',
    href: 'https://wizeline-academy.cdn.prismic.io/api/v2/documents/search?ref=YWYpRBIAACwA3RZ5&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22YWHy0xIAACoAykKm%22%29+%5D%5D',
    tags: [],
    first_publication_date: '2021-10-09T23:32:20+0000',
    last_publication_date: '2021-10-13T00:04:48+0000',
    slugs: ['lighting'],
    linked_documents: [],
    lang: 'en-us',
    alternate_languages: [
      {
        id: 'YWHytRIAACoAykIk',
        type: 'category',
        lang: 'es-mx',
      },
    ],
    data: {
      name: 'Lighting',
      main_image: {
        dimensions: {
          width: 621,
          height: 398,
        },
        alt: 'Lighting',
        copyright: null,
        url: 'https://images.prismic.io/wizeline-academy/fdc4897a-c224-450f-9378-a39d2afaa7f6_zero-take-uLcBn2TsavU-unsplash-web+%281%29.jpg?auto=compress,format&rect=1,0,1919,1230&w=621&h=398',
      },
    },
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
  })
  afterEach(() => {
    useSelector.mockClear()
  })

  test('test product category sidebar', () => {
    const mockData = {data: {parsedData: sidebarDataSource, isLoading: false}}
    render(<Slider data={mockData}></Slider>)
    const haha = screen.getAllByRole('img')
    expect(haha.length).toEqual(2)
  })
  test('test category filtering', () => {})
  test('test pagination controls', () => {})
  test('test prev button disabled when on first page', () => {
    const mockedDispatch = jest.fn()
    useSelector.mockImplementation(selectorFn => selectorFn(mockAppState))
    useDispatch.mockReturnValue(mockedDispatch)
    render(<GridPaginator totalPages={3}></GridPaginator>)
    expect(screen.queryByTestId(/prev/i)).toBeNull()
  })
  test('test next button working', () => {})
  test('test prev button working', () => {})
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
