import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useProductApi } from '../utils/hooks/useProductApi';

import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';
import {
  ProductDetailPageContent,
  ProductName,
  ProductPrice,
  ProductCarousel,
  ProductDescription,
  ProductActions,
  InStock,
  ProductTags,
  ProductSKU,
} from './ProductDetailPage.style';
import { ProductButton } from '../components/ProductCard.styles';
export default function ProductDetailPage() {
  const { productId } = useParams();
  const response = useProductApi(productId);
  const [images, setImages] = useState('');
  useEffect(() => {
    if (!response.isLoading) {
      console.log(response.data?.results[0]);
      setImages(
        response.data?.results[0].data?.images.map(({ image }) => ({
          src: image.url,
        }))
      );
    }
  }, [response]);

  return (
    <ProductDetailPageContent>
      <ProductCarousel style={{ width: '90%' }}>
        {images && (
          <Carousel
            hasThumbnailsAtMax={false}
            isMaximized={false}
            hasSizeButton={false}
            hasSizeButtonAtMax={false}
            hasIndexBoard={false}
            hasMediaButton={false}
            style={{ width: '900ox' }}
            images={images}
          />
        )}
      </ProductCarousel>

      <div>
        <ProductName>
          {response.data.results && response.data.results[0].data.name}
        </ProductName>
        <ProductPrice>
          {`Price: $`}
          {response.data.results &&
            response.data.results[0].data.price.toFixed(2)}
        </ProductPrice>
        <ProductSKU>
          sku {response.data.results && response.data.results[0].data.sku}
        </ProductSKU>
        <div>
          category{' '}
          {response.data.results && response.data.results[0].data.category.slug}
        </div>
        <ProductDescription>
          {response.data.results &&
            response.data.results[0].data.description[0].text}
        </ProductDescription>
        <div>
          {response.data.results &&
            response.data.results[0].tags.map((tag, index) => {
              return <ProductTags key={index}> #{tag}</ProductTags>;
            })}
        </div>
      </div>

      <ProductActions>
        <InStock>In Stock </InStock>
        <ProductButton> Add to Cart</ProductButton>
      </ProductActions>
    </ProductDetailPageContent>
  );
}
