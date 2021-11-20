import React, { useState } from "react";

const HomeSlider = ({ banners }) => {
  const [current, setCurrent] = useState(0);
  const length = banners.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  setTimeout(() => {
    var slider = document.getElementById("home-carrousel");

    if (!slider) {
      return;
    }
    nextSlide();
  }, 20000);

  return (
    <section className="Slider" id="home-carrousel">
      {banners.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <div>
                <img
                  src={slide.data.main_image.url}
                  alt={"banner " + (index + 1)}
                  className="Banner-image"
                />
                <div className="Banner-title">
                  {slide.data.title}
                </div>
                <div className="Banner-description">
                  {slide.data.description[0].text}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default HomeSlider;
