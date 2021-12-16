import {render, screen} from '@testing-library/react'
//import App from './App';
import Logo from './App'

test('renders logo', () => {
  render(<Logo />)
  const displayedImage = document.querySelector('img')
  expect(displayedImage.src).toContain('image')
})
