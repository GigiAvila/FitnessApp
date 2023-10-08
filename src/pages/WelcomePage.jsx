import React from 'react'
import WelcomeButton from '../components/Welcome/WelcomeButton/WelcomeButton'
import WelcomeTitles from '../components/Welcome/WelcomeTitles/WelcomeTitles'
import WelcomeVideo from '../components/Welcome/WelcomeVideo/WelcomeVideo'
import { WelcomePageWrapper } from './WelcomePage.Styles'
import './WelcomePage.Styles'

const WelcomePage = ({ themeProvide }) => {
  return (
    <WelcomePageWrapper>
      <WelcomeVideo themeProvide={themeProvide} />
      <WelcomeTitles />
      <WelcomeButton />
    </WelcomePageWrapper>
  )
}

export default WelcomePage
