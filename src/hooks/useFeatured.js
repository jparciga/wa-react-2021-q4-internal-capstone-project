import {useAPIData} from 'utils/hooks/useAPIData'

const useFeaturedProducts = () => {
  const queries = [
    'at(document.type, "product")',
    'at(document.tags, ["Featured"])',
  ]
  const pageSize = 16
  const mapFunction = ({
    id,
    data: {
      name,
      mainimage: {url},
      category: {slug},
      price,
      stock,
    },
  }) => {
    return {id, url, name, category: slug, price, stock}
  }

  const [productCategories] = useAPIData({queries, pageSize}, mapFunction)
  return [productCategories]
}

const useFeaturedBanners = () => {
  const queries = ['at(document.type, "banner")']
  const pageSize = 5
  const mapFunction = ({
    id,
    data: {
      main_image: {url},
    },
  }) => {
    return {id, url}
  }

  const [featuredBanners] = useAPIData({queries, pageSize}, mapFunction)
  return [featuredBanners]
}

const useFeatured = () => {
  const [productCategories] = useFeaturedProducts()
  const [featuredBanners] = useFeaturedBanners()

  return [productCategories, featuredBanners]
}

export default useFeatured
