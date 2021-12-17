import Slider from 'components/Slider/Slider.component'
import Carousel from 'components/Carousel/Carousel.style.js'
import Grid from 'components/Grid/Grid.styles'
import {render, screen} from '@testing-library/react'

describe('home page test suite', () => {
  test('test slider loading', () => {
    render(<Slider data={{parsedData: [], isLoading: false}} />)
    const sliderElement = screen.getByTestId('homeTest-slider')
    expect(sliderElement).toBeInTheDocument()
  })
  test('test carousel loading', () => {
    render(<Carousel data={{parsedData: [], isLoading: false}} />)
    const carouselElement = screen.getByTestId('homeTest-carousel')
    expect(carouselElement).toBeInTheDocument()
  })
  test('test grid loading', () => {
    render(<Grid data={{parsedData: [], isLoading: false}} />)
    const gridElement = screen.getByTestId('test-grid')
    expect(gridElement).toBeInTheDocument()
  })
})
