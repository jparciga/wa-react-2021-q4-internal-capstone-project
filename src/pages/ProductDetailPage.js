import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useProductApi } from '../utils/hooks/useProductApi';

import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';

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
    <>
      <div>
        name {response.data.results && response.data.results[0].data.name}
      </div>
      <div>
        price {response.data.results && response.data.results[0].data.price}
      </div>
      <div>
        sku {response.data.results && response.data.results[0].data.sku}
      </div>
      <div>
        category{' '}
        {response.data.results && response.data.results[0].data.category.slug}
      </div>
      <div>
        tags:{' '}
        {response.data.results &&
          response.data.results[0].tags.map((tag) => '#' + tag)}
      </div>

      <div style={{ width: '500px' }}>
        {'product detail'} {productId}
        {images && <Carousel style={{ width: '900ox' }} images={images} />}
      </div>
    </>
  );
}
