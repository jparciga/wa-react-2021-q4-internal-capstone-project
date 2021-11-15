import React, {useState} from 'react';
import {AiFillLeftCircle, AiFillRightCircle} from 'react-icons/ai'

const sliderStyle = {
  margin: "1%"
}

const ImageSlider = ({banners}) => {
    const [current, setCurrent] = useState(0)
    const lenght = banners.length

    if (!Array.isArray(banners) || lenght <= 0) {
      return null;
    }

    const nextSlide = () => {
      setCurrent(current === lenght - 1 ? 0 : current + 1)
    }
    const prevSlide = () => {
      setCurrent(current === 0 ? lenght - 1 : current - 1)
    }

    const bannerImages = banners.map((banner, index) => 
      <div className={index === current ? 'slide active' : 'slide'} key={index}>
        {index === current && (
          <img src={banner.data.main_image.url} alt={banner.data.main_image.alt} className='image'/>
        )}
      </div>
    );

    return (
    <div className="slider" style={sliderStyle}>
      <AiFillLeftCircle className="left-arrow" onClick={prevSlide}/>
      <AiFillRightCircle className="right-arrow" onClick={nextSlide}/>
      {bannerImages} 
    </div>
    );
}

export default ImageSlider;
