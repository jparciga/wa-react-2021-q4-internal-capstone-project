import { useEffect, useRef, useState, useCallback } from 'react';
import { useFeaturedBanners } from './useFeaturedBanners';
const useBanners = () => {
  const isMounted = useRef(null);
  const [imageSelected, setImageSelected] = useState(0);
  const featuredBanners = useFeaturedBanners();
  const [lengthBanners, setLengthBanners] = useState(0);

  const nextSlide = useCallback(() => {
    setImageSelected(
      imageSelected === lengthBanners - 1 ? 0 : imageSelected + 1
    );
  }, [imageSelected, lengthBanners]);

  useEffect(() => {
    isMounted.current = true;
    let timer = null;
    if (isMounted.current) {
      timer = setTimeout(() => {
        nextSlide();
      }, 6000);
    }

    return () => {
      isMounted.current = false;
      clearTimeout(timer);
    };
  }, [nextSlide, imageSelected]);
  useEffect(() => {
    setLengthBanners(featuredBanners.data?.results?.length);
  }, [featuredBanners]);

  return [imageSelected, featuredBanners];
};

export default useBanners;
