import banners from './data/featured-banners.json'
import categories from './data/product-categories.json'
import products from './data/featured-products.json'

import ImageSlider from './components/ImageSlider'
import ImageGrid from './components/ImageGrid'
import Products from './components/Products'

function Content () {
    return (
      <div className="Content">
          <ImageSlider banners={banners.results} />
          <ImageGrid categories={categories.results} />
          <Products products={products.results} />
      </div>
    );
  }


export default Content