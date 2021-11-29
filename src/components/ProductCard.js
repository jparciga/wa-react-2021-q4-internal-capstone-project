import React from 'react';
import { Link } from 'react-router-dom';
import {
  ProductPrice,
  ProductButton,
  ProductCardItem,
  ProductTitle,
} from './ProductCard.styles';

export default function ProductCard({ id, name, price, mainimage, category }) {
  return (
    <ProductCardItem>
      <Link to={`/products/${id}`}>
        <ProductTitle>{name}</ProductTitle>
        <img style={{ width: '100%' }} src={mainimage.url} alt={name} />
        <div> {category.slug} </div>
        <ProductPrice> ${price} </ProductPrice>
      </Link>
      <ProductButton> Add to Cart </ProductButton>
    </ProductCardItem>
  );
}
