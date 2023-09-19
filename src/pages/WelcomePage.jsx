import React from 'react'
import WelcomeButton from '../components/WelcomeButton/WelcomeButton'
import WelcomeTitles from '../components/WelcomeTitles/WelcomeTitles'
import WelcomeImage from '../components/WelcomeImg/WelcomeImage'
import { WelcomePageWrapper } from './WelcomePage.Styles'

const WelcomePage = ({ themeProvide }) => {
  return (
    <WelcomePageWrapper>
      <WelcomeImage themeProvide={themeProvide} />
      <WelcomeTitles />
      <WelcomeButton />
    </WelcomePageWrapper>
  )
}

export default WelcomePage
