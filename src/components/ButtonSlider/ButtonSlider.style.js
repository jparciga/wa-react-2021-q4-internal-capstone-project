import styled from 'styled-components'
import ButtonSliderComponent from './ButtonSlider'

const ButtonSlider = styled(ButtonSliderComponent)`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #f1f1f1;
  border: 1px solid rgba(34, 34, 34, 0.287);
  cursor: pointer;
  transform: translateY(-10%);
  place-self: ${props =>
    props.direction === 'next' ? 'center right' : 'center left'};
`

export default ButtonSlider
