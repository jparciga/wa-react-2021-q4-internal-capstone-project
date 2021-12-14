import React, {useState} from "react";
import Slider from "components/Slider/Slider";
import useProductById from "../../hooks/useProductById";

import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { shoppingCartActionCreators } from "state/index";


const ProductDetailComponent = ({ className }) => {
  const {productId} = useParams();
  const [{parsedData, isLoading}] = useProductById([productId]);

  const dispatch = useDispatch();
  const { addToCart } = bindActionCreators(shoppingCartActionCreators, dispatch);

  const [quantity, setQuantity] = useState(0);

  const handleOnClick = () => {
    addToCart({id, name, quantity, price, stock}); 
  }

  if(isLoading || parsedData.length === 0)
    return (<h1>Loading...</h1>);

  const {
     id = '',
     name = '',
     price = '',
     sku = '',
     description = '',
     category = [],
     tags = [],
     specs = [],
     images = [],
     stock = ''
  } = parsedData[0];

  const mappedImages = images.map(({image: { url }}, i) => { return {id: id+i, url}} )

  return (
    <div className={className}>
      <div className="product-detail-gallery">
        <h3>{name}</h3>
        <Slider data={{ parsedData: mappedImages, isLoading }} />
      </div>
      <div className="product-detail-data">
        <label>Price: </label>
        <label>{`$${price}`}</label>
        <label>SKU: </label>
        <label>{sku}</label>
        <label>Category: </label>
        <label>{category}</label>
        <label>In Stock: </label>
        <label>{stock}</label>
        <label htmlFor="quantity">Qty</label>
        <input id="quantity" name="addToCart"
          value={quantity} 
          onInput={e => setQuantity(e.target.value)}
          placeholder="1"
        ></input>
        <input className="addToCart" 
               type="submit" 
               value="Add to Cart" 
               disabled={(stock === 0) ? true : false} 
               onClick={handleOnClick}/>
      </div>
      <div className="product-detail-tags">
        <h5>Tags</h5>
        <ul>
          {tags.map((tag, i) => {
            return <li key={`${tag}+${i}`}>{tag}</li>;
          })}
        </ul>
      </div>
      <div className="product-detail-description">
        <h5>Description</h5>
        <p>
          {description}
        </p>
      </div>
      <div className="product-detail-specs">
        <ul>
          {specs.map(({ spec_name, spec_value }, i) => {
            return (
              <li
                key={`${spec_name}+${i}`}
              >{`${spec_name} --- ${spec_value}`}</li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

ProductDetailComponent.propTypes = {
  className: PropTypes.string
};

export default ProductDetailComponent;
