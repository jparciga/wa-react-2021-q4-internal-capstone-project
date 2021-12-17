import styled from 'styled-components'
import PropTypes from 'prop-types'

const ImageSliderComponent = ({className, key, url, index}) => {
  return (
    <div key={key} className={className}>
      <img key={key + index} src={url} alt="none"></img>
    </div>
  )
}

const ImageSlider = styled(ImageSliderComponent)`
    opacity: 1;
    transition: opacity ease-in-out 0.4s; 
    opacity: ${props =>
      props.slideIndex === props.index + 1 ? '1; ' : '0;'}    
    }
`

ImageSliderComponent.propTypes = {
  className: PropTypes.string,
  key: PropTypes.string,
  url: PropTypes.string,
  index: PropTypes.number,
}

export default ImageSlider
