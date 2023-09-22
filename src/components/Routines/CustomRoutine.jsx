import React from 'react'
import MyRoutineImage from '../../../public/grey2.png'
import { RoutineCustomOptionContainer } from './CustomRoutine.Styles';
import { useTheme } from '@emotion/react';


const CustomRoutine = ({ handleTypeRoutine }) => {

  const theme = useTheme();

  return (
    <RoutineCustomOptionContainer
      onClick={() => handleTypeRoutine('Custom')}
      style={{ backgroundImage: `url(${MyRoutineImage})` }}>
      <h5
        style={{
          background: theme.palette.ImpButtonBgColor,
          color: theme.palette.ImpButtonColorText
        }}>Or create your own routine</h5>
    </RoutineCustomOptionContainer>
  )
}

export default CustomRoutine