import { useState } from "react";
import { SwiperSlide } from "swiper/react/swiper-react.js";
import { GalleryContainer, SwiperMain, SwiperSelector } from "./Gallery.styled";
import "swiper/swiper.min.css";
import "swiper/modules/navigation/navigation.min.css";
import "swiper/modules/thumbs/thumbs.min.css";

import SwiperCore, { FreeMode, Navigation, Thumbs } from "swiper";
SwiperCore.use([FreeMode, Navigation, Thumbs]);

export default function Gallery({ images }) {
  const slides = images.map(({ alt, image: { url } }, index) => (
    <SwiperSlide key={index}>
      <img src={url} alt={alt} />
    </SwiperSlide>
  ));

  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <GalleryContainer>
      <SwiperMain
        spaceBetween={2}
        loop
        navigation
        thumbs={{ swiper: thumbsSwiper }}
      >
        {slides}
      </SwiperMain>
      <SwiperSelector
        spaceBetween={2}
        onSwiper={setThumbsSwiper}
        loop
        slidesPerView={4}
        freeMode
        watchSlidesProgress
      >
        {slides}
      </SwiperSelector>
    </GalleryContainer>
  );
}
