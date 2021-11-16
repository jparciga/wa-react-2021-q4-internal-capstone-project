import './CardProduct.css';

const CardProduct = (props) => {
  return (
    <div className={'product-card-container'}>
      <div className={'product-card'}>
        <div className={'image-container'}>
          <img src={props.image} alt={props.alt}/>
        </div>
        <div className={'description-container'}>
          <p>{props.name}</p>
          <p>Category: {props.category}</p>
          <p>Price: {props.price}</p>
        </div>
      </div>
    </div>
  );
}

export default CardProduct;
