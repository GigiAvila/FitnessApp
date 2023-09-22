import React from 'react'
import { RoutinesDefaultOptionsData } from '../../data/RoutinesDefaultOptionsData';
import { useTheme } from '@emotion/react';
import { RoutineOptionContainer, RoutineOptionTitles, Level } from './RoutinesOptions.Styles';


const DefaultRoutines = ({ routineData, handleTypeRoutine }) => {

  const theme = useTheme();


  return (

    <>
      {RoutinesDefaultOptionsData.map((RoutinesOptionData, index) => {
        return (
          <RoutineOptionContainer
            key={index}
            onClick={() => handleTypeRoutine(RoutinesOptionData.type)}
            style={{ backgroundImage: `url(${RoutinesOptionData.image})` }}
          >

            <RoutineOptionTitles>
              <h5 style={{
                background: theme.palette.ImpButtonBgColor,
                color: theme.palette.ImpButtonColorText
              }}>{RoutinesOptionData.title}</h5>
              <p style={{
                background: theme.palette.ImpButtonBgColor,
                color: theme.palette.ImpButtonColorText
              }}>Workouts for  <Level>{routineData.level ? routineData.level : 'Beginner'}</Level> </p>
            </RoutineOptionTitles>

          </RoutineOptionContainer>
        );
      })}

    </>
  )
}

export default DefaultRoutines