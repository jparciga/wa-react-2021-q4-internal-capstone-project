import './ImageSlider.css';

import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const ImageSlider = (props) => {
  return (
    <section className='slider'>
      <FaArrowAltCircleLeft className='left-arrow'  />
      <FaArrowAltCircleRight className='right-arrow'  />
      {
        props.featuredBanners.map((slide, index) => {
          return (
            <div
              className={index === 0 ? 'slide active' : 'slide'}
              key={index}
            >
              {index === 0 && (
                <img src={slide.data.main_image.url} alt='test' className='image' />
              )}
            </div>
          )
        })
      }
    </section>
  )
};

export default ImageSlider;
