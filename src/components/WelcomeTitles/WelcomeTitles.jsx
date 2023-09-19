import React from 'react'
import { WELCOME_TITLE, WELCOME_SUBTITLE } from '../../data/WelcomeTexts'
import { WelcomeTitleContainer, WelcomeTitle, WelcomeSubtitle } from './Styles'

const WelcomeTitles = () => {
  return (
    <WelcomeTitleContainer>
      <WelcomeTitle>{WELCOME_TITLE}</WelcomeTitle>
      <WelcomeSubtitle>{WELCOME_SUBTITLE}</WelcomeSubtitle>
    </WelcomeTitleContainer>
  )
}

export default WelcomeTitles