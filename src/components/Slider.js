import React, { useEffect, useState, useCallback } from 'react';
import bannersData from '../mocks/en-us/featured-banners.json';
import styles from './Slider.module.css';
export default function Slider() {
  const [imageSelected, setImageSelected] = useState(0);
  const length = bannersData.results.length;

  const nextSlide = useCallback(() => {
    setImageSelected(imageSelected === length - 1 ? 0 : imageSelected + 1);
  }, [length, imageSelected]);
  useEffect(() => {
    let timer = null;
    setTimeout(() => {
      nextSlide();
    }, 6000);

    return () => clearTimeout(timer);
  }, [nextSlide, imageSelected]);

  const getSlideStyles = (index) => {
    if (index === imageSelected) return [styles.active, styles.slide];
    return styles.slide;
  };
  return (
    <section className={styles.slider}>
      {bannersData.results.map(({ id, data: { main_image } }, index) => {
        return (
          <div className={getSlideStyles(index)} key={id}>
            <img className={styles.image} src={main_image.url} alt={id} />
          </div>
        );
      })}
    </section>
  );
}
