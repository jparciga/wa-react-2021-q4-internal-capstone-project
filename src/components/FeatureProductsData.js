import featureProductsData from '../mocks/en-us/featured-products.json'

export const FeatureProductsData = featureProductsData.results.map(result => (
  {
    text: 'Feature Products Grid',
    image: result.data.mainimage.url,
    width: result.data.mainimage.dimensions.width,
    height: result.data.mainimage.dimensions.height,
    alt: result.data.mainimage.alt,
    name: result.data.name,
    price: result.data.price,
    category: result.data.category.slug
  }
));