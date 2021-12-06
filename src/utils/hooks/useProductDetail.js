import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useProductApi } from './useProductApi';

const useProductDetail = () => {
  const { productId } = useParams();
  const response = useProductApi(productId);
  const [product, setProduct] = useState([]);
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (!response.isLoading) {
      setProduct(response?.data?.results[0]);
      setImages(
        response?.data?.results[0].data?.images.map(({ image }) => ({
          src: image.url,
        }))
      );
    }
  }, [response]);

  return [product, images];
};
export default useProductDetail;
