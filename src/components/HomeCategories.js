import React, { useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const HomeCategories = ({ categories }) => {
  const [current, setCurrent] = useState(0);
  const length = categories.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(categories) || categories.length <= 0) {
    return null;
  }
  return (
    <section className="category">
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
      {categories.map((category, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img
                src={category.data.main_image.url}
                alt={"category " + (index + 1)}
                className="image"
              />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default HomeCategories;
