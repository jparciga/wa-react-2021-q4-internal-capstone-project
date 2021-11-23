import './ImageSlider.css';
import {results as data} from '../../utils/mocks/en-us/featured-banners.json';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const ImageSlider = () => {
  console.log(data);
  return (
    <section className='slider'>
      <FaArrowAltCircleLeft className='left-arrow'  />
      <FaArrowAltCircleRight className='right-arrow'  />
      {
        data.map((slide, index) => {
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
