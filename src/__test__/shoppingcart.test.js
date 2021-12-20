import {render, screen, within} from '@testing-library/react'
import {useSelector, useDispatch} from 'react-redux'
import {bindActionCreators} from 'redux'
import ShoppingCart from 'components/ShoppingCart/ShoppingCart.styles'
//import useProductById from 'hooks/useProductById'

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}))

jest.mock('redux', () => ({
  ...jest.requireActual('redux'),
  bindActionCreators: jest.fn(),
}))

//-------- EXPERIMENTAL
const spyReturns = returnValue => jest.fn(() => returnValue)

// jest.mock('hooks/useProductById', () => ({
//   __esModule: true,
//   default: () => mockReturnUseProductById,
// }))

//-------- EXPERIMENTAL

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
  shoppingCart: {
    amountItems: 0,
    items: [],
  },
}

const mockShoppingCartItems = [
  {
    id: 'YWL8XBIAAC0AzuPZ',
    name: 'Tallulah Sofa Gray',
    price: 1834.57,
    url: 'https://images.prismic.io/wizeline-academy/fa394f7d-4d89-4c90-86b3-832de74928fa_1.webp?auto=compress,format',
    stock: 4,
    quantity: 1,
  },
  {
    id: 'YWL8XBIAAC0AzuPY',
    name: 'Tallulah Sofa Black',
    price: 2000,
    url: 'https://images.prismic.io/wizeline-academy/fa394f7d-4d89-4c90-86b3-832de74928fa_1.webp?auto=compress,format',
    stock: 4,
    quantity: 1,
  },
]

const mockReturnUseProductById = [
  {
    isLoading: false,
    page: 1,
    totalPages: 1,
    parsedData: mockShoppingCartItems,
  },
  '1',
  jest.fn(),
]

const mockReturnUseProductByIdEmpty = [
  {
    isLoading: false,
    page: 1,
    totalPages: 1,
    parsedData: [],
  },
  '1',
  jest.fn(),
]

describe('shoppingCart test suite', () => {
  beforeEach(() => {
    jest.resetModules()

    useSelector.mockImplementation(callback => {
      return callback(mockAppState)
    })

    bindActionCreators.mockImplementation(() => {
      return {
        // eslint-disable-next-line no-unused-vars
        setCheckoutSummary: jest.fn(_x => {}),
      }
    })
  })

  const setup = mockOverrides => {
    const mockedFunctions = {
      useProductById: spyReturns(mockReturnUseProductByIdEmpty),
      ...mockOverrides,
    }
    jest.doMock('hooks/useProductById', () => mockedFunctions)
    return {
      mockedModule: require('hooks/useProductById'),
    }
  }

  afterEach(() => {
    useSelector.mockClear()
  })
  test('test validate empty state is displayed', () => {
    //Arrange
    const mockedDispatch = jest.fn()
    useSelector.mockImplementation(selectorFn => selectorFn(mockAppState))
    useDispatch.mockReturnValue(mockedDispatch)

    setup({useProductById: spyReturns(mockReturnUseProductByIdEmpty)})

    //Act
    render(<ShoppingCart />)
    const shoppingCartList = screen.getByTestId('shopping-cart-table')
    //Assert
    expect(shoppingCartList).toBeDefined()
    expect(
      within(shoppingCartList).queryAllByTestId('shopping-cart-card').length,
    ).toEqual(0)
  })
  test('test validate list of products is shown when there are items in the cart', () => {
    //Arrange
    const mockedDispatch = jest.fn()
    useDispatch.mockReturnValue(mockedDispatch)
    const mockShoppingCartItems = [
      {
        id: 'YWL8XBIAAC0AzuPZ',
        name: 'Tallulah Sofa Gray',
        price: 1834.57,
        url: 'https://images.prismic.io/wizeline-academy/fa394f7d-4d89-4c90-86b3-832de74928fa_1.webp?auto=compress,format',
        stock: 4,
      },
    ]
    useSelector.mockImplementation(selectorFn =>
      selectorFn({
        ...mockAppState,
        shoppingCart: {amountItems: 1, items: mockShoppingCartItems},
      }),
    )
    setup({useProductById: spyReturns(mockReturnUseProductById)})
    //Act
    render(<ShoppingCart />)
    const shoppingCartList = screen.getByTestId('shopping-cart-table')
    //Assert
    expect(shoppingCartList).toBeDefined()
    expect(
      within(shoppingCartList).queryAllByTestId('shopping-cart-card').length,
    ).toBeGreaterThan(0)
  })
  test('test validate cart total lable displays the sum of the subtotals of all items', () => {
    const mockedDispatch = jest.fn()
    useDispatch.mockReturnValue(mockedDispatch)

    useSelector.mockImplementation(selectorFn =>
      selectorFn({
        ...mockAppState,
        shoppingCart: {amountItems: 2, items: mockShoppingCartItems},
      }),
    )
    const expectedTotal = 3834.57
    setup({
      useProductById: spyReturns(mockReturnUseProductById),
    })

    //Act
    render(<ShoppingCart />)
    //view.debug()

    //Assert
    //const shoppingCartTotal = screen.getByTestId('shopping-cart-total')
    expect(screen.getByText(`Total: $${expectedTotal}`)).toBeInTheDocument()
  })
  test('test validate can update quantity of items for a particular product in the cart', () => {
    //Arrange
    //Act
    //Assert
  })
  test('test validate remove a product from the cart after clicking on remove from cart icon', () => {
    //Arrange
    //Act
    //Assert
  })
})
