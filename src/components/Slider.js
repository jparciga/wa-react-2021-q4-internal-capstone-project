import styles from './Slider.module.css';
import useBanners from '../utils/hooks/useBanners';
export default function Slider() {
  const [imageSelected, featuredBanners] = useBanners();

  const getSlideStyles = (index) => {
    if (index === imageSelected) return [styles.active, styles.slide];
    return styles.slide;
  };

  return (
    <section className={styles.slider}>
      {featuredBanners.data?.results &&
        featuredBanners.data.results.map(
          ({ id, data: { main_image } }, index) => {
            return (
              <div className={getSlideStyles(index)} key={id}>
                <img className={styles.image} src={main_image.url} alt={id} />
              </div>
            );
          }
        )}
    </section>
  );
}
