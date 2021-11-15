import featuredBannersData from '../mocks/en-us/featured-banners.json'

export const FeatureBannersData = featuredBannersData.results.map(result => (
  {
    text: 'Feature Banners Slider',
    image: result.data.main_image.url,
    width: result.data.main_image.dimensions.width,
    height: result.data.main_image.dimensions.height,
    alt: result.data.main_image.alt,
  }
));