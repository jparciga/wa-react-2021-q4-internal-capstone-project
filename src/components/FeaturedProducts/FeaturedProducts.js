import './FeaturedProducts.css';
import CardProduct from "../CardProduct/CardProduct";
import {results as data} from '../../utils/mocks/en-us/featured-products.json';

const FeaturedProducts = () => {
  return (
    <div className={'featured-products-container'}>
      <h3>Featured Products</h3>
      <div className={'featured-products'}>
        {
          data.map(product => (
            <CardProduct
              image={product.data.mainimage.url}
              category={product.data.category.slug}
              alt={product.data.mainimage.alt}
              name={product.data.name}
              price={product.data.price}
              key={product.data.sku}
            />
          ))
        }
      </div>
    </div>

  )
}

export default FeaturedProducts;
