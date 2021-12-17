export async function mockFetch(source) {
  switch (source) {
    case 'featuredProducts': {
      const featuredProducts = fetch('mocks/featured-banners.json').resolve()

      return featuredProducts.results
    }
  }
}
