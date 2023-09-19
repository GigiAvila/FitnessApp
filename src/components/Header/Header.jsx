import React from 'react'
import { HeaderWrapper, Title } from './Header.Styles'

const Header = ({ themeProvide }) => {
  return (
    <HeaderWrapper>
      <Title style={{ color: themeProvide.palette.titleColor }}>Gym Tracker</Title>
    </HeaderWrapper>
  )
}

export default Header