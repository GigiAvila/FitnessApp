import React from 'react'
import { RoutinesOptionsWrapper, RoutineOptionContainer, RoutineOptionIcon } from './RoutinesOptions.Styles'

import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import SportsGymnasticsIcon from '@mui/icons-material/SportsGymnastics';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SportsMartialArtsIcon from '@mui/icons-material/SportsMartialArts';
const RoutinesOptions = () => {


  return (
    <RoutinesOptionsWrapper>
      <RoutineOptionContainer >
        <FitnessCenterIcon fontSize="large" />
        <p>Strength</p>
      </RoutineOptionContainer>
      <RoutineOptionContainer>
        <FavoriteIcon fontSize="large" />
        <p>Cardio</p>
      </RoutineOptionContainer>
      <RoutineOptionContainer>
        <SportsMartialArtsIcon fontSize="large" />
        <p>Martial Arts</p>
      </RoutineOptionContainer>
      <RoutineOptionContainer>
        <SportsGymnasticsIcon fontSize="large" />
        <p>Yoga</p>
      </RoutineOptionContainer>
    </RoutinesOptionsWrapper>

  )
}

export default RoutinesOptions