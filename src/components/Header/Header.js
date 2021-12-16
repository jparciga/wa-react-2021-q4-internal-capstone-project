import React from 'react'
import img from './image.png'

import styled from 'styled-components'

const HeaderTag = styled.header`
  grid-column: 1/4;
  align-items: center;
  justify-items: center;
`

const Logo = styled.img`
  padding: 2em;
  width: 5%;
  heigth: 5%;
`

const Header = () => {
  return (
    <HeaderTag>
      <Logo src={img} alt="logo" />
    </HeaderTag>
  )
}

export default Header
