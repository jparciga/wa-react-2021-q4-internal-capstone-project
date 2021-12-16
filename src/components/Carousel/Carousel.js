import React, {useState, useEffect} from 'react'
import ButtonSlider from 'components/ButtonSlider/ButtonSlider.style'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

const CarouselComponent = ({className, data: {parsedData = [], isLoading}}) => {
  const [xPos, setXpos] = useState(0)
  const [style, setStyle] = useState({
    transform: `translateX(0px)`,
    transitionDuration: '0.5s',
  })

  useEffect(() => {
    setStyle(() => {
      return {transform: `translateX(${xPos}px)`, transitionDuration: '0.5s'}
    })
  }, [xPos])

  if (isLoading) return <h1>Loading...</h1>

  return (
    <div className={className}>
      <div className="track" style={style}>
        {parsedData.map(({id, name, url}) => {
          return (
            <div key={id} id={id} className="card-container">
              <Link to={`/products?category=${id}`}>
                <img src={url} alt="haha"></img>
              </Link>
            </div>
          )
        })}
      </div>
      <ButtonSlider
        moveSlide={() => setXpos(x => x - (xPos > -600 ? 330 : 0))}
        direction="prev"
      ></ButtonSlider>
      <ButtonSlider
        moveSlide={() => setXpos(x => x + (xPos < 600 ? 330 : 0))}
        direction="next"
      ></ButtonSlider>
    </div>
  )
}

PropTypes.propTypes = {
  className: PropTypes.string,
  data: PropTypes.shape({
    parsedData: PropTypes.array,
    isLoading: PropTypes.bool,
  }),
}

export default CarouselComponent
