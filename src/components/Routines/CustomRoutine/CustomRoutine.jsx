import React from 'react'
import MyRoutineImage from '../../../../public/grey1.jpg'
import {
  RoutineCustomOptionContainer,
  BackgroundImage
} from './CustomRoutine.Styles'
import { useTheme } from '@emotion/react'

const CustomRoutine = ({ handleTypeRoutine }) => {
  const theme = useTheme()

  return (
    <RoutineCustomOptionContainer onClick={() => handleTypeRoutine('Custom')}>
      <>
        <BackgroundImage
          style={{ backgroundImage: `url(${MyRoutineImage})` }}
        ></BackgroundImage>
        <h5
          style={{
            background: theme.palette.ImpButtonBgColor,
            color: theme.palette.ImpButtonColorText
          }}
        >
          Or create your own routine
        </h5>
      </>
    </RoutineCustomOptionContainer>
  )
}

export default CustomRoutine
