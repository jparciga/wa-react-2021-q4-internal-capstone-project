import React from "react";
import styled from "styled-components";
import Slider from "components/Slider/Slider";
import useProductById from "../../hooks/useProductById";

import { useParams } from 'react-router-dom';

const ProductDetailComponent = ({ className }) => {
  const {productId} = useParams();
  const [{parsedData, isLoading}] = useProductById(productId);


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
        <label htmlFor="quantity">Qty</label>
        <input id="quantity" name="addToCart"></input>
        <input className="addToCart" type="submit" value="Add to Cart"></input>
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

export default ProductDetailComponent;
