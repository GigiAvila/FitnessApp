import React from 'react'
import { WELCOME_BUTTON_TEXT } from '../../data/WelcomeTexts'
import { WelcomeButtonContainer, StyledLink } from './WelcomeButton.Styles'
import { useTheme } from '@emotion/react';


const WelcomeButton = () => {
  const theme = useTheme();

  return (
    <WelcomeButtonContainer>
      <StyledLink to="home" style={{
        background: theme.palette.ImpButtonBgColor,
        color: theme.palette.ImpButtonColorText
      }}>{WELCOME_BUTTON_TEXT}</StyledLink>
    </WelcomeButtonContainer>

  )
}

export default WelcomeButton