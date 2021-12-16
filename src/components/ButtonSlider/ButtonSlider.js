import React from 'react'
import leftArrow from 'images/left_arrow.svg'
import rightArrow from 'images/right_arrow.svg'
import PropTypes from 'prop-types'

const ButtonSliderComponent = ({className, moveSlide, direction}) => {
  return (
    <button onClick={moveSlide} className={className}>
      <img
        src={direction === 'next' ? rightArrow : leftArrow}
        alt="rightArrow"
        style={{width: '25px', height: '25px', pointerEvents: 'none'}}
      />
    </button>
  )
}

ButtonSliderComponent.propTypes = {
  className: PropTypes.string,
  moveSlide: PropTypes.func,
  direction: PropTypes.string,
}

export default ButtonSliderComponent
