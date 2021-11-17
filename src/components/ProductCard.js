import React from 'react';
import {
  ProductPrice,
  ProductButton,
  ProductCardItem,
  ProductTitle,
} from './ProductCard.styles';

export default function ProductCard({ id, name, price, mainimage, category }) {
  return (
    <ProductCardItem>
      <ProductTitle>{name}</ProductTitle>
      <img style={{ width: '100%' }} src={mainimage.url} alt={name} />
      <div> {category.slug} </div>
      <ProductPrice> ${price} </ProductPrice>
      <ProductButton> Add to Cart </ProductButton>
    </ProductCardItem>
  );
}
