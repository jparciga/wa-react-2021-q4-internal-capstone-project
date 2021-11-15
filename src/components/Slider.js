import React, { useEffect, useState, useCallback } from 'react';
import featuresData from '../mocks/en-us/featured-banners.json';
import styles from './Slider.module.css';
export default function Slider() {
  const [imageSelected, setImageSelected] = useState(0);
  const length = featuresData.results.length;

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
  return (
    <section className={styles.slider}>
      {featuresData.results.map((res, index) => {
        return (
          <div
            className={
              index === imageSelected
                ? (styles.slide, styles.active)
                : styles.slide
            }
            id={res.id}
            key={res.id}
          >
            <img
              className={styles.image}
              src={res.data.main_image.url}
              alt={res.id}
            />
          </div>
        );
      })}
    </section>
  );
}
