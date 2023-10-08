import React from 'react'
import {
  WelcomeVideoWrapper,
  WelcomeWrapper,
  Mask
} from './WelcomeVideo.styles'
import WelcomeVideoSource from '../../../../public/WelcomeVideo.mp4'
import './WelcomeVideo.styles'

const WelcomeVideo = ({ themeProvide }) => {
  return (
    <>
      <WelcomeWrapper>
        <WelcomeVideoWrapper autoPlay loop muted>
          <source
            src={WelcomeVideoSource}
            type='video/mp4'
            alt='GirlWorkingOUtWelcomePhoto'
          />
        </WelcomeVideoWrapper>
        <Mask themeProvide={themeProvide} />
      </WelcomeWrapper>
    </>
  )
}

export default WelcomeVideo
