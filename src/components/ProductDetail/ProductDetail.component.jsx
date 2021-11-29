import React, { useState } from "react";
import styled from 'styled-components';
import Slider from 'components/Slider/Slider'

const ProductDetailComponent = ({ className, data }) => {
  return (
    <div className={className}>
      <div className="product-detail-gallery">
        <Slider data={{}} />
      </div>
      <div className="product-detail-data">
          <label>Price</label>
          <label>SKU</label>
          <label>Category</label>
          <label htmlFor="quantity">Qty</label>
          <input id="quantity" name="addToCart"></input>
          <input type="submit" value="Add to Cart"></input>
      </div>
     <div className="product-detail-tags">
          <label>Tags</label>
          <ul>
              <li>Tag1</li>
              <li>Tag1</li>
              <li>Tag1</li>
              <li>Tag1</li>
          </ul>
      </div>
      <div className="product-detail-description">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit earum delectus accusamus inventore autem dolorem alias id illum obcaecati nostrum ducimus ut corrupti quae enim ipsam molestias iste, perferendis deserunt!</p>
      </div>
      <div className="product-detail-specs">
          <ul>
              <li></li>
          </ul>
      </div> 
    </div>
  );
};

const ProductDetail = styled(ProductDetailComponent)`
    display: grid;
    grid-template-columns: 4fr 2fr;
    grid-template-rows: 3fr 1fr 1fr;
    gap: 3em;

    div {
        border: 1px solid black;
    }

    .product-detail-tags, 
    .product-detail-description,
    .product-detail-specs {
        grid-column: 1/3;
    }
`;

export default ProductDetail;

