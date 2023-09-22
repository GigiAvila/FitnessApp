import React from 'react'
import WelcomeButton from '../components/WelcomeButton/WelcomeButton'
import WelcomeTitles from '../components/WelcomeTitles/WelcomeTitles'
import WelcomeVideo from '../components/WelcomeVideo/WelcomeVideo'
import { WelcomePageWrapper } from './WelcomePage.Styles'

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
