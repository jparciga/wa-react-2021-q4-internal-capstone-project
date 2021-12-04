import './CardProduct.css';

const CardProduct = ({image, alt, name, category, price}) => {
  return (
    <div className='product-card-container'>
      <div className='product-card'>
        <div className='image-container'>
          <img src={image} alt={alt}/>
        </div>
        <div className='description-container'>
          <p>{name}</p>
          <p>Category: {category}</p>
          <p>Price: {price}</p>
        </div>
      </div>
    </div>
  );
}

export default CardProduct;
