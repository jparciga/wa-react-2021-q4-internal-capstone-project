async function mockFetch(source) {
  switch (source) {
    case 'featuredProducts': {
      const featuredProducts = await fetch(
        'mocks/featured-banners.json',
      ).resolve()

      return featuredProducts.result
    }
  }
}

beforeAll(() => jest.spyOn(window, 'fetch'))
beforeEach(() => window.fetch.mockImplementation(mockFetch))
